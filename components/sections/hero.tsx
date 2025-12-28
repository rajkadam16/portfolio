"use client";

import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { personalInfo } from "@/lib/constants";
import { ParticleBackground } from "@/components/three/particle-background";

export function Hero() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <ParticleBackground />

            {/* Content */}
            <div className="container-custom section-padding relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold animate-fade-up">
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>

                    {/* Role */}
                    <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground animate-fade-up animation-delay-200">
                        {personalInfo.role}
                    </p>

                    {/* Tagline with Typing Animation */}
                    <div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-400 min-h-[60px]">
                        <TypingAnimation
                            text={personalInfo.tagline}
                            speed={40}
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
                        <Button
                            size="lg"
                            onClick={scrollToProjects}
                            className="group hover:scale-105 transition-transform"
                        >
                            View Projects
                            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            variant="secondary"
                            onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
                            className="hover:scale-105 transition-transform"
                        >
                            <Download className="mr-2 w-5 h-5" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
        </section>
    );
}
