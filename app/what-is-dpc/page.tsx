import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is DPC? | Direct Care Indy",
  description:
    "Direct Primary Care (DPC) is a membership-based healthcare model that gives you unlimited access to your doctor for a flat monthly fee — no insurance middlemen.",
};

export default function WhatIsDpcPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">What Is Direct Primary Care?</h1>
        <p className="text-lg text-slate-600 mb-8">
          Direct Primary Care (DPC) is a simple, transparent healthcare model: you pay a low
          flat monthly fee and get unlimited access to your primary care physician — no copays,
          no insurance billing, no gatekeepers.
        </p>

        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">How It Works</h2>
            <p className="text-slate-600 text-sm">
              Members pay a simple monthly membership fee. In return, they get same-day or
              next-day appointments, direct physician phone and text access, and wholesale
              pricing on labs, imaging, and medications — saving families thousands per year.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">DPC vs. Traditional Insurance</h2>
            <ul className="space-y-2 text-slate-600 text-sm list-disc list-inside">
              <li>No per-visit fees or surprise bills</li>
              <li>Direct relationship with your doctor — not a network</li>
              <li>Labs at wholesale cost, not retail insurance rates</li>
              <li>Pairs well with a catastrophic / high-deductible plan for major events</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Ready to Learn More?</h2>
            <div className="flex flex-wrap gap-3 mt-3">
              <Link
                href="/membership"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors"
              >
                View Membership Plans
              </Link>
              <Link
                href="/pricing"
                className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-5 py-2 rounded-full font-semibold text-sm transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
