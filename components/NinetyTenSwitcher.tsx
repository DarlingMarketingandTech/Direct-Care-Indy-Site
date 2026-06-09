"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import { SITE_ASSETS } from '@/lib/images'

export function NinetyTenSwitcher() {
  const [view, setView] = useState<'dpc' | 'insurance'>('dpc')

  const content = {
    dpc: {
      title: "The 90%: Day-to-Day Care",
      subtitle: "Managed by Direct Care Indy Membership",
      items: ["Included Sick Visits", "Chronic Disease Management", "Stitches & Minor Procedures", "Discounted Labs & Meds"],
      icon: <Activity className="w-6 h-6 text-[#8A9A8A]" />,
      color: "bg-[#8A9A8A]"
    },
    insurance: {
      title: "The 10%: Catastrophic Events",
      subtitle: "Managed by Your Insurance/Healthshare",
      items: ["Major Surgeries", "Hospital Stays & ICU", "Emergency Trauma", "Specialist Procedures"],
      icon: <ShieldAlert className="w-6 h-6 text-[#2C3E50]" />,
      color: "bg-[#2C3E50]"
    }
  }

  return (
    <div className="max-w-2xl mx-auto section-card relative overflow-hidden">
      {/* Animated 90/10 Model SVG Background */}
      <div className="absolute inset-0 opacity-[0.02] hidden md:block">
        <motion.div
          animate={{
            scale: view === 'dpc' ? [1, 1.1, 1] : [1, 0.9, 1],
            opacity: view === 'dpc' ? [0.05, 0.1, 0.05] : [0.05, 0.02, 0.05],
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
        >
          <Image
            src={SITE_ASSETS.clinical.ninetyTen}
            alt="90/10 Model"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="relative z-10">
      <div className="flex bg-muted p-1 rounded-full mb-8 relative">
        <motion.div
          className={`absolute h-full rounded-full ${content[view].color} opacity-20`}
          layoutId="activeGlow"
          animate={{ x: view === 'dpc' ? 0 : '100%' }}
        />
        <button
          onClick={() => setView('dpc')}
          className={`flex-1 py-3 px-6 rounded-full transition-all z-10 font-medium min-h-[44px] flex items-center justify-center ${view === 'dpc' ? 'text-secondary shadow-sm bg-card' : 'text-muted-foreground'}`}
        >
          90% Routine Care
        </button>
        <button
          onClick={() => setView('insurance')}
          className={`flex-1 py-3 px-6 rounded-full transition-all z-10 font-medium min-h-[44px] flex items-center justify-center ${view === 'insurance' ? 'text-foreground shadow-sm bg-card' : 'text-muted-foreground'}`}
        >
          10% Emergencies
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${view === 'dpc' ? 'bg-secondary/20' : 'bg-primary/20'}`}>
              {content[view].icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-card-foreground">{content[view].title}</h3>
              <p className="text-muted-foreground">{content[view].subtitle}</p>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content[view].items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-card-foreground">
                <div className={`w-1.5 h-1.5 rounded-full ${content[view].color}`} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 p-4 bg-muted rounded-xl border-l-4 border-secondary border">
        <p className="text-sm font-semibold text-card-foreground mb-2">
          🚗 The Auto Insurance Analogy
        </p>
        <p className="text-sm text-muted-foreground italic">
          Insurance is for when you <strong>total the car</strong> (the 10% catastrophic events). We are the <strong>mechanic for your oil changes</strong> (the 90% routine care). You need both, but they serve different purposes.
        </p>
      </div>
      </div>
    </div>
  )
}
