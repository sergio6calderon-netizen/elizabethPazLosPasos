'use client'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-serif font-bold text-xl">EP</span>
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-primary-500 text-lg">Elizabeth Paz</p>
                    <p className="text-gray-500 text-sm">Asesora Certificada</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400/20 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-2xl -z-10"></div>
          </div>

          <div>
            <span className="inline-block text-gold-500 font-semibold text-sm tracking-wider uppercase mb-3">Sobre Mí</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary-500 font-semibold mb-6">
              Tu asesora de confianza en <span className="text-gold-400">Cementerio Los Pasos</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>Soy Elizabeth Paz, y mi vocación es acompañar a las familias guatemaltecas en la planificación de uno de los momentos más importantes de la vida: asegurar el descanso eterno de nuestros seres queridos.</p>
              <p>Con años de experiencia en el sector funerario, entiendo que hablar de estos temas puede ser difícil. Por eso, me comprometo a brindarte información clara, transparente y sin presiones.</p>
              <p className="font-semibold text-primary-500">"La vida te puede arrebatar muchas cosas... dinero, oportunidades, amistades, planes. Pero cuando te quita a la familia, te toca algo que no se reemplaza, que no se compra, que no se recupera."</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary-500">100%</p>
                <p className="text-gray-500 text-sm mt-1">Compromiso</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-gold-400">24/7</p>
                <p className="text-gray-500 text-sm mt-1">Disponibilidad</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary-500">48</p>
                <p className="text-gray-500 text-sm mt-1">Cuotas</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md gold-accent">
              <p className="font-semibold text-primary-500 mb-2">¿Preguntas? Estoy para ayudarte</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+50255226697" className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +502 5522-6697
                </a>
                <a href="mailto:bettypazalvarado@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-primary-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  bettypazalvarado@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
