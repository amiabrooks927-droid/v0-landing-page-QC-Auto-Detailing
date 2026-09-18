'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  onBookingClick?: () => void
}

export function Navbar({ onBookingClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Service Estimate', href: '#quote-calculator' },
    { label: 'Recent Work', href: '#gallery' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Book', href: 'https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start', external: true },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60 py-2'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Quality Control Auto Detailing Home"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QC%20%281%29-0OHEqNaqljI1q0zPz5a3ObM6NGFFFh.png"
            alt="Quality Control Auto Detailing"
            width={180}
            height={50}
            priority
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,82,255,0.3)]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98]"
            id="nav-book-btn"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
          id="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/15 overflow-hidden shadow-2xl"
          >
            <div className="px-5 pt-3 pb-8 space-y-3 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
                    onClick={handleLinkClick}
                  >
                    <span>{link.label}</span>
                    <span className="text-blue-400 text-sm">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 text-center shadow-lg shadow-blue-600/40 transition-all"
                  id="mobile-nav-book-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </a>

                <div className="text-center pt-2 text-xs text-gray-400">
                  Mobile detailing in Richmond, VA & surroundings
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
