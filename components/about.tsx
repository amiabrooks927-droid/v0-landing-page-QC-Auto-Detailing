'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            About Quality Control Auto Detailing
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Quality Control Auto Detailing provides mobile auto detailing in Richmond and surrounding areas. We offer Stage 1 and Stage 2 full interior and exterior details, plus interior-only and exterior-only packages. Services include deep interior cleaning, exterior wash and decontamination, wheels and tires, and spray ceramic protection, with add-ons like pet hair and headlight restoration. We come to you with clear pricing and convenient scheduling.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
