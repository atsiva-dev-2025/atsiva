'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Mail, Bell, Save } from 'lucide-react';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');

  // Load initial settings
  useState(() => {
    (async () => {
      const res = await fetch('/api/admin/settings');
      if (res.ok) {
        const json = await res.json();
        setEmailNotifications(json.settings?.email_notifications ?? true);
        setAdminEmail(json.settings?.admin_email ?? '');
      }
    })();
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600 mt-1">Manage your admin preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Email Notifications
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Configure when you receive email alerts
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <span className="text-gray-700">
              Send email for new contact inquiries
            </span>
          </label>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="admin@nineprime.com"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Notifications will be sent to this email address
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Button
            leftIcon={<Save className="w-4 h-4" />}
            onClick={async () => {
              await fetch('/api/admin/settings', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email_notifications: emailNotifications,
                  admin_email: adminEmail,
                }),
              });
            }}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}


