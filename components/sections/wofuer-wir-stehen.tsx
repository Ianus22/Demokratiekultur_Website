"use client"

import Image from "next/image"
import { Handshake, MessageSquare, Sprout } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

const valueCards = [
  {
    icon: Handshake,
    title: "Freiwilligkeit & Vertrauen",
    description:
      "Veränderung gelingt nur, wenn sie von den Beteiligten mitgetragen wird. Wir setzen auf gemeinsame Zielklärungen und standortangepasste Umsetzung.",
    border: "border-green-moss",
    iconBg: "bg-green-moss/10",
    iconColor: "text-green-moss",
  },
  {
    icon: MessageSquare,
    title: "Partizipation von Anfang an",
    description:
      "Lehrkräfte, Schüler:innen, Eltern, Nichtlehrpersonal und Schulleitung werden früh einbezogen. Maßnahmen werden transparent entwickelt und behutsam in den Schulalltag integriert.",
    border: "border-coral",
    iconBg: "bg-coral/10",
    iconColor: "text-coral",
  },
  {
    icon: Sprout,
    title: "Langfristige Wirkung",
    description:
      "Eine strukturelle Verankerung der Maßnahmen über das Engagement Einzelner hinaus sichert eine nachhaltige demokratische Schulkultur. Zum Beispiel ist durch Studien nachgewiesen, dass durch mehr Beteiligung weniger Konflikte entstehen.",
    border: "border-amber",
    iconBg: "bg-amber/10",
    iconColor: "text-amber",
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

            {/* KI-Symbolbild: Gespräch auf Augenhöhe am Schulgang */}
            <div className="mt-9 overflow-hidden rounded-2xl bg-white p-3 shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/images/augenhoehe-schulgang.jpg"
                  alt="KI-generiertes Symbolbild: Schüler:innen und Erwachsene sitzen am Schulgang zusammen und sprechen auf Augenhöhe miteinander"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>
              <p className="px-1 pt-2.5 pb-1 text-xs text-foreground/55">
                Gespräche auf Augenhöhe – im Schulalltag, auch außerhalb der Klasse. (KI-Symbolbild)
              </p>
            </div>

            <div className="mt-9 flex items-center gap-5 rounded-2xl bg-gradient-to-br from-petrol to-petrol-dark p-6 text-white shadow-xl shadow-petrol/15">
              <Image src="/images/logo-square.png" alt="" width={92} height={92} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
              <p className="font-serif text-lg leading-relaxed text-white/90">Demokratie wird stark, wenn Menschen erleben, dass ihre Stimme zählt.</p>
            </div>
          </div>

          {/* Right Column - Value Cards */}
          <div className="space-y-6">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className={`flex gap-4 p-5 bg-white rounded-lg border-l-4 ${card.border} shadow-sm`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center`}>
                    <card.icon className={`w-5 h-5 ${card.iconColor}`} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-petrol text-lg mb-2">
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
