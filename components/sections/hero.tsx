"use client"

import Image from "next/image"
import { ArrowDown, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-petrol-dark overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Colorful glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(226,96,63,0.28)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(47,154,104,0.25)_0%,_transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_rgba(243,169,27,0.12)_0%,_transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,48,59,.45),transparent_65%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-amber" />
              Verein für demokratische Schulkultur
            </div>
            <h1
              id="hero-heading"
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.02] tracking-[-0.035em] text-balance"
            >
              Demokratie leben.{" "}
              <span className="bg-gradient-to-r from-amber via-coral-light to-coral bg-clip-text text-transparent">
                Schule partizipativ gestalten.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed text-pretty">
              Dass junge Menschen in der Schule demokratische Kultur (er-)leben, ist die
              Voraussetzung für ein aktives demokratisches Engagement auch über die Schule hinaus.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-coral hover:bg-coral-light text-white font-semibold px-7 py-6 text-base rounded-full transition-colors shadow-lg shadow-black/20"
              >
                <Link href="#kontakt">
                  Erstgespräch vereinbaren <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#angebot"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Angebot entdecken <ArrowDown className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
              {[
                { label: "Praxisnah", color: "text-amber" },
                { label: "Partizipativ", color: "text-coral-light" },
                { label: "Nachhaltig verankert", color: "text-green-light" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Check className={`h-4 w-4 ${item.color}`} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Image - Klassenrat (KI-Symbolbild) */}
          <div className="hidden lg:block">
            <div className="relative rotate-2 rounded-3xl bg-white/10 p-3 ring-1 ring-white/20 shadow-2xl shadow-black/30 backdrop-blur-sm transition-transform duration-500 hover:rotate-0">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src="/images/klassenrat.jpg"
                  alt="KI-generiertes Symbolbild: Schüler:innen im Klassenrat sitzen im Kreis und diskutieren"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 560px"
                  priority
                />
              </div>
              <p className="px-2 pt-2.5 pb-1 text-xs text-white/60">
                Klassenrat: Schüler:innen klären ihre Anliegen selbstorganisiert. (KI-Symbolbild)
              </p>
            </div>
          </div>
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
            fill="#faf6ee"
          />
        </svg>
      </div>
    </section>
  )
}
