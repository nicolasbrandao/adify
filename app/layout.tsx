import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adify - Growth Marketing',
  description: 'Adify - Growth Marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Navbar />
        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  )
}
