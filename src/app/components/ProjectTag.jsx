import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white bg-primary-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';

  return (
    <div>
      <button
        type="button"
        className={`${buttonStyles} rounded-full border-2 border-primary-500 px-6 py-3 text-xs cursor-pointer`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
