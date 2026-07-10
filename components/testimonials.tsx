'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Review {
  id: string
  name: string
  location: string
  service: string
  quote: string
  rating: number
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Marcus T.',
    location: 'Richmond, VA',
    service: 'Full Detail',
    quote: 'Best detail I\'ve ever had. My car looks showroom fresh. Highly recommend!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah J.',
    location: 'Glen Allen, VA',
    service: 'Interior Detail',
    quote: 'Professional, punctual, and thorough. They really care about quality.',
    rating: 5,
  },
  {
    id: '3',
    name: 'David R.',
    location: 'Henrico, VA',
    service: 'Exterior Only',
    quote: 'Amazing shine and protection. My paint has never looked better.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jennifer L.',
    location: 'West End, VA',
    service: 'Full Detail',
    quote: 'Worth every penny. They treat your vehicle like their own.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Chris M.',
    location: 'Midlothian, VA',
    service: 'Interior Detail',
    quote: 'Super responsive and flexible with scheduling. Great service.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Amanda K.',
    location: 'Short Pump, VA',
    service: 'Full Detail',
    quote: 'Mobile service is so convenient. Quality that matches any detail shop.',
    rating: 5,
  },
]

export function Testimonials() {
  // Duplicate reviews for seamless scrolling loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Customers Are Saying
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real feedback from Richmond area drivers who trust Quality Control with their vehicles.
          </p>
        </motion.div>

        {/* Scrolling Reviews Container */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-6 min-w-max"
            animate={{
              x: [0, -50 * reviews.length],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white/5 border border-white/20 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-white text-base leading-relaxed mb-4">
                  "{review.quote}"
                </p>

                {/* Customer Name, Location & Service */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.location}</p>
                  </div>
                  <p className="text-blue-300 text-xs">{review.service}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Fade on sides for visual polish */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
