"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "compare", label: "Compare" },
  { id: "business-case", label: "Business case" },
  { id: "who-its-for", label: "Who it's for" },
  { id: "business-size", label: "By team size" },
  { id: "partnerships", label: "Partnerships" },
  { id: "experience", label: "Experience" },
  { id: "faq", label: "FAQ" },
] as const;

/** Sticky site header (top-16) + this nav bar — matches scroll-mt-28 anchor offset. */
const SCROLL_OFFSET_PX = 112;

function resolveActiveSection(): (typeof SECTIONS)[number]["id"] {
  let nextActive: (typeof SECTIONS)[number]["id"] = SECTIONS[0].id;

  for (const { id } of SECTIONS) {
    const element = document.getElementById(id);
    if (element && element.getBoundingClientRect().top - SCROLL_OFFSET_PX <= 0) {
      nextActive = id;
    }
  }

  return nextActive;
}

export function EmployersSectionNav() {
  const [activeId, setActiveId] = useState<(typeof SECTIONS)[number]["id"]>(
    SECTIONS[0].id
  );
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const syncActiveSection = () => {
      setActiveId((current) => {
        const nextActive = resolveActiveSection();
        return current === nextActive ? current : nextActive;
      });
    };

    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      const matched = SECTIONS.find((section) => section.id === hash);
      if (matched) {
        setActiveId(matched.id);
      } else {
        syncActiveSection();
      }
    };

    // Let the browser finish hash scrolling before the first read.
    requestAnimationFrame(() => {
      requestAnimationFrame(syncFromHash);
    });

    const observer = new IntersectionObserver(() => syncActiveSection(), {
      rootMargin: `-${SCROLL_OFFSET_PX}px 0px -40% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("hashchange", syncFromHash);
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  useEffect(() => {
    linkRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [activeId]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-40 border-b border-border/80 bg-white"
    >
      <div className="content-container flex justify-center">
        <ul className="inline-flex max-w-full justify-center gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  ref={(node) => {
                    linkRefs.current[section.id] = node;
                  }}
                  href={`#${section.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-secondary/15 text-secondary"
                      : "text-muted-foreground hover:bg-secondary/10 hover:text-secondary"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
