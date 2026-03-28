'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onBookingClick: () => void
}

export function Hero({ onBookingClick }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative w-full min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AD%20background-uwAnJQYPcyOWjLTxPPOp2oK6elg6P2.jpg)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <motion.div
          className="space-y-6 max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="text-blue-400 uppercase text-xs sm:text-sm font-bold tracking-widest">
              Mobile Auto Detailing in Richmond VA
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Performance-Level Detailing, Delivered to Your Driveway.
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services & Pricing
            </Button>
            <button
              className="text-white hover:text-gray-200 transition-colors font-semibold text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact for Fast Quote →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
