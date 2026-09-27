'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Sparkles, CalendarCheck, CheckCircle2 } from 'lucide-react'
import { PILLARS } from '@/lib/constants'

const PILLAR_ICONS = [
  Sparkles,      // Thorough
  Truck,         // Mobile
  ShieldCheck,   // Care-Driven
  CalendarCheck, // Simple
]

export function About() {
  return (
    <section id="about" className="bg-[#08080a] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 max-w-full h-96 bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top: Two-column layout with story and luxury interior photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Business description & story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <span>About Quality Control</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Performance detailing that comes directly to you.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              <strong className="text-white font-semibold">Quality Control Auto Detailing</strong> provides mobile interior and exterior detailing throughout Richmond and nearby communities. We bring meticulous, performance-minded craftsmanship directly to your home or office driveway.
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Our approach combines thorough preparation, thoughtful product selection, and careful finishing techniques to refresh your cabin, restore exterior gloss, and protect high-wear surfaces. Whether your vehicle needs a focused interior reset, a complete exterior wash with ceramic sealant, or the full detail experience, we take pride in delivering showroom-level satisfaction with personal attention.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Locally Owned & Operated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero Compromises on Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Luxury interior photo (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9068.JPG-BiRu1CtMq8UcCHtvK9HFM1llGhTPHo.jpeg"
                alt="Detailed luxury vehicle interior cabin"
                className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 border border-white/10">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                  Attention to Detail
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Immaculate cabin surfaces, leather conditioning, and zero-residue finishing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: 2x2 Grid of the 4 Key Pillars */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our 4 Core Pillars
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              The principles that guide every vehicle we service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((pillar, index) => {
              const Icon = PILLAR_ICONS[index] || Sparkles

              return (
                <motion.div
                  key={pillar.tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#0e0e12] p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(0,82,255,0.15)] transition-[border-color,box-shadow] duration-300 transform-gpu group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
                        {pillar.tag}
                      </span>
                      <h4 className="text-xl font-bold text-white mt-0.5">
                        {pillar.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
