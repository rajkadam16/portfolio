import { Award, Trophy, Star, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
    icon?: "award" | "trophy" | "star" | "target";
    title: string;
    description: string;
    className?: string;
}

export function AchievementBadge({
    icon = "award",
    title,
    description,
    className
}: AchievementBadgeProps) {
    const icons = {
        award: Award,
        trophy: Trophy,
        star: Star,
        target: Target,
    };

    const Icon = icons[icon];

    return (
        <div className={cn("glass p-6 rounded-xl card-hover", className)}>
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 neon-glow">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </div>
    );
}
