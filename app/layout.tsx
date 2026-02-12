import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  
  title: "Gissel Vanessa Quitian Rojas",
  description:
    "Portafolio profesional de Gissel Vanessa Quitian Rojas | Ingenier\u00eda Multimedia y Sistemas",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F0FDFA" },
    { media: "(prefers-color-scheme: dark)", color: "#052E2B" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
