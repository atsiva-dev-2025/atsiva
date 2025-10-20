'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ImageUploader } from './ImageUploader';
import { Plus, X, MoveUp, MoveDown } from 'lucide-react';
import Image from 'next/image';

interface SlideshowManagerProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export function SlideshowManager({ images, onChange }: SlideshowManagerProps) {
  const [newImageUrl, setNewImageUrl] = useState('');

  const addImage = () => {
    if (newImageUrl.trim()) {
      onChange([...images, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  const moveImage = (index: number, direction: 'up' | 'down') => {
    const newImages = [...images];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (newIndex >= 0 && newIndex < images.length) {
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      onChange(newImages);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Slideshow Images ({images.length})
        </label>
        <p className="text-sm text-gray-500 mb-4">
          Add multiple images for the homepage slideshow. Images will be displayed in order.
        </p>
      </div>

      {/* Add new image */}
      <div className="flex gap-2">
        <input
          type="url"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Enter image URL..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <Button
          onClick={addImage}
          disabled={!newImageUrl.trim()}
          leftIcon={<Plus className="w-4 h-4" />}
        >
          Add Image
        </Button>
      </div>

      {/* Image uploader */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or upload an image
        </label>
        <ImageUploader
          onUploadComplete={(url) => {
            if (url) {
              onChange([...images, url]);
            }
          }}
          folder="slideshow"
        />
      </div>

      {/* Images list */}
      <div className="space-y-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            {/* Image preview */}
            <div className="w-16 h-12 relative rounded overflow-hidden flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Image info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Slide {index + 1}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {image}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveImage(index, 'up')}
                disabled={index === 0}
                leftIcon={<MoveUp className="w-4 h-4" />}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveImage(index, 'down')}
                disabled={index === images.length - 1}
                leftIcon={<MoveDown className="w-4 h-4" />}
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeImage(index)}
                leftIcon={<X className="w-4 h-4" />}
                className="text-red-600 hover:text-red-700"
              />
            </div>
          </div>
        ))}

        {images.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No slideshow images added yet.</p>
            <p className="text-sm">Add images above to create a slideshow.</p>
          </div>
        )}
      </div>
    </div>
  );
}
