"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserPersona, UserPersona } from "@/lib/persona";
import Image from "next/image";
import { SITE_ASSETS } from "@/lib/images";

interface DynamicHeaderProps {
  children: React.ReactNode;
}

/**
 * DynamicHeader component - now a simple no-op wrapper.
 * The DynamicCTA component below provides persona-aware CTA functionality.
 */
export function DynamicHeader({ children }: DynamicHeaderProps) {
  return <>{children}</>;
}

// Helper component to render dynamic CTA
export function DynamicCTA() {
  const persona = getUserPersona();
  const ctaClasses = "relative overflow-hidden bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-lg font-semibold transition-all group";

  switch (persona) {
    case 'senior':
      return (
        <Link href="/seniors" className={ctaClasses}>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <Image src={SITE_ASSETS.ui.tealGradient} alt="" fill className="object-cover" />
          </div>
          <span className="relative z-10">View Medicare Savings Guide</span>
        </Link>
      );
    case 'employer':
      return (
        <Link href="/employers" className={ctaClasses}>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <Image src={SITE_ASSETS.ui.tealGradient} alt="" fill className="object-cover" />
          </div>
          <span className="relative z-10">Talk About Employer Plans</span>
        </Link>
      );
    default:
      return (
        <Link href="/join" className={ctaClasses}>
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <Image src={SITE_ASSETS.ui.tealGradient} alt="" fill className="object-cover" />
          </div>
          <span className="relative z-10">Join Now</span>
        </Link>
      );
  }
}

