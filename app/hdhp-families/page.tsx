import { permanentRedirect } from "next/navigation";

/**
 * Legacy persona route — HDHP + DPC pairing is covered on /wraparound without savings guarantees.
 */
export default function HDHPFamiliesPage() {
  permanentRedirect("/wraparound");
}
