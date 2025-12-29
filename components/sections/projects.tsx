"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { projects } from "@/lib/constants";
import { ParallaxBackground } from "@/components/ui/parallax-background";

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="section-padding bg-secondary/20 relative overflow-hidden">
            {/* Parallax Background Decorations */}
            <ParallaxBackground />

            <div className="container-custom relative z-10">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Some of my best work"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="cursor-pointer group animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
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
