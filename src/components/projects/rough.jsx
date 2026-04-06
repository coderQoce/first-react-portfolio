// first part 

import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const handleIconClick = (e, url) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <button
            onClick={(e) => handleIconClick(e, gitUrl)}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            aria-label="View GitHub repository"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
          <button
            onClick={(e) => handleIconClick(e, previewUrl)}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            aria-label="View live preview"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

// export default ProjectCard;
// second part

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crypto Convo",
    description: "Web3 video conferencing application",
    image: "/images/projects/2.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://cryptoconvo.vercel.app/",
  },
  {
    id: 2,
    title: "Not Whot",
    description: "An Online player vs player stake and win card game",
    image: "/images/projects/3.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/KSwitch1303/notWhot",
    previewUrl: "https://notwhot.vercel.app/",
  },
  {
    id: 3,
    title: "Not Whot - Backend",
    description: "An Online player vs player stake and win card game",
    image: "/images/projects/3.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/notWhot-server",
    previewUrl: "https://notwhot.vercel.app/",
  },
  {
    id: 6,
    title: "Language Translation NPM Package",
    description: "A node package that allows you to write JavaScript code in any of the three major languages in Nigeria",
    image: "/images/projects/6.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/nigerian-language-package",
    previewUrl: "https://github.com/KSwitch1303/nigerian-language-package",
  },
  {
    id: 4,
    title: "School MS",
    description: "An Online School Management System",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/KSwitch1303/school-MS-frontend",
    previewUrl: "https://school-ms-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "School MS - Backend",
    description: "An Online School Management System",
    image: "/images/projects/4.png",
    tag: ["All", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/School-Management-System",
    previewUrl: "https://school-ms-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Bank Loan Page",
    description: "A site to help banks make loan application easier",
    image: "/images/projects/5.png",
    tag: ["All", "React", "NodeJS"],
    gitUrl: "https://github.com/KSwitch1303/FAMFB_LOAN_SITE",
    previewUrl: "https://famfb-loan.vercel.app/",
  },
  {
    id: 7,
    title: "Task Management System",
    description: "An online task management system for companies",
    image: "/images/projects/7.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/KSwitch1303/Task_Management_System-LAMP-",
    previewUrl: "https://github.com/KSwitch1303/Task_Management_System-LAMP-",
  },
  {
    id: 8,
    title: "Online Auction Web App",
    description: "An online auction web application",
    image: "/images/projects/8.png",
    tag: ["All", "PHP"],
    gitUrl: "https://github.com/KSwitch1303/auction-system",
    previewUrl: "https://github.com/KSwitch1303/auction-system",
  },
  {
    id: 9,
    title: "Credit Default Prediction",
    description: "A credit default prediction script",
    image: "/images/projects/9.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/KSwitch1303/creditDefaultPrediction",
    previewUrl: "https://github.com/KSwitch1303/creditDefaultPrediction",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="portfolio">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="overflow-x-auto sm:overflow-x-visible">
        <div className="inline-flex sm:flex sm:flex-row sm:justify-center items-center gap-2 py-6 whitespace-nowrap sm:whitespace-normal">
          <ProjectTag
            onClick={() => handleTagChange("All")}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={() => handleTagChange("React")}
            name="React"
            isSelected={tag === "React"}
          />
          <ProjectTag
            onClick={() => handleTagChange("PHP")}
            name="PHP"
            isSelected={tag === "PHP"}
          />
          <ProjectTag
            onClick={() => handleTagChange("NodeJS")}
            name="NodeJS"
            isSelected={tag === "NodeJS"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Html")}
            name="Html"
            isSelected={tag === "Html"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Python")}
            name="Python"
            isSelected={tag === "Python"}
          />
        </div>
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

// export default ProjectsSection;
// third part
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

// export default ProjectTag;
// last part
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;

