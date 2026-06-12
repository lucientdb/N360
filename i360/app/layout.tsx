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
    default: "Intelligence360 — Intelligence numérique intégrée",
    template: "%s | Intelligence360",
  },
  description:
    "Intelligence360 est la première agence d'intelligence numérique intégrée d'Afrique de l'Ouest. 8 pôles d'expertise : cybersécurité, OSINT, viralisation, gestion d'image, production audiovisuelle, développement IT et transformation digitale.",
  keywords: ["cybersécurité", "OSINT", "intelligence numérique", "Dakar", "Afrique de l'Ouest", "transformation digitale"],
  openGraph: {
    title: "Intelligence360 — Intelligence Numérique",
    description: "La référence en cybersécurité et stratégie digitale en Afrique de l'Ouest. Basée à Dakar Plateau.",
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