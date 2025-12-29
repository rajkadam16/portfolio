"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, FileText, Clock, Award, Code2 } from "lucide-react";

const metrics = [
    {
        id: 1,
        icon: Users,
        label: "Code Snippet Manager Users",
        value: 200,
        suffix: "+",
        description: "Registered users on the platform",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        id: 2,
        icon: TrendingUp,
        label: "Daily Active Users",
        value: 100,
        suffix: "+",
        description: "Users engaging daily with the platform",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        id: 3,
        icon: FileText,
        label: "Resumes Processed",
        value: 500,
        suffix: "+",
        description: "AI Resume Screening System",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
    {
        id: 4,
        icon: Clock,
        label: "Time Saved",
        value: 75,
        suffix: "%",
        description: "Reduction in screening time",
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        id: 5,
        icon: Code2,
        label: "Properties Managed",
        value: 200,
        suffix: "+",
        description: "Property Rental System",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
    },
    {
        id: 6,
        icon: Award,
        label: "Total Platform Users",
        value: 200,
        suffix: "+",
        description: "Across all projects",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
];

export function AnalyticsDashboard() {
    return (
        <section id="analytics" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <SectionHeading
                    title="Real Impact"
                    subtitle="Numbers that showcase the reach and effectiveness of my projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <Card
                                key={metric.id}
                                className="card-hover animate-fade-up border-2 hover:border-primary/50 transition-all"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                                            <Icon className={`w-6 h-6 ${metric.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-3xl font-bold mb-1">
                                                <AnimatedCounter
                                                    end={metric.value}
                                                    suffix={metric.suffix}
                                                    duration={2500}
                                                />
                                            </div>
                                            <h3 className="font-semibold text-sm mb-1">
                                                {metric.label}
                                            </h3>
                                            <p className="text-xs text-muted-foreground">
                                                {metric.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Summary Stats */}
                <div className="mt-12 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="font-semibold">
                            Building products that serve{" "}
                            <span className="text-primary">thousands of users</span> daily
                        </span>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        These metrics represent real users, real impact, and real-world applications
                        of my full-stack development skills across multiple domains.
                    </p>
                </div>
            </div>
        </section>
    );
}
