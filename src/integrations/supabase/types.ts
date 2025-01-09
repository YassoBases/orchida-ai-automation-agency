export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          full_name: string
          email: string
          phone: string | null
          company_name: string | null
          inquiry_type: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message: string
          preferred_contact: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          consent_given: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          email: string
          phone?: string | null
          company_name?: string | null
          inquiry_type: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message: string
          preferred_contact: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source?: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          consent_given: boolean
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          email?: string
          phone?: string | null
          company_name?: string | null
          inquiry_type?: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message?: string
          preferred_contact?: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source?: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          consent_given?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]