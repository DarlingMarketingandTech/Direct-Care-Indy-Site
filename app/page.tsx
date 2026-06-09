import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";
import { SITE_ASSETS } from "@/lib/images";
import { homeMetadata } from "@/lib/metadata";
import {
  MEMBERSHIP_PLANS,
  MEMBERSHIP_PLANS_INTRO,
} from "@/lib/content/membership-pricing";
import { getLeadPAs, getMedicalDirector } from "@/lib/data/providers";

export const metadata: Metadata = homeMetadata;

// TODO: Swap to /individuals when the dedicated audience page ships.
const individualsRoute = "/membership";
// TODO: Swap to /families when the dedicated audience page ships.
const familiesRoute = "/membership";

const audienceCards: Array<{
  title: string;
  headline: string;
  pain: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  icon: typeof HeartPulse;
}> = [
  {
    title: "Individuals",
    headline: "Everyday care without the insurance runaround",
    pain: "Better appointment access, clearer cost expectations, less urgent care dependence, and a more practical next step when high-deductible frustration keeps piling up.",
    primaryHref: individualsRoute,
    primaryLabel: "Explore Individual Membership",
    secondaryHref: "/contact?source=homepage&intent=individual-pricing-guide",
    secondaryLabel: "Get the Pricing Guide",
    icon: HeartPulse,
  },
  {
    title: "Families",
    headline: "Care access for busy households",
    pain: "Get a clearer family care path for sick kids, urgent care detours, pricing questions, and the peace of mind busy households usually have to chase down.",
    primaryHref: familiesRoute,
    primaryLabel: "Explore Family Membership",
    secondaryHref: "/contact?source=homepage&intent=family-care-roadmap",
    secondaryLabel: "Get the Family Care Roadmap",
    icon: Users,
  },
  {
    title: "Employers",
    headline: "A practical healthcare access benefit for your team",
    pain: "Support retention, reduce missed-work friction, and give employees a more usable first stop for everyday care alongside major medical coverage.",
    primaryHref: "/employers",
    primaryLabel: "Explore Employer Options",
    secondaryHref: "/contact?source=homepage&intent=employer-overview",
    secondaryLabel: "Get the Employer Overview",
    icon: Building2,
  },
  {
    title: "Brokers",
    headline: "Resources for benefits advisors",
    pain: "Bring clients a clearer local care access option for renewal pressure, alternative funding conversations, and plan differentiation.",
    primaryHref: "/brokers",
    primaryLabel: "Visit Broker Resources",
    secondaryHref: "/contact?source=homepage&intent=broker-toolkit",
    secondaryLabel: "Get the Broker Toolkit",
    icon: BriefcaseBusiness,
  },
  {
    title: "New to DPC",
    headline: "Still learning how DPC works?",
    pain: "Start here if you are sorting through insurance questions, wondering what DPC does, or deciding whether this care model belongs in your next step.",
    primaryHref: "/what-is-dpc",
    primaryLabel: "Learn the Basics",
    secondaryHref: "/quiz",
    secondaryLabel: "Use the 60-second guide",
    icon: Compass,
  },
];

const medicalDirector = getMedicalDirector();
const leadProviders = getLeadPAs().slice(0, 2);
const providerHighlights = [medicalDirector, ...leadProviders].filter(
  (provider): provider is NonNullable<typeof provider> => Boolean(provider)
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-18 pt-24 text-primary-foreground lg:pb-24 lg:pt-30">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.healthcareChart}
            alt="Direct Care Indy team supporting a patient visit"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/94 via-teal-950/86 to-primary/96" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_38%)]" />
        </div>

        <div className="content-container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <Compass className="h-4 w-4" aria-hidden />
              Local, relationship-based primary care guidance
            </div>

            <h1 className="heading-1-inverse mt-6 text-glow sm:text-5xl lg:text-6xl">
              Direct Primary Care, built around how you actually need care
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-3xl font-medium text-white/90">
              Start with the care path that fits your situation. Direct Care Indy helps
              individuals, families, employers, and benefits advisors choose a clearer next step
              without forcing every visitor through the same starting point.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#care-paths"
                className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-lg transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Explore Your Care Options
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/membership"
                className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                View Membership Plans
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/85">
              Not sure where to start?{" "}
              <Link
                href="/quiz"
                className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white"
              >
                Use the 60-second guide
              </Link>
            </p>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                "Audience-first care paths",
                "Transparent membership plan preview",
                "Local clinic and employer options",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-white/90 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-white/60 bg-white/85 p-4 text-left shadow-sm backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  One Indianapolis clinic
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Visit our Michigan Rd clinic, meet the DirectCare Indy care team, or start with
                  the route that fits your situation best.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline sm:mt-0"
              >
                See Location &amp; Contact
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <SectionHeading
              eyebrow="Choose your route"
              title="Start with the care path that fits your situation"
            >
              <p>
                Choose the audience path that matches what you need right now. The quiz is still
                available if you want help later, but the homepage now starts with clearer direct
                routes.
              </p>
            </SectionHeading>

            <div id="care-paths" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {audienceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="section-card flex h-full flex-col border-secondary/10 bg-linear-to-b from-white to-muted/20"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-foreground">{card.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      <span className="block font-semibold text-foreground">{card.headline}</span>
                      <span className="mt-2 block">{card.pain}</span>
                    </p>
                    <div className="mt-6 space-y-3">
                      <Link
                        href={card.primaryHref}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
                      >
                        {card.primaryLabel}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={card.secondaryHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                      >
                        {card.secondaryLabel}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-muted/35">
        <div className="content-container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="Quick preview" title="What is Direct Primary Care?">
                <p>
                  Direct Primary Care is a membership model for everyday primary care. Instead of
                  starting with co-pays, referral friction, and unclear bills, members get a more
                  direct relationship with their care team for routine needs.
                </p>
                <p>
                  It is not health insurance. Think of it as a clear first stop for common health
                  questions, sick visits, follow-up care, and ongoing support.
                </p>
              </SectionHeading>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/what-is-dpc"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
                >
                  Learn the Basics
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Visit Our Michigan Rd Clinic
                  <MapPin className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="section-card border-primary/10 bg-white/95">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                A better first step
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "Clear monthly structure for everyday care",
                  "Longer, more personal primary care visits",
                  "Direct communication with your care team",
                  "A practical wayfinding layer before bigger-system confusion kicks in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container">
          <SectionHeading
            eyebrow="Membership preview"
            title="Current membership paths at a glance"
          >
            <p>
              If you already know you want to compare plan options, here is the short version. The
              full membership page has the deeper detail.
            </p>
            <p>{MEMBERSHIP_PLANS_INTRO}</p>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
            {MEMBERSHIP_PLANS.map((plan) => {
              const isFeatured = "featured" in plan && Boolean(plan.featured);

              return (
                <article
                  key={plan.id}
                  className={`section-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isFeatured ? "border-secondary/30 ring-2 ring-secondary/15" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
                      <Stethoscope className="h-6 w-6" aria-hidden />
                    </div>
                    {isFeatured && (
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary">
                        Popular household route
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-foreground">{plan.name}</h2>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                    {plan.audienceLabel}
                  </p>
                  <p className="mt-4 text-3xl font-black text-secondary">
                    {plan.monthlyPrice}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.priceNote}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  {"medicareNote" in plan && plan.medicareNote && (
                    <p className="mt-3 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
                      {plan.medicareNote}
                    </p>
                  )}

                  <p className="mt-6 text-sm font-semibold text-foreground">Preview includes</p>
                  <ul className="mt-3 flex-1 space-y-2">
                    {plan.benefits.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View Membership Plans
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-muted/40">
        <div className="content-container">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="section-card overflow-hidden border-primary/10 p-0">
              <div className="relative min-h-[280px]">
                <Image
                  src={SITE_ASSETS.employers.hero}
                  alt="Small business team reviewing employer healthcare options"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/85 via-primary/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    Employer preview
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    A practical path for teams that need care to be easier to use
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="For employers" title="Evaluating DPC for your team?">
                <p>
                  The employer path is for business owners and leaders who want a more usable first
                  step for everyday care without turning the homepage into a full benefits manual.
                </p>
                <p>
                  Use the employer route if you already know you need the business overview, or
                  reach out for a practical next-step conversation for your team.
                </p>
              </SectionHeading>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/employers"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Explore Employer Options
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact?source=homepage&intent=employer-overview"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
                >
                  Get the Employer Overview
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/brokers"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-secondary hover:underline"
                >
                  Brokers: resources and next steps
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container">
          <SectionHeading eyebrow="Provider trust" title="Led by experienced local clinicians">
            <p>
              Direct Care Indy pairs relationship-based everyday care with experienced provider
              leadership, so the next step feels human and clinically grounded.
            </p>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-card border-secondary/10 bg-linear-to-br from-secondary/5 to-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                  <ShieldCheck className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {medicalDirector?.name ?? "Clinical leadership you can trust"}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-secondary">
                    {medicalDirector?.credentials}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {medicalDirector?.bio ??
                      "Experienced clinical leadership helps keep the member experience personal, practical, and grounded in real medical judgment."}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {providerHighlights.map((provider) => (
                <article
                  key={provider.slug}
                  className="section-card flex items-start gap-4 border-border/80"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{provider.name}</h3>
                    <p className="text-sm text-secondary">
                      {provider.credentials} | {provider.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {provider.highlights[0]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
            >
              Meet the DirectCare Indy care team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm pt-0">
        <div className="content-container max-w-5xl">
          <DpcQuizCtaBand
            headline="Not sure which path fits?"
            body="Answer a few quick questions and we will point you toward the most relevant next step."
            variant="primary"
          />
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </div>
  );
}
