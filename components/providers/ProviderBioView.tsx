import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Stethoscope,
} from "lucide-react";
import IndyBreathEasy from "@/components/IndyBreathEasy";
import { PhysicianOversightBadge } from "@/components/PhysicianOversightBadge";
import { ScrollTransition } from "@/components/ScrollTransition";
import { SITE_ASSETS } from "@/lib/images";
import type { Provider } from "@/lib/data/providers";
import { getOtherProviders, getMedicalDirector } from "@/lib/data/providers";
import { ProviderCard } from "./ProviderCard";
import { ProviderSectionHeading } from "./ProviderSectionHeading";

type ProviderBioViewProps = {
  provider: Provider;
};

export function ProviderBioView({ provider }: ProviderBioViewProps) {
  const medicalDirector = getMedicalDirector();
  const isPA = provider.role === "Lead PA";
  const isPhysician = provider.role === "Medical Director";
  const relatedProviders = getOtherProviders(provider.slug, 3);
  const fullName = `${provider.name}, ${provider.credentials}`;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary pb-12 pt-24 text-primary-foreground lg:pb-16 lg:pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.ui.tealGradient}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={isPhysician}
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/92 via-teal-900/80 to-primary/95" />
        </div>

        <div className="content-container relative z-10">
          <Link
            href="/providers"
            className="interactive-element mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to care team
          </Link>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-xl lg:mx-0">
              <Image
                src={provider.image}
                alt={fullName}
                fill
                className="object-cover"
                priority={isPhysician}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                {provider.role}
              </div>
              <h1 className="heading-1-inverse mt-4 text-glow">{provider.name}</h1>
              <p className="mt-2 text-xl font-semibold text-teal-100">{provider.credentials}</p>
              <p className="body-large-inverse mt-6 text-white/90">{provider.bio}</p>
              {isPA && medicalDirector ? (
                <div className="mt-6">
                  <PhysicianOversightBadge />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {provider.carePhilosophy || (provider.idealFor && provider.idealFor.length > 0) ? (
        <section className="section-padding-sm">
          <div className="content-container">
            <ScrollTransition id={`${provider.slug}-philosophy`}>
              <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
                {provider.carePhilosophy ? (
                  <div className="section-card">
                    <h2 className="text-xl font-bold text-foreground">Care philosophy</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {provider.carePhilosophy}
                    </p>
                  </div>
                ) : null}
                {provider.idealFor && provider.idealFor.length > 0 ? (
                  <div className="section-card">
                    <h2 className="text-xl font-bold text-foreground">May be a strong fit if you</h2>
                    <ul className="mt-4 space-y-3">
                      {provider.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </ScrollTransition>
          </div>
        </section>
      ) : null}

      {provider.highlights.length > 0 ? (
        <section className="section-padding-sm bg-muted/35">
          <div className="content-container">
            <ScrollTransition id={`${provider.slug}-highlights`}>
              <ProviderSectionHeading title="Key highlights" align="center">
                <p>Credentials and experience that shape how this clinician supports members.</p>
              </ProviderSectionHeading>
              <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
                {provider.highlights.map((highlight) => (
                  <div key={highlight} className="section-card flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <p className="text-sm leading-relaxed text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </ScrollTransition>
          </div>
        </section>
      ) : null}

      <section className="section-padding-sm">
        <div className="content-container">
          <ScrollTransition id={`${provider.slug}-credentials`}>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {provider.specialties && provider.specialties.length > 0 ? (
                <DetailCard
                  icon={Stethoscope}
                  title="Specialties"
                  items={provider.specialties}
                />
              ) : null}
              {provider.education && provider.education.length > 0 ? (
                <DetailCard icon={GraduationCap} title="Education" items={provider.education} />
              ) : null}
              {provider.certifications && provider.certifications.length > 0 ? (
                <DetailCard icon={Award} title="Certifications" items={provider.certifications} />
              ) : null}
              {provider.affiliations && provider.affiliations.length > 0 ? (
                <DetailCard
                  icon={Building2}
                  title="Affiliations"
                  items={provider.affiliations}
                />
              ) : null}
            </div>
          </ScrollTransition>
        </div>
      </section>

      {isPhysician && provider.slug === "james-pike" ? (
        <section className="section-padding-sm bg-muted/35">
          <div className="content-container">
            <div className="mx-auto max-w-4xl">
              <IndyBreathEasy />
            </div>
          </div>
        </section>
      ) : null}

      {provider.personalNote ? (
        <section className="section-padding-sm">
          <div className="content-container">
            <blockquote className="section-card mx-auto max-w-3xl border-l-4 border-secondary/40 italic text-muted-foreground">
              {provider.personalNote}
            </blockquote>
          </div>
        </section>
      ) : null}

      {relatedProviders.length > 0 ? (
        <section className="section-padding-sm bg-muted/35">
          <div className="content-container">
            <ScrollTransition id={`${provider.slug}-related`}>
              <ProviderSectionHeading title="Meet the rest of the care team">
                <p>Every Direct Care Indy member is supported by our Round Table clinical model.</p>
              </ProviderSectionHeading>
              <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedProviders.map((related) => (
                  <ProviderCard
                    key={related.slug}
                    provider={related}
                    variant="compact"
                    bioPreviewLines={2}
                  />
                ))}
              </div>
            </ScrollTransition>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="content-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-2-inverse text-white">
              Ready to explore {isPhysician ? "specialist-led" : "clinician-led"} primary care?
            </h2>
            <p className="body-large-inverse mt-4 text-white/90">
              {isPhysician
                ? "Review membership options or contact our Michigan Rd clinic to learn how the Round Table model works for you."
                : "Review membership options or talk with our local care team about getting started with Direct Care Indy."}
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
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Stethoscope;
  title: string;
  items: string[];
}) {
  return (
    <div className="section-card h-full">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-secondary" aria-hidden>
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
