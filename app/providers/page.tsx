import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Users, Shield } from "lucide-react";
import { PROVIDERS, getMedicalDirector, getLeadPAs } from "@/lib/data/providers";
import { RoundTableOverview } from "@/components/RoundTableOverview";
import { SITE_ASSETS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Meet Our Team | Direct Care Indy - Specialist-Led Primary Care",
  description: "Meet Dr. James D. Pike, D.O., FCCP, FACP and our team of expert Physician Assistants. Specialist-level oversight with high-access primary care in Indianapolis.",
  keywords: "Indianapolis doctor, primary care physician, PA-C, specialist primary care, Direct Care Indy team",
  openGraph: {
    title: "Meet Our Team | Direct Care Indy",
    description: "Specialist-led primary care with high-access PAs. Meet Dr. Pike and our expert team.",
    type: "website",
  },
};

export default function ProvidersPage() {
  const medicalDirector = getMedicalDirector();
  const leadPAs = getLeadPAs();

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-teal-900 py-20 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.ui.tealGradient}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-teal-800/90 via-primary/85 to-teal-900/90" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-1-inverse mb-6 text-white">
              Meet Your Care Team
            </h1>
            <p className="body-large-inverse mb-4 text-white/90">
              Specialist-led primary care with high-access clinicians
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our &ldquo;Round Table&rdquo; model combines 24/7 direct access to expert PAs with weekly specialist oversight from Dr. Pike—bringing hospital-grade expertise to your everyday healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Round Table Overview */}
      <RoundTableOverview />

      {/* Parallax Specialist Section */}
      <section className="relative h-[600px] overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_ASSETS.clinical.specialist}
            alt="Specialist Team"
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
                <h2 className="heading-2-inverse mb-4 text-white">Physician-Led Clinical Excellence</h2>
                <p className="body-large-inverse mb-6 text-white/90">
                  Dr. Pike&apos;s board-certified oversight ensures every member receives specialist-level diagnostic security through our Round Table model.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-400/30">
                    <span className="font-semibold">Board Certified</span>
                  </div>
                  <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-400/30">
                    <span className="font-semibold">Specialist Oversight</span>
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

      {/* Medical Director */}
      {medicalDirector && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 px-6 py-3 rounded-full mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="text-xl font-bold text-blue-400">Medical Director</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialist Oversight</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={medicalDirector.image}
                      alt={`${medicalDirector.name}, ${medicalDirector.credentials}`}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">
                      {medicalDirector.name}
                    </h3>
                    <p className="text-xl text-teal-600 font-semibold mb-4">
                      {medicalDirector.credentials}
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {medicalDirector.bio}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {medicalDirector.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-teal-600 mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/providers/${medicalDirector.slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition-all min-h-[44px] min-w-[120px]"
                    >
                      View Full Bio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lead PAs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 px-6 py-3 rounded-full mb-4">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-xl font-bold text-teal-400">High-Access Primary Care Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Primary Care Clinicians</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our expert PAs provide 24/7 direct access via text, same-day appointments, and comprehensive primary care—with weekly specialist oversight from Dr. Pike.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadPAs.map((pa) => (
                <div
                  key={pa.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={pa.image}
                      alt={`${pa.name}, ${pa.credentials}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1 text-gray-900">
                      {pa.name}
                    </h3>
                    <p className="text-lg text-teal-600 font-semibold mb-4">
                      {pa.credentials}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {pa.bio}
                    </p>
                    <Link
                      href={`/providers/${pa.slug}`}
                      className="inline-flex items-center justify-center w-full bg-teal-600 hover:bg-teal-500 text-white px-4 py-3 rounded-lg font-semibold transition-all min-h-[44px]"
                    >
                      View Full Bio
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Experience Specialist-Led Primary Care?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Direct Care Indy and get 24/7 access to expert clinicians with specialist oversight.
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
              (317) 956-6288
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

