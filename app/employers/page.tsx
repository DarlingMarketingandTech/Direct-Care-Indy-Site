"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Phone, Shield, TrendingDown, Users, Briefcase } from "lucide-react";
import { setUserPersona } from "@/lib/persona";
import { ComplianceNote } from "@/components/ComplianceNote";
import { OccHealthIntake } from "@/components/OccHealthIntake";
import { OccHealthPrices } from "@/components/OccHealthPrices";
import { EmployerDemoForm } from "@/components/EmployerDemoForm";
import { publicClaim } from "@/lib/claims";
import { SITE_ASSETS } from "@/lib/images";

export default function Employers() {
  const employerSavingsClaim = publicClaim("employerSavings");
  useEffect(() => {
    setUserPersona('employer');
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={SITE_ASSETS.marketing.employerWellness}
            alt="Employer wellness"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-teal-800/80 to-primary/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Protect Your Crew, Not Just Your Bottom Line
            </h2>
            <p className="text-2xl mb-4">
              Employee health benefits for Indianapolis trades that actually save you money
            </p>
            <p className="text-xl mb-8 opacity-90">
              Employer savings conversations start with your workforce and benefits setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-secondary hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Review Plan Options
              </a>
              <a
                href="#demo"
                className="bg-white/90 text-primary hover:bg-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2 border border-white/70"
              >
                Request a Demo
              </a>
              <a
                href="tel:+13179566288"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (317) 956-6288
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Consultation */}
      <section id="demo" className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">Request a live demo for your business</h3>
              <p className="text-lg text-gray-700">
                See how Hint enrollment, employer billing, and our DPC stack work together for Indiana crews.
                We will tailor the walkthrough to your industry and show real pricing scenarios.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <span>Live Hint enrollment and portal handoff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingDown className="w-5 h-5 text-primary mt-1" />
                  <span>Cost breakdowns for per-employee pricing and household caps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-primary mt-1" />
                  <span>Answers on occupational health add-ons and DOT requirements.</span>
                </li>
              </ul>
            </div>
            <EmployerDemoForm />
          </div>
        </div>
      </section>

      {/* The Hook Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-900/30 border-l-4 border-orange-500 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-8 h-8 text-orange-400" />
                <h3 className="text-3xl font-bold text-primary">The Cost-Avoidance Math</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900/30 rounded-lg p-6 border border-red-500/50">
                  <h4 className="text-xl font-bold text-red-300 mb-2">One ER Visit</h4>
                  <p className="text-4xl font-bold text-red-400">$2,200+</p>
                  <p className="text-sm text-red-300 mt-2">Average emergency room cost</p>
                </div>
                <div className="bg-green-900/30 rounded-lg p-6 border border-green-500/50">
                  <h4 className="text-xl font-bold text-green-300 mb-2">One Year of DPC</h4>
                  <p className="text-4xl font-bold text-green-400">$828-$1,308</p>
                  <p className="text-sm text-green-300 mt-2">Depending on age tier</p>
                </div>
              </div>
              <p className="text-lg text-gray-200 mt-6 text-center">
                <strong className="text-primary">The Bottom Line:</strong> Prevent one ER visit and your DPC membership pays for itself-plus you get unlimited primary care, same-day appointments, and wholesale labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Savings Notice */}
      <section id="calculator" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Employer savings details are shared during consultation</h3>
              <p className="text-xl text-gray-300">
                Public ROI calculators are paused while assumptions are under review.
              </p>
              {employerSavingsClaim && <p className="text-muted-foreground">{employerSavingsClaim}</p>}
              <ComplianceNote />
            </div>
          </div>
        </div>
      </section>

      {/* Occupational Health Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-primary">Occupational Health Services</h3>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Single-service options for DOT Physicals, Drug Screens, and more-perfect for businesses that need occasional occupational health services
              </p>
            </div>
            <OccHealthPrices />
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Get Instant Pricing</h3>
              <p className="text-xl text-gray-300">
                Fill out the form below to receive pricing details and a scheduling link
              </p>
            </div>
            <OccHealthIntake />
          </div>
        </div>
      </section>

      {/* Why Trades Choose DPC */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Why Indianapolis Trades Choose Direct Care Indy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Employee Retention</h4>
                <p className="text-gray-300">
                  Health benefits that actually matter. Your crew gets same-day care, no copays, and direct access to Dr. Pike.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <TrendingDown className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Cost Control</h4>
                <p className="text-gray-300">
                  Predictable monthly costs instead of surprise ER bills. One visit prevented pays for months of membership.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-primary mb-3">Crew Health</h4>
                <p className="text-gray-300">
                  DOT physicals, drug screens, and preventive care all in one place. Keep your team healthy and compliant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Protect Your Crew?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Indianapolis businesses improving primary care access for their employees.
          </p>
          <a
            href="tel:+13179566288"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (317) 956-6288
          </a>
        </div>
      </section>

      
    </div>
  );
}
