'use client'

import { useEffect, useState } from 'react'

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculate = () => {
      const diff = targetDate.getTime() - new Date().getTime()
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-3 mt-4">
      {[
        { label: 'Días', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="text-center bg-white/10 rounded-xl px-3 py-2 min-w-[56px]">
          <p className="text-2xl font-bold text-gold-400 leading-none">
            {String(value).padStart(2, '0')}
          </p>
          <p className="text-white/60 text-xs mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default function Promotion() {
  // Fecha límite: último día del mes actual
  const now = new Date()
  const promoEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)

  return (
    <section id="promocion" className="py-16 bg-primary-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-8 right-8 text-gold-400/30 text-6xl">✿</div>
      <div className="absolute bottom-8 left-8 text-gold-400/30 text-4xl">✿</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm mb-4">
                <span className="animate-ping relative inline-flex h-2 w-2 rounded-full bg-white opacity-90"></span>
                PROMOCIÓN ACTIVA — VENCE ESTE MES
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold mb-3">
                ¡Promoción <span className="text-gold-400">Especial!</span>
              </h2>

              <p className="text-white/80 text-base mb-4">
                Adquiere tu servicio este mes y aprovecha los beneficios exclusivos.
                ¡Planifica hoy y protege a tu familia!
              </p>

              {/* Countdown */}
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">⏰ Tiempo restante</p>
                <CountdownTimer targetDate={promoEnd} />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  data-cta="Quiero Esta Promocion"
                  data-section="promocion"
                  className="inline-flex items-center justify-center gap-2 bg-gold-400 text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Quiero Esta Promoción
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/50255226697?text=Hola%20Elizabeth,%20me%20interesa%20la%20promoción%20especial%20de%20este%20mes"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="WhatsApp Promocion"
                  data-section="promocion"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-green-400 transition-all shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">En Propiedades</h3>
                    <p className="text-gold-400 font-bold text-xl">CRIPTA GRATIS</p>
                    <p className="text-white/60 text-sm mt-1">Desde Q827/mes · 60 cuotas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">En Servicios Funerarios</h3>
                    <p className="text-gold-400 font-bold text-xl">EMBALSAMAMIENTO GRATIS</p>
                    <p className="text-white/60 text-sm mt-1">Desde Q250/mes · 48 cuotas</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-primary-700">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">En Cremación</h3>
                    <p className="text-gold-400 font-bold text-xl">HASTA 48 CUOTAS</p>
                    <p className="text-white/60 text-sm mt-1">Desde Q158/mes · Enganche Q1,900</p>
                  </div>
                </div>
              </div>

              <p className="text-white/50 text-xs text-center mt-2">
                * Aplican restricciones. Promoción válida hasta fin de mes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
