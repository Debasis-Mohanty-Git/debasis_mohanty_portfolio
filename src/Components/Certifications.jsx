import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { certifications } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Professional <span className="text-cyan-500">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Industry training and verified technical specializations in Java, Spring Boot, and Spring AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl border border-border/70 bg-card hover:border-cyan-500/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    {cert.issuer}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Link */}
              <div className="pt-6 border-t border-border/50 mt-6 flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[200px]">
                  ID: {cert.credentialId.slice(0, 16)}...
                </span>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

