import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CheckCircle2, Clock, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { SITE_ASSETS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Chronic Care Direct Primary Care | Carmel, IN | Direct Care Indy",
  description:
    "Specialist-led chronic disease management for Carmel residents. COPD, diabetes, hypertension, and cardiac risk management with transparent pricing.",
};

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function ChronicCareCarmelPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={SITE_ASSETS.locations.carmel}
            alt="Carmel Indiana streetscape"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        </div>
        <div className="content-container relative section-padding">
          <div className="max-w-5xl space-y-4">
            <p className="text-sm font-semibold text-secondary uppercase">Carmel Chronic Care</p>
            <h1 className="heading-1">Chronic disease management with specialist oversight.</h1>
            <p className="body-large text-muted-foreground max-w-3xl">
              Direct primary care membership for Carmel residents with COPD, diabetes, hypertension, and complex medical needs.
              Board-certified Pulmonary and Internal Medicine leadership keeps every plan aligned and transparent.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/join"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition-all"
              >
                Join now
              </Link>
              <a
                href={PATIENT_PORTAL_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-card text-foreground border border-border px-6 py-3 rounded-full font-semibold hover:bg-card/90 transition-colors"
              >
                Patient login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="section-card">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-bold">Conditions we manage</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>COPD, asthma, and chronic lung disease with pulmonary specialist oversight.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Diabetes, metabolic syndrome, and weight management with continuous monitoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Hypertension, lipid management, and cardiac risk reduction with wholesale labs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Chronic care coordination with specialists, imaging, and wraparound partners.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="heading-2">Built for Carmel schedules.</h2>
              <p className="body-large text-muted-foreground">
                We are minutes from US-31 with reserved same-day slots for chronic care members. Text-first follow-up keeps
                you out of waiting rooms and on track with your plan.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Average visit under 25 minutes with labs drawn in-clinic.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Stethoscope className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Board-certified Pulmonary and Internal Medicine oversight on every complex case.</span>
                </div>
                <div className="flex items-start gap-2">
                  <HeartPulse className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Care plans delivered through Hint Health and our secure patient portal.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/locations/carmel-indiana.webp"
                alt="Carmel Indiana neighborhood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <h3 className="heading-3">Predictable costs, specialist-caliber care.</h3>
              <p className="body-large text-muted-foreground">
                Membership pricing is flat, labs and medications are wholesale, and Hint Health manages billing so your focus stays
                on outcomes. The household cap protects larger families who need frequent care.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/membership"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Calculate pricing
                </Link>
                <Link
                  href="/join"
                  className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
                >
                  Start enrollment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to stabilize your chronic care plan?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Carmel members get direct texting, transparent pricing, and specialist oversight without hospital delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/join"
              className="bg-card text-card-foreground px-8 py-4 rounded-lg font-semibold hover:bg-card/90 transition-colors"
            >
              Enroll now
            </Link>
            <a
              href={PATIENT_PORTAL_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-card-foreground/30 px-8 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              Patient login
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
