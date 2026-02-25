'use client'

const services = [
  {
    title: 'Servicios Funerarios',
    description: 'Organización completa de velaciones y ceremonias de despedida. Capillas de velación con ambiente cálido y acogedor.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: 'Cremación',
    description: 'Servicio de cremación digno y respetuoso. Columbarios disponibles para quienes eligen este proceso. Hasta 48 cuotas.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Propiedades Tipo Jardín',
    description: 'Espacios de 3 espacios rodeados de naturaleza y encanto. Criptas de concreto donde van los ataúdes. Descanso perpetuo. Mantenimiento a perpetuidad.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Capilla San José',
    description: 'Un lugar de paz donde puedes elevar una oración a los que se nos han adelantado. Arquitectura de primer nivel.',
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
            En Cementerio Los Pasos, nos comprometemos a ofrecer un servicio integral 
            con atención personalizada en los momentos más importantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-cream rounded-2xl p-8 hover:bg-primary-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-primary-500 group-hover:bg-gold-400 rounded-xl flex items-center justify-center text-white group-hover:text-primary-700 mb-6 transition-all">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-500 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400/30 group-hover:border-gold-400 rounded-tr-xl transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contacto" className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-gold-500 transition-colors">
            Conoce todos nuestros servicios
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
