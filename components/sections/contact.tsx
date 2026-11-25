"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { personalInfo, socialLinks } from "@/data/resume";
import { useSmoothScroll } from "@/components/layout/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = personalInfo.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !headlineRef.current || !sectionRef.current) return;

    const split = new SplitType(headlineRef.current, { types: "lines,chars" });

    split.lines?.forEach((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      line.parentNode?.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    const ctx = gsap.context(() => {
      if (split.chars) {
        gsap.from(split.chars, {
          y: "100%",
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.02,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      }

      gsap.from(".contact-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-items",
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
    <section ref={sectionRef} id="contact" className="section-pad">
      <div className="container-xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            008
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            CONTACT
          </span>
        </div>

        <h2 ref={headlineRef} className="text-section-title mb-12" style={{ maxWidth: "900px" }}>
          Let&apos;s work together
        </h2>

        <div className="contact-items grid md:grid-cols-2 gap-8 mb-16">
          <div className="contact-item">
            <span className="text-mono-sm block mb-3" style={{ color: "var(--color-muted)" }}>
              EMAIL (CLICK TO COPY)
            </span>
            <button
              type="button"
              onClick={copyEmail}
              className="text-lg md:text-xl font-medium magnetic-wrap hover:text-[var(--color-accent)] transition-colors text-left"
              style={{ fontFamily: "var(--font-mono)", color: "var(--color-fg)" }}
            >
              {personalInfo.email}
              <span
                className="ml-3 text-xs px-2 py-0.5 rounded-full transition-opacity"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "#000",
                  opacity: copied ? 1 : 0,
                }}
                role="status"
                aria-live="polite"
              >
                Copied!
              </span>
            </button>
          </div>

          <div className="contact-item">
            <span className="text-mono-sm block mb-3" style={{ color: "var(--color-muted)" }}>
              CONNECT
            </span>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "LinkedIn", url: socialLinks.linkedin },
                { label: "GitHub", url: socialLinks.github },
                { label: "LeetCode", url: socialLinks.leetcode },
                { label: "Twitter/X", url: socialLinks.twitter },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mono magnetic-wrap hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-fg)", fontSize: "0.875rem" }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 py-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="magnetic-wrap inline-flex items-center justify-center px-8 py-4 rounded-full text-mono font-medium transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "#000",
              fontSize: "0.875rem",
              letterSpacing: "0.05em",
            }}
          >
            BOOK A CALL / EMAIL ME
          </a>

          <button
            type="button"
            onClick={() => scrollTo(0)}
            className="text-mono-sm magnetic-wrap hover:text-[var(--color-accent)] transition-colors"
            style={{ color: "var(--color-muted)" }}
            aria-label="Back to top"
          >
            BACK TO TOP ↑
          </button>
        </div>

        <footer
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} {personalInfo.fullName}
          </span>
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            Designed &amp; Built by Raj Kadam
          </span>
        </footer>
      </div>
    </section>
  );
}
