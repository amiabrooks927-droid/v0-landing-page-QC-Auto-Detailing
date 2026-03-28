'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail } from 'lucide-react'

export function Contact() {
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

    console.log('Contact submitted:', formData)
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

  if (submitSuccess) {
    return (
      <section id="contact" className="py-20 bg-gray-100 min-h-screen flex items-center justify-center">
        <motion.div
          className="max-w-2xl mx-auto px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 space-y-4">
            <h3 className="text-3xl font-bold text-black">Thanks for your request!</h3>
            <p className="text-gray-700">
              We've received your booking request. We'll be in touch within 2 hours to confirm.
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Request a Special Quote</h2>
          <p className="text-gray-700 text-lg">For custom or specialty services not listed in our standard packages, please fill out the form below and we'll get back to you with a personalized quote.</p>
            Call or text for fastest response, or send a request below and we'll confirm your time and final quote.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 sm:mb-16"
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-blue-600">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Phone</h3>
                <a href="tel:+18043006441" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                  (804) 300-6441
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 border-2 border-blue-600">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-black text-lg mb-1">Email</h3>
                <a href="mailto:info@qcautodetailing.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all">
                  info@qcautodetailing.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 sm:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-black font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-black font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
                placeholder="(804) 555-0147"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-black font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
                placeholder="your@email.com"
              />
            </div>

            {/* Area */}
            <div>
              <label className="block text-black font-semibold mb-2">City / Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
                placeholder="e.g., Richmond, Henrico"
              />
            </div>

            {/* Vehicle */}
            <div>
              <label className="block text-black font-semibold mb-2">Vehicle (Year / Make / Model)</label>
              <input
                type="text"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
                placeholder="e.g., 2022 Honda Civic"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-black font-semibold mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
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

          {/* Preferred Date/Time */}
          <div>
            <label className="block text-black font-semibold mb-2">Preferred Date / Time Window</label>
            <input
              type="text"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black"
              placeholder="e.g., Saturday afternoon, Next Tuesday morning"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-black font-semibold mb-2">Notes About Condition</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black resize-none"
              placeholder="Pet hair, stains, or any other details..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Request Booking'}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
