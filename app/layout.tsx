import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RehlaTours.id - Link Hub",
  description: "Bersama kami menuju Baitullah dengan perjalanan yang nyaman & penuh keberkahan – Teman Umrah",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
