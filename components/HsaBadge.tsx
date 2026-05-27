"use client";

import { Shield, Info } from "lucide-react";

export function HsaBadge() {
  if (process.env.NEXT_PUBLIC_HSA_APPROVED !== "true") {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-lg">
      <Shield className="w-4 h-4 text-green-600" />
      <span className="text-sm font-semibold text-green-800">2026 HSA Approved</span>
      <div className="relative group">
        <Info className="w-4 h-4 text-green-600 cursor-help" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
          Under 2026 guidelines, DPC fees are fully HSA-eligible up to $150/mo for individuals.
        </div>
      </div>
    </div>
  );
}
