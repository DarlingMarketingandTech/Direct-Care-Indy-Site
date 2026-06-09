import Link from "next/link";
import type { Metadata } from "next";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";

export const metadata: Metadata = {
  title: "Contact Us | Direct Care Indy",
  description:
    "Get in touch with Direct Care Indy. We are here to answer your questions about Direct Primary Care membership, employer plans, and more.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600 mb-8">
          Have questions about Direct Primary Care, membership plans, or employer options?
          We would love to hear from you.
        </p>

        <DpcQuizCtaBand
          headline="Not sure who to contact?"
          body="Not sure who to contact? Take the quiz and we'll route you."
          variant="muted"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Email</h2>
            <a
              href="mailto:info@directcareindy.com"
              className="text-teal-600 hover:underline font-medium"
            >
              info@directcareindy.com
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Patient Portal</h2>
            <p className="text-slate-600 text-sm mb-3">
              Existing members can message their care team directly through the portal.
            </p>
            <a
              href="https://directcareindy.hint.com/login"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors"
            >
              Portal Login
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Ready to join?{" "}
          <Link href="/join" className="text-teal-600 hover:underline font-medium">
            Start your membership →
          </Link>
        </p>
      </div>
    </main>
  );
}
