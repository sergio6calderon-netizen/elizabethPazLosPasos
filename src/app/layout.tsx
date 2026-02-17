import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elizabeth Paz | Asesora Cementerio Los Pasos',
  description: 'Servicios funerarios, cremación y propiedades en Cementerio Los Pasos. Atención personalizada con empatía y transparencia. Emergencias 24/7.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-cream text-dark antialiased">{children}</body>
    </html>
  )
}
