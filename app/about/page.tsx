import Link from "next/link";
import { Heart, Users, Shield, MapPin } from "lucide-react";
import { DPC_CONTENT } from "@/lib/content/dpc";

export default function AboutPage() {
  const brand = DPC_CONTENT.brand;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pike Medical</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {brand.mission}
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Approach</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  We believe healthcare should be simple, transparent, and focused on building long-term relationships with our patients.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Through our 90/10 model, we handle the everyday healthcare needs while ensuring specialist oversight for complex cases. No insurance bureaucracy, no surprise bills, just quality care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-secondary" />
                    <span className="font-semibold">Patient-centered care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-secondary" />
                    <span className="font-semibold">Collaborative clinical team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-secondary" />
                    <span className="font-semibold">Specialist oversight</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4">Why Indianapolis?</h3>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Local Focus, National Standards</p>
                    <p className="text-muted-foreground text-sm">
                      We&apos;re proud to serve the Indianapolis community with healthcare that&apos;s accessible, transparent, and delivered to the highest standards.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Our Round Table model was designed specifically for the Indianapolis metro area, where we understand the unique healthcare needs and challenges our community faces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Round Table Model */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Round Table Philosophy</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Healthcare is a team sport. Our Round Table brings together high-access primary care with specialist oversight for the best possible patient outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">90</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Daily Care</h3>
                <p className="text-muted-foreground">
                  Your PA handles routine visits, preventive care, and chronic disease management
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weekly Reviews</h3>
                <p className="text-muted-foreground">
                  Dr. Pike reviews complex cases, ensuring specialist-level care quality
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">10</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Complex Cases</h3>
                <p className="text-muted-foreground">
                  Insurance handles hospitalizations, surgeries, and advanced diagnostics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Pike */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Meet Dr. Pike</h2>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-3">James D. Pike, D.O., FCCP, FACP</h3>
              <p className="text-muted-foreground mb-4">
                Board-certified in Pulmonary and Internal Medicine, Dr. Pike brings hospital-grade expertise to everyday primary care. As a Fellow of both the American College of Chest Physicians and the American College of Physicians, he leads Direct Care Indy with a mission to dismantle the barriers between patients and quality healthcare.
              </p>
              <p className="text-muted-foreground">
                Through the Round Table model, Dr. Pike provides specialist oversight on every complex case while ensuring members receive same-day access, transparent pricing, and the personal attention that traditional insurance-driven clinics cannot offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Capitalizing on critical 2026 federal changes to offer a vital alternative to the insurance death spiral.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the Pike Medical family and discover healthcare without the insurance hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/team"
              className="bg-card text-card-foreground border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-card/90 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/join"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
