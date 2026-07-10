'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, X, Check } from 'lucide-react'
import Image from 'next/image'

type VehicleSize = 'sedan' | 'small-suv' | 'large-suv'
type WorkflowStep = 'package' | 'size' | 'addons'

interface AddOn {
  id: string
  label: string
  description: string
  price: string
}

interface StageOption {
  label: string
  shortDescription: string
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

const addOns: AddOn[] = [
  { id: 'pet-hair', label: 'Pet Hair Removal', description: 'Deep extraction for all pet hair from interior.', price: 'from $30' },
  { id: 'carpet-shampoo', label: 'Carpet & Cloth Seat Shampoo', description: 'Hot water extraction for carpets and fabric seats.', price: 'from $50' },
  { id: 'leather', label: 'Leather Cleaning & Conditioning', description: 'Deep clean and protect leather surfaces.', price: 'from $40' },
  { id: 'headlight', label: 'Headlight Restoration', description: 'Restore clarity to oxidized headlights.', price: 'from $80' },
  { id: 'engine', label: 'Engine Bay Cleaning', description: 'Safe, detailed cleaning of engine bay.', price: 'from $60' },
]

const stageCards: StageCard[] = [
  {
    stage: 'Stage 1',
    description: 'A thorough reset delivering a clean, refreshed vehicle with essential protection to maintain results.',
    options: [
      {
        label: 'Stage 1 – Interior Only',
        shortDescription: 'Complete vacuum, wipe-down, and light stain treatment for a fresh interior.',
        price: { sedan: '$120', 'small-suv': '$140', 'large-suv': '$160' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_384885593_zromTczKqHLZkl02JNR9PKaLV6ThfnJU-OD5ZtiWR2reYrwgHEO0JVp8tgd2X6M.jpg',
      },
      {
        label: 'Stage 1 – Exterior Only',
        shortDescription: 'Foam wash, bug removal, and protective spray to bring out your vehicle\'s shine.',
        price: { sedan: '$100', 'small-suv': '$120', 'large-suv': '$140' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5a5d63e138e8bcc1f815a9ff8ea5d0c4-injq9qY4os7ECAhdeJ1QWBBpLHCZcg.jpg',
      },
      {
        label: 'Stage 1 – Full Detail (In & Out)',
        shortDescription: 'Complete interior and exterior refresh for a total reset.',
        price: { sedan: '$180', 'small-suv': '$210', 'large-suv': '$240' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81e4f22d507b3575386f46807e703c3c-GH4OKz8TGvzdUZEMk0PxMQbStBOl1v.jpg',
      },
    ],
  },
  {
    stage: 'Stage 2',
    description: 'Our premium finish with extra decontamination, intensive stain work, and longer-lasting protection.',
    options: [
      {
        label: 'Stage 2 – Interior Only',
        shortDescription: 'Deep interior with extra steam, stain work, and protection for a showroom finish.',
        price: { sedan: '$160', 'small-suv': '$190', 'large-suv': '$220' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adecbf1557ef5ae55633abd1c63ab271-nW6vNIBgSDhvncTMmHJbWtHEDv7FRc.jpg',
      },
      {
        label: 'Stage 2 – Exterior Only',
        shortDescription: 'Enhanced exterior with extra decon and premium protection for durability.',
        price: { sedan: '$150', 'small-suv': '$170', 'large-suv': '$190' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_397247724_XCpf2rqFdYkQ5NTW0ZkSA4dlQLY2eOv2-69Y1DHXDoBwXHbWEHm9MnWuL0dhW2O.jpg',
      },
      {
        label: 'Stage 2 – Full Detail (In & Out)',
        shortDescription: 'Complete top-to-bottom detail with enhanced protection for your vehicle\'s best finish.',
        price: { sedan: '$240', 'small-suv': '$270', 'large-suv': '$300' },
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2210225131-612x612-qOO3VCm2Q3hxlEbLdkS8yJlo3LC3W1.webp',
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
  const [workflowStep, setWorkflowStep] = useState<WorkflowStep>('package')
  const [selectedPackage, setSelectedPackage] = useState<{ stage: string; option: string } | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
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
            Choose Stage 1 or Stage 2 for a complete reset or enhanced protection.
          </p>
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
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {card.stage}
              </h3>

              {/* Stage Description */}
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
                          <p className="text-gray-400 text-xs sm:text-sm mb-4">
                            {option.shortDescription}
                          </p>

                          {/* Pricing for all vehicle sizes */}
                          <div className="space-y-2 mb-4 p-3 bg-white/5 rounded-lg">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-300">Sedan</span>
                              <span className="text-blue-300 font-bold">{option.price.sedan}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-300">Small SUV</span>
                              <span className="text-blue-300 font-bold">{option.price['small-suv']}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-300">Large SUV/Truck</span>
                              <span className="text-blue-300 font-bold">{option.price['large-suv']}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedPackage({ stage: card.stage, option: option.label })
                              setWorkflowStep('size')
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold text-sm transition-colors"
                          >
                            Book Now
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

        {/* Workflow Modal */}
        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
              onClick={() => {
                setSelectedPackage(null)
                setWorkflowStep('package')
                setSelectedAddOns([])
              }}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-black border-2 border-blue-500 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedPackage(null)
                    setWorkflowStep('package')
                    setSelectedAddOns([])
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Size Selection Step */}
                {workflowStep === 'size' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white">Select Vehicle Size</h3>
                    <div className="space-y-3">
                      {(['sedan', 'small-suv', 'large-suv'] as VehicleSize[]).map((size) => (
                        <motion.button
                          key={size}
                          onClick={() => {
                            setSelectedVehicleSize(size)
                            setWorkflowStep('addons')
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full p-4 bg-white/10 hover:bg-blue-600 border border-white/20 rounded-lg text-white font-semibold transition-colors text-left"
                        >
                          {size === 'sedan' && '🚗 Car / Sedan'}
                          {size === 'small-suv' && '🚙 Small SUV'}
                          {size === 'large-suv' && '🚕 Large SUV or Truck'}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Add-Ons Step */}
                {workflowStep === 'addons' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Add‑On Services</h3>
                      <p className="text-gray-400 text-sm">Enhance your package with optional services</p>
                    </div>

                    <div className="space-y-3">
                      {addOns.map((addon) => (
                        <motion.button
                          key={addon.id}
                          onClick={() => toggleAddOn(addon.id)}
                          whileHover={{ scale: 1.01 }}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${selectedAddOns.includes(addon.id)
                              ? 'bg-blue-600/20 border-blue-500'
                              : 'bg-white/5 border-white/20 hover:border-white/40'
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${selectedAddOns.includes(addon.id)
                                  ? 'bg-blue-600 border-blue-600'
                                  : 'border-gray-400'
                                }`}
                            >
                              {selectedAddOns.includes(addon.id) && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <div className="flex-grow">
                              <p className="text-white font-semibold">{addon.label}</p>
                              <p className="text-gray-400 text-xs">{addon.description}</p>
                              <p className="text-blue-300 text-sm mt-1">{addon.price}</p>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4">
                      <button
                        onClick={() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                          setSelectedPackage(null)
                          setWorkflowStep('package')
                          setSelectedAddOns([])
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                      >
                        Continue to Booking
                      </button>
                      <button
                        onClick={() => setWorkflowStep('size')}
                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-lg transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
