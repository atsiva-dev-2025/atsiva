// src/components/admin/InquiryFilters.tsx
import { redirect } from 'next/navigation';

export function InquiryFilters() {
  return (
    <form action={applyFilters} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        name="search"
        placeholder="Search name, email, company"
        className="h-10 w-full sm:w-80 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 text-gray-900 placeholder-gray-500"
      />
      <select
        name="status"
        className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 text-gray-900"
        defaultValue="all"
      >
        <option value="all">All Statuses</option>
        <option value="new">New</option>
        <option value="in_progress">In progress</option>
        <option value="completed">Completed</option>
        <option value="archived">Archived</option>
      </select>
      <button className="h-10 rounded-md border border-black/10 dark:border-white/10 px-4 text-sm text-gray-900">Apply</button>
    </form>
  );
}

async function applyFilters(formData: FormData) {
  "use server";
  const search = (formData.get('search') as string) || '';
  const status = (formData.get('status') as string) || 'all';
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (status && status !== 'all') params.set('status', status);
  redirect(`/admin/inquiries${params.toString() ? `?${params}` : ''}`);
}


