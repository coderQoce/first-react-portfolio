import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import "./project.css";



const projectsData = [
  {
    id: 1,
    title: "Pfp Editor ",
    description: "An webpage  that allows you to add frame to your pfp ",
    image: "/images/pfp.png",
    tag: ["All", "Html", "Css", "React"],
    gitUrl: "https://github.com/coderQoce/Pfp-Changer.git",
    previewUrl: "https://pfp-changer.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "ChatBox",
  //   description: "A application that allows you to chat with other users online ",
  //   image: "/images/chatbox.jpg",
  //   tag: ["All", "React", "Node.JS"],
  //   gitUrl: "https://github.com/coderQoce/chat-box.git",
  //   previewUrl: "/",
  // },
  {
    id: 3,
    title: "Yoruba Homonym System",
    description: "A system that allows you to search for Yoruba Homonyms",
    image: "/images/yor.png",
    tag: ["All", "React"],
    gitUrl: "https://yoruba-homo-app.netlify.app/",
    previewUrl: "https://yoruba-orthography.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Blog-Site",
  //   description: "A Blog application",
  //   image: "/images/blog.jpg",
  //   tag: ["All", "React", "Node.JS"],
  //   gitUrl: "https://github.com/coderQoce/Onyx-Blog.git ",
  //   previewUrl: "https://onyxblog.netlify.app/",
  // },
  
  // {
  //   id: 5,
  //   title: "Crop Analysis System",
  //   description: "An application that allows farmer to check crop disease",
  //   image: "/images/crop.jpg",
  //   tag: ["All", "React"],
  //   gitUrl: "https://github.com/coderQoce/cropanalysis.git",
  //   previewUrl: "y",
  // },
  // {
  //   id: 6,
  //   title: "Ping Pong Game",
  //   description: "This is a game where paddle bounces ball between two users",
  //   image: "/images/pong.jpg",
  //   tag: ["All", "Python"],
  //   gitUrl: "https://github.com/coderQoce/Python_projects-Games- ",
  //   previewUrl: "/",
  // },
  {
    id: 7,
    title: "School MS",
    description: "An Online School Management System",
    image: "/images/4.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/KSwitch1303/school-MS-frontend",
    previewUrl: "https://school-ms-frontend.vercel.app/",
  },
  {
    id: 8,
    title: "Harvest-Nexus Landing page",
    description: "A Farm Company   Landing page",
    image: "/images/harvestnexus.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/HarvestNexus/harvest-nexus-landing",
    previewUrl: "https://harvestnexus.vercel.app",
  },
  {
    id: 9,
    title: "Bank Loan Page",
    description: "A site to help banks make loan application easier",
    image: "/images/5.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/coderQoce/Loan-App.git",
    previewUrl: "https://famfb-loan.vercel.app/",
  },
   {
    id: 10,
    title: "Yoruba to Igbo Translator",
    description: "A site to help users translate Yoruba text to Igbo",
    image: "/images/yoruba-to-igbo.jpg",
    tag: ["All", "React, Node.JS"],
    gitUrl: "https://github.com/coderQoce/yoruba-igbo-translator-joyce",
    previewUrl: "https://yoruba-igbo-translator.netlify.app",
  },
  {
    id: 11,
    title: "Caremeal Website",
    description: "A website that provides nutritional information and meal planning",
    image: "/images/Caremeal.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/coderQoce/CareMeal",
    previewUrl: "https://caremeal.netlify.app/",
  },
   {
    id: 12,
    title: "Igbo Homonym finder",
    description: "A system that allows you to search for Igbo Homonyms",
    image: "/images/homo.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/coderQoce/igbo-Homo.git",
    previewUrl: "?",
  },
   {
    id: 13,
    title: "PerFect-Pretend",
    description: "An Event website for a Fake wedding ",
    image: "/images/perfect-pretence.png",
   tag: ["All", "React"],
    gitUrl: "https://github.com/coderQoce/Perfect-Pretence.git",
    previewUrl: "https://perfect-pretence.netlify.app/",
  },
   {
    id: 14,
    title: "BMW Exclusive",
    description: "A website to buy BMW cars",
    image: "/images/bmw.png",
    tag: ["All", "Html"],
    gitUrl: "https://github.com/coderQoce/onyxAutos.git",
    previewUrl: "https://onyx-autos.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title" id="portfolio">My Projects</h2>
      <div className="tags-container">
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
          onClick={() => handleTagChange("Node.JS")}
          name="Node.JS"
          isSelected={tag === "Node.JS"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Python")}
          name="Python"
          isSelected={tag === "Python"}
        />
         <ProjectTag
          onClick={() => handleTagChange("Html")}
          name="Html"
          isSelected={tag === "Html"}
        />
      </div>
      <ul ref={ref} className="projects-list">
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
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

export default ProjectsSection;
