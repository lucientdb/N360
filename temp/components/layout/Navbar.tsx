"use client"

import Image from "next/image"

import { useState, useEffect } from "react"
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
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  // Close menu when pathname changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false)
  }, [pathname])


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-foreground text-white border-b border-white/10 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo/n360_icone_rs.png"
            alt="N360 icône"
            width={72}
            height={72}
            quality={100}
            className="h-9 w-9 object-contain rounded-lg"
          />
          <span className="font-[family-name:var(--font-heading)] font-black text-xl leading-none">
            <span className="text-white">N</span>
            <span style={{ color: "#00C97A" }}>360</span>
          </span>
        </Link>

        <ul className="md:flex items-center gap-8 hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-base font-medium transition-colors duration-200 ${pathname === link.href
                  ? "text-[#00C97A]"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-base text-white/70 hover:text-white transition-colors font-medium"
          >
            WhatsApp
          </Link>
          <Link
            href="/devis"
            className="bg-[#00C97A] hover:bg-[#00b36d] text-[#060D18] text-base font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 contour-pulse"
          >
            Devis gratuit
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/devis"
            className="bg-[#00C97A] hover:bg-[#00b36d] text-[#060D18] text-xs font-semibold px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 contour-pulse"
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
        {isMounted && isOpen && (
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
                    className={`block text-base py-1 font-medium transition-colors ${pathname === link.href
                      ? "text-[#00C97A]"
                      : "text-white/70 hover:text-white"
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
                  className="block w-full text-center bg-[#00C97A] hover:bg-[#00b36d] text-[#060D18] text-sm font-semibold px-5 py-2.5 rounded-full contour-pulse"
                >
                  Devis gratuit
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}