import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Brokers | Direct Care Indy",
  description:
    "Partner with Direct Care Indy to offer your clients affordable, high-quality direct primary care. Learn how DPC integrates with benefits packages.",
};

export default function BrokersPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">For Brokers</h1>
        <p className="text-lg text-slate-600 mb-8">
          Help your clients reduce healthcare costs and improve employee satisfaction by pairing
          Direct Care Indy memberships with high-deductible or self-funded health plans.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Why DPC for Benefits Packages?</h2>
            <ul className="space-y-2 text-slate-600 text-sm list-disc list-inside">
              <li>Flat monthly fee — no per-visit billing surprises</li>
              <li>Wholesale lab & imaging pricing passed directly to members</li>
              <li>Reduces unnecessary ER and specialist visits</li>
              <li>Works alongside any major-medical or self-funded plan</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Get in Touch</h2>
            <p className="text-slate-600 text-sm mb-4">
              Interested in adding Direct Care Indy to your portfolio? Reach out and we will walk
              you through employer pricing and integration options.
            </p>
            <Link
              href="mailto:info@directcareindy.com"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Looking for employer group plans?{" "}
          <Link href="/employers" className="text-teal-600 hover:underline font-medium">
            See the Employers page →
          </Link>
        </p>
      </div>
    </main>
  );
}
