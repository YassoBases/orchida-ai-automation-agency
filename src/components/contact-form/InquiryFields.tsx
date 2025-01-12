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
            <FormLabel className="text-white">Inquiry Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-full bg-[#1E2330] text-white">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#1E2330] border border-primary/20 backdrop-blur-lg">
                <SelectItem value="AI_AUTOMATION" className="text-white focus:bg-primary/20">AI Automation</SelectItem>
                <SelectItem value="VOICE_ASSISTANT" className="text-white focus:bg-primary/20">Voice Assistant AI</SelectItem>
                <SelectItem value="CHATBOT" className="text-white focus:bg-primary/20">Chatbot Implementation</SelectItem>
                <SelectItem value="GENERAL" className="text-white focus:bg-primary/20">General Inquiry</SelectItem>
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
            <FormLabel className="text-white">Message</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Write your message here" 
                className="min-h-[100px] resize-none bg-[#1E2330] text-white placeholder:text-gray-400"
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