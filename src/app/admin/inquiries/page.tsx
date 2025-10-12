import { createClient } from '@/lib/supabase/server';
import { InquiriesTable } from '@/components/admin/InquiriesTable';
import { InquiryFilters } from '@/components/admin/InquiryFilters';

export const revalidate = 0;

export default async function InquiriesPage({
  searchParams,
}: {
  searchParams: { status?: string; search?: string };
}) {
  const supabase = createClient();
  
  let query = supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  // Apply filters
  if (searchParams.status && searchParams.status !== 'all') {
    query = query.eq('status', searchParams.status);
  }

  if (searchParams.search) {
    query = query.or(
      `full_name.ilike.%${searchParams.search}%,email.ilike.%${searchParams.search}%,company.ilike.%${searchParams.search}%`
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

      {/* @ts-expect-error Server Component in page */}
      <InquiryFilters />

      <InquiriesTable inquiries={inquiries || []} />
    </div>
  );
}


