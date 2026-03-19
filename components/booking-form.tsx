'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    vehicle: '',
    service: '',
    dateTime: '',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const services = [
    'Stage 1 - Exterior Only',
    'Stage 1 - Interior Only',
    'Stage 1 - Full Detail',
    'Stage 2 - Exterior Only',
    'Stage 2 - Interior Only',
    'Stage 2 - Full Detail',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Booking submitted:', formData)
    setSubmitSuccess(true)
    setIsSubmitting(false)

    // Reset after success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        area: '',
        vehicle: '',
        service: '',
        dateTime: '',
        notes: '',
      })
    }, 3000)
  }

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

  if (submitSuccess) {
    return (
      <section id="booking" className="py-20 bg-black min-h-screen flex items-center justify-center">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-white/5 border border-green-600/50 rounded-lg p-8 space-y-4">
            <h3 className="text-3xl font-bold text-white">Thanks for your request!</h3>
            <p className="text-gray-300">
              We've received your booking request. We'll be in touch within 2 hours to confirm.
            </p>
            <p className="text-blue-400 font-semibold">
              Call us at (804) 300-6441 for faster response
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">Book Your Detail</h2>
            <p className="text-gray-300">
              Call or text for fastest response, or send a request below.
            </p>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <a
              href="tel:+18043006441"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-600/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Call or Text</p>
                <p className="text-xl font-bold text-white">(804) 300-6441</p>
              </div>
            </a>
            <a
              href="mailto:info@qcautodetailing.com"
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-600/50 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-bold text-white">info@qcautodetailing.com</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  placeholder="(804) 555-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  City/Area *
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  placeholder="Richmond, Short Pump, etc."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Vehicle Year/Make/Model *
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                  placeholder="2023 Honda Civic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Preferred Date/Time Window
              </label>
              <input
                type="text"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                placeholder="e.g., Saturday morning, next week anytime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black/50 border border-white/20 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
                placeholder="Any special notes about your vehicle condition or requests..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
            >
              {isSubmitting ? 'Submitting...' : 'Request Booking'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
