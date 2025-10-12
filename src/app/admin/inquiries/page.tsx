import { createClient } from '@/lib/supabase/server';
import { InquiriesTable } from '@/components/admin/InquiriesTable';
import { InquiryFilters } from '@/components/admin/InquiryFilters';

export const revalidate = 0;

interface PageProps {
  searchParams?: {
    status?: string
    search?: string
  }
}

export default async function Page({ searchParams }: PageProps) {
  const status = searchParams?.status || ''
  const search = searchParams?.search || ''
  
  const supabase = createClient();
  
  let query = supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  // Apply filters
  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  if (search) {
    query = query.or(
      `full_name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`
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


