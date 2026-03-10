'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface PricingProps {
  onBookingClick: () => void
}

const pricingPlans = [
  {
    name: 'Interior Detail',
    startingPrice: '$89',
    description: 'Deep clean of your vehicle\'s interior',
    features: [
      'Vacuum all carpets',
      'Seat cleaning',
      'Dashboard treatment',
      'Window cleaning',
      'Air freshener',
    ],
    highlighted: false,
  },
  {
    name: 'Full Detail',
    startingPrice: '$199',
    description: 'Complete interior & exterior service',
    features: [
      'Interior Detail',
      'Exterior Detail',
      'Paint protection',
      'Ceramic coating',
      'Engine bay cleaning',
    ],
    highlighted: true,
  },
  {
    name: 'Exterior Detail',
    startingPrice: '$99',
    description: 'Professional exterior restoration',
    features: [
      'Hand wash & dry',
      'Clay bar treatment',
      'Tire shine',
      'Window cleaning',
      'Mirror polishing',
    ],
    highlighted: false,
  },
]

export function Pricing({ onBookingClick }: PricingProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Simple Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pricing varies based on vehicle size and condition. Contact us for custom quotes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card
                className={`flex flex-col h-full p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-blue-600/20 to-slate-900/50 border-blue-500/50'
                    : 'bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50'
                } backdrop-blur-sm`}
              >
                {plan.highlighted && (
                  <div className="mb-4">
                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">
                    {plan.startingPrice}
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Starting price</p>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={onBookingClick}
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  } text-white`}
                >
                  Book Your Detail
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
