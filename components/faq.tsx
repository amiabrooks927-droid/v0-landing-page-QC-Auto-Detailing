'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  ['What services do you offer?', 'We offer Full Detail, Interior Detail, and Exterior Detail services, plus optional add-ons for specific needs.'],
  ['Where do you provide service?', 'We provide mobile detailing throughout Richmond, Henrico, Chesterfield, Hanover, Midlothian, and nearby communities.'],
  ['How long does a detail take?', 'Timing depends on the service, vehicle size, and condition. We will confirm an expected service window when you book.'],
  ['Do I need to provide water and power?', 'Yes. Please provide access to an outdoor water source and a nearby electrical outlet for our equipment.'],
  ['Can I add services to my booking?', 'Yes. Add-ons include pet hair removal, carpet or cloth seat shampoo, leather cleaning and conditioning, headlight restoration, engine bay cleaning, spray ceramic protection, and bug and tar removal.'],
  ['How do I book?', 'Choose the service you need, then complete the booking form or call or text us at (804) 300-6441.'],
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return <section id="faq" className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-4xl"><div className="mb-12 text-center"><h2 className="mb-5 text-4xl font-bold text-white sm:text-5xl">Frequently Asked Questions</h2><p className="text-gray-300">Everything you need to know before booking.</p></div><div className="space-y-4">{faqItems.map(([question, answer], index) => <div key={question}><button aria-expanded={openIndex === index} onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between gap-4 rounded-lg bg-white/10 p-6 text-left text-white transition-colors hover:bg-white/20"><span className="font-semibold">{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-blue-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} /></button><motion.div initial={false} animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }} className="overflow-hidden"><p className="border-t border-white/10 bg-white/5 px-6 py-4 leading-relaxed text-gray-300">{answer}</p></motion.div></div>)}</div></div></section>
}
