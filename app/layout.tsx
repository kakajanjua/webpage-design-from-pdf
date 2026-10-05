import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Inter } from 'next/font/google'
import './globals.css'

import { LanguageProvider } from '@/lib/i18n'

const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'PrimeProc - Consultoria e Fiscalização | Procurement e Logística em Angola',
  description:
    'PrimeProc é uma consultoria angolana especializada em procurement, gestão de contratos, fiscalização de projetos e logística aplicada, para clientes corporativos e projetos financiados por doadores internacionais.',
  keywords: [
    'Procurement Angola',
    'Consultoria de Logística',
    'Fiscalização de Projetos',
    'Gestão de Contratos',
    'Doadores Internacionais Angola',
    'PrimeProc',
  ],
  authors: [{ name: 'PrimeProc' }],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e2a44',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}