import React from "react";
import "./project.css";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      className={`project-tag ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
