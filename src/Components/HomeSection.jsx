import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Bot,
  Brain,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { personalInfo } from "../data/portfolioData";
import TechStackCarousel from "./TechStackCarousel";

const HomeSection = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  const likeDocRef = doc(db, "likes", "portfolio");

  useEffect(() => {
    const storedLike = localStorage.getItem("liked_portfolio");
    if (storedLike === "true") {
      setLiked(true);
    }

    const unsubscribe = onSnapshot(
      likeDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setLikes(docSnap.data().count);
        }
      },
      (error) => {
        console.warn("Firestore like snapshot listener notice:", error.message);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    if (liked || isLiking) return;
    setIsLiking(true);

    try {
      const docSnap = await getDoc(likeDocRef);
      if (docSnap.exists()) {
        const currentLikes = docSnap.data().count || 0;
        await updateDoc(likeDocRef, { count: currentLikes + 1 });
        setLiked(true);
        localStorage.setItem("liked_portfolio", "true");
      }
    } catch (err) {
      console.warn("Could not update like counter:", err.message);
      setLikes((prev) => prev + 1);
      setLiked(true);
      localStorage.setItem("liked_portfolio", "true");
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-8 md:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 md:w-[36rem] h-72 sm:h-96 md:h-[36rem] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Top Grid: Content + Circular Avatar */}
      <div className="max-w-6xl w-full mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headings, Agentic AI Badges & Bio */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Agentic AI & Availability Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.status}</span>
              </motion.div>

              {/* Agentic AI Spotlight Pill */}
              <motion.a
                href="#agentic-ai"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold hover:bg-purple-500/25 transition-all cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-purple-500 animate-bounce" />
                <span>Agentic AI &amp; Autonomous Workflows</span>
                <Sparkles className="w-3 h-3 text-amber-400" />
              </motion.a>
            </div>

            {/* Main Heading with Animated Gradient */}
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg font-semibold tracking-wide text-cyan-600 dark:text-cyan-400"
              >
                Hello World, I'm
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]"
              >
                Debasis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600">
                  Mohanty
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-base sm:text-xl font-bold text-foreground/90"
              >
                <span>Software Developer L-1</span>
                <span className="text-cyan-500 hidden sm:inline">•</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Agentic AI &amp; Gen AI Engineer
                </span>
              </motion.div>
            </div>

            {/* Bio Description (Verified from new resume) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Building and deploying production web applications using{" "}
              <strong className="text-foreground font-semibold">Java, Spring Boot, React.js, and MySQL</strong>. Designing secure RESTful APIs with Spring Security &amp; JWT, cloud deployment on AWS, and architecting autonomous{" "}
              <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Agentic AI</strong> workflows. Shipped features for live platforms including <span className="font-semibold text-foreground">Intellpharma</span> and <span className="font-semibold text-foreground">AssetMagnets</span>.
            </motion.p>

            {/* Location Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Primary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2"
            >
              <a href="#projects" className="cosmic-button w-full sm:w-auto text-center">
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Debasis_Mohanty_CV.pdf"
                className="secondary-button w-full sm:w-auto text-center border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-white shadow-md transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#agentic-ai"
                className="secondary-button w-full sm:w-auto text-center text-purple-600 dark:text-purple-400 hover:underline flex items-center justify-center gap-1.5"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Explore Agentic AI</span>
              </a>
            </motion.div>

            {/* Socials & Interactive Like Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-border/50 w-full"
            >
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-border/70 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-border/70 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-full border border-border/70 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Firestore Like Counter */}
              <button
                onClick={handleLike}
                disabled={liked || isLiking}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                  liked
                    ? "bg-rose-500/15 border-rose-500/40 text-rose-500 cursor-default"
                    : "bg-secondary/60 hover:bg-secondary border-border/70 text-muted-foreground hover:text-rose-500 hover:border-rose-300"
                }`}
                title={liked ? "Thanks for liking!" : "Leave a like"}
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-transform ${
                    liked ? "fill-rose-500 scale-110" : "group-hover:scale-110"
                  }`}
                />
                <span>{likes} {likes === 1 ? "Like" : "Likes"}</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 100% Strictly Circular Portrait (Zero Square Border, Zero Square Artifacts) */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 aspect-square flex items-center justify-center"
            >
              {/* Soft circular aura strictly behind the circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-400/20 to-purple-600/25 blur-2xl pointer-events-none" />

              {/* Seamless Circular Frame with crisp glowing ring */}
              <div className="relative w-full h-full rounded-full p-1 sm:p-1.5 bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-600 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent border-2 border-background">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full select-none"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: Java & Spring */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1 -right-2 sm:-right-4 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-black/50 flex items-center gap-1.5 text-[11px] font-semibold text-white z-20"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Java &amp; Spring Boot</span>
              </motion.div>

              {/* Floating Badge 2: Agentic AI */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 -left-2 sm:-left-4 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-black/50 flex items-center gap-1.5 text-[11px] font-semibold text-purple-300 z-20"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>Agentic AI</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: 2-Line Animated Tech Stack Marquee Carousel */}
      <div className="max-w-6xl w-full mx-auto mt-12 sm:mt-16">
        <TechStackCarousel />
      </div>

      {/* Scroll indicator for desktop */}
      <div className="hidden lg:flex justify-center mt-6">
        <a
          href="#agentic-ai"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-500 transition-colors animate-bounce text-xs"
          aria-label="Scroll to agentic AI section"
        >
          <span>Explore AI &amp; Experience</span>
          <ArrowDown className="w-4 h-4 text-cyan-500" />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
