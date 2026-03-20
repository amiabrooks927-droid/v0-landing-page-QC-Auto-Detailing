'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface Service {
  stage: 'Stage 1' | 'Stage 2'
  type: 'Exterior Only' | 'Interior Only' | 'Full Detail'
  title: string
  description: string
  pricing: string
}

const services: Service[] = [
  {
    stage: 'Stage 1',
    type: 'Exterior Only',
    title: 'Full Exterior Detail',
    description: 'Thorough exterior detail with foam wash, bug & tar removal, wheels & tires, spray ceramic protection, and glass.',
    pricing: 'Sedan from $100 · Small SUV $120 · Large SUV/Truck $140',
  },
  {
    stage: 'Stage 1',
    type: 'Interior Only',
    title: 'Full Interior Detail',
    description: 'Complete vacuum, full wipe-down, crevices and vents, light stain agitation, dressing, and streak-free interior glass.',
    pricing: 'Sedan from $120 · Small SUV $140 · Large SUV/Truck $160',
  },
  {
    stage: 'Stage 1',
    type: 'Full Detail',
    title: 'In & Out',
    description: 'Thorough interior + exterior detail. Ideal if you want a full reset without going to Stage 2.',
    pricing: 'Sedan from $180 · Small SUV $210 · Large SUV/Truck $240',
  },
  {
    stage: 'Stage 2',
    type: 'Exterior Only',
    title: 'Protection Exterior Detail',
    description: 'Stage 1 exterior plus more decon and longer-lasting protection for a sharper, sportier finish.',
    pricing: 'Sedan from $150 · Small SUV $170 · Large SUV/Truck $190',
  },
  {
    stage: 'Stage 2',
    type: 'Interior Only',
    title: 'Deep Interior Detail',
    description: 'Stage 1 interior plus more stain work, more steam, and extra time in all the tight spots.',
    pricing: 'Sedan from $160 · Small SUV $190 · Large SUV/Truck $220',
  },
  {
    stage: 'Stage 2',
    type: 'Full Detail',
    title: 'Protection Full Detail (In & Out)',
    description: 'Full, top-to-bottom detail plus extra decon and upgraded, longer-lasting exterior protection.',
    pricing: 'Sedan from $240 · Small SUV $270 · Large SUV/Truck $300',
  },
]

interface ServicesProps {
  onBookingClick?: () => void
}

export function Services({ onBookingClick }: ServicesProps) {
  const isStage2 = (stage: string) => stage === 'Stage 2'

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Services & Pricing</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Choose Stage 1 or Stage 2, interior, exterior, or full in & out. All prices are starting at and may vary based on vehicle size and condition. Coupes and hatchbacks = sedans; 3-row and oversized = Large SUV/Truck.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col border-2 transition-all duration-300 hover:shadow-lg ${
                isStage2(service.stage)
                  ? 'bg-black border-blue-500 text-white'
                  : 'bg-white border-blue-500 text-black'
              }`}
            >
              {/* Header Pills */}
              <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap bg-blue-600 text-white"
                >
                  {service.stage}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                    isStage2(service.stage)
                      ? 'bg-white/20 text-white'
                      : 'bg-black/10 text-black'
                  }`}
                >
                  {service.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className={`mb-6 flex-grow ${isStage2(service.stage) ? 'text-gray-300' : 'text-gray-700'}`}>
                {service.description}
              </p>

              {/* Pricing */}
              <p className={`font-semibold mb-6 text-sm ${isStage2(service.stage) ? 'text-gray-300' : 'text-gray-600'}`}>
                {service.pricing}
              </p>

              {/* Button */}
              <Button
                className={`w-full font-semibold py-2 ${
                  isStage2(service.stage)
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-black hover:bg-gray-900 text-white'
                }`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book This Service
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
