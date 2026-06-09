import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Pill,
  Phone,
  Shield,
  Sparkles,
  User,
  Users,
  XCircle,
} from "lucide-react";
import { ComplianceNote } from "@/components/ComplianceNote";
import { PricingDisclaimer } from "@/components/PricingDisclaimer";
import { ScrollTransition } from "@/components/ScrollTransition";
import { MembershipFaq } from "@/components/membership/MembershipFaq";
import { MembershipSectionNav } from "@/components/membership/MembershipSectionNav";
import { NinetyTenModelSection } from "@/components/shared/NinetyTenModelSection";
import { SITE_ASSETS } from "@/lib/images";
import {
  DISCOUNTED_LABS,
  DISCOUNTED_MEDICATIONS,
  FIT_CRITERIA,
  INCLUDED_SERVICES,
  JOINING_STEPS,
  MEMBERSHIP_PLANS,
  NOT_FIT_CRITERIA,
  NOT_INCLUDED,
} from "@/lib/content/membership-pricing";
import { DpcQuizCtaBand } from "@/components/dpc-fit-quiz";

const PLAN_ICONS = {
  individual: User,
  family: Users,
  senior: Heart,
} as const;

const HERO_PILLS = [
  "No insurance billing for included visits",
  "No co-pays for included care",
  "No surprise bills for covered services",
] as const;

function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      id={id}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">{eyebrow}</p>
      )}
      <h2 className={`heading-2 text-foreground ${eyebrow ? "mt-2" : ""}`}>{title}</h2>
      {children && (
        <div className="mt-4 space-y-4 text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

function BulletList({
  items,
  icon: Icon = CheckCircle2,
  iconClassName = "text-secondary",
}: {
  items: readonly string[];
  icon?: typeof CheckCircle2;
  iconClassName?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
          <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClassName}`} aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-auto inline-flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

export function MembershipPricingView() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pb-16 pt-24 text-primary-foreground lg:pb-20 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.healthcareChart}
            alt="Doctor consulting with a patient"
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
              Membership Pricing
            </div>

            <h1 className="heading-1-inverse text-glow sm:text-5xl lg:text-6xl">
              Simple monthly healthcare for everyday needs
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-2xl font-medium">
              Direct access to primary care, longer visits, transparent pricing, and a care team
              that knows you.
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
                href="/join"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-slate-50 sm:text-lg"
              >
                Become a Member
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="#is-this-right-for-me"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 sm:text-lg"
              >
                Is this right for me?
              </Link>
            </div>

            <div className="mt-6">
              <PricingDisclaimer inverted />
            </div>
          </div>
        </div>
      </section>

      <MembershipSectionNav />

      <section className="section-padding-sm">
        <div className="content-container max-w-4xl mx-auto">
          <DpcQuizCtaBand
            headline="Not sure which membership option fits?"
            body="Not sure which membership option fits? Take the quiz."
            variant="muted"
          />
        </div>
      </section>

      {/* Plans */}
      <section id="membership-plans" className="section-padding scroll-mt-28">
        <div className="content-container">
          <ScrollTransition id="membership-plans-intro">
            <SectionHeading title="Membership Plans">
              <p>
                Choose the option that fits your situation. Every plan includes everyday primary
                care, follow-up support, direct communication, and discounted cash-pay services
                when needed.
              </p>
            </SectionHeading>
          </ScrollTransition>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
            {MEMBERSHIP_PLANS.map((plan) => {
              const Icon = PLAN_ICONS[plan.id];
              const isFeatured = "featured" in plan && plan.featured;

              return (
                <article
                  key={plan.id}
                  className={`section-card flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isFeatured
                      ? "border-secondary/30 ring-2 ring-secondary/20 lg:-my-2 lg:scale-[1.02]"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    {isFeatured && (
                      <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary">
                        Popular for households
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-foreground">{plan.name}</h3>
                  <p
                    className={`mt-4 font-black text-secondary ${
                      plan.id === "family" ? "text-2xl leading-tight" : "text-3xl"
                    }`}
                  >
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.priceNote}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {plan.summary}
                  </p>
                  {"detail" in plan && plan.detail && (
                    <p className="mt-3 text-sm text-muted-foreground">{plan.detail}</p>
                  )}
                  {"medicareNote" in plan && plan.medicareNote && (
                    <p className="mt-3 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
                      {plan.medicareNote}
                    </p>
                  )}

                  <p className="mt-6 text-sm font-semibold text-foreground">Best for</p>
                  <ul className="mt-3 flex-1 space-y-2">
                    {plan.bestFor.map((item) => (
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

                  <PlanCta href={plan.cta.href}>{plan.cta.label}</PlanCta>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included / Not included */}
      <section id="whats-included" className="section-padding scroll-mt-28 bg-muted/40">
        <div className="content-container space-y-16">
          <ScrollTransition id="membership-included">
            <SectionHeading eyebrow="Coverage clarity" title="What your membership includes">
              <p>
                Designed for the everyday care most people need throughout the year — sick visits,
                follow-ups, medication questions, chronic support, and wellness planning.
              </p>
            </SectionHeading>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-5 lg:items-start">
              <div className="section-card lg:col-span-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  DirectCare Indy is built for the real stuff of everyday health: sinus infections,
                  blood pressure follow-ups, minor injuries, lab review, and the &ldquo;should I
                  come in?&rdquo; moments that usually turn into healthcare confusion.
                </p>
              </div>
              <div className="section-card lg:col-span-3">
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Included services may include
                </p>
                <BulletList items={INCLUDED_SERVICES} />
              </div>
            </div>
          </ScrollTransition>

          <ScrollTransition id="membership-not-included">
            <SectionHeading title="What is not included">
              <p>
                Direct Primary Care is not health insurance and does not replace major medical
                coverage.
              </p>
            </SectionHeading>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="section-card">
                <BulletList
                  items={NOT_INCLUDED}
                  icon={XCircle}
                  iconClassName="text-muted-foreground/70"
                />
              </div>
              <div className="section-card border-l-4 border-l-primary">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div className="space-y-4 text-sm">
                    <p className="leading-relaxed text-muted-foreground">
                      We strongly recommend keeping insurance or another form of major medical
                      protection for serious, emergency, or hospital-level needs.
                    </p>
                    <p className="font-medium text-foreground">
                      Think of DirectCare Indy as your first stop for everyday care. Insurance
                      remains your safety net for the big stuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Cash-priced services */}
      <section id="cash-services" className="section-padding scroll-mt-28">
        <div className="content-container">
          <ScrollTransition id="membership-cash-services">
            <SectionHeading eyebrow="Transparent add-ons" title="Commonly used cash-priced services">
              <p>
                Some labs, medications, and procedures may be available at discounted transparent
                cash-pay rates when they fall outside included membership services.
              </p>
              <p className="text-sm">
                Prices may vary based on supplier cost, availability, dosage, and clinical need.
              </p>
            </SectionHeading>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="section-card">
                <h3 className="font-semibold text-foreground">Discounted labs may include</h3>
                <div className="mt-4">
                  <BulletList items={DISCOUNTED_LABS} />
                </div>
              </div>
              <div className="section-card">
                <h3 className="font-semibold text-foreground">Discounted medications may include</h3>
                <div className="mt-4">
                  <BulletList items={DISCOUNTED_MEDICATIONS} />
                </div>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Availability may change.
              Confirm final prices with the clinic before service.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/services-included"
                className="inline-flex items-center gap-2 font-semibold text-secondary hover:underline"
              >
                View Discounted Service Rates
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-8 text-center">
              <ComplianceNote />
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Pharmacy */}
      <section className="section-padding bg-muted/40">
        <div className="content-container">
          <ScrollTransition id="membership-pharmacy">
            <div className="mx-auto max-w-4xl section-card">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="shrink-0 rounded-2xl bg-secondary/10 p-4 text-secondary">
                  <Pill className="h-8 w-8" aria-hidden />
                </div>
                <div className="space-y-4">
                  <SectionHeading align="left" title="In-clinic pharmacy access">
                    <p>
                      When appropriate, providers can prescribe common medications and may dispense
                      select generics directly from the clinic — so you can leave with what you need
                      without a pharmacy line or checkout surprise.
                    </p>
                    <p>
                      When a medication is not available in clinic, we send the prescription to your
                      preferred pharmacy and help you look for cost-conscious options.
                    </p>
                  </SectionHeading>
                </div>
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* 90/10 — shared with homepage */}
      <section id="ninety-ten" className="section-padding scroll-mt-28 bg-background">
        <ScrollTransition id="membership-ninety-ten">
          <NinetyTenModelSection />
        </ScrollTransition>
      </section>

      {/* Fit check */}
      <section id="is-this-right-for-me" className="section-padding scroll-mt-28 bg-muted/40">
        <div className="content-container">
          <ScrollTransition id="membership-fit">
            <SectionHeading title="Is this right for me?">
              <p>Compare your situation against the fit signals below.</p>
            </SectionHeading>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="section-card border-t-4 border-t-secondary">
                <h3 className="font-semibold text-foreground">Strong fit if you</h3>
                <div className="mt-4">
                  <BulletList items={FIT_CRITERIA} />
                </div>
              </div>
              <div className="section-card border-t-4 border-t-muted-foreground/30">
                <h3 className="font-semibold text-foreground">May not be the right fit if</h3>
                <ul className="mt-4 space-y-3">
                  {NOT_FIT_CRITERIA.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <XCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/70"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="tel:+13179566288"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call With Questions
              </a>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* FAQ */}
      <section id="membership-faq" className="section-padding scroll-mt-28">
        <div className="content-container">
          <SectionHeading title="Common questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <MembershipFaq />
          </div>
        </div>
      </section>

      {/* How joining works */}
      <section id="how-joining-works" className="section-padding scroll-mt-28 bg-muted/40">
        <div className="content-container">
          <ScrollTransition id="membership-joining">
            <SectionHeading title="How joining works" />
            <ol className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
              {JOINING_STEPS.map((step) => (
                <li key={step.step} className="section-card flex gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground"
                    aria-hidden
                  >
                    {step.step}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                    {"cta" in step && step.cta && (
                      <div className="mt-4">
                        <Link
                          href={step.cta.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
                        >
                          {step.cta.label}
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </ScrollTransition>
        </div>
      </section>

      <section className="section-padding-sm">
        <div className="content-container max-w-4xl mx-auto">
          <DpcQuizCtaBand
            headline="Still deciding?"
            body="Still deciding? Take the quiz or book a 30-minute intro meeting if your result suggests a fit."
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container-narrow text-center">
          <h2 className="heading-2-inverse mb-4">A better way to use healthcare</h2>
          <p className="body-large-inverse mx-auto max-w-2xl">
            Your membership is a simpler relationship with your care team — more time, more access,
            more clarity, and fewer billing surprises for everyday care.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            No maze. No rushed room. Just practical, personal care when you need it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/join"
              className="interactive-element inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Become a Member
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="interactive-element inline-flex items-center gap-2 rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Talk With Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
