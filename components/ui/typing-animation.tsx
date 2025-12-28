"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
    text: string;
    speed?: number;
    className?: string;
}

export function TypingAnimation({ text, speed = 50, className = "" }: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            {displayedText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
                |
            </span>
        </span>
    );
}
