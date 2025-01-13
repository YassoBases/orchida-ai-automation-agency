import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues, countryCodes } from "./types";

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

      <div className="space-y-2">
        <FormLabel className="text-white">Phone Number (Optional)</FormLabel>
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="country_code"
            render={({ field }) => (
              <FormItem className="w-[140px]">
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="bg-[#1E2330] text-white border-input">
                      <SelectValue placeholder="Select code" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#1E2330] text-white border-input">
                    {countryCodes.map((code) => (
                      <SelectItem 
                        key={code.value} 
                        value={code.value}
                        className="hover:bg-gray-700 focus:bg-gray-700"
                      >
                        {code.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Enter phone number" className="bg-[#1E2330] text-white placeholder:text-gray-400" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

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