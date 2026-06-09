import type { Metadata } from "next";
import { MEMBERSHIP_PLANS } from "@/lib/content/membership-pricing";

const seniorPlan = MEMBERSHIP_PLANS.find((plan) => plan.id === "senior");
const seniorMembershipPriceLabel = seniorPlan
  ? `${seniorPlan.monthlyPrice}${seniorPlan.priceNote}`
  : "$119/month";

export const metadata: Metadata = {
  title: "Senior Care (65+) | Direct Care Indy",
  description: `Medicare-eligible? Your ${seniorMembershipPriceLabel} membership is 100% HSA-eligible as of January 1, 2026. Get pulmonary specialist expertise with Primary Care convenience. HSA eligible doctor Indianapolis, DPC for Medicare patients Indy.`,
  keywords: [
    "HSA eligible doctor Indianapolis",
    "DPC for Medicare patients Indy",
    "Pulmonary specialist Direct Primary Care",
    "Medicare and Direct Primary Care",
    "HSA eligible healthcare Indianapolis",
    "senior healthcare Indianapolis",
    "complex care Indianapolis",
    "COPD care Indianapolis",
    "65+ healthcare Indianapolis"
  ],
};

export default function SeniorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

