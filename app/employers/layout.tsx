import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Employee Health Benefits for Indianapolis Businesses | Direct Care Indy",
  description: "Employee health benefits for Indianapolis trades (HVAC, Landscaping, Auto shops). Save thousands per employee with Direct Primary Care. DOT Physicals, Drug Screens, and full DPC membership available.",
  keywords: [
    "Employee health benefits Indianapolis",
    "Small business DPC Indiana",
    "Indianapolis trade health benefits",
    "HVAC employee healthcare",
    "Landscaping company health insurance",
    "Auto shop employee benefits",
    "Occupational health Indianapolis",
    "DOT Physicals Indianapolis",
    "Business health benefits Indiana"
  ],
  openGraph: {
    title: "Employee Health Benefits for Indianapolis Businesses | Direct Care Indy",
    description: "Protect your crew, not just your bottom line. Employee health benefits that save you money while providing better care.",
    type: "website",
    url: absoluteUrl("/employers")
  },
};

export default function EmployersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

