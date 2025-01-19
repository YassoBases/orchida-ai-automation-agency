import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-[2px]" />
      <div className="relative z-10">
        <Navbar />
        <HeroSection onGetStarted={scrollToContact} />
        <ServicesSection />
        <ProblemsSection />
        <AboutSection />
        <ContactSection contactRef={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;