'use client'

import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { title: 'Full Detail', description: 'A complete inside-and-out refresh designed to clean, protect, and restore your vehicle’s appearance.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81e4f22d507b3575386f46807e703c3c-GH4OKz8TGvzdUZEM0kPxMQbStBOl1v.jpg', items: ['Complete interior vacuum, including seats, carpets, mats, trunk or cargo area, and accessible crevices', 'Scrub and wipe down interior surfaces to remove dust, grime, and light stains', 'Clean dashboard, center console, door panels, cup holders, vents, and interior trim', 'Interior glass cleaning', 'Floor mats cleaned', 'UV protectant applied to applicable plastic and vinyl surfaces', 'Leather cleaning and conditioning when applicable', 'Exterior pre-rinse and safe contact hand wash', 'Bug, road-film, and light surface-contaminant removal as needed', 'Iron removal when applicable', 'Wheel, tire, and wheel-well cleaning', 'Door-jamb and fuel-door/gas-cap-area cleaning', 'Exterior glass cleaning', 'Tire dressing', 'Ceramic spray protection for enhanced gloss and short-term paint protection'] },
  { title: 'Interior Detail', description: 'A focused interior reset for vehicles that need a cleaner, fresher, more comfortable cabin.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adecbf1557ef5ae55633abd1c63ab271-nW6vNIBgSDhvncTMmHJbWtHEDv7FRc.jpg', items: ['Complete interior vacuum, including seats, carpets, mats, trunk or cargo area, and accessible crevices', 'Scrub and wipe down dashboard, center console, door panels, cup holders, vents, and interior trim', 'Removal of dust, grime, and light stains where applicable', 'Interior glass cleaning', 'Floor mats cleaned', 'UV protectant applied to applicable plastic and vinyl surfaces', 'Leather cleaning and conditioning when applicable', 'Light odor refresh'] },
  { title: 'Exterior Detail', description: 'A careful hand wash and protection service to revive shine and maintain your vehicle’s exterior.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51c29fd95a956697e27fae65ea0ee02d-4Dpk1DHHEIS498SfZZLRZnWii9Ulhr.jpg', items: ['Exterior pre-rinse and safe contact hand wash', 'Bug and light road-film removal where applicable', 'Iron removal when applicable', 'Wheel, tire, and wheel-well cleaning', 'Door-jamb and fuel-door/gas-cap-area cleaning', 'Exterior glass cleaning', 'Tire dressing', 'Ceramic spray protection for enhanced gloss and short-term paint protection'] },
]

const addOns = [
  ['Ceramic Sealant', 'Longer-lasting exterior protection with enhanced gloss and water beading.'],
  ['Carpet & Cloth Shampoo', 'Deeper cleaning for fabric seats, carpets, and floor mats.'],
  ['Pet Hair Removal', 'Extra removal of embedded pet hair throughout the interior.'],
  ['Trim Restoration', 'Restore the appearance of faded exterior plastic trim.'],
  ['Odor Removal', 'Targeted treatment for unwanted vehicle odors. Results depend on the odor source and condition.'],
  ['Engine Bay Cleaning & Restoration', 'Careful cleaning and dressing of accessible engine-bay surfaces.'],
  ['Headlight Restoration', 'Improve the clarity and appearance of oxidized headlights.'],
  ['Clay Bar Treatment', 'Removes bonded surface contamination to leave exterior paint feeling smoother and cleaner.'],
  ['Water Spot Removal', 'Targets mineral deposits and water spots on exterior glass and painted surfaces where safely possible. Results depend on severity.'],
  ['Interior Steam Cleaning', 'Uses steam to help clean and sanitize appropriate hard interior surfaces, cup holders, vents, crevices, and other accessible areas.'],
  ['Convertible Top Cleaning', 'Careful cleaning of fabric or vinyl convertible tops using methods appropriate for the top material and condition.'],
  ['Rim Polishing', 'Enhances the appearance of wheels by cleaning and polishing applicable wheel surfaces.'],
  ['Child Car Seat Cleaning', 'Careful cleaning of accessible exterior and fabric surfaces. Customers should remove and reinstall child seats unless otherwise discussed.'],
]

export function Services() {
  const book = () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="services" className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16"><h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Services</h2><p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">Professional mobile detailing for a cleaner, sharper vehicle without the trip to a shop.</p></motion.div>
        <div className="grid items-stretch gap-6 lg:grid-cols-3">{services.map((service, index) => <motion.article key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/5"><div className="relative h-52 shrink-0"><img src={service.image} alt={service.title} className="h-full w-full object-cover" /></div><div className="flex flex-1 flex-col p-6"><h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3><p className="mb-6 leading-relaxed text-gray-300">{service.description}</p><ul className="flex-1 space-y-3">{service.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-200"><Check className="h-5 w-5 shrink-0 text-blue-400" />{item}</li>)}</ul><Button className="mt-8 w-full bg-blue-600 text-white hover:bg-blue-500" onClick={book}>Book</Button></div></motion.article>)}</div>
        <div className="mt-10 rounded-2xl border border-blue-500/40 bg-blue-950/20 p-6 sm:p-8"><p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-300">Optional upgrades</p><h3 className="mb-6 text-3xl font-bold text-white">Available Add-Ons</h3><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{addOns.map(([title, description]) => <div key={title} className="rounded-lg bg-white/10 p-4"><h4 className="font-semibold text-white">{title}</h4><p className="mt-1 text-sm leading-relaxed text-gray-300">{description}</p></div>)}</div></div>
        <div className="mt-8 grid gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><div className="mb-2 flex items-center gap-2 text-blue-300"><MapPin className="h-5 w-5" /><span className="font-semibold">Mobile Service Area</span></div><h3 className="text-2xl font-bold text-white">Convenient Detailing at Your Location</h3><p className="mt-3 leading-relaxed text-gray-300">Quality Control Auto Detailing brings professional detailing services to homes, workplaces, and approved locations throughout Richmond and nearby communities. To provide the best results, access to an outdoor water source and a standard electrical outlet is required at the service location.</p><p className="mt-3 text-sm leading-relaxed text-gray-400">Service outside the standard area may be available for an additional travel fee. Travel fees are based on distance and will always be discussed before booking.</p></div><div className="flex min-h-44 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-center text-sm text-blue-200">Richmond, Virginia<br />and nearby communities</div></div>
      </div>
    </section>
  )
}
