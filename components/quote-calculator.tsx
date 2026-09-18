'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Car, Sparkles, Clock, CheckCircle } from 'lucide-react'
import { PRICING_MATRIX, ServiceType, VehicleType } from '@/lib/constants'

const SERVICE_OPTIONS: { id: ServiceType; label: string; desc: string }[] = [
  {
    id: 'full-detail',
    label: 'Full Detail',
    desc: 'Complete interior reset & exterior wash + ceramic spray sealant',
  },
  {
    id: 'interior-only',
    label: 'Interior Only',
    desc: 'Deep cabin scrub, vacuum, leather treatment & UV protection',
  },
  {
    id: 'exterior-only',
    label: 'Exterior Only',
    desc: 'Foam contact wash, iron decon, wheel cleaning & ceramic finish',
  },
]

const VEHICLE_OPTIONS: { id: VehicleType; label: string; examples: string }[] = [
  {
    id: 'sedan',
    label: 'Sedan / Coupe',
    examples: 'Civic, Accord, Model 3, C-Class, Camry',
  },
  {
    id: 'small-suv',
    label: 'Small SUV / Crossover',
    examples: 'RAV4, CR-V, Model Y, Macan, Outback',
  },
  {
    id: 'truck-suv',
    label: 'Large SUV / Truck / Van',
    examples: 'F-150, Silverado, Tahoe, Suburban, Odyssey',
  },
]

export function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceType>('full-detail')
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('sedan')
  const [isCalculating, setIsCalculating] = useState(false)

  const handleSelectService = (id: ServiceType) => {
    if (id === selectedService) return
    setIsCalculating(true)
    setSelectedService(id)
    setTimeout(() => setIsCalculating(false), 220)
  }

  const handleSelectVehicle = (id: VehicleType) => {
    if (id === selectedVehicle) return
    setIsCalculating(true)
    setSelectedVehicle(id)
    setTimeout(() => setIsCalculating(false), 220)
  }

  const pricingData = useMemo(() => {
    return PRICING_MATRIX[selectedService][selectedVehicle]
  }, [selectedService, selectedVehicle])

  const selectedServiceLabel = SERVICE_OPTIONS.find((s) => s.id === selectedService)?.label || ''
  const selectedVehicleLabel = VEHICLE_OPTIONS.find((v) => v.id === selectedVehicle)?.label || ''

  return (
    <section id="quote-calculator" className="bg-[#070709] py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Service Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Service Estimate
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your package and vehicle type below to see an instant, transparent service estimate and duration based on our pricing matrix.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle electric blue ambient glow in corner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Steps Column (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Select Service */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">
                    1
                  </span>
                  <label className="text-base font-bold text-white uppercase tracking-wider text-xs">
                    Choose Service Package
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {SERVICE_OPTIONS.map((service) => {
                    const isSelected = selectedService === service.id
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => handleSelectService(service.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 ${isSelected
                            ? 'bg-blue-600/15 border-blue-500 shadow-[0_0_15px_rgba(0,82,255,0.25)]'
                            : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                          }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold text-sm sm:text-base ${isSelected ? 'text-blue-300' : 'text-white'}`}>
                              {service.label}
                            </span>
                            {service.id === 'full-detail' && (
                              <span className="text-[10px] uppercase tracking-wider font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-1 leading-normal">{service.desc}</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${isSelected
                              ? 'border-blue-400 bg-blue-600 text-white'
                              : 'border-white/30 bg-transparent'
                            }`}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Select Vehicle Type */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold">
                    2
                  </span>
                  <label className="text-base font-bold text-white uppercase tracking-wider text-xs">
                    Choose Vehicle Type
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VEHICLE_OPTIONS.map((vehicle) => {
                    const isSelected = selectedVehicle === vehicle.id
                    return (
                      <button
                        type="button"
                        key={vehicle.id}
                        onClick={() => handleSelectVehicle(vehicle.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${isSelected
                            ? 'bg-blue-600/15 border-blue-500 shadow-[0_0_15px_rgba(0,82,255,0.25)]'
                            : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                          }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Car className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-gray-400'}`} />
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected
                                ? 'border-blue-400 bg-blue-600 text-white'
                                : 'border-white/30 bg-transparent'
                              }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <div>
                          <div className={`font-semibold text-xs sm:text-sm ${isSelected ? 'text-blue-300' : 'text-white'}`}>
                            {vehicle.label}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-1 leading-tight">
                            {vehicle.examples}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Price Output Card (Right 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-blue-950/20 to-black/40 border border-blue-500/30 rounded-2xl p-6 sm:p-7 relative">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                    Estimated Service Cost
                  </span>
                  <span className="text-[11px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    Est. {pricingData.estimatedTime}
                  </span>
                </div>

                {/* Animated Price Output with Skeleton/Shimmer State */}
                <div className="py-6 text-center relative min-h-[110px] flex flex-col items-center justify-center">
                  {isCalculating ? (
                    <div className="flex flex-col items-center justify-center space-y-2.5 w-full py-1">
                      <div className="h-12 w-48 rounded-xl bg-blue-500/20 animate-pulse border border-blue-500/30" />
                      <div className="h-3 w-32 rounded bg-white/10 animate-pulse" />
                    </div>
                  ) : (
                    <motion.div
                      key={`${selectedService}-${selectedVehicle}`}
                      initial={{ scale: 0.95, opacity: 0.7 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,82,255,0.4)]">
                        {pricingData.range}
                      </span>
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        {selectedServiceLabel} · {selectedVehicleLabel}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-gray-400 leading-relaxed mt-4">
                  * Final pricing is confirmed on arrival based on vehicle condition. Additional fees apply for heavy dog hair, mud, deep upholstery extraction, or biohazards.
                </p>
              </div>

              {/* Book CTA Button */}
              <div className="pt-6">
                <a
                  href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all duration-200"
                  id="calculator-book-cta"
                >
                  <span>Request This Service Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
