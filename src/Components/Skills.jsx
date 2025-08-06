import React, { useState } from 'react';
import utils from '../lib/utils';

const skills = [
  { name: "Java", level: 80, category: "backend" },
  { name: "Spring Boot", level: 80, category: "backend" },
  { name: "Spring MVC", level: 90, category: "backend" },
  { name: "Spring Security", level: 80, category: "backend" },
  { name: "Servlets", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "Hibernate / JPA", level: 80, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },

  { name: "HTML5/CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "JSP (JavaServer Pages)", level: 80, category: "frontend" },

  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Maven", level: 80, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "IntelliJ IDEA", level: 90, category: "tools" },
  { name: "Spring Tool Suite (STS)", level: 85, category: "tools" },
];

const categories = ["all", "backend", "frontend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 9);

  return (
    <div className='py-24 px-4 relative bg-secondary/30' id="skills">
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My <span className='text-cyan-500'>Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category, key) => (
            <button
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); 
              }}
              className={utils(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-cyan-500 text-cyan-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-cyan-500'
              )}
              key={key}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {displayedSkills.map((skill, key) => (
            <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
              <div className='text-left mb-4'>
                <h3 className='font-semibold text-lg'>{skill.name}</h3>
              </div>
              <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                <div
                  className='bg-cyan-200 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className='text-right mt-1'>
                <span className='text-sm text-muted-foreground'>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length > 9 && (
          <div className='flex justify-center mt-8'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='text-white bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg transition duration-300'
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
