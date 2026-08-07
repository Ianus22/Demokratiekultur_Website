import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-petrol-dark py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Left - Org Info */}
          <div className="flex flex-col">
            <span className="font-medium text-white">Initiative Demokratiekultur</span>
            <span className="text-white/70 text-sm">
              Ein Verein für demokratische Schulkultur.
            </span>
          </div>

          {/* Center - Legal Links */}
          <nav className="flex items-center gap-6" aria-label="Rechtliche Links">
            <Link
              href="/download"
              className="text-white/60 hover:text-white transition-colors"
            >
              Download
            </Link>
            <Link
              href="/impressum"
              className="text-white/60 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/60 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </nav>

          {/* Right - Copyright */}
          <div className="text-white/60 text-center md:text-right">
            © 2026 Esther Hörantner & Georg Blaha
          </div>
        </div>

        {/* KI-Bilder-Hinweis */}
        <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/50">
          Um die Persönlichkeitsrechte der Schüler:innen zu wahren, haben wir auf Fotos aus dem
          Schulalltag verzichtet und ausschließlich KI-generierte Symbolbilder für die
          Visualisierungen generiert. Wir ersuchen, über einige diesbezügliche kleine Bildfehler
          hinwegzusehen.
        </p>
      </div>
    </footer>
  )
}
