import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers | Direct Care Indy",
  description:
    "A practical healthcare benefit for Indianapolis employers. Give your team direct primary care access without a complicated benefits overhaul.",
  keywords: [
    "employer direct primary care Indianapolis",
    "small business healthcare benefit Indiana",
    "employee DPC membership",
    "employer-paid primary care",
    "high-deductible plan supplement",
    "self-funded employer primary care",
  ],
  openGraph: {
    title: "For Employers | Direct Care Indy",
    description:
      "Give your employees faster, simpler access to everyday healthcare. Talk about employer plans or download the employer summary.",
    type: "website",
    url: absoluteUrl("/employers"),
  },
};

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

