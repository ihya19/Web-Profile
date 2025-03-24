import React from "react";
import "../styles/Hero.css";
import "../styles/global.css"; 

const Hero = () => (
  <section className="hero container">
    <h2>I am a Frontend Developer...</h2>
    <p>Creating modern and user-friendly web applications</p>
    <div>
      <button>GitHub</button>
      <button>LinkedIn</button>
    </div>
  </section>
);

export default Hero;
