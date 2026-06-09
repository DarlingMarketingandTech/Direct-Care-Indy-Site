import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

function ContactPageFallback() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">Loading contact options…</p>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageContent />
    </Suspense>
  );
}
