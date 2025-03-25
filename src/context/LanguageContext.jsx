import { createContext, useContext, useState, useMemo } from "react";
import { languageData } from "../data";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "tr" ? "en" : "tr"));
  };

  const translations = useMemo(() => languageData[language], [language]);

  const value = { language, toggleLanguage, translations };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};