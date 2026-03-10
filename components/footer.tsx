'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: '#',
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      href: '#',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Google Business',
      href: '#',
    },
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '(804) 300-6441',
      href: 'tel:+18043006441',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'info@qcautodetailing.com',
      href: 'mailto:info@qcautodetailing.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <footer className="bg-slate-950/50 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QC%20%281%29-mpUpYL69aDMHmqLJNqHsEmbs7UAikC.png"
              alt="Quality Control Auto Detailing"
              width={150}
              height={80}
              className="h-auto max-w-xs"
            />
            <p className="text-gray-400 text-sm">
              Premium mobile auto detailing service in Richmond. We bring professional detailing to your location.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {info.icon}
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Info */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>&copy; 2024 Quality Control Auto Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
