import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Caiçoré - Experiências Culturais do Litoral do Paraná',
  description: 'Descubra Boxes de Experiências Culturais e Produtos Artesanais autênticos do litoral do Paraná. Cultura Caiçara em sua casa.',
  keywords: ['caiçara', 'cultura brasileira', 'artesanato', 'litoral paranaense', 'experiências culturais'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}

