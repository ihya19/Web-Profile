import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaTwitter, FaInstagram } from 'react-icons/fa'; // İkonları import et
import "../styles/Footer.css";
import "../styles/global.css";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="footer-bg">
      <div className="footer-content">
        <h2>{language === "tr" ? "Bana bir mesaj gönder!" : "Send me a message!"}</h2>
        <p>
          {language === "tr" 
            ? "Bir sorunuz, öneriniz varsa veya sadece merhaba demek istiyorsanız, çekinmeyin." 
            : "Got a question or proposal, or just want to say hello? Go ahead."}
        </p>
        <a href="mailto:ihyasahin@gmail.com">ihyasahin@gmail.com</a>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
