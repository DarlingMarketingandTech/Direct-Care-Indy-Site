/**
 * Single Source of Truth - Image Asset Library
 *
 * Cloudinary-backed assets (DPC-website folder) are referenced via lib/cloudinary.
 * Local paths remain for assets not yet migrated to Cloudinary.
 */

import { cloudinaryAssets } from "./cloudinary";

export const SITE_ASSETS = {
  clinical: {
    pulmonary: "/images/clinical/pulmonary-clinic.webp",
    ninetyTen: "/images/clinical/ninety-ten-model.svg",
    specialist: cloudinaryAssets.specialistProvider,
    /** Stock photos — infographics crop poorly in aspect-video cards */
    medicalDiagram: "/images/optimized/pharmacy-lab.webp",
    healthcareChart: "/images/optimized/doctor-consultation.webp",
    medicalLaboratory: "/images/optimized/medical-laboratory.webp",
    roundTable: "/images/optimized/round-table.webp",
  },
  marketing: {
    employer: "/images/marketing/trades-90-10.webp",
    hvac: "/images/marketing/hvac-technician.webp",
    seniors: "/images/marketing/senior-healthcare.webp",
    seniorWellness: "/images/optimized/senior-wellness.webp",
    smallBiz: "/images/marketing/small-business-team.webp",
    smallBizOffice: "/images/marketing/small-business-office.webp",
    tradesDiverse: "/images/marketing/trades-diverse.webp",
    employerWellness: "/images/optimized/employer-hero.webp",
  },
  locations: {
    carmel: "/images/optimized/locations/carmel-hero.webp",
    zionsville: "/images/optimized/locations/zionsville-hero.webp",
    fishers: "/images/optimized/locations/fishers-hero.webp",
    geist: "/images/optimized/locations/geist-hero.webp",
    indianaSuburban: "/images/optimized/locations/indiana-suburban-home.webp",
    indianapolisSuburban: "/images/optimized/locations/indianapolis-suburban.webp",
  },
  ui: {
    megaMenu: "/images/ui/mega-menu-overlay.webp",
    texture: "/images/ui/clinical-texture.webp",
    glass: "/images/ui/glass-overlay.svg",
    tealGradient: "/images/ui/teal-gradient.webp",
  },
  providers: {
    jamesPike: cloudinaryAssets.providerJames,
    karinaWhite: cloudinaryAssets.providerKarina,
    chaseKeirn: cloudinaryAssets.providerChase,
  },
  /** Broker lead magnets and employer marketing */
  employers: {
    summaryPreview: "/images/optimized/employer-summary-preview.webp",
    checklistPreview: "/images/optimized/employer-checklist-preview.webp",
    summaryPdf: cloudinaryAssets.employerSummaryPdf,
    checklistPdf: cloudinaryAssets.employerChecklistPdf,
    hero: "/images/optimized/employer-hero.webp",
  },
  blog: {
    medigapBirthdayRule: "/images/marketing/senior-wellness.webp",
    seniorHealthcare: "/images/marketing/senior-healthcare.webp",
  },
  logos: {
    primary: "/images/logos/dci-logo-noears-scaled.png",
    mark: "/images/logos/dci-logo-icon-only.png",
    icon192: "/images/logos/dci-icon-192.png",
    icon512: "/images/logos/dci-icon-512.png",
    wide: cloudinaryAssets.logoWide,
  },
} as const;

/** Full wordmark — navigation and primary branding */
export const SITE_LOGO = {
  src: SITE_ASSETS.logos.primary,
  width: 480,
  height: 100,
  alt: "Direct Care Independence Indy",
} as const;

/** Heart mark only — favicon, footer, and sparse accent use */
export const SITE_LOGO_MARK = {
  src: SITE_ASSETS.logos.mark,
  width: 774,
  height: 535,
  alt: "",
} as const;

/**
 * Helper function to get asset path with type safety
 */
export function getAsset(category: keyof typeof SITE_ASSETS, key: string): string {
  const categoryAssets = SITE_ASSETS[category] as Record<string, string>;
  return categoryAssets[key] || "";
}

/**
 * Type-safe asset access
 */
export type ClinicalAsset = keyof typeof SITE_ASSETS.clinical;
export type MarketingAsset = keyof typeof SITE_ASSETS.marketing;
export type LocationAsset = keyof typeof SITE_ASSETS.locations;
export type UIAsset = keyof typeof SITE_ASSETS.ui;
export type ProviderAsset = keyof typeof SITE_ASSETS.providers;
export type EmployerAsset = keyof typeof SITE_ASSETS.employers;
export type BlogAsset = keyof typeof SITE_ASSETS.blog;
export type LogoAsset = keyof typeof SITE_ASSETS.logos;
