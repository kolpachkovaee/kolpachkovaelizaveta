import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Колпачкова Елизавета — Графический дизайнер',
  description: 'Создаю фирменные стили и визуальные системы, которые помогают брендам выглядеть целостно, узнаваемо и профессионально.',
  generator: 'v0.app',
  keywords: ['графический дизайн', 'фирменный стиль', 'айдентика', 'бренд-дизайн', 'визуальные системы'],
  authors: [{ name: 'Елизавета Колпачкова' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased font-light`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
