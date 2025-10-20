import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { requireAuth } from '@/lib/auth/utils';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await requireAuth();
    const supabase = await createClient();

    const { data: project, error } = await supabase
      .from('projects')
      .select(`
        *,
        project_categories (
          name,
          slug
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, project });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch project' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await requireAuth();
    const body = await request.json();
    const supabase = await createClient();

    // Get category_id from categories table by slug if category_id is provided
    let categoryId = body.category_id;
    if (body.category_id && !body.category_id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
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
      categoryId = category.id;
    }

    // Remove category_id from body and add the resolved categoryId
    const { category_id, ...updateData } = body;
    const finalUpdateData = {
      ...updateData,
      updated_at: new Date().toISOString(),
      ...(categoryId && { category_id: categoryId })
    };

    const { data, error } = await supabase
      .from('projects')
      .update(finalUpdateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Project update error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update project' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await requireAuth();
    const supabase = await createClient();

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to delete project' },
      { status: 500 }
    );
  }
}


