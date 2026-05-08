'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export function pushEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: eventName, ...params })
  }
}

export default function GTMEvents() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
  }, [])

  return null
}
