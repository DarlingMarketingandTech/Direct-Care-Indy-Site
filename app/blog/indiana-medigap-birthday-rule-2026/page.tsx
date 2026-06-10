import Link from "next/link";
import Image from "next/image";
import { Calendar, ShieldCheck, DollarSign, Phone } from "lucide-react";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";
import { SITE_ASSETS } from "@/lib/images";
import { MEMBERSHIP_PLANS } from "@/lib/content/membership-pricing";

const seniorPlan = MEMBERSHIP_PLANS.find((plan) => plan.id === "senior");
const seniorMembershipPriceLabel = seniorPlan
  ? `${seniorPlan.monthlyPrice}${seniorPlan.priceNote}`
  : "$119/month";
const hsaApproved = process.env.NEXT_PUBLIC_HSA_APPROVED === "true";

export default function BirthdayRuleBlog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <article className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-01-01">January 1, 2026</time>
                <span>•</span>
                <span>Indianapolis, IN</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 hero-text-shadow">
                The 2026 Indiana Birthday Rule: What Indianapolis Seniors Should Know
              </h1>
              <p className="text-xl text-muted-foreground">
                A new state law (HEA 1226) allows many Medicare beneficiaries to switch Medigap plans during their birthday month—without medical underwriting. Here&apos;s how that window may work alongside Direct Primary Care as a complement to your Medicare coverage. Individual results vary.
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden bg-muted relative h-96 w-full shadow-lg border border-border">
              <Image
                src={SITE_ASSETS.blog.medigapBirthdayRule}
                alt="Indianapolis senior reviewing healthcare paperwork at home"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              />
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-foreground mb-6">
                Starting January 1, 2026, Indiana seniors have a new option to review their Medicare Supplement coverage: the &quot;Medigap Birthday Rule&quot; (House Enrolled Act 1226). If you&apos;re 65 or older and your birthday falls in January, you may be in a 60-day Guaranteed Issue window where you can switch Medicare Supplement plans without answering health questions—depending on your current plan and carrier.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">What is the Indiana Birthday Rule?</h2>
              <p className="text-foreground mb-4">
                The Birthday Rule allows Medicare beneficiaries to switch to a Medigap plan of equal or lesser coverage during their birthday month and the following 30 days—without medical underwriting. Premiums vary by carrier, plan letter, age, and health history, so comparing options with a licensed broker during this window may help you find coverage that fits your budget.
              </p>
              <p className="text-foreground mb-6">
                <strong>Key point:</strong> This is a time-limited opportunity to compare Medigap plans—not a guarantee of lower premiums. Work with a licensed insurance broker to understand what may be available in your situation.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">How Medicare, DPC, and HSA may work together</h2>

              {/* Stack overview */}
              <div className="bg-card rounded-2xl p-8 border-l-4 border-secondary shadow-lg my-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  A senior healthcare stack to explore
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">1</div>
                    <div>
                      <strong className="text-foreground">Medicare + Medigap:</strong> Designed to cover hospitalizations, major surgeries, and catastrophic events. During the Birthday Rule window, a broker can help you compare plans of equal or lesser coverage.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">2</div>
                    <div>
                      <strong className="text-foreground">Direct Care Indy:</strong> Designed to support day-to-day care, same-day sick visits, and chronic management with Dr. Pike&apos;s pulmonary expertise—all for {seniorMembershipPriceLabel}. Direct Primary Care is not insurance.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">3</div>
                    <div>
                      <strong className="text-foreground">HSA (if eligible):</strong> Depending on your tax situation and IRS guidance, some members may be able to use HSA funds for qualified DPC membership fees. Consult your tax advisor before making changes.
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-6 h-6 text-secondary" />
                    <h4 className="text-xl font-bold text-foreground">What to review with professionals</h4>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Medigap premiums and plan options with a licensed broker</li>
                    <li>Whether DPC membership may fit your day-to-day care needs</li>
                    <li>HSA/FSA eligibility and tax treatment with your tax advisor</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Any cost differences depend on your plans, tax bracket, and care needs. This is not a savings guarantee.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why this matters now</h2>
              <p className="text-foreground mb-4">
                If your birthday is in January 2026, you may be in your 60-day Guaranteed Issue window. This is a limited-time opportunity to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-6">
                <li>Compare Medigap plans with a licensed broker—without health questions in many cases</li>
                <li>Learn whether <Link href="/membership#membership-plans" className="text-secondary underline hover:text-secondary/80">senior Direct Primary Care membership</Link> may complement your Medicare coverage</li>
                <li>Ask your tax advisor whether HSA funds may apply to DPC fees in your situation</li>
                <li>Make informed choices for the year ahead</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Review membership pricing first</h2>
              <p className="text-foreground mb-6">
                Outcomes depend on your Medigap plan, HSA status, and care needs. Use the governed senior
                membership pricing as a starting point, then call or text the clinic to talk through what
                may fit your situation. Direct Primary Care is not insurance.
              </p>

              <div
                className="my-8 rounded-2xl border border-border bg-card p-6 shadow-sm"
                id="calculator"
              >
                <p className="text-foreground mb-4">
                  Senior membership starts at {seniorMembershipPriceLabel}. Pricing and availability are
                  subject to change.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/membership#membership-plans"
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
                  >
                    View membership pricing
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Talk with our local care team
                  </Link>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Understanding HSA eligibility</h2>
              <p className="text-foreground mb-6">
                Federal guidance on HSA treatment of Direct Primary Care memberships has evolved. Depending on your coverage, tax situation, and IRS rules in effect for your plan year, some members may be able to use HSA funds for qualified DPC fees. Consult your tax advisor before relying on HSA funds for membership fees.
              </p>

              {/* HSA Tracker — approval-gated */}
              <div className="my-8" id="hsa-tracker">
                {hsaApproved ? (
                  <HsaStatusTracker />
                ) : (
                  <p className="text-sm text-muted-foreground rounded-lg border border-border bg-muted p-4">
                    HSA/FSA treatment for DPC memberships depends on your plan and tax situation.
                    Consult your tax advisor before using HSA funds for membership fees.
                  </p>
                )}
              </div>

              <p className="text-foreground mb-6">
                Direct Care Indy&apos;s senior tier is {seniorMembershipPriceLabel}—pricing subject to change.
                {hsaApproved
                  ? " When HSA eligibility applies in your situation, you may be able to use pre-tax dollars for qualified fees—consult your tax advisor for your bracket and limits."
                  : " Ask your tax advisor whether HSA funds may apply in your situation."}
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Next steps for January birthday seniors</h2>
              <ol className="list-decimal list-inside space-y-3 text-foreground mb-6">
                <li><strong>Contact a Medigap broker</strong> to compare plans during your Birthday Rule window (you have 60 days from your birthday month)</li>
                <li><strong>Review your current Medigap premium</strong> and identify alternatives with the same or lesser coverage level</li>
                <li><strong>Review Direct Care Indy membership</strong> at {seniorMembershipPriceLabel}—call or text to confirm current pricing</li>
                <li><strong>Consult your tax advisor</strong> about whether HSA funds may apply to DPC fees in your situation</li>
                <li><strong>Make choices that fit your care needs</strong> for the year ahead</li>
              </ol>

              <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Direct Care Indy for seniors?</h2>
              <p className="text-foreground mb-4">
                Dr. James D. Pike, D.O., FCCP, FACP, brings specialized Pulmonary Medicine expertise directly to your primary care. This may be particularly valuable for the 65+ demographic, who often face complex respiratory conditions, COPD, and chronic lung disease. As a Fellow of the American College of Chest Physicians, Dr. Pike provides specialist-level knowledge without the specialist copays, referral delays, or fragmented care coordination that can come with traditional fee-for-service models.
              </p>
              <p className="text-foreground mb-6">
                Combined with the convenience of Direct Primary Care, our {seniorMembershipPriceLabel} senior membership is designed to support complex care management when it may be a fit for your needs.
              </p>

              {/* Call to Action */}
              <div className="bg-primary text-primary-foreground rounded-xl p-8 my-8 text-center border border-border">
                <h3 className="text-2xl font-bold mb-4">Talk with our local care team</h3>
                <p className="text-lg mb-6 opacity-90">
                  If your birthday is in January, you may be in your 60-day Medigap review window. Call or text us to learn whether senior DPC membership may complement your Medicare coverage.
                </p>
                <a
                  href="tel:+13179566288"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2 touch-target"
                >
                  <Phone className="w-5 h-5" />
                  (317) 956-6288
                </a>
              </div>

              {/* Compliance Disclaimer */}
              <div className="bg-muted rounded-lg p-6 mt-8 border-l-4 border-border border">
                <p className="text-sm text-foreground">
                  <strong>Disclaimer:</strong> Direct Care Indy is a Direct Primary Care provider, not a Medigap insurer. The &quot;Birthday Rule&quot; applies to Medicare Supplement plans only and is governed by Indiana House Enrolled Act 1226. HSA eligibility depends on your tax situation and applicable IRS guidance—consult your tax advisor. Any cost examples on this page are illustrative; individual results may vary. Consult with a licensed insurance broker for Medigap plan options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
