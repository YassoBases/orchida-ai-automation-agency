import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { PersonalInfoFields } from "./contact-form/PersonalInfoFields";
import { InquiryFields } from "./contact-form/InquiryFields";
import { PreferencesFields } from "./contact-form/PreferencesFields";
import { contactFormSchema, type ContactFormValues } from "./contact-form/types";

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      company_name: "",
      inquiry_type: "GENERAL",
      message: "",
      preferred_contact: "NO_PREFERENCE",
      referral_source: undefined,
      consent_given: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const { error: submissionError } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: values.full_name,
          email: values.email,
          phone: values.phone,
          company_name: values.company_name,
          inquiry_type: values.inquiry_type,
          message: values.message,
          preferred_contact: values.preferred_contact,
          referral_source: values.referral_source,
          consent_given: values.consent_given,
        });

      if (submissionError) throw submissionError;

      toast({
        variant: "default",
        title: "Success!",
        description: "Thank you for contacting Orchida! We'll review your inquiry and get back to you shortly.",
        className: "bg-background border border-orchid-400/20 text-white",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem submitting your inquiry. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto px-4 md:px-0">
        <PersonalInfoFields form={form} />
        <InquiryFields form={form} />
        <PreferencesFields form={form} />
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]"
        >
          Send Inquiry
        </Button>
      </form>
    </Form>
  );
}