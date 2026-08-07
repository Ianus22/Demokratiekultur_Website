"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const valueCards = [
  {
    title: "Freiwilligkeit & Vertrauen",
    description:
      "Veränderung gelingt nur, wenn sie von den Beteiligten mitgetragen wird. Wir setzen auf gemeinsame Zielklärungen und standortangepasste Umsetzung.",
  },
  {
    title: "Partizipation von Anfang an",
    description:
      "Lehrkräfte, Schüler:innen, Eltern, Nichtlehrpersonal und Schulleitung werden früh einbezogen. Maßnahmen werden transparent entwickelt und behutsam in den Schulalltag integriert.",
  },
  {
    title: "Langfristige Wirkung",
    description:
      "Eine strukturelle Verankerung der Maßnahmen über das Engagement Einzelner hinaus sichert eine nachhaltige demokratische Schulkultur. Zum Beispiel ist durch Studien nachgewiesen, dass durch mehr Beteiligung weniger Konflikte entstehen.",
  },
]

export function WofuerWirStehenSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="ueber-uns"
      className="py-20 md:py-28 bg-cream"
      aria-labelledby="wofuer-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Intro Text */}
          <div>
            <h2
              id="wofuer-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-6"
            >
              Wofür wir stehen
            </h2>

            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Schule als Ort zur Aneignung einer demokratischen Kultur – was utopisch klingen mag,
                beginnt an immer mehr Schulen zu wachsen, z.B. durch regelmäßige Klassenräte, in
                denen die Schüler*innen ihre eigenen Anliegen möglichst selbstorganisiert klären.
              </p>

              <p>
                Wo können junge Menschen eine demokratische Kultur besser lernen als in ihrer
                täglichen Lebenswelt Schule – vorausgesetzt, die erwachsenen Schulangehörigen von
                Schulleitung über Lehrende, Nichtlehrpersonal bis zum Schulwart machen sich gemeinsam
                in einem Schulentwicklungsprozess auf diesen Weg – und entwickeln die entsprechende
                Haltung.
              </p>

              <p className="font-medium text-petrol">
                Wovon wir überzeugt sind: Erfahrungsorientiertes Lernen am Beispiel eigener Anliegen
                in der Lebenswelt Schule ist einer der wirksamsten Wege zur Aneignung demokratischer
                Handlungskompetenzen.
              </p>
            </div>

            <div className="mt-9 relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/images/augenhoehe-schulgang.jpg"
                alt="Schüler:innen und Erwachsene sitzen am Schulgang zusammen und sprechen auf Augenhöhe miteinander"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          {/* Right Column - Value Cards */}
          <div className="space-y-6">
            {valueCards.map((card, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-petrol text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
