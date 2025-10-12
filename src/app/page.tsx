"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home as HomeIcon,
  Building2,
  Battery,
  Cpu,
  Radio,
  FileSignature,
  Sun,
  Hammer,
} from "lucide-react";

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

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                Clean Solar Energy & Smart Solutions
              </h1>
              <p className="mt-4 text-foreground/80 text-lg max-w-prose">
                ATSIVA delivers modern renewable energy systems and intelligent automation
                for homes and businesses. We design, install, and support solutions that
                reduce costs and power a sustainable future.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-md border border-black/10 dark:border-white/15 px-5 py-2.5 text-sm font-semibold hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                alt="Solar panels on modern building"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
            <p className="text-foreground/70 mt-2 max-w-prose">
              End-to-end design, installation, and support for renewable and smart systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: 'Residential Solar',
                desc: 'Clean energy solutions for your home',
                image: 'https://plus.unsplash.com/premium_photo-1680302170840-ad9b1256f40e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxyZXNpZGVudGlhbCUyMGhvbWUlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400&q=80',
                href: '/services/residential-solar',
              },
              {
                icon: Building2,
                title: 'Commercial Solar',
                desc: 'Industrial-scale power systems',
                image: 'https://plus.unsplash.com/premium_photo-1742418064842-c929972db9e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGluZHVzdHJpYWwlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400&q=80',
                href: '/services/commercial-solar',
              },
              {
                icon: Battery,
                title: 'Battery Storage',
                desc: '24/7 backup power solutions',
                image: 'https://images.unsplash.com/photo-1639302610362-4c86747e8680?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cmljJTIwY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400&q=80',
                href: '/services/battery-storage',
              },
              {
                icon: Cpu,
                title: 'Smart Automation',
                desc: 'Intelligent building systems',
                image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80',
                href: '/services/automation',
              },
              {
                icon: Radio,
                title: 'Telecom Solutions',
                desc: 'Advanced connectivity infrastructure',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
                href: '/services/telecom',
              },
              {
                icon: Hammer,
                title: 'Construction',
                desc: 'Complete building services',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80',
                href: '/services/construction',
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-r from-amber-100 to-transparent dark:from-amber-300/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-bold">Ready to Go Solar?</h3>
              <p className="text-foreground/70">
                Talk to our specialists about a system tailored to your needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


