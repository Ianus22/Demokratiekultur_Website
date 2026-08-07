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
  { name: "zentrum polis", href: "https://www.politik-lernen.at", logo: "/images/partner/zentrum-polis.jpg" },
  { name: "BMB", logo: "/images/partner/bmb.png" },
  { name: "Stadt Wien", logo: "/images/partner/stadt-wien.png" },
  { name: "PH Wien", logo: "/images/partner/ph-wien.png" },
  { name: "kPH Wien/NÖ", logo: "/images/partner/kph-wien-krems.svg" },
  { name: "Bündnis 2025", href: "https://buendnis2025.at", logo: "/images/partner/buendnis-2025.png" },
  { name: "mehr demokratie!", logo: "/images/partner/mehr-demokratie-wien.png" },
  { name: "European Schoolnet", href: "https://www.eun.org", logo: "/images/partner/european-schoolnet.png" },
]

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex h-full min-h-32 flex-col items-center justify-center gap-2 rounded-lg bg-white px-6 py-7 shadow-sm">
      {partner.logo ? (
        <div className="relative w-full h-16">
          <Image
            src={partner.logo}
            alt={`Logo ${partner.name}`}
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>
      ) : (
        <span className="font-serif font-semibold text-petrol text-center leading-snug">
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
          className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-12 text-center"
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
