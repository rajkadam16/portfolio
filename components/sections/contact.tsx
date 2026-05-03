"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Code2, Send, Instagram, Twitter, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/constants";

const FORMSPREE_ID = "xyzzyknq";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                setSubmitError("Failed to send. Please try again.");
            }
        } catch (error) {
            setSubmitError("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
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
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-label="Your full name"
                                    className="w-full px-4 py-3 rounded-lg glass focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-label="Your email address"
                                    className="w-full px-4 py-3 rounded-lg glass focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    aria-required="true"
                                    aria-label="Your message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg glass focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {submitSuccess && (
                                <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 text-green-600 border border-green-500/30">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}
                            {submitError && (
                                <div className="p-4 rounded-lg bg-red-500/10 text-red-600 border border-red-500/30">
                                    {submitError}
                                </div>
                            )}
                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                <Send className="w-5 h-5 mr-2" />
                                {isSubmitting ? "Sending..." : "Send Message"}
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
