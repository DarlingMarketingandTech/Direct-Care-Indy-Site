import Link from "next/link";
import { Stethoscope, Users, Shield } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialist-led primary care with high-access clinicians dedicated to your health.
          </p>
        </div>
      </section>

      {/* Round Table Model */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Round Table Model</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborative care combining specialist oversight with high-access primary care.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* PA Team */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">High-Access PAs</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our nurse practitioners provide 24/7 access to primary care. They handle 90% of your healthcare needs with direct communication and same-day appointments.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 24/7 text communication</li>
                  <li>• Unlimited sick visits</li>
                  <li>• Chronic disease management</li>
                  <li>• Preventive care & wellness</li>
                  <li>• Minor procedures</li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/providers"
                    className="text-secondary hover:text-secondary/80 font-semibold"
                  >
                    Meet the PAs →
                  </Link>
                </div>
              </div>

              {/* Physician Oversight */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Dr. James Pike, MD</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Board-certified physician providing specialist oversight for complex cases. Dr. Pike brings hospital-grade expertise to primary care through weekly case reviews.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Board-certified Internal Medicine</li>
                  <li>• Pulmonary & Critical Care specialist</li>
                  <li>• Weekly case reviews</li>
                  <li>• Complex diagnostic oversight</li>
                  <li>• Hospital-grade expertise</li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/providers/james-pike"
                    className="text-secondary hover:text-secondary/80 font-semibold"
                  >
                    Meet Dr. Pike →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Care Model</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of Indianapolis families who have discovered healthcare without the insurance hassle.
          </p>
          <Link
            href="/join"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-colors inline-block"
          >
            Join the Table
          </Link>
        </div>
      </section>
    </div>
  );
}
