'use client'

import { PhoneIcon } from '@heroicons/react/24/solid'

export default function EmergencyBanner() {
  return (
    <div className="bg-red-700 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="font-bold text-sm sm:text-base">¿EMERGENCIA FUNERARIA?</span>
        </div>
        <a 
          href="tel:+50255226697" 
          className="flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-full font-bold text-sm sm:text-base hover:bg-red-50 transition-all animate-pulse-soft"
        >
          <PhoneIcon className="h-5 w-5" />
          LLAMAR AHORA: 5522-6697
        </a>
        <span className="text-xs sm:text-sm opacity-90">Atención inmediata 24/7</span>
      </div>
    </div>
  )
}
