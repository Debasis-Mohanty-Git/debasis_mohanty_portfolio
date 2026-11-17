import React from "react";
import { ArrowUp, Github, Heart, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo, navItems } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-card/60 backdrop-blur-md pt-12 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/50">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                DM
              </div>
              <span className="font-bold text-base text-foreground tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm">
              Software Developer L-1 at AssetMagnets | Full Stack &amp; Agentic AI.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-cyan-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-border hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-border hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full border border-border hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-border hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground text-center gap-2">
          <p>© {new Date().getFullYear()} Debasis Mohanty. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

