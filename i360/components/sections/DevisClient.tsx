"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"

const poles = [
  { num: "01", name: "Cyber-Renseignement & OSINT", color: "#1fa882" },
  { num: "02", name: "Social Listening & E-Réputation", color: "#1fa882" },
  { num: "03", name: "Viralisation & Réseaux Sociaux", color: "#1fa882" },
  { num: "04", name: "Gestion d'Image & Personnalités", color: "#1fa882" },
  { num: "05", name: "Production Audiovisuelle", color: "#1fa882" },
  { num: "06", name: "Cybersécurité & Infrastructures", color: "#1fa882" },
  { num: "07", name: "Développement & Ingénierie IT", color: "#1fa882" },
  { num: "08", name: "Transformation Digitale & Conseil", color: "#1fa882" },
]

const budgets = [
  "Moins de 500 000 FCFA",
  "500 000 – 2 000 000 FCFA",
  "2 000 000 – 10 000 000 FCFA",
  "Plus de 10 000 000 FCFA",
  "À définir ensemble",
]

const delais = [
  "Urgent (moins de 2 semaines)",
  "Court terme (1 mois)",
  "Moyen terme (2-3 mois)",
  "Long terme (+ 3 mois)",
  "Pas de contrainte",
]

const stepVariants: Variants = {
  enter: { opacity: 0, x: 40 },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.25 },
  },
}

type FormData = {
  poles: string[]
  budget: string
  delai: string
  name: string
  organisation: string
  email: string
  phone: string
  description: string
}

export default function DevisClient() {
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>({
    poles: [],
    budget: "",
    delai: "",
    name: "",
    organisation: "",
    email: "",
    phone: "",
    description: "",
  })

  const steps = ["Pôles", "Budget & Délai", "Vos coordonnées", "Description"]
  const totalSteps = steps.length

  function togglePole(name: string) {
    setForm((prev) => ({
      ...prev,
      poles: prev.poles.includes(name)
        ? prev.poles.filter((p) => p !== name)
        : [...prev.poles, name],
    }))
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit() {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/devis", {
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

  function canNext() {
    if (step === 0) return form.poles.length > 0
    if (step === 1) return form.budget !== "" && form.delai !== ""
    if (step === 2) return form.name !== "" && form.email !== ""
    return form.description.length >= 20
  }

  if (sent) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 bg-background pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center flex flex-col items-center gap-6 py-16 sm:py-20"
        >
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] font-black text-2xl sm:text-3xl text-foreground">
            Demande reçue !
          </h1>
          <p className="text-brand-gray text-sm leading-relaxed">
            Merci <strong>{form.name}</strong>. Nos experts analysent votre demande
            et vous répondront sous 24h avec une proposition personnalisée.
          </p>
          <div className="w-full p-5 rounded-2xl bg-brand-navy border border-brand-blue/20 text-left">
            <p className="text-xs text-brand-gray uppercase tracking-widest mb-3">
              Récapitulatif
            </p>
            <p className="text-sm text-foreground mb-1">
              <span className="text-brand-gray">Pôles :</span>{" "}
              {form.poles.join(", ")}
            </p>
            <p className="text-sm text-foreground mb-1">
              <span className="text-brand-gray">Budget :</span> {form.budget}
            </p>
            <p className="text-sm text-foreground">
              <span className="text-brand-gray">Délai :</span> {form.delai}
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs text-brand-blue uppercase tracking-[0.15em] font-medium mb-3">
            Gratuit &amp; sans engagement
          </p>
          <h1 className="font-[family-name:var(--font-heading)] font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            Demander un devis
          </h1>
          <p className="text-brand-gray text-sm leading-relaxed max-w-md mx-auto">
            Répondez à 4 questions simples. Nos experts vous envoient une
            proposition sur mesure sous 24h.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-10 overflow-x-auto">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                    i < step
                      ? "bg-brand-blue text-white"
                      : i === step
                      ? "bg-brand-blue text-white ring-4 ring-brand-blue-light"
                      : "bg-brand-navy text-brand-gray border border-brand-blue/20"
                  }`}
                >
                  {i < step ? <CheckCircle size={14} /> : i + 1}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-widest hidden sm:block ${
                    i === step ? "text-brand-blue font-semibold" : "text-brand-gray"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-px transition-all duration-300 mb-4 ${
                    i < step ? "bg-brand-blue" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-brand-blue/20 bg-background shadow-sm overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8"
              >
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-2">
                  Quels pôles vous intéressent ?
                </h2>
                <p className="text-sm text-brand-gray mb-6">
                  Sélectionnez un ou plusieurs pôles.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {poles.map((pole) => {
                    const selected = form.poles.includes(pole.name)
                    return (
                      <button
                        key={pole.num}
                        type="button"
                        onClick={() => togglePole(pole.name)}
                        className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                          selected
                            ? "border-brand-blue bg-brand-blue-light"
                            : "border-brand-blue/20 bg-background hover:border-foreground/20"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200`}
                          style={{ background: selected ? pole.color : "#d1d5db" }}
                        />
                        <div>
                          <span className="text-[10px] text-brand-gray uppercase tracking-widest block">
                            Pôle {pole.num}
                          </span>
                          <span className="text-sm font-medium text-foreground leading-snug">
                            {pole.name}
                          </span>
                        </div>
                        {selected && (
                          <CheckCircle
                            size={16}
                            className="ml-auto text-brand-blue flex-shrink-0"
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 flex flex-col gap-8"
              >
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-2">
                    Budget envisagé
                  </h2>
                  <p className="text-sm text-brand-gray mb-4">
                    Une estimation pour mieux calibrer notre proposition.
                  </p>
                  <div className="flex flex-col gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                        className={`flex items-center justify-between px-5 py-3.5 rounded-xl border text-sm transition-all duration-200 ${
                          form.budget === b
                            ? "border-brand-blue bg-brand-blue-light text-brand-blue font-medium"
                            : "border-brand-blue/20 bg-background hover:border-foreground/20 text-foreground"
                        }`}
                      >
                        {b}
                        {form.budget === b && <CheckCircle size={15} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-2">
                    Délai souhaité
                  </h2>
                  <div className="flex flex-col gap-2">
                    {delais.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, delai: d }))}
                        className={`flex items-center justify-between px-5 py-3.5 rounded-xl border text-sm transition-all duration-200 ${
                          form.delai === d
                            ? "border-brand-blue bg-brand-blue-light text-brand-blue font-medium"
                            : "border-brand-blue/20 bg-background hover:border-foreground/20 text-foreground"
                        }`}
                      >
                        {d}
                        {form.delai === d && <CheckCircle size={15} />}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 flex flex-col gap-5"
              >
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-2">
                    Vos coordonnées
                  </h2>
                  <p className="text-sm text-brand-gray mb-6">
                    Pour vous envoyer la proposition personnalisée.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-brand-gray uppercase tracking-widest">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Modou Diop"
                      className="w-full border border-brand-blue/20 rounded-xl px-4 py-3 text-sm bg-brand-navy text-foreground placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-brand-gray uppercase tracking-widest">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      placeholder="Nom de l'entreprise"
                      className="w-full border border-brand-blue/20 rounded-xl px-4 py-3 text-sm bg-brand-navy text-foreground placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-brand-gray uppercase tracking-widest">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="diop@entreprise.com"
                      className="w-full border border-brand-blue/20 rounded-xl px-4 py-3 text-sm bg-brand-navy text-foreground placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-brand-gray uppercase tracking-widest">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+221 77 000 00 00"
                      className="w-full border border-brand-blue/20 rounded-xl px-4 py-3 text-sm bg-brand-navy text-foreground placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 flex flex-col gap-5"
              >
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl text-foreground mb-2">
                    Décrivez votre projet
                  </h2>
                  <p className="text-sm text-brand-gray mb-6">
                    Plus vous êtes précis, plus notre proposition sera pertinente.
                  </p>
                </div>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={7}
                  placeholder="Ex : Nous sommes une PME de 50 personnes dans le secteur financier. Nous avons récemment subi une tentative d'intrusion et souhaitons réaliser un audit de sécurité complet de notre SI..."
                  className="w-full border border-brand-blue/20 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue transition-colors duration-200 resize-none"
                />
                <p className="text-[10px] text-brand-gray">
                  Minimum 20 caractères.{" "}
                  <span
                    className={
                      form.description.length >= 20
                        ? "text-green-500"
                        : "text-brand-gray"
                    }
                  >
                    {form.description.length} / 20
                  </span>
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <div className="mx-8 mb-4 p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl">
              {error}
            </div>
          )}

          <div className="px-8 pb-8 flex items-center justify-between gap-4">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-foreground border border-brand-blue/20 px-5 py-2.5 rounded-full transition-all duration-200"
              >
                <ArrowLeft size={14} />
                Retour
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps - 1 ? (
              <motion.button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                whileHover={canNext() ? { scale: 1.03 } : {}}
                whileTap={canNext() ? { scale: 0.97 } : {}}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-7 py-2.5 rounded-full transition-colors duration-200"
              >
                Suivant
                <ArrowRight size={14} />
              </motion.button>
            ) : (
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={!canNext() || loading}
                whileHover={canNext() ? { scale: 1.03 } : {}}
                whileTap={canNext() ? { scale: 0.97 } : {}}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium px-7 py-2.5 rounded-full transition-colors duration-200"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    Envoyer la demande
                    <ArrowRight size={14} />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

//ceci est un commentaire