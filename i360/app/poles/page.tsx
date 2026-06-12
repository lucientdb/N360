import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PolesListClient from "@/components/sections/PolesListClient"

export const metadata: Metadata = {
  title: "Nos 8 Pôles d'Expertise",
  description:
    "Découvrez les 8 pôles d'intelligence numérique d'Intelligence360 : cybersécurité, OSINT, social listening, viralisation, gestion d'image, production audiovisuelle, développement IT et transformation digitale.",
}

export default function PolesPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-brand-blue uppercase tracking-[0.15em] font-medium mb-3">
            Nos domaines d&apos;intervention
          </p>
          <h1 className="font-[family-name:var(--font-heading)] font-black text-5xl md:text-6xl tracking-tight text-foreground mb-6">
            8 pôles. Une vision.
          </h1>
          <p className="max-w-2xl mx-auto text-base text-brand-gray leading-relaxed">
            Intelligence360 est le seul acteur en Afrique de l&apos;Ouest à combiner
            cybersécurité opérationnelle, renseignement numérique, viralisation digitale
            et production audiovisuelle sous une même structure.
          </p>
        </div>
      </section>

      <PolesListClient />

      <section className="py-16 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Besoin d&apos;une approche{" "}
            <span className="text-brand-blue">sur mesure</span>&nbsp;?
          </h2>
          <p className="text-brand-gray text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Nos experts combinent plusieurs pôles selon votre situation.
            Premier échange offert, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-foreground border border-border hover:border-foreground/30 px-7 py-3.5 rounded-full transition-all duration-200"
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
