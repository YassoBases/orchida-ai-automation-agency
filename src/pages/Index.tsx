import { Bot, Headphones, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 animate-fade-in">
            Empowering Businesses with
            <span className="text-primary"> Next-Generation AI</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            From AI Automation to Voice Assistant Solutions, Orchida Streamlines Your Workflow
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-orchid-50 dark:bg-orchid-900/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Our Key Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] dark:hover:shadow-[0_0_30px_rgba(155,135,245,0.15)]"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-montserrat font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Let AI handle the heavy lifting – Contact us now!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Orchida AI Agency. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;