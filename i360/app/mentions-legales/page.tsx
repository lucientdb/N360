import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'Numérique 360 — agence d'intelligence numérique basée à Dakar, Sénégal.",
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] font-black text-4xl md:text-5xl tracking-tight text-foreground mb-10">
            Mentions légales
          </h1>

          <div className="prose-custom">

            <h2>Éditeur du site</h2>
            <p>
              <strong>Numérique 360</strong><br />
              Agence d&apos;intelligence numérique intégrée<br />
              Dakar Plateau, Sénégal<br />
              Email : contact@n360agency.com<br />
              Téléphone : +221 77 687 22 22<br />
              Forme juridique : SARL — RCCM en cours d&apos;enregistrement<br />
              Directeur de la publication : [Nom du dirigeant]
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes)
              est la propriété exclusive d&apos;Numérique 360 ou de ses partenaires, et est
              protégé par les lois sénégalaises et internationales relatives à la propriété
              intellectuelle. Toute reproduction, représentation, modification ou exploitation
              totale ou partielle est interdite sans autorisation préalable écrite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Numérique 360 s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site. Cependant, Numérique 360 ne peut garantir
              l&apos;exhaustivité, la précision ou l&apos;actualité des informations et décline toute
              responsabilité pour les dommages résultant de l&apos;utilisation du site.
            </p>

            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Numérique 360 n&apos;exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur
              contenu ou leur politique de confidentialité.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit sénégalais. Tout litige
              relatif à l&apos;utilisation de ce site relève de la compétence exclusive des
              tribunaux de Dakar, Sénégal.
            </p>

            <p className="text-brand-gray text-sm mt-10">
              Dernière mise à jour : juin 2025
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
