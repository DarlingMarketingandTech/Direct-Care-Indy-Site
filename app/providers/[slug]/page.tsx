import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProfilePageSchema } from "@/components/StructuredData";
import { ProviderBioView } from "@/components/providers/ProviderBioView";
import { getProviderBySlug, PROVIDERS } from "@/lib/data/providers";
import { absoluteUrl } from "@/lib/site";

interface ProviderPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROVIDERS.map((provider) => ({ slug: provider.slug }));
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

  if (!provider) {
    notFound();
  }

  const imageUrl = provider.image.startsWith("http")
    ? provider.image
    : absoluteUrl(provider.image);

  return (
    <>
      <ProfilePageSchema
        name={provider.name}
        credentials={provider.credentials}
        role={provider.role}
        bio={provider.bio}
        specialties={provider.specialties}
        image={imageUrl}
        url={absoluteUrl(`/providers/${provider.slug}`)}
        slug={provider.slug}
      />
      <ProviderBioView provider={provider} />
    </>
  );
}
