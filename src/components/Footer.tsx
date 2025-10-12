// src/components/Footer.tsx
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold">ATSIVA</h3>
            <p className="mt-2 text-sm text-foreground/70 max-w-prose">
              Clean Solar Energy & Smart Solutions. We design, install, and support
              renewable energy and smart infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className="hover:underline" href="/about">About</Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Follow us</h3>
            <div className="mt-2 flex items-center gap-3">
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-black/10 dark:border-white/10 pt-4 text-xs text-foreground/70">
          © {year} ATSIVA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


