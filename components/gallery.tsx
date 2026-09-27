'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Instagram, Maximize2, X, ChevronRight, CheckCircle2 } from 'lucide-react'

interface WorkItem {
  id: string
  title: string
  vehicle: string
  service: string
  tags: string[]
  src: string
  aspectRatio: string
}

const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: 'porsche-exterior',
    title: 'PPF Maintenance Wash & Full Detail',
    vehicle: 'Porsche Taycan 4S · Frozen Blue',
    service: 'Full Detail Service',
    tags: ['Full Detail', 'PPF Maintenance Wash', 'Porsche'],
    src: '/gallery/porsche-exterior.jpg',
    aspectRatio: 'col-span-1 lg:col-span-2 row-span-2',
  },
  {
    id: 'porsche-interior',
    title: 'Full Interior Detail · Bordeaux Red Leather Treatment',
    vehicle: 'Porsche Taycan 4S Interior',
    service: 'Full Interior Detail',
    tags: ['Full Interior Detail', 'Leather Conditioning', 'Deep Clean'],
    src: '/gallery/porsche-interior.jpg',
    aspectRatio: 'col-span-1 row-span-1',
  },
  {
    id: 'porsche-wheel',
    title: 'Aero Wheel & Brake Caliper Cleanse (Full Detail)',
    vehicle: 'Porsche Taycan Gloss Black 21"',
    service: 'Full Detail Service',
    tags: ['Wheel Cleanse', 'Satin Dressing', 'Porsche'],
    src: '/gallery/porsche-wheel.jpg',
    aspectRatio: 'col-span-1 row-span-1',
  },
  {
    id: 'mercedes-front',
    title: 'Full Detail with High-Gloss Ceramic Sealant',
    vehicle: 'Mercedes-Benz E-Class · Polar White',
    service: 'Full Detail + Ceramic Sealant',
    tags: ['Full Detail', 'Ceramic Sealant', 'Mercedes-Benz'],
    src: '/gallery/mercedes-front.jpg',
    aspectRatio: 'col-span-1 row-span-1',
  },
  {
    id: 'mercedes-wheel',
    title: 'AMG Multi-Spoke Wheel Cleanse & Ceramic Sealant',
    vehicle: 'Mercedes-Benz AMG Multi-Spoke',
    service: 'Full Detail + Ceramic Sealant',
    tags: ['Ceramic Sealant', 'Wheel Detailing', 'AMG'],
    src: '/gallery/mercedes-wheel.jpg',
    aspectRatio: 'col-span-1 row-span-1',
  },
]

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<WorkItem | null>(null)

  return (
    <section id="gallery" className="bg-[#070709] py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] max-w-full h-[300px] bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Real Client Work · Richmond, VA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Recent Transformations
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Actual photos from recent client details. Every vehicle is treated with the same meticulous precision and scratch-free technique.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#10121a] cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-[340px] shadow-xl hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(0,82,255,0.25)] transition-[border-color,box-shadow] duration-300 transform-gpu"
            >
              {/* Photo Image */}
              <Image
                src={item.src}
                alt={`${item.vehicle} - ${item.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon Badge */}
              <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/75 border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-blue-950/70 text-blue-300 border border-blue-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-blue-200 transition-colors">
                  {item.vehicle}
                </h3>
                <p className="text-xs text-gray-300 mt-0.5 line-clamp-1">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social / Instagram Banner */}
        <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-500/20">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">
                Follow Quality Control Auto Detailing on Instagram
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Weekly before-and-after reels, ceramic coatings, and interior restorations.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/qcautodetailingva/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-xs font-bold text-white transition-colors shrink-0"
          >
            <span>View Instagram Feed</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="relative max-w-4xl w-full bg-[#0e1017] border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Photo Caption Footer */}
              <div className="p-5 sm:p-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0a0c12]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {selectedPhoto.service}
                    </span>
                    <span className="text-gray-500">·</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      Client Job Verified
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {selectedPhoto.vehicle}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                    {selectedPhoto.title}
                  </p>
                </div>

                <a
                  href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm text-center shrink-0 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
