import { createClient } from '@/lib/supabase/server';
import { InquiriesTable } from '@/components/admin/InquiriesTable';
import { InquiryFilters } from '@/components/admin/InquiryFilters';

export const revalidate = 0;

export default async function InquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; search?: string }>;
}) {
  const params = await searchParams;
  
  const supabase = createClient();
  
  let query = supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  // Apply filters
  if (params.status && params.status !== 'all') {
    query = query.eq('status', params.status);
  }

  if (params.search) {
    query = query.or(
      `full_name.ilike.%${params.search}%,email.ilike.%${params.search}%,company.ilike.%${params.search}%`
    );
  }

  const { data: inquiries } = await query;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Inquiries</h2>
          <p className="text-gray-600 mt-1">Manage customer inquiries and leads</p>
        </div>
      </div>

      <InquiryFilters />

      <InquiriesTable inquiries={inquiries || []} />
    </div>
  );
}


