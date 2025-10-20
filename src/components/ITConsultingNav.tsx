'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const subPages = [
  { href: '/smart-solutions/it-consulting', label: 'Overview' },
  { href: '/smart-solutions/it-consulting/innovation-labs', label: 'Innovation Labs' },
  { href: '/smart-solutions/it-consulting/capacity-development', label: 'Capacity Development' },
  { href: '/smart-solutions/it-consulting/cybersecurity', label: 'Cybersecurity' },
];

export function ITConsultingNav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-8 overflow-x-auto py-4">
          {subPages.map((page) => {
            const isActive = pathname === page.href;
            return (
              <Link
                key={page.href}
                href={page.href}
                className={cn(
                  'whitespace-nowrap font-medium transition-colors pb-2 border-b-2',
                  isActive
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                )}
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
