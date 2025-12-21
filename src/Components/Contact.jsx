import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    CheckCircle,
} from "lucide-react"
import React, { useState } from "react"
import { useToast } from "./hooks/use-toast"
import { Toaster } from "./ui/toaster"

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { toast } = useToast()

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(event.target)
        formData.append("access_key", "c79462ae-e973-4048-a7f1-4616043243f3")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setIsSuccess(true)
                toast({
                    title: "Message sent 🚀",
                    description: "I’ll get back to you shortly.",
                })
                event.target.reset()
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: "Please try again later.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 px-4 bg-secondary/30">
            <Toaster />
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-cyan-500">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Got a project idea or just want to connect? I’m always open to new
                    collaborations and opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT SIDE */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>

                        <div className="space-y-6">
                            <Info icon={<Mail />} title="Email" value="mohantydebasis976@gmail.com" />
                            <Info icon={<Phone />} title="Phone" value="+91 8260800620" />
                            <Info icon={<MapPin />} title="Location" value="Kakatpur, Puri, Odisha" />
                        </div>

                        <div>
                            <h4 className="font-medium mb-4">Around the Web</h4>
                            <div className="flex gap-4">
                                <Social href="https://www.linkedin.com/in/debasis-mohanty-a517a1258">
                                    <Linkedin />
                                </Social>
                                <Social href="https://github.com/Debasis-Mohanty-Git">
                                    <Github />
                                </Social>
                                <Social href="https://www.instagram.com/debasismohanty2k4">
                                    <Instagram />
                                </Social>
                                <Social href="https://t.ly/DyGR0">
                                    <MessageCircle />
                                </Social>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-card p-8 rounded-2xl border shadow-lg relative overflow-hidden">
                        {/* Accent Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />

                        {!isSuccess ? (
                            <>
                                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                                <form className="space-y-6" onSubmit={onSubmit}>
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Debasis Mohanty"
                                            className="w-full px-4 py-3 rounded-lg border bg-background
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="debasis@gmail.com"
                                            className="w-full px-4 py-3 rounded-lg border bg-background
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Your Message</label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            placeholder="Hello, I’d like to discuss a project..."
                                            className="w-full px-4 py-3 rounded-lg border bg-background
              focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                                        />
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 rounded-lg bg-gradient-to-r
            from-cyan-500 to-cyan-600 text-white font-medium
            hover:shadow-lg hover:scale-[1.01]
            transition-all duration-300"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <CheckCircle className="mx-auto text-cyan-500 w-16 h-16 mb-4" />
                                <h3 className="text-2xl font-semibold mb-2">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-muted-foreground">
                                    I’ll contact you soon.
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    )
}

/* ---------- Reusable Components ---------- */
const Info = ({ icon, title, value }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-500">
            {icon}
        </div>
        <div>
            <h4 className="font-medium">{title}</h4>
            <p className="text-muted-foreground">{value}</p>
        </div>
    </div>
)

const Social = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        className="p-3 rounded-full bg-secondary hover:bg-cyan-500 hover:text-white transition"
    >
        {children}
    </a>
)
