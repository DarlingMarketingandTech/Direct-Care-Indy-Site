const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "djhqowk67";

export function cldImage(publicId: string, width = 1200, effects = "") {
  const transform = effects
    ? `f_auto,q_auto,w_${width},${effects}`
    : `f_auto,q_auto,w_${width}`;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transform}/${publicId}`;
}

/** Force-download URL for PDF or document assets stored in Cloudinary. */
export function cldDownload(publicId: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/fl_attachment/${publicId}`;
}

export const cloudinaryAssets = {
  // ── Branding (DPC-website/branding-assets) — verified MCP 2026-06-08 ──
  logoWide: cldImage("dci-logo-noears-scaled", 640, "e_background_removal"),

  // ── Team (DPC-website/meet-the-team) — verified MCP 2026-06-08 ──
  providerJames: cldImage("Dr.-James-Pike", 500),
  providerChase: cldImage("chase-keirn", 500),
  providerKarina: cldImage("Karina-White-Butler-Photo-1", 500),
  // Maddie Klinger: not in Cloudinary (meet-the-team search returned 3 images only)

  // ── Brokers / employers (DPC-website/one-page-employer-summary, employer-dpc-buyer-checklist) ──
  employerSummary1: cldImage("One-Page_Employer_Summary1", 900),
  employerChecklist1: cldImage("Employer_DPC_Buyer_Checklist1", 900),
  employerSummaryPdf: cldDownload("One-Page_Employer_Summary1"),
  employerChecklistPdf: cldDownload("Employer_DPC_Buyer_Checklist1"),
  // Additional employer collateral pages (not wired to SITE_ASSETS yet)
  employerSummary2: cldImage("One-Page_Employer_Summary2", 900),
  employerSummary3: cldImage("One-Page_Employer_Summary3", 900),
  employerSummary4: cldImage("One-Page_Employer_Summary4", 900),
  employerChecklist2: cldImage("Employer_DPC_Buyer_Checklist2", 900),
  employerChecklist3: cldImage("Employer_DPC_Buyer_Checklist3", 900),
  employerChecklist4: cldImage("Employer_DPC_Buyer_Checklist4", 900),

  // ── Employers audience — marketing hero (DPC-website/educational-images) ──
  dpcFrontDoor: cldImage(
    "DPC_-_a_smarter_front_door_for_small_business_healthcare",
    1200
  ),

  // ── Clinical / educational infographics (DPC-website/educational-images) — verified visual match ──
  careModelDiagram: cldImage("continuous_Care_with_Your_Deticated_Provider", 1200),
  carePathsChart: cldImage("two_paths_to_getting_care_when_your_sick", 1200),
  dpcComparisonMatrix: cldImage("where_direct_care_fits", 1200),
  smallBusinessDpcInfographic: cldImage(
    "Modern_Healthcare_Strategies_Direct_Primary_Care_for_Small_Business",
    900
  ),

  // ── Clinical stock photos (DPC-website/stock-images) — verified visual match ──
  specialistProvider: cldImage("L8tWZT4CcVQ", 1200),
  labProcedure: cldImage("ufwC2cmbaaI", 1200),
} as const;
