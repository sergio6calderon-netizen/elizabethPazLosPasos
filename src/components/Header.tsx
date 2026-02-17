'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Promoción', href: '#promocion' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="bg-primary-500 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
              <span className="text-primary-500 font-serif font-bold text-xl">EP</span>
            </div>
            <div className="text-white">
              <p className="font-serif font-semibold text-lg leading-tight">Elizabeth Paz</p>
              <p className="text-xs text-gold-400 tracking-wide">Asesora Cementerio Los Pasos</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-white/90 hover:text-gold-400 transition-colors text-sm font-medium">
                {item.name}
              </a>
            ))}
            <a href="#contacto" className="bg-gold-400 text-primary-700 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gold-300 transition-all shadow-md">
              Solicitar Info
            </a>
          </div>

          <button type="button" className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/20 mt-2 pt-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block text-white/90 hover:text-gold-400 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <a href="#contacto" className="block mt-3 bg-gold-400 text-primary-700 px-5 py-2.5 rounded-full font-semibold text-sm text-center" onClick={() => setMobileMenuOpen(false)}>
              Solicitar Info
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
