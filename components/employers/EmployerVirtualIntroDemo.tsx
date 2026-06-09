"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  Video,
} from "lucide-react";
import { PROVIDERS } from "@/lib/data/providers";
import {
  EMPLOYER_CONTACT_MAILTO,
  EMPLOYER_VIRTUAL_INTRO,
} from "@/lib/content/employers";

const TIME_SLOTS = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"] as const;

function getUpcomingWeekdays(count: number): Date[] {
  const dates: Date[] = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);

  while (dates.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      dates.push(new Date(cursor));
    }
  }

  return dates;
}

function formatDateLabel(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function formatDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function EmployerVirtualIntroDemo() {
  const upcomingDates = useMemo(() => getUpcomingWeekdays(8), []);
  const [selectedProvider, setSelectedProvider] = useState(PROVIDERS[0]?.slug ?? "");
  const [selectedDate, setSelectedDate] = useState(formatDateKey(upcomingDates[0]));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const provider = PROVIDERS.find((item) => item.slug === selectedProvider);
  const selectedDateObj = upcomingDates.find(
    (date) => formatDateKey(date) === selectedDate,
  );

  function handleConfirm() {
    if (!selectedTime || !name.trim() || !email.trim()) return;
    setConfirmed(true);
  }

  if (confirmed && provider && selectedDateObj && selectedTime) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="section-card border-secondary/30 bg-linear-to-br from-secondary/5 to-card p-8 text-center md:p-10">
          <div className="mx-auto mb-4 inline-flex rounded-full bg-secondary/15 p-3 text-secondary">
            <CheckCircle2 className="h-8 w-8" aria-hidden />
          </div>
          <h2 className="heading-3 text-foreground">Demo booking saved</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            This is a preview flow. Live scheduling will connect here soon — your
            selections are shown below.
          </p>
          <dl className="mx-auto mt-8 max-w-md space-y-3 rounded-2xl border border-border bg-muted/40 p-5 text-left text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Provider</dt>
              <dd className="font-medium text-foreground">
                {provider.name}, {provider.credentials}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">When</dt>
              <dd className="font-medium text-foreground">
                {formatDateLabel(selectedDateObj)} at {selectedTime}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Duration</dt>
              <dd className="font-medium text-foreground">
                {EMPLOYER_VIRTUAL_INTRO.durationMinutes} minutes
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Contact</dt>
              <dd className="font-medium text-foreground">
                {name} · {email}
                {company ? ` · ${company}` : ""}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={EMPLOYER_CONTACT_MAILTO}
              className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email us to schedule for real
            </a>
            <Link
              href="/employers"
              className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-muted/60"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to For Employers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 rounded-2xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
        <strong>Demo preview:</strong> Online booking is coming soon. Use this
        flow to see the experience — then reach out by email or phone to schedule
        your call.
      </div>

      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-md">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <aside className="border-b border-border bg-muted/30 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <Link
              href="/employers"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to For Employers
            </Link>

            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Virtual introductory call
            </p>
            <h1 className="heading-3 mt-2 text-foreground">
              {EMPLOYER_VIRTUAL_INTRO.title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {EMPLOYER_VIRTUAL_INTRO.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                {EMPLOYER_VIRTUAL_INTRO.durationMinutes} min
              </li>
              <li className="flex items-center gap-3">
                <Video className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                Video call (link sent after booking)
              </li>
              <li className="flex items-center gap-3">
                <Calendar className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                Weekday availability shown as sample slots
              </li>
            </ul>

            {provider && (
              <div className="mt-8 rounded-2xl border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Selected provider
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={provider.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {provider.name}, {provider.credentials}
                    </p>
                    <p className="text-sm text-muted-foreground">{provider.role}</p>
                  </div>
                </div>
              </div>
            )}
          </aside>

          <div className="p-6 lg:p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Choose a provider
                </h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {PROVIDERS.map((item) => {
                    const active = item.slug === selectedProvider;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => setSelectedProvider(item.slug)}
                        className={`rounded-2xl border px-4 py-3 text-left transition-all ${
                          active
                            ? "border-secondary bg-secondary/10 shadow-sm"
                            : "border-border bg-card hover:border-secondary/40 hover:bg-muted/40"
                        }`}
                      >
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.credentials}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Pick a date
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {upcomingDates.map((date) => {
                    const key = formatDateKey(date);
                    const active = key === selectedDate;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedDate(key);
                          setSelectedTime(null);
                        }}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                          active
                            ? "border-secondary bg-secondary text-secondary-foreground"
                            : "border-border bg-card text-foreground hover:border-secondary/40"
                        }`}
                      >
                        {formatDateLabel(date)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Pick a time
                </h2>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {TIME_SLOTS.map((slot) => {
                    const active = slot === selectedTime;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                          active
                            ? "border-secondary bg-secondary/10 text-secondary"
                            : "border-border bg-card text-foreground hover:border-secondary/40"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  Your details
                </h2>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-muted-foreground">Name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none ring-secondary/30 focus:ring-2"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="mb-1.5 block text-muted-foreground">Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none ring-secondary/30 focus:ring-2"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </label>
                  <label className="block text-sm sm:col-span-2">
                    <span className="mb-1.5 block text-muted-foreground">
                      Company (optional)
                    </span>
                    <input
                      type="text"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none ring-secondary/30 focus:ring-2"
                      placeholder="Your business name"
                      autoComplete="organization"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Prefer to talk now?{" "}
                  <a
                    href="tel:+13179566288"
                    className="inline-flex items-center gap-1 font-medium text-secondary hover:underline"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    (317) 956-6288
                  </a>
                </p>
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={!selectedTime || !name.trim() || !email.trim()}
                  className="interactive-element rounded-full bg-secondary px-8 py-3 font-semibold text-secondary-foreground shadow-md transition-all hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Confirm demo booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
