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
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="AI_AUTOMATION">AI Automation</SelectItem>
                <SelectItem value="VOICE_ASSISTANT">Voice Assistant AI</SelectItem>
                <SelectItem value="CHATBOT">Chatbot Implementation</SelectItem>
                <SelectItem value="GENERAL">General Inquiry</SelectItem>
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
                className="min-h-[100px]"
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