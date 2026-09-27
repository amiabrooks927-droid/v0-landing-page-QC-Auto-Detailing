'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import { ADD_ONS, PRICING_MATRIX, ServiceType, VehicleType } from '@/lib/constants'

const SERVICES: { id: ServiceType; label: string }[] = [
  { id: 'full-detail', label: 'Full Detail' },
  { id: 'interior-only', label: 'Interior Detail' },
  { id: 'exterior-only', label: 'Exterior Detail' },
]

const VEHICLES: { id: VehicleType; label: string }[] = [
  { id: 'sedan', label: 'Sedan / Coupe' },
  { id: 'small-suv', label: 'Small SUV / Crossover' },
  { id: 'truck-suv', label: 'Large SUV / Truck' },
]

const CONDITIONS = [
  'Light — regularly maintained',
  'Moderate — normal buildup',
  'Heavy — noticeable dirt, stains, pet hair, or buildup',
]

const DISCLAIMER =
  'Your estimate is based on the options selected. Final pricing is confirmed before your appointment after we review your vehicle’s condition, photos, service location, and requested add-ons. Heavy pet hair, deep stains, strong odors, excessive dirt, travel outside the standard service area, and undisclosed conditions may affect the final quote.'

interface MobileEstimateModalProps {
  open: boolean
  onClose: () => void
  returnFocusRef?: React.RefObject<HTMLButtonElement | null>
}

export function MobileEstimateModal({ open, onClose, returnFocusRef }: MobileEstimateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(1)
  const [service, setService] = useState<ServiceType>('full-detail')
  const [vehicle, setVehicle] = useState<VehicleType>('sedan')
  const [condition, setCondition] = useState(CONDITIONS[0])
  const [addOns, setAddOns] = useState<string[]>([])

  const pricing = useMemo(() => PRICING_MATRIX[service][vehicle], [service, vehicle])
  const serviceLabel = SERVICES.find((item) => item.id === service)?.label
  const vehicleLabel = VEHICLES.find((item) => item.id === vehicle)?.label

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setStep(1)
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>('button, [href], input')?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, [href], input, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute('disabled'))
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    return () => returnFocusRef?.current?.focus()
  }, [open, returnFocusRef])

  if (!open) return null

  const toggleAddOn = (addOn: string) => {
    setAddOns((current) => (current.includes(addOn) ? current.filter((item) => item !== addOn) : [...current, addOn]))
  }

  const requestQuote = () => {
    onClose()
    window.setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 sm:items-center sm:p-4" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="mobile-estimate-title" className="flex max-h-[94dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-[#0e0e12] shadow-2xl sm:rounded-3xl">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-400">Step {step} of 5</p>
            <h2 id="mobile-estimate-title" className="mt-1 text-lg font-bold text-white">Service Estimate</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close service estimate" className="inline-flex size-11 items-center justify-center rounded-full text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"><X /></button>
        </div>

        <div className="min-h-0 overflow-y-auto px-5 py-5">
          {step === 1 && <ChoiceStep heading="What service are you looking for?" options={SERVICES.map((item) => item.label)} selected={serviceLabel ?? ''} onSelect={(label) => setService(SERVICES.find((item) => item.label === label)?.id ?? service)} />}
          {step === 2 && <ChoiceStep heading="What type of vehicle do you have?" options={VEHICLES.map((item) => item.label)} selected={vehicleLabel ?? ''} onSelect={(label) => setVehicle(VEHICLES.find((item) => item.label === label)?.id ?? vehicle)} />}
          {step === 3 && <ChoiceStep heading="What is your vehicle’s condition?" options={CONDITIONS} selected={condition} onSelect={setCondition} />}
          {step === 4 && <div><h3 className="mb-4 text-xl font-bold text-white">Would you like any add-ons?</h3><div className="grid gap-2">{ADD_ONS.map((addOn) => <button type="button" key={addOn} onClick={() => toggleAddOn(addOn)} aria-pressed={addOns.includes(addOn)} className={`flex min-h-12 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${addOns.includes(addOn) ? 'border-blue-500 bg-blue-600/15 text-blue-200' : 'border-white/10 bg-white/[0.03] text-gray-200 hover:border-white/20'}`}><span>{addOn}</span><span className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border ${addOns.includes(addOn) ? 'border-blue-400 bg-blue-600 text-white' : 'border-white/25'}`}>{addOns.includes(addOn) && <Check className="size-3" />}</span></button>)}</div></div>}
          {step === 5 && <div><h3 className="mb-4 text-xl font-bold text-white">Your Estimated Price Range</h3><div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5 text-center"><p className="text-4xl font-black text-white">{pricing.range}</p><p className="mt-2 text-sm text-blue-200">{serviceLabel} · {vehicleLabel}</p><p className="mt-1 text-xs text-gray-400">Est. {pricing.estimatedTime}</p></div><dl className="mt-5 grid gap-3 text-sm"><Detail label="Condition" value={condition} /><Detail label="Add-ons" value={addOns.length ? addOns.join(', ') : 'None selected'} /></dl><p className="mt-5 text-xs leading-relaxed text-gray-400">{DISCLAIMER}</p></div>}
        </div>

        <div className="flex shrink-0 gap-3 border-t border-white/10 px-5 py-4">
          {step > 1 && <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-bold text-gray-200 hover:bg-white/10"><ArrowLeft className="size-4" />Back</button>}
          {step < 5 ? <button type="button" onClick={() => setStep((current) => current + 1)} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500">Next<ArrowRight className="size-4" /></button> : <button type="button" onClick={requestQuote} className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-blue-600 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500">Request Your Final Quote</button>}
        </div>
      </div>
    </div>
  )
}

function ChoiceStep({ heading, options, selected, onSelect }: { heading: string; options: string[]; selected: string; onSelect: (value: string) => void }) {
  return <div><h3 className="mb-4 text-xl font-bold text-white">{heading}</h3><div className="grid gap-3">{options.map((option) => <button type="button" key={option} onClick={() => onSelect(option)} aria-pressed={selected === option} className={`flex min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${selected === option ? 'border-blue-500 bg-blue-600/15 text-blue-200' : 'border-white/10 bg-white/[0.03] text-white hover:border-white/20'}`}><span>{option}</span><span className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full border ${selected === option ? 'border-blue-400 bg-blue-600' : 'border-white/25'}`}>{selected === option && <span className="size-2 rounded-full bg-white" />}</span></button>)}</div></div>
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-2"><dt className="text-gray-400">{label}</dt><dd className="max-w-[65%] text-right text-white">{value}</dd></div>
}
