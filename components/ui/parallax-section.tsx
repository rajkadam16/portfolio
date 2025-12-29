"use client";

import { useParallax } from "@/hooks/use-parallax";
import { ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
    const offset = useParallax(speed);

    return (
        <div
            className={className}
            style={{
                transform: `translateY(${offset}px)`,
                transition: "transform 0.1s ease-out",
            }}
        >
            {children}
        </div>
    );
}
