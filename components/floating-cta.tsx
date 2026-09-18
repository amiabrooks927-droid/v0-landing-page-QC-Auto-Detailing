'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Phone, Sparkles } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 350px, hide near very bottom contact form to avoid covering fields
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight

      const nearBottom = scrollY + winHeight > docHeight - 300
      setIsVisible(scrollY > 350 && !nearBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-4 right-4 z-40 md:hidden max-w-md mx-auto pointer-events-auto"
        >
          <div className="flex items-center justify-between gap-2.5 p-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-blue-500/40 shadow-[0_8px_30px_rgba(0,82,255,0.4)]">
            {/* Direct Call Button */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              aria-label={`Call ${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 py-2.5 px-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-bold transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Call</span>
            </a>

            {/* Instant Book CTA */}
            <a
              href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/40 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
