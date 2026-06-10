import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import type { Provider } from "@/lib/data/providers";

type ProviderCardProps = {
  provider: Provider;
  variant: "featured" | "compact" | "inline";
  showRole?: boolean;
  bioPreviewLines?: number;
  highlightPreview?: string;
  priority?: boolean;
};

function bioPreviewClass(lines?: number) {
  if (!lines) return "";
  if (lines === 2) return "line-clamp-2";
  if (lines === 4) return "line-clamp-4";
  return "line-clamp-3";
}

export function ProviderCard({
  provider,
  variant,
  showRole = true,
  bioPreviewLines = 3,
  highlightPreview,
  priority = false,
}: ProviderCardProps) {
  const bioHref = `/providers/${provider.slug}`;
  const previewText = highlightPreview ?? provider.bio;

  if (variant === "inline") {
    return (
      <article className="section-card flex items-start gap-4 border-border/80">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={provider.image}
            alt={provider.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-foreground">{provider.name}</h3>
          <p className="text-sm text-secondary">
            {provider.credentials}
            {showRole ? ` | ${provider.role}` : ""}
          </p>
          <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${bioPreviewClass(bioPreviewLines)}`}>
            {previewText}
          </p>
          <Link
            href={bioHref}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline"
          >
            View bio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className="section-card overflow-hidden border-secondary/15 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-0">
        <div className="relative aspect-square w-full lg:aspect-auto lg:min-h-[22rem]">
          <Image
            src={provider.image}
            alt={`${provider.name}, ${provider.credentials}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:py-10 lg:pr-10">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            {provider.role}
          </div>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{provider.name}</h3>
          <p className="mt-1 text-lg font-semibold text-secondary">{provider.credentials}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{provider.bio}</p>
          {provider.highlights.length > 0 ? (
            <ul className="mt-6 space-y-2">
              {provider.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-secondary" aria-hidden>
                    ✓
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <Link
            href={bioHref}
            className="interactive-element mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90 sm:w-auto"
          >
            View full bio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="section-card flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-4/3 w-full bg-muted">
        <Image
          src={provider.image}
          alt={`${provider.name}, ${provider.credentials}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 inline-flex w-fit rounded-2xl bg-secondary/10 p-2 text-secondary">
          <Stethoscope className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="text-xl font-bold text-foreground">{provider.name}</h3>
        <p className="mt-1 text-sm font-semibold text-secondary">{provider.credentials}</p>
        {showRole ? <p className="mt-1 text-sm text-muted-foreground">{provider.role}</p> : null}
        <p className={`mt-4 flex-1 text-sm leading-relaxed text-muted-foreground ${bioPreviewClass(bioPreviewLines)}`}>
          {previewText}
        </p>
        <Link
          href={bioHref}
          className="interactive-element mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          View full bio
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
