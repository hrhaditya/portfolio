import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { setupAnimations } from "@/utils/animate";

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const cleanup = setupAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Blogs />
        <div className="bg-gradient-to-b from-background to-secondary/10 py-8">
          <Projects />
        </div>
        <Skills />
        <div className="bg-gradient-to-b from-secondary/10 to-background py-8">
          <ExperienceTimeline />
        </div>
        <EducationTimeline />
        <div className="bg-gradient-to-b from-background to-secondary/10 py-8">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
