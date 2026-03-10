'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface FinalCTAProps {
  onBookingClick: () => void
}

export function FinalCTA({ onBookingClick }: FinalCTAProps) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/30" />
      
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
            Ready to Make Your Car Look
            <span className="block text-blue-400">Brand New Again?</span>
          </h2>

          <p className="text-xl text-gray-200 max-w-2xl mx-auto text-balance">
            Experience the Quality Control difference today. Professional mobile detailing that comes to you with premium results.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              onClick={onBookingClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-8 text-xl font-semibold shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl transition-all duration-300"
            >
              Book Your Detail Now
            </Button>
          </motion.div>

          <p className="text-sm text-gray-400">
            Fast. Convenient. Professional. Quality assured.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
