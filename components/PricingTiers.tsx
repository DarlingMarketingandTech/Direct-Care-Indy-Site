"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Users } from "lucide-react";
import { HsaBadge } from "./HsaBadge";
import { PricingDisclaimer } from "./PricingDisclaimer";
import { individualTiers, pricing } from "@/lib/pricing";

const tierFeatures: Record<(typeof individualTiers)[number]["key"], string[]> = {
  child: [
    "Well-child visits",
    "Same-day sick visits",
    "Direct communication with care team",
    "Wholesale labs when needed",
  ],
  youngAdult: [
    "Unlimited sick visits",
    "Annual wellness exams",
    "Chronic disease management",
    "Direct communication with Dr. Pike",
    "Wholesale pharmacy & labs",
  ],
  adult: [
    "Unlimited sick visits",
    "Comprehensive wellness exams",
    "Chronic disease management",
    "Direct communication with Dr. Pike",
    "Wholesale pharmacy & labs",
    "Enhanced preventive care",
  ],
  senior: [
    "Unlimited sick visits",
    "Medicare coordination",
    "Chronic disease management",
    "Direct communication with Dr. Pike",
    "Wholesale pharmacy & labs",
    "Specialized senior care",
  ],
};

const tierColors: Record<(typeof individualTiers)[number]["key"], string> = {
  child: "from-sky-500 to-sky-600",
  youngAdult: "from-green-500 to-green-600",
  adult: "from-purple-500 to-purple-600",
  senior: "from-orange-500 to-orange-600",
};

export default function PricingTiers() {
  const isHsaApproved = process.env.NEXT_PUBLIC_HSA_APPROVED === "true";

  return (
    <div>
      <div className="mx-auto mb-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {individualTiers.map((tier, index) => {
          const data = pricing[tier.key];
          const features = tierFeatures[tier.key];
          const color = tierColors[tier.key];

          return (
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`overflow-hidden rounded-2xl border-2 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl ${
                tier.popular
                  ? "border-secondary ring-4 ring-secondary/20"
                  : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="bg-linear-to-r from-secondary to-primary px-4 py-2 text-center text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <div
                  className={`mb-4 rounded-xl bg-linear-to-r ${color} p-4 text-center text-white`}
                >
                  <h3 className="text-xl font-bold">{data.label}</h3>
                  <p className="text-sm opacity-90">Ages {data.age}</p>
                </div>

                <div className="mb-6 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">
                      ${data.monthly}
                    </span>
                    <span className="text-gray-800">/month</span>
                  </div>
                  {isHsaApproved && tier.key === "senior" && (
                    <div className="mt-3 flex justify-center">
                      <HsaBadge />
                    </div>
                  )}
                </div>

                <ul className="mb-6 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-sm text-gray-900">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/join"
                  className={`block w-full rounded-lg px-6 py-3 text-center font-semibold transition-all ${
                    tier.popular
                      ? "bg-linear-to-r from-secondary to-primary text-white hover:shadow-lg"
                      : "bg-gray-100 text-primary hover:bg-gray-200"
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl bg-linear-to-r from-secondary to-primary p-8 text-center text-white shadow-xl"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <Users className="h-10 w-10" />
          <h3 className="text-3xl font-bold">
            Household cap: ${pricing.householdCap}/month
          </h3>
        </div>
        <p className="mx-auto max-w-3xl text-xl opacity-90">
          No matter how large your family, you&apos;ll never pay more than $
          {pricing.householdCap} per month for complete coverage.
        </p>
        <div className="mt-6 border-t border-white/30 pt-6">
          <p className="mb-2 text-lg font-semibold">Example: family of 5</p>
          <p className="opacity-90">
            2 adults (45+) + 3 children = normally $297/month → capped at{" "}
            <span className="text-2xl font-bold">${pricing.householdCap}/month</span>
          </p>
        </div>
      </motion.div>

      <div className="mt-8">
        <PricingDisclaimer />
      </div>
    </div>
  );
}
