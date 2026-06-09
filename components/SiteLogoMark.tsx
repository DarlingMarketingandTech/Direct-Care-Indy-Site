import Image from "next/image";
import { SITE_LOGO_MARK } from "@/lib/images";

type SiteLogoMarkSize = "sm" | "md" | "lg";

const sizeClasses: Record<SiteLogoMarkSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

interface SiteLogoMarkProps {
  size?: SiteLogoMarkSize;
  className?: string;
  /** Set when the mark is the only branding on screen (e.g. offline page) */
  decorative?: boolean;
}

/**
 * Heart-only logo mark. Use sparingly — favicon contexts, footer, offline state.
 */
export function SiteLogoMark({
  size = "sm",
  className = "",
  decorative = true,
}: SiteLogoMarkProps) {
  return (
    <Image
      src={SITE_LOGO_MARK.src}
      alt={decorative ? "" : "Direct Care Indy"}
      width={SITE_LOGO_MARK.width}
      height={SITE_LOGO_MARK.height}
      aria-hidden={decorative}
      className={`shrink-0 object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
