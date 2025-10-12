import { z } from 'zod';

const envSchema = z.object({
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  
  // Resend
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().email(),
  ADMIN_EMAIL: z.string().email(),
  
  // App
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

export function validateEnv() {
  try {
    envSchema.parse(process.env);
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  }
}

// Validate on startup (in development)
if (process.env.NODE_ENV === 'development') {
  validateEnv();
}


