"use client";

import { useState, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { projects } from "@/lib/constants";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const container = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        gsap.from(cardsRef.current, {
            y: 100,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }, { scope: container });

    return (
        <section id="projects" ref={container} className="section-padding bg-secondary/20 relative overflow-hidden">
            {/* Parallax Background Decorations */}
            <ParallaxBackground />

            <div className="container-custom relative z-10">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Some of my best work"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.id} ref={(el) => { if (el) cardsRef.current[index] = el }}>
                            <Card
                                className="cursor-pointer group h-full transition-transform hover:-translate-y-2"
                                onClick={() => setSelectedProject(project)}
                            >
                                <CardHeader>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 pt-2">
                                        {project.liveUrl && (
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.liveUrl, "_blank");
                                                }}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open(project.githubUrl, "_blank");
                                                }}
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="text-muted-foreground">{selectedProject.description}</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-primary">Problem</h3>
                                <p className="text-muted-foreground">{selectedProject.problem}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-primary">Solution</h3>
                                <p className="text-muted-foreground">{selectedProject.solution}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-primary">Impact</h3>
                                <p className="text-muted-foreground">{selectedProject.impact}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {selectedProject.liveUrl && (
                                <Button onClick={() => window.open(selectedProject.liveUrl, "_blank")}>
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Live Demo
                                </Button>
                            )}
                            {selectedProject.githubUrl && (
                                <Button
                                    variant="secondary"
                                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                                >
                                    <Github className="w-4 h-4 mr-2" />
                                    View Code
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}
