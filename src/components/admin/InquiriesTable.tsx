"use client";

import { useState } from 'react';
import { Contact } from '@/types/database';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Eye, Trash2 } from 'lucide-react';
import { InquiryModal } from './InquiryModal';
import { formatDistanceToNow } from 'date-fns';

interface InquiriesTableProps {
  inquiries: Contact[];
}

export function InquiriesTable({ inquiries }: InquiriesTableProps) {
  const [selectedInquiry, setSelectedInquiry] = useState<Contact | null>(null);
  const [showModal, setShowModal] = useState(false);

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      archived: 'bg-gray-100 text-gray-800',
    };
    return colors[status as keyof typeof colors] || colors.new;
  };

  const handleView = (inquiry: Contact) => {
    setSelectedInquiry(inquiry);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    const response = await fetch(`/api/admin/inquiries/${id}`, { method: 'DELETE' });
    if (response.ok) window.location.reload();
  };

  if (inquiries.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-12 text-center">
        <p className="text-gray-500">No inquiries found</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{inquiry.full_name}</span>
                    {!inquiry.is_read && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{inquiry.email}</td>
                <td className="px-6 py-4">
                  <Badge variant="outline">{inquiry.service_interest}</Badge>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {formatDistanceToNow(new Date(inquiry.created_at), { addSuffix: true })}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Eye className="w-4 h-4" />}
                      onClick={() => handleView(inquiry)}
                      title="View details"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Trash2 className="w-4 h-4 text-red-600" />}
                      onClick={() => handleDelete(inquiry.id)}
                      title="Delete"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedInquiry && (
        <InquiryModal
          inquiry={selectedInquiry}
          onClose={() => {
            setShowModal(false);
            setSelectedInquiry(null);
          }}
        />
      )}
    </>
  );
}


