import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'
import clsx from 'clsx'
import Footer from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thomas Seeley',
  description: '',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-background',inter.className)}>
      <body className='max-w-2xl mx-6 mt-2 antialiased'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
