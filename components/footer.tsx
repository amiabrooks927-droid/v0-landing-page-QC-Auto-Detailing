'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: '#',
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      href: '#',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Google Business',
      href: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Logo and branding */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quality%20Control%20%284%29-PTyAiaP5RwAMiTlnUWkfNRvu6MThER.png"
              alt="Quality Control Auto Detailing"
              width={180}
              height={60}
              style={{ height: '60px', width: 'auto', margin: '0 auto', aspectRatio: '3/1' }}
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center"
          >
            <a
              href="tel:+18043006441"
              className="flex items-center justify-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(804) 300-6441</span>
            </a>
            <a
              href="mailto:info@qcautodetailing.com"
              className="flex items-center justify-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg font-semibold">info@qcautodetailing.com</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/10 pt-8 text-center text-sm text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Quality Control Auto Detailing. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
