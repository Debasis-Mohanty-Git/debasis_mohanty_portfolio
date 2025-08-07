import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import utils from '../lib/utils';

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const stoteTheme = localStorage.getItem("theme");
        if (stoteTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");

        } else {
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    }, [])
    const handleToggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    }
    return (
        <div>
            <button
                className={utils(
                    "fixed top-6 right-5 max-sm:right-16 z-50 rounded-full duration-300",
                    "focus:outline-hidden"
                )}
                onClick={handleToggle}
            >
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>

        </div>
    )
}

export default ThemeToggle
