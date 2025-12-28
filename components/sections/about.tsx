"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { about, personalInfo } from "@/lib/constants";
import { Code2, Database, Layout, Server } from "lucide-react";

const techIcons = [
    { Icon: Code2, name: "Frontend" },
    { Icon: Server, name: "Backend" },
    { Icon: Database, name: "Database" },
    { Icon: Layout, name: "UI/UX" },
];

export function About() {
    return (
        <section id="about" className="section-padding bg-secondary/20">
            <div className="container-custom">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me better"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Bio */}
                    <div className="space-y-6 animate-fade-up">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {about.shortBio}
                        </p>

                        <div className="space-y-3">
                            {about.journey.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 animate-fade-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Tech Stack Icons */}
                    <div className="grid grid-cols-2 gap-6">
                        {techIcons.map(({ Icon, name }, index) => (
                            <div
                                key={name}
                                className="glass p-8 rounded-xl text-center card-hover animate-fade-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="font-semibold text-lg">{name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
