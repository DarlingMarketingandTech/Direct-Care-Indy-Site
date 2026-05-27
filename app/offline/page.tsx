'use client';

import { Wifi } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-teal-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-white p-6 shadow-xl">
            <Wifi className="h-16 w-16 text-slate-400" />
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

        <div className="pt-8 text-sm text-slate-500">
          <p>Some pages may still be available offline</p>
        </div>
      </div>
    </div>
  );
}
