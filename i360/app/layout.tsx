import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "i360 — Intelligence Numérique 360°",
    template: "%s | i360",
  },
  description:
    "i360 opère sur 8 pôles d'expertise : cybersécurité, OSINT, transformation digitale, communication et bien plus.",
  keywords: ["cybersécurité", "OSINT", "transformation digitale", "communication digitale"],
  openGraph: {
    title: "i360 — Intelligence Numérique 360°",
    description: "Votre partenaire en cybersécurité et stratégie digitale.",
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
    <html lang="fr" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}