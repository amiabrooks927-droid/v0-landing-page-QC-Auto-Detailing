'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface PackageCardProps {
  stage: string
  type: string
  description: string
  pricing: string
  onBook: () => void
}

function PackageCard({ stage, type, description, pricing, onBook }: PackageCardProps) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 hover:border-blue-600/50 transition-colors"
      whileHover={{ borderColor: 'rgb(0, 71, 255)' }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="text-blue-600 font-bold text-sm uppercase tracking-wider">
              {stage}
            </div>
            <h3 className="text-2xl font-bold text-white">
              {type}
            </h3>
            <p className="text-gray-400 text-sm">
              {description}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-gray-300 text-sm mb-6">
            {pricing}
          </p>
          <Button
            onClick={onBook}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Book This Service
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

interface PackagesProps {
  onBookingClick: () => void
}

export function Packages({ onBookingClick }: PackagesProps) {
  const packages = [
    {
      stage: 'STAGE 1',
      type: 'Exterior Only',
      description: 'Full exterior detail with wash, clay bar, and sealant.',
      pricing: 'Sedan from $100 · Small SUV $120 · Large SUV/Truck $140',
    },
    {
      stage: 'STAGE 1',
      type: 'Interior Only',
      description: 'Complete interior detail including vacuum, wipe-down, and protectant.',
      pricing: 'Sedan from $80 · Small SUV $100 · Large SUV/Truck $120',
    },
    {
      stage: 'STAGE 1',
      type: 'Full Detail',
      description: 'Complete interior and exterior detail service.',
      pricing: 'Sedan from $170 · Small SUV $210 · Large SUV/Truck $250',
    },
    {
      stage: 'STAGE 2',
      type: 'Exterior Only',
      description: 'Premium exterior with protection coating and advanced sealant.',
      pricing: 'Sedan from $150 · Small SUV $180 · Large SUV/Truck $220',
    },
    {
      stage: 'STAGE 2',
      type: 'Interior Only',
      description: 'Deep interior detail with premium protective treatments.',
      pricing: 'Sedan from $130 · Small SUV $160 · Large SUV/Truck $200',
    },
    {
      stage: 'STAGE 2',
      type: 'Full Detail',
      description: 'Premium full detail with all protection coatings and treatments.',
      pricing: 'Sedan from $280 · Small SUV $340 · Large SUV/Truck $420',
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
    <section id="packages" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Packages</h2>
            <p className="text-gray-400">Choose the detail level that works for you.</p>
          </motion.div>

          <motion.div className="space-y-4" variants={containerVariants}>
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PackageCard
                  stage={pkg.stage}
                  type={pkg.type}
                  description={pkg.description}
                  pricing={pkg.pricing}
                  onBook={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                    onBookingClick()
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
