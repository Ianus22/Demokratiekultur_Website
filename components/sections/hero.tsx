"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-blue-deep overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle texture/gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,124,89,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,240,232,0.08)_0%,_transparent_50%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1
          id="hero-heading"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance"
        >
          Demokratie leben. Schule partizipativ gestalten.
        </h1>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-pretty">
          Dass junge Menschen in der Schule demokratische Kultur (er-)leben, ist die Voraussetzung für ein aktives demokratisches Engagement auch über die Schule hinaus.
        </p>
        
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-green-moss hover:bg-green-light text-white font-medium px-8 py-6 text-lg rounded-lg transition-colors"
          >
            <Link href="#kontakt">
              Kontaktiere uns
            </Link>
          </Button>
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
