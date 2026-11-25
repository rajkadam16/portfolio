"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      onComplete();
    };

    if (prefersReduced) {
      finish();
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (!containerRef.current) {
          finish();
          return;
        }
        gsap.to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.65,
          ease: "power4.inOut",
          onComplete: finish,
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(counter.value)),
    });

    const skip = () => {
      if (completedRef.current) return;
      tl.kill();
      setCount(100);
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.4,
          ease: "power3.inOut",
          onComplete: finish,
        });
      } else {
        finish();
      }
    };

    window.addEventListener("click", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });

    return () => {
      tl.kill();
      window.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10001] flex flex-col items-center justify-center select-none"
      style={{ backgroundColor: "var(--color-bg)", clipPath: "inset(0 0 0 0)" }}
      aria-live="polite"
      role="status"
    >
      <div className="text-center">
        <p className="text-mono-sm mb-4" style={{ color: "var(--color-muted)" }}>
          IDX / RK — PORTFOLIO
        </p>
        <span
          className="text-7xl md:text-9xl font-bold tabular-nums block"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
        >
          {String(count).padStart(3, "0")}
        </span>
        <p className="text-mono-sm mt-6 opacity-60" style={{ color: "var(--color-muted)" }}>
          CLICK OR PRESS ANY KEY TO SKIP
        </p>
      </div>
    </div>
  );
}
