import type { Metadata } from "next"
import { Inter, Syne, Space_Mono } from "next/font/google"
import { getSiteUrl } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono-brand",
  weight: ["400", "700"],
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "N360 Agency — Intelligence Numérique 360°",
    template: "%s | N360 Agency",
  },
  description:
    "N360 Agency opère sur 8 pôles d'expertise : cybersécurité, OSINT, transformation digitale, communication et bien plus.",
  keywords: ["cybersécurité", "OSINT", "transformation digitale", "communication digitale"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "N360 Agency — Intelligence Numérique 360°",
    description: "Votre partenaire en cybersécurité et stratégie digitale.",
    url: siteUrl,
    siteName: "N360 Agency",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}