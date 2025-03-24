import React from "react";
import "../styles/Skills.css";
import "../styles/global.css"; 

const Skills = () => (
  <section className="skills container">
    <h2>Skills</h2>
    <div className="skill-list">
      <span className="skill javascript">JavaScript</span>
      <span className="skill react">React</span>
      <span className="skill node">Node.js</span>
      <span className="skill vscode">VS Code</span>
    </div>
  </section>
);

export default Skills;
