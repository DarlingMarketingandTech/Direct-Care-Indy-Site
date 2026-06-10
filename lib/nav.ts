export const PATIENT_PORTAL_URL = "https://directcareindy.hint.com/login";

export const mainNav = [
  { label: "Membership Pricing", href: "/membership" },
  { label: "For Employers", href: "/employers" },
  { label: "What Is DPC?", href: "/what-is-dpc" },
  { label: "Our Team", href: "/providers" },
  { label: "Location & Contact", href: "/contact" },
] as const;

/** Footer-only links — not shown in the main header nav */
export const footerNav = [
  { label: "For Brokers", href: "/brokers" },
] as const;

export type MobileNavLink = {
  label: string;
  href: string;
  external?: boolean;
};

/** Primary destinations in the mobile bottom bar (icons + labels) */
export const mobileBottomNav: readonly MobileNavLink[] = [
  { label: "Membership Pricing", href: "/membership" },
  { label: "For Employers", href: "/employers" },
  { label: "What Is DPC?", href: "/what-is-dpc" },
  { label: "Patient Login", href: PATIENT_PORTAL_URL, external: true },
];

/** Full mobile menu — mirrors desktop nav + Patient Login */
export const mobileFullMenuLinks: readonly MobileNavLink[] = [
  ...mainNav,
  { label: "Patient Login", href: PATIENT_PORTAL_URL, external: true },
];
