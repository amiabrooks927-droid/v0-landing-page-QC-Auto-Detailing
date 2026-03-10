'use client'

import { motion } from 'framer-motion'
import { Car, Award, MapPin, Zap } from 'lucide-react'

const stats = [
  {
    icon: <Car className="w-12 h-12" />,
    value: '500+',
    label: 'Vehicles Detailed',
  },
  {
    icon: <Award className="w-12 h-12" />,
    value: '100%',
    label: 'Customer Satisfaction',
  },
  {
    icon: <Zap className="w-12 h-12" />,
    value: '5★',
    label: 'Average Rating',
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    value: '8+',
    label: 'Years Experience',
  },
]

export function TrustStats() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/30 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                className="flex justify-center mb-4 text-blue-500"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
