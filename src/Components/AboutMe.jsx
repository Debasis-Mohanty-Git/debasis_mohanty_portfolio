import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cloud,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Layers,
  CheckCircle2,
  Bot,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const AboutMe = () => {
  const highlights = [
    { label: "Role", value: "Software Dev L-1", sub: "AssetMagnets" },
    { label: "Education", value: "B.Tech in ETC", sub: "TAT, Bhubaneswar" },
    { label: "Core Stack", value: "Java & Spring Boot", sub: "+ React & MySQL" },
    { label: "AI Focus", value: "Agentic AI & Gen AI", sub: "Spring AI Certified" },
  ];

  const focusCards = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-500" />,
      title: "Full Stack Software Engineering",
      desc: "Developing production web applications with Java, Spring Boot, React.js, and MySQL. Designing secure RESTful APIs with Spring Security and JWT.",
      badge: "Java & Spring",
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-500" />,
      title: "Agentic AI & Spring AI",
      desc: "Architecting autonomous agent reasoning loops, multi-step LLM tool calling, and RAG vector search pipelines for intelligent enterprise automation.",
      badge: "Agentic AI",
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "Cloud & Production Delivery",
      desc: "Deploying production services on AWS (EC2, S3, RDS), configuring WebSocket real-time data flows, and shipping live features for Intellpharma & AssetMagnets.",
      badge: "AWS & Systems",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            About <span className="text-cyan-500">Debasis</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Software Developer L-1 engineering scalable software systems and autonomous AI-driven workflows.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated <strong className="text-foreground font-semibold">Software Developer L-1</strong> with hands-on experience building and deploying production web applications using <span className="text-cyan-600 dark:text-cyan-400 font-medium">Java, Spring Boot, React.js, and MySQL</span>.
              </p>
              <p>
                Currently at <strong className="text-foreground font-semibold">AssetMagnets</strong> in Bhubaneswar, I develop and maintain RESTful APIs integrated with modern React frontends, supporting real-time data flows and maintaining production-grade code quality through code reviews and Git version control. I have shipped production features for live client platforms including <strong className="text-foreground font-semibold">Intellpharma</strong> and <strong className="text-foreground font-semibold">AssetMagnets</strong>.
              </p>
              <p>
                In addition to full-stack engineering, I specialize in <strong className="text-purple-600 dark:text-purple-400 font-semibold">Spring AI &amp; Agentic AI</strong> — building autonomous tool-calling agents and RAG pipelines that bring enterprise intelligence directly into Java and React applications.
              </p>
            </div>

            {/* Quick Stat Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl border border-border/70 bg-card/60 backdrop-blur-xs text-center flex flex-col justify-center"
                >
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 truncate">
                    {item.value}
                  </span>
                  <span className="text-[10px] text-cyan-600 dark:text-cyan-400 truncate">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a href="#contact" className="cosmic-button text-xs sm:text-sm">
                <span>Get In Touch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Debasis_Mohanty_CV.pdf"
                className="secondary-button border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm text-white shadow-md transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Focus Cards */}
          <div className="lg:col-span-6 space-y-4">
            {focusCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group p-5 sm:p-6 rounded-2xl border border-border/80 bg-card hover:border-cyan-500/40 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/80 group-hover:bg-cyan-500/10 transition-colors">
                    {card.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-base sm:text-lg text-foreground">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
