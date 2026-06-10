"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { DpcQuizTrigger } from "./DpcQuizTrigger";

const HIDDEN_PATHS = ["/", "/quiz", "/contact", "/membership", "/what-is-dpc"];

export function DpcQuizMobileSticky() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      setVisible(isMobile && window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return null;
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-[4.5rem] left-0 right-0 z-40 px-4 pb-[env(safe-area-inset-bottom)] md:hidden"
      aria-label="Quick quiz access"
    >
      <div className="mx-auto max-w-md rounded-full border border-secondary/30 bg-card/95 p-1.5 shadow-lg backdrop-blur-md">
        <DpcQuizTrigger
          label="Not sure where to start?"
          shortLabel="Use the guide"
          variant="primary"
          className="w-full !rounded-full !py-3"
        />
      </div>
    </div>
  );
}
