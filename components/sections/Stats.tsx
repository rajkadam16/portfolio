"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function Stats() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const counters = rowRef.current!.querySelectorAll("[data-counter]");

      counters.forEach((el) => {
        const target = Number(el.getAttribute("data-counter"));
        const counter = { value: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            if (prefersReduced) {
              el.textContent = String(target);
              return;
            }
            gsap.to(counter, {
              value: target,
              duration: 1.8,
              ease: "power2.out",
              snap: { value: 1 },
              onUpdate: () => {
                el.textContent = String(Math.round(counter.value));
              },
            });
          },
        });
      });

      if (!prefersReduced) {
        gsap.from(".stat-item", {
          y: 36,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, rowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            003
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            PERFORMANCE SNAPSHOT
          </span>
        </div>

        <div
          ref={rowRef}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item py-8 md:py-12 px-4 flex flex-col items-center text-center border-b border-[var(--color-border)] ${
                i % 2 === 0 ? "border-r border-[var(--color-border)]" : ""
              } ${i < stats.length - 1 ? "md:border-r md:border-[var(--color-border)]" : "md:border-r-0"}`}
            >
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  data-counter={stat.value}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                >
                  0
                </span>
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  {stat.suffix}
                </span>
              </div>
              <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
