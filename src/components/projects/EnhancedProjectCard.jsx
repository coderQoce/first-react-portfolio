import React, { useState, useRef, useEffect } from "react";
import { CodeBracketIcon, EyeIcon, CalendarIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/outline";
import "./project.css";

const EnhancedProjectCard = ({ 
  title, 
  description, 
  image, 
  gitUrl, 
  previewUrl, 
  tags, 
  highlights = [],
  duration = "",
  teamSize = "",
  githubStars = 0
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="enhanced-project-card">
      <div className="project-image-container">
        {!imageLoaded && !imageError && (
          <div className="image-skeleton"></div>
        )}
        <img
          ref={imgRef}
          src={isInView ? image : undefined}
          alt={title}
          className={`project-image ${imageLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        {imageError && (
          <div className="image-error">
            <span>Image not available</span>
          </div>
        )}
        <div className="overlay">
          <a 
            href={gitUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
            aria-label="View GitHub repository"
          >
            <CodeBracketIcon className="icon" />
          </a>
          {previewUrl && previewUrl !== "?" && previewUrl !== "..///" && (
            <a 
              href={previewUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon-link"
              aria-label="View live preview"
            >
              <EyeIcon className="icon" />
            </a>
          )}
        </div>
      </div>
      
      <div className="project-details">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <div className="project-meta">
            {duration && (
              <span className="meta-item">
                <CalendarIcon className="meta-icon" />
                {duration}
              </span>
            )}
            {teamSize && (
              <span className="meta-item">
                <UserGroupIcon className="meta-icon" />
                {teamSize}
              </span>
            )}
            {githubStars > 0 && (
              <span className="meta-item">
                <StarIcon className="meta-icon" />
                {githubStars}
              </span>
            )}
          </div>
        </div>
        
        <p className="project-description">{description}</p>
        
        {highlights.length > 0 && (
          <div className="project-highlights">
            <h4>Key Features:</h4>
            <ul>
              {highlights.slice(0, 3).map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="project-tags">
          {tags.filter(tag => tag !== "All").map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedProjectCard;
