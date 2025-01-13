import { z } from "zod";

export const contactFormSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country_code: z.string().default("+1"),
  company_name: z.string().optional(),
  inquiry_type: z.enum(["AI_AUTOMATION", "VOICE_ASSISTANT", "CHATBOT", "GENERAL"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferred_contact: z.enum(["EMAIL", "PHONE", "NO_PREFERENCE"]),
  referral_source: z.enum(["GOOGLE_SEARCH", "SOCIAL_MEDIA", "REFERRAL", "ADVERTISEMENT", "OTHER"]).optional(),
  consent_given: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const countryCodes = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+91", label: "India (+91)" },
  { value: "+86", label: "China (+86)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+55", label: "Brazil (+55)" },
] as const;