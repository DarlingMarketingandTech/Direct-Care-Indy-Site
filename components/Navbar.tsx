'use client';

import Link from 'next/link';
import Image from 'next/image';
import { mainNav } from '@/lib/nav';

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Direct Care Indy">
            <Image
              src="/images/logos/dci-logo-primary.svg"
              alt="Direct Care Indy logo"
              width={160}
              height={40}
              priority
              className="h-auto w-auto object-contain"
            />
          </Link>

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

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-900 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-full px-3 py-2 transition-colors"
            >
              Patient Login
            </a>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Join Now
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <Link
              href="/join"
              className="text-sm bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold shadow-md transition-colors"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
