import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ComplianceNote } from "@/components/ComplianceNote";
import { Testimonials } from "@/components/Testimonials";
import { DPC_CONTENT } from "@/lib/content/dpc";
import { publicClaim } from "@/lib/claims";
import { SITE_ASSETS } from "@/lib/images";
import { ScrollTransition } from "@/components/ScrollTransition";

export default function MembershipPage() {
  const pricingTiers = DPC_CONTENT.pricingTiers;
  const valueProps = DPC_CONTENT.valueProps;
  const insuranceClaim = publicClaim("dpcNotInsurance");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-white section-padding-sm">
        <div className="content-container-narrow text-center">
          <h1 className="heading-1 mb-4">Simple, Transparent Membership</h1>
          <p className="body-large max-w-2xl mx-auto">
            One flat monthly fee. No hidden costs. No copays. No deductibles.
          </p>
        </div>
      </section>

      {/* Insurance Disclaimer */}
      <section className="section-padding bg-blue-50 dark:bg-blue-950/20">
        <div className="content-container">
          <div className="max-w-3xl mx-auto border border-blue-200 dark:border-blue-900 rounded-lg p-6 text-center">
            {insuranceClaim && <p className="text-sm text-blue-900 dark:text-blue-200"><strong>Important:</strong> {insuranceClaim}</p>}
          </div>
        </div>
      </section>

      {/* Member Pricing Context */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <ScrollTransition id="membership-savings-accent">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="section-card space-y-4">
                <h2 className="heading-3">Transparent member pricing without speculative savings tables</h2>
                <p className="text-muted-foreground">
                  We review lab and pharmacy rates with members during enrollment and care planning so figures match current partner pricing.
                </p>
                <p className="text-muted-foreground">
                  Detailed public lab widgets are currently paused until verification is finalized.
                </p>
                <ComplianceNote />
              </div>
            </div>
            <div className="space-y-6">
              <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <Image src={SITE_ASSETS.clinical.medicalDiagram} alt="Lab and pharmacy pricing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
              </div>
              <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <Image src={SITE_ASSETS.marketing.seniorWellness} alt="Member savings in action" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
              </div>
            </div>
          </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative bg-card rounded-2xl shadow-lg border border-border p-8 text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl will-change-transform ${tier.id === 'family' ? 'ring-2 ring-secondary/40' : ''}`}
                >
                  {tier.id === 'family' && (
                    <div className="absolute -top-3 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-black text-secondary mb-2">
                    ${tier.price}
                    <span className="text-lg font-normal text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>

                  <ul className="text-left space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/join"
                    className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold inline-block w-full transition-transform duration-200 hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  >
                    Join Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Accents */}
      <section className="section-padding pt-0">
        <div className="content-container">
          <ScrollTransition id="membership-visual-accents">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
              <Image src={SITE_ASSETS.clinical.roundTable} alt="Round table care model" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
            </div>
            <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
              <Image src={SITE_ASSETS.clinical.medicalLaboratory} alt="Wholesale laboratory savings" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
            </div>
            <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
              <Image src={SITE_ASSETS.clinical.healthcareChart} alt="Transparent pricing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
            </div>
          </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Why Choose Pike Medical?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {valueProps.map((prop) => (
                <div key={prop.id} className="section-card">
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Utilization Philosophy */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Our Utilization Philosophy</h2>
            <p className="body-large text-muted-foreground">
              We believe in providing unlimited access to care without restrictive gatekeeping.
              Our model is built on trust and appropriate utilization. We monitor usage patterns
              to ensure sustainable care for all members.
            </p>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Transparent Pricing</h2>
            <p className="body-large text-muted-foreground mb-8">
              We share current pricing and service availability with members as part of enrollment and ongoing care.
            </p>
            <div className="section-card">
              <h3 className="font-semibold mb-4">What to expect</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Current pricing reviewed before services are ordered.</li>
                <li>Member-first recommendations based on your care needs.</li>
                <li>Updates provided when partner pricing or availability changes.</li>
              </ul>
              <ComplianceNote />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">What Members Are Saying</h2>
            <p className="body-large text-muted-foreground">
              Real experiences from Indianapolis families who&apos;ve joined DPC.
            </p>
          </div>
          <Testimonials limit={2} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your membership today and experience healthcare without the insurance hassle.
          </p>
          <Link
            href="/join"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors inline-block"
          >
            Join the Table
          </Link>
        </div>
      </section>
    </div>
  );
}
