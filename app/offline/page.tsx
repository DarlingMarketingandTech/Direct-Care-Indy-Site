'use client';

import { WifiOff } from 'lucide-react';
import Link from 'next/link';
import { SiteLogoMark } from '@/components/SiteLogoMark';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-2xl bg-white p-5 shadow-xl">
            <SiteLogoMark size="lg" decorative={false} />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm">
            <WifiOff className="h-4 w-4" aria-hidden />
            No connection
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-slate-900">
            You&apos;re Offline
          </h1>
          <p className="text-lg text-slate-600">
            Please check your internet connection and try again.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            Retry Connection
          </button>

          <Link
            href="/"
            className="block w-full bg-white hover:bg-gray-50 text-slate-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 transition-all"
          >
            Return to Homepage
          </Link>
        </div>

        <p className="pt-4 text-sm text-slate-500">
          Some pages may still be available offline.
        </p>
      </div>
    </div>
  );
}
