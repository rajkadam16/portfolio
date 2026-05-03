import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { AnalyticsDashboard } from "@/components/sections/analytics-dashboard";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Skip to main content link - keyboard accessible */}
      <a 
        href="#main-content" 
        className="absolute -top-12 left-0 z-50 px-4 py-2 bg-primary text-primary-foreground rounded focus-visible:top-0 transition-all"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <AnalyticsDashboard />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
