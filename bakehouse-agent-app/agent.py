import os, json, uuid, asyncio, logging
import mlflow
from langchain_core.messages import SystemMessage
from langchain_core.tools import tool
from langchain_core.runnables import RunnableConfig
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.prebuilt import ToolNode, InjectedStore
from langgraph.store.base import BaseStore
from databricks_langchain import ChatDatabricks, AsyncCheckpointSaver, AsyncDatabricksStore
from typing import Annotated

logger = logging.getLogger(__name__)

# --- Config from environment ---
_endpoint = os.environ.get("SERVING_ENDPOINT_NAME", "databricks-claude-sonnet-4-6")
_catalog = os.environ.get("CATALOG_NAME", "")
_schema = os.environ.get("SCHEMA_NAME", "bakehouse")
_lb_project = os.environ.get("LAKEBASE_AUTOSCALING_PROJECT", "")
_lb_branch = os.environ.get("LAKEBASE_AUTOSCALING_BRANCH", "production")
_experiment_id = os.environ.get("MLFLOW_EXPERIMENT_ID", "")
_func1 = os.environ.get("FUNCTION_1_NAME", "top_products_by_franchise")
_func2 = os.environ.get("FUNCTION_2_NAME", "franchise_performance")
_embedding_endpoint = os.environ.get("EMBEDDING_ENDPOINT", "databricks-gte-large-en")
_embedding_dims = int(os.environ.get("EMBEDDING_DIMS", "1024"))

SYSTEM_PROMPT = os.environ.get("SYSTEM_PROMPT", """You are the Bakehouse Franchise Sales Assistant. You help franchise managers analyze their sales data, compare performance across locations, and track product trends.

At the START of every conversation:
1. Call recall_memories to check if you already know this manager
2. If memories exist, greet them by name and reference their franchise

When you learn new facts about a manager (name, franchise, preferred products, reporting preferences), call save_memory to store them.

Bakehouse operates 48 franchises across the US, Japan, Australia, Canada, and Europe.
Products include: Austin Almond Biscotti, Golden Gate Ginger, Tokyo Tidbits, Outback Oatmeal, Pearly Pies, and Orchard Oasis.
Always be specific with numbers and provide actionable insights.""")

# MLflow setup
mlflow.set_tracking_uri("databricks")
mlflow.langchain.autolog()
if _experiment_id:
    mlflow.set_experiment(experiment_id=_experiment_id)

# --- Memory tools ---
@tool
def save_memory(key: str, value: str, config: RunnableConfig, store: Annotated[BaseStore, InjectedStore]) -> str:
    """Save a fact about this franchise manager (name, franchise, preferred product, etc.)."""
    user_id = config["configurable"].get("user_id", "anonymous")
    store.put(("managers", user_id), key, {"content": value})
    return f"Saved '{key}' = '{value}'"

@tool
def recall_memories(query: str, config: RunnableConfig, store: Annotated[BaseStore, InjectedStore]) -> str:
    """Search this manager's stored facts by semantic similarity."""
    user_id = config["configurable"].get("user_id", "anonymous")
    results = store.search(("managers", user_id), query=query, limit=5)
    if not results:
        return "No memories found for this manager."
    return "Recalled:\n" + "\n".join(f"  [{r.key}]: {r.value['content']}" for r in results)

# --- MCP tool discovery ---
_mcp_tools = None

async def _get_mcp_tools():
    global _mcp_tools
    if _mcp_tools is not None:
        return _mcp_tools
    _mcp_tools = []
    if _catalog and _schema and _func1:
        try:
            from unitycatalog.ai.langchain_toolkit import UCFunctionToolkit
            names = [f"{_catalog}.{_schema}.{_func1}"]
            if _func2:
                names.append(f"{_catalog}.{_schema}.{_func2}")
            toolkit = UCFunctionToolkit(function_names=names)
            _mcp_tools = toolkit.tools
            for t in _mcp_tools:
                t.name = t.name.replace(".", "_")
        except Exception as e:
            logger.warning(f"UC tools not loaded: {e}")
    return _mcp_tools

# --- Graph builder ---
def _build_graph(checkpointer, store, model_with_tools, tools):
    def agent_node(state: MessagesState):
        msgs = [SystemMessage(content=SYSTEM_PROMPT)] + list(state["messages"])
        return {"messages": [model_with_tools.invoke(msgs)]}

    def should_continue(state: MessagesState):
        last = state["messages"][-1]
        if hasattr(last, "tool_calls") and last.tool_calls:
            return "tools"
        return END

    wf = StateGraph(MessagesState)
    wf.add_node("agent", agent_node)
    wf.add_node("tools", ToolNode(tools))
    wf.add_edge(START, "agent")
    wf.add_conditional_edges("agent", should_continue, ["tools", END])
    wf.add_edge("tools", "agent")
    return wf.compile(checkpointer=checkpointer, store=store)

# --- Async execution ---
async def _run_async(messages, thread_id, user_id, model_with_tools, tools):
    config = {"configurable": {"thread_id": thread_id, "user_id": user_id}}
    lk = {"project": _lb_project, "branch": _lb_branch}

    async with AsyncDatabricksStore(**lk, embedding_endpoint=_embedding_endpoint, embedding_dims=_embedding_dims) as store:
        await store.setup()
        async with AsyncCheckpointSaver(**lk) as cp:
            graph = _build_graph(cp, store, model_with_tools, tools)
            result = await graph.ainvoke({"messages": messages}, config)

    return result["messages"][-1].content

# --- Public interface ---
@mlflow.trace(name="bakehouse_agent_run", span_type="AGENT")
async def run_agent(messages, thread_id=None, user_id="anonymous"):
    thread_id = thread_id or str(uuid.uuid4())
    mcp_tools = await _get_mcp_tools()
    all_tools = [save_memory, recall_memories] + mcp_tools

    model = ChatDatabricks(endpoint=_endpoint)
    model_with_tools = model.bind_tools(all_tools)

    output = await _run_async(messages, thread_id, user_id, model_with_tools, all_tools)
    return {"output": output, "thread_id": thread_id}
