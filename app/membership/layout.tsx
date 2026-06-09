import { membershipPricingMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = membershipPricingMetadata;

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
