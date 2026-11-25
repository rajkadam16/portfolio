"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeTween = useRef<gsap.core.Tween | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".skill-accordion-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      const marqueeTrack = marqueeRef.current?.querySelector(".marquee-track");
      if (marqueeTrack) {
        marqueeTween.current = gsap.to(marqueeTrack, {
          xPercent: -50,
          duration: 28,
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            004
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            CAPABILITIES
          </span>
        </div>

        {/* Accordion */}
        <div>
          {skills.categories.map((cat, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={cat.title}
                className="skill-accordion-item"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 md:py-8 group text-left"
                  aria-expanded={isOpen}
                  aria-controls={`skill-panel-${i}`}
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-mono-sm" style={{ color: "var(--color-accent)" }}>
                      {`{${num}}`}
                    </span>
                    <span
                      className="text-xl md:text-2xl font-semibold transition-colors group-hover:text-[var(--color-accent)]"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  <span
                    className="text-2xl transition-transform duration-300"
                    style={{
                      color: "var(--color-muted)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`skill-panel-${i}`}
                  role="region"
                  style={{
                    maxHeight: isOpen ? "420px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition:
                      "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
                  }}
                >
                  <div className="pb-6 md:pb-8 pl-10 md:pl-16 flex flex-wrap gap-3">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm transition-colors hover:border-[var(--color-accent)]"
                        style={{
                          border: "1px solid var(--color-border)",
                          color: "var(--color-fg)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seamless infinite marquee */}
        <div
          ref={marqueeRef}
          className="mt-16 overflow-hidden py-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
          aria-hidden="true"
          onMouseEnter={() => {
            if (marqueeTween.current) {
              gsap.to(marqueeTween.current, { timeScale: 0.25, duration: 0.4 });
            }
          }}
          onMouseLeave={() => {
            if (marqueeTween.current) {
              gsap.to(marqueeTween.current, { timeScale: 1, duration: 0.4 });
            }
          }}
        >
          <div className="marquee-track flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-8 pr-8 whitespace-nowrap flex-shrink-0">
                {skills.all.map((name, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="text-2xl md:text-4xl font-bold uppercase flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      WebkitTextStroke: "1px var(--color-border)",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
