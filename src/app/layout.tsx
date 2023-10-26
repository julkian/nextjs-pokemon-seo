import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pokeseo.com'),
  title: {
    template: '%s | PokeSEO',
    default: 'PokeSEO',
  },
  // robots: {
  //   index: false,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-image-preview': 'large',
  //   },
  // },
  manifest: 'https://pokeseo.com/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <Link href="/">This looks like a header</Link>
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
          This looks like a footer
        </footer>
      </body>
    </html>
  )
}
