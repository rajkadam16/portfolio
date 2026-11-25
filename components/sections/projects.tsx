"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !galleryRef.current || !sectionRef.current || !trackWrapperRef.current) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const gallery = galleryRef.current!;
      const wrapper = trackWrapperRef.current!;
      const getScrollAmount = () => Math.max(0, gallery.scrollWidth - wrapper.clientWidth);

      gsap.to(gallery, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Clip-path + scale 1.15 -> 1 media reveal
      gsap.utils.toArray<HTMLElement>(".project-media-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)", scale: 1.15 },
          {
            clipPath: "inset(0% 0 0 0)",
            scale: 1,
            duration: 1.1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <section ref={sectionRef} id="projects" className="section-pad overflow-hidden">
      <div className="container-xl mb-10 md:mb-12">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            006
          </span>
          <div className="hairline flex-1" />
          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
            SELECTED WORK
          </span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-section-title">Projects</h2>
          <span className="text-mono-sm hidden md:inline" style={{ color: "var(--color-muted)" }}>
            SCROLL TO EXPLORE →
          </span>
        </div>
      </div>

      {/* Horizontal scroll gallery (desktop) / stacked (mobile) */}
      <div ref={trackWrapperRef} className="w-full overflow-hidden">
        <div
          ref={galleryRef}
          className="flex flex-col md:flex-row gap-6 md:gap-8 px-6 md:px-12 lg:px-16 md:w-max"
        >
          {featured.map((project, i) => {
            const num = String(i + 1).padStart(2, "0");
            const primaryUrl = project.liveUrl || project.githubUrl;

            return (
              <article
                key={project.id}
                className="project-card flex-shrink-0 w-full md:w-[480px] lg:w-[560px] group rounded-lg overflow-hidden transition-colors duration-300 hover:border-[var(--color-accent)]"
                data-cursor-view
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                }}
              >
                {/* Visual block */}
                <a
                  href={primaryUrl || "#projects"}
                  target={primaryUrl ? "_blank" : undefined}
                  rel={primaryUrl ? "noopener noreferrer" : undefined}
                  aria-label={`View ${project.title}`}
                  className="block relative h-[220px] md:h-[270px] overflow-hidden"
                  style={{ backgroundColor: "var(--color-card)" }}
                >
                  <div className="project-media-reveal w-full h-full">
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col justify-between p-6 transition-transform duration-500 ease-out group-hover:scale-105 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-mono-sm" style={{ color: "var(--color-accent)" }}>
                            {project.caption || `CASE ${num}`}
                          </span>
                          <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
                            {project.year}
                          </span>
                        </div>
                        <span
                          className="text-8xl md:text-9xl font-bold select-none self-end leading-none"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--color-border)",
                          }}
                        >
                          {num}
                        </span>
                      </div>
                    )}
                  </div>
                </a>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-mono-sm" style={{ color: "var(--color-accent)" }}>
                      {num}
                    </span>
                    <span className="text-mono-sm" style={{ color: "var(--color-muted)" }}>
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-fg)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm mb-3 line-clamp-2" style={{ color: "var(--color-muted)" }}>
                    {project.description}
                  </p>

                  <p className="text-sm mb-5" style={{ color: "var(--color-fg)", fontStyle: "italic" }}>
                    ↗ {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
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
                    {project.techStack.length > 5 && (
                      <span
                        className="text-mono-sm px-3 py-1 rounded-full"
                        style={{
                          border: "1px solid var(--color-border)",
                          color: "var(--color-muted)",
                        }}
                      >
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-sm magnetic-wrap hover:text-[var(--color-accent)] transition-colors"
                        style={{ color: "var(--color-fg)" }}
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mono-sm magnetic-wrap hover:text-[var(--color-accent)] transition-colors"
                        style={{ color: "var(--color-fg)" }}
                      >
                        Source ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
