import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2, TrendingDown, Clock, DollarSign, Heart, Briefcase, Stethoscope } from "lucide-react";
import { LocalBusinessSchema } from "@/components/StructuredData";
import { SharedFooter } from "@/components/SharedFooter";
import { NEIGHBORHOODS, BUSINESS_INFO } from "@/lib/constants";
import WholesaleLabSearch from "@/components/WholesaleLabSearch";
import { SeniorSavingsCalculator } from "@/components/SeniorSavingsCalculator";
import { SITE_ASSETS } from "@/lib/images";

interface NeighborhoodPageProps {
  params: Promise<{
    neighborhood: string;
  }>;
}

export async function generateStaticParams() {
  // Must return an array of objects with the exact param names
  return [
    { neighborhood: 'carmel' },
    { neighborhood: 'zionsville' },
    { neighborhood: 'fishers' },
    { neighborhood: 'geist' }
  ];
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const { neighborhood } = await params;
  const neighborhoodKey = neighborhood.toLowerCase();
  const neighborhoodData = NEIGHBORHOODS[neighborhoodKey as keyof typeof NEIGHBORHOODS];

  if (!neighborhoodData) {
    return {
      title: "Direct Care Indy - Primary Care",
    };
  }

  return {
    title: `${neighborhoodData.name} Primary Care Doctor | Direct Care Indy`,
    description: `${neighborhoodData.hook} ${neighborhoodData.description}`,
    keywords: neighborhoodData.keywords.join(", "),
    openGraph: {
      title: `${neighborhoodData.name} Primary Care | Direct Care Indy`,
      description: neighborhoodData.description,
      type: "website",
    },
  };
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { neighborhood } = await params;
  const neighborhoodKey = neighborhood.toLowerCase();
  const neighborhoodData = NEIGHBORHOODS[neighborhoodKey as keyof typeof NEIGHBORHOODS];

  if (!neighborhoodData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <Link href="/" className="text-teal-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Persona-specific benefits
  const getPersonaBenefits = () => {
    switch (neighborhoodKey) {
      case 'carmel':
        return [
          {
            icon: Stethoscope,
            title: "Complex Chronic Care",
            description: "Specialist-level management of multiple chronic conditions, COPD, and respiratory diseases.",
          },
          {
            icon: DollarSign,
            title: "HSA Tax Efficiency",
            description: "HSA-eligible memberships for Plan G/N Medicare supplement owners. Maximize your tax savings.",
          },
          {
            icon: Clock,
            title: "Longevity Focus",
            description: "Comprehensive preventive care designed to maintain health and independence.",
          },
          {
            icon: CheckCircle2,
            title: "Specialist Access",
            description: "Direct access to board-certified Internal Medicine and Pulmonary Medicine specialist.",
          },
        ];
      case 'zionsville':
        return [
          {
            icon: Heart,
            title: "Pediatric Pulmonary Expertise",
            description: "Specialized care for children with respiratory conditions, asthma, and chronic lung disease.",
          },
          {
            icon: Clock,
            title: "24/7 Direct Access",
            description: "Text Dr. Pike directly via Spruce Health app. No phone tag, instant responses.",
          },
          {
            icon: Stethoscope,
            title: "Family-Centered Care",
            description: "Same-day appointments for the whole family. No waiting weeks for urgent concerns.",
          },
          {
            icon: TrendingDown,
            title: "90% Lab Savings",
            description: "Wholesale lab prices. See our complete directory below.",
          },
        ];
      case 'fishers':
        return [
          {
            icon: Briefcase,
            title: "Employer ROI Calculator",
            description: "Calculate your business savings with our employer health benefits program.",
          },
          {
            icon: DollarSign,
            title: "B2B Occupational Health",
            description: "Workplace health services, DOT physicals, and employee wellness programs.",
          },
          {
            icon: Stethoscope,
            title: "Executive Wellness",
            description: "Comprehensive health management for busy professionals and business owners.",
          },
          {
            icon: Clock,
            title: "Reduced Absenteeism",
            description: "Same-day access means employees get care quickly and return to work faster.",
          },
        ];
      default:
        return [
          {
            icon: Clock,
            title: "Same-Day Appointments",
            description: "Get seen when you need it, not weeks later.",
          },
          {
            icon: DollarSign,
            title: "Transparent Pricing",
            description: "No surprise bills. See exactly what you'll pay.",
          },
          {
            icon: Stethoscope,
            title: "Specialist-Level Care",
            description: "Board-certified in Internal Medicine and Pulmonary Medicine.",
          },
          {
            icon: TrendingDown,
            title: "90% Lab Savings",
            description: "Wholesale lab prices - see our complete directory.",
          },
        ];
    }
  };

  const benefits = getPersonaBenefits();

  return (
    <>
      <LocalBusinessSchema neighborhood={neighborhoodData.name} zipCode={neighborhoodData.zipCode} />
      <div className="min-h-screen bg-background">

        {/* Hero with Dynamic Background */}
        <section className="relative overflow-hidden bg-teal-900 py-20 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={
                neighborhoodKey === 'carmel' ? SITE_ASSETS.locations.carmel :
                neighborhoodKey === 'zionsville' ? SITE_ASSETS.locations.zionsville :
                neighborhoodKey === 'fishers' ? SITE_ASSETS.locations.fishers :
                neighborhoodKey === 'geist' ? SITE_ASSETS.locations.geist :
                SITE_ASSETS.locations.indianapolisSuburban
              }
              alt={`${neighborhoodData.name} neighborhood`}
              fill
              className="object-cover"
              priority
            />
            {/* Teal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/90 via-teal-700/80 to-teal-800/90" />
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Direct Primary Care for {neighborhoodData.name} Families
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-90 font-semibold">
                {neighborhoodData.hook}
              </p>
              <p className="text-lg mb-8 opacity-80">
                {neighborhoodData.proximity}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/join"
                  className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  Join Direct Care Indy
                </Link>
                <a
                  href="tel:+13179566288"
                  className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (317) 956-6288
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Persona-Specific Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                Why {neighborhoodData.name} {neighborhoodData.persona} Choose Direct Care Indy
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                {neighborhoodData.focus}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Highlights */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                What Makes Us Different for {neighborhoodData.name} Families
              </h2>
              <div className="space-y-4">
                {neighborhoodData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Specialist-Level Care, Primary Care Prices
              </h2>
              <div className="bg-white/10 rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">
                    {BUSINESS_INFO.physician}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {BUSINESS_INFO.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-lg text-gray-300">
                    Dr. Pike brings specialist-level expertise to primary care, particularly for complex conditions like COPD, chronic lung disease, and respiratory conditions. {neighborhoodData.name} families get the same level of care they&apos;d receive from a specialist, without the specialist price tag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Savings Calculator - For Zionsville and Carmel */}
        {(neighborhoodKey === 'zionsville' || neighborhoodKey === 'carmel') && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Calculate Your {neighborhoodKey === 'carmel' ? 'Medigap Birthday Rule' : 'Medicare'} Savings
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    {neighborhoodKey === 'carmel'
                      ? 'See how much you can save by combining Medigap plan switching with HSA-eligible Direct Primary Care'
                      : 'See how much you can save with HSA-eligible Direct Primary Care for Medicare beneficiaries'}
                  </p>
                </div>
                <SeniorSavingsCalculator />
              </div>
            </div>
          </section>
        )}

        {/* Wholesale Lab Directory */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
                See Your Lab Savings
              </h2>
              <p className="text-center text-gray-600 mb-8 text-lg">
                Search our complete directory of lab tests. Compare hospital prices to our wholesale rates.
              </p>
              <WholesaleLabSearch />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Experience Better Healthcare?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join {neighborhoodData.name} families who have made the switch to Direct Care Indy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block"
              >
                Start Your Membership
              </Link>
              <a
                href="tel:+13179566288"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <SharedFooter />
      </div>
    </>
  );
}
