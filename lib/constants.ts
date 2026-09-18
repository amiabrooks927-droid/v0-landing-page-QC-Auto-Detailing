export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/qcautodetailing'

export const CONTACT_INFO = {
  phone: '(804) 300-6441',
  phoneRaw: '+18043006441',
  email: 'info@qcautodetailing.com',
  location: 'Richmond, VA & Surrounding Areas',
  waterOutletNotice:
    'Before We Arrive: Please ensure access to an outdoor water source (standard hose bib) and a standard 120V electrical outlet within 50–75 ft of the vehicle.',
}

export type ServiceType = 'full-detail' | 'interior-only' | 'exterior-only'
export type VehicleType = 'sedan' | 'small-suv' | 'truck-suv'

export interface PricingDetail {
  min: number
  max: number
  range: string
  stage1: number
  stage2: number
  estimatedTime: string
}

export const PRICING_MATRIX: Record<ServiceType, Record<VehicleType, PricingDetail>> = {
  'full-detail': {
    sedan: {
      min: 170,
      max: 280,
      range: '$170 – $280',
      stage1: 170,
      stage2: 280,
      estimatedTime: '3 – 4.5 hrs',
    },
    'small-suv': {
      min: 210,
      max: 340,
      range: '$210 – $340',
      stage1: 210,
      stage2: 340,
      estimatedTime: '3.5 – 5 hrs',
    },
    'truck-suv': {
      min: 250,
      max: 420,
      range: '$250 – $420',
      stage1: 250,
      stage2: 420,
      estimatedTime: '4 – 6 hrs',
    },
  },
  'interior-only': {
    sedan: {
      min: 120,
      max: 180,
      range: '$120 – $180',
      stage1: 120,
      stage2: 180,
      estimatedTime: '2 – 3 hrs',
    },
    'small-suv': {
      min: 150,
      max: 210,
      range: '$150 – $210',
      stage1: 150,
      stage2: 210,
      estimatedTime: '2.5 – 3.5 hrs',
    },
    'truck-suv': {
      min: 180,
      max: 260,
      range: '$180 – $260',
      stage1: 180,
      stage2: 260,
      estimatedTime: '3 – 4 hrs',
    },
  },
  'exterior-only': {
    sedan: {
      min: 100,
      max: 150,
      range: '$100 – $150',
      stage1: 100,
      stage2: 150,
      estimatedTime: '1.5 – 2.5 hrs',
    },
    'small-suv': {
      min: 120,
      max: 180,
      range: '$120 – $180',
      stage1: 120,
      stage2: 180,
      estimatedTime: '2 – 3 hrs',
    },
    'truck-suv': {
      min: 140,
      max: 220,
      range: '$140 – $220',
      stage1: 140,
      stage2: 220,
      estimatedTime: '2.5 – 3.5 hrs',
    },
  },
}

export const PACKAGES = [
  {
    id: 'full-detail' as ServiceType,
    title: 'Full Detail',
    subtitle: 'Complete Reset & Protection',
    description:
      'A thorough interior and exterior transformation for every surface of your vehicle, restoring cabin freshness and exterior shine.',
    startingPrice: 'From $170',
    popular: true,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/81e4f22d507b3575386f46807e703c3c-OLnZ7kZUbZ98SXdOAsqlTLihFXr1jP.jpg',
    features: [
      'Full cabin vacuum & trunk detailing',
      'Deep interior scrub & surface wipe-down',
      'UV protectant on vinyl, rubber & dash',
      'Leather cleaning & conditioning',
      'Gentle contact foam wash & dry',
      'Chemical iron decontamination',
      'Wheel barrels, faces & tire scrub + dressing',
      'Door jambs, trunk seals & gas cap cleaned',
      'Ceramic spray wax finish for hydrophobic shine',
      'Streak-free exterior & interior glass + rain repellent',
    ],
  },
  {
    id: 'interior-only' as ServiceType,
    title: 'Interior Only',
    subtitle: 'Deep Cabin Refresh',
    description:
      'A meticulous interior service designed to clean, refresh, and protect your cabin from high-traffic wear and daily buildup.',
    startingPrice: 'From $80',
    popular: false,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adecbf1557ef5ae55633abd1c63ab271-nW6vNIBgSDhvncTMmHJbWtHEDv7FRc.jpg',
    features: [
      'Full vacuum of carpets, mats, crevices & trunk',
      'Interior scrub & deep surface wipe-down',
      'Mat restoration & spot shampoo',
      'UV protective coating on dash, console & trim',
      'Leather cleaning & conditioning treatment',
      'Streak-free interior glass & mirror cleaning',
      'Natural odor neutralizing spray',
    ],
  },
  {
    id: 'exterior-only' as ServiceType,
    title: 'Exterior Only',
    subtitle: 'Gloss, Clarity & Protection',
    description:
      'A comprehensive exterior service providing a spotless, glossier, and well-protected finish using paint-safe wash methods.',
    startingPrice: 'From $100',
    popular: false,
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51c29fd95a956697e27fae65ea0ee02d-4Dpk1DHHEIS498SfZZLRZnWii9Ulhr.jpg',
    features: [
      'Multi-stage foam contact wash & microfiber dry',
      'Chemical iron fallout decontamination',
      'Deep wheel face, barrel & brake dust removal',
      'Tire cleaning & non-sling satin dressing',
      'Door jambs, boot seams & fuel door cleaned',
      'Ceramic spray sealant application (gloss + water beading)',
      'Exterior glass polish & rain repellent coating',
    ],
  },
]

export const ADD_ONS = [
  'Ceramic Sealant',
  'Carpet & Cloth Shampoo',
  'Pet Hair Removal',
  'Trim Restoration',
  'Odor Removal',
  'Engine Bay Cleaning & Restoration',
  'Headlight Restoration',
  'Clay Bar Treatment',
  'Water Spot Removal',
  'Interior Steam Cleaning',
  'Convertible Top Cleaning',
  'Rim Polishing',
  'Child Car Seat Cleaning',
]

export const SERVICE_AREAS = [
  'Richmond',
  'Short Pump',
  'Chesterfield',
  'North Chesterfield',
  'Chester',
  'Ashland',
  'Mechanicsville',
  'Highland Springs',
  'Quinton',
  'New Kent County',
  'Henrico',
  'Midlothian',
  'Glen Allen',
  'Hanover',
  'Bon Air',
]

export const PILLARS = [
  {
    tag: 'THOROUGH',
    title: 'Real Details',
    description:
      'We clean every surface we can safely reach, including vents, seams, cupholders, and jambs—not just the surface areas.',
  },
  {
    tag: 'MOBILE',
    title: 'We Come To You',
    description:
      'Professional mobile service delivered directly to your driveway, workplace, or approved location across Greater Richmond.',
  },
  {
    tag: 'CARE-DRIVEN',
    title: 'Quality Work',
    description:
      'Performance-grade chemicals, two-bucket scratch-safe washing, and tailored protectants that preserve your vehicle long-term.',
  },
  {
    tag: 'SIMPLE',
    title: 'Easy Booking',
    description:
      'Transparent pricing, easy online scheduling, and clear upfront communication from start to finish.',
  },
]

export const FAQS = [
  {
    category: 'detailing',
    question: 'What is the difference between a professional detail and an automatic car wash?',
    answer:
      'Automatic tunnel washes use abrasive spinning brushes and recycled dirty water that cause micro-scratches and swirl marks. Professional detailing uses pH-balanced chemicals, two-bucket scratch-safe hand washing, iron decontamination, and premium sealants to preserve and protect your finish without inflicting damage.',
  },
  {
    category: 'detailing',
    question: 'What is a clay bar treatment and when does my car need it?',
    answer:
      'A clay bar pulls out microscopic embedded contaminants—such as industrial fallout, tree sap, rail dust, and brake dust—that soap cannot remove. If your paint feels gritty or rough after a wash rather than glassy smooth, it is ready for clay bar decontamination.',
  },
  {
    category: 'detailing',
    question: 'What is the difference between ceramic sealant and traditional wax?',
    answer:
      'Traditional carnauba wax sits on top of your paint and melts away within 4 to 6 weeks under sun and heat. Ceramic spray sealant bonds at the molecular level, creating a durable hydrophobic shell that repels water, prevents UV fading, and lasts 3 to 6 months.',
  },
  {
    category: 'detailing',
    question: 'Should I detail my car if it has paint protection film (PPF) or vinyl wrap?',
    answer:
      'Yes, absolutely. Wrapped and PPF-covered vehicles require specialized pH-neutral maintenance washes to clean seams without lifting edges, staining film, or using abrasive compounds. We tailor our wash technique specifically for PPF safety.',
  },
  {
    category: 'detailing',
    question: 'What is chemical iron fallout decontamination?',
    answer:
      'Iron decontamination is a pH-neutral spray that dissolves microscopic sintered brake dust particles embedded in your wheels and clear coat. It turns deep purple as it reacts, safely liquefying corrosive iron before it causes permanent clear coat pitting.',
  },
  {
    category: 'detailing',
    question: 'Should I get an interior detail if my seats and carpets already look clean?',
    answer:
      'Yes. Skin oils, sweat, bacteria, and UV rays degrade leather hide and fade plastics over time even before dirt becomes visible. Routine interior detailing extracts deep-pore contaminants, hydrates leather, and applies matte UV protection to prevent premature drying and cracking.',
  },
  {
    category: 'detailing',
    question: 'What is the difference between interior steam cleaning and hot water extraction?',
    answer:
      'Steam cleaning uses dry high-temperature vapor to sanitize vents, cup holders, and leather without oversaturating surfaces. Hot water extraction injects heated cleaning solution deep into carpet and fabric fibers and immediately vacuums it back out to lift heavy grime and stains.',
  },
  {
    category: 'logistics',
    question: 'Do I need to provide water and electricity?',
    answer:
      'Yes. We require access to an outdoor water spigot and a standard electrical outlet at your location. These power our pressure washer, commercial vacuum, and hot water extraction equipment.',
  },
  {
    category: 'logistics',
    question: 'Which areas do you serve, and is there a travel fee?',
    answer:
      'We service Greater Richmond—including Ashland, Short Pump, Chesterfield, North Chesterfield, Chester, Mechanicsville, Highland Springs, Quinton, and New Kent County—with zero travel fee across our primary perimeter.',
  },
  {
    category: 'logistics',
    question: 'How long does a detail take?',
    answer:
      'Exterior details take approximately 1.5 to 2.5 hours, interior resets take 2 to 3 hours, and full details take 3.5 to 5 hours. We prioritize thoroughness and never rush.',
  },
  {
    category: 'detailing',
    question: 'Can you remove deep scratches, swirl marks, or paint defects?',
    answer:
      'Our packages include high-gloss chemical decontamination and protective ceramic sealant. Multi-stage machine paint correction and deep scratch compounding are custom specialty services available upon request.',
  },
  {
    category: 'logistics',
    question: 'What happens if it rains or the weather is unsafe?',
    answer:
      'If rain, freezing temperatures, or high winds prevent safe outdoor service, we will reach out to reschedule promptly. Interior details can often proceed if you have an enclosed garage.',
  },
  {
    category: 'logistics',
    question: 'How do I request a quote or book an appointment?',
    answer:
      'Use the instant Service Estimate tool above and submit the quote form below with your vehicle details and preferred timeline. You can also call or text us directly at (804) 300-6441.',
  },
]
