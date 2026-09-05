'use client'

import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'

const services = [
  { title: 'Full Detail', description: 'A complete interior and exterior reset for every surface of your vehicle.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81e4f22d507b3575386f46807e703c3c-OLnZ7kZUbZ98SXdOAsqlTLihFXr1jP.jpg', items: ['Full Vacuum', 'Interior Scrub and Wipe Down', 'UV Protectant on Vinyl, Rubber, Plastic', 'Leather Cleaning/Conditioning', 'Contact Wash', 'Iron Decontamination', 'Wheel and Tire Cleaning', 'Door Jambs + Gas Cap', 'Ceramic Spray Wax', 'Exterior Glass Cleaning and Rain Repellent'] },
  { title: 'Interior Only', description: 'A focused interior service that refreshes and protects your cabin from top to bottom.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adecbf1557ef5ae55633abd1c63ab271-nW6vNIBgSDhvncTMmHJbWtHEDv7FRc.jpg', items: ['Full Vacuum', 'Interior Scrub & Wipe Down', 'UV Protectant on Vinyl, Rubber, Plastic', 'Leather Cleaning & Conditioning', 'Interior Glass Cleaning'] },
  { title: 'Exterior Only', description: 'A complete exterior service for a cleaner, glossier, better-protected finish.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51c29fd95a956697e27fae65ea0ee02d-4Dpk1DHHEIS498SfZZLRZnWii9Ulhr.jpg', items: ['Contact Wash', 'Iron Decontamination', 'Wheel and Tire Cleaning', 'Door Jambs + Gas Cap', 'Ceramic Spray Wax', 'Exterior Glass Cleaning and Rain Repellent'] },
]

const addOns = ['Ceramic Sealant', 'Carpet & Cloth Shampoo', 'Pet Hair Removal', 'Trim Restoration', 'Odor Removal', 'Engine Bay Cleaning & Restoration', 'Headlight Restoration', 'Clay Bar Treatment', 'Water Spot Removal', 'Interior Steam Cleaning', 'Convertible Top Cleaning', 'Rim Polishing', 'Child Car Seat Cleaning']

export function Services() {
  return (
    <section id="services" className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Services</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">Straightforward mobile detailing for a cleaner, sharper vehicle without the trip to a shop.</p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className={`relative flex flex-col overflow-visible rounded-2xl border bg-white/5 ${service.title === 'Full Detail' ? 'border-blue-400 ring-2 ring-blue-400/70 shadow-lg shadow-blue-500/20' : 'border-white/20'}`}>
              {service.title === 'Full Detail' && <span suppressHydrationWarning className="absolute right-5 top-0 z-10 -translate-y-1/2 rounded-full border border-blue-300/50 bg-blue-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">{'Most Popular'}</span>}<div className="relative h-52 overflow-hidden rounded-t-2xl"><img src={service.image} alt={service.title} className="h-full w-full object-cover" /></div>
              <div className="flex flex-1 flex-col p-6"><h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3><p className="mb-6 leading-relaxed text-gray-300">{service.description}</p><ul className="space-y-3">{service.items.map((item) => <li key={item} className="flex gap-3 text-sm text-gray-200"><Check className="h-5 w-5 shrink-0 text-blue-400" />{item}</li>)}</ul><a href="#contact" className="mt-8 block w-full rounded-lg bg-blue-500 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-blue-400">Book</a></div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 grid gap-8 rounded-2xl border border-blue-500/40 bg-blue-950/20 p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div><p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-300">Optional upgrades</p><h3 className="mb-3 text-3xl font-bold text-white">Add-On Services</h3><p className="leading-relaxed text-gray-300">Customize your detail with focused services for the areas that need extra attention.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{addOns.map((item) => <div key={item} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm text-gray-200"><Check className="h-4 w-4 text-blue-400" />{item}</div>)}</div>
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"><div><div className="mb-2 flex items-center gap-2 text-blue-300"><MapPin className="h-5 w-5" /><span className="font-semibold">Service Area</span></div><h3 className="text-2xl font-bold text-white">Richmond and surrounding areas</h3><p className="mt-2 text-gray-300">Serving Richmond, Henrico, Chesterfield, Hanover, Midlothian, and nearby communities.</p></div><div className="flex h-20 w-full items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-sm text-blue-200 sm:w-56">Mobile service area</div></div>
      </div>
    </section>
  )
}
