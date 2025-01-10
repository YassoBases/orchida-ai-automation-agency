import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";

const problems = [
  {
    problem: "Inefficient Workflows",
    description:
      "Manual tasks slow down productivity and increase operational costs.",
    solution:
      "Our AI Automation streamlines repetitive tasks, reduces errors, and boosts efficiency by up to 80%.",
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
      "Our Custom Chatbots provide scalable, automated customer interactions across all platforms.",
  },
];

export const ProblemsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-12">
          Are you tired of
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background/50 backdrop-blur-sm border border-orchid-200/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(155,135,245,0.4)] dark:hover:shadow-[0_0_50px_rgba(155,135,245,0.2)] hover:scale-105"
            >
              <h3 className="text-xl font-montserrat font-semibold mb-4 text-primary">
                {item.problem}
              </h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent my-4"></div>
              <p className="text-foreground">
                <span className="font-semibold text-primary">Solution: </span>
                {item.solution}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]">
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
  );
};