'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

type VehicleSize = 'sedan' | 'small-suv' | 'large-suv'

interface VehiclePricing {
  sedan: string
  smallSUV: string
  largeSUV: string
}

interface StageOption {
  label: string
  pricing: VehiclePricing
}

interface StageCard {
  stage: string
  description: string
  options: StageOption[]
}

const stageCards: StageCard[] = [
  {
    stage: 'Stage 1',
    description: 'Full, thorough interior & exterior detail. Ideal for a complete reset.',
    options: [
      {
        label: 'Stage 1 – Interior Only',
        pricing: { sedan: '$120', smallSUV: '$140', largeSUV: '$160' },
      },
      {
        label: 'Stage 1 – Exterior Only',
        pricing: { sedan: '$100', smallSUV: '$120', largeSUV: '$140' },
      },
      {
        label: 'Stage 1 – Full Detail (In & Out)',
        pricing: { sedan: '$180', smallSUV: '$210', largeSUV: '$240' },
      },
    ],
  },
  {
    stage: 'Stage 2',
    description: 'Stage 1 plus extra decontamination and longer-lasting protection.',
    options: [
      {
        label: 'Stage 2 – Interior Only',
        pricing: { sedan: '$160', smallSUV: '$190', largeSUV: '$220' },
      },
      {
        label: 'Stage 2 – Exterior Only',
        pricing: { sedan: '$150', smallSUV: '$170', largeSUV: '$190' },
      },
      {
        label: 'Stage 2 – Full Detail (In & Out)',
        pricing: { sedan: '$240', smallSUV: '$270', largeSUV: '$300' },
      },
    ],
  },
]

const vehicleSizeOptions = [
  { value: 'sedan', label: 'Sedan / Coupe / Hatchback' },
  { value: 'small-suv', label: 'Small SUV' },
  { value: 'large-suv', label: 'Large SUV / Truck' },
]

interface ServicesProps {
  onBookingClick?: () => void
}

export function Services({ onBookingClick }: ServicesProps) {
  const [expandedStage, setExpandedStage] = useState<string | null>(null)
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>('sedan')

  const getPriceForSize = (pricing: VehiclePricing): string => {
    switch (vehicleSize) {
      case 'small-suv':
        return pricing.smallSUV
      case 'large-suv':
        return pricing.largeSUV
      default:
        return pricing.sedan
    }
  }

  const getVehicleSizeLabel = (): string => {
    switch (vehicleSize) {
      case 'small-suv':
        return 'Small SUV'
      case 'large-suv':
        return 'Large SUV / Truck'
      default:
        return 'Sedan / Coupe'
    }
  }

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Services & Pricing</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Choose Stage 1 or Stage 2 for a complete reset or enhanced protection. All prices are starting at and may vary based on vehicle size and condition.
          </p>

          {/* Vehicle Size Selector */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 flex-wrap mb-8"
          >
            {vehicleSizeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setVehicleSize(option.value as VehicleSize)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                  vehicleSize === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          {/* Selected Vehicle Size Display */}
          <p className="text-blue-400 font-semibold text-sm">
            Pricing for: <span className="text-white">{getVehicleSizeLabel()}</span>
          </p>
        </motion.div>

        {/* Stage Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stageCards.map((card, index) => {
            const firstOption = card.options[2] // Full Detail
            const startingPrice = getPriceForSize(firstOption.pricing)

            return (
              <motion.div
                key={card.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border-2 border-blue-500 rounded-3xl overflow-hidden flex flex-col"
              >
                {/* Service Image */}
                <div className="relative w-full h-48 sm:h-56 bg-gray-900">
                  <Image
                    src={index === 0 ? '/stage1-detail.jpg' : '/stage2-detail.jpg'}
                    alt={`${card.stage} Detail Service`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Stage Title */}
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {card.stage}
                  </h3>

                {/* Starting Price */}
                <p className="text-2xl font-bold text-blue-400 mb-1">
                  {startingPrice}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  (full detail - {getVehicleSizeLabel().toLowerCase()})
                </p>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>

                {/* Choose Stage Button */}
                <motion.button
                  onClick={() =>
                    setExpandedStage(expandedStage === card.stage ? null : card.stage)
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-between mb-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Options
                  <motion.div
                    animate={{ rotate: expandedStage === card.stage ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                {/* Options Dropdown */}
                <AnimatePresence>
                  {expandedStage === card.stage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 overflow-hidden"
                    >
                      {card.options.map((option, optIndex) => (
                        <motion.button
                          key={optIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: optIndex * 0.05 }}
                          onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                            setExpandedStage(null)
                          }}
                          className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-4 text-left transition-all duration-200"
                        >
                          <p className="text-white font-semibold text-sm sm:text-base">
                            {option.label}
                          </p>
                          <p className="text-blue-300 text-sm">
                            {getPriceForSize(option.pricing)}
                          </p>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
