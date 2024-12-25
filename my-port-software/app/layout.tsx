import { Inter, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Black.woff',
      weight: '900',
      style: 'normal',
    },
    // Add other weights/styles as needed
  ],
  variable: '--font-satoshi'
})

const Symtext = localFont({
  src: './fonts/Symtext.woff',
  variable: '--font-symtext'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${satoshi.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}

