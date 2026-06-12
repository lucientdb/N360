"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Services", href: "/#poles" },
  { label: "Pôles", href: "/poles" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()


  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-foreground text-white border-b border-white/10 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

        <Link href="/" className="font-[family-name:var(--font-heading)] font-black text-xl tracking-tight text-white">
          i<span className="text-brand-blue">360</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-blue font-medium"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="md:hidden flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
          {links.slice(0, 3).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-blue font-medium"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="/devis"
            className="bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 pulse-glow"
          >
            Devis gratuit
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/devis"
            className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-medium px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 pulse-glow"
          >
            Devis
          </Link>
          <button
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-foreground border-b border-white/10"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm py-1 transition-colors ${
                      pathname === link.href
                        ? "text-brand-blue font-medium"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link
                  href="/devis"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-full pulse-glow"
                >
                  Devis gratuit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}