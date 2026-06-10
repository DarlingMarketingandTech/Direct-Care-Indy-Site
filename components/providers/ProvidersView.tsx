import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Sparkles, Users } from "lucide-react";
import { ScrollTransition } from "@/components/ScrollTransition";
import { SITE_ASSETS } from "@/lib/images";
import { getLeadPAs, getMedicalDirector } from "@/lib/data/providers";
import { ProviderCard } from "./ProviderCard";
import { ProviderSectionHeading } from "./ProviderSectionHeading";
import { ProvidersSectionNav } from "./ProvidersSectionNav";
import { RoundTableModelSection } from "./RoundTableModelSection";

const HERO_PILLS = [
  "Specialist oversight",
  "Direct clinician access",
  "One Indianapolis clinic",
] as const;

export function ProvidersView() {
  const medicalDirector = getMedicalDirector();
  const leadPAs = getLeadPAs();

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-16 pt-24 text-primary-foreground lg:pb-20 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.roundTable}
            alt="Care team collaboration"
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
              Our Team
            </div>

            <h1 className="heading-1-inverse text-glow sm:text-5xl lg:text-6xl">
              Meet your care team
            </h1>
            <p className="body-large-inverse mx-auto mt-5 max-w-2xl font-medium">
              Specialist-led primary care with high-access clinicians at our Michigan Rd clinic.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
              Our Round Table model combines direct access to expert PAs with weekly specialist
              oversight from Dr. Pike—bringing experienced clinical judgment to everyday care.
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
                href="#clinical-team"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-slate-50 sm:text-lg"
              >
                Meet the clinicians
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <Link
                href="#round-table"
                className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 sm:text-lg"
              >
                How the Round Table works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProvidersSectionNav />

      <section id="round-table" className="section-padding scroll-mt-28 bg-background">
        <ScrollTransition id="providers-round-table">
          <RoundTableModelSection />
        </ScrollTransition>
      </section>

      <section
        id="clinical-excellence"
        className="section-padding-sm scroll-mt-28 bg-muted/40"
      >
        <div className="content-container">
          <ScrollTransition id="providers-clinical-excellence">
            <div className="relative min-h-[min(28rem,70vh)] overflow-hidden rounded-3xl">
              <Image
                src={SITE_ASSETS.clinical.specialist}
                alt="Physician reviewing clinical information"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/75 to-primary/90" />
              <div className="relative flex min-h-[min(28rem,70vh)] items-center p-6 sm:p-10">
                <div className="section-card mx-auto max-w-3xl border-white/20 bg-white/10 text-center text-white backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary-foreground/90">
                    Specialist team
                  </p>
                  <h2 className="heading-2-inverse mt-2 text-white">Physician-led clinical excellence</h2>
                  <p className="body-large-inverse mt-4 text-white/90">
                    Dr. Pike&apos;s board-certified oversight helps members receive specialist-level
                    diagnostic support through our Round Table model.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["Board certified", "Specialist oversight", "Round Table model"].map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {medicalDirector ? (
        <section id="medical-director" className="section-padding scroll-mt-28">
          <div className="content-container">
            <ScrollTransition id="providers-medical-director">
              <ProviderSectionHeading eyebrow="Medical Director" title="Specialist oversight">
                <p>
                  Dr. Pike provides weekly case reviews and clinical leadership for every Direct
                  Care Indy member.
                </p>
              </ProviderSectionHeading>
              <div className="mx-auto mt-10 max-w-6xl">
                <ProviderCard provider={medicalDirector} variant="featured" priority />
              </div>
            </ScrollTransition>
          </div>
        </section>
      ) : null}

      <section id="clinical-team" className="section-padding scroll-mt-28 bg-muted/35">
        <div className="content-container">
          <ScrollTransition id="providers-clinical-team">
            <ProviderSectionHeading
              eyebrow="High-access primary care team"
              title="Your primary care clinicians"
            >
              <p>
                Our expert PAs provide direct access, same-day appointments when available, and
                comprehensive primary care—with weekly specialist oversight from Dr. Pike.
              </p>
            </ProviderSectionHeading>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {leadPAs.map((pa) => (
                <ProviderCard key={pa.slug} provider={pa} variant="compact" />
              ))}
            </div>
          </ScrollTransition>
        </div>
      </section>

      <section id="next-steps" className="section-padding scroll-mt-28 bg-primary text-primary-foreground">
        <div className="content-container">
          <ScrollTransition id="providers-next-steps">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <Users className="h-4 w-4" aria-hidden />
                Ready for the next step?
              </div>
              <h2 className="heading-2-inverse text-white">
                Experience specialist-led primary care in Indianapolis
              </h2>
              <p className="body-large-inverse mt-4 text-white/90">
                Review membership options or reach our local care team at 7911 N. Michigan Rd.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/membership"
                  className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-slate-50"
                >
                  View membership
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="interactive-element inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20"
                >
                  <MapPin className="h-5 w-5" aria-hidden />
                  Location &amp; Contact
                </Link>
              </div>
              <a
                href="tel:+13179566288"
                className="interactive-element mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden />
                (317) 956-6288
              </a>
            </div>
          </ScrollTransition>
        </div>
      </section>
    </div>
  );
}
