"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-2 w-10 h-10" />;
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative p-2 rounded-full transition-all duration-300",
                "glass hover:neon-glow",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute inset-0 transition-all duration-300",
                        theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                    )}
                />
            </div>
        </button>
    );
}
