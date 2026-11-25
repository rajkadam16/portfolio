"use client";

import { useState, useCallback } from "react";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/layout/Preloader";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="absolute -top-12 left-0 z-[10002] px-4 py-2 rounded focus-visible:top-4 focus-visible:left-4 transition-all"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "#000",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
        }}
      >
        Skip to main content
      </a>

      {/* Preloader */}
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Noise overlay */}
      <NoiseOverlay />

      {/* Main content */}
      <SmoothScroll>
        <Header />
        <main id="main-content">
          <Hero ready={loaded} />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <About />
          <Stats />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <Skills />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <Experience />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <Projects />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <Education />
          <div className="hairline container-xl" style={{ margin: "0 auto" }} />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
