// src/components/admin/RecentInquiries.tsx
import { createClient } from '@/lib/supabase/server';

export async function RecentInquiries() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('contacts')
    .select('id, full_name, email, status, created_at')
    .order('created_at', { ascending: false })
    .limit(6);

  return (
    <section>
      <h3 className="text-lg font-semibold text-gray-900">Recent Inquiries</h3>
      <div className="mt-3 overflow-hidden rounded-xl border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-3 py-2 text-gray-900">Name</th>
              <th className="px-3 py-2 text-gray-900">Email</th>
              <th className="px-3 py-2 text-gray-900">Status</th>
              <th className="px-3 py-2 text-gray-900">Created</th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-3 py-2 text-gray-900">{c.full_name}</td>
                <td className="px-3 py-2 text-gray-900">{c.email}</td>
                <td className="px-3 py-2 capitalize text-gray-900">{c.status}</td>
                <td className="px-3 py-2 text-gray-900">{new Date(c.created_at).toLocaleString()}</td>
              </tr>
            ))}
            {(!data || data.length === 0) && (
              <tr>
                <td className="px-3 py-6 text-center text-gray-500" colSpan={4}>No inquiries yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}


