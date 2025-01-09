import { Bot, Headphones, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

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

const problems = [
  {
    problem: "Inefficient Workflows",
    description: "Manual tasks slow down productivity and increase operational costs.",
    solution: "Our AI Automation streamlines repetitive tasks, reduces errors, and boosts efficiency by up to 80%.",
  },
  {
    problem: "Missed Customer Interactions",
    description: "Businesses lose customers due to missed calls or slow response times.",
    solution: "Our Voice Assistant AI ensures 24/7 availability, handling customer inquiries instantly.",
  },
  {
    problem: "Lack of Scalable Support",
    description: "Handling growing customer inquiries becomes overwhelming and inconsistent.",
    solution: "Our Custom Chatbots provide scalable, automated customer interactions across all platforms.",
  },
];

const Index = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]"
            onClick={scrollToContact}
          >
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
                className="p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(155,135,245,0.4)] dark:hover:shadow-[0_0_50px_rgba(155,135,245,0.2)] hover:scale-105 hover:-translate-y-2"
              >
                <service.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="text-xl font-montserrat font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="mt-4 w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]"
                    >
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

      {/* Problems & Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
            Are you tired of
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(126,105,171,0.4)] dark:hover:shadow-[0_0_50px_rgba(126,105,171,0.2)] hover:scale-105"
              >
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-primary">
                  {item.problem}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4"></div>
                <p className="text-foreground">
                  <span className="font-semibold text-primary">Solution: </span>
                  {item.solution}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="mt-4 w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]"
                    >
                      Talk to Our Experts Today!
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

      {/* About Us Section */}
      <section className="py-20 px-4 bg-orchid-50 dark:bg-orchid-900/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
              At Orchida, we're passionate about transforming businesses through the power of artificial intelligence. Our mission is to make advanced AI technology accessible, ethical, and practical for businesses of all sizes.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
              Founded by a team of AI experts and industry veterans, we combine cutting-edge technology with deep business understanding to deliver solutions that drive real results. Our approach focuses on creating seamless, efficient, and scalable AI implementations that grow with your business.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h4 className="font-montserrat font-semibold text-xl mb-2">Our Mission</h4>
                <p className="text-muted-foreground">To democratize AI technology and make it accessible to businesses worldwide</p>
              </div>
              <div className="text-center">
                <h4 className="font-montserrat font-semibold text-xl mb-2">Our Vision</h4>
                <p className="text-muted-foreground">To lead the AI revolution while maintaining ethical practices and transparency</p>
              </div>
              <div className="text-center">
                <h4 className="font-montserrat font-semibold text-xl mb-2">Our Values</h4>
                <p className="text-muted-foreground">Innovation, Integrity, and Customer Success drive everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
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
