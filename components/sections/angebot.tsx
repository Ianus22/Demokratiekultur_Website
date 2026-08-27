"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const offerings = [
  {
    title: "Schulstandorte",
    description:
      "Begleitung bei der Einführung der Partizipationsbausteine (z.B. Klassenrat, Schüler*innenparlament) inkl. SCHILF, Schulentwicklungsfachberatungen, Evaluierungen. Vernetzung mit gleichgesinnten Schulen.",
  },
  {
    title: "Lehrendenbildung",
    description:
      "Lehrveranstaltungen an pädagogischen Hochschulen und anderen Bildungseinrichtungen.",
  },
  {
    title: "Bildungsberatung",
    description:
      "Beratung von Entscheidungsträger:innen in Institutionen des Bildungsbereichs.",
  },
  {
    title: "Entwicklungsprojekte",
    description:
      "Bildungsmedien, Webinare, Publikationen, begleitende Evaluierung und Erasmus Kooperationen sowie Moderation von Bildungsformaten.",
  },
]

export function AngebotSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="angebot"
      className="py-20 md:py-28 bg-cream"
      aria-labelledby="angebot-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2
          id="angebot-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-12 text-center"
        >
          Unser Angebot
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg p-7 shadow-sm">
              <h3 className="font-serif font-semibold text-petrol text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
