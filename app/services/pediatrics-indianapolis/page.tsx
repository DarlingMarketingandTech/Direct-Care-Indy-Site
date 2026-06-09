import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { CheckCircle2, Clock, HeartPulse, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Pediatric Direct Primary Care | Indianapolis Families | Direct Care Indy",
  description:
    "Transparent pediatric direct primary care in Indianapolis. Same-day sick visits, asthma management, and sports physicals with board-certified oversight.",
};

const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export default function PediatricsIndianapolisPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/clinical/round-table.webp"
            alt="Direct Care Indy pediatric exam room"
            fill
            className="object-cover opacity-70"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
        </div>
        <div className="content-container relative section-padding">
          <div className="max-w-5xl space-y-4">
            <p className="text-sm font-semibold text-secondary uppercase">Indianapolis Pediatrics</p>
            <h1 className="heading-1">Pediatric direct primary care for Indy families.</h1>
            <p className="body-large text-muted-foreground max-w-3xl">
              Same-day pediatric sick visits, asthma care, and well-child exams delivered by a team you can text directly.
              Board-certified oversight keeps complex cases safe while Hint Health keeps enrollment and billing simple.
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="heading-2">What we cover for kids and teens</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Same-day sick visits for fevers, ear pain, coughs, and minor injuries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Asthma and allergy action plans with direct texting for flare support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Well-child visits, immunization review, and sports physicals without copays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Wholesale medication and lab pricing for common pediatric needs.</span>
                </li>
              </ul>
            </div>
            <div className="section-card">
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold">Why Indianapolis parents choose us</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Same-week onboarding and same-day sick care on the NW side of Indy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Stethoscope className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Board-certified physician oversight for complex respiratory concerns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                  <span>Single flat monthly price-no copays, no surprise bills.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/images/clinical/doctor-consultation.webp"
                alt="Direct Care Indy pediatric consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <h3 className="heading-3">Local to Indianapolis, focused on families.</h3>
              <p className="body-large text-muted-foreground">
                We are minutes from Zionsville, Whitestown, and Carmel-ideal for school-day sick visits and follow-ups without
                emergency room costs. Enrollment and portal access run through Hint Health for secure, streamlined onboarding.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/join"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Start enrollment
                </Link>
                <Link
                  href="/membership"
                  className="px-6 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="content-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make pediatric care effortless?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Join Direct Care Indy and get text-first access, transparent pricing, and a care team that knows your family.
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
