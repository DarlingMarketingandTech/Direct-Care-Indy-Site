import type { Metadata } from "next";
import { Suspense } from "react";
import { QuizPageClient } from "./QuizPageClient";

export const metadata: Metadata = {
  title: "Is Direct Primary Care Right for You? | DirectCare Indy",
  description:
    "Take the DirectCare Indy quiz to see whether Direct Primary Care may be a fit for you, your family, your employees, or your clients.",
};

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background pt-24 pb-16">
          <div className="content-container section-padding text-center text-muted-foreground">
            Loading quiz…
          </div>
        </main>
      }
    >
      <QuizPageClient />
    </Suspense>
  );
}
