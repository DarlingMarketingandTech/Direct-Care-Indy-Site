"use client";

import Link from "next/link";
import { useState } from "react";
import { Building2, Users, DollarSign, TrendingUp, Mail, Phone, CheckCircle2 } from "lucide-react";
import { ComplianceNote } from "@/components/ComplianceNote";
import { publicClaim } from "@/lib/claims";

export default function EmployersPage() {
  const employerSavingsClaim = publicClaim("employerSavings");
  const [demoForm, setDemoForm] = useState({
    companyName: '',
    employeeCount: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, create a mailto link
    const subject = `Employer Demo Request - ${demoForm.companyName}`;
    const body = `Company: ${demoForm.companyName}
Employee Count: ${demoForm.employeeCount}
Contact: ${demoForm.contactName}
Email: ${demoForm.email}
Phone: ${demoForm.phone}
Message: ${demoForm.message}`;

    window.location.href = `mailto:info@directcareindy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding bg-linear-to-br from-secondary/10 to-secondary/5">
        <div className="content-container-narrow text-center">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            For Employers
          </div>
          <h1 className="heading-1 mb-4">Healthcare Your Employees Will Love</h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto mb-8">
            Give your team direct access to high-quality healthcare without the insurance hassles.
            Happier employees, lower turnover, and better productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#demo-request"
              className="bg-card text-card-foreground border border-border px-8 py-4 rounded-full font-semibold text-lg hover:bg-card/90 transition-colors interactive-element"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-2 mb-4">Why Employers Choose DPC</h2>
              <p className="body-large text-muted-foreground">
                More than just healthcare - it&apos;s an employee benefit that pays for itself.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Higher Employee Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Employees love direct access to care without waiting for appointments or dealing with insurance bureaucracy.
                </p>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Reduced Absenteeism</h3>
                <p className="text-muted-foreground text-sm">
                  Fewer sick days and better preventive care mean more productive employees at work.
                </p>
              </div>

              <div className="section-card text-center">
                <div className="bg-secondary text-secondary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-3">Cost-Effective Benefit</h3>
                <p className="text-muted-foreground text-sm">
                  Provide comprehensive healthcare for $150-$200/month per employee - often less than traditional insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Messaging */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto section-card text-center">
            <h2 className="heading-2 mb-4">Employer savings are reviewed during consultation.</h2>
            <p className="body-large text-muted-foreground">
              Public ROI calculators are paused while savings assumptions are under review.
            </p>
            {employerSavingsClaim && <p className="text-muted-foreground mt-3">{employerSavingsClaim}</p>}
            <ComplianceNote />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">How Employer DPC Works</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 section-card">
                <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Choose Your Coverage Level</h3>
                  <p className="text-muted-foreground text-sm">
                    Decide whether to offer DPC as a standalone benefit, complement to existing insurance, or full replacement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 section-card">
                <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">We Handle Everything</h3>
                  <p className="text-muted-foreground text-sm">
                    Employee enrollment, billing, and care coordination - you just provide the benefit and enjoy happier employees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 section-card">
                <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                  <span className="font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Measure the Results</h3>
                  <p className="text-muted-foreground text-sm">
                    Track employee satisfaction, reduced absenteeism, and healthcare cost savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo-request" className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Request Your Employer Demo</h2>
              <p className="body-large text-muted-foreground">
                See how DPC can transform your employee benefits. We&apos;ll show you the savings calculator and answer all your questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="heading-3 mb-6">What You&apos;ll Learn</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">How DPC compares to traditional insurance costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Employee satisfaction and retention benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Implementation timeline and HR integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Custom pricing for your company size</span>
                  </li>
                </ul>
              </div>

              <div className="section-card">
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.companyName}
                      onChange={(e) => setDemoForm({...demoForm, companyName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Employees</label>
                    <input
                      type="number"
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.employeeCount}
                      onChange={(e) => setDemoForm({...demoForm, employeeCount: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.contactName}
                      onChange={(e) => setDemoForm({...demoForm, contactName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                      value={demoForm.message}
                      onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                      placeholder="Any specific questions or requirements?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors interactive-element"
                  >
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Employer FAQ</h2>
            <div className="space-y-6">
              <div className="section-card">
                <h3 className="font-semibold mb-3">How much does it cost per employee?</h3>
                <p className="text-muted-foreground text-sm">
                  DPC membership costs $150-$250 per month per employee, depending on your group size and coverage level.
                  This is often less than the employer portion of traditional insurance premiums.
                </p>
              </div>

              <div className="section-card">
                <h3 className="font-semibold mb-3">Do employees still need insurance?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, DPC covers primary care only. Employees still need insurance for hospitalizations, surgeries, and emergencies.
                  We recommend pairing DPC with high-deductible health plans for comprehensive coverage.
                </p>
              </div>

              <div className="section-card">
                <h3 className="font-semibold mb-3">How does billing work?</h3>
                <p className="text-muted-foreground text-sm">
                  We handle all employee billing and enrollment. You receive one monthly invoice for the entire company,
                  and we manage all employee communications and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
