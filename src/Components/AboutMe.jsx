import { Briefcase, Code, Code2, User, ExternalLink, Download } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
    return (
        <section id="about" className='py-32 px-4 relative overflow-hidden' >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-cyan-500/5 blur-[120px] rounded-full" />
            
            <div className='container mx-auto max-w-6xl'>
                <div className='flex flex-col md:flex-row gap-16 items-start'>
                    
                    {/* Left Side: Profile Summary */}
                    <div className='md:w-1/2 space-y-8 animate-fade-in'>
                        <div className="space-y-2">
                            <h2 className='text-sm uppercase tracking-[0.3em] text-cyan-500 font-bold'>
                                Introduction
                            </h2>
                            <h3 className='text-4xl md:text-5xl font-bold tracking-tight'>
                                About <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Me</span>
                            </h3>
                        </div>

                        <div className='space-y-4 text-lg text-muted-foreground leading-relaxed'>
                            <p>
                                I am a dedicated <span className='text-white font-medium'>JAVA fullstack & MERN Developer</span> with a strong foundation in building robust, 
                                scalable, and high-performance web applications. My passion lies in crafting 
                                clean and efficient code and delivering real-world solutions.
                            </p>

                            <p>
                                With hands-on experience in both frontend and backend technologies, I focus on building 
                                full-stack applications using <span className='text-cyan-400'>JAVA fullstack/MERN stack</span>. 
                                I value writing maintainable code that aligns with modern industry standards.
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-4 pt-4'>
                            <a href='#contact' className='cosmic-button flex items-center gap-2 group'>
                                Get In Touch 
                                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a href="/cv.pdf" download="Debasis_Mohanty_CV.pdf"
                                className='px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 flex items-center gap-2'>
                                <Download className="h-4 w-4" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Skills/Experience Cards */}
                    <div className='md:w-1/2 grid grid-cols-1 gap-4 w-full'>
                        <SkillCard 
                            icon={<User />} 
                            title="Full Stack Java  & MERN stack Developer" 
                            desc="Building end-to-end applications from scalable architectures to intuitive interfaces."
                            delay="delay-100"
                        />
                        <SkillCard 
                            icon={<Code2 />} 
                            title="Modern Web Development" 
                            desc="Crafting responsive and high-performance websites using the latest industry frameworks."
                            delay="delay-200"
                        />
                        <SkillCard 
                            icon={<Briefcase />} 
                            title="Project Management" 
                            desc="Leading development lifecycles with a focus on clean architecture and timely delivery."
                            delay="delay-300"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

// Sub-component for cleaner code
const SkillCard = ({ icon, title, desc, delay }) => (
    <div className={`group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500 animate-fade-in ${delay}`}>
        <div className='flex items-start gap-5'>
            <div className='p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500'>
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div className='space-y-1'>
                <h4 className='font-bold text-xl text-white'>{title}</h4>
                <p className='text-muted-foreground text-sm leading-relaxed'>{desc}</p>
            </div>
        </div>
    </div>
)

export default AboutMe
