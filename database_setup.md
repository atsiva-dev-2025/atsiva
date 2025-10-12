<!-- path: database_setup.md -->

## Database Setup

This project uses Supabase (Postgres). The initial schema includes lead capture (`contacts`), category taxonomy (`project_categories`), and portfolio items (`projects`).

### Migration file
- `supabase/migrations/20251009_init_contacts_projects.sql`

### Tables

#### public.contacts
- id: uuid, PK, default gen_random_uuid()
- created_at: timestamptz, default timezone('utc', now()), not null
- full_name: text, not null
- email: text, not null
- phone: text, nullable
- company: text, nullable
- service_interest: text, nullable (e.g., 'solar', 'automation', 'telecom', 'other')
- message: text, not null
- status: text, default 'new' ('new' | 'in_progress' | 'completed' | 'archived')
- admin_notes: text, nullable
- is_read: boolean, default false

Indexes:
- contacts_created_at_idx on (created_at desc)
- contacts_status_idx on (status)

#### public.project_categories
- id: uuid, PK, default gen_random_uuid()
- name: text, not null, unique
- slug: text, not null, unique
- description: text, nullable
- created_at: timestamptz, default timezone('utc', now()), not null

#### public.projects
- id: uuid, PK, default gen_random_uuid()
- created_at: timestamptz, default timezone('utc', now()), not null
- updated_at: timestamptz, default timezone('utc', now()), not null
- title: text, not null
- slug: text, not null, unique
- category_id: uuid, FK → project_categories(id) on delete cascade
- subcategory: text, nullable
- description: text, not null
- client_name: text, nullable
- location: text, nullable
- completion_date: date, nullable
- featured_image: text, nullable
- gallery_images: text[], nullable
- specifications: jsonb, nullable
- is_featured: boolean, default false
- is_published: boolean, default true
- order_index: integer, default 0

Indexes:
- projects_category_idx on (category_id)
- projects_featured_idx on (is_featured, is_published)

### Example queries
```sql
-- Insert a new contact
insert into public.contacts (full_name, email, message)
values ('Jane Doe', 'jane@example.com', 'Interested in residential solar');

-- List featured, published projects
select id, title, slug
from public.projects
where is_featured = true and is_published = true
order by order_index asc, created_at desc;

-- Projects by category slug
select p.*
from public.projects p
join public.project_categories c on c.id = p.category_id
where c.slug = 'renewable-energy';
```

### Policies / constraints
- Unique constraints on `project_categories.name` and `project_categories.slug`.
- RLS: Not enabled in this migration. Enable and add policies as needed for your app (recommended before production).


