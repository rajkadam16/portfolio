"use client";

import { useEffect, useState, useRef } from "react";

export function useParallax(speed: number = 0.5) {
    const [offset, setOffset] = useState(0);
    const rafRef = useRef<number | undefined>(undefined);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            // Cancel any pending animation frame
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            // Use requestAnimationFrame for smooth 60fps updates
            rafRef.current = requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;
                // Only update if scroll position changed significantly (reduces unnecessary renders)
                if (Math.abs(scrollY - lastScrollY.current) > 1) {
                    setOffset(scrollY * speed);
                    lastScrollY.current = scrollY;
                }
            });
        };

        // Passive event listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [speed]);

    return offset;
}

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight - windowHeight;
                const scrolled = window.pageYOffset;
                const progress = (scrolled / documentHeight) * 100;
                setProgress(progress);
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return progress;
}
