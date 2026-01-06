import React from 'react'
import"./skills.css";
import Frontend from './frontend';
import Backend from './backend';

const Skills = () => {
  return (
   <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
   </section>
  )
}

export default Skills