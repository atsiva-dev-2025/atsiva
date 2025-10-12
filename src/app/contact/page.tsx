"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
        <p className="text-foreground/70 mt-2 max-w-prose">
          Tell us about your project and we’ll respond within one business day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Company info */}
        <motion.aside
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-br from-amber-100/50 to-transparent dark:from-amber-300/10"
        >
          <h2 className="text-xl font-semibold">ATSIVA</h2>
          <p className="text-sm text-foreground/70 mt-1">Clean Solar Energy & Smart Solutions</p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/[0.04] dark:bg-white/[0.06]">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-foreground/70 text-sm">123 Solar Ave, Green City</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/[0.04] dark:bg-white/[0.06]">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-foreground/70 text-sm">hello@atsiva.com</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/[0.04] dark:bg-white/[0.06]">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-foreground/70 text-sm">+1 (555) 123-4567</p>
              </div>
            </li>
          </ul>
        </motion.aside>

        {/* Right: Contact form */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2 }}
          className="rounded-xl border border-black/10 dark:border-white/10 p-6"
        >
          <ContactForm />
        </motion.section>
      </div>
    </main>
  );
}


