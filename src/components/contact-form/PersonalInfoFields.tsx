import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./types";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="full_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your full name" className="bg-[#1E2330] text-white placeholder:text-gray-400" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email address" className="bg-[#1E2330] text-white placeholder:text-gray-400" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Phone Number (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="Enter your phone number" className="bg-[#1E2330] text-white placeholder:text-gray-400" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="company_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Company Name (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="Enter your company name" className="bg-[#1E2330] text-white placeholder:text-gray-400" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}