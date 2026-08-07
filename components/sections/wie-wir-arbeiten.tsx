"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const approachCards = [
  {
    title: "Lösungswege beschreiten",
    paragraphs: [
      "Partizipation ist uns nicht nur im Ergebnis der entwickelten Maßnahmen wichtig, sondern auch auf dem gemeinsamen Weg dorthin, weil niemand den eigenen Standort besser kennt als die dort Lernenden, Lehrenden und Unterstützenden. Daraus schöpfen wir für die Adaption von Partizipationsbausteinen.",
      "Die Aneignung einer partizipativen Haltung beginnt bei den erwachsenen Schulangehörigen, denn die Schüler*innen orientieren sich an diesem Vorbild. Dazu zählt auch die Bereitschaft aller Beteiligten, Mitverantwortung auf der Suche nach einer umfassenden Lösung zu übernehmen.",
    ],
  },
  {
    title: "Partizipationsbausteine nutzen",
    paragraphs: [
      "Partizipation kann an vielen Stellen im Schulalltag ansetzen und jeder Schulstandort entwickelt diesbezüglich im Rahmen eines Schulentwicklungsprozesses seine eigene Schulkultur. Dennoch haben sich einige Beteiligungsformate in der Praxis vieler Schulen über die Jahre bewährt. Wir stellen diese als Partizipationsbausteine vor; danach erfolgt deren Auswahl, Umsetzungsreihenfolge und Anpassung durch alle Schulangehörigen.",
    ],
  },
  {
    title: "Entscheidungen herbeiführen",
    paragraphs: [
      "Entscheidungen je nach Schule in einer mehr oder weniger großen Gruppe so zu treffen, dass sich alle gehört fühlen bei gleichzeitig vorgegebenem Zeitrahmen, erfordert große Achtsamkeit bei Auswahl und Anwendung geeigneter Moderationsmethoden – wir setzen dabei auf den Werkzeugkasten des „Art of Hosting“.",
    ],
  },
  {
    title: "Erfolgreich begleiten",
    list: [
      {
        label: "Beobachten",
        text: "als Außenstehende geben wir Feedback, wo dies gewünscht wird",
      },
      {
        label: "Beraten",
        text: "wie machen's die anderen, nach welchen Konzepten, was sagt die Wissenschaft?",
      },
      {
        label: "Ermutigen",
        text: "sich auf den Prozess einlassen, Herausforderungen überwinden, Erfolge bewusst machen, Visionen entwickeln",
      },
      {
        label: "Vernetzen",
        text: "mit gleichgesinnten Schulen, mit Serviceeinrichtungen",
      },
    ],
  },
]

export function WieWirArbeitenSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="was-wir-tun"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="wie-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2
          id="wie-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-12 text-center"
        >
          Wie wir arbeiten
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-cream/60 rounded-lg p-7 shadow-sm"
            >
              <h3 className="font-serif font-semibold text-petrol text-xl mb-3">
                {card.title}
              </h3>

              {card.paragraphs && (
                <div className="flex flex-col gap-3">
                  {card.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-foreground/70 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {card.list && (
                <ul className="flex flex-col gap-3">
                  {card.list.map((entry, i) => (
                    <li key={i} className="text-foreground/70 text-sm leading-relaxed">
                      <span className="font-medium text-petrol">{entry.label}:</span>{" "}
                      {entry.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
