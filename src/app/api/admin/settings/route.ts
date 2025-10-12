import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { requireAuth } from '@/lib/auth/utils';

export async function GET() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('admin_settings')
    .select('email_notifications, admin_email')
    .limit(1)
    .maybeSingle();

  return NextResponse.json({ settings: data ?? { email_notifications: true, admin_email: '' } });
}

export async function PATCH(request: Request) {
  try {
    await requireAuth();
    const body = await request.json();
    const supabase = await createClient();

    // upsert singleton
    const { data, error } = await supabase
      .from('admin_settings')
      .upsert({
        email_notifications: body.email_notifications,
        admin_email: body.admin_email,
        updated_at: new Date().toISOString(),
        singleton: true,
      }, { onConflict: 'singleton' })
      .select('email_notifications, admin_email')
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, settings: data });
  } catch (e) {
    return NextResponse.json({ success: false, message: 'Failed to save settings' }, { status: 500 });
  }
}


