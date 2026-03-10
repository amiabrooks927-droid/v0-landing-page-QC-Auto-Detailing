'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const results = [
  {
    title: 'Luxury Sedan Transformation',
    category: 'Full Detail',
  },
  {
    title: 'SUV Deep Clean',
    category: 'Interior & Exterior',
  },
  {
    title: 'Sports Car Polish',
    category: 'Exterior Detail',
  },
]

export function Results() {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Real Detailing Transformations
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See the dramatic difference our professional detailing services make to vehicles in Richmond.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 overflow-hidden backdrop-blur-sm">
                <div className="relative h-80 bg-slate-800">
                  {/* Placeholder before/after layout */}
                  <div className="absolute inset-0 flex">
                    {/* Before side */}
                    <div className="w-1/2 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center border-r border-slate-600">
                      <div className="text-center">
                        <Image
                          src={`https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop`}
                          alt="Before"
                          width={200}
                          height={200}
                          className="rounded opacity-80"
                        />
                        <p className="text-xs text-gray-400 mt-2">Before</p>
                      </div>
                    </div>

                    {/* After side */}
                    <div className="w-1/2 bg-gradient-to-br from-blue-600/20 to-slate-700 flex items-center justify-center">
                      <div className="text-center">
                        <Image
                          src={`https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop`}
                          alt="After"
                          width={200}
                          height={200}
                          className="rounded brightness-110 contrast-110"
                        />
                        <p className="text-xs text-blue-300 mt-2">After</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{result.title}</h3>
                  <p className="text-sm text-blue-400">{result.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
