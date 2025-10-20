'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Default slides as fallback
const defaultSlides = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    alt: 'Solar panels on modern building',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80',
    alt: 'Industrial solar installation',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
    alt: 'Residential solar panels',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    alt: 'Smart automation systems',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
    alt: 'Telecom infrastructure',
  },
];

interface HeroSlideshowProps {
  images?: string[];
}

export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use provided images or fallback to default slides
  const slides = images && images.length > 0 
    ? images.map((src, index) => ({
        id: index + 1,
        src,
        alt: `Slide ${index + 1}`,
      }))
    : defaultSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
