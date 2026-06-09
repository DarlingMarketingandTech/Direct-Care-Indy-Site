import Link from "next/link";
import { Phone, Mail, MapPin, Heart, Syringe, Microscope, Pill, Scissors, Activity } from "lucide-react";
import { WellnessLab } from "@/components/WellnessLab";
import { PersonalizedHealthChecklist } from "@/components/PersonalizedHealthChecklist";
import WholesaleLabSearch from "@/components/WholesaleLabSearch";
import { WellnessSection } from "@/components/WellnessWidgets";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Included Sick Visits",
      description: "See Dr. Pike for included sick visits based on your membership plan. No co-pays on covered visits when available. Same-day or next-day appointments may be available.",
    },
    {
      icon: Activity,
      title: "Chronic Disease Management",
      description: "Comprehensive care for diabetes, hypertension, asthma, and other chronic conditions with regular monitoring and medication management.",
    },
    {
      icon: Microscope,
      title: "Preventive Care & Wellness Exams",
      description: "Annual physicals, health screenings, and preventive care to keep you healthy and catch issues early.",
    },
    {
      icon: Scissors,
      title: "Minor Procedures",
      description: "Stitches, wound care, cryotherapy, skin biopsies, and other in-office procedures without the ER bill.",
    },
    {
      icon: Syringe,
      title: "Injections & Immunizations",
      description: "Flu shots, travel vaccines, allergy injections, and vitamin B12 shots available at wholesale prices.",
    },
    {
      icon: Pill,
      title: "Wholesale Pharmacy Access",
      description: "Get common medications at true wholesale prices. Antibiotics for ~$3, generic statins for ~$5, and more.",
    },
  ];

  const differentiators = [
    {
      title: "Wholesale Labs",
      price: "$5-$12",
      examples: "Lipid Panel ($5), A1C ($8), Comprehensive Metabolic Panel ($7)",
      savings: "Discounted lab pricing compared to typical retail rates",
    },
    {
      title: "Wholesale Pharmacy",
      price: "$3-$8",
      examples: "Amoxicillin ($3), Lisinopril ($3.50), Metformin ($4)",
      savings: "Discounted in-clinic pharmacy pricing when medications are available",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-background py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4 text-foreground text-glow">Comprehensive Primary Care Services</h2>
          <p className="text-xl max-w-2xl mx-auto text-foreground/70">
            Everything you need for the 90% of healthcare that keeps you healthy and active.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="section-card">
                  <div className="bg-secondary text-secondary-foreground rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-card-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Wellness Suite */}
      <WellnessSection />

      {/* Wellness Lab Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Personal Wellness Lab</h3>
              <p className="text-xl text-foreground/70">
                Calculate your BMI, ideal weight, and metabolic health metrics
              </p>
            </div>
            <WellnessLab />
          </div>
        </div>
      </section>

      {/* Personalized Health Recommendations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Personalized Health Recommendations</h3>
              <p className="text-xl text-foreground/70">
                Get evidence-based screening recommendations based on your age and sex
              </p>
            </div>
            <PersonalizedHealthChecklist />
          </div>
        </div>
      </section>

      {/* Wholesale Diagnostics Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4 text-center">
              Wholesale Diagnostics
            </h3>
            <p className="text-foreground/70 text-center text-lg mb-8">
              Search our complete directory of lab tests. See exactly how much you&apos;ll save compared to Indianapolis hospital rates.
            </p>
            <WholesaleLabSearch />
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Game-Changing Differentiators
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="bg-secondary bg-opacity-10 p-8 rounded-lg border-2 border-secondary">
                <h4 className="text-2xl font-bold text-primary mb-2">
                  {diff.title}
                </h4>
                <div className="text-4xl font-bold text-secondary mb-4">
                  {diff.price}
                </div>
                <p className="text-gray-700 mb-3">
                  <strong>Examples:</strong> {diff.examples}
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ {diff.savings}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPC Stack Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Traditional Insurance vs. The DPC Stack
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="overflow-auto rounded-lg shadow-lg border border-border" style={{ WebkitOverflowScrolling: 'touch' }}>
              <table className="w-full bg-card" style={{ minWidth: '640px' }}>
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-3 md:px-6 py-4 text-left font-semibold whitespace-nowrap">Feature</th>
                    <th className="px-3 md:px-6 py-4 text-left font-semibold whitespace-nowrap">Traditional Insurance</th>
                    <th className="px-3 md:px-6 py-4 text-left font-semibold whitespace-nowrap">The DPC Stack</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-3 md:px-6 py-4 font-semibold whitespace-nowrap">Strategy</td>
                    <td className="px-3 md:px-6 py-4">Relies on insurance for everything</td>
                    <td className="px-3 md:px-6 py-4 text-secondary font-medium">
                      Separates &quot;Day-to-day&quot; from &quot;Emergency&quot;
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-3 md:px-6 py-4 font-semibold whitespace-nowrap">Out-of-pocket per visit</td>
                    <td className="px-3 md:px-6 py-4">$150–$200 until deductible met</td>
                    <td className="px-3 md:px-6 py-4 text-secondary font-bold">
                      $0 per visit. Flat membership.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 md:px-6 py-4 font-semibold whitespace-nowrap">Wait Time</td>
                    <td className="px-3 md:px-6 py-4">3-week wait; 4 hours total time</td>
                    <td className="px-3 md:px-6 py-4 text-secondary font-bold">
                      Same-day text; 20 minutes total time
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-3 md:px-6 py-4 font-semibold whitespace-nowrap">Communication</td>
                    <td className="px-3 md:px-6 py-4">Through office staff only</td>
                    <td className="px-3 md:px-6 py-4 text-secondary font-medium">
                      Direct access to Dr. Pike via text, call, or email
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 md:px-6 py-4 font-semibold whitespace-nowrap">Annual Cost</td>
                    <td className="px-3 md:px-6 py-4">~$7,800 (premium + deductible)</td>
                    <td className="px-3 md:px-6 py-4 text-secondary font-bold">
                      ~$4,068 (catastrophic + DPC)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-foreground/60 text-center mt-3 md:hidden">
              ← Swipe to see full comparison →
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-foreground/70 max-w-xl mx-auto">
              Cost comparisons vary by plan, utilization, and insurance design. Pricing is subject
              to change — call or text DirectCare Indy to confirm current membership pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Experience the Difference</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to explore a simpler primary care experience? Get started with Direct Care Indy today.
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
                  <Link href="/membership" className="text-gray-300 hover:text-white transition-colors">
                    Membership Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
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
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-1">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
