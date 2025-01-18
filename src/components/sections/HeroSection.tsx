import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="font-montserrat font-bold text-3xl md:text-6xl mb-4 md:mb-6 animate-fade-in bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent leading-tight">
          Empowering Businesses with Next-Generation AI
        </h1>
        <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-orchid-100/80 px-4">
          From AI Agents to Voice Assistant Solutions, Orchida Streamlines Your Workflow
        </p>
        <Button
          size="lg"
          className="bg-orchid-500 hover:bg-orchid-600 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] text-sm md:text-base py-2 md:py-3 px-4 md:px-6"
          onClick={onGetStarted}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};