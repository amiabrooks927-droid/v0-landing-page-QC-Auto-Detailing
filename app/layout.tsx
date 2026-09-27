import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Quality Control Auto Detailing | Premium Mobile Auto Detail Service in Richmond, VA',
  description:
    'Mobile auto detailing in Richmond, VA. Performance-level interior and exterior detailing delivered directly to your driveway. View pricing and book online today.',
  metadataBase: new URL('https://qualitycontrolautodetailing.com'),
  openGraph: {
    title: 'Quality Control Auto Detailing | Mobile Auto Detailing in Richmond, VA',
    description:
      'Performance-level mobile auto detailing delivered directly to your driveway. Transparent pricing and easy online booking.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailing',
  name: 'Quality Control Auto Detailing',
  image: 'https://qualitycontrolautodetailing.com/gallery/porsche-exterior.jpg',
  url: 'https://qualitycontrolautodetailing.com',
  telephone: '(804) 300-6441',
  email: 'info@qcautodetailing.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Richmond',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.5407,
    longitude: -77.436,
  },
  areaServed: [
    'Richmond, VA',
    'Short Pump, VA',
    'Chesterfield, VA',
    'North Chesterfield, VA',
    'Chester, VA',
    'Ashland, VA',
    'Mechanicsville, VA',
    'Highland Springs, VA',
    'Quinton, VA',
    'New Kent County, VA',
    'Henrico, VA',
    'Midlothian, VA',
    'Glen Allen, VA',
    'Hanover, VA',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Detailing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Detail (Interior + Exterior)',
          description: 'Comprehensive interior deep cleanse, steam sanitation, hand wash, decontamination, and ceramic spray sealant.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Only Detail',
          description: 'Deep cabin reset, blowout, carpet shampoo, leather treatment, and steam disinfection.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exterior Only Detail',
          description: 'Multi-stage foam wash, iron decontamination, clay bar, tire dressing, and ceramic gloss sealant.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-blue-600 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

