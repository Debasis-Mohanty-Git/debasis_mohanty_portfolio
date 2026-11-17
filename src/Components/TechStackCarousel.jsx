import React from "react";
import {
  TechLogo,
  RealGeminiIcon,
  RealAgenticAiIcon,
  RealCloudinaryIcon,
} from "./TechIcons";

const lineOneTech = [
  { name: "Java", category: "Language", iconKey: "java", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { name: "Spring Boot", category: "Framework", iconKey: "spring", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { name: "Agentic AI", category: "Autonomous", customSvg: <RealAgenticAiIcon className="w-5 h-5" />, bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { name: "Spring AI", category: "Gen AI", customSvg: <RealGeminiIcon className="w-5 h-5" />, bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { name: "React.js", category: "Frontend", iconKey: "react", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { name: "TypeScript", category: "Language", iconKey: "typescript", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { name: "Node.js", category: "Runtime", iconKey: "nodejs", bg: "bg-green-500/10", border: "border-green-500/30" },
  { name: "Express.js", category: "Backend", iconKey: "express", invertDark: true, bg: "bg-slate-500/10", border: "border-slate-500/30" },
  { name: "Spring Security", category: "Security", iconKey: "spring", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { name: "Tailwind CSS", category: "Styling", iconKey: "tailwindcss", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  { name: "JavaScript", category: "Language", iconKey: "javascript", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
];

const lineTwoTech = [
  { name: "MySQL", category: "RDBMS", iconKey: "mysql", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { name: "PostgreSQL", category: "Database", iconKey: "postgresql", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  { name: "AWS", category: "Cloud Infrastructure", iconKey: "aws", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { name: "Google Gemini", category: "Foundation LLM", customSvg: <RealGeminiIcon className="w-5 h-5" />, bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { name: "Git", category: "Version Control", iconKey: "git", bg: "bg-red-500/10", border: "border-red-500/30" },
  { name: "GitHub", category: "Platform", iconKey: "github", invertDark: true, bg: "bg-slate-500/10", border: "border-slate-500/30" },
  { name: "Postman", category: "API Testing", iconKey: "postman", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  { name: "Docker", category: "Containers", iconKey: "docker", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { name: "Hibernate / JPA", category: "ORM", iconKey: "hibernate", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { name: "WebSocket", category: "Real-Time Sockets", iconKey: "socketio", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { name: "Cloudinary", category: "Media CDN", customSvg: <RealCloudinaryIcon className="w-5 h-5" />, bg: "bg-blue-500/10", border: "border-blue-500/30" },
];

export const TechStackCarousel = () => {
  // Duplicate arrays for smooth infinite marquee looping
  const rowOneItems = [...lineOneTech, ...lineOneTech];
  const rowTwoItems = [...lineTwoTech, ...lineTwoTech];

  return (
    <div className="w-full pt-10 pb-6 relative overflow-hidden">
      {/* Section Sub-header */}
      <div className="text-center mb-6">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/80">
          Official Production Stack &amp; Verified Technologies
        </span>
      </div>

      {/* Left and Right edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      <div className="space-y-4">
        {/* Line 1: Moves Left */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-3 sm:gap-4 py-1">
            {rowOneItems.map((tech, index) => (
              <div
                key={`line1-${index}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/90 border border-border/80 hover:border-cyan-500/60 shadow-xs hover:shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 shrink-0"
              >
                <div className={`p-2 rounded-lg ${tech.bg} flex items-center justify-center shrink-0`}>
                  <TechLogo
                    name={tech.name}
                    iconKey={tech.iconKey}
                    customSvg={tech.customSvg}
                    invertInDark={tech.invertDark}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium -mt-0.5">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Line 2: Moves Right (Reverse) */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee-reverse flex items-center gap-3 sm:gap-4 py-1">
            {rowTwoItems.map((tech, index) => (
              <div
                key={`line2-${index}`}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/90 border border-border/80 hover:border-cyan-500/60 shadow-xs hover:shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 shrink-0"
              >
                <div className={`p-2 rounded-lg ${tech.bg} flex items-center justify-center shrink-0`}>
                  <TechLogo
                    name={tech.name}
                    iconKey={tech.iconKey}
                    customSvg={tech.customSvg}
                    invertInDark={tech.invertDark}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-medium -mt-0.5">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;
