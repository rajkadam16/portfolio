"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const view = viewRef.current;
    if (!dot || !ring || !view) return;

    dot.style.display = "block";
    ring.style.display = "block";
    view.style.display = "flex";
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let rafId = 0;
    let active = true;

    const tick = () => {
      if (!active) return;

      gsap.set(dot, {
        x: pos.current.x - 4,
        y: pos.current.y - 4,
      });

      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);
      gsap.set(ring, {
        x: ringPos.current.x - 20,
        y: ringPos.current.y - 20,
      });

      gsap.set(view, {
        x: ringPos.current.x - 40,
        y: ringPos.current.y - 40,
      });

      rafId = requestAnimationFrame(tick);
    };

    let currentViewTarget: Element | null = null;
    let currentHoverTarget: Element | null = null;

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewEl = target.closest("[data-cursor-view]");
      if (viewEl && viewEl !== currentViewTarget) {
        currentViewTarget = viewEl;
        gsap.to(view, { scale: 1, duration: 0.3, ease: "back.out(1.5)" });
        gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
      }

      const hoverEl = target.closest("a, button, [role='button'], .magnetic-wrap");
      if (hoverEl && hoverEl !== currentHoverTarget && !viewEl) {
        currentHoverTarget = hoverEl;
        gsap.to(ring, { scale: 1.75, opacity: 1, duration: 0.25, ease: "power2.out" });
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;

      if (currentViewTarget && (!related || !currentViewTarget.contains(related))) {
        currentViewTarget = null;
        gsap.to(view, { scale: 0, duration: 0.2, ease: "power2.in" });
        gsap.to(dot, { opacity: 1, duration: 0.2 });
        gsap.to(ring, { opacity: 0.5, duration: 0.2 });
      }

      if (currentHoverTarget && (!related || !currentHoverTarget.contains(related))) {
        currentHoverTarget = null;
        gsap.to(ring, { scale: 1, opacity: 0.5, duration: 0.25, ease: "power2.out" });
      }
    };

    // Magnetic pull effect for .magnetic-wrap elements
    let activeMagEl: HTMLElement | null = null;
    const onMagMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(".magnetic-wrap") as HTMLElement | null;
      if (activeMagEl && activeMagEl !== target) {
        gsap.to(activeMagEl, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
        activeMagEl = null;
      }
      if (target) {
        activeMagEl = target;
        const rect = target.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
        const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
        gsap.to(target, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
      }
    };

    const onDocLeave = () => {
      if (activeMagEl) {
        gsap.to(activeMagEl, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
        activeMagEl = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onMagMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("mouseleave", onDocLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMagMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onDocLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: "none" }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={{ display: "none" }} aria-hidden="true" />
      <div ref={viewRef} className="cursor-view" style={{ display: "none" }} aria-hidden="true">
        View
      </div>
    </>
  );
}
