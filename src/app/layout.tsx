import '@/styles/globals.scss'
import '@/styles/components.scss'
import '@/styles/animations.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Full Stack Tutorial - Learn Web Development',
  description: 'Learn how to build websites and web applications using different tech stacks with our comprehensive tutorials',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 