'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  glow?: boolean
  variant?: 'straight' | 'angled' | 'wave'
}

export function SectionDivider({ glow = true, variant = 'angled' }: SectionDividerProps) {
  if (variant === 'angled') {
    return (
      <div className="relative w-full h-8 overflow-hidden pointer-events-none bg-transparent">
        {/* Subtle angled SVG divider */}
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-full text-black/40 fill-current opacity-60"
        >
          <path d="M0,0 L600,28 L1200,0 L1200,40 L0,40 Z" />
        </svg>

        {/* Central glowing hairline */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />
        {glow && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-4 bg-blue-500/15 blur-md pointer-events-none" />
        )}
      </div>
    )
  }

  return (
    <div className="relative w-full py-4 flex items-center justify-center pointer-events-none">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {glow && (
        <div className="absolute w-64 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent blur-sm" />
      )}
    </div>
  )
}
