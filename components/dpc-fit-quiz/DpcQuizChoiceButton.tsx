"use client";

import { ChevronRight } from "lucide-react";

interface DpcQuizChoiceButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
}

export function DpcQuizChoiceButton({
  label,
  onClick,
  selected = false,
}: DpcQuizChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:text-base ${
        selected
          ? "border-secondary bg-secondary/10 text-foreground shadow-sm"
          : "border-border bg-card text-foreground hover:border-secondary/40 hover:bg-secondary/5"
      }`}
    >
      <span>{label}</span>
      <ChevronRight
        className={`h-4 w-4 shrink-0 transition-transform ${
          selected ? "text-secondary" : "text-muted-foreground group-hover:translate-x-0.5"
        }`}
        aria-hidden
      />
    </button>
  );
}
