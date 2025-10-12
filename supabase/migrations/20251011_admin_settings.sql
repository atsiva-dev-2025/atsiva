-- admin settings table for app configuration
create table if not exists public.admin_settings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  email_notifications boolean not null default true,
  admin_email text,
  -- singleton row indicator; enforce max 1 row with a partial unique index
  singleton boolean not null default true
);

-- allow only one row
create unique index if not exists admin_settings_singleton_idx on public.admin_settings (singleton) where singleton = true;

-- RLS
alter table public.admin_settings enable row level security;

-- Anyone can read (optional; restrict as needed)
drop policy if exists "Anyone can read admin settings" on public.admin_settings;
create policy "Anyone can read admin settings"
  on public.admin_settings for select
  to anon, authenticated
  using (true);

-- Authenticated can modify (app-level admin check if needed)
drop policy if exists "Authenticated can manage admin settings" on public.admin_settings;
create policy "Authenticated can manage admin settings"
  on public.admin_settings for all
  to authenticated
  using (true);


