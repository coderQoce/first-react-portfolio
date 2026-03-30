import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projectsData, availableTags } from "../../data/projectsData";
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

const ProjectCard = ({ title, description, image, gitUrl, previewUrl, tags }) => {
  return (
    <motion.div
      className="enhanced-project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-container">
        <img
          src={image}
          alt={title}
          className="project-image loaded"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'flex';
          }}
        />
        <div className="image-error" style={{ display: 'none' }}>
          <span>Image not available</span>
        </div>
        <div className="overlay">
          <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          {previewUrl && previewUrl !== "?" && previewUrl !== "..///" && (
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.filter(tag => tag !== "All").map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      project.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        id="portfolio"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="tags-container">
        {availableTags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectTag
              onClick={setSelectedTag}
              name={tag}
              isSelected={selectedTag === tag}
            />
          </motion.div>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tags}
            />
          ))
        ) : (
          <div className="empty-state">
            <h3>No Projects Found</h3>
            <p>
              {selectedTag === "All"
                ? "No projects available at the moment. Check back soon!"
                : `No projects found for "${selectedTag}". Try selecting a different category.`
              }
            </p>
          </div>
        )}
      </div>

      <div className="project-counter">
        <p>
          Showing {filteredProjects.length} of {projectsData.length} projects
          {selectedTag !== "All" && ` in ${selectedTag}`}
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
