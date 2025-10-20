-- Insert homepage settings if they don't exist
INSERT INTO public.page_settings (page_key, page_title, hero_heading, hero_subheading, slideshow_images)
VALUES (
  'homepage',
  'Homepage',
  'Clean Solar Energy & Smart Solutions',
  'NINEPRIME delivers modern renewable energy systems and intelligent automation for homes and businesses. We design, install, and support solutions that reduce costs and power a sustainable future.',
  ARRAY[
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
    'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80'
  ]
)
ON CONFLICT (page_key) DO NOTHING;
