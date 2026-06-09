"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, DollarSign, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE_ASSETS } from "@/lib/images";
import { MEMBERSHIP_PLANS } from "@/lib/content/membership-pricing";

const seniorPlan = MEMBERSHIP_PLANS.find((plan) => plan.id === "senior");
const seniorMembershipMonthlyPrice = seniorPlan?.monthlyPrice ?? "$119";
const seniorMembershipMonthlyAmount = Number(
  seniorMembershipMonthlyPrice.replace(/[^0-9]/g, ""),
);

interface SeniorSavingsCalculatorProps {
  variant?: 'full' | 'compact';
}

export function SeniorSavingsCalculator({ variant = 'full' }: SeniorSavingsCalculatorProps) {
  const isCompact = variant === 'compact';
  const [currentMedigap, setCurrentMedigap] = useState(217); // Default average
  const [newMedigap, setNewMedigap] = useState(173); // ~20% lower default
  const [useHSA, setUseHSA] = useState(true);

  const dpcMembership = seniorMembershipMonthlyAmount;

  // Calculate Medigap savings
  const medigapSavings = currentMedigap - newMedigap;
  const medigapAnnualSavings = medigapSavings * 12;

  // Calculate HSA tax benefit (30% savings)
  const hsaTaxRate = 0.30;
  const dpcAfterHSA = useHSA ? dpcMembership * (1 - hsaTaxRate) : dpcMembership;
  const hsaTaxSavings = useHSA ? dpcMembership * hsaTaxRate : 0;
  const hsaAnnualSavings = hsaTaxSavings * 12;

  // Total savings
  const totalMonthlySavings = medigapSavings - dpcAfterHSA;
  const totalAnnualSavings = medigapAnnualSavings + hsaAnnualSavings - (dpcMembership * 12);
  const totalHealthStackValue = medigapAnnualSavings + hsaAnnualSavings;

  // Compact version - simplified display
  if (isCompact) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-2xl p-4 bg-linear-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border-2 border-teal-200 dark:border-teal-800"
      >
        <div className="relative z-10">
          <h3 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase tracking-wide">
            Medicare Medigap Savings
          </h3>
          <div className="font-black text-teal-600 dark:text-teal-400 text-2xl mb-1">
            ${totalHealthStackValue.toLocaleString()}+
          </div>
          <p className="text-[10px] text-slate-600 dark:text-slate-400 font-bold">
            Annual savings per household
          </p>
        </div>
      </motion.div>
    );
  }

  // Full version - complete calculator
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-orange-200 dark:border-orange-800 relative overflow-hidden"
    >
      {/* Senior Wellness Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src={SITE_ASSETS.marketing.seniorWellness}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          <h3 className="text-2xl font-bold text-primary">Senior Savings Calculator</h3>
        </div>

        {/* Medigap Switch Input */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-primary mb-4">
            Step 1: Medigap Plan Switch Savings
          </label>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">Current Medigap Premium</span>
                <span className="font-bold text-red-600">${currentMedigap}/mo</span>
              </div>
              <input
                type="range"
                min="150"
                max="400"
                step="5"
                value={currentMedigap}
                onChange={(e) => setCurrentMedigap(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$150/mo</span>
                <span>$400/mo</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300">New Plan Premium (15-25% lower)</span>
                <span className="font-bold text-green-600">${newMedigap}/mo</span>
              </div>
              <input
                type="range"
                min="120"
                max={currentMedigap * 0.85}
                step="5"
                value={newMedigap}
                onChange={(e) => setNewMedigap(Number(e.target.value))}
                className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>${Math.round(currentMedigap * 0.75)}/mo</span>
                <span>${Math.round(currentMedigap * 0.85)}/mo</span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-900 dark:text-blue-300">Monthly Medigap Savings:</span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${medigapSavings}/mo
                </span>
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                Annual: ${medigapAnnualSavings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* HSA Tax Benefit Toggle */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-primary mb-4">
            Step 2: HSA Tax Benefit
          </label>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-gray-700 dark:text-gray-300">Use HSA Funds</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={useHSA}
                  onChange={(e) => setUseHSA(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </div>

            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>DPC Membership Fee:</span>
                <span className="font-semibold">${dpcMembership}/mo</span>
              </div>
              {useHSA && (
                <>
                  <div className="flex justify-between text-green-700 dark:text-green-400">
                    <span>HSA Tax Savings (30%):</span>
                    <span className="font-semibold">-${hsaTaxSavings.toFixed(2)}/mo</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-green-200 dark:border-green-800">
                    <span>Net DPC Cost After HSA:</span>
                    <span className="text-green-600 dark:text-green-400">${dpcAfterHSA.toFixed(2)}/mo</span>
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-400 mt-2">
                    Annual HSA Tax Savings: ${hsaAnnualSavings.toLocaleString()}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Results Display */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-6 h-6" />
            <h4 className="text-xl font-bold">Net Monthly Savings</h4>
          </div>
          <div className="text-4xl font-bold mb-2">
            ${totalMonthlySavings.toFixed(2)}/mo
          </div>
          <div className="text-sm opacity-90">
            Medigap Savings: ${medigapSavings}/mo - DPC Cost: ${dpcAfterHSA.toFixed(2)}/mo
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-r from-primary to-secondary text-white rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-6 h-6" />
            <h4 className="text-xl font-bold">Total Annualized Health Stack Value</h4>
          </div>
          <div className="text-4xl font-bold mb-2">
            ${totalHealthStackValue.toLocaleString()}+
          </div>
          <div className="text-sm opacity-90 space-y-1">
            <div>Medigap Savings: ${medigapAnnualSavings.toLocaleString()}/year</div>
            {useHSA && (
              <div>HSA Tax Savings: ${hsaAnnualSavings.toLocaleString()}/year</div>
            )}
          </div>
        </motion.div>

        {/* Kicker Text */}
        <div className="mt-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border-l-4 border-teal-500">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong className="text-teal-700 dark:text-teal-400">Thanks to the 2026 OBBBA,</strong> your DPC fee is now a qualified medical expense. Use your HSA to pay your {seniorMembershipMonthlyPrice} membership tax-free!
            <Link href="#hsa-tracker" className="text-teal-600 dark:text-teal-400 underline ml-1">
              Learn more about HSA eligibility
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
