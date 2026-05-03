"use client";

import { useState, useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { projects } from "@/lib/constants";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const container = useRef<HTMLElement>(null);
    const swiperRef = useRef<any>(null);

    useGSAP(() => {
        gsap.from(container.current, {
            y: 50,
            autoAlpha: 0,
            duration: 0.8,
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
                    subtitle="Swipe through my best work"
                />

                {/* Swiper Slider */}
                <div className="mt-12 relative px-12">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        className="pb-16"
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id} className="!w-96">
                                <div 
                                    className="glass p-6 rounded-2xl border border-white/10 cursor-pointer group h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="space-y-4">
                                        {/* Project Header */}
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                                                    +{project.techStack.length - 4} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-2 pt-4 border-t border-white/10">
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.liveUrl, "_blank");
                                                    }}
                                                    className="text-xs"
                                                >
                                                    <ExternalLink className="w-3 h-3 mr-1" />
                                                    Live
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
                                                    className="text-xs"
                                                >
                                                    <Github className="w-3 h-3 mr-1" />
                                                    Code
                                                </Button>
                                            )}
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                                className="text-xs ml-auto"
                                            >
                                                Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 shadow-lg">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary hover:bg-primary/80 text-white transition-all duration-300 shadow-lg">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination mt-8 flex justify-center gap-2 !static" />
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

                        <div className="flex gap-3 pt-4 border-t border-border">
                            {selectedProject.liveUrl && (
                                <Button
                                    onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                                >
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

            {/* Custom Swiper Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: var(--color-primary);
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                }
                .swiper-button-prev::after,
                .swiper-button-next::after {
                    display: none;
                }
            `}</style>
        </section>
    );
}
