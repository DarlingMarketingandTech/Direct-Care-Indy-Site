"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export function LeadMagnetCard({
  title,
  description,
  href,
  cta = "Download",
  sourceLabel = "broker_resource",
}: {
  title: string;
  description: string;
  href: string;
  cta?: string;
  sourceLabel?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm font-semibold text-secondary">Resource</p>
      <h3 className="mt-2 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <Link
        href={href}
        onClick={() =>
          trackEvent("broker_resource_clicked", {
            resourceTitle: title,
            sourceLabel,
          })
        }
        className="mt-5 inline-flex rounded-full bg-secondary px-5 py-3 font-semibold text-secondary-foreground"
      >
        {cta}
      </Link>
    </div>
  );
}
