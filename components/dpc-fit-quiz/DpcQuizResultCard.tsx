"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import type { QuizResultConfig } from "@/lib/dpc-fit-quiz";
import { getDpcQuizScheduleLink, QUIZ_MEDICAL_DISCLAIMER } from "@/lib/dpc-fit-quiz";
import { trackEvent } from "@/lib/analytics";

interface DpcQuizResultCardProps {
  result: QuizResultConfig;
}

export function DpcQuizResultCard({ result }: DpcQuizResultCardProps) {
  const primaryHref =
    result.id === "unsureEducation"
      ? result.primaryCta.href
      : getDpcQuizScheduleLink(result.scheduleKey);

  React.useEffect(() => {
    trackEvent("quiz_result_viewed", {
      resultType: result.id,
      recommendedCta: result.primaryCta.label,
    });
  }, [result.id, result.primaryCta.label]);

  return (
    <div
      className="space-y-5"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
          Your personalized next step
        </p>
        <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
          {result.headline}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {result.summary}
        </p>
      </div>

      <ul className="space-y-2">
        {result.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs leading-relaxed text-muted-foreground">{result.disclaimer}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{QUIZ_MEDICAL_DISCLAIMER}</p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={primaryHref}
          onClick={() =>
            trackEvent("membership_cta_clicked", {
              ctaLabel: result.primaryCta.label,
              resultType: result.id,
            })
          }
          className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          {result.primaryCta.label}
        </Link>
        <Link
          href={result.secondaryCta.href}
          className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
        >
          {result.secondaryCta.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
