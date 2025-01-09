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
          full_name: string
          email: string
          phone: string | null
          company_name: string | null
          inquiry_type: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message: string
          preferred_contact: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          attachment_url: string | null
          consent_given: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone?: string | null
          company_name?: string | null
          inquiry_type: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message: string
          preferred_contact: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source?: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          attachment_url?: string | null
          consent_given: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string | null
          company_name?: string | null
          inquiry_type?: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
          message?: string
          preferred_contact?: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
          referral_source?: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER' | null
          attachment_url?: string | null
          consent_given?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      translations: {
        Row: {
          id: string
          language: string
          key: string
          value: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          language: string
          key: string
          value: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          language?: string
          key?: string
          value?: string
          created_at?: string
          updated_at?: string
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
      inquiry_type: 'AI_AUTOMATION' | 'VOICE_ASSISTANT' | 'CHATBOT' | 'GENERAL'
      contact_method: 'EMAIL' | 'PHONE' | 'NO_PREFERENCE'
      referral_source: 'GOOGLE_SEARCH' | 'SOCIAL_MEDIA' | 'REFERRAL' | 'ADVERTISEMENT' | 'OTHER'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]