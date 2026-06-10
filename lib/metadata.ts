import type { Metadata } from "next";
import { SITE_URL, IS_DEMO, absoluteUrl } from "@/lib/site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Direct Care Indy | Direct Primary Care Membership in Indianapolis",
    template: "%s | Direct Care Indy",
  },
  description:
    "Direct Primary Care membership in Indianapolis — transparent pricing, same- or next-day appointments when available, and employer healthcare benefit options. DPC is not insurance.",
  keywords: [
    "Direct Primary Care Indianapolis",
    "DPC membership Indianapolis",
    "employer healthcare benefits Indy",
    "HSA eligible DPC 2026",
    "DPC for Medicare patients Indy",
    "small business health benefits Indy",
    "affordable primary care membership Indiana",
    "Dr. James Pike Indianapolis",
    "family direct primary care Indianapolis",
    "senior direct primary care Indianapolis",
  ],
  authors: [{ name: "Dr. James D. Pike, D.O." }],
  creator: "Direct Care Indy",
  publisher: "Direct Care Indy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Direct Care Indy",
    title: "Direct Care Indy | Direct Primary Care Membership in Indianapolis",
    description:
      "Membership-based primary care in Indianapolis with transparent pricing, employer benefit options, and audience-specific paths for the right next step.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Care Indy — Direct Primary Care in Indianapolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Care Indy | Direct Primary Care Membership in Indianapolis",
    description:
      "Membership-based primary care in Indianapolis — individual, family, and senior plans plus employer healthcare options.",
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

export const homeMetadata: Metadata = {
  title: "Direct Primary Care Membership in Indianapolis",
  description:
    "Explore membership plans, employer healthcare options, and the best next step for individuals, families, and local teams at Direct Care Indy in Indianapolis.",
  openGraph: {
    title: "Direct Care Indy | Direct Primary Care in Indianapolis",
    description:
      "Choose the care path that fits your situation, compare membership plans, and explore employer options with Direct Care Indy.",
    url: absoluteUrl("/"),
  },
};

export const partnershipMetadata: Metadata = {
  title: "Health Benefits for Indianapolis Trades | HVAC, Landscaping, Auto",
  description:
    "Direct Primary Care partnerships for small businesses in Indianapolis, IN 46268. Built for HVAC, landscaping, auto shops, and construction trades.",
  keywords: [
    "small business health benefits Indianapolis",
    "HVAC contractor healthcare",
    "landscaping company health insurance",
    "auto shop employee benefits",
    "construction trade healthcare",
    "affordable employee benefits Indiana",
    "Indianapolis 46268 healthcare",
    "DPC Indianapolis 46268",
    "direct primary care 46268",
  ],
  openGraph: {
    title: "Health Benefits for Indianapolis Trades | Direct Care Indy",
    description:
      "Direct Primary Care partnerships for small businesses in Indianapolis, IN 46268 — practical care access for trades and contractors.",
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

export const contactMetadata: Metadata = {
  title: "Location & Contact",
  description:
    "Visit Direct Care Indy at 7911 N. Michigan Rd., Indianapolis, IN 46268. Call, text, or email for membership intros, employer conversations, or broker partnership discussions.",
  openGraph: {
    title: "Location & Contact | Direct Care Indy",
    description:
      "Find our Michigan Rd clinic, hours, and contact options. Call (317) 956-6288, text, or message our team.",
    url: absoluteUrl("/contact"),
  },
};

export const employersMetadata: Metadata = {
  title: "For Employers",
  description:
    "A practical healthcare benefit for Indianapolis employers. Direct Primary Care may help improve everyday care access alongside major medical coverage — not as insurance.",
  openGraph: {
    title: "For Employers | Direct Care Indy",
    description:
      "Explore employer-paid, shared, and voluntary DPC options for teams in Indianapolis.",
    url: absoluteUrl("/employers"),
  },
};

export const individualsMetadata: Metadata = {
  title: "Direct Primary Care for Individuals in Indianapolis | DirectCare Indy",
  description:
    "See how DirectCare Indy helps adults understand individual membership, local primary care access, and practical next steps for everyday care.",
  openGraph: {
    title: "Direct Primary Care for Individuals in Indianapolis | DirectCare Indy",
    description:
      "Explore individual membership, local clinic access, and transparent pricing guidance at DirectCare Indy.",
    url: absoluteUrl("/individuals"),
  },
};

export const familiesMetadata: Metadata = {
  title: "Direct Primary Care for Families in Indianapolis | DirectCare Indy",
  description:
    "See how DirectCare Indy helps busy households understand family membership, local primary care access, and what to do when someone in the house gets sick.",
  openGraph: {
    title: "Direct Primary Care for Families in Indianapolis | DirectCare Indy",
    description:
      "Explore family membership, local clinic access, and practical next steps for busy households at DirectCare Indy.",
    url: absoluteUrl("/families"),
  },
};

export const brokersMetadata: Metadata = {
  title: "For Brokers",
  description:
    "Broker resources for pairing Direct Care Indy DPC with HDHP, level-funded, and self-funded employer plans in Indianapolis.",
  openGraph: {
    title: "For Brokers | Direct Care Indy",
    description:
      "Download employer summary and buyer checklist PDFs. DPC as a local primary care layer — not insurance.",
    url: absoluteUrl("/brokers"),
  },
};
