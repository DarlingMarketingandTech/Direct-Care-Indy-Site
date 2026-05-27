'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  Activity,
  CreditCard,
  Lock,
  ExternalLink,
} from 'lucide-react';

const HINT_PORTAL_URL = 'https://directcareindy.hint.com/login';

interface PortalFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

const portalFeatures: PortalFeature[] = [
  {
    icon: Calendar,
    title: 'Schedule Appointments',
    description: 'Book same-day or next-day appointments with your provider',
    href: `${HINT_PORTAL_URL}?action=schedule`,
  },
  {
    icon: FileText,
    title: 'Medical Records',
    description: 'Access your complete health history, labs, and visit notes',
    href: `${HINT_PORTAL_URL}?view=records`,
  },
  {
    icon: MessageSquare,
    title: 'Secure Messaging',
    description: 'Direct communication with Dr. Pike and care team',
    href: `${HINT_PORTAL_URL}?view=messages`,
  },
  {
    icon: Pill,
    title: 'Prescriptions',
    description: 'Request refills and view medication history',
    href: `${HINT_PORTAL_URL}?view=prescriptions`,
  },
  {
    icon: Activity,
    title: 'Lab Results',
    description: 'Review test results with provider annotations',
    href: `${HINT_PORTAL_URL}?view=labs`,
  },
  {
    icon: CreditCard,
    title: 'Billing & Payment',
    description: 'Manage your membership and view invoices',
    href: `${HINT_PORTAL_URL}?view=billing`,
  },
];

export default function HintHealthPortal() {
  const [email, setEmail] = useState('');

  const handleQuickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(`${HINT_PORTAL_URL}?email=${encodeURIComponent(email)}`, '_blank');
    }
  };

  return (
    <div className="space-y-8">
      {/* Quick Login Card */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Patient Portal Access</h3>
            <p className="text-slate-600 mt-1">
              Powered by Hint Health - HIPAA-compliant and secure
            </p>
          </div>
        </div>

        <form onSubmit={handleQuickLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Login to Portal
              <ExternalLink className="h-4 w-4" />
            </button>
            <a
              href={HINT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-gray-50 text-slate-900 rounded-full font-semibold border-2 border-gray-200 transition-all"
            >
              Go to Portal
            </a>
          </div>
        </form>

        <div className="mt-4 text-sm text-slate-600">
          <p>
            First time user?{' '}
            <Link href="/join" className="text-teal-600 hover:text-teal-700 font-medium underline">
              Join as a member
            </Link>
            {' '}and you&apos;ll receive portal access within 24 hours.
          </p>
        </div>
      </div>

      {/* Portal Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portalFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <a
              key={feature.title}
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-xl p-6 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 group-hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="h-5 w-5 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-900 group-hover:text-teal-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 group-hover:text-slate-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Integration Info */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-3">About Hint Health Integration</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Direct Care Indy uses Hint Health&apos;s enterprise platform to provide seamless patient-provider
          communication, appointment scheduling, and secure health record management. All data is
          encrypted end-to-end and fully HIPAA compliant. Your portal account syncs automatically
          with our practice management system for real-time updates.
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-teal-600 font-medium">
          <Lock className="h-4 w-4" />
          <span>256-bit encryption • HIPAA Compliant • SOC 2 Type II Certified</span>
        </div>
      </div>
    </div>
  );
}
