"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue-light rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-brand-blue bg-brand-blue-light px-4 py-2 rounded-full tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Numérique 360
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-heading)] font-black text-5xl md:text-7xl leading-[1.04] tracking-[-2.5px] text-foreground"
          >
            Une agence.<br />
            Huit expertises.
            <br />
            <span className="text-brand-blue">Zéro angle mort.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg text-brand-gray font-light leading-relaxed"
          >
            Première agence d&apos;intelligence numérique intégrée d&apos;Afrique de l&apos;Ouest.
            Basée à Dakar Plateau, Numérique 360 regroupe cybersécurité, OSINT, viralisation
            et production audiovisuelle sous un même toit.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <Link
              href="/devis"
              className="group inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Demander un devis
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#poles"
              className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-foreground border border-border hover:border-foreground/30 px-7 py-3.5 rounded-full transition-all duration-200"
            >
              Découvrir nos pôles
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mt-6 w-full max-w-sm"
          >
            {[
              { val: "8", unit: "+", label: "Pôles d'expertise" },
              { val: "360", unit: "°", label: "Couverture digitale" },
              { val: "24", unit: "h", label: "Réactivité" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white flex flex-col items-center justify-center py-5 px-4"
              >
                <span className="font-[family-name:var(--font-heading)] font-bold text-2xl text-foreground">
                  {stat.val}
                  <span className="text-brand-blue text-lg">{stat.unit}</span>
                </span>
                <span className="text-[10px] text-brand-gray uppercase tracking-widest mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} className="text-brand-gray" />
        </motion.div>
      </motion.div>
    </section>
  )
}