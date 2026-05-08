'use client'

const services = [
  {
    id: 'servicio-funerario',
    title: 'Servicios Funerarios',
    description: 'Organización completa de velaciones y ceremonias. Capillas de velación con ambiente cálido. Embalsamamiento gratis en promoción.',
    price: 'Q15,000',
    priceNote: 'Desde Q250/mes',
    badge: 'EMBALSAMAMIENTO GRATIS',
    badgeColor: 'bg-green-100 text-green-800',
    details: [
      'Enganche: Q3,000 (20%)',
      '6 Visacuotas sin intereses',
      'Saldo en 48 cuotas de Q250/mes',
    ],
    cta: 'Consultar Servicio Funerario',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    id: 'cremacion',
    title: 'Cremación',
    description: 'Servicio digno y respetuoso. Columbarios disponibles para preservar el recuerdo de tus seres queridos.',
    price: 'Q9,500',
    priceNote: 'Desde Q158/mes',
    badge: 'HASTA 48 CUOTAS',
    badgeColor: 'bg-blue-100 text-blue-800',
    details: [
      'Enganche: Q1,900 (20%)',
      '6 Visacuotas sin intereses',
      'Saldo en 48 cuotas de Q158/mes',
    ],
    cta: 'Consultar Cremación',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    id: 'propiedades',
    title: 'Propiedades Tipo Jardín',
    description: 'Espacios rodeados de naturaleza. Criptas de concreto, descanso perpetuo y mantenimiento a perpetuidad incluido.',
    price: 'Q62,000',
    priceNote: 'Desde Q827/mes',
    badge: 'CRIPTA GRATIS',
    badgeColor: 'bg-gold-100 text-gold-700',
    details: [
      'Enganche: Q12,400 (20%)',
      '6 Visacuotas sin intereses',
      'Saldo en 60 cuotas de Q827/mes',
    ],
    cta: 'Consultar Propiedades',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    id: 'servicio-familiar',
    title: 'Paquete Familiar',
    description: 'Servicio y propiedad juntos. La mejor opción para proteger a toda tu familia con una sola inversión planificada.',
    price: 'Oferta Especial',
    priceNote: 'Hasta 60 cuotas',
    badge: 'MEJOR VALOR',
    badgeColor: 'bg-purple-100 text-purple-800',
    details: [
      'Servicio + Propiedad',
      'Embalsamamiento gratis',
      'Cripta gratis incluida',
    ],
    cta: 'Consultar Paquete Familiar',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-wider uppercase mb-3">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-500 font-semibold mb-4">
            Un descanso eterno entre{' '}
            <span className="text-gold-400">jardines de ensueño</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transparencia total en precios. Facilidades de pago para que puedas planificar con tranquilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-cream rounded-2xl p-6 hover:bg-primary-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              {/* Badge de promoción */}
              <div className={`inline-flex self-start items-center px-3 py-1 rounded-full text-xs font-bold mb-4 ${service.badgeColor} group-hover:bg-gold-400 group-hover:text-primary-700 transition-all`}>
                {service.badge}
              </div>

              <div className="w-14 h-14 bg-primary-500 group-hover:bg-gold-400 rounded-xl flex items-center justify-center text-white group-hover:text-primary-700 mb-4 transition-all">
                {service.icon}
              </div>

              <h3 className="font-serif text-xl font-semibold text-primary-500 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed text-sm mb-4">
                {service.description}
              </p>

              {/* Precio */}
              <div className="border-t border-gray-200 group-hover:border-white/20 pt-4 mb-4 transition-colors">
                <p className="text-2xl font-bold text-primary-500 group-hover:text-gold-400 transition-colors">
                  {service.price}
                </p>
                <p className="text-sm text-gold-500 group-hover:text-gold-300 font-semibold transition-colors">
                  {service.priceNote}
                </p>
              </div>

              {/* Detalles de pago */}
              <ul className="space-y-1 mb-6 flex-1">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-white/70 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-gold-400 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA por servicio */}
              <a
                href="#contacto"
                data-cta={service.cta}
                data-service={service.id}
                data-section="servicios"
                className="w-full text-center bg-primary-500 group-hover:bg-gold-400 text-white group-hover:text-primary-700 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-lg"
              >
                {service.cta}
              </a>

              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 group-hover:border-gold-400 rounded-tr-xl transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Nota de financiamiento */}
        <div className="mt-10 bg-cream rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gold-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-primary-500">Enganche en 6 Visacuotas sin intereses</p>
              <p className="text-sm text-gray-600">Aplica para todos los servicios. Consulta con Elizabeth para más detalles.</p>
            </div>
          </div>
          <a
            href="#contacto"
            data-cta="Calcular Mi Cuota"
            data-section="servicios-footer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-600 transition-all shadow-md hover:shadow-lg"
          >
            Calcular Mi Cuota
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
