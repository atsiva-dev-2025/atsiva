-- supabase/migrations/20251009_rls_policies.sql
-- Enable RLS and add policies for contacts, project_categories, and projects

-- Enable RLS
alter table public.contacts enable row level security;
alter table public.project_categories enable row level security;
alter table public.projects enable row level security;

-- CONTACTS POLICIES
-- Public can insert (contact form submissions)
drop policy if exists "Anyone can submit contact form" on public.contacts;
create policy "Anyone can submit contact form"
  on public.contacts for insert
  to anon, authenticated
  with check (true);

-- Only authenticated users (admins in app logic) can read/update/delete
drop policy if exists "Admins can view all contacts" on public.contacts;
create policy "Admins can view all contacts"
  on public.contacts for select
  to authenticated
  using (true);

drop policy if exists "Admins can update contacts" on public.contacts;
create policy "Admins can update contacts"
  on public.contacts for update
  to authenticated
  using (true);

drop policy if exists "Admins can delete contacts" on public.contacts;
create policy "Admins can delete contacts"
  on public.contacts for delete
  to authenticated
  using (true);

-- PROJECT CATEGORIES POLICIES
-- Public can read
drop policy if exists "Anyone can view categories" on public.project_categories;
create policy "Anyone can view categories"
  on public.project_categories for select
  to anon, authenticated
  using (true);

-- Authenticated can manage (admin gating handled in app/claims)
drop policy if exists "Admins can manage categories" on public.project_categories;
create policy "Admins can manage categories"
  on public.project_categories for all
  to authenticated
  using (true);

-- PROJECTS POLICIES
-- Public can view published projects
drop policy if exists "Anyone can view published projects" on public.projects;
create policy "Anyone can view published projects"
  on public.projects for select
  to anon, authenticated
  using (is_published = true);

-- Authenticated can manage (admin gating handled in app/claims)
drop policy if exists "Admins can manage projects" on public.projects;
create policy "Admins can manage projects"
  on public.projects for all
  to authenticated
  using (true);


