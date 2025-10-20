import { createClient } from '@/lib/supabase/server';
import { PageSettingsTable } from '@/components/admin/PageSettingsTable';

export const revalidate = 0;

export default async function PageSettingsPage() {
  const supabase = await createClient();
  
  const { data: settings } = await supabase
    .from('page_settings')
    .select('*')
    .order('page_title');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Page Settings</h2>
        <p className="text-gray-600 mt-1">Manage hero images and content for all pages</p>
      </div>

      <PageSettingsTable settings={settings || []} />
    </div>
  );
}
