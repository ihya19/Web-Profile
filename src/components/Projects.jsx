import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";
import "../styles/global.css";

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "parcel"],
      links: {
        site: "#",
        github: "#"
      }
    },
    {
      title: "Journey",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "parcel"],
      links: {
        site: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="projects-bg">
      <div className="projects container">
        <h2>{language === "tr" ? "Projeler" : "Projects"}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.links.site} className="link">View Site</a>
                <a href={project.links.github} className="link">Github</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
