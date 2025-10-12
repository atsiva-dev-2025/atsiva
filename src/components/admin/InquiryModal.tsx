'use client';

import { useState } from 'react';
import { Contact } from '@/types/database';
import { Button } from '@/components/ui/Button';
import { X, Mail, Phone, Building, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface InquiryModalProps {
  inquiry: Contact;
  onClose: () => void;
}

export function InquiryModal({ inquiry, onClose }: InquiryModalProps) {
  const [status, setStatus] = useState(inquiry.status);
  const [notes, setNotes] = useState(inquiry.admin_notes || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);
    
    const response = await fetch(`/api/admin/inquiries/${inquiry.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status,
        admin_notes: notes,
        is_read: true,
      }),
    });

    if (response.ok) {
      window.location.reload();
    } else {
      setLoading(false);
      alert('Failed to update inquiry');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Inquiry Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <p className="text-lg font-semibold text-gray-900 mt-1">{inquiry.full_name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Service Interest</label>
              <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{inquiry.service_interest}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href={`mailto:${inquiry.email}`} className="hover:text-blue-600">
                {inquiry.email}
              </a>
            </div>
            {inquiry.phone && (
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href={`tel:${inquiry.phone}`} className="hover:text-blue-600">
                  {inquiry.phone}
                </a>
              </div>
            )}
            {inquiry.company && (
              <div className="flex items-center gap-3 text-gray-700">
                <Building className="w-5 h-5 text-gray-400" />
                <span>{inquiry.company}</span>
              </div>
            )}
            <div className="flex items-center gap-3 text-gray-700">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span>{format(new Date(inquiry.created_at), 'PPpp')}</span>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-gray-600">Message</label>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 whitespace-pre-wrap">{inquiry.message}</p>
            </div>
          </div>

          {/* Status Update */}
          <div>
            <label className="text-sm font-medium text-gray-600">Status</label>
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "new" | "in_progress" | "completed" | "archived")
              }
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {/* Admin Notes */}
          <div>
            <label className="text-sm font-medium text-gray-600">Admin Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Add internal notes..."
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button onClick={handleUpdate} loading={loading} className="flex-1">
              Save Changes
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



