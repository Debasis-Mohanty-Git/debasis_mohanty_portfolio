import React from "react";
import { BackGround } from "../Components/BackGround";
import Navbar from "../Components/Navbar";
import HomeSection from "../Components/HomeSection";
import AgenticAiSection from "../Components/AgenticAiSection";
import AboutMe from "../Components/AboutMe";
import Experience from "../Components/Experience";
import Project from "../Components/Project";
import Skills from "../Components/Skills";
import Certifications from "../Components/Certifications";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-cyan-500/20 selection:text-cyan-500">
      {/* Background ambient stars & subtle meteors */}
      <BackGround />

      {/* Responsive Navigation: Top Floating Bar on Desktop, Top Bar + Animated Floating Bottom Dock on Mobile */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 pb-20 md:pb-0">
        <HomeSection />
        <AgenticAiSection />
        <AboutMe />
        <Experience />
        <Project />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
