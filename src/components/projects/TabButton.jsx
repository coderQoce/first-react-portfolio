import React from "react";
import { motion } from "framer-motion";
import "./project.css";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 12px)" }, // 0.75rem = 12px
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="tab-button">
      <p className={`tab-text ${active ? "active" : ""}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tab-underline"
      ></motion.div>
    </button>
  );
};

export default TabButton;
