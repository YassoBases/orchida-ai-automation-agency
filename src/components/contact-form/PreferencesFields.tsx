import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
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
            <FormLabel>Preferred Contact Method</FormLabel>
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
                  <FormLabel className="font-normal">Email</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="PHONE" />
                  </FormControl>
                  <FormLabel className="font-normal">Phone</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="NO_PREFERENCE" />
                  </FormControl>
                  <FormLabel className="font-normal">No Preference</FormLabel>
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
            <FormLabel>How Did You Hear About Us?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="GOOGLE_SEARCH">Google Search</SelectItem>
                <SelectItem value="SOCIAL_MEDIA">Social Media</SelectItem>
                <SelectItem value="REFERRAL">Referral</SelectItem>
                <SelectItem value="ADVERTISEMENT">Advertisement</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
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
              <FormLabel>
                I agree to the Privacy Policy and Terms of Service
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}