import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles de N360 Agency.",
}

export default function ConfidentialitePage() {
  return (
    <main>
      <Navbar />
      <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-8 sm:mb-10">
            Politique de confidentialité
          </h1>

          <div className="prose-custom legal-cards">  

            <h2>1. Responsable du traitement</h2>
            <p>
              N360 Agency, dont le siège est situé à Dakar Plateau, Sénégal, est
              responsable du traitement de vos données personnelles collectées via ce site.
              Contact DPO : contact@numerique360agency.com
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Via le formulaire de contact :</strong> nom, email, téléphone, sujet, message</li>
              <li><strong>Via le formulaire de devis :</strong> nom, email, téléphone, organisation, pôles d&apos;intérêt, budget, description du projet</li>
              <li><strong>Via la newsletter :</strong> adresse email uniquement</li>
              <li><strong>Données de navigation :</strong> adresse IP, pages visitées, durée des sessions (via cookies analytiques)</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous envoyer la newsletter si vous y êtes abonné</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>4. Base légale</h2>
            <p>
              Le traitement est fondé sur votre consentement (formulaires, newsletter)
              et sur notre intérêt légitime à améliorer nos services (données de navigation).
            </p>

            <h2>5. Durée de conservation</h2>
            <p>Nous conservons vos données pour une durée limitée, proportionnée à la finalité du traitement :</p>
            <ul>
              <li><strong>Formulaire de contact et de devis :</strong> le temps de traiter votre demande, puis 3 ans maximum à compter de notre dernier échange, à des fins de suivi commercial</li>
              <li><strong>Newsletter :</strong> jusqu&apos;à votre désabonnement</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
            <p>
              À l&apos;issue de ces délais, vos données sont supprimées ou anonymisées.
            </p>

            <h2>6. Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées
              uniquement avec nos prestataires techniques (hébergement du site, envoi d&apos;emails)
              dans le strict cadre de l&apos;exécution de leurs services, sous couvert d&apos;accords
              de traitement de données conformes. Certains de ces prestataires peuvent être
              situés hors du Sénégal et de l&apos;Union Européenne (notamment aux États-Unis).
              Dans ce cas, nous nous assurons qu&apos;ils offrent des garanties appropriées de
              protection de vos données (clauses contractuelles types ou mécanismes équivalents).
            </p>
            <p>
              Prestataires actuellement prévus : Hostinger (hébergement web et DNS du domaine
              numerique360agency.com) et Resend (envoi des emails transactionnels et gestion de
              l&apos;audience newsletter sur le sous-domaine newsletters.numerique360agency.com).
            </p>

            <h2>7. Vos droits</h2>
            <p>
              Conformément à la loi sénégalaise sur la protection des données personnelles
              (Loi n° 2008-12 du 25 janvier 2008) et, le cas échéant, au RGPD pour nos clients
              situés dans l&apos;Union européenne, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : contact@numerique360agency.com. Vous
              disposez également du droit d&apos;introduire une réclamation auprès de la
              Commission de Protection des Données Personnelles (CDP) du Sénégal.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Ce site utilise des cookies analytiques (mesure d&apos;audience) et des cookies
              fonctionnels (préférences utilisateur). Vous pouvez configurer votre navigateur
              pour refuser les cookies. Aucun cookie publicitaire tiers n&apos;est utilisé.
            </p>

            <h2>9. Sécurité</h2>
            <p>
              N360 Agency met en œuvre les mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non autorisé,
              modification, divulgation ou destruction.
            </p>

            <p className="text-brand-gray text-sm mt-10">
              Dernière mise à jour : juillet 2026
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
