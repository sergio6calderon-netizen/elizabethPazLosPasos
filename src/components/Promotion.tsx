'use client'

export default function Promotion() {
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
              <div className="inline-flex items-center gap-2 bg-gold-400 text-primary-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
                <span className="animate-pulse">⏰</span>
                POR TIEMPO LIMITADO
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold mb-4">
                ¡Promoción <span className="text-gold-400">Especial!</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Promociones especiales en todos nuestros servicios de Cementerio Los Pasos. 
                ¡Prepárate y adquiere tu servicio en pre necesidad!
              </p>
              <a href="#contacto"
                className="inline-flex items-center gap-2 bg-gold-400 text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-300 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Quiero esta promoción
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
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
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-sm text-center mt-4">
                * Aplican restricciones. Promoción válida por tiempo limitado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
