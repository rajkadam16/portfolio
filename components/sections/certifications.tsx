"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/constants";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
    return (
        <section id="certifications" className="section-padding bg-secondary/20">
            <div className="container-custom">
                <SectionHeading
                    title="Certifications"
                    subtitle="Professional credentials and achievements"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <Card
                            key={cert.id}
                            className="group cursor-pointer animate-fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => window.open(cert.credentialUrl, "_blank")}
                        >
                            <CardHeader>
                                <Award className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                    {cert.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium">{cert.date}</p>
                                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
