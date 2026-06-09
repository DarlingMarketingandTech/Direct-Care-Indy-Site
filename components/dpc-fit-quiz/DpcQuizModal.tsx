"use client";

import * as React from "react";
import { X } from "lucide-react";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { QUIZ_MEDICAL_DISCLAIMER } from "@/lib/dpc-fit-quiz";
import { DpcFitQuiz } from "./DpcFitQuiz";

interface DpcQuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialAudience?: QuizAudience;
}

export function DpcQuizModal({ open, onOpenChange, initialAudience }: DpcQuizModalProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [quizKey, setQuizKey] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      setQuizKey((k) => k + 1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    if (open && contentRef.current) {
      const focusable = contentRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusable?.focus();
    }
  }, [open, quizKey]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dpc-quiz-modal-title"
        className="relative z-[61] flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:mx-4 sm:max-h-[85vh] sm:max-w-lg sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <h2 id="dpc-quiz-modal-title" className="text-lg font-bold text-foreground">
              Is Direct Primary Care right for you?
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{QUIZ_MEDICAL_DISCLAIMER}</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label="Close quiz"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <DpcFitQuiz key={quizKey} initialAudience={initialAudience} />
        </div>
      </div>
    </div>
  );
}
