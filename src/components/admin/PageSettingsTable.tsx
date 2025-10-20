'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Edit, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { PageSettingModal } from './PageSettingModal';
import type { PageSetting } from '@/types/database';

interface PageSettingsTableProps {
  settings: PageSetting[];
}

export function PageSettingsTable({ settings }: PageSettingsTableProps) {
  const [selectedSetting, setSelectedSetting] = useState<PageSetting | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (setting: PageSetting) => {
    setSelectedSetting(setting);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-200">
          {settings.map((setting) => (
            <div key={setting.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-6">
                {/* Image Preview */}
                <div className="w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                  {setting.hero_image ? (
                    <Image
                      src={setting.hero_image}
                      alt={setting.page_title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {setting.page_title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Page Key:</span> {setting.page_key}
                  </p>
                  {setting.hero_heading && (
                    <p className="text-gray-800 font-medium mb-1">
                      {setting.hero_heading}
                    </p>
                  )}
                  {setting.hero_subheading && (
                    <p className="text-sm text-gray-600">
                      {setting.hero_subheading}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Edit className="w-4 h-4" />}
                    onClick={() => handleEdit(setting)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedSetting && (
        <PageSettingModal
          setting={selectedSetting}
          onClose={() => {
            setShowModal(false);
            setSelectedSetting(null);
          }}
        />
      )}
    </>
  );
}
