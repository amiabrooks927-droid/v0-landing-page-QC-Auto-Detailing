'use client'

import { motion } from 'framer-motion'

interface Feature {
  label: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    label: 'STAGE-BASED',
    title: 'Clear Packages',
    description: 'Stage 1 and Stage 2 options for exterior, interior, or full in & out.',
  },
  {
    label: 'THOROUGH',
    title: 'Real Details',
    description: 'We go after every surface we can safely reach, not just a wash and vacuum.',
  },
  {
    label: 'SPORTY',
    title: 'Performance Look',
    description: 'Glossy, hydrophobic finish inspired by performance builds and track cars.',
  },
  {
    label: 'MOBILE',
    title: 'We Come To You',
    description: 'Serving Richmond, Henrico, and nearby areas using your power and water.',
  },
]

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Drivers Choose <span className="text-blue-400">Quality Control</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            We run simple Stage 1 and Stage 2 packages so you always know exactly what you&apos;re getting. Both stages are full, thorough details. Stage 2 adds more decontamination and longer-lasting protection for a sharper, sportier finish.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/5 border border-white/20 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-200"
            >
              {/* Label */}
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
                {feature.label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
