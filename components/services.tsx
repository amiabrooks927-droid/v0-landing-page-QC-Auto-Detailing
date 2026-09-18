'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Plus } from 'lucide-react'
import { PACKAGES, ADD_ONS } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Packages</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mobile Detailing Services
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every package delivers comprehensive care with paint-safe techniques and commercial-grade formulas directly to your driveway.
          </p>
        </motion.div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PACKAGES.map((pkg, index) => {
            const isPopular = pkg.popular

            return (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 ${isPopular
                    ? 'bg-[#10131d] border-2 border-blue-500 shadow-[0_0_35px_rgba(0,82,255,0.28)]'
                    : 'bg-[#0e0e11] border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(0,82,255,0.15)]'
                  }`}
              >
                {/* Most Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-4 py-1 rounded-full bg-blue-600 border border-blue-400/50 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/50 inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Card Image */}
                <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">{pkg.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{pkg.description}</p>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="space-y-3 mb-6 flex-grow">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Includes:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                          <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Now Button */}
                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <a
                      href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center transition-all duration-200 ${isPopular
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 hover:shadow-blue-500/60'
                          : 'bg-white/8 hover:bg-blue-600 text-white border border-white/15 hover:border-blue-600'
                        }`}
                      id={`book-service-${pkg.id}`}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* 13 Add-On Services Pill Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Plus className="w-3.5 h-3.5" />
              <span>Custom Upgrades</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              13 Specialized Add-On Services
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Target specialized problem areas such as embedded pet hair, cloth staining, dull trim, or engine grime.
              Add any of these to your package during booking or inquiry.
            </p>
          </div>

          {/* Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ADD_ONS.map((addOn) => (
              <div
                key={addOn}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/80 hover:bg-blue-500/[0.06] hover:shadow-[0_0_15px_rgba(0,82,255,0.2)] transition-all duration-200 cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform shrink-0" />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {addOn}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
