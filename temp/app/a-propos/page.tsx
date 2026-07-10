import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import AProposClient from "@/components/sections/AproposClient"

export const metadata: Metadata = {
  title: "À propos — N360 Agency",
  description:
    "N360 Agency est la première agence d'intelligence numérique intégrée d'Afrique de l'Ouest. Basée à Dakar Plateau, elle regroupe 8 pôles d'expertise en cybersécurité, OSINT, viralisation et transformation digitale.",
}

const valeurs = [
  {
    titre: "Excellence",
    description:
      "Chaque mission est traitée avec les standards les plus élevés de l'industrie. Nos équipes sont certifiées et formées en continu.",
  },
  {
    titre: "Discrétion",
    description:
      "La confidentialité est non négociable. Toutes nos missions sont couvertes par des accords de non-divulgation stricts.",
  },
  {
    titre: "Ancrage africain",
    description:
      "Nous connaissons nos marchés, nos clients et nos cultures. Nos solutions sont conçues pour l'Afrique de l'Ouest, pas simplement adaptées.",
  },
  {
    titre: "Innovation",
    description:
      "Nous intégrons les dernières technologies (IA, threat intelligence, outils OSINT avancés) pour rester à la pointe.",
  },
  {
    titre: "Résultats",
    description:
      "Chaque engagement se traduit par des livrables concrets, mesurables et actionnables.",
  },
]

const stats = [
  {
    val: "+400%",
    label: "Augmentation des incidents cybersécurité déclarés en Afrique de l'Ouest en 3 ans",
    source: "ARTP Sénégal / rapports CSIRT 2022-2024",
  },
  {
    val: "< 10",
    label: "Nombre de cabinets locaux capables de réaliser un audit SI complet",
    source: "Étude de marché N360 2024",
  },
  {
    val: "73%",
    label: "Des entreprises africaines n'ont aucun plan de réponse aux incidents cyber",
    source: "Rapport Interpol Africa Cyberthreat Assessment",
  },
  {
    val: "2,5 Mds $",
    label: "Coût annuel estimé de la cybercriminalité pour l'Afrique",
    source: "Rapport Serianu 2024",
  },
  {
    val: "85%",
    label: "Des PME sénégalaises n'ont aucune politique de cybersécurité",
    source: "Étude AfricaNenda 2024",
  },
]

const etapes = [
  {
    num: "01",
    phase: "Diagnostic",
    contenu:
      "Audit de la situation actuelle. Analyse des besoins. Identification des risques et opportunités. Entretiens avec les parties prenantes clés.",
    duree: "J1 à J5",
  },
  {
    num: "02",
    phase: "Stratégie",
    contenu:
      "Définition des objectifs SMART. Proposition d'une feuille de route personnalisée. Validation avec le client. Contractualisation.",
    duree: "J5 à J10",
  },
  {
    num: "03",
    phase: "Déploiement",
    contenu:
      "Mise en œuvre des solutions techniques, humaines et organisationnelles. Points d'avancement hebdomadaires. Ajustements en continu.",
    duree: "J10 à J30+",
  },
  {
    num: "04",
    phase: "Monitoring",
    contenu:
      "Surveillance continue des indicateurs de performance. Reporting mensuel. Détection proactive des anomalies et risques émergents.",
    duree: "En continu",
  },
  {
    num: "05",
    phase: "Optimisation",
    contenu:
      "Révision trimestrielle des stratégies. Recommandations d'amélioration. Montée en compétences des équipes client. Renouvellement si pertinent.",
    duree: "Trimestriel",
  },
]

const engagements = [
  { label: "Confidentialité absolue", detail: "NDA signé avant toute mission, sans exception" },
  { label: "Réactivité", detail: "Réponse sous 4h à toute demande urgente, 24h pour les demandes standard" },
  { label: "Transparence", detail: "Rapport d'avancement hebdomadaire sur chaque mission active" },
  { label: "Livrables actionnables", detail: "Chaque rapport inclut un plan d'action clair, priorisé et chiffré" },
  { label: "Disponibilité SOC", detail: "24h/24, 7j/7 pour les clients sous contrat de surveillance" },
]

const segments = [
  {
    segment: "Banques & établissements financiers",
    exemples: "CBAO, Ecobank, UBA, BSIC, fintech",
    besoins: "Audit SI, SOC, conformité BCEAO, formation",
    poles: "Pôle 6 + Pôle 1 + Pôle 2",
  },
  {
    segment: "Télécoms & opérateurs",
    exemples: "Orange Sénégal, Free, Expresso",
    besoins: "Audit infra, sécurisation réseau, OSINT",
    poles: "Pôle 6 + Pôle 7 + Pôle 1",
  },
  {
    segment: "Institutions publiques",
    exemples: "Ministères, DGI, Trésor Public, ARTP",
    besoins: "Audit SI, AMOA, formation, communication",
    poles: "Pôle 6 + Pôle 8 + Pôle 2",
  },
  {
    segment: "Groupes privés & industries",
    exemples: "Hôtels, immobilier, agroalimentaire, retail",
    besoins: "Cybersécurité, viralisation, production AV",
    poles: "Pôle 6 + Pôle 3 + Pôle 5",
  },
  {
    segment: "PME & startups tech",
    exemples: "Scale-ups DER, fintech, e-commerce",
    besoins: "Dev IT, cybersécurité, viralisation",
    poles: "Pôle 7 + Pôle 6 + Pôle 3",
  },
  {
    segment: "Personnalités & célébrités",
    exemples: "Artistes, sportifs, politiques, dirigeants",
    besoins: "E-réputation, image, communication",
    poles: "Pôle 4 + Pôle 2 + Pôle 5",
  },
  {
    segment: "ONG & organismes internationaux",
    exemples: "USAID, Banque Mondiale, ONU, AFD",
    besoins: "Audit conformité, formation, communication",
    poles: "Pôle 6 + Pôle 8 + Pôle 5",
  },
]

const zones = [
  "Sénégal — marché principal, présence physique à Dakar Plateau",
  "Zone UEMOA — Côte d'Ivoire, Mali, Burkina Faso, Niger, Togo, Bénin, Guinée-Bissau",
  "Zone CEDEAO élargie — Nigeria, Ghana, Guinée Conakry, Gambie, Cap-Vert",
  "International — interventions ponctuelles sur demande, missions à distance possibles",
]

const comparaison = [
  { critere: "Cybersécurité opérationnelle", n360: "Oui — SOC, audit, forensic", agences: "Non", cabinets: "Partiel" },
  { critere: "OSINT & renseignement", n360: "Oui — pôle dédié", agences: "Non", cabinets: "Non" },
  { critere: "Viralisation & RS", n360: "Oui — pôle dédié", agences: "Oui", cabinets: "Non" },
  { critere: "Production audiovisuelle", n360: "Oui — studio, drone, Sony FX3", agences: "Partiel", cabinets: "Non" },
  { critere: "Gestion image personnalités", n360: "Oui — pôle dédié", agences: "Parfois", cabinets: "Non" },
  { critere: "Développement IT", n360: "Oui — web, mobile, ERP, réseaux", agences: "Non", cabinets: "Oui" },
  { critere: "Transformation digitale", n360: "Oui — conseil & accompagnement", agences: "Partiel", cabinets: "Partiel" },
  { critere: "Ancrage sénégalais", n360: "Oui — natif Dakar", agences: "Variable", cabinets: "Variable" },
  { critere: "Certifications cyber", n360: "CISSP, CEH, ISO 27001 (objectifs)", agences: "Non", cabinets: "Partiel" },
]

const rhPhilosophie = [
  "Priorité aux talents sénégalais formés localement ou à l'international souhaitant contribuer au développement numérique de leur pays",
  "Formation continue obligatoire : budget de formation annuel par collaborateur",
  "Certifications professionnelles financées par l'entreprise (CISSP, CEH, CompTIA...)",
  "Contrats CDI OHADA pour tous les postes permanents — protection sociale complète (IPRES/CSS)",
  "Politique de télétravail partiel (2 jours/semaine) pour les postes compatibles",
  "Intéressement semestriel lié aux résultats des pôles",
]

export default function AProposPage() {
  return (
    <main>
      <Navbar />

      <AProposClient
        valeurs={valeurs}
        stats={stats}
        etapes={etapes}
        engagements={engagements}
        segments={segments}
        zones={zones}
        comparaison={comparaison}
        rhPhilosophie={rhPhilosophie}
      />

      <Footer />
    </main>
  )
}
