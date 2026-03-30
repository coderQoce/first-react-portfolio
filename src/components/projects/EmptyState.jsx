import React from "react";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import "./project.css";

const EmptyState = ({ selectedTag }) => {
  return (
    <div className="empty-state">
      <FolderOpenIcon className="empty-state-icon" />
      <h3 className="empty-state-title">No Projects Found</h3>
      <p className="empty-state-message">
        {selectedTag === "All" 
          ? "No projects available at the moment. Check back soon!"
          : `No projects found for "${selectedTag}". Try selecting a different category.`
        }
      </p>
    </div>
  );
};

export default EmptyState;
