'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Johnson',
    location: 'Richmond, VA',
    rating: 5,
    quote: 'The best detailing service I\'ve ever used. They came right to my driveway and did an incredible job. My car looks brand new!',
  },
  {
    name: 'Sarah Chen',
    location: 'Glen Allen, VA',
    rating: 5,
    quote: 'Professional, efficient, and affordable. The attention to detail is outstanding. Highly recommend Quality Control!',
  },
  {
    name: 'James Williams',
    location: 'West End, Richmond',
    rating: 5,
    quote: 'Finally found a detailing service that takes pride in their work. Every part of my vehicle was meticulously cleaned.',
  },
]

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Trusted By Local Drivers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See what our satisfied customers say about our premium detailing services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 p-8 backdrop-blur-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
