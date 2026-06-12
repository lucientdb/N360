import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import PolesGrid from "@/components/sections/PolesGrid"
import CtaBand from "@/components/sections/CtaBand"

export const metadata: Metadata = {
  title: "Intelligence360 — Intelligence numérique intégrée",
  description:
    "Intelligence360 est la première agence d'intelligence numérique intégrée d'Afrique de l'Ouest. Cybersécurité, OSINT, viralisation, production audiovisuelle et transformation digitale à Dakar.",
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
