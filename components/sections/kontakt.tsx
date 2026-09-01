"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const CONTACT_EMAIL = "info@demokratiekultur.at"

export function KontaktSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-petrol"
      aria-labelledby="kontakt-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center">
          <h2
            id="kontakt-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Gehen wir den Weg gemeinsam
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Du hast Interesse an partizipativer Schulkulturentwicklung? Du möchtest Demokratiebildung
            an deiner Schule stärken? Wir freuen uns von dir zu hören.
          </p>

          <p className="mt-8">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-white text-xl font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
