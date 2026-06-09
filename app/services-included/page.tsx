import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, XCircle, ArrowRight, Info } from "lucide-react";
import { DPC_CONTENT } from "@/lib/content/dpc";
import { SITE_ASSETS } from "@/lib/images";
import { ScrollTransition } from "@/components/ScrollTransition";

export default function ServicesIncludedPage() {
  const includedServices = DPC_CONTENT.services.filter(s => s.category === 'included');
  const excludedServices = DPC_CONTENT.services.filter(s => s.category === 'excluded');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="content-container-narrow text-center">
          <h1 className="heading-1 mb-4">What&apos;s Included in Your Membership</h1>
          <p className="body-large max-w-3xl mx-auto mb-8">
            Direct Primary Care covers 90% of your healthcare needs for one flat monthly fee.
            Here&apos;s exactly what&apos;s included and what&apos;s not.
          </p>
          <ScrollTransition id="services-hero-images">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <Image src={SITE_ASSETS.clinical.medicalDiagram} alt="Clinical diagram" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
              </div>
              <div className="group relative aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <Image src={SITE_ASSETS.clinical.medicalLaboratory} alt="Medical laboratory" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03] will-change-transform" />
              </div>
            </div>
          </ScrollTransition>
        </div>
      </section>

      {/* Quick FAQ Anchors */}
      <section className="section-padding-sm bg-card border-b border-border">
        <div className="content-container">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#included" className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors">
              What&apos;s Included
            </a>
            <a href="#not-included" className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors">
              What&apos;s Not Included
            </a>
            <a href="#scenarios" className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors">
              Common Scenarios
            </a>
            <a href="#wraparound" className="px-4 py-2 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 transition-colors">
              Insurance Coverage
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="included" className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">✅ What&apos;s Included (90% of Care)</h2>
              <p className="body-large text-muted-foreground">
                These services are covered by your monthly membership fee with no additional costs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {includedServices.map((service) => (
                <div key={service.id} className="section-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                      {service.pricing && (
                        <p className="text-secondary font-medium text-sm mt-2">
                          Pricing: {service.pricing}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Not Included */}
      <section id="not-included" className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">❌ What&apos;s Not Included (10% of Care)</h2>
              <p className="body-large text-muted-foreground">
                These services require separate insurance coverage for catastrophic events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {excludedServices.map((service) => (
                <div key={service.id} className="section-card bg-card/80">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section id="scenarios" className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Common Healthcare Scenarios</h2>
              <p className="body-large text-muted-foreground">
                Here&apos;s how DPC and insurance work together for typical healthcare needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="section-card">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Routine Check-ups & Preventive Care</h3>
                    <p className="text-muted-foreground mb-2">Annual physicals, vaccinations, health screenings</p>
                    <p className="text-secondary font-medium">→ Covered by DPC membership</p>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sick Visits & Chronic Care</h3>
                    <p className="text-muted-foreground mb-2">Colds, flu, diabetes management, blood pressure monitoring</p>
                    <p className="text-secondary font-medium">→ Covered by DPC membership</p>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-800 p-2 rounded-lg">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Emergency Room Visits</h3>
                    <p className="text-muted-foreground mb-2">Accidents, severe injuries, life-threatening conditions</p>
                    <p className="text-red-600 font-medium">→ Covered by insurance</p>
                  </div>
                </div>
              </div>

              <div className="section-card">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-800 p-2 rounded-lg">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hospital Stays & Surgeries</h3>
                    <p className="text-muted-foreground mb-2">Inpatient care, operations, specialist procedures</p>
                    <p className="text-red-600 font-medium">→ Covered by insurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wraparound Explanation */}
      <section id="wraparound" className="section-padding bg-secondary text-secondary-foreground">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <Info className="w-12 h-12 mx-auto mb-6" />
            <h2 className="heading-2 mb-6">What About the 10%?</h2>
            <p className="body-large mb-8 max-w-3xl mx-auto">
              While Direct Primary Care covers 90% of your healthcare needs, you still need insurance
              for catastrophic events. We recommend these wraparound partners for comprehensive coverage.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/20">
                <h3 className="font-semibold mb-3">Short-Term Health Insurance</h3>
                <p className="text-sm opacity-90 mb-4">Perfect for temporary coverage between jobs or while waiting for employer insurance.</p>
                <Link href="/wraparound" className="inline-flex items-center gap-2 text-secondary-foreground hover:opacity-80 transition-opacity font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/20">
                <h3 className="font-semibold mb-3">High-Deductible Health Plans</h3>
                <p className="text-sm opacity-90 mb-4">Low-premium plans that pair perfectly with DPC for catastrophic coverage.</p>
                <Link href="/wraparound" className="inline-flex items-center gap-2 text-secondary-foreground hover:opacity-80 transition-opacity font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/20">
                <h3 className="font-semibold mb-3">Medicare Supplements</h3>
                <p className="text-sm opacity-90 mb-4">For seniors who want DPC + comprehensive Medicare coverage.</p>
                <Link href="/wraparound" className="inline-flex items-center gap-2 text-secondary-foreground hover:opacity-80 transition-opacity font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-foreground/20 max-w-2xl mx-auto">
              <p className="text-sm opacity-90">
                <strong>Important:</strong> Direct Care Indy is not insurance. We handle your routine healthcare needs.
                For emergencies, hospitalizations, and specialist care, you need separate insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="content-container-narrow text-center">
          <h2 className="heading-3 mb-4">Ready to Get Started?</h2>
          <p className="body-base text-muted-foreground mb-8">
            Join hundreds of Indianapolis families who have simplified their healthcare.
          </p>
          <Link href="/membership" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform interactive-element">
            View Membership Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
