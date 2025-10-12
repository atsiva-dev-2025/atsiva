-- supabase/migrations/20251009_init_contacts_projects.sql
-- Schema: contacts (lead capture), project_categories, projects, and indexes

-- Ensure required extension for gen_random_uuid()
create extension if not exists pgcrypto;

-- 1. CONTACTS TABLE (Lead Capture)
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  email text not null,
  phone text,
  company text,
  service_interest text,
  message text not null,
  status text default 'new',
  admin_notes text,
  is_read boolean default false
);

-- 2. PROJECT CATEGORIES TABLE
create table if not exists public.project_categories (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. PROJECTS TABLE (Portfolio)
create table if not exists public.projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  category_id uuid references public.project_categories(id) on delete cascade,
  subcategory text,
  description text not null,
  client_name text,
  location text,
  completion_date date,
  featured_image text,
  gallery_images text[],
  specifications jsonb,
  is_featured boolean default false,
  is_published boolean default true,
  order_index integer default 0
);

-- 4. INDEXES for performance
create index if not exists contacts_created_at_idx on public.contacts(created_at desc);
create index if not exists contacts_status_idx on public.contacts(status);
create index if not exists projects_category_idx on public.projects(category_id);
create index if not exists projects_featured_idx on public.projects(is_featured, is_published);


