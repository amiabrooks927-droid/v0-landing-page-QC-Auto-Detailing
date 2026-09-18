'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Info, PhoneCall, Compass, CheckCircle2 } from 'lucide-react'
import { SERVICE_AREAS, CONTACT_INFO } from '@/lib/constants'

const ZONE_HUBS = [
  { name: 'Richmond, Henrico & Highland Springs', eta: 'Central Zone', fee: 'Full Mobile Service' },
  { name: 'Short Pump, Glen Allen & Innsbrook', eta: 'West End Zone', fee: 'Full Mobile Service' },
  { name: 'Chesterfield, North Chesterfield & Midlothian', eta: 'Southside Zone', fee: 'Full Mobile Service' },
  { name: 'Chester & South Chesterfield', eta: 'South Zone', fee: 'Full Mobile Service' },
  { name: 'Ashland, Hanover & Mechanicsville', eta: 'North/East Zone', fee: 'Full Mobile Service' },
  { name: 'Quinton & New Kent County', eta: 'East Corridor', fee: 'Full Mobile Service' },
]

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting matching brand colors */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#0d101a] via-[#090b10] to-black p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(0,82,255,0.18)]"
        >
          {/* Top Badge & Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_12px_rgba(0,82,255,0.3)]">
                <MapPin className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Regional Mobile Coverage · Central Virginia</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Where We Detail
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                We travel directly to your location across Greater Richmond — reaching from Ashland down through Chester, and from Short Pump out through Mechanicsville, Highland Springs, Quinton, and New Kent County.
              </p>
            </div>

            {/* Quick Contact Button (Brand Electric Blue) */}
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all group"
              >
                <span>Book Now</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all group"
              >
                <PhoneCall className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Main Grid: Coverage Details (Left 5 cols) + Embedded Regional Map (Right 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-stretch">
            {/* Left Column: Covered Towns & Zones (Brand Color Accents) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-400" />
                    Coverage Communities
                  </h3>
                  <span className="text-[11px] text-blue-300 font-semibold bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Expanded Metro Area
                  </span>
                </div>

                {/* Cities Pill Grid (Brand Electric Blue Hover) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-medium text-gray-200 hover:border-blue-400/60 hover:text-white hover:bg-blue-500/10 transition-colors"
                    >
                      <Navigation className="w-2.5 h-2.5 text-blue-400" />
                      {area}
                    </span>
                  ))}
                </div>

                {/* Zone Breakdown List (Brand Blue Checkmarks) */}
                <div className="space-y-2.5">
                  {ZONE_HUBS.map((hub) => (
                    <div
                      key={hub.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs hover:border-blue-500/40 transition-colors"
                    >
                      <span className="font-semibold text-gray-200">{hub.name}</span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-blue-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        {hub.fee}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Location Notice */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/25 text-xs sm:text-sm text-blue-200">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white font-semibold">Service Requirement:</strong> We bring our complete detailing equipment, chemicals, and lighting. We ask that customers provide accessible outdoor water (hose spigot) and standard electricity hookups at their service site.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Embedded Regional Map (No line overlay) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-2xl overflow-hidden border border-blue-500/30 bg-black shadow-2xl group">
                {/* Regional Map Base Layer (Clean regional view without municipal-only city border line) */}
                <iframe
                  title="Quality Control Auto Detailing Regional Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d265000!2d-77.420000!3d37.545000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'invert(92%) hue-rotate(180deg) brightness(88%) contrast(125%)',
                    width: '100%',
                    height: '100%',
                    minHeight: '460px',
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />

                {/* Dark Vignette Overlay Frame (Brand Theme) */}
                <div className="absolute inset-0 pointer-events-none border border-blue-500/20 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]" />

                {/* Top Left Regional Coverage HUD Badge */}
                <div className="absolute top-3 left-3 bg-black/90 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2.5 shadow-2xl z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-white tracking-wide">
                      <span>Regional Coverage Zone</span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-mono">
                      Ashland · Short Pump · Chester · New Kent
                    </p>
                  </div>
                </div>

                {/* Bottom Action Bar (Brand Electric Blue) */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/95 backdrop-blur-md border border-blue-500/30 px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between gap-3 shadow-2xl z-20">
                  <div className="flex items-center gap-2 text-gray-300 font-medium text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Active Mobile Service Across Listed Areas</span>
                  </div>
                  <a
                    href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-lg transition-colors shrink-0 shadow-lg shadow-blue-600/40"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
