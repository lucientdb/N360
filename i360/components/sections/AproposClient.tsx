"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Eye, Zap, Target, Heart } from "lucide-react"

type Valeur = { titre: string; description: string }
type Stat = { val: string; label: string; source: string }
type Etape = { num: string; phase: string; contenu: string; duree: string }
type Engagement = { label: string; detail: string }
type Segment = { segment: string; exemples: string; besoins: string; poles: string }
type Comparaison = { critere: string; n360: string; agences: string; cabinets: string }

type Props = {
  valeurs: Valeur[]
  stats: Stat[]
  etapes: Etape[]
  engagements: Engagement[]
  segments: Segment[]
  zones: string[]
  comparaison: Comparaison[]
  rhPhilosophie: string[]
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const valeurIcons = [Shield, Eye, Heart, Zap, Target]

export default function AProposClient({
  valeurs,
  stats,
  etapes,
  engagements,
  segments,
  zones,
  comparaison,
  rhPhilosophie,
}: Props) {
  return (
    <>
      <section className="relative pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-20 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-light rounded-full blur-[140px] opacity-30 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue bg-brand-blue-light px-4 py-2 rounded-full tracking-widest uppercase w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Qui sommes-nous
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground max-w-3xl"
            >
              La première agence d&apos;intelligence numérique intégrée{" "}
              <span className="text-brand-blue">d&apos;Afrique de l&apos;Ouest</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-brand-gray leading-relaxed max-w-2xl">
              N360 Agency est la première agence d&apos;intelligence numérique intégrée
              d&apos;Afrique de l&apos;Ouest. Basée à Dakar Plateau, au Sénégal, elle regroupe sous un
              même toit huit pôles d&apos;expertise complémentaires : cybersécurité,
              cyber-renseignement, social listening, viralisation, gestion d&apos;image, production
              audiovisuelle, développement informatique et transformation digitale.
            </motion.p>

            <motion.p variants={fadeUp} className="text-brand-gray leading-relaxed max-w-2xl">
              Fondée par une équipe de consultants et d&apos;experts numériques sénégalais,
              N360 Agency répond à un constat simple : les entreprises, institutions et
              personnalités d&apos;Afrique de l&apos;Ouest ont besoin d&apos;un partenaire numérique complet,
              ancré localement, maîtrisant les spécificités du marché africain tout en opérant
              selon les standards internationaux.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-4 bg-brand-light rounded-2xl px-8 py-6 border-l-4 border-brand-blue max-w-2xl"
            >
              <p className="text-xs text-brand-blue font-semibold uppercase tracking-widest mb-2">
                Notre positionnement unique
              </p>
              <p className="text-foreground leading-relaxed">
                N360 Agency est le <strong>seul acteur en Afrique de l&apos;Ouest</strong> à combiner
                cybersécurité opérationnelle (Audit SI, SOC, Forensic), renseignement numérique
                (OSINT), viralisation digitale et production audiovisuelle sous une même structure.{" "}
                <strong>Aucun concurrent local n&apos;offre cette chaîne complète.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Mission & Vision</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Notre mission & vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <span className="text-brand-blue font-bold text-sm uppercase tracking-widest block mb-4">
                Notre mission
              </span>
              <p className="text-foreground leading-relaxed mb-4">
                Accompagner les entreprises, institutions et personnalités dans la maîtrise totale
                de leur présence numérique — en les protégeant des cybermenaces, en valorisant leur
                image et en amplifiant leur impact digital.
              </p>
              <p className="text-brand-gray text-sm leading-relaxed mb-4">
                Nous intervenons sur l&apos;ensemble du spectre numérique : de l&apos;audit de sécurité
                informatique à la production de contenus viraux, de la surveillance de la réputation
                en ligne à la mise en place de systèmes de vidéosurveillance.
              </p>
              <p className="text-brand-gray text-sm leading-relaxed">
                Notre force est cette vision intégrée que peu d&apos;acteurs au monde, et aucun en
                Afrique de l&apos;Ouest, sont capables d&apos;offrir.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-brand-blue rounded-2xl p-8"
            >
              <span className="text-white/70 font-bold text-sm uppercase tracking-widest block mb-4">
                Notre vision
              </span>
              <p className="text-white leading-relaxed">
                Faire de Dakar le <strong>hub de l&apos;intelligence numérique</strong> de l&apos;Afrique de
                l&apos;Ouest. Positionner N360 Agency comme la référence incontournable en
                cybersécurité et en stratégie digitale pour toute organisation souhaitant opérer
                avec sérénité et puissance dans l&apos;écosystème numérique africain.
              </p>
            </motion.div>
          </div>
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
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Nos valeurs fondatrices</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Ce en quoi nous croyons
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {valeurs.map((valeur, i) => {
              const Icon = valeurIcons[i]
              return (
                <motion.div
                  key={valeur.titre}
                  variants={fadeUp}
                  className="group bg-brand-light hover:bg-white border border-transparent hover:border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 text-foreground">
                    {valeur.titre}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{valeur.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-foreground text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <p className="text-xs text-white/50 uppercase tracking-[0.15em] mb-3">Le contexte</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Pourquoi N360 Agency ?
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-8 mb-14"
          >
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-white mb-3">
                Un marché en mutation rapide
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                L&apos;Afrique de l&apos;Ouest vit une transformation numérique accélérée. En 2025, le Sénégal
                compte plus de 11 millions d&apos;utilisateurs d&apos;internet et plus de 8 millions
                d&apos;abonnés aux réseaux sociaux. Cette digitalisation massive crée des opportunités
                considérables, mais aussi des risques croissants.
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-white mb-3">
                Des cybermenaces en explosion
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.val + stat.source}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-[family-name:var(--font-heading)] font-black text-3xl text-brand-blue block mb-2">
                  {stat.val}
                </span>
                <p className="text-white/80 text-sm leading-snug mb-3">{stat.label}</p>
                <p className="text-white/30 text-xs italic">{stat.source}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-white mb-3">
                Une réputation numérique non maîtrisée
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                Parallèlement à la cybersécurité, la réputation digitale est devenue un enjeu
                stratégique majeur. En 2025, une crise e-réputation peut détruire des années de
                construction de marque en 48 heures. Les personnalités politiques, les dirigeants
                d&apos;entreprise et les célébrités sénégalaises sont particulièrement exposées, sans
                toujours disposer des outils pour réagir efficacement.
              </p>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-white mb-3">
                Un écosystème numérique local sous-équipé
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                Face à ces enjeux, l&apos;offre locale est insuffisante. Les agences digitales
                classiques ne maîtrisent pas la cybersécurité. Les cabinets de conseil IT ne font
                pas de viralisation. Les agences de communication ne font pas d&apos;OSINT.
                N360 Agency est née pour combler ce vide.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 border-l-4 border-brand-blue">
              <p className="text-xs text-brand-blue font-semibold uppercase tracking-widest mb-2">
                Notre avantage compétitif
              </p>
              <p className="text-white/80 leading-relaxed">
                N360 Agency est le seul acteur local à proposer une approche de bout en bout :
                identifier les menaces (OSINT) → évaluer les vulnérabilités (Audit SI) → surveiller
                en continu (SOC) → corriger et protéger (Sécurisation) → amplifier et valoriser
                (Viralisation & E-Réputation). Cette chaîne intégrée est unique en Afrique de
                l&apos;Ouest.
              </p>
            </div>
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
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Nos clients</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Secteurs d&apos;intervention
            </h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
              N360 Agency intervient auprès d&apos;une clientèle diversifiée, couvrant l&apos;ensemble
              des secteurs économiques et institutionnels d&apos;Afrique de l&apos;Ouest. Notre positionnement
              hybride (cybersécurité + digital + production) nous permet d&apos;adresser des besoins très
              différents avec une même qualité de service.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-4"
          >
            {segments.map((seg) => (
              <motion.div
                key={seg.segment}
                variants={fadeUp}
                className="bg-brand-light border border-transparent hover:border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-foreground mb-3">
                  {seg.segment}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-widest mb-1">Exemples au Sénégal</p>
                    <p className="text-foreground">{seg.exemples}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-widest mb-1">Besoins principaux</p>
                    <p className="text-brand-gray">{seg.besoins}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-gray uppercase tracking-widest mb-1">Pôles mobilisés</p>
                    <p className="text-brand-blue font-medium">{seg.poles}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-14"
          >
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-6">
              Notre zone géographique d&apos;intervention
            </h3>
            <ul className="flex flex-col gap-3">
              {zones.map((zone) => (
                <li key={zone} className="flex items-start gap-3 text-sm text-brand-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                  {zone}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Différenciation</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Ce qui nous différencie de la concurrence
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="overflow-x-auto rounded-2xl border border-border bg-white"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-brand-light">
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-foreground">Critère</th>
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-brand-blue">N360 Agency</th>
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-foreground">Agences digitales classiques</th>
                  <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-foreground">Cabinets IT locaux</th>
                </tr>
              </thead>
              <tbody>
                {comparaison.map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? "bg-white" : "bg-brand-light/50"}>
                    <td className="p-4 font-medium text-foreground">{row.critere}</td>
                    <td className="p-4 text-brand-blue font-medium">{row.n360}</td>
                    <td className="p-4 text-brand-gray">{row.agences}</td>
                    <td className="p-4 text-brand-gray">{row.cabinets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            className="mb-10"
          >
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Notre équipe</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight mb-4">
              Des experts sénégalais du numérique
            </h2>
            <p className="text-brand-gray leading-relaxed max-w-2xl">
              N360 Agency est portée par une équipe fondatrice de professionnels sénégalais du
              numérique, secondée par des collaborateurs experts répartis sur les 8 pôles. Notre
              philosophie RH : recruter les meilleurs talents locaux, les former aux standards
              internationaux et leur donner les moyens d&apos;exercer leur expertise en Afrique.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-foreground mb-6">
              Notre philosophie RH
            </h3>
            <ul className="flex flex-col gap-4">
              {rhPhilosophie.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-brand-light rounded-xl p-5 text-sm text-brand-gray leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Notre approche</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Méthode de travail
            </h2>
            <p className="text-brand-gray mt-4 max-w-2xl mx-auto leading-relaxed">
              N360 Agency s&apos;appuie sur une méthodologie structurée qui garantit la qualité, la
              traçabilité et la pertinence de chaque intervention. Notre cycle en 5 étapes est
              appliqué à toutes nos missions, quelle que soit leur nature.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6"
            >
              {etapes.map((etape) => (
                <motion.div
                  key={etape.num}
                  variants={fadeUp}
                  className="group relative md:pl-16 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <div className="absolute left-0 top-5 w-12 h-12 rounded-full bg-brand-blue-light border-4 border-white flex items-center justify-center hidden md:flex">
                    <span className="font-[family-name:var(--font-heading)] font-black text-xs text-brand-blue">
                      {etape.num}
                    </span>
                  </div>

                  <div className="bg-white group-hover:shadow-md border border-transparent group-hover:border-border rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="md:hidden font-[family-name:var(--font-heading)] font-black text-xs text-brand-blue bg-brand-blue-light px-2 py-1 rounded-lg">
                          {etape.num}
                        </span>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-base text-foreground uppercase tracking-wide">
                          {etape.phase}
                        </h3>
                      </div>
                      <span className="text-xs text-brand-gray bg-brand-light border border-border px-3 py-1 rounded-full">
                        {etape.duree}
                      </span>
                    </div>
                    <p className="text-brand-gray text-sm leading-relaxed">{etape.contenu}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
            <p className="text-xs text-brand-gray uppercase tracking-[0.15em] mb-3">Engagements qualité</p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight">
              Nos engagements qualité
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {engagements.map((eng) => (
              <motion.div
                key={eng.label}
                variants={fadeUp}
                className="bg-brand-light border border-border rounded-2xl p-6 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm text-foreground mb-1">
                    {eng.label}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{eng.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-brand-light">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto bg-brand-blue rounded-3xl px-10 py-14 text-center text-white"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-4xl tracking-tight mb-4">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Premier échange offert, sans engagement. Nos experts analysent votre situation et vous
            proposent une stratégie sur mesure. Réponse sous 4h pour les urgences, 24h pour les
            demandes standard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/devis"
              className="group inline-flex items-center gap-2 bg-white text-brand-blue font-medium text-sm px-7 py-3.5 rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Demander un devis
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white border border-white/30 hover:border-white/60 text-sm px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
