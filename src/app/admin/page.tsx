import { createClient } from '@/lib/supabase/server';
import { StatsCard } from '@/components/admin/StatsCard';
import { RecentInquiries } from '@/components/admin/RecentInquiries';
import { MessageSquare, FolderOpen, CheckCircle, Clock } from 'lucide-react';

export const revalidate = 0; // Disable cache for real-time data

export default async function AdminDashboard() {
  const supabase = createClient();

  // Fetch statistics
  const [
    { count: totalInquiries },
    { count: newInquiries },
    { count: totalProjects },
    { count: completedInquiries }
  ] = await Promise.all([
    supabase.from('contacts').select('*', { count: 'exact', head: true }),
    supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'completed'),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Inquiries"
          value={totalInquiries || 0}
          icon={<MessageSquare className="w-6 h-6" />}
          color="blue"
        />
        <StatsCard
          title="New Inquiries"
          value={newInquiries || 0}
          icon={<Clock className="w-6 h-6" />}
          color="yellow"
        />
        <StatsCard
          title="Total Projects"
          value={totalProjects || 0}
          icon={<FolderOpen className="w-6 h-6" />}
          color="green"
        />
        <StatsCard
          title="Completed"
          value={completedInquiries || 0}
          icon={<CheckCircle className="w-6 h-6" />}
          color="purple"
        />
      </div>

      {/* Recent Inquiries */}
      {/* @ts-expect-error Server Component inside page */}
      <RecentInquiries />
    </div>
  );
}


