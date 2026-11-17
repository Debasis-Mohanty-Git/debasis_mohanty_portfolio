import React, { useState } from "react";

// Official Devicon CDN URLs mapping - The exact, authentic, industry-standard brand SVGs
export const DEV_ICONS = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  hibernate: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
  socketio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
};

// Reusable TechLogo component that displays the real official SVG with graceful error handling
export const TechLogo = ({ name, iconKey, className = "w-5 h-5", invertInDark = false, customSvg = null }) => {
  const [hasError, setHasError] = useState(false);
  const src = DEV_ICONS[iconKey];

  if (customSvg) {
    return <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>{customSvg}</div>;
  }

  if (hasError || !src) {
    // Elegant fallback icon
    return (
      <div className={`inline-flex items-center justify-center shrink-0 rounded-md bg-cyan-500/10 text-cyan-500 font-bold text-[10px] ${className}`}>
        {name ? name.slice(0, 2).toUpperCase() : "DEV"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} official logo`}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`inline-block object-contain shrink-0 ${className} ${
        invertInDark ? "dark:invert dark:brightness-200" : ""
      }`}
    />
  );
};

// Google Gemini Real Multi-Color Vector Star
export const RealGeminiIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
      fill="url(#real-gemini-gradient)"
    />
    <defs>
      <linearGradient id="real-gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="0.35" stopColor="#9B72CF" />
        <stop offset="0.75" stopColor="#D96570" />
        <stop offset="1" stopColor="#F4B400" />
      </linearGradient>
    </defs>
  </svg>
);

// Agentic AI Autonomous Network Vector
export const RealAgenticAiIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="url(#real-ai-grad)" strokeWidth="1.8" />
    <circle cx="12" cy="8" r="2" fill="#06B6D4" />
    <circle cx="8" cy="15" r="2" fill="#A855F7" />
    <circle cx="16" cy="15" r="2" fill="#3B82F6" />
    <path d="M12 10v2m-2.5 1.5 1.5-1.5m3 1.5-1.5-1.5" stroke="#94A3B8" strokeWidth="1.5" />
    <defs>
      <linearGradient id="real-ai-grad" x1="3" y1="3" x2="21" y2="21">
        <stop stopColor="#06B6D4" />
        <stop offset="0.5" stopColor="#A855F7" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

// Cloudinary Official Blue Cloud
export const RealCloudinaryIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      fill="#3448C5"
    />
  </svg>
);
