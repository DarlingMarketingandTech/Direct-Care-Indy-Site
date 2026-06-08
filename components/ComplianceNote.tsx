import type { ReactNode } from "react";

export function ComplianceNote({ children }: { children?: ReactNode }) {
  return (
    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
      Estimates are for education only. Pricing, eligibility, availability, and savings may vary. {children}
    </p>
  );
}
