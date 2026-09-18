'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Sparkles, Truck } from 'lucide-react'
import { FAQS } from '@/lib/constants'

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'detailing' | 'logistics'>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'all' || faq.category === activeCategory
  )

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Detailing Knowledge & Service FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn what sets professional detailing apart, how we protect paint and leather, and what to expect during your mobile appointment.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all')
              setOpenIndex(0)
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/[0.05] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            All Questions ({FAQS.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('detailing')
              setOpenIndex(0)
            }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'detailing'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/[0.05] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Detailing & Protection (What is / Differences)</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('logistics')
              setOpenIndex(0)
            }}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'logistics'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white/[0.05] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Mobile Service & Policies</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500/60 bg-[#0e0f14] shadow-[0_0_25px_rgba(0,82,255,0.12)]'
                    : 'border-white/10 bg-[#0a0a0d] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/25">
                        {faq.category === 'detailing' ? 'Detailing Knowledge' : 'Mobile Service'}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-base sm:text-lg transition-colors block ${
                        isOpen ? 'text-blue-300' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 mt-1 ${
                      isOpen
                        ? 'border-blue-400/50 bg-blue-500/20 text-blue-300 rotate-180'
                        : 'border-white/10 bg-white/5 text-gray-400 rotate-0'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/[0.06]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
