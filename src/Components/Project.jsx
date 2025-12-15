import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "E commerce Home Page",
        description: "",
        image: "/Projects/e_commerce.png",
        tags: ["React", "Tailwind", "Spring Boot"],
        demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        githubUrl: "https://github.com/Debasis-Mohanty-Git?tab=repositories",
    },

    {
        id: 2,
        title: "Book Library  Home Page",
        description: "",
        image: "/Projects/e_book.png",
        tags: ["HTML/CSS/JS", "Bootstarp", "Spring Boot"],
        demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        githubUrl: "https://github.com/Debasis-Mohanty-Git?tab=repositories",
    },

    {
        id: 3,
        title: "Smart contact management Home Page",
        description: "",
        image: "/Projects/smart_contact_management.png",
        tags: ["HTML/CSS/JS", "Tailwind", "Spring Boot"],
        demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        githubUrl: "https://github.com/Debasis-Mohanty-Git?tab=repositories",
    },

    {
        id: 4,
        title: "Realtime Chatting Web",
        description: "",
        image: "/Projects/online_chatting.png",
        tags: ["React JS", "Tailwind", "Spring Boot","Web Socket"],
        demoUrl: "https://www.linkedin.com/in/debasis-mohanty-a517a1258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        githubUrl: "https://github.com/Debasis-Mohanty-Git?tab=repositories",
    },
]
const Project = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-cyan-500"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-1 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/Debasis-Mohanty-Git?tab=repositories"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project
