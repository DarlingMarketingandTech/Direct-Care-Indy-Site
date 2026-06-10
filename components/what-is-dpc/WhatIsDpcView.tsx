import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bandage,
  CalendarCheck,
  CheckCircle2,
  HeartPulse,
  HelpCircle,
  MessageCircle,
  Phone,
  Pill,
  Receipt,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Video,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComplianceNote } from "@/components/ComplianceNote";
import { ScrollTransition } from "@/components/ScrollTransition";
import { WhatIsDpcFaq } from "@/components/what-is-dpc/WhatIsDpcFaq";
import { WhatIsDpcSectionNav } from "@/components/what-is-dpc/WhatIsDpcSectionNav";
import { DPC_FAQ_INTRO } from "@/lib/content/what-is-dpc-faq";
import {
  WHAT_IS_DPC_BENEFIT_SECTIONS,
  WHAT_IS_DPC_CLOSING_CTA,
  WHAT_IS_DPC_HERO,
  type WhatIsDpcBenefitSection,
  type WhatIsDpcBenefitSectionId,
} from "@/lib/content/what-is-dpc-benefits";
import { SITE_ASSETS } from "@/lib/images";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";
import { WHAT_IS_DPC_PRICING_HIGHLIGHTS } from "@/lib/content/membership-pricing";

const HERO_PILLS = [
  "Predictable monthly pricing",
  "Everyday care without co-pays",
  "Direct access to your care team",
] as const;

const OVERVIEW_CARDS = [
  {
    icon: Wallet,
    title: "Predictable pricing",
    description: "One monthly fee for included primary care — no co-pays on covered visits.",
    href: "#affordable-plans",
  },
  {
    icon: Stethoscope,
    title: "Everyday care covered",
    description: "Sick visits, follow-ups, chronic support, and wellness — your first stop for health.",
    href: "#comprehensive-care",
  },
  {
    icon: MessageCircle,
    title: "Direct access",
    description: "Call, text, or use the secure portal between visits when questions come up.",
    href: "#communication",
  },
] as const;

const PRICING_HIGHLIGHTS = WHAT_IS_DPC_PRICING_HIGHLIGHTS;

const SECTION_ICONS: Record<WhatIsDpcBenefitSectionId, LucideIcon> = {
  "affordable-plans": Wallet,
  "comprehensive-care": Stethoscope,
  "wellness-exam": HeartPulse,
  "follow-up-visits": CalendarCheck,
  "urgent-care": Bandage,
  telehealth: Video,
  pharmacy: Pill,
  "preventive-care": ShieldCheck,
  "transparent-pricing": Receipt,
  communication: MessageCircle,
};

function SectionEyebrow({
  index,
  icon: Icon,
}: {
  index: number;
  icon: LucideIcon;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-xs font-bold uppercase tracking-widest text-secondary">
        Benefit {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function BulletGrid({ items, title }: { items: readonly string[]; title?: string }) {
  return (
    <div className="section-card">
      {title && (
        <p className="mb-5 text-sm font-semibold text-foreground">{title}</p>
      )}
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InsightCard({
  title,
  paragraphs,
  variant = "muted",
}: {
  title: string;
  paragraphs: readonly string[];
  variant?: "muted" | "accent";
}) {
  return (
    <div
      className={
        variant === "accent"
          ? "rounded-3xl border border-secondary/25 bg-secondary/5 p-6 md:p-8"
          : "rounded-3xl border border-border bg-muted/30 p-6 md:p-8"
      }
    >
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function PricingStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {PRICING_HIGHLIGHTS.map((tier) => (
        <div
          key={tier.label}
          className="rounded-2xl border border-secondary/20 bg-secondary/5 px-5 py-4 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {tier.label}
          </p>
          <p className="mt-2 text-2xl font-bold text-secondary">
            {tier.price}
            <span className="text-sm font-normal text-muted-foreground">{tier.note}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

function BenefitSection({
  section,
  index,
  muted,
}: {
  section: WhatIsDpcBenefitSection;
  index: number;
  muted: boolean;
}) {
  const Icon = SECTION_ICONS[section.id];
  const [lead, ...supporting] = section.paragraphs;
  const isNinetyTen = section.id === "comprehensive-care";

  return (
    <section
      id={section.id}
      className={`section-padding scroll-mt-28 ${muted ? "bg-muted/40" : ""}`}
    >
      <div className="content-container">
        <ScrollTransition id={`what-is-dpc-${section.id}`}>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Narrative column */}
            <div className="lg:col-span-5">
              <SectionEyebrow index={index} icon={Icon} />
              <h2 className="heading-2 text-foreground">{section.title}</h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
                {lead}
              </p>
              {supporting.length > 0 && (
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {supporting.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.id === "affordable-plans" && (
                <div className="mt-8">
                  <PricingStrip />
                </div>
              )}

              {section.cta && (
                <div className="mt-8">
                  <Link
                    href={section.cta.href}
                    className="interactive-element inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
                  >
                    {section.cta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              )}
            </div>

            {/* Detail column */}
            <div className="space-y-6 lg:col-span-7">
              {section.bullets && section.bullets.length > 0 && (
                <BulletGrid items={section.bullets} title={section.bulletsTitle} />
              )}

              {section.whyItMatters && (
                <InsightCard
                  title={section.whyItMatters.title}
                  paragraphs={section.whyItMatters.paragraphs}
                  variant="muted"
                />
              )}

              {section.callout && (
                <InsightCard
                  title={section.callout.title}
                  paragraphs={section.callout.paragraphs}
                  variant={isNinetyTen ? "accent" : "muted"}
                />
              )}

              {isNinetyTen && section.callout && (
                <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Insurance stays your safety net for hospital care, surgery, specialists, and
                    major medical events.
                  </p>
                </div>
              )}

              {section.goodFitFor && section.goodFitFor.length > 0 && (
                <BulletGrid
                  items={section.goodFitFor}
                  title={section.goodFitTitle ?? "Good fit for"}
                />
              )}

              {section.footnote && (
                <p className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-100">
                  {section.footnote}
                </p>
              )}
            </div>
          </div>
        </ScrollTransition>
      </div>
    </section>
  );
}

export function WhatIsDpcView() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pb-16 pt-24 text-primary-foreground lg:pb-20 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.roundTable}
            alt="Patient and provider discussing care in a comfortable setting"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/92 via-teal-900/80 to-primary/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        </div>

        <div className="content-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4" aria-hidden />
              {WHAT_IS_DPC_HERO.eyebrow}
            </div>

            <h1 className="heading-1-inverse text-glow sm:text-5xl lg:text-6xl">
              {WHAT_IS_DPC_HERO.title}
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-2xl">
              {WHAT_IS_DPC_HERO.subtitle}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
              {WHAT_IS_DPC_HERO.intro}
            </p>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm">
              {HERO_PILLS.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-white/90 backdrop-blur-sm"
                >
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/membership"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-slate-50 sm:text-lg"
              >
                View Membership Plans
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <a
                href="#overview"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 sm:text-lg"
              >
                Explore benefits
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatIsDpcSectionNav />

      {/* At-a-glance overview */}
      <section id="overview" className="section-padding-sm scroll-mt-28 border-b border-border">
        <div className="content-container">
          <ScrollTransition id="what-is-dpc-overview">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                At a glance
              </p>
              <h2 className="heading-3 mt-2 text-foreground">
                {WHAT_IS_DPC_HERO.tagline}
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
              {OVERVIEW_CARDS.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group section-card flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary/15">
                    <card.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </ScrollTransition>
        </div>
      </section>

      {WHAT_IS_DPC_BENEFIT_SECTIONS.map((section, index) => (
        <div key={section.id}>
          <BenefitSection
            section={section}
            index={index}
            muted={index % 2 === 1}
          />
        </div>
      ))}

      {/* FAQ */}
      <section id="faq" className="section-padding scroll-mt-28 bg-muted/40">
        <div className="content-container">
          <ScrollTransition id="what-is-dpc-faq">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
                <HelpCircle className="h-4 w-4" aria-hidden />
                Frequently Asked Questions
              </div>
              <h2 className="heading-2 text-foreground">Common questions about DirectCare Indy</h2>
              <p className="mt-4 text-muted-foreground">{DPC_FAQ_INTRO}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Still have questions? Call or text{" "}
                <a href="tel:+13179566288" className="font-semibold text-secondary hover:underline">
                  317-956-6288
                </a>
                .
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl">
              <WhatIsDpcFaq />
            </div>

            <div className="mx-auto mt-10 max-w-3xl text-left">
              <DpcQuizCtaBand
                headline="Ready for a clearer next step?"
                body="Ready for a clearer next step? Take the DPC fit quiz."
              />
            </div>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <ComplianceNote />
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container-narrow text-center">
          <h2 className="heading-2-inverse">{WHAT_IS_DPC_CLOSING_CTA.title}</h2>
          <p className="body-large-inverse mx-auto mt-4 max-w-2xl">
            {WHAT_IS_DPC_CLOSING_CTA.paragraphs[0]}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85">
            {WHAT_IS_DPC_CLOSING_CTA.paragraphs[WHAT_IS_DPC_CLOSING_CTA.paragraphs.length - 1]}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/membership"
              className="interactive-element inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              View Membership Plans
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="tel:+13179566288"
              className="interactive-element inline-flex items-center gap-2 rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call or Text 317-956-6288
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
