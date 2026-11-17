import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import {
  TechLogo,
  RealGeminiIcon,
  RealAgenticAiIcon,
  RealCloudinaryIcon,
} from "./TechIcons";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Java & Backend", data: skillsData.backend },
  { id: "aiAgentic", label: "Agentic AI & Gen AI", data: skillsData.aiAgentic },
  { id: "frontend", label: "Frontend", data: skillsData.frontend },
  { id: "cloudDatabase", label: "Cloud & Databases", data: skillsData.cloudDatabase },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const getDisplayedSkills = () => {
    if (activeTab === "all") {
      return [
        ...skillsData.backend.map((s) => ({ ...s, group: "Java & Backend" })),
        ...skillsData.aiAgentic.map((s) => ({ ...s, group: "Agentic AI" })),
        ...skillsData.frontend.map((s) => ({ ...s, group: "Frontend" })),
        ...skillsData.cloudDatabase.map((s) => ({ ...s, group: "Cloud & DB" })),
      ];
    }
    const cat = categories.find((c) => c.id === activeTab);
    return cat ? cat.data.map((s) => ({ ...s, group: cat.label })) : [];
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical <span className="text-cyan-500">Skills</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Verified stack across Java, Spring Boot, Spring Security, Spring AI, React.js, AWS, and modern databases.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-cyan-500 border-cyan-500 text-white shadow-md shadow-cyan-500/25"
                    : "bg-card border-border/70 text-muted-foreground hover:text-foreground hover:border-cyan-500/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {displayedSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={skill.name}
                className="group p-5 rounded-2xl border border-border/70 bg-card hover:border-cyan-500/40 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center shrink-0 p-1.5 border border-border/50 group-hover:border-cyan-500/30 transition-colors">
                      {skill.isGemini ? (
                        <RealGeminiIcon className="w-5 h-5" />
                      ) : skill.isAi ? (
                        <RealAgenticAiIcon className="w-5 h-5" />
                      ) : skill.isCloudinary ? (
                        <RealCloudinaryIcon className="w-5 h-5" />
                      ) : (
                        <TechLogo
                          name={skill.name}
                          iconKey={skill.iconKey}
                          invertInDark={skill.invertDark}
                          className="w-5 h-5"
                        />
                      )}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-cyan-500 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {skill.tag || skill.group}
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="space-y-1.5">
                  <div className="w-full h-2 rounded-full bg-secondary/80 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="font-semibold text-foreground">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
