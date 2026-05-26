"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Users } from "lucide-react";
import { HsaBadge } from "./HsaBadge";

interface Tier {
  name: string;
  ageRange: string;
  price: number;
  features: string[];
  color: string;
  popular?: boolean;
  note?: string;
}

export default function PricingTiers() {
  const tiers: Tier[] = [
    {
      name: "Young Adult",
      ageRange: "19-44 years",
      price: 69,
      features: [
        "Unlimited sick visits",
        "Annual wellness exams",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      name: "Adult",
      ageRange: "45-64 years",
      price: 89,
      popular: true,
      features: [
        "Unlimited sick visits",
        "Comprehensive wellness exams",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
        "Enhanced preventive care",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Senior",
      ageRange: "65+ years",
      price: 109,
      features: [
        "Unlimited sick visits",
        "Medicare coordination",
        "Chronic disease management",
        "Minor procedures",
        "Direct communication with Dr. Pike",
        "Wholesale pharmacy & labs",
        "Specialized senior care",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div>
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
              tier.popular ? "border-secondary ring-4 ring-secondary/20" : "border-gray-200"
            } hover:shadow-2xl transition-all duration-300`}
          >
            {tier.popular && (
              <div className="bg-linear-to-r from-secondary to-primary text-white text-sm font-semibold px-4 py-2 text-center">
                ⭐ Most Popular
              </div>
            )}

            <div className="p-6">
              <div className={`bg-linear-to-r ${tier.color} text-white rounded-xl p-4 mb-4 text-center`}>
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm opacity-90">{tier.ageRange}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">${tier.price}</span>
                  <span className="text-gray-800">/month</span>
                </div>
                {tier.note && (
                  <p className="text-xs text-gray-800 mt-1 italic">{tier.note}</p>
                )}
                <div className="flex justify-center mt-3">
                  <HsaBadge />
                </div>
                {tier.name === "Senior" && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold border border-green-300 dark:border-green-700">
                    <span>✓</span>
                    <span>Fully HSA-Eligible per 2026 Guidelines</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-900 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/join"
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? "bg-linear-to-r from-secondary to-primary text-white hover:shadow-lg"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
                }`}
              >
                Select Plan
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Household Cap */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-linear-to-r from-secondary to-primary text-white rounded-2xl p-8 text-center shadow-xl"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Users className="w-10 h-10" />
          <h3 className="text-3xl font-bold">Household Cap: $250/month</h3>
        </div>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          No matter how large your family, you&apos;ll never pay more than $250 per month for complete coverage.
        </p>
        <div className="mt-6 pt-6 border-t border-white/30">
          <p className="text-lg font-semibold mb-2">Example: Family of 5</p>
          <p className="opacity-90">
            2 Adults (45+) + 3 Children = Normally $297/month → Capped at <span className="font-bold text-2xl">$250/month</span>
          </p>
        </div>
      </motion.div>

      {/* Pricing Disclaimer */}
      <div className="mt-8 text-xs text-muted-foreground text-center">
        <p>Pricing subject to change. Contact Direct Care Indy for current rates and enrollment details.</p>
      </div>
    </div>
  );
}
