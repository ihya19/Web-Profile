import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Footer.css";
import "../styles/global.css";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="container">
      <p>{language === "tr" ? "Bana bir mesaj gönder!" : "Send me a message!"}</p>
      <p>ihyasahin@gmail.com</p>
    </footer>
  );
};

export default Footer;
