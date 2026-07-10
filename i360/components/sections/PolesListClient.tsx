"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

type Pole = {
  num: string
  slug: string
  name: string
  tagline: string
  description: string
  services: string[]
  color: string
  bgColor: string
}

const poles: Pole[] = [
  {
    num: "01",
    slug: "cyber-renseignement-osint",
    name: "Cyber-Renseignement & OSINT",
    tagline: "Anticiper les menaces avant qu'elles frappent",
    description:
      "Collecte et analyse de renseignements depuis des sources ouvertes (OSINT) pour identifier les menaces numériques, surveiller les acteurs malveillants et protéger vos intérêts stratégiques.",
    services: [
      "Investigation sur des personnes ou organisations",
      "Cartographie des menaces numériques",
      "Surveillance de dark web & forums cybercriminels",
      "Analyse de réseaux sociaux & empreinte numérique",
      "Rapports de renseignement actionnables",
    ],
    color: "#1fa882",
    bgColor: "#d1ede5",
  },
  {
    num: "02",
    slug: "social-listening-e-reputation",
    name: "Social Listening & E-Réputation",
    tagline: "Maîtriser ce que le web dit de vous",
    description:
      "Surveillance en temps réel de votre image sur l'ensemble du web et des réseaux sociaux. Détection précoce des crises, analyse des tendances et pilotage de votre réputation numérique.",
    services: [
      "Monitoring continu de votre marque 24h/24",
      "Détection et gestion de crises e-réputation",
      "Analyse des sentiments et tendances",
      "Veille concurrentielle et sectorielle",
      "Reporting hebdomadaire avec recommandations",
    ],
    color: "#1fa882",
    bgColor: "#e8f5ef",
  },
  {
    num: "03",
    slug: "viralisation-reseaux-sociaux",
    name: "Viralisation & Réseaux Sociaux",
    tagline: "Amplifier votre impact digital",
    description:
      "Stratégies de croissance organique et virale pour maximiser votre reach sur les réseaux sociaux. Création de contenus engageants, gestion de communauté et campagnes d'influence.",
    services: [
      "Stratégie de contenu sur mesure",
      "Gestion de communauté multiplateforme",
      "Campagnes d'influence et partenariats",
      "Création de contenus viraux (texte, image, vidéo)",
      "Analyse des performances et optimisation",
    ],
    color: "#1fa882",
    bgColor: "#f0f9f6",
  },
  {
    num: "04",
    slug: "gestion-image-personnalites",
    name: "Gestion d'Image & Personnalités",
    tagline: "Construire et protéger votre personal brand",
    description:
      "Personal branding et gestion de réputation pour dirigeants, personnalités politiques, artistes et célébrités. Protection, valorisation et rayonnement de votre image publique.",
    services: [
      "Audit et stratégie de personal branding",
      "Gestion de présence sur les réseaux sociaux",
      "Préparation aux interviews et prise de parole",
      "Gestion de crise médiatique",
      "Accompagnement continu et conseil stratégique",
    ],
    color: "#1fa882",
    bgColor: "#d1ede5",
  },
  {
    num: "05",
    slug: "production-audiovisuelle",
    name: "Production Audiovisuelle",
    tagline: "Des contenus qui marquent les esprits",
    description:
      "Production de contenus vidéo, podcasts et supports visuels à fort impact. De la captation avec matériel Sony FX3 et drone jusqu'au montage et la diffusion multiplateforme.",
    services: [
      "Production vidéo corporate et publicitaire",
      "Captation drone et cinématographie",
      "Podcasts et contenus audio",
      "Motion design et animation",
      "Photographie institutionnelle et événementielle",
    ],
    color: "#1fa882",
    bgColor: "#e8f5ef",
  },
  {
    num: "06",
    slug: "cybersecurite-infrastructures",
    name: "Cybersécurité & Infrastructures",
    tagline: "Protéger ce qui compte vraiment",
    description:
      "Audit, protection et sécurisation complète de vos systèmes informatiques. Du pentest à la mise en place d'un SOC 24h/24, nous couvrons l'intégralité du cycle de sécurité numérique.",
    services: [
      "Audit des Systèmes d'Information (Audit SI)",
      "Tests d'intrusion (Pentest) — boîte noire/grise/blanche",
      "Security Operations Center (SOC) externalisé ou hybride",
      "Investigation forensique numérique",
      "Sécurisation cloud AWS, Azure, GCP",
    ],
    color: "#1fa882",
    bgColor: "#f0f9f6",
  },
  {
    num: "07",
    slug: "developpement-ingenierie-it",
    name: "Développement & Ingénierie IT",
    tagline: "Bâtir des solutions numériques durables",
    description:
      "Conception et développement d'applications web, mobiles et solutions informatiques sur mesure. De la maquette au déploiement, nous livrons des produits robustes et évolutifs.",
    services: [
      "Développement web (Next.js, React, Node.js)",
      "Applications mobiles (React Native, Flutter)",
      "ERP, CRM et solutions métier sur mesure",
      "Intégrations API et architectures microservices",
      "Câblage réseau structuré et infra IT",
    ],
    color: "#1fa882",
    bgColor: "#d1ede5",
  },
  {
    num: "08",
    slug: "transformation-digitale-conseil",
    name: "Transformation Digitale & Conseil",
    tagline: "Piloter votre mutation numérique",
    description:
      "Accompagnement stratégique pour digitaliser et moderniser votre organisation. De l'audit de maturité digitale à la mise en œuvre opérationnelle, nous guidons chaque étape de votre transformation.",
    services: [
      "Audit de maturité digitale",
      "Schéma directeur informatique",
      "Conduite du changement et formation des équipes",
      "AMOA et pilotage de projets IT",
      "Conseil en gouvernance et conformité numérique",
    ],
    color: "#1fa882",
    bgColor: "#e8f5ef",
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

export default function PolesListClient() {
  return (
    <section className="py-16 px-6 bg-[#060D18]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {poles.map((pole) => (
            <motion.div key={pole.slug} variants={cardVariants}>
              <Link
                href={`/poles/${pole.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-[#1A7A4A]/20 bg-[#0D1B2A] overflow-hidden hover:shadow-xl hover:shadow-[#1A7A4A]/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header de la carte — fond légèrement teinté */}
                <div className="px-8 pt-8 pb-6 flex items-start gap-5 bg-[#0D1B2A] border-b border-[#1A7A4A]/10">
                  <span
                    className="font-[family-name:var(--font-heading)] font-black text-5xl leading-none opacity-10 select-none text-[#00C97A]"
                  >
                    {pole.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono-brand font-semibold tracking-[0.15em] uppercase block mb-1 text-[#00C97A]">
                      Pôle {pole.num}
                    </span>
                    <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl leading-snug text-white">
                      {pole.name}
                    </h2>
                    <p className="text-sm text-[#8A9BB5] mt-1 italic">
                      {pole.tagline}
                    </p>
                  </div>
                </div>

                {/* Corps */}
                <div className="px-8 py-6 flex flex-col gap-5 flex-1">
                  <p className="text-sm text-[#8A9BB5] leading-relaxed">
                    {pole.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {pole.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#1A7A4A]" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-[#1A7A4A]/20 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00C97A]">
                      Voir le détail
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                    <span className="text-[10px] text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      En savoir plus →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
