import { permanentRedirect } from "next/navigation";

/**
 * Legacy persona route — senior/Medicare membership and education live on /membership
 * and /what-is-dpc. Medigap-specific content: /blog/indiana-medigap-birthday-rule-2026.
 */
export default function SeniorsPage() {
  permanentRedirect("/membership#membership-plans");
}
