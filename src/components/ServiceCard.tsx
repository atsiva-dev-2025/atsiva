// src/components/ServiceCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type ServiceCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function ServiceCard({ href, icon, title, description, className = "" }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ type: "tween", duration: 0.15 }} className={className}>
      <Link
        href={href}
        className="block rounded-lg border border-black/10 dark:border-white/10 p-5 hover:shadow-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-100 text-amber-700 dark:bg-amber-400/20 dark:text-amber-300">
            {icon}
          </span>
          <h3 className="text-base font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-foreground/70">{description}</p>
      </Link>
    </motion.div>
  );
}
