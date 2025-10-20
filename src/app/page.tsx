import Image from 'next/image';
import Link from 'next/link';
import { ServiceCards } from '@/components/ServiceCards';
import { getPageSettings } from '@/lib/page-settings';
import { HeroSlideshow } from '@/components/HeroSlideshow';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default async function HomePage() {
  // Fetch page settings for all service cards and homepage
  const [
    homepage,
    residentialSolar,
    commercialSolar,
    batteryStorage,
    automation,
    telecom,
    construction,
  ] = await Promise.all([
    getPageSettings('homepage'),
    getPageSettings('residential-solar'),
    getPageSettings('commercial-solar'),
    getPageSettings('battery-storage'),
    getPageSettings('automation'),
    getPageSettings('telecom'),
    getPageSettings('construction'),
  ]);

  const services = [
    {
      title: 'Residential Solar',
      desc: 'Clean energy solutions for your home',
      image: residentialSolar?.hero_image || 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&q=80',
      href: '/services/residential-solar',
    },
    {
      title: 'Commercial Solar',
      desc: 'Industrial-scale power systems',
      image: commercialSolar?.hero_image || 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=400&q=80',
      href: '/services/commercial-solar',
    },
    {
      title: 'Battery Storage',
      desc: '24/7 backup power solutions',
      image: batteryStorage?.hero_image || 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?w=400&q=80',
      href: '/services/battery-storage',
    },
    {
      title: 'Smart Automation',
      desc: 'Intelligent building systems',
      image: automation?.hero_image || 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
      href: '/services/automation',
    },
    {
      title: 'Telecom Solutions',
      desc: 'Advanced connectivity infrastructure',
      image: telecom?.hero_image || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
      href: '/services/telecom',
    },
    {
      title: 'Construction',
      desc: 'Complete building services',
      image: construction?.hero_image || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80',
      href: '/services/construction',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - keep existing */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/60 via-transparent to-transparent dark:from-amber-300/10" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative z-20">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Clean Solar Energy & Smart Solutions
              </h1>
              <p className="mt-4 text-foreground/80 text-lg max-w-prose">
                NINEPRIME delivers modern renewable energy systems and intelligent automation
                for homes and businesses. We design, install, and support solutions that
                reduce costs and power a sustainable future.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 relative z-30">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-md border border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Hero Slideshow */}
            <HeroSlideshow images={homepage?.slideshow_images} />
          </div>
        </div>
      </section>

      {/* Service Cards - Now using Client Component */}
      <ServiceCards services={services} />

      {/* Rest of homepage sections */}
    </div>
  );
}


