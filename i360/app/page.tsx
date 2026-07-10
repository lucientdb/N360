import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import PolesGrid from "@/components/sections/PolesGrid"
import CtaBand from "@/components/sections/CtaBand"

export const metadata: Metadata = {
  title: "N360 Agency - Numérique 360 Agency",
  description:
    "N360 Agency (Numérique 360 Agency) mobilise 8 pôles d'expertise pour sécuriser votre image, accélérer votre croissance digitale et anticiper les menaces numériques. Basée à Dakar Plateau, Sénégal.",
  keywords: [
    "N360 Agency",
    "Numérique 360 Agency",
    "agence digitale Sénégal",
    "cybersécurité Dakar",
    "OSINT Afrique de l'Ouest",
  ],
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PolesGrid />
      <CtaBand />
      <Footer />
    </main>
  )
}