'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

interface FooterProps {
  onEstimateClick?: () => void
}

export function Footer({ onEstimateClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Service Estimate', href: '#quote-calculator' },
    { label: 'Recent Work', href: '#gallery' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'About Us', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Request a Quote', href: '#contact' },
  ]

  return (
    <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block" aria-label="Quality Control Auto Detailing">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QC%20%281%29-0OHEqNaqljI1q0zPz5a3ObM6NGFFFh.png"
                alt="Quality Control Auto Detailing"
                width={190}
                height={52}
                className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,82,255,0.3)]"
              />
            </a>

            <p className="text-sm font-semibold text-blue-400">
              Performance-Level Mobile Detailing in Richmond, VA
            </p>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Performance-level detailing, premium protective formulas, and meticulous care delivered directly to your location.
            </p>

          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      if (link.label === 'Service Estimate' && window.innerWidth < 768 && onEstimateClick) {
                        event.preventDefault()
                        onEstimateClick()
                      }
                    }}
                    className="text-gray-400 hover:text-white hover:text-blue-300 transition-colors py-1 inline-flex items-center py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Richmond, VA & Surrounding Communities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Quality Control Auto Detailing. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
