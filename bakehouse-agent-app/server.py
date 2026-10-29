import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from typing import Optional
from pathlib import Path
from agent import run_agent

app = FastAPI()

class ChatRequest(BaseModel):
    input: list
    thread_id: Optional[str] = None

@app.get("/")
async def root():
    return HTMLResponse(Path("chat.html").read_text())

@app.post("/invocations")
async def invoke(req: ChatRequest, request: Request):
    raw_user = request.headers.get("X-Forwarded-Preferred-Username", "anonymous")
    user_id = raw_user.replace(".", "_").replace("@", "_at_")
    messages = [{"role": m.get("role", "user"), "content": m.get("content", "")} for m in req.input]
    result = await run_agent(messages, thread_id=req.thread_id, user_id=user_id)
    return result

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
