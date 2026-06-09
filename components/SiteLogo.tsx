import Image from "next/image";
import Link from "next/link";
import { SITE_LOGO } from "@/lib/images";

type SiteLogoSize = "nav" | "menu";

const sizeClasses: Record<SiteLogoSize, string> = {
  nav: "h-9 w-auto max-w-[min(240px,56vw)] sm:h-10",
  menu: "h-7 w-auto max-w-[200px]",
};

interface SiteLogoProps {
  size?: SiteLogoSize;
  linked?: boolean;
  className?: string;
  priority?: boolean;
}

export function SiteLogo({
  size = "nav",
  linked = true,
  className = "",
  priority = false,
}: SiteLogoProps) {
  const image = (
    <Image
      src={SITE_LOGO.src}
      alt={SITE_LOGO.alt}
      width={SITE_LOGO.width}
      height={SITE_LOGO.height}
      priority={priority}
      className={`object-contain object-left ${sizeClasses[size]} ${className}`}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label={SITE_LOGO.alt}>
      {image}
    </Link>
  );
}
