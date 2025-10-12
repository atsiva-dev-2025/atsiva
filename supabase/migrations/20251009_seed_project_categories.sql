-- Seed initial project categories
insert into public.project_categories (name, slug, description) values
  ('Renewable Energy', 'renewable-energy', 'Solar installations and battery storage solutions'),
  ('Smart Solutions', 'smart-solutions', 'Automation, telecom, and digital contract systems')
on conflict (slug) do nothing;


