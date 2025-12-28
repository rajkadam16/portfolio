"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Code2, Send, Instagram, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/constants";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this to a backend API
        const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const socials = [
        { icon: Github, url: socialLinks.github, label: "GitHub" },
        { icon: Linkedin, url: socialLinks.linkedin, label: "LinkedIn" },
        { icon: Code2, url: socialLinks.leetcode, label: "LeetCode" },
        { icon: Instagram, url: socialLinks.instagram, label: "Instagram" },
        { icon: Twitter, url: socialLinks.twitter, label: "Twitter" },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Let's work together on your next project"
                />

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div className="animate-fade-up">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info & Social Links */}
                    <div className="space-y-8 animate-fade-up animation-delay-200">
                        <div className="glass p-8 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                            <p className="text-muted-foreground mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                                    {personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-xl">
                            <h3 className="text-xl font-bold mb-6">Follow Me</h3>
                            <div className="space-y-4">
                                {socials.map(({ icon: Icon, url, label }) => (
                                    <a
                                        key={label}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                                    >
                                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                        <span className="font-medium group-hover:text-primary transition-colors">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
