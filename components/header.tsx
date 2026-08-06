"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#angebot", label: "Angebot" },
  { href: "/#was-wir-tun", label: "Wie wir arbeiten" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/download", label: "Download" },
  { href: "/#kontakt", label: "Kontakt" },
]

export function Header() {
  const pathname = usePathname()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Only the homepage has a dark hero behind the header.
  const hasDarkHero = pathname === "/"
  const isScrolled = hasScrolled || !hasDarkHero

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Initiative Demokratiekultur - Startseite"
          >
            <span
              className={`font-serif font-bold text-lg md:text-xl transition-colors ${
                isScrolled ? "text-blue-deep" : "text-white"
              }`}
            >
              Initiative Demokratiekultur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-green-moss ${
                  isScrolled ? "text-blue-deep" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-blue-deep" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Divider line */}
      <div
        className={`h-px transition-colors ${
          isScrolled ? "bg-border" : "bg-white/20"
        }`}
      />

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden bg-cream border-b border-border"
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-blue-deep font-medium py-2 hover:text-green-moss transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
