import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldAlert,
  Stethoscope,
  XCircle,
} from "lucide-react";
import { AudienceResourceForm } from "@/components/audience/AudienceResourceForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_SMS,
  CONTACT_PHONE_TEL,
} from "@/lib/content/contact";
import { AUDIENCE_RESOURCE_CONFIGS } from "@/lib/content/audience-resources";
import { MEMBERSHIP_PLANS, NOT_INCLUDED } from "@/lib/content/membership-pricing";
import { getDpcQuizScheduleLink } from "@/lib/dpc-fit-quiz";
import { getLeadPAs, getMedicalDirector } from "@/lib/data/providers";
import { SITE_ASSETS } from "@/lib/images";
import { individualsMetadata } from "@/lib/metadata";

export const metadata: Metadata = individualsMetadata;

const individualScheduleHref = getDpcQuizScheduleLink("individual");
const individualPlan = MEMBERSHIP_PLANS.find((plan) => plan.id === "individual");
const supportPlanPreview = MEMBERSHIP_PLANS.filter((plan) => plan.id !== "individual");
const medicalDirector = getMedicalDirector();
const individualProviders = [medicalDirector, ...getLeadPAs().slice(0, 2)].filter(
  (provider): provider is NonNullable<typeof provider> => Boolean(provider)
);

const individualSupportHighlights = [
  "Call or text the clinic for non-emergency care questions.",
  "Same-day or next-day appointments may be available when appropriate.",
  "Telehealth may be available when appropriate.",
  "A local care team can help guide next steps when routine health questions come up.",
] as const;

const individualMembershipSteps = [
  {
    title: "Start with your everyday care questions",
    body: "We begin with what usually creates friction — access, cost surprises, and not knowing who to call when something comes up.",
  },
  {
    title: "Confirm which membership route fits",
    body: "Use the governed pricing preview as your starting point, then call or text to confirm how individual membership would work for you.",
  },
  {
    title: "Use the clinic as your practical first stop",
    body: "For everyday primary care questions, you can start with DirectCare Indy instead of defaulting to urgent care detours or phone trees.",
  },
] as const;

const includedIndividualItems = [
  "Primary care visits and follow-up support outlined in the membership plan",
  "Direct communication with the clinic for routine, non-emergency needs",
  "Transparent plan structure for everyday care questions",
  "Guidance on whether an in-person visit, telehealth, or another next step makes sense when appropriate",
] as const;

const notIncludedIndividualItems = [
  "Emergency room care or any emergency response",
  "Hospital care, surgery, and specialist services outside the clinic",
  "A replacement for major medical insurance",
  ...NOT_INCLUDED.filter((item) => item !== "Emergency room care"),
] as const;

const individualFaq = [
  {
    question: "Is Direct Primary Care a good fit if I have a high-deductible plan?",
    answer:
      "Many adults explore Direct Primary Care alongside a high-deductible plan because they want a more usable first stop for everyday care. The clinic can help you understand whether that setup may fit your situation, but DPC is not a replacement for major medical coverage.",
  },
  {
    question: "What should I do for non-emergency care questions?",
    answer:
      "For non-emergency needs, call or text the clinic so the team can help guide the next step. Same-day or next-day visits may be available when appropriate. For emergencies, call 911.",
  },
  {
    question: "Does this replace health insurance?",
    answer:
      "No. Direct Primary Care is not insurance and does not replace major medical coverage. It is designed to support everyday primary care access while you keep major medical protection for hospital, emergency, specialist, and catastrophic needs.",
  },
  {
    question: "How do I confirm individual pricing?",
    answer:
      "Use the pricing preview below as the governed starting point, then call or text DirectCare Indy to confirm current individual pricing. Pricing and availability are subject to change.",
  },
  {
    question: "What happens if I need a specialist or emergency care?",
    answer:
      "DirectCare Indy can help with everyday primary care and care navigation, but specialist visits, hospital care, and emergency services still happen outside the membership. If you are having a medical emergency, call 911.",
  },
] as const;

export default function IndividualsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-18 pt-24 text-primary-foreground lg:pb-24 lg:pt-30">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.healthcareChart}
            alt="Direct Care Indy helping an adult plan their next care step"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/94 via-teal-950/84 to-primary/96" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_35%)]" />
        </div>

        <div className="content-container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <HeartPulse className="h-4 w-4" aria-hidden />
              Individuals
            </div>

            <h1 className="heading-1-inverse mt-6 text-glow sm:text-5xl lg:text-6xl">
              Everyday care without the insurance runaround
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-3xl font-medium text-white/90">
              When you need a clearer primary care path, DirectCare Indy helps adults get practical
              next steps, local clinic access, and transparent membership options.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#membership-pricing-guide"
                className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-lg transition-colors hover:bg-white/90"
              >
                Get the Pricing Guide
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href={individualScheduleHref}
                className="inline-flex min-w-[260px] items-center justify-center gap-2 rounded-full border border-white/55 bg-white/10 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
              >
                Talk With Our Local Care Team
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
                "Local primary care access",
                "Individual membership preview",
                "Transparent pricing guidance",
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
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="section-card border-secondary/10 bg-linear-to-br from-secondary/5 via-card to-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Everyday-care scenario
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Minor issue on a Tuesday. You want a care path, not a deductible surprise.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Many adults do not need more healthcare friction. They need practical guidance when
                  a question comes up after work, when a cough starts on Sunday, or when the issue
                  is not &ldquo;Who is in network?&rdquo; but &ldquo;What should I do next?&rdquo;
                </p>
                <p>
                  DirectCare Indy is built to make those everyday moments easier to navigate. For
                  non-emergency needs, members can call or text the clinic and work from a clearer
                  local care path.
                </p>
              </div>
            </div>

            <div className="section-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Clock3 className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">What that may look like</h3>
              <ul className="mt-5 space-y-3">
                {individualSupportHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <p className="leading-relaxed">
                    DirectCare Indy is not for emergencies. If you are having a medical emergency,
                    call 911.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-muted/35">
        <div className="content-container">
          <SectionHeading
            eyebrow="How individual membership works"
            title="A simpler first stop for the everyday healthcare questions adults actually have"
          >
            <p>
              This page is for adults who want to understand what membership means in real life:
              what the clinic can help with, and how to get a practical next step before healthcare
              turns into a scramble.
            </p>
          </SectionHeading>

          <ol className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {individualMembershipSteps.map((step, index) => (
              <li key={step.title} className="section-card flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container">
          <SectionHeading
            eyebrow="Coverage clarity"
            title="What individual membership is designed to include and where other care still matters"
          >
            <p>
              Direct Primary Care works best when you understand the boundary lines. It can be a
              useful everyday care relationship, but it is not the same thing as insurance.
            </p>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
            <article className="section-card border-secondary/20 bg-linear-to-b from-secondary/5 to-card">
              <h3 className="text-xl font-bold text-foreground">What is included</h3>
              <ul className="mt-5 space-y-3">
                {includedIndividualItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="section-card border-border/80">
              <h3 className="text-xl font-bold text-foreground">What is not included</h3>
              <ul className="mt-5 space-y-3">
                {notIncludedIndividualItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-muted/40">
        <div className="content-container">
          <SectionHeading
            eyebrow="Pricing preview"
            title="Use the governed membership plans as your starting point"
          >
            <p>
              This preview pulls directly from the active membership pricing source. Use it as a
              starting point, then call or text DirectCare Indy to confirm current individual
              pricing.
            </p>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {individualPlan ? (
              <article className="section-card flex flex-col border-secondary/30 ring-2 ring-secondary/15">
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
                    <HeartPulse className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary">
                    Individual route
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">{individualPlan.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-secondary">
                  {individualPlan.audienceLabel}
                </p>
                <p className="mt-4 text-4xl font-black text-secondary">
                  {individualPlan.monthlyPrice}
                  <span className="text-base font-normal text-muted-foreground">
                    {individualPlan.priceNote}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {individualPlan.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {individualPlan.benefits.slice(0, 4).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/membership"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                >
                  View full membership details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ) : null}

            {supportPlanPreview.map((plan) => (
              <article key={plan.id} className="section-card flex flex-col">
                <div className="rounded-2xl bg-secondary/10 p-3 text-secondary w-fit">
                  <Stethoscope className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{plan.name}</h3>
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
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-border bg-white px-6 py-6 shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pricing is subject to change. Call or text DirectCare Indy to confirm current
              individual pricing. Direct Primary Care is not insurance and does not replace major
              medical coverage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="section-card border-primary/10 bg-linear-to-br from-primary/5 via-card to-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Local clinic access
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One local clinic. A clearer place to start.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                DirectCare Indy serves adults who want a more practical care relationship close to
                home, including households in Indianapolis, Carmel, Zionsville, Fishers, Geist, and
                nearby communities.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{CONTACT_ADDRESS.full}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{CONTACT_PHONE}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquareText className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{CONTACT_EMAIL}</span>
                </div>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">Call or text for current hours.</p>
            </article>

            <article className="section-card">
              <h3 className="text-xl font-bold text-foreground">Ways to reach the clinic</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={CONTACT_PHONE_TEL}
                  className="rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Talk With Our Local Care Team
                </a>
                <a
                  href={CONTACT_PHONE_SMS}
                  className="rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Text the Clinic
                </a>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  See Location &amp; Contact
                </Link>
                <Link
                  href="/membership"
                  className="rounded-2xl border border-border bg-muted/40 px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  View Membership Pricing
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-muted/35">
        <div className="content-container">
          <SectionHeading
            eyebrow="Provider trust"
            title="Real local clinicians, with bios you can actually review"
          >
            <p>
              Many adults want to know who will be guiding the next step. The provider details below
              come from the live provider directory and link to full bios.
            </p>
          </SectionHeading>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
            {individualProviders.map((provider) => (
              <article key={provider.slug} className="section-card flex flex-col">
                <div className="rounded-2xl bg-secondary/10 p-3 text-secondary w-fit">
                  <Stethoscope className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{provider.name}</h3>
                <p className="mt-1 text-sm font-semibold text-secondary">{provider.credentials}</p>
                <p className="mt-1 text-sm text-muted-foreground">{provider.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {provider.bio}
                </p>
                <Link
                  href={`/providers/${provider.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                >
                  View bio
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Meet the full care team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container max-w-5xl">
          <AudienceResourceForm
            config={AUDIENCE_RESOURCE_CONFIGS.individuals}
            source="individuals_page"
            sourcePage="/individuals"
            sectionId="membership-pricing-guide"
          />
        </div>
      </section>

      <section className="section-padding-sm bg-muted/40">
        <div className="content-container">
          <SectionHeading eyebrow="FAQ" title="Individual membership questions we can answer carefully">
            <p>
              These answers stay inside the current site guardrails and active pricing source. When
              a question gets more specific, call or text the clinic for the current answer.
            </p>
          </SectionHeading>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-border bg-card px-6 shadow-sm md:px-8">
            <Accordion type="single" collapsible>
              {individualFaq.map((item, index) => (
                <AccordionItem key={item.question} value={`individual-faq-${index}`}>
                  <AccordionTrigger itemValue={`individual-faq-${index}`}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent itemValue={`individual-faq-${index}`}>
                    <p className="pb-2 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container-narrow text-center">
          <h2 className="heading-2-inverse mb-4">Still trying to make everyday care feel simpler?</h2>
          <p className="body-large-inverse mx-auto max-w-2xl">
            Start with the pricing guide, talk with the local team, or use the 60-second guide if you
            are still comparing care paths.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#membership-pricing-guide"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get the Pricing Guide
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={individualScheduleHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Talk With Our Local Care Team
            </Link>
          </div>
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
