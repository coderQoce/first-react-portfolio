import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import EnhancedProjectCard from "./EnhancedProjectCard";
import SkeletonLoader from "./SkeletonLoader";
import EmptyState from "./EmptyState";
import ProjectSort from "./ProjectSort";
import ProjectTag from "./ProjectTag";
import { projectsData, availableTags } from "../../data/projectsData";
import "./project.css";

const EnhancedProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      project.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  // Sort projects based on selected sort option
  const sortedProjects = useMemo(() => {
    const sorted = [...filteredProjects];

    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "oldest":
        return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case "alphabetical":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "reverse-alphabetical":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "technology":
        return sorted.sort((a, b) => {
          const aTech = a.tags.filter(tag => tag !== "All").join("");
          const bTech = b.tags.filter(tag => tag !== "All").join("");
          return aTech.localeCompare(bTech);
        });
      default:
        return sorted;
    }
  }, [filteredProjects, sortBy]);

  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  };

  if (isLoading) {
    return (
      <section id="projects" className="projects-section">
        <h2 className="section-title" id="portfolio">My Projects</h2>
        <div className="controls-container">
          <div className="tags-container">
            {availableTags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <ProjectTag
                  onClick={() => handleTagChange(tag)}
                  name={tag}
                  isSelected={selectedTag === tag}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="projects-list">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="section-title"
        id="portfolio"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="controls-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="tags-container">
          <AnimatePresence>
            {availableTags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={tagVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.05 }}
              >
                <ProjectTag
                  onClick={() => handleTagChange(tag)}
                  name={tag}
                  isSelected={selectedTag === tag}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <ProjectSort
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
      </motion.div>

      <motion.ul
        ref={ref}
        className="projects-list"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence mode="wait">
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, index) => (
              <motion.li
                key={project.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  layout: { duration: 0.3 }
                }}
              >
                <EnhancedProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  tags={project.tags}
                  highlights={project.highlights}
                  duration={project.duration}
                  teamSize={project.teamSize}
                  githubStars={project.githubStars}
                />
              </motion.li>
            ))
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <EmptyState selectedTag={selectedTag} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.ul>

      {/* Project counter */}
      <motion.div
        className="project-counter"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>
          Showing {sortedProjects.length} of {projectsData.length} projects
          {selectedTag !== "All" && ` in ${selectedTag}`}
        </p>
      </motion.div>
    </section>
  );
};

export default EnhancedProjectSection;
