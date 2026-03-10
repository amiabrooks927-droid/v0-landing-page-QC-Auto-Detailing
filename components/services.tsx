'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface ServicesProps {
  onBookingClick: () => void
}

const services = [
  {
    title: 'Interior Detail',
    description: 'Deep clean of your vehicle\'s interior',
    features: [
      'Vacuum all carpets & floors',
      'Clean all seat surfaces',
      'Dashboard & console cleaning',
      'Window cleaning',
      'Air freshener included',
    ],
  },
  {
    title: 'Exterior Detail',
    description: 'Professional exterior restoration',
    features: [
      'Hand wash & dry',
      'Clay bar treatment',
      'Tire shine',
      'Window cleaning',
      'Mirror polishing',
    ],
  },
  {
    title: 'Full Detail',
    description: 'Complete interior & exterior service',
    features: [
      'Interior & Exterior Detail',
      'Paint protection film',
      'Ceramic coat application',
      'Engine bay cleaning',
      'Premium finish',
    ],
  },
  {
    title: 'Add-On Services',
    description: 'Enhance your detailing package',
    features: [
      'Engine bay detailing',
      'Headlight restoration',
      'Leather conditioning',
      'Wheel deep clean',
      'Odor elimination',
    ],
  },
]

export function Services({ onBookingClick }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Professional Auto Detailing Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from our range of professional detailing packages tailored to your vehicle's needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 p-8 flex flex-col h-full backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={onBookingClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
