"use client";

// src/components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Sun,
  Building2,
  Battery,
  Cog,
  Network,
  FileText,
} from "lucide-react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; icon?: React.ReactNode }[];
};

const renewableChildren: NavItem["children"] = [
  { label: "Residential Solar", href: "/services/residential-solar", icon: <Sun className="h-4 w-4" /> },
  { label: "Commercial Solar", href: "/services/commercial-solar", icon: <Building2 className="h-4 w-4" /> },
  { label: "Battery Storage", href: "/services/battery-storage", icon: <Battery className="h-4 w-4" /> },
];

const smartChildren: NavItem["children"] = [
  { label: "Automation", href: "/services/automation", icon: <Cog className="h-4 w-4" /> },
  { label: "Telecom", href: "/services/telecom", icon: <Network className="h-4 w-4" /> },
  { label: "Construction", href: "/services/construction", icon: <FileText className="h-4 w-4" /> },
];

const nav: NavItem[] = [
  { label: "Renewable Energy", children: renewableChildren },
  { label: "Smart Solutions", children: smartChildren },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function classNames(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  const isActive = (href?: string) => !!href && pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Sun className="h-5 w-5" />
            <span>ATSIVA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <DesktopNavItem key={item.label} item={item} activePath={pathname} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground focus:outline-none"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="md:hidden border-t border-black/10 dark:border-white/10 bg-background/90 backdrop-blur"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
              <ul className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
                {nav.map((item) => {
                  const isGroup = !!item.children?.length;
                  const open = mobileOpenGroup === item.label;
                  return (
                    <li key={item.label}>
                      {isGroup ? (
                        <>
                          <button
                            className="w-full flex items-center justify-between py-3 text-left"
                            onClick={() =>
                              setMobileOpenGroup((g) => (g === item.label ? null : item.label))
                            }
                            aria-expanded={open}
                          >
                            <span className="font-medium">{item.label}</span>
                            <ChevronDown
                              className={classNames(
                                "h-4 w-4 transition-transform",
                                open && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.ul
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.15 }}
                                className="pb-2 pl-2 space-y-1"
                              >
                                {item.children!.map((child) => (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className={classNames(
                                        "flex items-center gap-2 rounded px-2 py-2 text-sm hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
                                        pathname.startsWith(child.href) &&
                                          "bg-black/[0.04] dark:bg-white/[0.06]"
                                      )}
                                    >
                                      {child.icon}
                                      <span>{child.label}</span>
                                      <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={() => setMobileOpen(false)}
                          className={classNames(
                            "block py-3 font-medium",
                            isActive(item.href) && "text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopNavItem({
  item,
  activePath,
}: {
  item: NavItem;
  activePath: string;
}) {
  const isGroup = !!item.children?.length;
  const isActive = item.href ? activePath.startsWith(item.href) : false;

  if (!isGroup) {
    return (
      <Link
        href={item.href!}
        className={classNames(
          "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-foreground"
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
        aria-haspopup="menu"
        aria-expanded={false}
      >
        {item.label}
        <ChevronDown className="h-4 w-4 opacity-70" />
      </button>
      <Dropdown items={item.children!} />
    </div>
  );
}

function Dropdown({
  items,
}: {
  items: { label: string; href: string; icon?: React.ReactNode }[];
}) {
  const pathname = usePathname();
  return (
    <div
      className="absolute left-0 top-full w-56 origin-top rounded-md border border-black/10 dark:border-white/10 bg-background/95 backdrop-blur shadow-lg opacity-0 scale-95 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto"
    >
      <div className="py-1">
        {items.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className={classNames(
              "flex items-center gap-2 px-3 py-2 text-sm hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
              pathname.startsWith(child.href) &&
                "bg-black/[0.04] dark:bg-white/[0.06]"
            )}
          >
            {child.icon}
            <span>{child.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}


