import { permanentRedirect } from "next/navigation";

/**
 * Legacy persona route — content is fully covered by /membership and /what-is-dpc.
 * Permanent redirect preserves any inbound links without serving non-compliant copy.
 */
export default function UninsuredPage() {
  permanentRedirect("/membership");
}
