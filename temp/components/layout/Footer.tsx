"use client"

import Image from "next/image"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a14.011 14.011 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const footerLinks = {
  poles: [
    { label: "Cyber-Renseignement & OSINT", href: "/poles/cyber-renseignement-osint" },
    { label: "Social Listening & E-Réputation", href: "/poles/social-listening-e-reputation" },
    { label: "Viralisation & Réseaux Sociaux", href: "/poles/viralisation-reseaux-sociaux" },
    { label: "Gestion d'Image & Personnalités", href: "/poles/gestion-image-personnalites" },
    { label: "Production Audiovisuelle", href: "/poles/production-audiovisuelle" },
    { label: "Cybersécurité & Infrastructures", href: "/poles/cybersecurite-infrastructures" },
    { label: "Développement & Ingénierie IT", href: "/poles/developpement-ingenierie-it" },
    { label: "Transformation Digitale & Conseil", href: "/poles/transformation-digitale-conseil" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Contact", href: "/contact" },
    { label: "Demander un devis", href: "/devis" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "CGU", href: "/cgu" },
  ],
}

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/share/18njp2m465/?mibextid=wwXIfr", icon: FacebookIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setStatus('idle')
    setMessage("")
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.")
      }
      setStatus('success')
      setEmail("")
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : "Une erreur est survenue.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 pt-12 sm:pt-16 md:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-16">

          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image src="/images/logo/fond_blanc.png" alt="n360 Logo" width={300} height={80} quality={100} style={{ height: 'auto' }} className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              Première agence d&apos;intelligence numérique intégrée d&apos;Afrique de
              l&apos;Ouest. Cybersécurité, OSINT, viralisation et transformation digitale
              à Dakar Plateau.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contact@numerique360agency.com"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <Mail size={14} />
                contact@numerique360agency.com
              </a>
              <a
                href="tel:+221776872222"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <Phone size={14} />
                +221 77 687 22 22
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-white/50">
                <MapPin size={14} />
                Dakar Plateau, Sénégal
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-[0.12em] mb-5">
              Nos pôles
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.poles.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-[0.12em] mb-5">
              Entreprise
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs font-semibold text-white uppercase tracking-[0.12em] mb-5 mt-10">
              Légal
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-white uppercase tracking-[0.12em] mb-5">
              Newsletter
            </p>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Recevez nos analyses et insights sur la cybersécurité et le digital. Les
              emails sont envoyés depuis newsletters.numerique360agency.com.
            </p>
            {status === "success" ? (
              <p className="text-sm text-green-400 font-medium bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                Merci ! Votre inscription a bien été enregistrée.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue transition-colors duration-200"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-60 text-white text-sm font-medium py-3 rounded-xl transition-colors duration-200"
                >
                  {loading ? "Envoi..." : "S'abonner"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-400 mt-1">{message}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} N360 Agency. Tous droits réservés.
          </p>
          <p className="text-xs text-white/30">
            Fait avec précision au Sénégal 🇸🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
