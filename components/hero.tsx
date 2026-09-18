'use client'

import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Sparkles, ShieldCheck, Clock, CheckCircle } from 'lucide-react'

interface HeroProps {
  onBookingClick?: () => void
}

export function Hero({ onBookingClick }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9101-RPL5I3KJwhydAFNNcm4fcijUZb1DHd.jpg)',
        }}
      >
        {/* Layered dark overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-black/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-[0_0_15px_rgba(0,82,255,0.2)]"
        >
          <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>Mobile Auto Detailing · Richmond, VA</span>
        </motion.div>

        {/* Bold Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6"
        >
          Performance-Level Detailing,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white drop-shadow-[0_0_20px_rgba(0,82,255,0.4)]">
            Delivered to Your Driveway.
          </span>
        </motion.h1>

        {/* Supporting Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-10 text-balance"
        >
          Professional interior and exterior detailing tailored to your vehicle.
          We bring precision care, commercial-grade equipment, and showroom finish directly to you.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            id="hero-services-cta"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gray-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-blue-400/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            id="hero-quote-cta"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Get a Fast Quote</span>
          </button>
        </motion.div>

        {/* Key Feature Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-400 max-w-2xl w-full"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
            <span>We Come To You</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Ceramic Sealant Finish</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Transparent Pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
