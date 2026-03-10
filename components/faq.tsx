'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does a full detail service take?',
    answer:
      'A full detail service typically takes 3-4 hours depending on your vehicle\'s size and condition. We\'ll provide an accurate estimate when you book.',
  },
  {
    question: 'Do you offer mobile detailing?',
    answer:
      'Yes! We come to you. Our mobile service brings professional detailing right to your driveway or workplace in Richmond and surrounding areas.',
  },
  {
    question: 'What products do you use?',
    answer:
      'We use premium, professional-grade detailing products that are safe for all vehicle types. All products are eco-friendly and biodegradable.',
  },
  {
    question: 'Can you remove scratches and swirl marks?',
    answer:
      'Yes, our clay bar and polishing treatments can significantly reduce minor scratches and swirl marks. We\'ll assess your vehicle and let you know what\'s achievable.',
  },
  {
    question: 'Do you offer add-on services?',
    answer:
      'Absolutely! We offer engine bay detailing, headlight restoration, leather conditioning, wheel deep cleaning, and odor elimination services.',
  },
  {
    question: 'What is ceramic coating and is it worth it?',
    answer:
      'Ceramic coating is a liquid polymer that bonds to your car\'s paint, providing long-lasting protection. It\'s excellent for maintaining shine and protecting against UV damage.',
  },
  {
    question: 'How often should I get my car detailed?',
    answer:
      'We recommend detailing every 6-12 months depending on your vehicle\'s usage and environmental conditions. Regular detailing helps maintain your car\'s value.',
  },
  {
    question: 'Do you work on all vehicle types?',
    answer:
      'Yes, we detail all vehicle types including sedans, SUVs, trucks, sports cars, and luxury vehicles. Each receives the same high-quality professional treatment.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We service Richmond and surrounding areas including Glen Allen, West End, Short Pump, and nearby communities. Contact us to confirm your location.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Simply click the "Book Your Detail" button on our website, fill out your information and preferred date/time, and we\'ll confirm your appointment. Easy as that!',
  },
]

export function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Have questions about our detailing services? Find answers below.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 px-6 rounded-lg hover:bg-slate-900/70 transition-all duration-200"
                >
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="text-lg font-semibold text-white text-balance">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
