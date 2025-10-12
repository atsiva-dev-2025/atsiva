import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { requireAuth } from '@/lib/auth/utils';

export async function POST(request: Request) {
  try {
    await requireAuth();
    const body = await request.json();
    const supabase = await createClient();

    // Get category_id from categories table by slug
    const { data: category } = await supabase
      .from('project_categories')
      .select('id')
      .eq('slug', body.category_id)
      .single();

    if (!category) {
      return NextResponse.json(
        { success: false, message: 'Invalid category' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('projects')
      .insert([
        {
          ...body,
          category_id: category.id,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Project creation error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create project' },
      { status: 500 }
    );
  }
}


