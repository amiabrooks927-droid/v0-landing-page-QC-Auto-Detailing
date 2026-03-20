'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the difference between Stage 1 and Stage 2?',
    answer: 'Stage 1 is a thorough wash and clean with spray ceramic protection. Stage 2 is more decontamination, longer-lasting protection, and extra attention to detail for a showroom finish. Stage 2 takes more time and delivers a higher level of finish.',
  },
  {
    question: 'How long does a detail take?',
    answer: 'Stage 1 details typically take 2-3 hours depending on vehicle size and condition. Stage 2 details take 4-6 hours. We work efficiently without rushing to ensure quality results.',
  },
  {
    question: 'Do you offer interior-only or exterior-only services?',
    answer: 'Yes, we offer both! You can choose a full detail (in & out) or just interior or just exterior. Prices vary depending on which service you select.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We serve Richmond and the surrounding areas including Henrico, Chesterfield, Hanover, and beyond. Contact us to confirm if we service your location.',
  },
  {
    question: 'Do you offer add-on services?',
    answer: 'Yes! Add-ons include pet hair removal, headlight restoration, engine bay detailing, leather conditioning, and more. Ask about availability and pricing when booking.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least a few days in advance to secure your preferred date and time. During peak seasons, booking 1-2 weeks ahead is ideal.',
  },
  {
    question: 'Do I need to provide water and power?',
    answer: 'No, we bring our own water supply and power equipment. We\'re completely self-contained and ready to work at your location. Just provide us with a safe place to park and access to your vehicle.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Have a question? Check out our FAQs or contact us directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-white flex-grow">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-blue-400" />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-white/5 text-gray-300 text-base leading-relaxed border-t border-white/10">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
