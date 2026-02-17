'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import EmergencyBanner from '@/components/EmergencyBanner'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Promotion from '@/components/Promotion'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [showPromotion] = useState(true)

  return (
    <main className="min-h-screen">
      <EmergencyBanner />
      <Header />
      <Hero />
      <Services />
      <Gallery />
      {showPromotion && <Promotion />}
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
