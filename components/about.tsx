'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const benefits = [
    'Mobile in RVA',
    'Stage 1 & Stage 2 full details',
    'Clear "starting at" pricing',
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            About Quality Control Auto Detailing
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Quality Control Auto Detailing is a mobile detailing service serving Richmond, Henrico, and the greater RVA area. We bring brick-and-mortar level results to your driveway with stage-based packages, professional products, and a sporty, performance-inspired finish.
          </p>

          {/* Benefits List */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-black font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
