import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GraduationCap, Award, Building2, ArrowLeft, CheckCircle2, Stethoscope } from "lucide-react";
import { getProviderBySlug, getMedicalDirector, PROVIDERS } from "@/lib/data/providers";
import { ProfilePageSchema } from "@/components/StructuredData";
import { PhysicianOversightBadge } from "@/components/PhysicianOversightBadge";
import IndyBreathEasy from "@/components/IndyBreathEasy";
import { SITE_ASSETS } from "@/lib/images";
import { absoluteUrl } from "@/lib/site";

interface ProviderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  // Must return an array of objects with the exact param names
  return [
    { slug: 'james-pike' },
    { slug: 'karina-white' },
    { slug: 'maddie-klinger' },
    { slug: 'chase-keirn' }
  ];
}

export async function generateMetadata({ params }: ProviderPageProps): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);

  if (!provider) {
    return {
      title: "Provider Not Found | Direct Care Indy",
    };
  }

  const fullName = `${provider.name}, ${provider.credentials}`;
  const isPhysician = provider.role === "Medical Director";

  return {
    title: `${fullName} | ${provider.role} | Direct Care Indy`,
    description: `${provider.bio} ${isPhysician ? "Specialist-level primary care in Indianapolis." : "High-access primary care with specialist oversight in Indianapolis."}`,
    keywords: `${provider.name}, ${provider.credentials}, Indianapolis, primary care, ${provider.role}, Direct Care Indy${provider.specialties ? `, ${provider.specialties.join(", ")}` : ""}`,
    openGraph: {
      title: `${fullName} | Direct Care Indy`,
      description: provider.bio,
      type: "profile",
      images: [
        {
          url: provider.image.startsWith("http") ? provider.image : absoluteUrl(provider.image),
          width: 800,
          height: 600,
          alt: fullName,
        },
      ],
    },
  };
}

export default async function ProviderPage({ params }: ProviderPageProps) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  const medicalDirector = getMedicalDirector();
  const isPA = provider?.role === "Lead PA";
  const isPhysician = provider?.role === "Medical Director";

  if (!provider) {
    notFound();
  }

  const fullName = `${provider.name}, ${provider.credentials}`;
  const providerUrl = absoluteUrl(`/providers/${provider.slug}`);
  const imageUrl = provider.image.startsWith("http") ? provider.image : absoluteUrl(provider.image);

  return (
    <>
      <ProfilePageSchema
        name={provider.name}
        credentials={provider.credentials}
        role={provider.role}
        bio={provider.bio}
        specialties={provider.specialties}
        image={imageUrl}
        url={providerUrl}
        slug={provider.slug}
      />
      <div className="min-h-screen bg-background">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-teal-900 py-16 text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={SITE_ASSETS.ui.tealGradient}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={isPhysician}
            />
            <div className="absolute inset-0 bg-linear-to-br from-teal-800/90 via-primary/85 to-teal-900/90" />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link
                href="/providers"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors min-h-[44px]"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Team</span>
              </Link>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={provider.image}
                    alt={fullName}
                    fill
                    className="object-cover"
                    priority={isPhysician}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                    <span className="text-sm font-semibold">{provider.role}</span>
                  </div>
                  <h1 className="heading-1-inverse mb-3 text-white">
                    {provider.name}
                  </h1>
                  <p className="text-2xl text-teal-200 font-semibold mb-6">
                    {provider.credentials}
                  </p>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {provider.bio}
                  </p>
                  {isPA && medicalDirector && (
                    <div className="mb-6">
                      <PhysicianOversightBadge />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        {provider.highlights && provider.highlights.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Key Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {provider.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200"
                    >
                      <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Details Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Specialties */}
                {provider.specialties && provider.specialties.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Specialties</h3>
                    </div>
                    <ul className="space-y-2">
                      {provider.specialties.map((specialty, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Education */}
                {provider.education && provider.education.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Education</h3>
                    </div>
                    <ul className="space-y-2">
                      {provider.education.map((edu, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certifications */}
                {provider.certifications && provider.certifications.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
                    </div>
                    <ul className="space-y-2">
                      {provider.certifications.map((cert, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Affiliations */}
                {provider.affiliations && provider.affiliations.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Affiliations</h3>
                    </div>
                    <ul className="space-y-2">
                      {provider.affiliations.map((affiliation, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start gap-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <span>{affiliation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Indy Breath-Easy Dashboard - Only for Dr. Pike (Below Education & Background) */}
        {isPhysician && provider.slug === "james-pike" && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <IndyBreathEasy />
              </div>
            </div>
          </section>
        )}

        {/* Personal Note */}
        {provider.personalNote && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 italic">{provider.personalNote}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Experience {isPhysician ? "Specialist-Level" : "Expert"} Primary Care?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join Direct Care Indy and get {isPhysician ? "direct access to specialist-level care" : "24/7 access to expert clinicians with specialist oversight"}.
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
    </>
  );
}

