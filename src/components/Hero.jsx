import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/Hero.css";
import profileImage from "/images/ihya.jpg";  

const Hero = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`hero-container ${theme}`}>
      <section className="hero">
        <div className="hero-inner">
          <header className="hero-header">
            <h1 className="hero-header-title">İhya</h1>
            <div className="hero-header-controls">
              <button onClick={toggleLanguage} className="language-toggle">
                {language === "tr" ? "TRANSLATE TO ENGLISH" : "TÜRKÇE'YE ÇEVİR"}
              </button>
              <div className="theme-toggle-container">
                <input
                  type="checkbox"
                  className="theme-toggle"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <span className="theme-text">
                  {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
                </span>
              </div>
            </div>
          </header>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name-title">{language === "tr" 
                  ? "Frontend Geliştiriciyim..." 
                  : "I am a Frontend Developer..."}</h1>
              
              <p className="hero-description">
                {language === "tr"
                  ? "...harika kullanıcı deneyimine sahip ölçeklenebilir ön uç ürünleri tasarlamayı seven."
                  : "...who likes to craft and scalable frontend products with great user experience."}
              </p>
              <div className="hero-social-buttons">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-social-button"
                >
                  <FaGithub size={24} /> GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-social-button"
                >
                  <FaLinkedin size={24} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={profileImage} alt="Profile" className="hero-profile-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
