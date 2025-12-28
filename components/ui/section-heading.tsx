import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={cn("text-center mb-16 animate-fade-up", className)}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
