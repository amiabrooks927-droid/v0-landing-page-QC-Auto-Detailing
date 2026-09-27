'use client'

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { QuoteCalculator } from '@/components/quote-calculator'
import { Gallery } from '@/components/gallery'
import { ServiceArea } from '@/components/service-area'
import { About } from '@/components/about'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'
import { SectionDivider } from '@/components/section-divider'
import { MobileEstimateModal } from '@/components/mobile-estimate-modal'
import { useState } from 'react'

export default function Home() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false)

  return (
    <main className="min-h-screen min-w-0 bg-black text-white selection:bg-blue-600 selection:text-white flex flex-col relative">
      <Navbar onEstimateClick={() => setIsEstimateOpen(true)} />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <QuoteCalculator onEstimateClick={() => setIsEstimateOpen(true)} />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <ServiceArea />
      <SectionDivider />
      <About />
      <FAQ />
      <Contact />
      <Footer onEstimateClick={() => setIsEstimateOpen(true)} />
      <FloatingCTA />
      <MobileEstimateModal open={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />
    </main>
  )
}
