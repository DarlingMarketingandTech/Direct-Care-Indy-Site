import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { homeMetadata } from "@/lib/metadata";

export const metadata: Metadata = homeMetadata;
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { DpcQuizCtaBand, DpcQuizTrigger } from "@/components/dpc-fit-quiz";
import type { QuizAudience } from "@/lib/dpc-fit-quiz";
import { SITE_ASSETS } from "@/lib/images";
import {
  MEMBERSHIP_PLANS,
  MEMBERSHIP_PLANS_INTRO,
} from "@/lib/content/membership-pricing";
import { getLeadPAs, getMedicalDirector } from "@/lib/data/providers";

const audienceCards: Array<{
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  initialAudience: QuizAudience;
  icon: typeof HeartPulse;
}> = [
  {
    title: "Individuals",
    description:
      "If you want a simpler first stop for everyday care, start here and let the quiz guide you.",
    href: "/membership",
    linkLabel: "Explore individual membership",
    initialAudience: "individual",
    icon: HeartPulse,
  },
  {
    title: "Families",
    description:
      "If your household needs a clearer care path when someone gets sick, this route starts with family fit.",
    href: "/membership",
    linkLabel: "See family plan context",
    initialAudience: "family",
    icon: Users,
  },
  {
    title: "Employers",
    description:
      "If you are evaluating DPC as a practical employee benefit, start with the employer path.",
    href: "/employers",
    linkLabel: "See employer overview",
    initialAudience: "employer",
    icon: Building2,
  },
  {
    title: "Brokers",
    description:
      "If you advise employer clients, use the broker path for a tailored next step and supporting resources.",
    href: "/brokers",
    linkLabel: "Visit broker resources",
    initialAudience: "broker",
    icon: BriefcaseBusiness,
  },
  {
    title: "Unsure / education",
    description:
      "If you are still figuring out what DPC is, start with the education route and get a guided recommendation.",
    href: "/what-is-dpc",
    linkLabel: "Read the DPC basics",
    initialAudience: "unsure",
    icon: BookOpen,
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
              Warm, relationship-based primary care guidance
            </div>

            <h1 className="heading-1-inverse mt-6 text-glow sm:text-5xl lg:text-6xl">
              Direct Primary Care, without the guesswork about where to start
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-3xl font-medium text-white/90">
              Direct Care Indy helps individuals, families, employers, and advisors find the right
              next step for everyday care. Start with the quiz, then move into the route that fits
              you best.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DpcQuizTrigger
                label="Is DPC Right for You?"
                sublabel="Take the 60-second quiz"
                className="min-w-[260px] justify-center"
              />
              <Link
                href="/membership"
                className="inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                View Membership Plans
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
              {[
                "Quiz-first guidance",
                "Membership plans preview",
                "Employer and broker paths available",
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
            <SectionHeading
              eyebrow="Choose your route"
              title="Start in the lane that matches why you are here"
            >
              <p>
                Each path opens the quiz with the right context, so you can get a more useful next
                step without digging through a giant brochure pile.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
                      {card.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      <DpcQuizTrigger
                        label="Is DPC Right for You?"
                        shortLabel="Start this path"
                        sublabel="Take the 60-second quiz"
                        variant="secondary"
                        initialAudience={card.initialAudience}
                        className="w-full justify-center"
                      />
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                      >
                        {card.linkLabel}
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
                  Learn how DPC works
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <DpcQuizTrigger
                  label="Is DPC Right for You?"
                  shortLabel="Take the quiz"
                  sublabel="Take the 60-second quiz"
                  variant="secondary"
                  initialAudience="unsure"
                />
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
                  <p
                    className="mt-4 text-3xl font-black text-secondary"
                  >
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
                  Start with the employer quiz if you want guidance. Jump to the employer page if
                  you already know you need the business overview.
                </p>
              </SectionHeading>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <DpcQuizTrigger
                  label="Is DPC Right for You?"
                  shortLabel="Start employer quiz"
                  sublabel="Take the 60-second quiz"
                  initialAudience="employer"
                  className="justify-center"
                />
                <Link
                  href="/employers"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  View Employer Overview
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
              Meet the care team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm pt-0">
        <div className="content-container max-w-5xl">
          <DpcQuizCtaBand
            headline="Still deciding where to begin?"
            body="Take the 60-second quiz and we will point you toward the right next step for individual care, family care, employer planning, broker conversations, or basic DPC education."
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
