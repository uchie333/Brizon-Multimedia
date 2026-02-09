import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brizon Multimedia - Professional Photography & Videography',
  description: 'Brizon Multimedia Company - Professional photography, videography and graphic design services',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-gray-50 text-gray-800 antialiased">{children}</body>
    </html>
  )
}
