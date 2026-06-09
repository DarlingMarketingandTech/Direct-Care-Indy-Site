"use client";

import { Compass } from "lucide-react";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { DpcQuizTrigger } from "./DpcQuizTrigger";

interface DpcQuizCtaBandProps {
  headline?: string;
  body?: string;
  initialAudience?: QuizAudience;
  variant?: "default" | "muted" | "primary";
}

export function DpcQuizCtaBand({
  headline = "Not sure where to start?",
  body = "Use the 60-second guide to get pointed toward the most relevant next step.",
  initialAudience,
  variant = "default",
}: DpcQuizCtaBandProps) {
  const bgClass =
    variant === "primary"
      ? "bg-primary text-primary-foreground"
      : variant === "muted"
        ? "bg-muted/50"
        : "bg-secondary/5 border border-secondary/15";

  const textClass = variant === "primary" ? "text-primary-foreground/90" : "text-muted-foreground";

  return (
    <section
      className={`rounded-2xl p-6 sm:p-8 ${bgClass}`}
      aria-labelledby="dpc-quiz-cta-band-heading"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
              variant === "primary" ? "bg-white/15 text-white" : "bg-secondary/15 text-secondary"
            }`}
          >
            <Compass className="h-6 w-6" aria-hidden />
          </span>
          <div>
            <h2
              id="dpc-quiz-cta-band-heading"
              className={`text-lg font-bold sm:text-xl ${
                variant === "primary" ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {headline}
            </h2>
            <p className={`mt-2 text-sm leading-relaxed sm:text-base ${textClass}`}>{body}</p>
          </div>
        </div>
        <div className="shrink-0">
          <DpcQuizTrigger
            label="Use the 60-second guide"
            shortLabel="Use the guide"
            variant={variant === "primary" ? "band" : "primary"}
            initialAudience={initialAudience}
          />
        </div>
      </div>
    </section>
  );
}
