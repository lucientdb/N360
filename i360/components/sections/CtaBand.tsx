"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { type Variants } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function CtaBand() {
  return (
    <section className="py-16 px-6 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-6xl mx-auto bg-brand-light rounded-3xl px-6 sm:px-8 md:px-10 py-12 sm:py-14 md:py-16 overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-blue-light rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-blue-light rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <motion.div variants={itemVariants} className="text-center md:text-left max-w-xl">
            <p className="text-xs text-brand-blue uppercase tracking-[0.15em] font-medium mb-3">
              Passons à l&apos;action
            </p>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-foreground leading-snug">
              Prêt à passer à la{" "}
              <span className="text-brand-blue">vitesse supérieure</span>&nbsp;?
            </h2>
            <p className="mt-4 text-brand-gray text-sm leading-relaxed">
              N360 Agency est le seul acteur en Afrique de l&apos;Ouest à combiner
              cybersécurité opérationnelle, OSINT, viralisation et production audiovisuelle.
              Premier échange offert, sans engagement.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="/devis"
                className="group inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                Demander un devis
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="https://wa.me/221776872222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-border hover:border-foreground/20 text-foreground text-sm font-medium px-7 py-3.5 rounded-full transition-all duration-200"
              >
                <MessageCircle size={15} className="text-green-500" />
                WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative z-10 mt-12 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { val: "NDA", label: "Signé avant toute mission" },
            { val: "4h", label: "Réponse urgente" },
            { val: "24h", label: "Demande standard" },
            { val: "24/7", label: "Disponibilité SOC" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground">
                {item.val}
              </p>
              <p className="text-xs text-brand-gray mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}