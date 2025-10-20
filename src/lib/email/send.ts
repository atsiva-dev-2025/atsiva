import { Resend } from 'resend';
import ContactNotification from '@/emails/ContactNotification';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendContactNotificationParams {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
}

export async function sendContactNotification(data: SendContactNotificationParams) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'admin@nineprime.com',
      subject: `New Inquiry: ${data.serviceInterest} - ${data.fullName}`,
      react: ContactNotification({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        serviceInterest: data.serviceInterest,
        message: data.message,
        submittedAt: format(new Date(), 'PPpp'),
      }),
    });

    if (error) {
      console.error('Email send error:', error);
      return { success: false, error } as const;
    }

    return { success: true, data: emailData } as const;
  } catch (error) {
    console.error('Email send exception:', error);
    return { success: false, error } as const;
  }
}


