'use client'

import { motion } from 'framer-motion'

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Mobile in RVA',
      description: 'We come to your driveway. No need to drive to a location.',
    },
    {
      title: 'Full, Thorough Details',
      description: 'Not just a wash. We detail every surface inside and out.',
    },
    {
      title: 'Stage 1 & Stage 2',
      description: 'Choose your detail level – basic or premium protection.',
    },
    {
      title: 'Straightforward Pricing',
      description: 'No hidden fees. Prices based on vehicle size, nothing else.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-white text-center"
          >
            Why Choose Us
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-600/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
