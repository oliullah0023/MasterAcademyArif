import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Notification from '@/components/Notification'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Master Academy',
  description: 'A Success orinted coaching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
         <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
