import { ArrowBigDown } from 'lucide-react'
import React from 'react'

const HomeSection = () => {
    return (
        <section className='relative min-h-screen flex flex-col items-center justify-center px-4'
            id="home">

            <div className='containet max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                        <span className='text-cyan-500 opacity-0 animate-fade-in-delay-1'>Debasis </span>
                        <span className='text-cyan-500 opacity-0 animate-fade-in-delay-2'>Mohanty</span>
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        Hey there! I'm Debasis Mohanty — welcome to my portfolio.
                        I love turning ideas into real things on the web. This site is where I share my journey,
                        the projects I’ve worked on, and what I’m learning along the way. 
                        Feel free to look around and check out what I’ve been up to!
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a className='cosmic-button'
                        href="#projects">View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowBigDown className='h-5 w-5 text-cyan-600'></ArrowBigDown>
            </div>


        </section>
    )
}

export default HomeSection
