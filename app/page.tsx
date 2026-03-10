'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { BenefitsStrip } from '@/components/benefits-strip'
import { Services } from '@/components/services'
import { Results } from '@/components/results'
import { Testimonials } from '@/components/testimonials'
import { TrustStats } from '@/components/trust-stats'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar onBookingClick={() => setIsBookingOpen(true)} />
      <Hero onBookingClick={() => setIsBookingOpen(true)} />
      <BenefitsStrip />
      <Services onBookingClick={() => setIsBookingOpen(true)} />
      <Results />
      <Testimonials />
      <TrustStats />
      <Pricing onBookingClick={() => setIsBookingOpen(true)} />
      <FAQ />
      <FinalCTA onBookingClick={() => setIsBookingOpen(true)} />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}
