'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  Calendar,
  Zap,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  Award,
} from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  email: string
  area: string
  vehicle: string
  service: string
  dateTime: string
  notes: string
  inspectionAcknowledged: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  area?: string
  vehicle?: string
  service?: string
  inspectionAcknowledged?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    area: '',
    vehicle: '',
    service: 'Full Detail',
    dateTime: '',
    notes: '',
    inspectionAcknowledged: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact phone number'
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format'
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Please enter your city, county, or neighborhood'
    }

    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Please enter your vehicle year, make, and model'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a requested service'
    }

    if (!formData.inspectionAcknowledged) {
      newErrors.inspectionAcknowledged =
        'Please acknowledge the pre-service inspection policy to submit a quote request'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: val }))

    // Clear individual error on change and reset submit error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (submitError) {
      setSubmitError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('https://formspree.io/f/xrpbeqlv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          area: formData.area,
          vehicle: formData.vehicle,
          service: formData.service,
          dateTime: formData.dateTime,
          notes: formData.notes,
          inspectionAcknowledged: formData.inspectionAcknowledged ? 'Yes' : 'No',
          _subject: 'New Quote Request — Quality Control Auto Detailing',
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        // Reset the form only after Formspree confirms success
        setFormData({
          name: '',
          phone: '',
          email: '',
          area: '',
          vehicle: '',
          service: 'Full Detail',
          dateTime: '',
          notes: '',
          inspectionAcknowledged: false,
        })
        setErrors({})
        setSubmitError(null)
      } else {
        setSubmitError(
          'We could not send your request right now. Please try again, call us, or text us directly.'
        )
      }
    } catch {
      setSubmitError(
        'We could not send your request right now. Please try again, call us, or text us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      area: '',
      vehicle: '',
      service: 'Full Detail',
      dateTime: '',
      notes: '',
      inspectionAcknowledged: false,
    })
    setErrors({})
    setSubmitError(null)
    setSubmitSuccess(false)
  }

  return (
    <section id="contact" className="bg-[#070709] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/10">
      <div id="booking" className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast & Free Custom Quote</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your vehicle and location below for a personalized quote with clear, transparent pricing.
          </p>
        </div>

        {/* Two-Column Grid: Sidebar (5 cols) + Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Info & Water Notice Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="rounded-2xl border border-white/10 bg-[#0e0e12] p-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call or Text Direct</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-500/60 hover:bg-blue-500/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Inquiry</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Crucial Water & Electrical Outlet Callout Notice */}
            <div className="rounded-2xl border border-blue-500/50 bg-gradient-to-b from-blue-950/40 to-[#0e111a] p-6 shadow-[0_0_25px_rgba(0,82,255,0.18)]">
              <div className="flex items-center gap-2.5 text-blue-400 font-bold text-sm sm:text-base mb-2">
                <AlertTriangle className="w-5 h-5 shrink-0 text-blue-400" />
                <span>Water & Outlet Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {CONTACT_INFO.waterOutletNotice}
              </p>
              <div className="mt-4 pt-3 border-t border-blue-500/20 flex items-center gap-4 text-xs text-blue-200">
                <span className="flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-400" /> Hose Spigot
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> 120V Standard Power
                </span>
              </div>
            </div>
          </div>

          {/* Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-12 px-4 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,82,255,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Request Received
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto mt-2 leading-relaxed">
                      Request received. Thank you for contacting Quality Control Auto Detailing. We will review your vehicle details and follow up with a custom quote and available appointment times.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto py-3 px-6 rounded-xl font-medium text-sm text-gray-300 bg-white/10 hover:bg-white/15 transition-colors"
                    >
                      Request Another Quote
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  action="https://formspree.io/f/xrpbeqlv"
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  {/* Hidden subject field for Formspree notification emails */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Quote Request — Quality Control Auto Detailing"
                  />
                  {/* Trust Signals Ribbon (Item 4) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-blue-500/[0.08] border border-blue-500/20 text-xs">
                    <div className="flex items-center gap-2 text-blue-200">
                      <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-semibold">Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-200">
                      <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-semibold">Responds in ~2 Hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-200">
                      <Award className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-semibold">Locally Owned in RVA</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Williams"
                        className={`w-full rounded-xl bg-black/60 border px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/15 focus:border-blue-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Phone Number <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(804) 555-0147"
                        className={`w-full rounded-xl bg-black/60 border px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/15 focus:border-blue-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="marcus@example.com"
                      className={`w-full rounded-xl bg-black/60 border px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/15 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  {/* Service Area / Neighborhood */}
                  <div>
                    <label htmlFor="area" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Your City / Area in Richmond <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="area"
                      type="text"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="e.g. Richmond (Fan District), Short Pump, Midlothian"
                      className={`w-full rounded-xl bg-black/60 border px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                        errors.area
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-white/15 focus:border-blue-500'
                      }`}
                    />
                    {errors.area && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.area}</p>
                    )}
                  </div>

                  {/* Vehicle & Service Two-Col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Vehicle Type */}
                    <div>
                      <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Vehicle Type / Model <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="vehicle"
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g. 2022 Honda CR-V (Black)"
                        className={`w-full rounded-xl bg-black/60 border px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none transition-colors ${
                          errors.vehicle
                            ? 'border-red-500/80 focus:border-red-500'
                            : 'border-white/15 focus:border-blue-500'
                        }`}
                      />
                      {errors.vehicle && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.vehicle}</p>
                      )}
                    </div>

                    {/* Desired Service */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Service Package
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Full Detail">Full Detail (Interior + Exterior)</option>
                        <option value="Interior Only">Interior Only Detail</option>
                        <option value="Exterior Only">Exterior Only Detail</option>
                        <option value="Custom / Multiple Vehicles">Custom / Multiple Vehicles</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Timing */}
                  <div>
                    <label htmlFor="dateTime" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Preferred Timeline or Desired Date (Optional)
                    </label>
                    <input
                      id="dateTime"
                      type="text"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleChange}
                      placeholder="e.g. As soon as possible, this weekend, or next Tuesday"
                      className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Notes / Special Requests */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Vehicle Condition Notes or Add-Ons (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Mention any pet hair, stains, child seat cleaning, engine bay cleaning, etc."
                      className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Pre-Service Inspection Acknowledgment Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        id="inspectionAcknowledged"
                        type="checkbox"
                        name="inspectionAcknowledged"
                        required
                        checked={formData.inspectionAcknowledged}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-white/20 bg-black/60 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 focus:ring-2 shrink-0 cursor-pointer accent-blue-600"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        I understand that Quality Control Auto Detailing may perform a visual pre-service inspection and take photos or video of my vehicle before work begins to document visible pre-existing conditions. I understand that normal detailing may reveal pre-existing damage, wear, defects, stains, paint issues, or other conditions that were not previously visible. <span className="text-blue-400">*</span>
                      </span>
                    </label>
                    {errors.inspectionAcknowledged && (
                      <p className="text-xs text-red-400 mt-1.5 ml-7">
                        {errors.inspectionAcknowledged}
                      </p>
                    )}
                  </div>

                  {/* Friendly Error State with Visible Phone/Text Fallback */}
                  {submitError && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-200 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-white">
                            We could not send your request right now. Please try again, call us, or text us directly.
                          </p>
                          <p className="text-xs text-red-300 mt-1">
                            Direct line:{' '}
                            <a
                              href={`tel:${CONTACT_INFO.phoneRaw}`}
                              className="underline font-bold text-white hover:text-blue-300 ml-1"
                            >
                              {CONTACT_INFO.phone}
                            </a>
                          </p>
                        </div>
                      </div>
                      <a
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-white text-xs font-semibold border border-red-500/40 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call / Text</span>
                      </a>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 disabled:opacity-60 transition-all duration-200 flex items-center justify-center gap-2 group"
                    id="submit-quote-btn"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Your Quote Request...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        <span>Request a Free Quote</span>
                      </>
                    )}
                  </button>

                  {/* Satisfaction Guarantee & Peace of Mind Note */}
                  <div className="pt-2 text-center flex items-center justify-center gap-2 text-xs text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                    <span><strong>Satisfaction Guaranteed:</strong> Honest, transparent quotes. No obligation to book.</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
