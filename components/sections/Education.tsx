"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education, certifications, achievements } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".edu-item", {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            007
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            EDUCATION & CREDENTIALS
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Education + Achievements */}
          <div>
            <h3
              className="text-mono mb-8"
              style={{ color: "var(--color-accent)", fontSize: "0.875rem" }}
            >
              EDUCATION
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="edu-item"
                  style={{
                    borderLeft: "1px solid var(--color-border)",
                    paddingLeft: "1.5rem",
                  }}
                >
                  <span className="text-mono-sm block mb-1" style={{ color: "var(--color-muted)" }}>
                    {edu.duration}
                  </span>
                  <h4
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                  >
                    {edu.degree}
                  </h4>
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {edu.institution}
                  </span>
                  {edu.grade !== "Ongoing" && (
                    <span className="text-mono-sm ml-3" style={{ color: "var(--color-accent)" }}>
                      {edu.grade}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <h3
              className="text-mono mt-12 mb-6"
              style={{ color: "var(--color-accent)", fontSize: "0.875rem" }}
            >
              ACHIEVEMENTS
            </h3>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="edu-item flex items-start gap-3 text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  <span style={{ color: "var(--color-accent)", marginTop: "0.125rem" }}>◆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3
              className="text-mono mb-8"
              style={{ color: "var(--color-accent)", fontSize: "0.875rem" }}
            >
              CERTIFICATIONS
            </h3>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-item block group pl-6 border-l border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-300"
                >
                  <span className="text-mono-sm block mb-1" style={{ color: "var(--color-muted)" }}>
                    {cert.date} — {cert.issuer}
                  </span>
                  <h4
                    className="text-base font-medium group-hover:text-[var(--color-accent)] transition-colors"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.875rem",
                      color: "var(--color-fg)",
                    }}
                  >
                    {cert.name}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
