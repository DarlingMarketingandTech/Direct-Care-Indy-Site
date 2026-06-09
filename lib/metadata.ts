import type { Metadata } from "next";
import { SITE_URL, IS_DEMO, absoluteUrl } from "@/lib/site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Direct Care Indy Demo | Employer DPC Strategy",
    template: "%s | Direct Care Indy Demo",
  },
  description:
    "Demo website concept for Direct Care Indy with employer Direct Primary Care education, membership paths, and B2B healthcare benefit positioning.",
  keywords: [
    "Direct Primary Care Indianapolis",
    "HSA eligible DPC 2026",
    "HSA eligible doctor Indianapolis",
    "DPC for Medicare patients Indy",
    "Pulmonary specialist Direct Primary Care",
    "healthcare for self-employed Indiana",
    "small business health benefits Indy",
    "DPC near me Indianapolis",
    "affordable healthcare Indiana",
    "Dr. James Pike Indianapolis",
    "wholesale labs Indianapolis",
    "no insurance doctor Indianapolis",
    "healthcare missing middle",
    "HVAC healthcare benefits",
    "contractor health insurance alternative",
    "complex care Indianapolis",
    "Medicare and Direct Primary Care",
    "HSA eligible healthcare Indianapolis",
  ],
  authors: [{ name: "Dr. James D. Pike, D.O." }],
  creator: "Direct Care Indy Demo",
  publisher: "Direct Care Indy Demo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Direct Care Indy Demo",
    title: "Direct Care Indy Demo | Employer DPC Strategy",
    description:
      "A demo site concept focused on employer Direct Primary Care, small business healthcare education, and membership conversion paths.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Care Indy Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Care Indy Demo | Employer DPC Strategy",
    description:
      "Demo concept focused on employer Direct Primary Care and membership conversion paths.",
    images: ["/og-image.jpg"],
  },
  robots: IS_DEMO
    ? {
        index: false,
        follow: false,
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
};

export const partnershipMetadata: Metadata = {
  title: "Health Benefits for Indianapolis Trades | HVAC, Landscaping, Auto",
  description:
    "Direct Primary Care partnership concept for small businesses in Indianapolis, IN 46268. Built for HVAC, landscaping, auto shops, and construction trades.",
  keywords: [
    "small business health benefits Indianapolis",
    "HVAC contractor healthcare",
    "landscaping company health insurance",
    "auto shop employee benefits",
    "construction trade healthcare",
    "affordable employee benefits Indiana",
    "Indianapolis 46268 healthcare",
    "Indianapolis 46268",
    "healthcare 46268",
    "DPC Indianapolis 46268",
    "direct primary care 46268",
  ],
  openGraph: {
    title: "Health Benefits for Indianapolis Trades | Direct Care Indy Demo",
    description:
      "Direct Primary Care partnership concept for small businesses in Indianapolis, IN 46268. Perfect for trades and contractors.",
    url: absoluteUrl("/partnerships"),
  },
};

export const membershipPricingMetadata: Metadata = {
  title: "Membership Pricing | Direct Care Indy",
  description:
    "DirectCare Indy membership pricing from $79/month. Individual, family, and senior plans with transparent everyday care — no co-pays for included visits.",
  keywords: [
    "DPC membership pricing Indianapolis",
    "affordable primary care membership",
    "family DPC plan Indianapolis",
    "senior direct primary care",
    "transparent healthcare pricing",
    "no surprise medical bills",
  ],
  openGraph: {
    title: "Membership Pricing | Direct Care Indy",
    description:
      "Individual memberships from $79/mo. Family plans starting at $200/mo. Senior adult memberships at $119/mo.",
    url: absoluteUrl("/membership"),
  },
};

/** @deprecated Use membershipPricingMetadata — /pricing redirects to /membership */
export const pricingMetadata = membershipPricingMetadata;

export const servicesMetadata: Metadata = {
  title: "Direct Primary Care Services | Chronic Disease Management",
  description:
    "Comprehensive primary care services including chronic disease management, wellness visits, wholesale labs, and direct physician access in Indianapolis.",
  keywords: [
    "primary care services Indianapolis",
    "chronic disease management",
    "wellness visits Indianapolis",
    "preventive care Indiana",
  ],
};

export const whatIsDpcMetadata: Metadata = {
  title: "What Is DPC? | Member Benefits Explained | Direct Care Indy",
  description:
    "Member benefits explained — affordable plans, everyday primary care, wellness exams, telehealth, in-clinic pharmacy discounts, and transparent pricing at DirectCare Indy.",
  keywords: [
    "what is direct primary care",
    "DPC member benefits",
    "DPC FAQ",
    "DPC vs insurance",
    "HSA eligible DPC",
    "DirectCare Indy membership",
  ],
  openGraph: {
    title: "What Is DPC? | Member Benefits Explained",
    description:
      "How Direct Primary Care works in real life — predictable pricing, everyday care, follow-up support, and FAQs.",
    url: absoluteUrl("/what-is-dpc"),
  },
};

/** @deprecated /faq redirects to /what-is-dpc#faq */
export const faqMetadata = whatIsDpcMetadata;
