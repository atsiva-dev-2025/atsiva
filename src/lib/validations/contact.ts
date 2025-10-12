// src/lib/validations/contact.ts
import { z } from 'zod';

// Sanitize HTML to prevent XSS
const sanitizeString = (str: string) =>
  str.replace(/[<>]/g, '').trim();

export const contactSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .transform(sanitizeString),
  
  email: z
    .string()
    .email('Invalid email address')
    .max(255, 'Email is too long')
    .toLowerCase(),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]+$/.test(val),
      'Invalid phone number format'
    ),
  
  company: z
    .string()
    .max(100, 'Company name is too long')
    .optional()
    .transform((val) => val ? sanitizeString(val) : val),
  
  service_interest: z.enum(['solar', 'automation', 'telecom', 'other'], {
    errorMap: () => ({ message: 'Please select a valid service' })
  }),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long')
    .transform(sanitizeString),
});

export type ContactFormData = z.infer<typeof contactSchema>;


