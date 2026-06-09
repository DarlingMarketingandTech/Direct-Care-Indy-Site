import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LeadMagnetCard } from "@/components/LeadMagnetCard";
import { SITE_ASSETS } from "@/lib/images";
import { absoluteUrl } from "@/lib/site";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";

export const metadata: Metadata = {
  title: "For Brokers | Direct Care Indy",
  description:
    "Partner with Direct Care Indy to offer clients affordable direct primary care. Download employer sales tools and learn how DPC pairs with major medical plans.",
  openGraph: {
    title: "For Brokers | Direct Care Indy",
    description:
      "Download employer summary and buyer checklist PDFs. Pair DPC with HDHP and self-funded plans for Indianapolis clients.",
    url: absoluteUrl("/brokers"),
    type: "website",
  },
};

const brokerResources = [
  {
    title: "One-Page Employer Summary",
    description:
      "A concise overview you can share with HR leaders and business owners evaluating DPC as an employee benefit.",
    href: SITE_ASSETS.employers.summaryPdf,
    preview: SITE_ASSETS.employers.summaryPreview,
    cta: "Download PDF",
  },
  {
    title: "Employer DPC Buyer Checklist",
    description:
      "A practical checklist for comparing DPC options, integration with existing benefits, and rollout questions.",
    href: SITE_ASSETS.employers.checklistPdf,
    preview: SITE_ASSETS.employers.checklistPreview,
    cta: "Download PDF",
  },
] as const;

export default function BrokersPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
          For benefits brokers
        </p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">
          Sell DPC with confidence
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Help your clients reduce primary care friction and unnecessary ER use by
          pairing Direct Care Indy with high-deductible or self-funded health plans.
          Start with the resources below.
        </p>

        <div className="mt-10">
          <DpcQuizCtaBand
            headline="See how DPC may fit your client's plan strategy"
            body="See how DPC may fit your client's plan strategy. Take the broker quiz for a personalized next step."
            initialAudience="broker"
          />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">Broker resources</h2>
          <p className="mt-2 text-muted-foreground">
            Downloadable tools for employer conversations — not insurance products.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {brokerResources.map((resource) => (
              <div key={resource.title} className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                  <Image
                    src={resource.preview}
                    alt={`Preview: ${resource.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
                <LeadMagnetCard
                  title={resource.title}
                  description={resource.description}
                  href={resource.href}
                  cta={resource.cta}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Why DPC in a benefits package?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Flat monthly fee — predictable for employers and members</li>
              <li>Same-day access reduces absenteeism and ER diversion</li>
              <li>Works alongside major medical, Medicare, or self-funded plans</li>
              <li>Wholesale lab pricing passed through to members</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Partner with us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Need employer pricing, implementation details, or a client-specific
              walkthrough? We will respond within one business day.
            </p>
            <Link
              href="mailto:info@directcareindy.com?subject=Broker%20partnership%20inquiry"
              className="mt-5 inline-flex rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground"
            >
              Contact partnerships
            </Link>
          </div>
        </section>

        <p className="mt-12 text-sm text-muted-foreground">
          Are you the employer, not the broker?{" "}
          <Link href="/employers" className="font-medium text-secondary hover:underline">
            See the For Employers page →
          </Link>
        </p>
      </div>
    </main>
  );
}
