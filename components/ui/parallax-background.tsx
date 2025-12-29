"use client";

import { useParallax } from "@/hooks/use-parallax";

export function ParallaxBackground() {
    const offset1 = useParallax(0.2);
    const offset2 = useParallax(0.4);
    const offset3 = useParallax(0.6);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating circles with different parallax speeds */}
            <div
                className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl parallax-layer"
                style={{
                    transform: `translate3d(0, ${offset1}px, 0)`,
                }}
            />
            <div
                className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl parallax-layer"
                style={{
                    transform: `translate3d(0, ${offset2}px, 0)`,
                }}
            />
            <div
                className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl parallax-layer"
                style={{
                    transform: `translate3d(0, ${offset3}px, 0)`,
                }}
            />
        </div>
    );
}
