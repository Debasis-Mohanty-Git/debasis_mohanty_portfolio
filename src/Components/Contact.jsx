import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";
import { useToast } from "./hooks/use-toast";
import { personalInfo } from "../data/portfolioData";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "c79462ae-e973-4048-a7f1-4616043243f3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully 🚀",
          description: "Thank you for reaching out! I'll respond as soon as possible.",
        });
        event.target.reset();
      } else {
        throw new Error(data.message || "Failed to submit message.");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error.message || "Please check your network and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let's Start a <span className="text-cyan-500">Conversation</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-2">
            Interested in hiring, discussing a project, or exploring technical collaborations? Send me a message below.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-border/70 bg-card space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Feel free to contact me directly via email, phone, or professional networks.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/70 transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-cyan-500 transition-colors break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/70 transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Phone
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground group-hover:text-cyan-500 transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="p-2.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/50">
                <span className="text-xs font-semibold text-muted-foreground block mb-3">
                  Find me on
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-border/80 bg-secondary/40 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-border/80 bg-secondary/40 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-border/80 bg-secondary/40 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full border border-border/80 bg-secondary/40 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />

              {!isSuccess ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                    Fill out the form below and I'll get back to you promptly.
                  </p>

                  <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-semibold text-foreground">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Debasis Mohanty"
                        className="w-full px-4 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-semibold text-foreground">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-semibold text-foreground">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Write your project details, inquiry, or job opportunity here..."
                        className="w-full px-4 py-2.5 rounded-xl border border-border/80 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cosmic-button py-3 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Message Delivered!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will reply shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="secondary-button mt-4 border border-border px-5 py-2 text-xs font-semibold text-foreground"
                  >
                    Send Another Note
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
