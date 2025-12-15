import { Briefcase, Code, Code2, User } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
    return (
        <section id="about" className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                    About <span className='text-cyan-500'>Me</span>
                </h2>
                <br></br>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    {/* Profile Summery */}
                    <div className='space-y-3'>
                        <h3 className='text-2xl font-semibold'>Passionate Java Developer</h3>
                        <p className='text-muted-foreground'>
                            I am a dedicated Java developer with a strong foundation in building robust, 
                            scalable, and high-performance web applications. My passion lies in crafting 
                            clean and efficient code, designing intuitive user experiences, and delivering 
                            real-world solutions that make an impact. I enjoy turning complex problems into 
                            simple, elegant solutions using modern frameworks and best development practices.
                        </p>

                        <p className='text-muted-foreground'>
                            With hands-on experience in both frontend and backend technologies, I focus on building 
                            full-stack applications using Java, Spring Boot, MySQL, and tools like Git, Postman, and Maven. 
                            I value collaboration, continuous learning, and writing maintainable code that aligns with industry 
                            standards. My goal is to build meaningful software that not only works flawlessly but also adds value 
                            to users and businesses.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                Get In Touch
                            </a>

                            <a href="/cv.pdf" download="Debasis_Mohanty_CV.pdf"
                                className='px-6 py-2 rounded-full border border-cyan-300 text-primary hover:bg-cyan-500 hover:text-black'>
                                Download CV
                            </a>
                        </div>

                    </div>
                    {/* Skills */}
                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-cyan/10'>
                                    <User className='h-6 w-6 text-cyan-400'></User>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Full Stack Java Developer</h4>
                                    <p className='text-muted-foreground'>
                                        Designing and developing complete web applications — from robust backend systems to dynamic, user-friendly frontends.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-cyan/10'>
                                    <Code2 className='h-6 w-6 text-cyan-400'></Code2>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Development</h4>
                                    <p className='text-muted-foreground'>Createing responsive website and web application with modern frameworks</p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-cyan/10'>
                                    <Briefcase className='h-6 w-6 text-cyan-400'></Briefcase>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Project Management</h4>
                                    <p className='text-muted-foreground'>
                                        Planning, organizing, and managing projects from start to finish to ensure timely delivery, team coordination, and quality outcomes.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default AboutMe
