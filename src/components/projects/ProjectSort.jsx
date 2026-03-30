import React from "react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import "./project.css";

const ProjectSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-container">
      <ArrowsUpDownIcon className="sort-icon" />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="alphabetical">Alphabetical (A-Z)</option>
        <option value="reverse-alphabetical">Alphabetical (Z-A)</option>
        <option value="technology">By Technology</option>
      </select>
    </div>
  );
};

export default ProjectSort;
