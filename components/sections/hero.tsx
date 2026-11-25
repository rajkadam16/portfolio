"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { personalInfo } from "@/data/resume";

export function Hero({ ready = true }: { ready?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ready) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !nameRef.current || !sectionRef.current) return;

    const split = new SplitType(nameRef.current, { types: "lines,chars" });

    split.lines?.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (split.chars) {
        tl.from(split.chars, {
          y: "100%",
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.03,
        });
      }

      tl.from(
        ".hero-subtitle",
        { y: 24, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.55"
      )
        .from(
          ".hero-labels",
          { y: 16, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-badge",
          { scale: 0.85, opacity: 0, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.35"
        )
        .from(
          ".hero-scroll-cue",
          { opacity: 0, y: -10, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [ready]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-center"
      style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
    >
      <div className="container-xl">
        {/* Index labels */}
        <div className="hero-labels flex items-center gap-4 mb-8">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            IDX / RK
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            MOD — 01
          </span>
        </div>

        {/* Giant name */}
        <h1 ref={nameRef} className="text-hero mb-6" aria-label={personalInfo.name}>
          {personalInfo.name}
        </h1>

        {/* Subtitle row */}
        <div className="hero-subtitle flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
          <span
            className="text-mono"
            style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}
          >
            {personalInfo.role} — {personalInfo.tagline}
          </span>
          <div className="hairline flex-1 hidden sm:block" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            {personalInfo.location}
          </span>
        </div>

        {/* Availability badge */}
        <div
          className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit"
          style={{ border: "1px solid var(--color-accent)" }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <span className="text-mono-sm" style={{ color: "var(--color-accent)" }}>
            {personalInfo.availability}
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, var(--color-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
