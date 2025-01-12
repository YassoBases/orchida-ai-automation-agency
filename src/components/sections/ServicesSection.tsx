import { Bot, Headphones, MessageSquare } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Streamline your workflows with advanced AI systems",
  },
  {
    icon: Headphones,
    title: "Voice Assistant AI",
    description: "24/7 automated voice systems for seamless communication",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Implementation",
    description: "Intelligent chatbots for enhanced customer support",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
          Our Key Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-400/20 hover:border-orchid-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(217,70,239,0.2)] hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-orchid-400 mb-4" />
              <h3 className="text-xl font-montserrat font-semibold mb-2 text-orchid-100">
                {service.title}
              </h3>
              <p className="text-orchid-100/80 mb-6">{service.description}</p>
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