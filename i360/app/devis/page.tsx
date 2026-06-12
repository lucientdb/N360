import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import DevisClient from "@/components/sections/DevisClient"

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit à Intelligence360. Décrivez votre projet et nos experts vous répondent sous 24h avec une proposition sur mesure.",
}

export default function DevisPage() {
  return (
    <main>
      <Navbar />
      <DevisClient />
      <Footer />
    </main>
  )
}
