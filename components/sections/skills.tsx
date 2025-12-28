"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/constants";

interface SkillCardProps {
    category: string;
    skillList: { name: string; level: number }[];
    delay: number;
}

function SkillCard({ category, skillList, delay }: SkillCardProps) {
    return (
        <Card className="animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
            <CardHeader>
                <CardTitle className="text-2xl capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <SectionHeading
                    title="Skills & Expertise"
                    subtitle="Technologies I work with"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    <SkillCard category="frontend" skillList={skills.frontend} delay={0} />
                    <SkillCard category="backend" skillList={skills.backend} delay={200} />
                    <SkillCard category="tools" skillList={skills.tools} delay={400} />
                </div>
            </div>
        </section>
    );
}
