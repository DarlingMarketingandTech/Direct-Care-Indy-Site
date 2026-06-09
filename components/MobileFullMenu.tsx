"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { usePathname } from "next/navigation";
import { ExternalLink, X } from "lucide-react";
import { DpcQuizTrigger } from "@/components/dpc-fit-quiz";
import { mobileFullMenuLinks } from "@/lib/nav";

interface MobileFullMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileFullMenu({ open, onClose }: MobileFullMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-full-menu"
      className="fixed inset-x-0 top-0 z-60 flex flex-col bg-background md:hidden"
      style={{
        bottom: "calc(4.25rem + env(safe-area-inset-bottom))",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <header className="flex shrink-0 items-center justify-between border-b border-border bg-card/95 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <SiteLogo size="menu" linked={false} />
            <span className="text-sm font-semibold text-foreground">Menu</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          <div className="mb-6 rounded-2xl border border-secondary/25 bg-secondary/5 p-4">
            <DpcQuizTrigger
              label="Is DPC Right for You?"
              sublabel="Take the 60-second quiz"
              variant="primary"
              className="w-full !py-3"
            />
          </div>

          <nav aria-label="Full site navigation">
            <ul className="overflow-hidden rounded-2xl border border-border bg-card">
              {mobileFullMenuLinks.map((item, index) => {
                const isActive =
                  !item.external &&
                  (pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href)));

                const rowClass = `flex items-center justify-between px-4 py-3.5 text-sm font-medium transition-colors ${
                  index > 0 ? "border-t border-border" : ""
                } ${
                  isActive
                    ? "bg-secondary/10 text-secondary"
                    : "text-foreground hover:bg-muted/60"
                }`;

                if (item.external) {
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={rowClass}
                        onClick={onClose}
                      >
                        <span>{item.label}</span>
                        <ExternalLink
                          className="h-4 w-4 shrink-0 text-muted-foreground"
                          aria-hidden
                        />
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={rowClass}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
