'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const galleryImages = [
  { src: '/gallery/edificio-principal.jpeg', name: 'Edificio Principal', description: 'Arquitectura moderna con jardines y fuente' },
  { src: '/gallery/capilla-velacion.jpeg', name: 'Capilla de Velación', description: 'Espacio cálido y acogedor para despedidas' },
  { src: '/gallery/capilla-san-jose.jpeg', name: 'Capilla San José', description: 'Diseño contemporáneo con amplios ventanales' },
  { src: '/gallery/entrada-principal.jpeg', name: 'Entrada Principal', description: 'Acceso controlado y seguro' },
  { src: '/gallery/sala-espera.jpeg', name: 'Sala de Espera', description: 'Mobiliario de lujo y ambiente tranquilo' },
  { src: '/gallery/recepcion.jpeg', name: 'Recepción', description: 'Atención personalizada al llegar' },
  { src: '/gallery/columbarios.jpeg', name: 'Columbarios', description: 'Espacios dignos para cremaciones' },
  { src: '/gallery/jardin-cascada.jpeg', name: 'Jardín con Cascada', description: 'Naturaleza y tranquilidad' },
  { src: '/gallery/senderos-jardin.jpeg', name: 'Senderos del Jardín', description: 'Paseos entre la naturaleza' },
  { src: '/gallery/jardines-los-pasos.jpeg', name: 'Jardines Los Pasos', description: 'Amplios espacios verdes' },
  { src: '/gallery/maqueta-proyecto.jpeg', name: 'Maqueta del Proyecto', description: 'Vista completa del cementerio' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4)
      else if (window.innerWidth >= 768) setVisibleCount(3)
      else setVisibleCount(2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxSlide = Math.max(0, galleryImages.length - visibleCount)

  const nextSlide = useCallback(() => setCurrentSlide(prev => Math.min(prev + 1, maxSlide)), [maxSlide])
  const prevSlide = useCallback(() => setCurrentSlide(prev => Math.max(prev - 1, 0)), [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = useCallback(() => {
    if (selectedImage !== null) setSelectedImage((selectedImage + 1) % galleryImages.length)
  }, [selectedImage])

  const prevImage = useCallback(() => {
    if (selectedImage !== null) setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
  }, [selectedImage])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, nextImage, prevImage])

  return (
    <section id="galeria" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-gold-500 font-semibold text-sm tracking-wider uppercase mb-3">Galería</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-500 font-semibold mb-4">
            Conoce nuestras <span className="text-gold-400">instalaciones</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un recorrido visual por Cementerio Los Pasos, donde la arquitectura moderna se fusiona con la naturaleza.
          </p>
        </div>

        <div className="relative">
          <button onClick={prevSlide} disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button onClick={nextSlide} disabled={currentSlide >= maxSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="overflow-hidden mx-8">
            <div className="flex transition-transform duration-500 ease-out gap-4"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleCount + 1.5)}%)` }}>
              {galleryImages.map((image, index) => (
                <div key={image.src} className="flex-shrink-0 cursor-pointer group"
                  style={{ width: `calc(${100 / visibleCount}% - 12px)` }} onClick={() => openLightbox(index)}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image src={image.src} alt={image.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-lg">{image.name}</p>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-primary-500 w-6' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal con navegación */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Botón Anterior */}
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Botón Siguiente */}
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="relative max-w-5xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].name}
              width={1200} height={800} className="object-contain max-h-[75vh] w-auto rounded-lg" priority />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-serif text-2xl font-semibold">{galleryImages[selectedImage].name}</h3>
              <p className="text-white/80 mt-1">{galleryImages[selectedImage].description}</p>
              <p className="text-white/60 text-sm mt-2">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-3xl overflow-x-auto px-4 pb-2">
            {galleryImages.map((image, index) => (
              <button key={image.src} onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index ? 'border-gold-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}>
                <Image src={image.src} alt={image.name} width={64} height={48} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
