'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface HeroProps {
  onBookingClick: () => void
}

export function Hero({ onBookingClick }: HeroProps) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9101-RPL5I3KJwhydAFNNcm4fcijUZb1DHd.jpg)' }}>
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto max-w-2xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 sm:text-sm">Mobile Auto Detailing in Richmond VA</span>
          <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">Performance-Level Detailing, Delivered to Your Driveway.</h1>
          <div className="flex flex-col items-center justify-center gap-6 pt-6 sm:flex-row">
            <Button size="lg" className="bg-blue-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-500 hover:shadow-xl" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>View Services</Button>
            <button className="text-lg font-bold text-white transition-all duration-200 hover:text-blue-300 hover:underline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact for Fast Quote →</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
