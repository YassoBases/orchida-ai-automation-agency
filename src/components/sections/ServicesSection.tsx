import { Bot, Headphones, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Custom AI agents that autonomously handle complex tasks and decision-making processes",
  },
  {
    icon: Headphones,
    title: "Voice Assistant AI",
    description: "24/7 automated voice systems for seamless communication",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Implementation",
    description: "Advanced AI chatbots for intelligent customer interactions",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
          Our Key Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-4 md:p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-400/20 hover:border-orchid-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(217,70,239,0.2)] hover:scale-105"
            >
              <service.icon className="w-10 h-10 md:w-12 md:h-12 text-orchid-400 mb-4" />
              <h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-orchid-100/80 mb-6">{service.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-orchid-500 hover:bg-orchid-600 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                    Discover Our Solutions
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-background border border-orchid-400/20">
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};