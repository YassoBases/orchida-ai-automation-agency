import { ContactForm } from "@/components/ContactForm";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export const ContactSection = ({ contactRef }: ContactSectionProps) => {
  return (
    <section id="contact" ref={contactRef} className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-8 bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};