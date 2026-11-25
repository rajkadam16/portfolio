"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { about, personalInfo } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !textRef.current || !sectionRef.current) return;

    const split = new SplitType(textRef.current, { types: "words" });

    const ctx = gsap.context(() => {
      if (split.words && split.words.length > 0) {
        gsap.set(split.words, { opacity: 0.15 });
        gsap.to(split.words, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            end: "bottom 55%",
            scrub: 1,
          },
        });
      }

      // Clip-path + scale reveal for portrait block
      gsap.fromTo(
        ".about-portrait-frame",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-portrait-frame",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Slow parallax on portrait media
      gsap.fromTo(
        ".about-portrait-media",
        { yPercent: -8, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-portrait-frame",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.from(".about-fact", {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-facts-grid",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            002
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            ABOUT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Statement paragraph */}
          <div className="lg:col-span-8">
            <p ref={textRef} className="text-body-lg" style={{ color: "var(--color-fg)" }}>
              {about.statement}
            </p>
          </div>

          {/* Portrait block with slow parallax + caption */}
          <div className="lg:col-span-4">
            <figure>
              <div
                className="about-portrait-frame relative aspect-[4/5] overflow-hidden rounded-sm"
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {personalInfo.portraitUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={personalInfo.portraitUrl}
                    alt={`${personalInfo.fullName} — ${personalInfo.role}`}
                    loading="lazy"
                    className="about-portrait-media w-full h-full object-cover grayscale contrast-110"
                  />
                ) : (
                  <div className="about-portrait-media w-full h-full flex flex-col items-center justify-center p-8 relative">
                    {/* Architectural grid & monogram fallback */}
                    <div
                      className="absolute inset-4 pointer-events-none"
                      style={{
                        border: "1px solid var(--color-border)",
                        backgroundImage:
                          "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                        opacity: 0.45,
                      }}
                    />
                    <span
                      className="relative text-6xl md:text-7xl font-bold tracking-tighter select-none"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                    >
                      RK
                    </span>
                    <span
                      className="relative text-mono-sm mt-3"
                      style={{ color: "var(--color-accent)" }}
                    >
                      19.0760° N / 72.8777° E
                    </span>
                  </div>
                )}
              </div>
              <figcaption
                className="text-mono-sm mt-3 flex items-center justify-between"
                style={{ color: "var(--color-muted)" }}
              >
                <span>{personalInfo.portraitCaption}</span>
                <span>{personalInfo.role}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Quick facts */}
        <div className="about-facts-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {about.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="about-fact"
              style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "1rem" }}
            >
              <span className="text-mono-sm block mb-2" style={{ color: "var(--color-muted)" }}>
                {fact.label}
              </span>
              <span style={{ color: "var(--color-fg)", fontWeight: 500 }}>{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
