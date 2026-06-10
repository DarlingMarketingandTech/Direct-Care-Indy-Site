import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LeadMagnetCard } from "@/components/LeadMagnetCard";
import { SITE_ASSETS } from "@/lib/images";
import { brokersMetadata } from "@/lib/metadata";
import { AudienceResourceForm } from "@/components/audience/AudienceResourceForm";
import { AUDIENCE_RESOURCE_CONFIGS } from "@/lib/content/audience-resources";
import { getDpcQuizScheduleLink } from "@/lib/dpc-fit-quiz";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";

export const metadata: Metadata = brokersMetadata;

const brokerResources = [
  {
    title: "One-Page Employer Summary",
    description:
      "A concise overview you can share with HR leaders and business owners evaluating DPC as an employee benefit.",
    href: SITE_ASSETS.employers.summaryPdf,
    preview: SITE_ASSETS.employers.summaryPreview,
    cta: "Download PDF",
    sourceLabel: "broker_employer_summary",
  },
  {
    title: "Employer DPC Buyer Checklist",
    description:
      "A practical checklist for comparing DPC options, integration with existing benefits, and rollout questions.",
    href: SITE_ASSETS.employers.checklistPdf,
    preview: SITE_ASSETS.employers.checklistPreview,
    cta: "Download PDF",
    sourceLabel: "broker_buyer_checklist",
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
          DPC as a local primary care layer
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Help clients reduce primary care friction by pairing Direct Care Indy with HDHP,
          level-funded, or self-funded health plans. DPC is designed to complement major medical
          coverage — not replace insurance.
        </p>

        <section id="broker-toolkit" className="mt-10">
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
                  sourceLabel={resource.sourceLabel}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 max-w-5xl">
          <AudienceResourceForm
            config={AUDIENCE_RESOURCE_CONFIGS.brokers}
            source="brokers_page"
            sourcePage="/brokers"
          />
        </div>

        <div className="mt-12">
          <DpcQuizCtaBand
            headline="Not sure where to start?"
            body="Take the broker quiz for a personalized next step — broker path preselected."
            initialAudience="broker"
            variant="muted"
          />
        </div>

        <section className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Why DPC in a benefits package?
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Flat monthly fee — predictable for employers and members</li>
              <li>May improve same-day access and reduce friction for everyday care</li>
              <li>Fits HDHP, level-funded, self-funded, and traditional group designs</li>
              <li>Works alongside major medical, Medicare, or self-funded plans</li>
              <li>Discounted in-clinic lab and pharmacy pricing when available</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Partner with us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Need employer pricing, implementation details, or a client-specific walkthrough? We
              will respond within one business day.
            </p>
            <Link
              href={getDpcQuizScheduleLink("broker")}
              className="mt-5 inline-flex rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground"
            >
              Request broker conversation
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
