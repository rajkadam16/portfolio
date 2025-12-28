"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { experience, education } from "@/lib/constants";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                <SectionHeading
                    title="Experience & Education"
                    subtitle="My professional journey"
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Briefcase className="w-6 h-6 text-primary" />
                            Work Experience
                        </h3>

                        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border">
                            {experience.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    className="relative pl-8 animate-fade-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[7px] ring-4 ring-background" />

                                    <div className="glass p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold mb-1">{exp.position}</h4>
                                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {exp.duration} • {exp.location}
                                        </p>

                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="text-primary mt-1">▹</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs rounded bg-secondary text-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            Education
                        </h3>

                        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-border">
                            {education.map((edu, index) => (
                                <div
                                    key={edu.id}
                                    className="relative pl-8 animate-fade-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent -translate-x-[7px] ring-4 ring-background" />

                                    <div className="glass p-6 rounded-lg">
                                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                                        <p className="text-accent font-medium mb-2">{edu.institution}</p>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {edu.duration} • {edu.grade}
                                        </p>

                                        {edu.achievements && (
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-accent mt-1">▹</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
