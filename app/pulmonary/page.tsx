import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Stethoscope, TrendingUp, Users, Activity, BarChart3, Phone } from "lucide-react";
import { SITE_ASSETS } from "@/lib/images";
import { GlobalHealthChart } from "@/components/GlobalHealthChart";
import { NinetyTenSwitcher } from "@/components/NinetyTenSwitcher";
import IndyBreathEasy from "@/components/IndyBreathEasy";
import { PhysicianOversightBadge } from "@/components/PhysicianOversightBadge";
export const metadata: Metadata = {
  title: "Pulmonary Specialist Oversight | Direct Care Indy - Dr. James D. Pike, D.O.",
  description: "Board-certified Pulmonary Medicine specialist Dr. Pike provides specialist-level oversight for all Direct Care Indy patients. Learn how the Round Table model ensures diagnostic security and complex care management.",
  keywords: [
    "Pulmonary Medicine specialist",
    "Board-certified pulmonologist",
    "COPD specialist Indianapolis",
    "Respiratory medicine",
    "Specialist oversight primary care",
    "Round Table model",
    "Complex care management"
  ],
  openGraph: {
    title: "Pulmonary Specialist Oversight | Direct Care Indy",
    description: "Board-certified Pulmonary Medicine specialist providing specialist-level oversight for primary care patients.",
    type: "website",
  },
};

export default function PulmonaryPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Parallax Hero Section */}
        <section className="relative h-[600px] overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
            <Image
              src={SITE_ASSETS.clinical.specialist}
              alt="Specialist Team - Pulmonary Medicine"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/75 to-primary/90" />
          </div>

          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center text-white">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <Shield className="h-8 w-8 text-teal-400" />
                    <h1 className="heading-1-inverse text-white">
                      Pulmonary Specialist Oversight
                    </h1>
                  </div>
                  <p className="body-large-inverse mb-6 text-white/90">
                    Dr. James D. Pike, D.O., FCCP, FACP brings board-certified Pulmonary Medicine expertise directly to your primary care through our Round Table model.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-400/30">
                      <span className="font-semibold">Board Certified</span>
                    </div>
                    <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-400/30">
                      <span className="font-semibold">FCCP, FACP</span>
                    </div>
                    <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-400/30">
                      <span className="font-semibold">Round Table Model</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 90/10 Split Visual */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  The 90/10 Specialist Oversight Model
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Dr. Pike&apos;s specialist oversight (the 10%) provides diagnostic security for the PAs&apos; daily care (the 90%)
                </p>
              </div>
              <NinetyTenSwitcher />
            </div>
          </div>
        </section>

        {/* Air Quality vs. Patient Health Chart */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-teal-400" />
                  <h2 className="text-3xl font-bold text-white">
                    Real-Time Health Data Dashboard
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Global health benchmarks validate the 90/10 routine care model and demonstrate the value of specialist oversight for complex conditions.
                </p>
              </div>

              {/* Parallax Data Layering */}
              <div className="relative">
                {/* Background with specialist image */}
                <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
                  <Image
                    src={SITE_ASSETS.clinical.specialist}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Chart Content */}
                <div className="relative z-10 bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <GlobalHealthChart />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indy Breath Easy Dashboard */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Indianapolis Air Quality Monitoring
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Real-time air quality data to help manage respiratory conditions
                </p>
              </div>
              <IndyBreathEasy />
            </div>
          </div>
        </section>

        {/* Round Table Philosophy */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                  <h2 className="text-3xl font-bold text-primary">
                    The Round Table Model
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  How specialist oversight ensures diagnostic security for every patient
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border-l-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="w-6 h-6 text-teal-600" />
                    <h3 className="text-xl font-bold text-primary">The 90%: Daily Care</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    PAs handle routine visits, chronic disease management, and same-day sick appointments. This represents 90% of healthcare needs.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <Activity className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Included sick visits based on your plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Activity className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Chronic disease management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Activity className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Preventive care & screenings</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-primary">The 10%: Specialist Oversight</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Dr. Pike provides board-certified specialist oversight for complex cases, ensuring diagnostic security and appropriate care escalation.
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Complex case review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Diagnostic security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Specialist-level expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Physician Oversight Badge */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <PhysicianOversightBadge />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Experience Specialist-Level Primary Care
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Direct Care Indy and get 24/7 access to expert clinicians with board-certified Pulmonary Medicine specialist oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center min-h-[44px] min-w-[120px]"
              >
                Join Now
              </Link>
              <a
                href="tel:+13179566288"
                className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

