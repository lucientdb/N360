import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de N360 Agency — agence d'intelligence numérique basée à Dakar, Sénégal.",
}

export default function MentionsLegalesPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-8 sm:mb-10">
            Mentions légales
          </h1>

          <div className="prose-custom legal-cards">

            <h2>Éditeur du site</h2>
            <p>
              <strong>N360 Agency</strong><br />
              Agence d&apos;intelligence numérique intégrée<br />
              Dakar Plateau, Sénégal<br />
              Site web : <a href="https://www.numerique360agency.com" target="_blank" rel="noopener noreferrer">www.numerique360agency.com</a><br />
              Email : contact@numerique360agency.com<br />
              Téléphone : +221 77 687 22 22<br />
              Forme juridique : SARL <br />
              RCCM : En cours d'obtention<br />
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes)
              est la propriété exclusive de N360 Agency ou de ses partenaires, et est
              protégé par les lois sénégalaises et internationales relatives à la propriété
              intellectuelle. Toute reproduction, représentation, modification ou exploitation
              totale ou partielle est interdite sans autorisation préalable écrite.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              N360 Agency s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur ce site. Cependant, N360 Agency ne peut garantir
              l&apos;exhaustivité, la précision ou l&apos;actualité des informations et décline toute
              responsabilité pour les dommages résultant de l&apos;utilisation du site.
            </p>

            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. N360 Agency n&apos;exerce
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
              Dernière mise à jour : Juillet 2026
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
