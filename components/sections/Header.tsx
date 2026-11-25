"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react";
import { personalInfo, navItems } from "@/data/resume";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useSmoothScroll } from "@/components/layout/SmoothScroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("--:--");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { scrollTo } = useSmoothScroll();

  // Live time in Asia/Kolkata
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: personalInfo.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lastY = window.scrollY;
    let hidden = false;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        if (y > lastY + 4 && !hidden) {
          hidden = true;
          if (prefersReduced) {
            header.style.transform = "translateY(-100%)";
          } else {
            gsap.to(header, { yPercent: -100, duration: 0.3, ease: "power2.inOut" });
          }
        } else if (y < lastY - 4 && hidden) {
          hidden = false;
          if (prefersReduced) {
            header.style.transform = "translateY(0)";
          } else {
            gsap.to(header, { yPercent: 0, duration: 0.3, ease: "power2.inOut" });
          }
        }
      } else if (hidden) {
        hidden = false;
        gsap.set(header, { yPercent: 0 });
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync body overflow + Escape key + entrance animation for mobile menu
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (menuRef.current && !prefersReduced) {
        gsap.fromTo(
          menuRef.current,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.55, ease: "power4.inOut" }
        );
        gsap.fromTo(
          menuRef.current.querySelectorAll(".mobile-nav-link"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.07, delay: 0.2, duration: 0.7, ease: "power4.out" }
        );
      }

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }

    document.body.style.overflow = prevOverflow;
    return undefined;
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollTo(href);
    }, 60);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{
          willChange: "transform",
          backgroundColor: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="container-xl">
          <div
            className="flex items-center justify-between h-16 md:h-20"
            style={{ borderBottom: "1px solid var(--color-border)" }}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(0);
              }}
              className="text-mono tracking-widest hover:text-[var(--color-accent)] transition-colors"
              style={{ color: "var(--color-fg)", fontSize: "0.85rem", fontWeight: 600 }}
            >
              RK.
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-mono hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-muted)" }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-4">
              {/* Live local time chip */}
              <span
                className="text-mono-sm px-3 py-1.5 rounded-full tabular-nums"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-muted)",
                }}
              >
                {time} IST
              </span>

              {/* Light / Dark Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="p-2 rounded-full magnetic-wrap transition-colors hover:border-[var(--color-accent)]"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-fg)",
                }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Download CV */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mono-sm px-4 py-2 rounded-full magnetic-wrap transition-colors hover:bg-[var(--color-accent)] hover:text-black"
                style={{
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                Download CV
              </a>
            </div>

            {/* Mobile right controls */}
            <div className="md:hidden flex items-center gap-3">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="p-2 rounded-full"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-fg)",
                }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                className="p-2 relative z-[1002]"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className="block h-px transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-fg)",
                      transform: menuOpen ? "rotate(45deg) translate(2px, 4px)" : "none",
                    }}
                  />
                  <span
                    className="block h-px transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-fg)",
                      opacity: menuOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="block h-px transition-all duration-300"
                    style={{
                      backgroundColor: "var(--color-fg)",
                      transform: menuOpen ? "rotate(-45deg) translate(2px, -4px)" : "none",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[1001] flex flex-col items-center justify-center gap-6 md:hidden"
          style={{ backgroundColor: "var(--color-bg)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="mobile-nav-link text-section-title hover:text-[var(--color-accent)] transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Time + CV in mobile menu */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <span className="text-mono-sm tabular-nums" style={{ color: "var(--color-muted)" }}>
              {time} IST
            </span>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mono-sm px-5 py-2.5 rounded-full"
              style={{
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}
