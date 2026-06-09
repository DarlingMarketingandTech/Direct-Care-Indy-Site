import type { Metadata } from "next";
import { EmployerVirtualIntroDemo } from "@/components/employers/EmployerVirtualIntroDemo";
import { EMPLOYER_VIRTUAL_INTRO, EMPLOYER_VIRTUAL_INTRO_PATH } from "@/lib/content/employers";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule a Virtual Intro Call | For Employers | Direct Care Indy",
  description:
    "Book a 30-minute virtual introductory call with a Direct Care Indy provider to explore whether employer plans are a good fit for your team.",
  openGraph: {
    title: "Schedule a Virtual Introductory Call | Direct Care Indy",
    description: EMPLOYER_VIRTUAL_INTRO.description,
    type: "website",
    url: absoluteUrl(EMPLOYER_VIRTUAL_INTRO_PATH),
  },
};

export default function EmployerVirtualIntroPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding pt-28">
        <div className="content-container">
          <EmployerVirtualIntroDemo />
        </div>
      </section>
    </div>
  );
}
