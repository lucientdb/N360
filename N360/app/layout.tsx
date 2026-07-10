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
    default: "N360 Agency - Numérique 360 Agency",
    template: "%s | N360 Agency",
  },
  description:
    "N360 Agency (Numérique 360 Agency) — première agence numérique intégrée d'Afrique de l'Ouest. Cybersécurité, OSINT, transformation digitale, viralisation et production audiovisuelle à Dakar, Sénégal.",
  keywords: [
    "N360 Agency",
    "Numérique 360 Agency",
    "N360",
    "Numerique 360",
    "agence digitale Dakar",
    "cybersécurité Sénégal",
    "OSINT Afrique",
    "transformation digitale Sénégal",
    "agence numérique Dakar",
    "agence numérique Afrique de l'Ouest",
    "viralisation réseaux sociaux",
    "communication digitale Sénégal",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "N360 Agency - Numérique 360 Agency",
    description: "Première agence numérique intégrée d'Afrique de l'Ouest. Cybersécurité, OSINT, transformation digitale à Dakar.",
    url: siteUrl,
    siteName: "N360 Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N360 Agency | Numérique 360 Agency",
    description: "Cybersécurité, OSINT, transformation digitale & viralisation — Dakar, Sénégal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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