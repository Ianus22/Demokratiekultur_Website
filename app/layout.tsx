import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Initiative Demokratiekultur | Demokratie leben. Schule partizipativ gestalten.',
  description: 'Initiative Demokratiekultur ist ein österreichischer Verein für demokratische Schulkultur. Wir unterstützen Schulen bei der Entwicklung partizipativer Strukturen und demokratischer Bildung.',
  generator: 'v0.app',
  keywords: ['Demokratiebildung', 'Schulentwicklung', 'Partizipation', 'Klassenrat', 'Demokratiepädagogik', 'Österreich'],
  authors: [{ name: 'Georg Blaha' }, { name: 'Esther Hörantner' }],
  openGraph: {
    title: 'Initiative Demokratiekultur',
    description: 'Demokratie leben. Schule partizipativ gestalten.',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
