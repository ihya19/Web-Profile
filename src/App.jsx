import React from "react";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext"; 
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
