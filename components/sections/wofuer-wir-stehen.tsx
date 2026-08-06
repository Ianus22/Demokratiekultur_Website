"use client"

import Image from "next/image"
import { Handshake, ImageIcon, MessageSquare, Sprout } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

/**
 * Sobald das KI-Symbolbild vorliegt: Datei unter /public/images/ ablegen und
 * den Pfad hier eintragen, z.B. "/images/augenhoehe-schulgang.jpg".
 */
const IMAGE_SRC: string | null = null

const valueCards = [
  {
    icon: Handshake,
    title: "Freiwilligkeit & Vertrauen",
    description:
      "Veränderung gelingt nur, wenn sie von den Beteiligten mitgetragen wird. Wir setzen auf gemeinsame Zielklärungen und standortangepasste Umsetzung.",
  },
  {
    icon: MessageSquare,
    title: "Partizipation von Anfang an",
    description:
      "Lehrkräfte, Schüler:innen, Eltern, Nichtlehrpersonal und Schulleitung werden früh einbezogen. Maßnahmen werden transparent entwickelt und behutsam in den Schulalltag integriert.",
  },
  {
    icon: Sprout,
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
              className="font-serif text-3xl md:text-4xl font-bold text-blue-deep mb-6"
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

              <p className="font-medium text-blue-deep">
                Wovon wir überzeugt sind: Erfahrungsorientiertes Lernen am Beispiel eigener Anliegen
                in der Lebenswelt Schule ist einer der wirksamsten Wege zur Aneignung demokratischer
                Handlungskompetenzen.
              </p>
            </div>

            {/* Symbolbild: Schüler:innen und Erwachsene im Gespräch auf Augenhöhe am Schulgang.
                Bilddatei unter /public/images/ ablegen und in IMAGE_SRC eintragen. */}
            <figure className="mt-8">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white shadow-sm">
                {IMAGE_SRC ? (
                  <Image
                    src={IMAGE_SRC}
                    alt="Symbolbild: Schüler:innen und erwachsene Schulangehörige stehen am Schulgang und sprechen auf Augenhöhe miteinander"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-blue-deep/20 rounded-xl px-6 text-center">
                    <ImageIcon className="w-7 h-7 text-blue-deep/30" aria-hidden="true" />
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      Platzhalter für das KI-Symbolbild: Kommunikation auf Augenhöhe am Schulgang
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-2 text-xs text-foreground/50">
                KI-generiertes Symbolbild: Kommunikation auf Augenhöhe im Schulalltag.
              </figcaption>
            </figure>
          </div>

          {/* Right Column - Value Cards */}
          <div className="space-y-6">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 bg-white rounded-lg border-l-4 border-green-moss shadow-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-moss/10 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-green-moss" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-blue-deep text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
