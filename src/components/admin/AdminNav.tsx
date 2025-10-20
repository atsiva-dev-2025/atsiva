"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { LogOut, Bell } from 'lucide-react';

export function AdminNav() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
      // Still redirect even if API fails
      router.push('/login');
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">NINEPRIME Admin</h1>
          <p className="text-sm text-gray-600">Dashboard Management</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <Button
            variant="outline"
            onClick={handleLogout}
            leftIcon={<LogOut className="w-4 h-4 text-gray-700" />}
            className="text-gray-700 border-gray-300 hover:bg-gray-50"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}


