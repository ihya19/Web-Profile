import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Profile.css";
import "../styles/global.css";
import profileImage from "/images/images.jpeg";

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
          
          <img src={profileImage} alt="Profile" className="profile-image" />

          <div className="about-me">
            <h3>{language === "tr" ? "Hakkımda" : "About Me"}</h3>
            <p>
              {language === "tr" 
                ? "Bursa Teknik Üniversitesi Elektrik & Elektronik Mühendisliği bölümünden mezun oldum. BTÜ'de topluluklarda sosyal becerilerimi geliştirdim. Siemens PLC, SQL, C#, Python ve Pandas  gibi teknolojilerde yetkinlik kazandım. Yazılım alanında, özellikle frontend ve UI tasarımına ilgi duyarak kullanıcı deneyimi odaklı arayüzler geliştirmeye odaklanıyor, gelişime açık biri olarak kendimi sürekli güncellemeye çalışıyorum.\n\n"
                : "I graduated from the Electrical & Electronics Engineering Department at Bursa Technical University. I developed my social skills through participation in student communities at BTU. I gained expertise in technologies such as Siemens PLC, SQL, C#, Python, and Pandas. In the software field, I am particularly interested in frontend and UI design, focusing on developing user experience-centered interfaces, and as a person open to development, I constantly strive to update myself."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;