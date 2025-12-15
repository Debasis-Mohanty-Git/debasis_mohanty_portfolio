import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${isScrolled ? "py-3 shadow-md" : "py-5"}
          bg-white dark:bg-gray-900`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
    
          <a
            href="#home"
            className="text-xl font-bold text-cyan-600 dark:text-cyan-400"
          >
            Debasis<span className="text-gray-800 dark:text-gray-200">'s</span> Portfolio
          </a>

          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-4">
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-xl
          bg-white dark:bg-gray-900 transition-all duration-300 md:hidden
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;

