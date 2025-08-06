import React, { useEffect } from 'react'
import utils from '../lib/utils'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItem = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contsct", href: "#contact" }
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <nav className={utils(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            {/* For large screen */}
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-cyan-500 flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Debasis's </span>{" "}
                        Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItem.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-cyan-500 transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

            </div>

            {/* For mobile screen */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50 absolute top-4 right-4"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={utils(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItem.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
