import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NinetyTenSwitcher } from "@/components/NinetyTenSwitcher";

const DEFAULT_HIGHLIGHTS = [
  "Unlimited sick visits, wholesale labs, and direct texting with your provider.",
  "Catastrophic layer stays simple: pair with an HDHP or wraparound of your choice.",
  "Patient portal and Hint enrollment live on their own page — no PDFs or phone tag.",
] as const;

type NinetyTenModelSectionProps = {
  exploreHref?: string;
  exploreLabel?: string;
  highlights?: readonly string[];
};

export function NinetyTenModelSection({
  exploreHref = "/how-it-works",
  exploreLabel = "Explore the model",
  highlights = DEFAULT_HIGHLIGHTS,
}: NinetyTenModelSectionProps) {
  return (
    <div className="content-container">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h3 className="heading-2 mb-4">Understand the 90/10 model in 60 seconds.</h3>
        <p className="body-large text-muted-foreground">
          Membership covers the 90% of care you actually use. Catastrophic insurance handles the
          rare 10%.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div className="section-card">
          <NinetyTenSwitcher />
        </div>
        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 text-foreground">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
              <span>{item}</span>
            </div>
          ))}
          <Link
            href={exploreHref}
            className="inline-flex items-center gap-2 font-semibold text-secondary underline underline-offset-4"
          >
            {exploreLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
