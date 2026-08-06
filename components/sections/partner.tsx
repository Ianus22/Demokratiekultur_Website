"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

type Partner = {
  name: string
  subtitle?: string
  href?: string
  /**
   * Logo-Datei unter /public/images/partner/ ablegen und hier eintragen,
   * z.B. logo: "/images/partner/zentrum-polis.png"
   */
  logo?: string
}

const partners: Partner[] = [
  { name: "zentrum polis", subtitle: "Politik lernen in der Schule", href: "https://www.politik-lernen.at" },
  { name: "BMB", subtitle: "Bundesministerium für Bildung" },
  { name: "Stadt Wien", subtitle: "MA 20" },
  { name: "PH Wien", subtitle: "Pädagogische Hochschule Wien" },
  { name: "kPH Wien/NÖ", subtitle: "Kirchliche Pädagogische Hochschule" },
  { name: "Bündnis 2025", href: "https://buendnis2025.at" },
  { name: "md!", subtitle: "mehr demokratie!" },
  { name: "European Schoolnet", subtitle: "ESEP-MOOC", href: "https://www.eun.org" },
]

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 bg-white rounded-xl px-5 py-6 shadow-sm hover:shadow-md transition-shadow">
      {partner.logo ? (
        <div className="relative w-full h-14">
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>
      ) : (
        <span className="font-serif font-semibold text-blue-deep text-center leading-snug">
          {partner.name}
        </span>
      )}
      {partner.subtitle && (
        <span className="text-xs text-foreground/60 text-center leading-snug">
          {partner.subtitle}
        </span>
      )}
    </div>
  )
}

export function PartnerSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="kooperationspartner"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="partner-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2
          id="partner-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-blue-deep mb-12 text-center"
        >
          Unsere Kooperationspartner
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <li key={partner.name}>
              {partner.href ? (
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-moss rounded-xl"
                >
                  <PartnerCard partner={partner} />
                </a>
              ) : (
                <PartnerCard partner={partner} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
