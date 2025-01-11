import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./types";

interface InquiryFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

export function InquiryFields({ form }: InquiryFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="inquiry_type"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Inquiry Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-background border border-primary/20 backdrop-blur-lg">
                <SelectItem value="AI_AUTOMATION" className="focus:bg-primary/20">AI Automation</SelectItem>
                <SelectItem value="VOICE_ASSISTANT" className="focus:bg-primary/20">Voice Assistant AI</SelectItem>
                <SelectItem value="CHATBOT" className="focus:bg-primary/20">Chatbot Implementation</SelectItem>
                <SelectItem value="GENERAL" className="focus:bg-primary/20">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Write your message here" 
                className="min-h-[100px] resize-none"
                maxLength={500}
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}