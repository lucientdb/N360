import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PolesListClient from "@/components/sections/PolesListClient"

export const metadata: Metadata = {
  title: "Nos 8 Pôles d'Expertise",
  description:
    "Découvrez les 8 pôles d'intelligence numérique de N360 Agency : cybersécurité, OSINT, social listening, viralisation, gestion d'image, production audiovisuelle, développement IT et transformation digitale.",
}

export default function PolesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-16 px-6 bg-[#060D18]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-[#00C97A] font-mono-brand uppercase tracking-[0.15em] font-medium mb-3">
            Nos domaines d&apos;intervention
          </p>
          <h1 className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            8 pôles. Une vision.
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#8A9BB5] leading-relaxed">
            N360 Agency est le seul acteur en Afrique de l&apos;Ouest à combiner
            cybersécurité opérationnelle, renseignement numérique, viralisation digitale
            et production audiovisuelle sous une même structure.
          </p>
        </div>
      </section>

      <PolesListClient />

      {/* CTA section */}
      <section className="py-12 sm:py-14 md:py-16 px-6 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-4">
            Besoin d&apos;une approche{" "}
            <span className="text-[#00C97A]">sur mesure</span>&nbsp;?
          </h2>
          <p className="text-[#8A9BB5] text-xs sm:text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Nos experts combinent plusieurs pôles selon votre situation.
            Premier échange offert, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-[#1A7A4A] hover:bg-[#0d5f4a] text-white text-xs sm:text-sm font-medium px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#8A9BB5] hover:text-white border border-[#1A7A4A]/30 hover:border-[#1A7A4A]/60 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
