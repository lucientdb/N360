"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle, Users, ChevronRight } from "lucide-react"
import type { Pole } from "@/lib/poles"

type Certification = { nom: string; perimetre: string; statut: string }
type TechStack = { categorie: string; outils: string; usage: string }

type PoleDetail = Pole & {
  cibles?: string[]
  livrables?: string[]
  certifications?: Certification[]
  techStack?: TechStack[]
}

type Props = {
  pole: PoleDetail
  prevPole: PoleDetail | null
  nextPole: PoleDetail | null
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function PoleClient({ pole, prevPole, nextPole }: Props) {
  return (
    <>
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: pole.bgColor }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-xs sm:text-sm text-brand-gray overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-foreground transition-colors flex-shrink-0">Accueil</Link>
              <ChevronRight size={14} className="flex-shrink-0" />
              <Link href="/poles" className="hover:text-foreground transition-colors flex-shrink-0">Pôles</Link>
              <ChevronRight size={14} className="flex-shrink-0" />
              <span style={{ color: pole.color }} className="flex-shrink-0 truncate">{pole.name}</span>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full w-fit"
              style={{ color: pole.color, background: "rgba(255,255,255,0.7)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: pole.color }}
              />
              Pôle {pole.num}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-foreground max-w-3xl break-words"
            >
              {pole.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg md:text-xl font-light italic max-w-xl"
              style={{ color: pole.color }}
            >
              {pole.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg text-brand-gray leading-relaxed max-w-2xl"
            >
              {pole.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
              <Link
                href="/devis"
                className="group inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: pole.color }}
              >
                Demander un devis
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-border bg-white hover:border-foreground/20 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Ce que nous faisons</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Nos services
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pole.services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-brand-light hover:bg-white border border-transparent hover:border-border rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm font-[family-name:var(--font-heading)]"
                  style={{ background: pole.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-foreground mb-2">
                  {service.titre}
                </h3>
                <p className="text-brand-gray text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="flex flex-col gap-2">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: pole.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {pole.certifications && pole.certifications.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-14"
            >
              <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Certifications & Standards</p>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
                Notre niveau d&apos;exigence
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-x-auto rounded-2xl border border-border"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-brand-light">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Certification / Standard</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Périmètre</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Statut équipe</th>
                  </tr>
                </thead>
                <tbody>
                  {pole.certifications.map((cert, i) => (
                    <tr key={cert.nom} className={i % 2 === 0 ? "bg-white" : "bg-brand-light/50"}>
                      <td className="p-4 font-medium text-foreground">{cert.nom}</td>
                      <td className="p-4 text-brand-gray">{cert.perimetre}</td>
                      <td className="p-4 font-medium" style={{ color: pole.color }}>{cert.statut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      {pole.techStack && pole.techStack.length > 0 && (
        <section className="py-20 px-6 bg-brand-light">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-14"
            >
              <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Stack technique SOC</p>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
                Outils & technologies
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="overflow-x-auto rounded-2xl border border-border bg-white"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-brand-light">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Catégorie</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Outils</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Usage</th>
                  </tr>
                </thead>
                <tbody>
                  {pole.techStack.map((item, i) => (
                    <tr key={item.categorie} className={i % 2 === 0 ? "bg-white" : "bg-brand-light/50"}>
                      <td className="p-4 font-medium text-foreground">{item.categorie}</td>
                      <td className="p-4 text-brand-gray">{item.outils}</td>
                      <td className="p-4 text-brand-gray">{item.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 px-6" style={{ background: pole.bgColor }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-xs uppercase tracking-[0.15em] font-semibold mb-3" style={{ color: pole.color }}>
                Pourquoi nous choisir
              </p>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl tracking-tight text-foreground mb-5">
                Notre valeur ajoutée
              </h2>
              <p className="text-brand-gray leading-relaxed">{pole.pourquoi}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="bg-white rounded-2xl p-7 border border-border">
                <div className="flex items-center gap-2 mb-5">
                  <Users size={16} style={{ color: pole.color }} />
                  <span className="font-[family-name:var(--font-heading)] font-bold text-sm text-foreground uppercase tracking-wide">
                    Clients que nous servons
                  </span>
                </div>
                <ul className="flex flex-col gap-3">
                  {pole.clients.map((client) => (
                    <li key={client} className="flex items-center gap-3 text-sm text-foreground">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: pole.color }}
                      />
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto rounded-3xl px-10 py-14 text-center text-white"
          style={{ background: pole.color }}
        >
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight mb-4">
            Besoin de ce service ?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Parlez-nous de votre projet. Réponse sous 4h pour les urgences, 24h
            pour les demandes standard. NDA signé avant toute mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/devis"
              className="group inline-flex items-center gap-2 bg-white font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ color: pole.color }}
            >
              Demander un devis gratuit
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>

      <nav className="py-8 px-6 bg-brand-light border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {prevPole ? (
            <Link
              href={`/poles/${prevPole.slug}`}
              className="group flex items-center gap-2 text-sm text-brand-gray hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs text-brand-gray uppercase tracking-wider">Précédent</span>
                <span className="font-medium text-foreground">{prevPole.name}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/poles"
            className="text-xs text-brand-gray hover:text-foreground uppercase tracking-widest transition-colors"
          >
            Tous les pôles
          </Link>

          {nextPole ? (
            <Link
              href={`/poles/${nextPole.slug}`}
              className="group flex items-center gap-2 text-sm text-brand-gray hover:text-foreground transition-colors text-right"
            >
              <span>
                <span className="block text-xs text-brand-gray uppercase tracking-wider">Suivant</span>
                <span className="font-medium text-foreground">{nextPole.name}</span>
              </span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  )
}
