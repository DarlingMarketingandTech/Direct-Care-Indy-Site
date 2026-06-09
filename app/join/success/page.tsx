"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Smartphone, Calendar, Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function JoinSuccess() {
  const timelineSteps = [
    {
      icon: Mail,
      title: "Welcome Email",
      description: "Check your inbox for your welcome packet with next steps and important information.",
      time: "Within 24 hours",
    },
    {
      icon: Smartphone,
      title: "Get Spruce",
      description: "Download the Spruce Health app for direct texting with Dr. Pike. No phone tag, instant access.",
      time: "Today",
    },
    {
      icon: Calendar,
      title: "First 60-Minute Visit",
      description: "A comprehensive deep dive into your health history, goals, and personalized care plan.",
      time: "Within 1 week",
    },
  ];

  const handleDownloadHSA = () => {
    // Download HSA certificate from API route
    const url = '/api/generate-hsa-letter';
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Success Hero */}
      <section className="bg-linear-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inline-block mb-6"
          >
            <CheckCircle2 className="w-20 h-20 mx-auto" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Direct Care Indy!
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            You&apos;ve taken the first step toward a better healthcare experience.
            Here&apos;s what happens next.
          </p>
        </div>
      </section>

      {/* Member Roadmap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Your Member Roadmap
            </h2>
            <div className="space-y-8">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 ml-6 -mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Items */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* HSA Guide Download */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Download className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  HSA Compliance Guide
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Download your 2026 HSA Reimbursement Guide to share with your
                accountant or employer. This document confirms your DPC membership
                is HSA-eligible.
              </p>
              <button
                onClick={handleDownloadHSA}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download HSA Guide
              </button>
            </div>

            {/* Spruce App */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Download Spruce App
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Get direct access to Dr. Pike through the Spruce Health app.
                Text, share photos, and get same-day responses.
              </p>
              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/app/spruce-health/id1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Download for iOS
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.spruce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Download for Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-4">
              Questions? We&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="tel:+13179566288"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                (317) 956-6288
              </a>
              <a
                href="mailto:info@directcareindy.com"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                info@directcareindy.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

