import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Builder and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "vercel"],
      links: {
        github: "#"
      }
    },
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Builder and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "vercel"],
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>{language === "tr" ? "Projeler" : "Projects"}</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.links.github} className="github-link">
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
