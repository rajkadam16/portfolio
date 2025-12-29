"use client";

import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!isIntersecting || hasAnimated) return;

        setHasAnimated(true);
        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = startValue + (end - startValue) * easeOutQuart;

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isIntersecting, end, duration, hasAnimated]);

    const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

    return (
        <span ref={ref as React.RefObject<HTMLSpanElement>} className="tabular-nums">
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}
