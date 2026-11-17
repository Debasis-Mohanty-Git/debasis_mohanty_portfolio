import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Bot,
  Briefcase,
  FolderGit2,
  Cpu,
  Award,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const desktopNavItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Agentic AI", href: "#agentic-ai", id: "agentic-ai", isSpecial: true },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const mobileNavItems = [
  { name: "Home", href: "#home", id: "home", icon: Home },
  { name: "About", href: "#about", id: "about", icon: User },
  { name: "AI Agent", href: "#agentic-ai", id: "agentic-ai", icon: Bot, isSpecial: true },
  { name: "Experience", href: "#experience", id: "experience", icon: Briefcase },
  { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", id: "skills", icon: Cpu },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = desktopNavItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 260;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =========================================================================
          DESKTOP & TABLET TOP FLOATING NAVBAR (md and up) - Sleek Cosmic Dark
          ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`flex items-center justify-between px-5 py-2 rounded-full border transition-all duration-300 ${
              isScrolled
                ? "bg-slate-900/90 backdrop-blur-xl border-slate-800 shadow-xl shadow-black/40"
                : "bg-slate-900/70 backdrop-blur-md border-slate-800/60"
            }`}
          >
            {/* Logo / Brand Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home", "home")}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-bold text-xs">
                  DM
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs lg:text-sm tracking-tight text-white flex items-center gap-1.5">
                  Debasis Mohanty
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for hire" />
                </span>
                <span className="text-[10px] text-cyan-400 font-medium -mt-0.5">
                  Software Developer L-1
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-0.5 lg:gap-1 bg-slate-950/60 p-1 rounded-full border border-slate-800/60">
              {desktopNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`relative px-3 lg:px-3.5 py-1 text-[11px] lg:text-xs font-semibold rounded-full transition-colors duration-200 flex items-center gap-1 ${
                      isActive
                        ? "text-cyan-400 font-bold"
                        : item.isSpecial
                        ? "text-purple-400 font-semibold hover:text-purple-300"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktopActivePill"
                        className="absolute inset-0 bg-slate-800/90 rounded-full shadow-xs border border-cyan-500/30"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}
                    {item.isSpecial && <Sparkles className="w-3 h-3 text-amber-400 relative z-10" />}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Resume CTA */}
            <div className="flex items-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.resumeUrl}
                download="Debasis_Mohanty_CV.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE TOP BRAND BAR (small screens only) - Sleek Cosmic Dark
          ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/70 px-4 py-2.5 flex items-center justify-between transition-all">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          className="flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-600 p-[1.5px]">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-bold text-[10px]">
              DM
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              Debasis Mohanty
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
            <span className="text-[9.5px] text-cyan-400 font-medium -mt-0.5">
              Software Developer L-1
            </span>
          </div>
        </a>

        <div className="flex items-center">
          <a
            href={personalInfo.resumeUrl}
            download="Debasis_Mohanty_CV.pdf"
            className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>
        </div>
      </header>

      {/* =========================================================================
          MOBILE FLOATING BOTTOM NAVIGATION DOCK ("like below" with rich animations)
          ========================================================================= */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-3 inset-x-0 z-50 md:hidden flex justify-center px-2 pointer-events-none"
      >
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 28, delay: 0.15 }}
          className="pointer-events-auto flex items-center justify-around gap-0.5 p-1 rounded-full backdrop-blur-2xl bg-slate-900/95 border border-slate-800 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)] max-w-sm w-full"
        >
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-all duration-300 flex-1 ${
                  isActive
                    ? item.isSpecial
                      ? "text-purple-400"
                      : "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label={item.name}
              >
                {/* Animated Floating Glow Capsule */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveDock"
                    className={`absolute inset-0 rounded-full ${
                      item.isSpecial
                        ? "bg-purple-500/15 border border-purple-500/30"
                        : "bg-cyan-500/15 border border-cyan-500/30"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}

                {/* Animated Icon */}
                <motion.div
                  animate={isActive ? { y: -1, scale: 1.08 } : { y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 20 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <Icon
                    className={`w-4 h-4 transition-colors duration-200 ${
                      isActive
                        ? item.isSpecial
                          ? "stroke-[2.4px] text-purple-600 dark:text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                          : "stroke-[2.4px] text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                        : "stroke-[1.8px]"
                    }`}
                  />
                  <span
                    className={`text-[8.5px] font-medium tracking-tight mt-0.5 leading-none transition-all duration-200 ${
                      isActive
                        ? item.isSpecial
                          ? "font-bold text-purple-600 dark:text-purple-400"
                          : "font-bold text-cyan-600 dark:text-cyan-400"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.div>

                {/* Micro indicator dot underneath */}
                {isActive && (
                  <motion.span
                    layoutId="mobileIndicatorDot"
                    className={`absolute -bottom-0.5 w-1 h-1 rounded-full ${
                      item.isSpecial ? "bg-purple-500 shadow-[0_0_6px_#a855f7]" : "bg-cyan-500 shadow-[0_0_6px_#06b6d4]"
                    }`}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
