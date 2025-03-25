import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Skills.css";
import "../styles/global.css";

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section className="skills">
      <h2>{language === "tr" ? "Yetenekler" : "Skills"}</h2>
      <div className="skill-boxes">
        <div className="skill-column">
          <div className="skill javascript">JS</div>
          <div className="skill react">REACT</div>
          <div className="skill react">REDUX</div>
        </div>
        
        <div className="skill-column">
          <div className="skill node">NODE</div>
          <div className="skill vscode">VS CODE</div>
          <div className="skill figma">FIGMA</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
