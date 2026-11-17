import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience &amp; <span className="text-cyan-500">Education</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            A track record of professional growth, full-stack execution, and technical contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/80 dark:border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => {
            const isEducation = exp.type === "Education";
            const isCurrent = exp.period.includes("Present");

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
                    isCurrent
                      ? "bg-cyan-500 border-white text-white shadow-cyan-500/50"
                      : "bg-card border-border text-muted-foreground group-hover:border-cyan-500 group-hover:text-cyan-500"
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl border border-border/70 bg-card hover:border-cyan-500/40 shadow-xs hover:shadow-md transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            exp.type === "Full-time"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                              : exp.type === "Internship"
                              ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20"
                              : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description Summary */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bulleted Key Contributions */}
                  <div className="space-y-2 mb-5">
                    {exp.responsibilities.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

