'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Zap, Sparkles, Shield, Clock } from 'lucide-react'

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'We Come To You',
    description: 'Mobile service brings professional detailing to your location',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Deep Interior Cleaning',
    description: 'Thorough cleaning of every detail inside your vehicle',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Exterior Shine & Protection',
    description: 'Professional polish and protective coatings applied',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Fast Booking Process',
    description: 'Easy online booking with convenient appointment times',
  },
]

export function BenefitsStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 p-6 text-center backdrop-blur-sm">
                <motion.div
                  className="flex justify-center mb-4 text-blue-500"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
