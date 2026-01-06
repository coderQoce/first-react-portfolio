import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import "./project.css";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="project-card">
      <div
        className="project-image group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay">
          <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <CodeBracketIcon className="icon" />
          </a>
          <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <EyeIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="project-details">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
