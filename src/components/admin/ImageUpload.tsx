'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/Button';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  currentImage?: string;
}

export function ImageUpload({ onUpload, currentImage }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage);
  const supabase = createClient();

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('project-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('project-images')
        .getPublicUrl(filePath);

      setPreview(data.publicUrl);
      onUpload(data.publicUrl);
    } catch (error) {
      alert('Error uploading image!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {preview ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-cover"
          />
          <button
            onClick={() => {
              setPreview(undefined);
              onUpload('');
            }}
            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-12 h-12 text-gray-400 mb-3" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 10MB</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={uploadImage}
            disabled={uploading}
          />
        </label>
      )}
      
      {uploading && (
        <div className="text-sm text-gray-600 text-center">Uploading...</div>
      )}
    </div>
  );
}
