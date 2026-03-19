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
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-12 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white"
          >
            Quality Control Auto Detailing – Mobile in RVA
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Stage 1 and Stage 2 full interior/exterior details that come to your driveway.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <Button
              onClick={() => {
                document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })
              }}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              View Packages & Book
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
