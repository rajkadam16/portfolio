"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Get theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
    };

    if (!mounted) {
        return <div className="p-2 w-10 h-10" />;
    }

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
