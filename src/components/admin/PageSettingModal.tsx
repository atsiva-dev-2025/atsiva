'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { X, Save } from 'lucide-react';
import { ImageUploader } from './ImageUploader';
import { SlideshowManager } from './SlideshowManager';
import { toast } from 'sonner';
import type { PageSetting } from '@/types/database';

interface PageSettingModalProps {
  setting: PageSetting;
  onClose: () => void;
}

export function PageSettingModal({ setting, onClose }: PageSettingModalProps) {
  const [formData, setFormData] = useState({
    hero_image: setting.hero_image || '',
    hero_heading: setting.hero_heading || '',
    hero_subheading: setting.hero_subheading || '',
    slideshow_images: setting.slideshow_images || [],
  });
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);

    try {
      console.log('Saving settings:', formData); // Debug log

      const response = await fetch(`/api/admin/page-settings/${setting.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Save result:', result); // Debug log

      if (!response.ok) {
        throw new Error(result.message || 'Failed to update');
      }

      toast.success('Page settings updated!');
      window.location.reload();
    } catch (error: any) {
      console.error('Save error:', error);
      toast.error(error.message || 'Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">
            Edit {setting.page_title}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Hero Image */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Hero Image
            </label>
            <ImageUploader
              onUploadComplete={(url) => setFormData({ ...formData, hero_image: url })}
              currentImage={formData.hero_image}
              folder="heroes"
            />
            <p className="text-sm text-gray-600 mt-2">
              Or paste an image URL:
            </p>
            <input
              type="url"
              value={formData.hero_image}
              onChange={(e) => setFormData({ ...formData, hero_image: e.target.value })}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://..."
            />
          </div>

          {/* Hero Heading */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Hero Heading
            </label>
            <input
              type="text"
              value={formData.hero_heading}
              onChange={(e) => setFormData({ ...formData, hero_heading: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Main heading text"
            />
          </div>

          {/* Hero Subheading */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Hero Subheading
            </label>
            <textarea
              value={formData.hero_subheading}
              onChange={(e) => setFormData({ ...formData, hero_subheading: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Subheading or description"
            />
          </div>

          {/* Slideshow Images - Only show for homepage */}
          {setting.page_key === 'homepage' && (
            <div>
              <SlideshowManager
                images={formData.slideshow_images}
                onChange={(images) => setFormData({ ...formData, slideshow_images: images })}
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <Button
              onClick={handleSave}
              loading={loading}
              icon={<Save className="w-4 h-4" />}
              className="flex-1"
            >
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
