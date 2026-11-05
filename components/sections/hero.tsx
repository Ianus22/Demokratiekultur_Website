"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative flex items-center bg-brand-dark overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        {/*
          Raster: Logo in eigener Zeile über der linken Spalte, damit die Oberkante
          des Bildes rechts mit der Oberkante der Zeile "Demokratie leben." fluchtet.
        */}
        <div className="hero-grid grid lg:grid-cols-2 gap-x-16 gap-y-8 items-start">
          <Image
            src="/images/logo/logo-farbe-auf-dunkel.svg"
            alt="demokratiekultur.at – Mitgestalten, Lernen, Wachsen"
            width={1270}
            height={830}
            className="h-auto w-56 sm:w-64 md:w-72 lg:col-start-1 lg:row-start-1"
            priority
          />

          <div className="lg:col-start-1 lg:row-start-2">
            <h1
              id="hero-heading"
              className="hero-heading font-bold text-white leading-tight"
            >
              <span className="block whitespace-nowrap">
                Demokratie <span className="highlight-marker">leben</span>.
              </span>
              <span className="block">Schule partizipativ gestalten.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-pretty">
              Dass junge Menschen in der Schule demokratische Kultur (er-)leben, ist die
              Voraussetzung für ein aktives demokratisches Engagement auch über die Schule hinaus.
            </p>
          </div>

          <figure className="hero-figure mt-2 lg:col-start-2 lg:row-start-2">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
              <Image
                src="/images/klassenrat.jpg"
                alt="Schüler:innen sitzen im Klassenrat im Kreis und besprechen ihre Anliegen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs text-white/60">
              KI-Bild wegen Persönlichkeitsschutz
            </figcaption>
          </figure>
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
