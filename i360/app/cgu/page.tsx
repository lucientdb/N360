import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions Générales d'Utilisation du site Numérique 360.",
}

export default function CguPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] font-black text-4xl md:text-5xl tracking-tight text-foreground mb-10">
            Conditions Générales d&apos;Utilisation
          </h1>

          <div className="prose-custom">

            <h2>Article 1 — Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de
              définir les modalités d&apos;accès et d&apos;utilisation du site internet d&apos;Numérique 360
              accessible à l&apos;adresse www.intelligence360.sn. Tout accès au site implique
              l&apos;acceptation sans réserve des présentes CGU.
            </p>

            <h2>Article 2 — Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès
              à internet. Numérique 360 se réserve le droit de modifier, suspendre ou
              interrompre l&apos;accès au site à tout moment, sans préavis ni indemnité.
            </p>

            <h2>Article 3 — Utilisation du site</h2>
            <p>L&apos;utilisateur s&apos;engage à :</p>
            <ul>
              <li>Utiliser le site conformément à sa destination et aux lois en vigueur</li>
              <li>Ne pas tenter d&apos;accéder aux systèmes informatiques d&apos;Numérique 360 de manière non autorisée</li>
              <li>Ne pas diffuser de contenus illicites, diffamatoires ou portant atteinte aux droits de tiers</li>
              <li>Ne pas utiliser les formulaires à des fins de spam ou de sollicitation commerciale non autorisée</li>
            </ul>

            <h2>Article 4 — Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments du site (textes, images, logos, graphismes, structure)
              est protégé par le droit d&apos;auteur et appartient à Numérique 360. Toute
              reproduction, même partielle, est strictement interdite sans autorisation
              préalable écrite d&apos;Numérique 360.
            </p>

            <h2>Article 5 — Formulaires et demandes</h2>
            <p>
              Les formulaires de contact et de devis présents sur le site constituent une
              simple prise de contact. Ils ne constituent en aucun cas un contrat ou un
              engagement ferme d&apos;Numérique 360 à fournir les services décrits. Toute
              prestation fait l&apos;objet d&apos;un devis et d&apos;un contrat formalisé séparément.
            </p>

            <h2>Article 6 — Confidentialité</h2>
            <p>
              Les informations transmises via les formulaires sont traitées conformément à
              notre <Link href="/confidentialite">Politique de confidentialité</Link>. Un accord
              de non-divulgation (NDA) est systématiquement proposé avant toute mission.
            </p>

            <h2>Article 7 — Limitation de responsabilité</h2>
            <p>
              Numérique 360 ne saurait être tenu responsable des dommages directs ou
              indirects résultant de l&apos;utilisation du site, d&apos;une interruption d&apos;accès ou
              d&apos;informations inexactes publiées de bonne foi. L&apos;utilisateur utilise le site
              sous sa seule responsabilité.
            </p>

            <h2>Article 8 — Modification des CGU</h2>
            <p>
              Numérique 360 se réserve le droit de modifier les présentes CGU à tout
              moment. Les modifications prennent effet dès leur publication sur le site.
              Il appartient à l&apos;utilisateur de les consulter régulièrement.
            </p>

            <h2>Article 9 — Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont régies par le droit sénégalais. En cas de litige,
              les parties s&apos;engagent à rechercher une solution amiable avant tout recours
              judiciaire. À défaut, le litige sera soumis aux tribunaux compétents de
              Dakar, Sénégal.
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
