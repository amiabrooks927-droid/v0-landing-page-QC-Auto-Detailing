'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Packages } from '@/components/packages'
import { WhyChooseUs } from '@/components/why-choose-us'
import { BookingForm } from '@/components/booking-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar onBookingClick={() => {}} />
      <Hero onBookingClick={() => {}} />
      <Packages onBookingClick={() => {}} />
      <WhyChooseUs />
      <BookingForm />
      <Footer />
    </div>
  )
}
