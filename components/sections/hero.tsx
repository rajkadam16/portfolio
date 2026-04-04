"use client";

import { useRef } from "react";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { personalInfo } from "@/lib/constants";
import { ParticleBackground } from "@/components/three/particle-background";
import { useParallax } from "@/hooks/use-parallax";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function Hero() {
    const backgroundOffset = useParallax(0.3);
    const contentOffset = useParallax(0.5);
    const scrollIndicatorOffset = useParallax(0.7);
    
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from(".hero-title", { 
            y: 50, 
            autoAlpha: 0, 
            duration: 1, 
            ease: "power4.out" 
        })
        .from(".hero-role", { 
            y: 30, 
            autoAlpha: 0, 
            duration: 0.8, 
            ease: "power3.out" 
        }, "-=0.6")
        .from(".hero-tagline", { 
            autoAlpha: 0, 
            y: 20,
            duration: 1 
        }, "-=0.4")
        .from(".hero-buttons", { 
            scale: 0.9, 
            autoAlpha: 0, 
            duration: 0.6, 
            ease: "back.out(1.5)" 
        }, "-=0.5")
        .from(".hero-scroll-indicator", {
            autoAlpha: 0,
            y: -20,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.2");
    }, { scope: container });

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background with Parallax */}
            <div
                className="absolute inset-0 parallax-layer"
                style={{
                    transform: `translate3d(0, ${backgroundOffset}px, 0)`,
                }}
            >
                <ParticleBackground />
            </div>

            {/* Content with Parallax */}
            <div
                className="container-custom section-padding relative z-10 parallax-layer"
                style={{
                    transform: `translate3d(0, ${contentOffset}px, 0)`,
                }}
            >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Name */}
                    <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold">
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>

                    {/* Role */}
                    <p className="hero-role text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                        {personalInfo.role}
                    </p>

                    {/* Tagline with Typing Animation */}
                    <div className="hero-tagline text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto min-h-[60px]">
                        <TypingAnimation
                            text={personalInfo.tagline}
                            speed={40}
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
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

            {/* Scroll Indicator with Parallax */}
            <div
                className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 parallax-layer"
                style={{
                    transform: `translateX(-50%) translate3d(0, ${scrollIndicatorOffset}px, 0)`,
                }}
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
        </section>
    );
}
