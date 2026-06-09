"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Users } from "lucide-react";

type CountKey = "youngAdults" | "adults" | "seniors" | "children";

const RATES = {
  youngAdults: 69,
  adults: 89,
  seniors: 109,
  children: 39,
};

const HOUSEHOLD_CAP = 250;

const FIELD_COPY: Record<CountKey, { label: string; helper: string; rate: number }> = {
  youngAdults: {
    label: "Adults 19-44",
    helper: "Young professionals and parents",
    rate: RATES.youngAdults,
  },
  adults: {
    label: "Adults 45-64",
    helper: "Most common membership",
    rate: RATES.adults,
  },
  seniors: {
    label: "Seniors 65+",
    helper: "Includes Medicare coordination",
    rate: RATES.seniors,
  },
  children: {
    label: "Children 0-18",
    helper: "Well-child visits and immunizations",
    rate: RATES.children,
  },
};

export function PricingCalculator() {
  const [counts, setCounts] = useState<Record<CountKey, number>>({
    youngAdults: 1,
    adults: 0,
    seniors: 0,
    children: 0,
  });

  const { subtotal, total, capped, householdSize } = useMemo(() => {
    const subtotalCalc = (Object.keys(RATES) as CountKey[]).reduce((acc, key) => {
      return acc + counts[key] * RATES[key];
    }, 0);

    const size = (Object.keys(counts) as CountKey[]).reduce((acc, key) => acc + counts[key], 0);
    const cappedTotal = Math.min(subtotalCalc, HOUSEHOLD_CAP);

    return {
      subtotal: subtotalCalc,
      total: cappedTotal,
      capped: subtotalCalc > HOUSEHOLD_CAP,
      householdSize: size || 1,
    };
  }, [counts]);

  const updateCount = (key: CountKey, value: number) => {
    setCounts((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(12, value || 0)),
    }));
  };

  const perMember = total / householdSize;
  const capSavings = Math.max(0, subtotal - total);

  return (
    <section id="pricing-calculator" className="section-card">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2 flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Real-time pricing
            </p>
            <h2 className="heading-3 mb-2">Membership Pricing Calculator</h2>
            <p className="text-muted-foreground max-w-2xl">
              Enter your household and see your exact monthly total. No quotes, no hidden fees.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-muted text-muted-foreground px-4 py-2 rounded-full border border-border">
            <ShieldCheck className="h-5 w-5 text-secondary" />
            <span className="font-semibold">Household cap: ${HOUSEHOLD_CAP}/mo</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {(Object.keys(FIELD_COPY) as CountKey[]).map((key) => (
              <div key={key} className="rounded-2xl border border-border bg-white/70 dark:bg-card/80 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <label htmlFor={key} className="font-semibold text-foreground">
                      {FIELD_COPY[key].label}
                    </label>
                    <p className="text-sm text-muted-foreground">{FIELD_COPY[key].helper}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Per member</p>
                    <p className="text-xl font-bold text-secondary">${FIELD_COPY[key].rate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    id={key}
                    name={key}
                    type="number"
                    min={0}
                    max={12}
                    value={counts[key]}
                    onChange={(e) => updateCount(key, parseInt(e.target.value, 10))}
                    className="w-24 rounded-xl border border-border bg-muted px-3 py-2 text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                    aria-describedby={`${key}-helper`}
                  />
                  <span id={`${key}-helper`} className="text-sm text-muted-foreground">
                    {counts[key] * FIELD_COPY[key].rate > 0 ? (
                      <>
                        ${FIELD_COPY[key].rate} x {counts[key]} ={" "}
                        <span className="font-semibold text-foreground">
                          ${(counts[key] * FIELD_COPY[key].rate).toFixed(0)}/mo
                        </span>
                      </>
                    ) : (
                      "Add members to see totals"
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-secondary text-secondary-foreground p-6 shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase font-semibold opacity-80">Your total</p>
                <div className="text-5xl font-black leading-tight" aria-live="polite">
                  ${total.toFixed(0)}
                  <span className="text-lg font-semibold opacity-80">/mo</span>
                </div>
                <p className="text-sm opacity-90 mt-1">
                  {householdSize} member{householdSize !== 1 ? "s" : ""} | ${perMember.toFixed(0)}/member
                </p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/15 px-3 py-2 rounded-full text-sm font-semibold">
                <Users className="h-4 w-4" />
                Transparent household pricing
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-4 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Calculated subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(0)}/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Household cap</span>
                <span className="font-semibold">${HOUSEHOLD_CAP}/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Applied total</span>
                <span className="font-semibold">${total.toFixed(0)}/mo</span>
              </div>
              {capped && (
                <p className="text-xs font-semibold text-emerald-100">
                  Household cap engaged: you save ${capSavings.toFixed(0)}/mo compared to per-member rates.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-4 py-3 rounded-xl font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Join with Hint
              </Link>
              <a
                href="https://directcareindy.hint.com/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/60 px-4 py-3 rounded-xl font-semibold hover:bg-white/10"
              >
                Patient Portal
              </a>
              <Link
                href="/what-is-dpc#faq"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                See what is included
              </Link>
            </div>
            <p className="text-sm opacity-80">
              Includes unlimited sick visits, wholesale labs and pharmacy, specialist oversight, and after-hours text access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
