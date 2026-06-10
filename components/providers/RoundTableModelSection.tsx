import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageSquare,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { ProviderSectionHeading } from "./ProviderSectionHeading";

const STEPS = [
  {
    step: "1",
    title: "Daily care with your PA",
    body: "Your assigned PA handles routine visits, preventive care, and chronic disease management with direct access when you need guidance.",
  },
  {
    step: "2",
    title: "Weekly case reviews",
    body: "Dr. Pike reviews complex cases weekly, providing specialist-level guidance and helping keep care plans aligned.",
  },
  {
    step: "3",
    title: "Specialist support when needed",
    body: "For complex conditions, pulmonary issues, or cases that need deeper expertise, Dr. Pike is available to support your care team.",
  },
] as const;

export function RoundTableModelSection() {
  return (
    <div className="content-container">
      <ProviderSectionHeading
        id="round-table-heading"
        eyebrow="Clinical model"
        title={'The Direct Care Indy "Round Table" model'}
      >
        <p>
          High-access primary care clinicians with specialist oversight—designed to bring experienced
          clinical judgment to your everyday healthcare.
        </p>
      </ProviderSectionHeading>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="section-card border-secondary/15 bg-linear-to-br from-secondary/5 to-card text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <Shield className="h-4 w-4" aria-hidden />
            90/10 security model
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our PAs handle most of your daily healthcare needs with direct access, while Dr. Pike
            provides expert oversight for more complex cases—so you have specialist-level support
            when it matters.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="section-card border-secondary/10">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Users className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-foreground">High-access PAs</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Direct text access:</strong> Message your PA
                through the Spruce Health app when available—less phone tag, more continuity.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Longer, unhurried visits:</strong> Appointments
                designed to give your clinician time to listen and address your concerns.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Routine daily care:</strong> Wellness exams,
                sick visits, and chronic disease management with a consistent clinician.
              </span>
            </li>
          </ul>
        </div>

        <div className="section-card border-border/80">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Shield className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-foreground">Specialist oversight</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Weekly case reviews:</strong> Dr. Pike reviews
                complex cases and supports care planning with specialist experience.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Triple board-certified:</strong> Internal
                Medicine, Pulmonary Medicine, and Critical Care expertise for complex needs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Complex case support:</strong> Specialist-level
                guidance for pulmonary conditions and challenging internal medicine cases.
              </span>
            </li>
          </ul>
        </div>

        <div className="section-card border-border/80">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <CheckCircle2 className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-foreground">The 90/10 split</h3>
          </div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Routine care:</strong> Sick visits, lab work,
                wellness exams, and preventive care handled by your PA.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Complex case security:</strong> Pulmonary
                conditions and challenging diagnostics supported by Dr. Pike.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              <span>
                <strong className="text-foreground">Seamless handoff:</strong> Your PA coordinates
                with Dr. Pike when specialist expertise is needed.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl">
        <div className="section-card bg-muted/30">
          <h3 className="text-center text-xl font-bold text-foreground">How the Round Table works</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {STEPS.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-lg font-bold text-secondary">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
        <Link
          href="/providers/james-pike"
          className="interactive-element inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          <Stethoscope className="h-5 w-5" aria-hidden />
          Meet Dr. Pike — Medical Director
        </Link>
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
        >
          Explore how membership works
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
