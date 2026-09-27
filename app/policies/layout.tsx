import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Policies | Quality Control Auto Detailing',
  description:
    'Review the service policies, booking requirements, cancellation terms, and vehicle inspection guidelines for Quality Control Auto Detailing in Richmond, VA.',
  openGraph: {
    title: 'Service Policies | Quality Control Auto Detailing',
    description:
      'Clear service policies, location requirements, cancellation terms, and inspection guidelines for mobile auto detailing in Richmond, VA.',
  },
}

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
