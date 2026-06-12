import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ContactClient from "@/components/sections/ContactClient"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Intelligence360 pour toute demande d'information, de devis ou de collaboration. Basés à Dakar Plateau, disponibles 24h/24 pour les urgences cybersécurité.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  )
}
