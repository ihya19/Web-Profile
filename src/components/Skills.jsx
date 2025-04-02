import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/Skills.css";
import "../styles/global.css";
import jsLogo from "/images/js.png";
import reactLogo from "/images/react.png";
import reduxLogo from "/images/redux.png";
import nodeLogo from "/images/node.png";
import vscodeLogo from "/images/vscodee.png";
import figmaLogo from "/images/figma.png";

const Skills = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <section className={`skills ${theme}`}>
      <h2>{language === "tr" ? "Yetenekler" : "Skills"}</h2>
      <div className="skill-boxes">
        <div className="skill-column">
          <div className="skill">
            <img src={jsLogo} alt="JavaScript" />
            <span>JAVASCRIPT</span>
          </div>
          <div className="skill">
            <img src={reactLogo} alt="React" />
            <span>REACT</span>
          </div>
          <div className="skill">
            <img src={reduxLogo} alt="Redux" />
            <span>REDUX</span>
          </div>
        </div>
        
        <div className="skill-column">
          <div className="skill">
            <img src={nodeLogo} alt="Node.js" />
            <span>NODE</span>
          </div>
          <div className="skill">
            <img src={vscodeLogo} alt="VS Code" />
            <span>VS CODE</span>
          </div>
          <div className="skill">
            <img src={figmaLogo} alt="Figma" />
            <span>FIGMA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
