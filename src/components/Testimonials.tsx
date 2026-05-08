'use client'

const testimonials = [
  {
    name: 'María Rodríguez',
    location: 'Santa Catarina Pinula',
    service: 'Propiedad Tipo Jardín',
    text: 'Elizabeth nos asesoró con mucha paciencia y transparencia. Gracias a las facilidades de pago pudimos planificar sin presión. El cementerio es precioso y nos da mucha tranquilidad saber que todo está listo.',
    stars: 5,
    initial: 'M',
  },
  {
    name: 'Carlos Méndez',
    location: 'San José Pinula',
    service: 'Servicio Funerario',
    text: 'En el momento más difícil para nuestra familia, Elizabeth estuvo disponible de inmediato. Su trato fue cálido y profesional. Las instalaciones de Los Pasos son de primer nivel.',
    stars: 5,
    initial: 'C',
  },
  {
    name: 'Ana Lucía González',
    location: 'Carretera a El Salvador',
    service: 'Cremación',
    text: 'Elegimos el servicio de cremación y quedamos muy satisfechos. Elizabeth explicó todo el proceso con claridad y respeto. El pago en cuotas nos ayudó mucho. Totalmente recomendado.',
    stars: 5,
    initial: 'A',
  },
  {
    name: 'Roberto Fuentes',
    location: 'Fraijanes',
    service: 'Pre-necesidad',
    text: 'Decidí planificar con anticipación para no dejar esa carga a mi familia. Elizabeth me guió sin ninguna presión. Ahora tengo paz mental sabiendo que todo está resuelto.',
    stars: 5,
    initial: 'R',
  },
]

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold-400">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-wider uppercase mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-primary-500 font-semibold mb-4">
            Lo que dicen{' '}
            <span className="text-gold-400">nuestras familias</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La confianza de las familias guatemaltecas es nuestro mayor testimonio.
          </p>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-6 mb-14 max-w-xl mx-auto">
          {[
            { value: '100+', label: 'Familias atendidas' },
            { value: '5★', label: 'Calificación promedio' },
            { value: '24/7', label: 'Disponibilidad' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-primary-500">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Tarjetas de testimonio */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Texto */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 font-bold text-sm">{t.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                  <span className="inline-block mt-1 text-xs bg-primary-50 text-primary-500 px-2 py-0.5 rounded-full font-medium">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">¿Quieres ser parte de estas familias con tranquilidad?</p>
          <a
            href="#contacto"
            data-cta="Quiero Asesoría Personalizada"
            data-section="testimonios"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Quiero Asesoría Personalizada
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
