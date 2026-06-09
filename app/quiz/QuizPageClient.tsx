"use client";

import { useSearchParams } from "next/navigation";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { DpcQuizInlineSection } from "@/components/dpc-fit-quiz";

const VALID_AUDIENCES = new Set<QuizAudience>([
  "individual",
  "family",
  "employer",
  "broker",
  "unsure",
]);

function parseAudience(value: string | null): QuizAudience | undefined {
  if (!value || !VALID_AUDIENCES.has(value as QuizAudience)) return undefined;
  return value as QuizAudience;
}

export function QuizPageClient() {
  const searchParams = useSearchParams();
  const initialAudience = parseAudience(searchParams.get("audience"));

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="content-container section-padding">
        <DpcQuizInlineSection initialAudience={initialAudience} />
      </div>
    </main>
  );
}
