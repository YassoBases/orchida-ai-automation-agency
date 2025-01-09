import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
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
      // Store submission in Supabase
      const { error: submissionError } = await supabase
        .from('contact_submissions')
        .insert(values);

      if (submissionError) throw submissionError;

      // Send confirmation email via edge function
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: { 
          to: values.email,
          name: values.full_name,
        },
      });

      if (emailError) throw emailError;

      toast({
        title: "Success!",
        description: "Thank you for contacting Orchida! We'll review your inquiry and get back to you shortly.",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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