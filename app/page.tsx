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

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white flex flex-col relative w-full max-w-full overflow-x-clip">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <QuoteCalculator />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <ServiceArea />
      <SectionDivider />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
