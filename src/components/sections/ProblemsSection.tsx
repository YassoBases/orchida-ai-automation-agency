import { Button } from "@/components/ui/button";

const problems = [
  {
    problem: "Manual Task Management",
    description:
      "Complex tasks requiring constant human supervision and intervention.",
    solution:
      "Our AI Agents autonomously handle complex workflows, making intelligent decisions and adapting to new scenarios.",
  },
  {
    problem: "Missed Customer Interactions",
    description:
      "Businesses lose customers due to missed calls or slow response times.",
    solution:
      "Our Voice Assistant AI ensures 24/7 availability, handling customer inquiries instantly.",
  },
  {
    problem: "Lack of Scalable Support",
    description:
      "Handling growing customer inquiries becomes overwhelming and inconsistent.",
    solution:
      "Our AI Chatbots provide scalable, automated customer interactions across all platforms.",
  },
];

export const ProblemsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 64;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
          Are you tired of
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(155,135,245,0.4)] dark:hover:shadow-[0_0_50px_rgba(155,135,245,0.2)] hover:scale-105"
            >
              <h3 className="text-lg md:text-xl font-montserrat font-semibold mb-3 md:mb-4 text-primary">
                {item.problem}
              </h3>
              <p className="text-sm md:text-base text-white mb-3 md:mb-4">{item.description}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent my-3 md:my-4"></div>
              <p className="text-sm md:text-base text-white">
                <span className="font-semibold text-primary">Solution: </span>
                {item.solution}
              </p>
              <Button 
                className="mt-4 w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)] text-sm md:text-base"
                onClick={scrollToContact}
              >
                Talk to Our Experts Today!
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};