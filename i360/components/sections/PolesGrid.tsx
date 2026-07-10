"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { type Variants } from "framer-motion"

type Pole = {
  num: string
  slug: string
  name: string
  description: string
  color: string
  bgColor: string
  image: string
}

const poles: Pole[] = [
  {
    num: "01",
    slug: "cyber-renseignement-osint",
    name: "Cyber-Renseignement & OSINT",
    description: "Collecte et analyse de renseignements depuis des sources ouvertes pour anticiper les menaces.",
    color: "#1fa882",
    bgColor: "#d1ede5",
    image: "/images/poles/osint.jpg",
  },
  {
    num: "02",
    slug: "social-listening-e-reputation",
    name: "Social Listening & E-Réputation",
    description: "Surveillance en temps réel de votre image sur le web et les réseaux sociaux.",
    color: "#1fa882",
    bgColor: "#e8f5ef",
    image: "/images/poles/listening.jpg",
  },
  {
    num: "03",
    slug: "viralisation-reseaux-sociaux",
    name: "Viralisation & Réseaux Sociaux",
    description: "Stratégies de croissance organique et virale pour maximiser votre reach.",
    color: "#1fa882",
    bgColor: "#f0f9f6",
    image: "/images/poles/viral.jpg",
  },
  {
    num: "04",
    slug: "gestion-image-personnalites",
    name: "Gestion d'Image & Personnalités",
    description: "Personal branding et gestion de réputation pour dirigeants et personnalités publiques.",
    color: "#1fa882",
    bgColor: "#d1ede5",
    image: "/images/poles/image.jpg",
  },
  {
    num: "05",
    slug: "production-audiovisuelle",
    name: "Production Audiovisuelle",
    description: "Création de contenus vidéo, podcasts et supports visuels à fort impact.",
    color: "#1fa882",
    bgColor: "#e8f5ef",
    image: "/images/poles/audiovisuel.jpg",
  },
  {
    num: "06",
    slug: "cybersecurite-infrastructures",
    name: "Cybersécurité & Infrastructures",
    description: "Audit, protection et sécurisation de vos systèmes informatiques.",
    color: "#1fa882",
    bgColor: "#f0f9f6",
    image: "/images/poles/cyber.jpg",
  },
  {
    num: "07",
    slug: "developpement-ingenierie-it",
    name: "Développement & Ingénierie IT",
    description: "Conception et développement d'applications web, mobiles et solutions sur mesure.",
    color: "#1fa882",
    bgColor: "#d1ede5",
    image: "/images/poles/dev.jpg",
  },
  {
    num: "08",
    slug: "transformation-digitale-conseil",
    name: "Transformation Digitale & Conseil",
    description: "Accompagnement stratégique pour digitaliser et moderniser votre organisation.",
    color: "#1fa882",
    bgColor: "#e8f5ef",
    image: "/images/poles/digital.jpg",
  },
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
}

export default function PolesGrid() {
  return (
    <section id="poles" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs text-brand-blue font-mono-brand uppercase tracking-[0.15em] mb-3">
            Nos domaines d&apos;intervention
          </p>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-4xl md:text-5xl tracking-tight text-foreground">
            8 pôles. Une vision.
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-brand-gray leading-relaxed">
            N360 Agency est le seul acteur en Afrique de l&apos;Ouest à combiner
            cybersécurité opérationnelle, renseignement numérique, viralisation digitale
            et production audiovisuelle sous une même structure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {poles.map((pole, index) => (
            <motion.div
              key={pole.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link
                href={`/poles/${pole.slug}`}
                className="group block rounded-2xl border border-brand-blue/20 bg-brand-navy overflow-hidden hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pole.image}
                    alt={pole.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 
                      className="font-[family-name:var(--font-heading)] font-bold text-base leading-tight text-white"
                      style={{
                        textShadow: `0 0 15px rgba(0,201,122,0.3), 0 2px 10px rgba(0,0,0,0.9)`
                      }}
                    >
                      {pole.name}
                    </h3>
                  </div>
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-brand-blue" />
                </div>

                <div className="p-5">
                  <p className="text-xs text-brand-gray leading-relaxed mb-4">
                    {pole.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue-vif transition-gap duration-200">
                    En savoir plus
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}