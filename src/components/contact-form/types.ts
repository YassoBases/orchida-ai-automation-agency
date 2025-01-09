import { z } from "zod";

export const contactFormSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company_name: z.string().optional(),
  inquiry_type: z.enum(["AI_AUTOMATION", "VOICE_ASSISTANT", "CHATBOT", "GENERAL"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferred_contact: z.enum(["EMAIL", "PHONE", "NO_PREFERENCE"]),
  referral_source: z.enum(["GOOGLE_SEARCH", "SOCIAL_MEDIA", "REFERRAL", "ADVERTISEMENT", "OTHER"]).optional(),
  consent_given: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;