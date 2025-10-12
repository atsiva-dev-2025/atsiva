// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { contactSchema } from '@/lib/validations/contact';
import { sendContactNotification } from '@/lib/email/send';
import rateLimit from '@/lib/rate-limit';

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';

    try {
      await limiter.check(3, ip); // 3 requests per minute per IP
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again in a minute.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Insert into Supabase
    const supabase = createClient();
    const { data, error } = await supabase
      .from('contacts')
      .insert([validatedData])
      .select()
      .single();

    if (error) throw error;

    // Send email notification (non-blocking)
    sendContactNotification({
      fullName: validatedData.full_name,
      email: validatedData.email,
      phone: validatedData.phone,
      company: validatedData.company,
      serviceInterest: validatedData.service_interest,
      message: validatedData.message,
    }).catch((err) => {
      console.error('Failed to send email notification:', err);
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you soon.",
      data,
    });
  } catch (error: any) {
    if (error?.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data.' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Submission failed. Please try again.' },
      { status: 500 }
    );
  }
}


