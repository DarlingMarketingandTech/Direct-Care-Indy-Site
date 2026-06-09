"use client";

import * as React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { useDpcQuiz } from "./DpcQuizProvider";

export type DpcQuizTriggerVariant = "primary" | "secondary" | "compact" | "band";

interface DpcQuizTriggerProps {
  /** Primary label — default "Is DPC Right for You?" */
  label?: string;
  /** Shorter label for tight spaces */
  shortLabel?: string;
  sublabel?: string;
  variant?: DpcQuizTriggerVariant;
  initialAudience?: QuizAudience;
  className?: string;
  /** Use link to /quiz instead of modal */
  mode?: "modal" | "link";
  ariaLabel?: string;
}

const variantStyles: Record<DpcQuizTriggerVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:px-7 sm:py-4 sm:text-base",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  compact:
    "inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-md hover:bg-secondary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2",
  band:
    "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-md hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
};

export function DpcQuizTrigger({
  label = "Is DPC Right for You?",
  shortLabel,
  sublabel,
  variant = "primary",
  initialAudience,
  className = "",
  mode = "modal",
  ariaLabel = "Take the Direct Primary Care fit quiz",
}: DpcQuizTriggerProps) {
  const { openQuiz } = useDpcQuiz();
  const displayLabel = variant === "compact" && shortLabel ? shortLabel : label;
  const styles = `${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <Compass className="h-4 w-4 shrink-0" aria-hidden />
      <span className="flex flex-col items-start text-left leading-tight">
        <span>{displayLabel}</span>
        {sublabel && variant !== "compact" && (
          <span className="text-xs font-normal opacity-90">{sublabel}</span>
        )}
      </span>
    </>
  );

  if (mode === "link") {
    const href = initialAudience ? `/quiz?audience=${initialAudience}` : "/quiz";
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openQuiz({ initialAudience })}
      className={styles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
