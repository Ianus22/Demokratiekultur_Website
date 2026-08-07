"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      className="relative flex items-center bg-petrol-dark overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-balance"
            >
              Demokratie leben. Schule partizipativ gestalten.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-pretty">
              Dass junge Menschen in der Schule demokratische Kultur (er-)leben, ist die
              Voraussetzung für ein aktives demokratisches Engagement auch über die Schule hinaus.
            </p>
          </div>

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
