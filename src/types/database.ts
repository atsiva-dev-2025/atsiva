// src/types/database.ts
export type Contact = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest: 'solar' | 'automation' | 'telecom' | 'other';
  message: string;
  status: 'new' | 'in_progress' | 'completed' | 'archived';
  admin_notes?: string;
  is_read: boolean;
};

export type ProjectCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
};

export type Project = {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  slug: string;
  category_id: string;
  subcategory?: string;
  description: string;
  client_name?: string;
  location?: string;
  completion_date?: string;
  featured_image?: string;
  gallery_images?: string[];
  specifications?: Record<string, any>;
  is_featured: boolean;
  is_published: boolean;
  order_index: number;
};


