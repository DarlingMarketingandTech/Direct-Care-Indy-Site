import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import PricingTiers from "@/components/PricingTiers";
import ComparisonTable from "@/components/ComparisonTable";
import { IncludedMatrix } from "@/components/IncludedMatrix";
import { ValueBanner } from "@/components/ValueBanner";
import { MarketCostComparison } from "@/components/MarketCostComparison";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ComplianceNote } from "@/components/ComplianceNote";
import { MembershipValue } from "@/components/shared/MembershipValue";
import { publicClaim } from "@/lib/claims";

export default function Pricing() {
  const hsaClaim = publicClaim("hsa2026");

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl max-w-2xl mx-auto">
            One flat monthly fee. No hidden costs. No copays. No deductibles.
          </p>
          {/* Pricing Disclaimer */}
          <p className="text-sm mt-6 opacity-90">Pricing subject to change. Contact Direct Care Indy for current rates and enrollment details.</p>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <PricingTiers />
          </div>
        </div>
      </section>

      {/* 2026 Pricing Tiers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">2026 Membership Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2">Individual Adult</h3>
                <p className="text-3xl font-bold text-secondary mb-4">$85 – $110/mo</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> Unlimited visits</li>
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> Same-day scheduling</li>
                </ul>
              </div>
              <div className="bg-card border-2 border-secondary rounded-2xl p-8 text-center shadow-md ring-2 ring-secondary/20">
                <h3 className="text-xl font-bold mb-2">Family Plan</h3>
                <p className="text-3xl font-bold text-secondary mb-2">$250 – $300/mo</p>
                <p className="text-xs text-muted-foreground mb-4">Includes 2 Adults + 2 Kids (Kids &lt;18 approx $45/mo)</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> Comprehensive household care</li>
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> All individual features included</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
                <h3 className="text-xl font-bold mb-2">Small Business</h3>
                <p className="text-3xl font-bold text-secondary mb-4">$80/mo per employee</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> Absenteeism reduction strategies</li>
                  <li className="flex items-start gap-2"><span className="text-secondary font-bold">✓</span> Consolidated invoicing</li>
                </ul>
              </div>
            </div>
            {hsaClaim && (
              <div className="mt-8 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-center">
                <p className="text-sm text-yellow-900 dark:text-yellow-200">{hsaClaim}</p>
              </div>
            )}
            <div className="mt-4 text-center">
              <ComplianceNote />
            </div>
          </div>
        </div>
      </section>

      {/* Business Bridge */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Buying for your team?</h3>
            <p className="text-muted-foreground mb-6">
              Simple $80/mo/employee pricing. Consolidated invoicing.
            </p>
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
            >
              Learn About Partnerships
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Value */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <MembershipValue />
        </div>
      </section>

      {/* Value Banner */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <ValueBanner />
        </div>
      </section>

      {/* Market Cost Comparison */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <MarketCostComparison />
          </div>
        </div>
      </section>

      {/* 90/10 Comparison */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* Included Matrix */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <IncludedMatrix />
        </div>
      </section>

      {/* Pricing Transparency Note */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Member pricing is shared during enrollment and care planning.</h3>
              <p className="text-muted-foreground">
                Public widgets with detailed lab and pharmacy pricing are paused pending final verification.
              </p>
              <ComplianceNote />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the Direct Care Indy family and experience healthcare without the hassles.
          </p>
          <a
            href="tel:+13179566288"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (317) 956-6288
          </a>
        </div>
      </section>

      {/* Footer with Local SEO */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-gray-300">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/seniors" className="text-gray-300 hover:text-white transition-colors">
                    Seniors (Medicare)
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/indiana-medigap-birthday-rule-2026" className="text-gray-300 hover:text-white transition-colors">
                    2026 Indiana Birthday Rule Guide
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-white transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-white transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP</p>
            <p className="text-sm opacity-90">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
