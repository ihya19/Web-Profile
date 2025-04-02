import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";
import pizzaImage from "/images/sipariş.png";
import portfolioImage from "/images/profile.png";

const Projects = () => {
  const { language } = useLanguage();

  const projects = [
    {
      title: "Pizza Sipariş Uygulaması",
      description: "Kullanıcıların kolayca pizza siparişi verebileceği, özelleştirme seçenekleri sunan bir web uygulaması. React, Redux, TailwindCSS ve Cypress kullanılarak geliştirilmiştir.",
      tags: ["react", "redux", "tailwind", "cypress"],
      image: pizzaImage,
      links: {
        github: "#"
      }
    },
    {
      title: "Portfolio Web Sitesi",
      description: "Kişisel projelerimi ve becerilerimi sergileyen, dil yönetimi ve dark mode özelliklerine sahip portföy web sitesi.",
      tags: ["react", "context api", "dark mode"],
      image: portfolioImage,
      links: {
        github: "https://github.com/kullanici-adi/portfolio"
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
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.links.github} className="github-link" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;