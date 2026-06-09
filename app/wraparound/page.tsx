import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { CatastrophicPartners } from "@/components/CatastrophicPartners";
import { TheWraparoundGuide } from "@/components/TheWraparoundGuide";
import { HsaStatusTracker } from "@/components/HsaStatusTracker";

export default function Wraparound() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 text-foreground text-glow">
              Complete Your Healthcare Stack
            </h2>
            <p className="text-2xl mb-4 text-foreground">
              Direct Care Indy handles the 90%. Choose a catastrophic wraparound for the 10%.
            </p>
            <p className="text-xl text-muted-foreground">
              The &quot;DPC Stack&quot;: Affordable primary care + catastrophic protection = Complete coverage at 60% lower cost.
            </p>
          </div>
        </div>
      </section>

      {/* HSA Status Tracker */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <HsaStatusTracker />
          </div>
        </div>
      </section>

      {/* The Wraparound Guide */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <TheWraparoundGuide />
        </div>
      </section>

      {/* Catastrophic Partners Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CatastrophicPartners />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-secondary-foreground border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build Your Complete Healthcare Stack?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with Direct Care Indy for your routine care, then add a catastrophic wraparound for complete protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-block interactive-element"
            >
              View Pricing
            </Link>
            <a
              href="tel:+13179566288"
              className="bg-card text-card-foreground hover:bg-card/90 border border-border px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2 interactive-element"
            >
              <Phone className="w-5 h-5" />
              (317) 956-6288
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Local SEO */}
      <footer className="bg-card text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Direct Care Indy</h4>
              <p className="text-muted-foreground">
                Direct Primary Care for Indianapolis families
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-muted-foreground hover:text-foreground transition-colors">
                    Membership Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-muted-foreground hover:text-foreground transition-colors">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/wraparound" className="text-muted-foreground hover:text-foreground transition-colors">
                    Wraparound Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <span>7911 N. Michigan Rd.<br />Indianapolis, IN 46268</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+13179566288" className="hover:text-foreground transition-colors">
                    (317) 956-6288
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:info@directcareindy.com" className="hover:text-foreground transition-colors">
                    info@directcareindy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-muted-foreground">
            <p className="font-semibold mb-2">Notice: Direct Care Indy is not insurance.</p>
            <p>James D. Pike, D.O., FCCP, FACP | Direct Primary Care Physician</p>
            <p className="text-sm opacity-90 mt-2">Board Certified in Pulmonary and Internal Medicine</p>
            <p className="mt-2">© {new Date().getFullYear()} Direct Care Indy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

