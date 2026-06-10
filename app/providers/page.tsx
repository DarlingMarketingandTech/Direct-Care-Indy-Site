import { Metadata } from "next";
import { ProvidersView } from "@/components/providers/ProvidersView";

export const metadata: Metadata = {
  title: "Meet Our Team | Direct Care Indy - Specialist-Led Primary Care",
  description:
    "Meet Dr. James D. Pike, D.O., FCCP, FACP and our team of expert Physician Assistants. Specialist-level oversight with high-access primary care in Indianapolis.",
  keywords:
    "Indianapolis doctor, primary care physician, PA-C, specialist primary care, Direct Care Indy team",
  openGraph: {
    title: "Meet Our Team | Direct Care Indy",
    description:
      "Specialist-led primary care with high-access PAs. Meet Dr. Pike and our expert team.",
    type: "website",
  },
};

export default function ProvidersPage() {
  return <ProvidersView />;
}
