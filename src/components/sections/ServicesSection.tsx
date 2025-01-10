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
    <section id="services" className="py-20 px-4 bg-orchid-50 dark:bg-orchid-900/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
          Our Key Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(155,135,245,0.4)] dark:hover:shadow-[0_0_50px_rgba(155,135,245,0.2)] hover:scale-105 hover:-translate-y-2"
            >
              <service.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
              <h3 className="text-xl font-montserrat font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]">
                    Discover Our Solutions
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
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