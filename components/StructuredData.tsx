import { SITE_ASSETS } from "@/lib/images";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export function OrganizationSchema() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Direct Care Indy",
    "description": "Direct Primary Care practice in Indianapolis providing affordable, transparent healthcare with no insurance hassles.",
    "url": SITE_URL,
    "logo": absoluteUrl("/images/logos/dci-logo-noears-scaled.png"),
    "image": absoluteUrl("/og-image.jpg"),
    "telephone": "+1-317-956-6288",
    "email": "info@directcareindy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9186",
      "longitude": "-86.1836"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$79-$200",
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}

export function PhysicianSchema() {
  const physicianData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "James D. Pike",
    "honorificSuffix": "D.O., FCCP, FACP",
    "jobTitle": "Direct Primary Care Physician",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Direct Care Indy"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "medicalSpecialty": [
      "Internal Medicine",
      "Pulmonary Medicine",
      "Primary Care",
      "Complex Care",
      "Critical Care Medicine"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "American College of Chest Physicians",
        "role": "Fellow (FCCP)"
      },
      {
        "@type": "Organization",
        "name": "American College of Physicians",
        "role": "Fellow (FACP)"
      }
    ],
    "alumniOf": "Osteopathic Medical School",
    "description": "Board-certified physician specializing in Internal Medicine and Pulmonary Medicine, providing Direct Primary Care services in Indianapolis. Expert in complex care management, particularly for seniors (65+) with respiratory conditions, COPD, and chronic lung disease. HSA-eligible Direct Primary Care physician serving Medicare-eligible patients.",
    "knowsAbout": [
      "Pulmonary Medicine",
      "Internal Medicine",
      "Complex Care Management",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Respiratory Medicine",
      "Senior Healthcare",
      "Medicare Coordination",
      "HSA-Eligible Healthcare"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis",
      "addressRegion": "IN"
    },
    "image": absoluteUrl(SITE_ASSETS.providers.jamesPike)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianData) }}
    />
  );
}

export function ServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Direct Primary Care Membership",
    "description": "Monthly membership for everyday primary care with transparent pricing, direct communication, and additional service pricing that varies by plan.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Direct Care Indy"
    },
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis"
    },
    "serviceType": [
      "Direct Primary Care",
      "Chronic Disease Management",
      "Preventive Care",
      "Wholesale Laboratory Services"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Individual Membership",
        "price": "79",
        "priceCurrency": "USD",
        "description": "Individual Direct Primary Care membership for adults ages 18 to 64."
      },
      {
        "@type": "Offer",
        "name": "Family Membership",
        "price": "200",
        "priceCurrency": "USD",
        "description": "Family Direct Primary Care membership for households with dependents ages 12 and up."
      },
      {
        "@type": "Offer",
        "name": "Senior Adults Membership",
        "price": "119",
        "priceCurrency": "USD",
        "description": "Direct Primary Care membership tailored for adults ages 65 and older."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}

export function LocalBusinessSchema({ neighborhood, zipCode }: { neighborhood?: string; zipCode?: string }) {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    "name": "Direct Care Indy",
    "image": absoluteUrl("/og-image.jpg"),
    "description": neighborhood
      ? `Direct Primary Care serving ${neighborhood} families. Specialist-level primary care with included membership visits when available, discounted lab pricing, and direct physician access.`
      : "Direct Primary Care practice in Indianapolis providing affordable, transparent healthcare with no insurance hassles.",
    "url": SITE_URL,
    "telephone": "+1-317-956-6288",
    "email": "info@directcareindy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.9186",
      "longitude": "-86.1836"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$79-$200",
    "areaServed": neighborhood
      ? [
          {
            "@type": "City",
            "name": neighborhood,
            "addressRegion": "IN",
            ...(zipCode && { "postalCode": zipCode })
          },
          {
            "@type": "City",
            "name": "Indianapolis",
            "addressRegion": "IN"
          }
        ]
      : {
          "@type": "City",
          "name": "Indianapolis",
          "addressRegion": "IN"
        },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Direct Primary Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Primary Care Visits",
            "description": "Primary care visits and follow-up support based on the selected membership plan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wholesale Lab Testing",
            "description": "Transparent lab pricing with member discounts that vary by service and plan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chronic Disease Management",
            "description": "Comprehensive management of diabetes, hypertension, and other chronic conditions"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}

export function ProfilePageSchema({
  name,
  credentials,
  role,
  bio,
  specialties,
  image,
  url,
  slug,
}: {
  name: string;
  credentials: string;
  role: string;
  bio: string;
  specialties?: string[];
  image: string;
  url: string;
  slug?: string;
}) {
  const isPhysician = role === "Medical Director";
  const providerType = isPhysician ? "Physician" : "PhysicianAssistant";

  // Map specialties to schema.org MedicalSpecialty format
  // Specifically highlight Pulmonology for Dr. Pike and Chase Keirn for "Lung Specialist Indy" SEO
  const mapSpecialties = (specialties?: string[]): string[] => {
    if (!specialties) return [];

    return specialties.map(spec => {
      // Map to schema.org MedicalSpecialty values
      const specLower = spec.toLowerCase();
      if (specLower.includes("pulmonary") || specLower.includes("pulmonology") || specLower.includes("respiratory")) {
        return "Pulmonology";
      }
      if (specLower.includes("internal medicine")) {
        return "InternalMedicine";
      }
      if (specLower.includes("critical care")) {
        return "CriticalCareMedicine";
      }
      if (specLower.includes("primary care") || specLower.includes("family medicine")) {
        return "PrimaryCare";
      }
      if (specLower.includes("preventive")) {
        return "PreventiveMedicine";
      }
      return spec; // Return original if no mapping found
    });
  };

  const medicalSpecialties = mapSpecialties(specialties);
  const hasPulmonology = medicalSpecialties.some(s => s === "Pulmonology");

  const profileData = {
    "@context": "https://schema.org",
    "@type": providerType,
    "name": `${name} ${credentials}`,
    "jobTitle": role,
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Direct Care Indy"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7911 N. Michigan Rd.",
      "addressLocality": "Indianapolis",
      "addressRegion": "IN",
      "postalCode": "46268",
      "addressCountry": "US"
    },
    "description": bio,
    "image": image.startsWith("http") ? image : absoluteUrl(image),
    "url": url,
    "areaServed": {
      "@type": "City",
      "name": "Indianapolis",
      "addressRegion": "IN"
    },
    ...(medicalSpecialties.length > 0 && {
      "medicalSpecialty": hasPulmonology
        ? ["Pulmonology", ...medicalSpecialties.filter(s => s !== "Pulmonology")]
        : medicalSpecialties
    }),
    // Add additional keywords for lung specialist searches
    ...(hasPulmonology && {
      "knowsAbout": [
        "Pulmonology",
        "Lung Specialist",
        "Respiratory Medicine",
        "COPD",
        "Lung Nodules",
        "Pulmonary Conditions"
      ]
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
    />
  );
}
