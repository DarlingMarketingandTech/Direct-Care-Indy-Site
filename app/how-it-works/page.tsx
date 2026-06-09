import Link from "next/link";
import { Phone, MessageCircle, Video, Clock, Shield, Users, UserCheck, Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import { DPC_CONTENT } from "@/lib/content/dpc";
import OnboardingTimeline from "@/components/OnboardingTimeline";

export default function HowItWorksPage() {
  const faqEntries: any[] = []; // TODO: Add proper FAQ data structure

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="content-container-narrow text-center">
          <h1 className="heading-1 mb-4">How Direct Primary Care Works</h1>
          <p className="body-large max-w-3xl mx-auto mb-8">
            Simple, transparent healthcare without the insurance hassle.
            Here&apos;s exactly what you can expect from your membership.
          </p>
        </div>
      </section>

      {/* Insurance Disclaimer */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-6 text-center">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Important:</strong> Direct Care Indy membership is not health insurance.
              We recommend maintaining insurance coverage for emergencies, hospitalizations, and specialist care.
            </p>
          </div>
        </div>
      </section>

      {/* Your Path to Better Healthcare */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Your Path to Better Healthcare</h2>
              <p className="body-large text-muted-foreground">
                Getting started is simple &mdash; here&apos;s what to expect.
              </p>
            </div>
            <OnboardingTimeline />
          </div>
        </div>
      </section>

      {/* Telehealth & Secure Messaging */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Telehealth & Secure Messaging</h2>
              <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                Connect with your care team anytime through our secure platform powered by Spruce Health.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Secure Texting</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Text your provider anytime about non-urgent concerns. HIPAA-compliant and encrypted.
                </p>
                <div className="text-secondary font-medium text-sm">
                  Response within 15 minutes during business hours
                </div>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Video Visits</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Face-to-face virtual appointments through our secure telehealth platform.
                </p>
                <div className="text-secondary font-medium text-sm">
                  Same-day or next-day scheduling
                </div>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Phone Calls</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Direct phone access to your care team for urgent needs and prescription renewals.
                </p>
                <div className="text-secondary font-medium text-sm">
                  Call back within 30 minutes for urgent calls
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="heading-3 mb-4">When to Use Telehealth</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>Follow-up questions about your care plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>Prescription refill requests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>Non-urgent symptom discussions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>Test result reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>General health questions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="font-semibold mb-3 text-foreground">What to Expect</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>Messages answered within 15 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span>HIPAA-compliant secure platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-secondary" />
                      <span>Same provider continuity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-secondary" />
                      <span>Easy video calls from your phone</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Care Team - Round Table Model */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4 text-secondary-foreground">Your Care Team: The Round Table Model</h2>
              <p className="body-large max-w-3xl mx-auto text-secondary-foreground/90">
                Physician Assistant-led care with physician oversight through weekly Round Table discussions.
                The best of both worlds: accessible care from skilled clinicians with physician supervision.
              </p>
            </div>

            {/* Care Team Diagram */}
            <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                <div>
                  <div className="bg-secondary-foreground text-secondary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10" />
                  </div>
                  <h3 className="font-semibold mb-2">You</h3>
                  <p className="text-sm opacity-90">Direct access to your care team anytime</p>
                </div>

                <div className="text-center">
                  <div className="bg-secondary-foreground text-secondary p-4 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <UserCheck className="w-12 h-12" />
                  </div>
                  <h3 className="font-semibold mb-2">Physician Assistant</h3>
                  <p className="text-sm opacity-90 mb-2">Your primary clinician</p>
                  <p className="text-xs opacity-75">Delivers 80% of care</p>
                </div>

                <div>
                  <div className="bg-secondary-foreground text-secondary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Stethoscope className="w-10 h-10" />
                  </div>
                  <h3 className="font-semibold mb-2">Physician</h3>
                  <p className="text-sm opacity-90 mb-2">Medical oversight</p>
                  <p className="text-xs opacity-75">Weekly Round Table reviews</p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-secondary-foreground">PA-Led Care (80%)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Most appointments and care delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Chronic condition management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Preventive care and screenings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Telehealth visits and messaging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-secondary-foreground">Physician Oversight (20%)</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Weekly Round Table case reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Complex case consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Quality assurance and protocols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                    <span>Direct physician access when needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Meet Your Care Team</h2>
              <p className="body-large text-muted-foreground">
                Experienced clinicians committed to your health and well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Physician */}
              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="w-10 h-10" />
                </div>
                <h3 className="font-semibold mb-2">James D. Pike, D.O.</h3>
                <p className="text-secondary font-medium text-sm mb-3">Medical Director</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Board Certified in Pulmonary and Internal Medicine. Oversees all patient care through weekly Round Table reviews.
                </p>
                <div className="text-xs text-muted-foreground">
                  FCCP, FACP • 20+ years experience
                </div>
              </div>

              {/* PA Placeholder */}
              <div className="section-card text-center">
                <div className="bg-muted p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Your Physician Assistant</h3>
                <p className="text-secondary font-medium text-sm mb-3">Primary Care Clinician</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Experienced PA who delivers most of your care with direct physician oversight.
                </p>
                <div className="text-xs text-muted-foreground">
                  NCCPA Certified • Direct Primary Care Trained
                </div>
              </div>

              {/* Care Coordinator */}
              <div className="section-card text-center">
                <div className="bg-muted p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Care Coordinator</h3>
                <p className="text-secondary font-medium text-sm mb-3">Patient Support</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Handles scheduling, insurance coordination, and ensures seamless care delivery.
                </p>
                <div className="text-xs text-muted-foreground">
                  Patient Care Coordination Certified
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                <em>Photos and additional team member details coming soon.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqEntries.slice(0, 6).map((faq) => (
                <div key={faq.id} className="section-card">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}

              {/* Additional FAQ entries */}
              <div className="section-card">
                <h3 className="font-semibold mb-3">How quickly will I hear back from my care team?</h3>
                <p className="text-muted-foreground text-sm">
                  Text messages are typically answered within 15 minutes during business hours (8 AM - 5 PM).
                  Phone calls for urgent matters receive a call back within 30 minutes. After-hours emergencies
                  should call 911 or go to the nearest emergency room.
                </p>
              </div>

              <div className="section-card">
                <h3 className="font-semibold mb-3">Can I get prescriptions through telehealth?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, prescriptions can be called in or sent electronically during telehealth visits or through
                  secure messaging. We work with your preferred pharmacy for convenient pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="content-container-narrow text-center">
          <h2 className="heading-3 mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="body-base text-muted-foreground mb-8">
            Join hundreds of Indianapolis families who have simplified their healthcare.
          </p>
          <Link href="/membership" className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform interactive-element">
            View Membership Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
