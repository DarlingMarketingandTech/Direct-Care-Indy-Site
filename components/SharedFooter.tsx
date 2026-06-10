"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Award, Shield } from "lucide-react";
import { SiteLogoMark } from "@/components/SiteLogoMark";
import { footerNav } from "@/lib/nav";

export function SharedFooter() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4">
        {/* Trust Badges Section */}
        <div className="max-w-6xl mx-auto mb-8 pb-8 border-b border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full border border-border">
              <Award className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Member of the DPC Alliance</span>
            </div>

            {process.env.NEXT_PUBLIC_HSA_APPROVED === 'true' && (
              <div className="flex items-center gap-2 bg-muted text-muted-foreground px-4 py-2 rounded-full border border-border">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="font-semibold">2026 HSA Approved</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <SiteLogoMark size="sm" />
              <h4 className="text-xl font-semibold text-foreground">Direct Care Indy</h4>
            </div>
            <p className="text-muted-foreground">
              Direct Primary Care for Indianapolis families. Transparent,
              accessible, and affordable healthcare without the insurance
              bureaucracy.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-dpc#faq"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/individuals"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  For Individuals
                </Link>
              </li>
              <li>
                <Link
                  href="/families"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  For Families
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/indiana-medigap-birthday-rule-2026"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  2026 Indiana Birthday Rule Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/wraparound"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Wraparound Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-muted-foreground hover:text-secondary transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-1 text-secondary" />
                <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0 text-secondary" />
                <a
                  href="tel:+13179566288"
                  className="hover:text-secondary transition-colors"
                >
                  (317) 956-6288
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0 text-secondary" />
                <a
                  href="mailto:info@directcareindy.com"
                  className="hover:text-secondary transition-colors"
                >
                  info@directcareindy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Footer - Areas We Serve */}
        <div className="border-t border-border pt-4 pb-2">
          <p className="text-xs text-muted-foreground text-center mb-2">
            Serving Central Indiana:{' '}
            <Link href="/locations/carmel" className="hover:text-secondary transition-colors">
              Carmel
            </Link>
            {' | '}
            <Link href="/locations/zionsville" className="hover:text-secondary transition-colors">
              Zionsville
            </Link>
            {' | '}
            <Link href="/locations/fishers" className="hover:text-secondary transition-colors">
              Fishers
            </Link>
            {' | '}
            <Link href="/locations/geist" className="hover:text-secondary transition-colors">
              Geist
            </Link>
            {' | '}
            <Link href="/" className="hover:text-secondary transition-colors">
              Indianapolis
            </Link>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p className="font-semibold mb-2 text-foreground">
            Notice: Direct Care Indy is not insurance.
          </p>
          <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
          <p className="text-sm opacity-90 mt-1">
            Board Certified in Pulmonary and Internal Medicine
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Direct Care Indy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

