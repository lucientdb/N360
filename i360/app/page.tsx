import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import PolesGrid from "@/components/sections/PolesGrid"
import CtaBand from "@/components/sections/CtaBand"

export const metadata: Metadata = {
  title: "i360 — Intelligence Numérique 360°",
  description:
    "i360 mobilise 8 pôles d'expertise pour sécuriser votre image, accélérer votre croissance et anticiper les menaces numériques.",
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