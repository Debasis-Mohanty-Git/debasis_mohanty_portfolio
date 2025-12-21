import React, { useState } from "react"

/* =======================
   SKILLS DATA
======================= */
const skills = [
  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "Spring Boot", level: 80, category: "backend" },
  { name: "WebSocket", level: 70, category: "backend" },
  { name: "Microservices", level: 90, category: "backend" },
  { name: "Spring Security", level: 80, category: "backend" },
  { name: "Spring MVC", level: 90, category: "backend" },
  { name: "Servlets", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "Hibernate / JPA", level: 80, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },

  // Frontend
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "JSP (JavaServer Pages)", level: 80, category: "frontend" },

  // Tools
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Maven", level: 80, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "IntelliJ IDEA", level: 90, category: "tools" },
  { name: "Spring Tool Suite (STS)", level: 85, category: "tools" },
]

const categories = ["all", "backend", "frontend", "tools"]

/* =======================
   COMPONENT
======================= */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAll, setShowAll] = useState(false)

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, 9)

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-500">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
          Technologies and tools I use to build scalable, secure, and
          high-performance applications.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setShowAll(false)
              }}
              className={`px-5 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/30"
                  : "bg-secondary/70 hover:bg-cyan-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        {filteredSkills.length > 9 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
