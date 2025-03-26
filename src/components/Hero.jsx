import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "../styles/Hero.css";

const Hero = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="hero-container">
      
      <section className={`hero ${theme}`}>
        <div className="hero-inner">
          
          <header className="hero-header">
            <h1 className="hero-header-title">İhya</h1>
            <div className="hero-header-controls">
              <button onClick={toggleLanguage} className="language-toggle">
                {language === "tr" ? "İNGİLİZCE'YE GEÇ" : "TÜRKÇE'YE GEÇ"}
              </button>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "dark" ? "🌞 DARK MODE" : "🌙 LIGHT MODE"}
              </button>
            </div>
          </header>

          
          <div className="hero-content">
            <h1 className="hero-name-title">I am a frontend developer...</h1>
            <h2 className="hero-subtitle">
              {language === "tr" 
                ? "Frontend Geliştiriciyim..." 
                : "I am a Frontend Developer..."}
            </h2>
            <p className="hero-description">
              {language === "tr"
                ? "Sağlam ve ölçeklenebilir arayüzler geliştirmeyi seviyorum."
                : "I love building solid and scalable frontend products."}
            </p>
            <div className="hero-social-buttons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-social-button">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-button">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
