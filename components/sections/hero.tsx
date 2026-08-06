"use client"

import { ArrowDown, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-blue-deep overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle texture/gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(24,166,148,0.24)_0%,_transparent_48%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(4,45,64,.2),transparent_60%)]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#f3a91b]" />
            Verein für demokratische Schulkultur
          </div>
          <h1
            id="hero-heading"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-[-0.035em] text-balance"
          >
            Demokratie leben. Schule partizipativ gestalten.
          </h1>

          <p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed text-pretty">
            Dass junge Menschen in der Schule demokratische Kultur (er-)leben, ist die Voraussetzung für ein aktives demokratisches Engagement auch über die Schule hinaus.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#f3a91b] hover:bg-[#ffba37] text-blue-dark font-semibold px-7 py-6 text-base rounded-full transition-colors shadow-lg shadow-black/10"
            >
              <Link href="#kontakt">
                Erstgespräch vereinbaren <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Link href="#angebot" className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors">
              Angebot entdecken <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
            {["Praxisnah", "Partizipativ", "Nachhaltig verankert"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#65c5b8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f5f0e8"
          />
        </svg>
      </div>
    </section>
  )
}
