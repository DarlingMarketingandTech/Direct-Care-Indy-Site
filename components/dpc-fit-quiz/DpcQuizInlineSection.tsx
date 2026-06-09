"use client";

import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { DpcFitQuiz } from "./DpcFitQuiz";

interface DpcQuizInlineSectionProps {
  title?: string;
  intro?: string;
  initialAudience?: QuizAudience;
  id?: string;
}

export function DpcQuizInlineSection({
  title = "Is Direct Primary Care Right for You?",
  intro = "Answer a few quick questions and get a personalized recommendation for individual membership, family care, employer partnerships, or broker conversations.",
  initialAudience,
  id = "dpc-fit-quiz",
}: DpcQuizInlineSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="heading-2 text-center text-foreground">{title}</h2>
        <p className="mt-4 text-center text-muted-foreground">{intro}</p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
          <DpcFitQuiz initialAudience={initialAudience} variant="inline" />
        </div>
      </div>
    </section>
  );
}
