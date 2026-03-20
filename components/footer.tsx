'use client'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left */}
          <p className="text-sm text-gray-300 text-center sm:text-left">
            &copy; 2026 Quality Control Auto Detailing. All rights reserved.
          </p>

          {/* Right */}
          <p className="text-sm text-gray-300 text-center sm:text-right">
            Mobile auto detailing in Richmond, VA and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  )
}
