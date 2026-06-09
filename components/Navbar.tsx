'use client';

import Link from 'next/link';
import { mainNav, PATIENT_PORTAL_URL } from '@/lib/nav';
import { SiteLogo } from '@/components/SiteLogo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <SiteLogo size="nav" priority />

          <div className="hidden lg:flex items-center space-x-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-900 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-full px-3 py-2 transition-colors"
            >
              Patient Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
