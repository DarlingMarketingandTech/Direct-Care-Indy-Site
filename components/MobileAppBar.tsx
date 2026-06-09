"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeDollarSign,
  Building2,
  CircleHelp,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { MobileFullMenu } from "@/components/MobileFullMenu";
import { mobileBottomNav, PATIENT_PORTAL_URL } from "@/lib/nav";

const bottomNavIcons: Record<string, typeof BadgeDollarSign> = {
  "/membership": BadgeDollarSign,
  "/employers": Building2,
  "/what-is-dpc": CircleHelp,
  [PATIENT_PORTAL_URL]: LogIn,
};

function BottomNavItem({
  href,
  label,
  external,
  isActive,
  onNavigate,
}: {
  href: string;
  label: string;
  external?: boolean;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const Icon = bottomNavIcons[href as keyof typeof bottomNavIcons] ?? CircleHelp;

  const content = (
    <>
      {isActive && (
        <div className="absolute top-0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-teal-600" />
      )}
      <Icon
        className={`h-5 w-5 shrink-0 transition-all duration-200 ${
          isActive ? "scale-110 text-teal-600" : "text-slate-600"
        }`}
        aria-hidden
      />
      <span
        className={`mt-1 line-clamp-2 text-center text-[10px] font-medium leading-tight ${
          isActive ? "font-semibold text-teal-600" : "text-slate-600"
        }`}
      >
        {label}
      </span>
    </>
  );

  const className =
    "relative flex min-h-[60px] min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-0.5 py-1.5 transition-colors hover:bg-gray-50 active:bg-gray-100 touch-manipulation";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={className}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      {content}
    </Link>
  );
}

export default function MobileAppBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!menuOpen) return;
    setIsVisible(true);
  }, [menuOpen]);

  return (
    <>
      <MobileFullMenu open={menuOpen} onClose={closeMenu} />

      <nav
        className={`
          md:hidden fixed bottom-0 left-0 right-0 z-50
          bg-white/95 backdrop-blur-lg border-t border-gray-200
          shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
          transition-transform duration-300 ease-in-out
          ${isVisible || menuOpen ? "translate-y-0" : "translate-y-full"}
        `}
        role="navigation"
        aria-label="Mobile bottom navigation"
      >
        <div className="pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-stretch justify-around px-0.5 py-1.5">
            {mobileBottomNav.map((item) => {
              const isActive =
                !item.external &&
                (pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href)));

              return (
                <BottomNavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  external={item.external}
                  isActive={isActive}
                  onNavigate={closeMenu}
                />
              );
            })}

            <button
              type="button"
              onClick={toggleMenu}
              className={`relative flex min-h-[60px] min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-0.5 py-1.5 transition-colors touch-manipulation ${
                menuOpen
                  ? "bg-teal-50 text-teal-600"
                  : "text-slate-600 hover:bg-gray-50 active:bg-gray-100"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-full-menu"
            >
              {menuOpen && (
                <div className="absolute top-0 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-teal-600" />
              )}
              {menuOpen ? (
                <X className="h-5 w-5 shrink-0 scale-110" aria-hidden />
              ) : (
                <Menu className="h-5 w-5 shrink-0" aria-hidden />
              )}
              <span
                className={`mt-1 text-[10px] font-medium leading-tight ${
                  menuOpen ? "font-semibold text-teal-600" : "text-slate-600"
                }`}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
