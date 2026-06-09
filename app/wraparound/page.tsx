import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Shield,
  Stethoscope,
  Wallet,
} from "lucide-react";
import { CatastrophicPartners } from "@/components/CatastrophicPartners";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";

const WRAPAROUND_STEPS = [
  {
    title: "Start with your everyday care plan",
    subtitle: "Use Direct Care Indy as your routine first stop",
    description:
      "Choose the membership plan that fits your household, then use the clinic for many day-to-day primary care needs.",
    bullets: [
      "Review current membership pricing directly with the clinic",
      "Use the membership for annual wellness support and follow-up care",
      "Ask about transparent add-on pricing for labs, vaccines, imaging, and pharmacy items",
      "Confirm availability and pricing before enrolling because details can change",
    ],
    icon: Stethoscope,
  },
  {
    title: "Pair it with major medical protection",
    subtitle: "Keep a plan for hospital, specialist, and emergency needs",
    description:
      "Wraparound coverage can support the larger medical events that fall outside a primary care membership.",
    bullets: [
      "Compare employer coverage, ACA options, healthshares, or other major medical strategies",
      "Review deductible, network, and HSA rules with your carrier or advisor",
      "Make sure you understand what stays with the clinic and what belongs with insurance",
      "Choose the structure that matches your budget and risk tolerance",
    ],
    icon: Shield,
  },
  {
    title: "Build a simpler care path",
    subtitle: "Use the clinic first, then step out when the need is bigger",
    description:
      "This approach can make everyday care easier to access while keeping a plan in place for larger medical needs.",
    bullets: [
      "Keep one local clinic relationship for routine questions and follow-ups",
      "Use transparent cash-pay pricing when additional services are needed",
      "Ask for guidance when imaging, specialist care, or hospital care is the next step",
      "Confirm current pricing, coverage, and availability directly before making decisions",
    ],
    icon: Wallet,
  },
] as const;

export default function Wraparound() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 text-foreground text-glow">
              Complete Your Healthcare Stack
            </h2>
            <p className="text-2xl mb-4 text-foreground">
              Pair everyday primary care access with major medical protection that fits your situation.
            </p>
            <p className="text-xl text-muted-foreground">
              Direct Care Indy can be the routine care layer while a separate wraparound option helps cover larger medical events.
            </p>
          </div>
        </div>
      </section>

      {/* HSA Status Tracker */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <HsaStatusTracker />
          </div>
        </div>
      </section>

      {/* Wraparound Guide */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-foreground">
                A simpler way to think about primary care and backup coverage
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                Use Direct Care Indy for many everyday primary care needs, then compare separate
                options for the larger medical costs a clinic membership does not replace.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {WRAPAROUND_STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-border bg-card p-8 shadow-sm"
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                          Step {index + 1}
                        </p>
                        <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-foreground/80">{step.subtitle}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Important:</p>
              <p className="mt-2">
                Direct Care Indy is not insurance. Pricing, plan details, partner options, and
                availability are subject to change. Confirm current membership pricing and outside
                coverage details directly before enrolling or switching plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catastrophic Partners Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CatastrophicPartners />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Your Complete Healthcare Stack?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with Direct Care Indy for routine care, then talk through the right backup coverage for larger medical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block interactive-element"
            >
              View Pricing
            </Link>
            <a
              href="tel:+13179566288"
              className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2 interactive-element"
            >
              <Phone className="w-5 h-5" />
              (317) 956-6288
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Local SEO */}
      <footer className="bg-card text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-muted-foreground">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-muted-foreground hover:text-foreground transition-colors">
                    Membership Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/wraparound" className="text-muted-foreground hover:text-foreground transition-colors">
                    Wraparound Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-foreground transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-foreground transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-2">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
