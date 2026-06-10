"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Loader2, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_SMS,
  CONTACT_PHONE_TEL,
  DEFAULT_CONTACT_INTRO,
  isQuizContactIntent,
  OFFICE_HOURS,
  QUIZ_INTENT_COPY,
} from "@/lib/content/contact";
import { trackEvent } from "@/lib/analytics";

function getUtmParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
} {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const intent = searchParams.get("intent");

  const isQuizSource = source === "quiz" && isQuizContactIntent(intent);
  const copy = isQuizSource ? QUIZ_INTENT_COPY[intent] : DEFAULT_CONTACT_INTRO;

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const utm = getUtmParams();
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || "",
      healthGoal: form.message || undefined,
      persona: isQuizSource ? intent : undefined,
      source: isQuizSource ? "DPC Fit Quiz — Contact" : "Contact Page",
      quizResult: isQuizSource ? intent : undefined,
      sourcePage: "/contact",
      utmSource: utm.utmSource,
      utmMedium: utm.utmMedium,
      utmCampaign: utm.utmCampaign,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      trackEvent("contact_form_submitted", {
        source: payload.source,
        intent: isQuizSource ? intent : undefined,
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {isQuizSource && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
            From your quiz result
          </p>
        )}
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{copy.headline}</h1>
        <p className="text-lg text-slate-600 mb-6">{copy.intro}</p>

        <div className="mb-8 rounded-2xl border border-teal-200 bg-teal-50 p-6 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-slate-900">
            <MapPin className="h-5 w-5 text-teal-600" aria-hidden />
            <h2 className="text-xl font-semibold">Our clinic</h2>
          </div>
          <p className="text-slate-700 font-medium">{CONTACT_ADDRESS.full}</p>
          <p className="mt-2 text-sm text-slate-600">{OFFICE_HOURS}</p>
          <p className="mt-2 text-sm text-slate-500">Call or text for current hours if you are unsure.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={CONTACT_PHONE_TEL}
            className="interactive-element flex items-center gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm transition-colors hover:bg-teal-100"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-600">Call us</p>
              <p className="text-lg font-bold text-teal-800">{CONTACT_PHONE}</p>
            </div>
          </a>

          <a
            href={CONTACT_PHONE_SMS}
            className="interactive-element flex items-center gap-4 rounded-2xl border border-teal-200 bg-teal-50 p-5 shadow-sm transition-colors hover:bg-teal-100"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
              <MessageSquare className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-600">Text us</p>
              <p className="text-lg font-bold text-teal-800">{CONTACT_PHONE}</p>
            </div>
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-slate-900">
              <Mail className="h-5 w-5 text-teal-600" aria-hidden />
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-teal-600 hover:underline font-medium"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

        </div>

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Send us a message</h2>
          <p className="text-sm text-slate-600 mb-6">
            General questions about membership or employer options — not for medical advice or
            urgent symptoms.
          </p>

          {status === "success" ? (
            <div
              className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-slate-800"
              role="status"
              aria-live="polite"
            >
              <p className="font-semibold">Thank you — we received your message.</p>
              <p className="mt-2">
                A team member may follow up soon. You can also call or text{" "}
                <a href={CONTACT_PHONE_TEL} className="font-medium text-teal-700 hover:underline">
                  {CONTACT_PHONE}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {isQuizSource && (
                <>
                  <input type="hidden" name="source" value="quiz" readOnly />
                  <input type="hidden" name="intent" value={intent} readOnly />
                </>
              )}

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-900">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-900">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-900">
                  Phone <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-900">
                  How can we help? <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Membership questions, employer inquiry, scheduling help..."
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                />
              </div>

              <p className="text-xs leading-relaxed text-slate-500">
                This form is not for emergencies. If you are having a medical emergency, call 911.
                Please do not include detailed medical history or urgent symptoms.
              </p>

              {status === "error" && (
                <p className="text-sm text-red-700" role="alert">
                  We could not send your message right now. Please call or text{" "}
                  <a href={CONTACT_PHONE_TEL} className="font-medium underline">
                    {CONTACT_PHONE}
                  </a>{" "}
                  or email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 disabled:opacity-60"
              >
                {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                Send message
              </button>
            </form>
          )}
        </section>

        <p className="mt-10 text-sm text-slate-600">
          Not sure where to start?{" "}
          <Link href="/quiz" className="font-semibold text-teal-700 hover:underline">
            Use the 60-second guide
          </Link>{" "}
          or explore{" "}
          <Link href="/individuals" className="font-semibold text-teal-700 hover:underline">
            individuals
          </Link>
          ,{" "}
          <Link href="/families" className="font-semibold text-teal-700 hover:underline">
            families
          </Link>
          , and{" "}
          <Link href="/employers" className="font-semibold text-teal-700 hover:underline">
            employer
          </Link>{" "}
          pages.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
