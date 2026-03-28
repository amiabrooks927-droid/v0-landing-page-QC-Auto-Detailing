'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

type VehicleSize = 'sedan' | 'small-suv' | 'large-suv'

interface StageOption {
  label: string
  price: {
    sedan: string
    'small-suv': string
    'large-suv': string
  }
  image: string
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
        price: { sedan: '$120', 'small-suv': '$140', 'large-suv': '$160' },
        image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
      },
      {
        label: 'Stage 1 – Exterior Only',
        price: { sedan: '$100', 'small-suv': '$120', 'large-suv': '$140' },
        image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=300&fit=crop',
      },
      {
        label: 'Stage 1 – Full Detail (In & Out)',
        price: { sedan: '$180', 'small-suv': '$210', 'large-suv': '$240' },
        image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=300&fit=crop',
      },
    ],
  },
  {
    stage: 'Stage 2',
    description: 'Stage 1 plus extra decontamination and longer-lasting protection.',
    options: [
      {
        label: 'Stage 2 – Interior Only',
        price: { sedan: '$160', 'small-suv': '$190', 'large-suv': '$220' },
        image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
      },
      {
        label: 'Stage 2 – Exterior Only',
        price: { sedan: '$150', 'small-suv': '$170', 'large-suv': '$190' },
        image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=300&fit=crop',
      },
      {
        label: 'Stage 2 – Full Detail (In & Out)',
        price: { sedan: '$240', 'small-suv': '$270', 'large-suv': '$300' },
        image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=300&fit=crop',
      },
    ],
  },
]

interface ServicesProps {
  onBookingClick?: () => void
}

export function Services({ onBookingClick }: ServicesProps) {
  const [expandedStage, setExpandedStage] = useState<string | null>(null)
  const [selectedVehicleSize, setSelectedVehicleSize] = useState<VehicleSize>('sedan')

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
            Choose Stage 1 or Stage 2 for a complete reset or enhanced protection.
          </p>

          {/* Vehicle Size Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-white font-semibold">Select Vehicle Size:</span>
            <div className="flex gap-3">
              {(['sedan', 'small-suv', 'large-suv'] as VehicleSize[]).map((size) => (
                <motion.button
                  key={size}
                  onClick={() => setSelectedVehicleSize(size)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    selectedVehicleSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {size === 'sedan' && 'Sedan'}
                  {size === 'small-suv' && 'Small SUV'}
                  {size === 'large-suv' && 'Large SUV/Truck'}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stage Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stageCards.map((card, index) => (
            <motion.div
              key={card.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border-2 border-blue-500 rounded-3xl p-8 flex flex-col"
            >
              {/* Stage Title */}
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {card.stage}
              </h3>

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
                    className="space-y-4 overflow-hidden"
                  >
                    {card.options.map((option, optIndex) => (
                      <motion.div
                        key={optIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: optIndex * 0.05 }}
                        className="bg-white/10 border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-200"
                      >
                        {/* Service Image */}
                        <div className="relative h-32 sm:h-40 overflow-hidden">
                          <Image
                            src={option.image}
                            alt={option.label}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Service Info */}
                        <div className="p-4">
                          <p className="text-white font-semibold text-sm sm:text-base mb-2">
                            {option.label}
                          </p>
                          <p className="text-blue-300 font-bold text-lg mb-4">
                            {option.price[selectedVehicleSize]}
                          </p>
                          <button
                            onClick={() => {
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                              setExpandedStage(null)
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold text-sm transition-colors"
                          >
                            Request Quote
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
