"use client";

import * as React from "react";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { DpcQuizModal } from "./DpcQuizModal";

interface QuizOpenOptions {
  initialAudience?: QuizAudience;
}

interface DpcQuizContextValue {
  openQuiz: (options?: QuizOpenOptions) => void;
  closeQuiz: () => void;
  isOpen: boolean;
}

const DpcQuizContext = React.createContext<DpcQuizContextValue | null>(null);

export function useDpcQuiz() {
  const ctx = React.useContext(DpcQuizContext);
  if (!ctx) {
    throw new Error("useDpcQuiz must be used within DpcQuizProvider");
  }
  return ctx;
}

export function DpcQuizProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialAudience, setInitialAudience] = React.useState<QuizAudience | undefined>();

  const openQuiz = React.useCallback((options?: QuizOpenOptions) => {
    setInitialAudience(options?.initialAudience);
    setIsOpen(true);
  }, []);

  const closeQuiz = React.useCallback(() => {
    setIsOpen(false);
    setInitialAudience(undefined);
  }, []);

  return (
    <DpcQuizContext.Provider value={{ openQuiz, closeQuiz, isOpen }}>
      {children}
      <DpcQuizModal
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) closeQuiz();
          else setIsOpen(true);
        }}
        initialAudience={initialAudience}
      />
    </DpcQuizContext.Provider>
  );
}
