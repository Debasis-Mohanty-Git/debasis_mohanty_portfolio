import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import { BackGround } from '../Components/BackGround'
import Navbar from '../Components/Navbar'
import HomeSection from '../Components/HomeSection'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Project from '../Components/Project'
import { Contact } from '../Components/Contact'


const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            <ThemeToggle />
            <BackGround />
            <Navbar />

            <main>
                <HomeSection />
                <AboutMe />
                <Skills />
                <Project />
                <Contact />
            </main>
        </div>
    )
}

export default Home
