import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import "./project.css";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const handleIconClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card">
      <div
        className="project-image group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay">
          <button
            onClick={(e) => handleIconClick(e, gitUrl)}
            className="icon-link"
            aria-label="View GitHub repository"
          >
            <CodeBracketIcon className="icon" />
          </button>
          <button
            onClick={(e) => handleIconClick(e, previewUrl)}
            className="icon-link"
            aria-label="View live preview"
          >
            <EyeIcon className="icon" />
          </button>
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
