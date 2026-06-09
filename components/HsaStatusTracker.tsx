"use client";

import { ShieldCheck, Info, CheckCircle2, Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { MEMBERSHIP_PLANS } from "@/lib/content/membership-pricing";

export function HsaStatusTracker() {
  // Get HSA limits from environment variables with fallbacks
  const hsaLimitIndividual = process.env.NEXT_PUBLIC_HSA_LIMIT_INDIVIDUAL
    ? parseInt(process.env.NEXT_PUBLIC_HSA_LIMIT_INDIVIDUAL, 10)
    : 150;
  const hsaLimitFamily = process.env.NEXT_PUBLIC_HSA_LIMIT_FAMILY
    ? parseInt(process.env.NEXT_PUBLIC_HSA_LIMIT_FAMILY, 10)
    : 300;
  const currentPlanSummary = MEMBERSHIP_PLANS.map(
    (plan) => `${plan.name} ${plan.monthlyPrice}${plan.priceNote}`,
  ).join(" | ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1B2B3A] text-white p-6 rounded-3xl border border-teal-500/30 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-teal-400 w-5 h-5" />
          <h3 className="font-bold text-lg">2026 HSA/FSA Eligibility</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="w-4 h-4 text-gray-400 hover:text-teal-400 transition-colors cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-gray-900 border-gray-800 text-xs">
              <p className="font-semibold mb-1">IRS Notice 2026-5</p>
              <p>DPC fees under ${hsaLimitIndividual}/mo (individual) or ${hsaLimitFamily}/mo (family) are now HSA-compatible medical expenses as of January 1, 2026. Perfect for &quot;The Missing Middle&quot; who need affordable healthcare options.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center mb-4">
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-teal-500/20">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">IRS Limit</p>
          <p className="text-2xl font-bold text-teal-400">${hsaLimitIndividual}<span className="text-sm font-normal text-gray-500">/mo</span></p>
          <p className="text-xs text-gray-500 mt-1">Individual</p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-teal-500/20">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Current Plans</p>
          <p className="text-lg font-bold text-white">{currentPlanSummary}</p>
          <p className="text-xs text-gray-500 mt-1">Confirm plan details with the clinic</p>
        </div>
      </div>

      <div className="bg-teal-500/20 backdrop-blur-sm rounded-xl p-3 border border-teal-500/30">
        <div className="flex items-center gap-2 justify-center mb-2">
          <CheckCircle2 className="w-5 h-5 text-teal-400" />
          <p className="text-sm font-semibold text-teal-400">HSA Eligible</p>
        </div>
        <div className="flex items-center gap-2 justify-center text-xs text-gray-300">
          <Calendar className="w-3 h-3" />
          <span>Effective January 1, 2026</span>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          Use your HSA/FSA funds to pay membership fees
        </p>
      </div>
    </motion.div>
  );
}
