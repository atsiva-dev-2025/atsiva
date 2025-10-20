import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export async function getPageSettings(pageKey: string) {
  const cookieStore = await cookies();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  
  const { data, error } = await supabase
    .from('page_settings')
    .select('*')
    .eq('page_key', pageKey)
    .single();

  if (error) {
    // If the page setting doesn't exist, that's okay - return null
    if (error.code === 'PGRST116') {
      return null;
    }
    console.error(`Error fetching settings for ${pageKey}:`, error);
    return null;
  }

  return data;
}
