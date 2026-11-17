export const personalInfo = {
  name: "Debasis Mohanty",
  shortName: "Debasis",
  title: "Software Developer L-1 & Agentic AI Developer",
  headline: "Software Developer L-1 | Agentic AI & Generative AI | Spring Boot & React.js",
  bio: "Software Developer L-1 with hands-on experience building and deploying production web applications using Java, Spring Boot, React.js, and MySQL. Skilled in designing secure RESTful APIs with Spring Security and JWT, cloud deployment on AWS, and architecting Generative AI & Agentic AI integrations with Spring AI. Shipped features for live platforms including Intellpharma and AssetMagnets.",
  location: "Bhubaneswar, Odisha, India",
  email: "mohantydebasis976@gmail.com",
  phone: "+91 8260800620",
  avatar: "/debasis.png",
  resumeUrl: "/cv.pdf",
  socials: {
    github: "https://github.com/Debasis-Mohanty-Git",
    linkedin: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    instagram: "https://www.instagram.com/debasismohanty2k4",
    whatsapp: "https://t.ly/DyGR0",
  },
  status: "Available for Software Engineering & AI roles",
};

export const navItems = [
  { name: "Home", href: "#home", id: "home", icon: "Home" },
  { name: "About", href: "#about", id: "about", icon: "User" },
  { name: "Agentic AI", href: "#agentic-ai", id: "agentic-ai", icon: "Bot" },
  { name: "Experience", href: "#experience", id: "experience", icon: "Briefcase" },
  { name: "Projects", href: "#projects", id: "projects", icon: "FolderGit2" },
  { name: "Skills", href: "#skills", id: "skills", icon: "Cpu" },
  { name: "Certifications", href: "#certifications", id: "certifications", icon: "Award" },
  { name: "Contact", href: "#contact", id: "contact", icon: "Mail" },
];

export const agenticAiFeatures = [
  {
    title: "Autonomous Agent Reasoning Loops",
    badge: "ReAct & Tool Calling",
    description:
      "Designing multi-step Agentic AI architectures that autonomously perceive user intent, generate step-by-step execution plans, call external APIs and tools, and verify output.",
    icon: "Cpu",
    codeSnippet: `// Autonomous Agent Tool Calling Execution\nexport async function executeAgentTask(task) {\n  const plan = await agent.decompose(task);\n  return await toolOrchestrator.dispatch(plan);\n}`,
  },
  {
    title: "Dynamic Enterprise LLM Pipelines",
    badge: "Enterprise AI",
    description:
      "Connecting foundation models to business workflows for intelligent document extraction, dynamic entity structuring, and contextual decision automation.",
    icon: "Sparkles",
    codeSnippet: `const response = await agentEngine.chat({\n  prompt: "Analyze operational metrics",\n  tools: [telemetryTool, indexingTool]\n});`,
  },
  {
    title: "RAG & Contextual Vector Retrieval",
    badge: "Knowledge Augmentation",
    description:
      "Building Retrieval-Augmented Generation (RAG) pipelines that ground agent responses with enterprise vector data for deterministic precision and zero hallucination.",
    icon: "Database",
    codeSnippet: `const docs = await vectorStore.similaritySearch({\n  query: userQuery,\n  topK: 4\n});`,
  },
];

export const experiences = [
  {
    role: "Junior Software Developer",
    company: "AssetMagnets",
    type: "Full-time (On-site)",
    period: "July 2026 – Present",
    location: "Bhubaneswar, India",
    description:
      "Developing and maintaining production RESTful APIs integrated with React.js frontends, supporting real-time data flows, and shipping features for live platforms including Intellpharma and AssetMagnets.",
    responsibilities: [
      "Develop and maintain secure, high-performance RESTful APIs integrated with React.js frontends.",
      "Support real-time production data flows and manage database operations using MySQL & PostgreSQL.",
      "Participate actively in code reviews, technical architecture sessions, and Git-based version control to maintain production-grade code quality.",
      "Shipped production features for live client-facing platforms including Intellpharma and AssetMagnets.",
    ],
    skills: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL", "AWS", "Spring AI", "Git"],
  },
  {
    role: "Junior Software Developer — Intern",
    company: "AssetMagnets",
    type: "Internship (On-site)",
    period: "Jan 2026 – July 2026",
    location: "Bhubaneswar, India",
    description:
      "Built and tested REST API endpoints under senior developer guidance using Node.js, Express.js, and PostgreSQL on live codebases.",
    responsibilities: [
      "Built and tested robust REST API endpoints under senior engineering guidance on live codebases.",
      "Resolved frontend integration issues and state management bugs in React.js, accelerating team sprint deliveries.",
      "Assisted with schema modeling, API documentation in Postman, and automated endpoint verification.",
    ],
    skills: ["Node.js", "Express.js", "PostgreSQL", "React.js", "REST APIs", "Postman", "Git"],
  },
  {
    role: "B.Tech in Electronics and Telecommunication Engineering",
    company: "Trident Academy of Technology (TAT)",
    type: "Education",
    period: "2022 – 2026",
    location: "Bhubaneswar, Odisha",
    description:
      "Graduated with a strong academic and practical focus on software development, web technologies, object-oriented programming (Java), and database management systems.",
    responsibilities: [
      "Core studies in Data Structures, Algorithms, OOP in Java, Database Systems (DBMS), and Computer Networking.",
      "Completed intensive Java Full Stack practical training covering Spring Boot, Microservices, and React.",
    ],
    skills: ["Java", "Data Structures", "Algorithms", "Spring Boot", "MySQL", "Web Technologies"],
  },
  {
    role: "Higher Secondary Education",
    company: "Radhaballav Higher Secondary School",
    type: "Education",
    period: "2021 – 2022",
    location: "Puri, Odisha",
    description:
      "Completed higher secondary education with a rigorous focus on Science stream, mathematics, and foundational computing.",
    responsibilities: [
      "Graduated with strong foundations in analytical problem solving, physics, and mathematics.",
    ],
    skills: ["Mathematics", "Physics", "Analytical Thinking"],
  },
];

export const certifications = [
  {
    title: "Java Spring Framework, Spring Boot, Spring AI – Gen AI",
    issuer: "Udemy (Navin Reddy, Telusko Edutech)",
    date: "Oct 2025",
    credentialId: "UC-6cc8f080-40ca-4812-b71c-68f0c2958ae4",
    verifyUrl: "https://ude.my/UC-6cc8f080-40ca-4812-b71c-68f0c2958ae4",
    highlights: ["Spring Boot 3", "Spring AI & Gen AI", "Microservices", "RESTful Web Services", "Spring Security"],
  },
  {
    title: "Java Full Stack Training",
    issuer: "Trident Academy of Technology",
    date: "Aug – Oct 2025",
    credentialId: "2722c1d7c0afb4645272c5a1022cf956",
    verifyUrl: "https://cert.trident.ac.in/pages/home/verify.php?cert=2722c1d7c0afb4645272c5a1022cf956",
    highlights: ["Java Enterprise", "Spring Boot & JPA", "React.js Frontend", "MySQL / SQL Server", "Full Stack Lifecycle"],
  },
];

export const skillsData = {
  backend: [
    { name: "Java", level: 90, tag: "Primary", iconKey: "java" },
    { name: "Spring Boot", level: 88, tag: "Framework", iconKey: "spring" },
    { name: "Spring Security & JWT", level: 85, tag: "Security", iconKey: "spring" },
    { name: "REST API Development", level: 92, tag: "Architecture", iconKey: "express", invertDark: true },
    { name: "Microservices", level: 82, tag: "Distributed", iconKey: "spring" },
    { name: "Hibernate / JPA", level: 86, tag: "ORM", iconKey: "hibernate" },
    { name: "Node.js & Express.js", level: 82, tag: "MERN", iconKey: "nodejs" },
  ],
  aiAgentic: [
    { name: "Spring AI – Gen AI", level: 88, tag: "Certified", isGemini: true },
    { name: "Agentic AI & Tool Calling", level: 85, tag: "Autonomous", isAi: true },
    { name: "Google Gemini API", level: 88, tag: "LLMs", isGemini: true },
    { name: "Prompt Engineering", level: 90, tag: "Optimization", isGemini: true },
    { name: "RAG & Vector Workflows", level: 82, tag: "Augmentation", iconKey: "postgresql" },
  ],
  frontend: [
    { name: "React.js", level: 88, tag: "Frontend", iconKey: "react" },
    { name: "JavaScript (ES6+)", level: 90, tag: "Core", iconKey: "javascript" },
    { name: "TypeScript", level: 82, tag: "Typed", iconKey: "typescript" },
    { name: "Tailwind CSS", level: 90, tag: "Styling", iconKey: "tailwindcss" },
    { name: "HTML5 & CSS3", level: 94, tag: "Semantics", iconKey: "html5" },
  ],
  cloudDatabase: [
    { name: "MySQL", level: 90, tag: "RDBMS", iconKey: "mysql" },
    { name: "PostgreSQL", level: 86, tag: "Database", iconKey: "postgresql" },
    { name: "AWS (EC2, S3, RDS)", level: 80, tag: "Cloud", iconKey: "aws" },
    { name: "Cloudinary API", level: 85, tag: "Media", isCloudinary: true },
    { name: "Git & GitHub", level: 90, tag: "VCS", iconKey: "git" },
    { name: "Postman (API Testing)", level: 88, tag: "Testing", iconKey: "postman" },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Full Stack E-Commerce Website",
    category: "Java Full Stack",
    description:
      "A production-grade e-commerce platform with product browsing, shopping cart, order processing, and robust user authentication engineered with Spring Security and JWT.",
    image: "/Projects/e_commerce.png",
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Security", "JWT"],
    demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    githubUrl: "https://github.com/Debasis-Mohanty-Git/E-commerce_Frontend",
    featured: true,
  },
  {
    id: 2,
    title: "Online Food Ordering Web Application",
    category: "Java & Real-Time",
    description:
      "Dynamic full-stack food ordering platform supporting real-time order tracking over WebSocket, menu management, Cloudinary media delivery, and JPA database operations.",
    image: "/Projects/food_ordering.png",
    tags: ["Java", "Spring Boot", "JPA", "MySQL", "WebSocket", "Cloudinary API"],
    demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    githubUrl: "https://github.com/Debasis-Mohanty-Git/Food_Delivery_Frontend",
    featured: true,
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    category: "Real-Time / Sockets",
    description:
      "An instant messaging platform engineered with WebSockets for bi-directional messaging, active presence tracking, and responsive clean UI.",
    image: "/Projects/online_chatting.png",
    tags: ["React", "WebSocket", "Spring Boot", "Tailwind CSS"],
    demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    githubUrl: "https://github.com/Debasis-Mohanty-Git",
    featured: true,
  },
  {
    id: 4,
    title: "Smart Contact Management System",
    category: "Java Full Stack",
    description:
      "A secure contact organizer with role-based access control, contact search, pagination, and cloud contact management built with Spring Boot and Tailwind.",
    image: "/Projects/smart_contact_management.png",
    tags: ["Spring Boot", "MySQL", "Tailwind CSS", "JPA/Hibernate"],
    demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    githubUrl: "https://github.com/Debasis-Mohanty-Git",
    featured: false,
  },
  {
    id: 5,
    title: "Online Book Library Management System",
    category: "Java / MVC",
    description:
      "An automated library portal for cataloging books, tracking lending cycles, member registries, and fine management with clean database relations.",
    image: "/Projects/e_book.png",
    tags: ["Spring Boot", "Bootstrap", "MySQL", "JSP / Servlets"],
    demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258",
    githubUrl: "https://github.com/Debasis-Mohanty-Git",
    featured: false,
  },
];
