'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FileText,
  Calendar,
  DollarSign,
  Clock,
  MapPin,
  CloudRain,
  Car,
  Search,
  AlertOctagon,
  CreditCard,
  Briefcase,
  Camera,
  Lock,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react'
import { Footer } from '@/components/footer'

interface TOCItem {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const TOC_ITEMS: TOCItem[] = [
  { id: 'quotes-pricing', title: 'Quotes & Pricing', icon: DollarSign },
  { id: 'deposits-appointments', title: 'Deposits & Appointments', icon: CalendarCheck },
  { id: 'cancellations-rescheduling', title: 'Cancellations & Rescheduling', icon: Clock },
  { id: 'service-location-requirements', title: 'Service Location Requirements', icon: MapPin },
  { id: 'weather-policy', title: 'Weather Policy', icon: CloudRain },
  { id: 'vehicle-condition-add-ons', title: 'Vehicle Condition & Add-Ons', icon: Car },
  { id: 'pre-service-inspection', title: 'Pre-Service Vehicle Inspection', icon: Search },
  { id: 'biohazard-policy', title: 'Biohazard Policy', icon: AlertOctagon },
  { id: 'payment-policy', title: 'Payment Policy', icon: CreditCard },
  { id: 'personal-belongings', title: 'Personal Belongings', icon: Briefcase },
  { id: 'photos-portfolio', title: 'Photos & Portfolio Use', icon: Camera },
  { id: 'privacy', title: 'Privacy', icon: Lock },
  { id: 'contact', title: 'Contact', icon: MessageSquare },
]

export default function PoliciesPage() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white flex flex-col relative w-full max-w-full overflow-x-clip">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="/"
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
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white hover:text-blue-300 px-3 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-blue-400" />
              <span>Back to Website</span>
            </Link>

            <a
              href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Transparency & Standards</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Service Policies
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Clear expectations help us provide a smooth, professional detailing experience. Please review these policies before requesting a quote or confirming an appointment.
            </p>

            <p className="text-xs sm:text-sm font-medium text-blue-400/90 pt-1">
              Last Updated: September 26, 2026
            </p>
          </div>

          {/* Table of Contents / Anchor Navigation */}
          <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Table of Contents
                </h2>
                <span className="text-xs text-gray-400 hidden sm:inline">
                  Click any topic to jump directly to it
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {TOC_ITEMS.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-blue-500/30 text-left text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-all group cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {index + 1}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 shrink-0 transition-colors" />
                      <span className="line-clamp-1 group-hover:translate-x-0.5 transition-transform">
                        {item.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1: Quotes & Pricing */}
            <section
              id="quotes-pricing"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Quotes & Pricing
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Quality Control Auto Detailing provides custom quotes based on the vehicle’s size, condition, requested service, selected add-ons, service location, and any special concerns identified before service.
                </p>
                <p>
                  Website estimates and service-estimate calculator results are estimates only. Final pricing is confirmed before the appointment after we review the vehicle details, photos, requested services, and service location.
                </p>
                <p>
                  Heavy pet hair, deep stains, strong odors, excessive dirt, sand, mud, mold, paint concerns, travel outside the standard service area, large vehicles, and undisclosed conditions may require additional time, add-ons, or a revised quote. We will discuss any necessary price or service-scope changes before beginning work whenever possible.
                </p>
              </div>
            </section>

            {/* Section 2: Deposits & Appointments */}
            <section
              id="deposits-appointments"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Deposits & Appointments
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  A booking deposit may be required after your quote, service scope, and appointment time have been approved. Any required deposit will be clearly communicated before payment is requested and will be applied toward the final service balance unless otherwise stated.
                </p>
                <p>
                  An appointment is not confirmed until Quality Control Auto Detailing has confirmed availability and any required booking deposit or payment authorization has been completed.
                </p>
                <p>
                  Deposits are used to reserve appointment time and help protect against last-minute cancellations, no-shows, and travel-related losses.
                </p>
              </div>
            </section>

            {/* Section 3: Cancellations & Rescheduling */}
            <section
              id="cancellations-rescheduling"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Cancellations & Rescheduling
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Appointments may be cancelled or rescheduled at least 24 hours before the scheduled service time. When adequate notice is provided, an eligible booking deposit may be refunded or transferred to a new available appointment time.
                </p>
                <p>
                  Cancellations or rescheduling requests made with less than 24 hours’ notice, no-shows, unavailable water or electricity, inaccessible service locations, missing property permission, or significant undisclosed vehicle conditions may result in a booking deposit being retained or a disclosed late-cancellation/no-show fee being charged.
                </p>
                <p>
                  If Quality Control Auto Detailing needs to reschedule because of unsafe weather, an equipment issue, illness, or another issue on our end, the customer may transfer the deposit to a new available appointment time or request a refund.
                </p>
              </div>
            </section>

            {/* Section 4: Service Location Requirements */}
            <section
              id="service-location-requirements"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Service Location Requirements
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Quality Control Auto Detailing currently provides mobile-style detailing at homes, workplaces, and other approved locations throughout Richmond and nearby areas.
                </p>
                <p className="font-semibold text-white">
                  The service location must provide:
                </p>
                <ul className="space-y-2.5 pl-1 sm:pl-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Access to an outdoor water source</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Access to a standard electrical outlet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>A safe, reasonably level, and accessible workspace around the vehicle</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Permission to perform detailing services at the property when required by an apartment community, workplace, HOA, property manager, or other location rules</span>
                  </li>
                </ul>
                <p className="pt-2">
                  Customers are responsible for confirming that mobile detailing is permitted at the service location before the appointment. If the location does not meet these requirements when we arrive, the appointment may need to be rescheduled and the booking deposit may be retained according to the cancellation policy.
                </p>
              </div>
            </section>

            {/* Section 5: Weather Policy */}
            <section
              id="weather-policy"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <CloudRain className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Weather Policy
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Exterior detailing requires safe and suitable weather conditions. Heavy rain, lightning, high winds, freezing temperatures, unsafe surfaces, or conditions that prevent us from safely completing the work or applying products properly may require an appointment to be postponed or rescheduled.
                </p>
                <p>
                  We will contact customers as early as reasonably possible if weather affects an appointment. Interior-only service may still be possible in some situations when there is a safe covered work area, water and electricity are available, and there is enough space to work around the vehicle.
                </p>
              </div>
            </section>

            {/* Section 6: Vehicle Condition & Add-Ons */}
            <section
              id="vehicle-condition-add-ons"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Vehicle Condition & Add-Ons
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Please provide accurate vehicle details and photos when requesting a quote. Let us know about heavy pet hair, stains, spills, odors, smoke, mold, excessive sand, construction dust, paint concerns, child seats, or any other conditions that may affect the service.
                </p>
                <p>
                  Certain conditions may require add-ons, additional time, a revised quote, or a different service recommendation. Results vary based on the age, material, severity, prior cleaning attempts, and source of the issue.
                </p>
                <p>
                  Quality Control Auto Detailing does not guarantee complete removal of every stain, odor, pet hair, scratch, swirl mark, water spot, paint defect, oxidation issue, or wheel defect.
                </p>
              </div>
            </section>

            {/* Section 7: Pre-Service Vehicle Inspection & Pre-Existing Condition */}
            <section
              id="pre-service-inspection"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Pre-Service Vehicle Inspection & Pre-Existing Condition
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Before service begins, Quality Control Auto Detailing performs a visual walk-around inspection of accessible areas of the vehicle. We may take photos and/or video to document the vehicle’s visible condition before work starts. This documentation may include the exterior, wheels, glass, trim, interior surfaces, seats, carpets, mats, door panels, console areas, and other accessible areas relevant to the requested service.
                </p>
                <p>
                  The purpose of this inspection is to document visible pre-existing conditions and establish a baseline before detailing begins. Customers are encouraged to point out any existing concerns, prior damage, mechanical issues, fragile areas, aftermarket modifications, loose trim, damaged interior components, leaks, warning lights, or areas they do not want serviced before work starts.
                </p>
                <p>
                  Quality Control Auto Detailing is not responsible for pre-existing damage, normal wear and tear, prior repairs, hidden defects, manufacturing defects, deterioration, or conditions that become visible during normal cleaning or detailing. This may include, but is not limited to, existing scratches, swirl marks, rock chips, dents, paint failure, clear-coat failure, peeling paint, oxidation, rust, cracked or faded trim, damaged decals, loose emblems, damaged wheels, curb rash, cracked glass, worn upholstery, weakened seams, loose headliners, prior stains, discoloration, fragile leather, deteriorated plastics, brittle rubber, damaged electronics, broken switches, leaking seals, mold, or damaged interior components.
                </p>
                <p>
                  Normal detailing may reveal pre-existing damage, prior repairs, hidden defects, stains, odors, paint imperfections, oxidation, corrosion, cracks, worn materials, or other conditions that were not visible before cleaning. Revealing an existing condition during the normal course of service does not mean that Quality Control Auto Detailing caused that condition.
                </p>
                <p>
                  Quality Control Auto Detailing will use reasonable care and professional judgment when performing agreed-upon services. Nothing in this policy is intended to waive responsibility for damage directly caused by negligent or improper work.
                </p>
              </div>
            </section>

            {/* Section 8: Biohazard Policy */}
            <section
              id="biohazard-policy"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Biohazard Policy
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Quality Control Auto Detailing does not currently provide biohazard cleaning, trauma-scene cleanup, bodily-fluid cleanup, hazardous-waste removal, needle or sharp-object removal, mold remediation, or cleanup involving potentially infectious material.
                </p>
                <p>
                  This includes visible blood, urine, feces, vomit, needles, drug-related materials, animal remains, medical waste, unknown substances, or contamination related to illness, injury, overdose, accident trauma, or death.
                </p>
                <p>
                  If a biohazard or potentially infectious-material concern is discovered before or during an appointment, service may be declined, paused, or stopped until the vehicle has been professionally remediated and is safe to detail.
                </p>
              </div>
            </section>

            {/* Section 9: Payment Policy */}
            <section
              id="payment-policy"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Payment Policy
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Final payment is due when service is completed unless another arrangement has been confirmed in writing before the appointment.
                </p>
                <p>
                  Quality Control Auto Detailing accepts payment methods made available through Square. Customers are responsible for reviewing their final approved quote and notifying us of any questions before service begins.
                </p>
                <p>
                  Any booking deposit already paid will be applied to the final balance when applicable.
                </p>
              </div>
            </section>

            {/* Section 10: Personal Belongings */}
            <section
              id="personal-belongings"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Personal Belongings
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Customers should remove personal belongings, valuables, important documents, loose trash, and items from the trunk, center console, glove box, door pockets, and under the seats before service begins.
                </p>
                <p>
                  Quality Control Auto Detailing is not responsible for loss of or damage to personal items left inside the vehicle. Removing belongings also allows us to safely access more areas of the vehicle and provide a more complete result.
                </p>
              </div>
            </section>

            {/* Section 11: Photos & Portfolio Use */}
            <section
              id="photos-portfolio"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Photos & Portfolio Use
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  Quality Control Auto Detailing may take before-and-after photos or videos of vehicles for quality control, training, portfolio, website, social-media, and marketing purposes.
                </p>
                <p>
                  We will make reasonable efforts to avoid capturing personal information, license plates, personal documents, addresses, or identifiable customer details. If you do not want your vehicle photographed for portfolio or marketing purposes, please let us know before service begins.
                </p>
              </div>
            </section>

            {/* Section 12: Privacy */}
            <section
              id="privacy"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Privacy
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  When you submit a quote request or contact Quality Control Auto Detailing, we may collect information such as your name, email address, phone number, vehicle information, service location, requested services, photos, and appointment preferences.
                </p>
                <p>
                  We use this information to review quote requests, communicate with you, schedule services, process payments through Square when applicable, provide customer support, and improve our services.
                </p>
                <p>
                  We do not sell customer personal information. We may share information only with service providers needed to operate the business, such as website-form, email, scheduling, payment, and appointment-management providers, or when required by law.
                </p>
                <p>
                  Customers may contact us to request updates or corrections to their contact information.
                </p>
                <p>
                  For additional website terms and privacy information, please review our Terms and Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 13: Contact */}
            <section
              id="contact"
              className="scroll-mt-24 bg-[#0e0e12] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Contact
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  For questions about these policies, a quote request, an upcoming appointment, or a cancellation/rescheduling request, please contact Quality Control Auto Detailing using the phone number, email address, or quote request form listed on this website.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom Call To Action */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#101422] via-[#0b0d14] to-black border border-blue-500/30 shadow-[0_0_50px_rgba(0,82,255,0.18)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/20 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready for Showroom Precision?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Submit your vehicle details for a free, transparent service estimate or book an available appointment time directly through Square.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
                  id="policies-quote-cta"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://app.squareup.com/appointments/book/3e2nbye6rpamop/LE9JRT66KSQPK/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-gray-200 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-blue-400/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  id="policies-square-cta"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Book Through Square</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Website Footer (Contains Policies Link) */}
      <Footer />
    </div>
  )
}
