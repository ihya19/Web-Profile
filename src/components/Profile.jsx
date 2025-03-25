import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Profile.css";
import "../styles/global.css";

const Profile = () => {
  const { language } = useLanguage();

  return (
    <section className="profile">
      <div className="profile-container">
        <h2 className="profile-title">{language === "tr" ? "Profil" : "Profile"}</h2>
        
        <div className="profile-content">
          <div className="basic-info">
            <h3>{language === "tr" ? "Temel Bilgiler" : "Basic Information"}</h3>
            <ul>
              <li><span>{language === "tr" ? "Doğum tarihi" : "Birth date"}</span> 19.11.1999</li>
              <li><span>{language === "tr" ? "Memleket" : "Hometown"}</span> İzmir</li>
              <li><span>{language === "tr" ? "Eğitim" : "Education"}</span> {language === "tr" ? "Bursa Teknik Ünv. Elektirik Elektronik Müh." : "Bursa Technical University Electrical Electronics Eng."}</li>
              <li><span>{language === "tr" ? "Durumu" : "Status"}</span> {language === "tr" ? "Lisans, 2024" : "Bachelor's, 2024"}</li>
              <li><span>{language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}</span> {language === "tr" ? "Frontend, UI" : "Frontend, UI"}</li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="about-me">
            <h3>{language === "tr" ? "Hakkımda" : "About Me"}</h3>
            <p>
              {language === "tr" 
                ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\nVeniam aut, odit laborum aliquam voluptatum nisi mollitia.\nMinima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
                : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\nVeniam aut, odit laborum aliquam voluptatum nisi mollitia.\nMinima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
