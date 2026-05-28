import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Abhishek Parita | Applied AI/ML Engineer',
  description: 'Applied AI/ML Engineer focused on intelligent monitoring systems, anomaly detection, multilingual NLP, behavioral analytics, and practical machine learning applications.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-[#1E1E1E] bg-[#FFFFFF] selection:bg-[#6ABF00] selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
