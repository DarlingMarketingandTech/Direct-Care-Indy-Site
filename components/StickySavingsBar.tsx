"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, TrendingUp } from "lucide-react";
import { DpcQuizTrigger } from "@/components/dpc-fit-quiz";

export function StickySavingsBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    // Check if user has dismissed the bar on initial load
    if (typeof window !== 'undefined') {
      return localStorage.getItem('stickySavingsBarDismissed') === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Show bar after scrolling down a bit
    const handleScroll = () => {
      const scrolled = window.scrollY > 300; // Show after 300px scroll
      const isMobile = window.innerWidth < 768; // Hide on mobile by default

      setIsVisible(scrolled && !isMobile);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('stickySavingsBarDismissed', 'true');
  };

  if (pathname === "/") return null;

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-secondary text-secondary-foreground p-2 rounded-full">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-foreground">See Membership Plans</div>
              <div className="text-sm text-muted-foreground">
                Review current membership options, add-on pricing, and quiz guidance
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <DpcQuizTrigger
              label="Need help choosing a path?"
              shortLabel="Use the guide"
              variant="primary"
              className="!px-6 !py-2 !text-sm hover:scale-105 transition-transform shadow"
            />
            <Link
              href="/membership"
              className="hidden md:inline-flex px-5 py-2 rounded-full font-semibold text-sm border border-border text-foreground hover:bg-muted transition-colors interactive-element"
            >
              View Membership
            </Link>
            <button
              onClick={handleDismiss}
              className="text-muted-foreground hover:text-foreground p-1 interactive-element"
              aria-label="Dismiss savings bar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
