'use client'

import { motion } from 'framer-motion'

const features = [
  ['THOROUGH', 'Real Details', 'We clean every surface we can safely reach, not just the obvious areas.'],
  ['MOBILE', 'We Come To You', 'Professional detailing at your driveway across Richmond and nearby areas.'],
  ['CARE-DRIVEN', 'Quality Work', 'We take the time to leave your vehicle looking refreshed and properly finished.'],
  ['SIMPLE', 'Easy Booking', 'Choose the service you need, share your details, and we will confirm your visit.'],
]

export function WhyChooseUs() {
  return <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-12 text-center sm:mb-16"><h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Why Drivers Choose <span className="text-blue-400">Quality Control</span></h2><p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">Careful mobile detailing, clear service options, and a finish you can feel good about.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{features.map(([label, title, description], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="rounded-xl border border-white/20 bg-white/5 p-6"><p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">{label}</p><h3 className="mb-3 text-xl font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-gray-300">{description}</p></motion.div>)}</div></div></section>
}
