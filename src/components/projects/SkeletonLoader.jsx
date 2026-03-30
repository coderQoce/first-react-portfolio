import React from "react";
import "./project.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-tags"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
