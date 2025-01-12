import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "./types";

interface PreferencesFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

export function PreferencesFields({ form }: PreferencesFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="preferred_contact"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-white">Preferred Contact Method</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="EMAIL" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Email</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="PHONE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">Phone</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NO_PREFERENCE" />
                  </FormControl>
                  <FormLabel className="font-normal text-white">No Preference</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="referral_source"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">How Did You Hear About Us?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="bg-[#1E2330] text-white">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#1E2330] border border-primary/20">
                <SelectItem value="GOOGLE_SEARCH" className="text-white focus:bg-primary/20">Google Search</SelectItem>
                <SelectItem value="SOCIAL_MEDIA" className="text-white focus:bg-primary/20">Social Media</SelectItem>
                <SelectItem value="REFERRAL" className="text-white focus:bg-primary/20">Referral</SelectItem>
                <SelectItem value="ADVERTISEMENT" className="text-white focus:bg-primary/20">Advertisement</SelectItem>
                <SelectItem value="OTHER" className="text-white focus:bg-primary/20">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="consent_given"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="text-white">
                I agree to the{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms-of-service" className="text-primary hover:underline" target="_blank">
                  Terms of Service
                </Link>
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}