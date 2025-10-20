-- Add slideshow_images field to page_settings table
ALTER TABLE public.page_settings 
ADD COLUMN slideshow_images text[];

-- Add a comment to explain the field
COMMENT ON COLUMN public.page_settings.slideshow_images IS 'Array of image URLs for slideshow functionality';
