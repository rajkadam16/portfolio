"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/constants";

// Color mapping for technologies
const colorMap: { [key: string]: string } = {
    "JavaScript": "text-yellow-400",
    "TypeScript": "text-blue-400",
    "React JS": "text-cyan-400",
    "Angular": "text-red-400",
    "HTML/CSS": "text-orange-400",
    "Bootstrap": "text-purple-400",
    "Tailwind CSS": "text-blue-400",
    "PHP": "text-indigo-400",
    "Python": "text-green-400",
    "Java": "text-red-500",
    "Spring Boot": "text-green-500",
    "REST APIs": "text-pink-400",
    "JWT Authentication": "text-purple-500",
    "WordPress": "text-blue-300",
    "MongoDB": "text-green-400",
    "MySQL/SQL": "text-orange-300",
    "Git & GitHub": "text-gray-300",
    "Postman": "text-orange-500",
    "Docker": "text-blue-500",
};

function TechMarquee({ skillList }: { skillList: { name: string; level: number }[] }) {
    // Duplicate skills for infinite loop effect
    const duplicatedSkills = [...skillList, ...skillList, ...skillList, ...skillList];

    return (
        <div className="relative w-full overflow-hidden py-4 sm:py-6 md:py-8">
            {/* Gradient Overlays for seamless effect - responsive sizes */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container - responsive gap and animation */}
            <div 
                className="flex gap-3 sm:gap-5 md:gap-8 group tech-marquee"
                style={{
                    willChange: 'transform',
                }}
            >
                {duplicatedSkills.map((skill, index) => {
                    const colorClass = colorMap[skill.name] || "text-gray-400";
                    return (
                        <div
                            key={index}
                            className={`text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold ${colorClass} whitespace-nowrap flex-shrink-0 transition-all duration-300`}
                        >
                            {skill.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background">
            <div className="container-custom">
                <SectionHeading
                    title="Skills & Expertise"
                    subtitle="Technologies I work with"
                />

                {/* All Skills Combined Marquee */}
                <div className="mt-8 sm:mt-10 md:mt-12">
                    <TechMarquee skillList={[...skills.frontend, ...skills.backend, ...skills.tools]} />
                </div>

                {/* Stats Summary */}
                <div className="mt-12 sm:mt-14 md:mt-16 pt-8 sm:pt-10 md:pt-12 border-t border-border">
                    <p className="text-center text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                        Proficient in <span className="font-bold text-primary text-base sm:text-lg md:text-xl">
                            {skills.frontend.length + skills.backend.length + skills.tools.length}+ Technologies
                        </span>
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scrollTech {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-25%);
                    }
                }
                
                .tech-marquee {
                    animation: scrollTech 25s linear infinite;
                }
                
                .tech-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
