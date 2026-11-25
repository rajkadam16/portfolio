"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        y: 40,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            005
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            EXPERIENCE
          </span>
        </div>

        <div className="overflow-hidden">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="exp-row group relative"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              {/* Hover accent line drawing across */}
              <div
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out pointer-events-none"
                style={{ backgroundColor: "var(--color-accent)" }}
              />

              <div className="py-8 md:py-10 transition-transform duration-300 ease-out group-hover:translate-x-2 md:group-hover:translate-x-4">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span
                    className="text-mono-sm flex-shrink-0"
                    style={{ color: "var(--color-muted)", minWidth: "180px" }}
                  >
                    {exp.duration}
                  </span>
                  <div>
                    <h3
                      className="text-xl md:text-2xl font-semibold mb-1 group-hover:text-[var(--color-accent)] transition-colors"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                    >
                      {exp.position}
                    </h3>
                    <span className="text-mono" style={{ color: "var(--color-muted)" }}>
                      {exp.company} — {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 md:pl-[212px]">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--color-muted)" }}
                    >
                      <span
                        style={{ color: "var(--color-accent)", marginTop: "0.25rem", flexShrink: 0 }}
                      >
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4 md:pl-[212px]">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-mono-sm px-3 py-1 rounded-full"
                      style={{
                        border: "1px solid var(--color-border)",
                        color: "var(--color-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
