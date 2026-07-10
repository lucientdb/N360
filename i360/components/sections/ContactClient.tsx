"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
}

const infos = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@numerique360agency.com",
    href: "mailto:contact@numerique360agency.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+221 77 687 22 22",
    href: "tel:+221776872222",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Dakar Plateau, Sénégal",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilité SOC",
    value: "24h/24 — 7j/7",
    href: null,
  },
]

const subjects = [
  "Audit de Sécurité / Pentest",
  "Cyber-Renseignement & OSINT",
  "Social Listening & E-Réputation",
  "Viralisation & Réseaux Sociaux",
  "Gestion d'Image & Personnalités",
  "Production Audiovisuelle",
  "Développement IT",
  "Transformation Digitale",
  "Autre demande",
]

export default function ContactClient() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.")
      }
      setSent(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur de connexion est survenue. Veuillez réessayer."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 bg-[#060D18]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* Colonne gauche — infos */}
          <motion.div variants={itemVariants} className="flex flex-col gap-10">
            <div>
              <p className="text-xs text-[#00C97A] font-mono-brand uppercase tracking-[0.15em] font-medium mb-3">
                Parlons de votre projet
              </p>
              <h1 className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                Contactez-nous
              </h1>
              <p className="mt-4 text-[#8A9BB5] leading-relaxed max-w-md">
                Une question, un projet, une urgence cybersécurité ? Notre équipe
                vous répond sous 4h pour toute demande urgente, 24h pour les
                demandes standard.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A7A4A]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#00C97A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-white hover:text-[#00C97A] transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1B2A] border border-[#1A7A4A]/20">
              <p className="text-xs text-[#8A9BB5] font-mono-brand uppercase tracking-widest mb-3">
                Réponse rapide via WhatsApp
              </p>
              <p className="text-sm text-[#8A9BB5] leading-relaxed mb-4">
                Pour les demandes urgentes, notre équipe est joignable directement
                sur WhatsApp.
              </p>
              <motion.a
                href="https://wa.me/221776872222"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#1A7A4A] hover:bg-[#0d5f4a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
              >
                <MessageCircle size={16} />
                Écrire sur WhatsApp
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "4h", label: "Délai de réponse urgent" },
                { val: "NDA", label: "Signé avant toute mission" },
                { val: "100%", label: "Confidentialité garantie" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#1A7A4A]/20 bg-[#0D1B2A] p-4 text-center"
                >
                  <p className="font-[family-name:var(--font-heading)] font-bold text-xl text-white">
                    {stat.val}
                  </p>
                  <p className="text-[10px] text-[#8A9BB5] mt-1 leading-snug font-mono-brand">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colonne droite — formulaire */}
          <motion.div variants={itemVariants}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#1A7A4A]/20 bg-[#0D1B2A] p-12 text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00C97A]/10 border border-[#00C97A]/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#00C97A]" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-2xl text-white">
                  Message envoyé !
                </h2>
                <p className="text-[#8A9BB5] text-sm leading-relaxed max-w-xs">
                  Nous avons bien reçu votre message. Notre équipe vous répondra
                  dans les meilleurs délais.
                </p>
                <button
                  onClick={() => {
                    setSent(false)
                    setError(null)
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" })
                  }}
                  className="mt-2 text-sm text-[#00C97A] hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-[#1A7A4A]/20 bg-[#0D1B2A] p-8 flex flex-col gap-5"
              >
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-white">
                  Envoyer un message
                </h2>

                {error && (
                  <div className="p-4 text-sm text-red-400 bg-red-900/20 border border-red-500/30 rounded-xl">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Moussa Diop"
                      className="w-full border border-[#1A7A4A]/20 rounded-xl px-4 py-3 text-sm text-white bg-[#060D18] placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#1A7A4A] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="diop@entreprise.com"
                      className="w-full border border-[#1A7A4A]/20 rounded-xl px-4 py-3 text-sm text-white bg-[#060D18] placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#1A7A4A] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+221 77 000 00 00"
                      className="w-full border border-[#1A7A4A]/20 rounded-xl px-4 py-3 text-sm text-white bg-[#060D18] placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#1A7A4A] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#1A7A4A]/20 rounded-xl px-4 py-3 text-sm text-white bg-[#060D18] focus:outline-none focus:border-[#1A7A4A] transition-colors duration-200"
                    >
                      <option value="" className="bg-[#0D1B2A]">Choisir un sujet</option>
                      {subjects.map((s) => (
                        <option key={s} value={s} className="bg-[#0D1B2A]">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#8A9BB5] uppercase tracking-widest font-mono-brand">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full border border-[#1A7A4A]/20 rounded-xl px-4 py-3 text-sm text-white bg-[#060D18] placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#1A7A4A] transition-colors duration-200 resize-none"
                  />
                </div>

                <p className="text-[10px] text-[#8A9BB5]">
                  En soumettant ce formulaire, vous acceptez que vos données soient
                  utilisées pour traiter votre demande. Aucun spam, NDA disponible
                  sur demande.
                </p>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1A7A4A] hover:bg-[#0d5f4a] disabled:opacity-60 text-white text-sm font-medium px-7 py-3.5 rounded-full transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
