import { Github, Linkedin, Code2, Heart, Instagram, Twitter } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="glass border-t border-border">
            <div className="container-custom px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                        © {currentYear} {personalInfo.name}. Built with ❤️ by Raj Kadam
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={socialLinks.leetcode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                            aria-label="LeetCode"
                        >
                            <Code2 className="w-5 h-5 group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5 group-hover:text-primary transition-colors" />
                        </a>
                        <a
                            href={socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-secondary transition-colors group"
                            aria-label="Twitter/X"
                        >
                            <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
