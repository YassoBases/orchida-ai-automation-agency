import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 animate-fade-in">
          Empowering Businesses with
          <span className="bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
            {" "}
            Next-Generation AI
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          From AI Automation to Voice Assistant Solutions, Orchida Streamlines Your
          Workflow
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-orchid-500 hover:from-primary-dark hover:to-orchid-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]"
          onClick={onGetStarted}
        >
          Get Started Today
        </Button>
      </div>
    </section>
  );
};