"use client"

import { School, GraduationCap, Compass, FlaskConical } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

const offerings = [
  {
    icon: School,
    title: "Schulstandorte",
    description:
      "Begleitung bei der Einführung der Partizipationsbausteine (z.B. Klassenrat, Schüler*innenparlament) inkl. SCHILF, Schulentwicklungsfachberatungen, Evaluierungen. Vernetzung mit gleichgesinnten Schulen.",
    iconBg: "bg-green-moss/10",
    iconColor: "text-green-moss",
    topBorder: "border-t-green-moss",
  },
  {
    icon: GraduationCap,
    title: "Lehrendenbildung",
    description:
      "Lehrveranstaltungen an pädagogischen Hochschulen und anderen Bildungseinrichtungen.",
    iconBg: "bg-coral/10",
    iconColor: "text-coral",
    topBorder: "border-t-coral",
  },
  {
    icon: Compass,
    title: "Bildungsberatung",
    description:
      "Beratung von Entscheidungsträger:innen in Institutionen des Bildungsbereichs.",
    iconBg: "bg-amber/10",
    iconColor: "text-amber",
    topBorder: "border-t-amber",
  },
  {
    icon: FlaskConical,
    title: "Entwicklungsprojekte",
    description: "Facheinschlägige Projekte.",
    iconBg: "bg-violet/10",
    iconColor: "text-violet",
    topBorder: "border-t-violet",
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
            <div
              key={index}
              className={`flex flex-col bg-white rounded-xl p-7 border-t-4 ${item.topBorder} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all`}
            >
              <div className={`w-14 h-14 rounded-full ${item.iconBg} flex items-center justify-center mb-5`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} aria-hidden="true" />
              </div>
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
