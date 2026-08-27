"use client"

import Image from "next/image"
import { useFadeIn } from "@/hooks/use-fade-in"

const team = [
  {
    name: "Esther Hörantner",
    title: "Beraterin & Organisationsentwicklerin",
    bio: "Nach einem Masterlehrgang in Achtsamkeit (kPH Wien/NÖ) wechselte sie in die Selbstständigkeit als Organisationsentwicklerin, um direkt mit Menschen am Weg zu nachhaltiger Veränderung in Systemen zu arbeiten. Heute unterstützt sie Schulen und Bildungseinrichtungen dabei, demokratische Haltungen zu verankern und Demokratie erlebbar zu machen.",
  },
  {
    name: "Georg Blaha",
    title: "Demokratiepädagoge & Schulentwicklungsfachberater",
    bio: "Nach vielen Jahren als Lehrer war Georg Blaha bis 2023 Mitarbeiter an der Pädagogischen Hochschule Wien/NÖ (kPH) für Friedens- und Demokratiepädagogik. Heute berät er Schulen bei der Entwicklung einer demokratischen Schulkultur im Rahmen von Schulentwicklungsprozessen.",
  },
]

export function WerWirSindSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      className="py-20 md:py-28 bg-white"
      aria-labelledby="team-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-12">
          <h2
            id="team-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-4"
          >
            Wer wir sind
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Der Verein Initiative Demokratiekultur ist die Basis für unsere Aktivitäten. Im Team
            engagieren wir uns in Schulen, in der Lehrendenfortbildung z.B. an pädagogischen
            Hochschulen und beratend im bildungsnahen Umfeld.
          </p>
        </div>

        {/* Team Photo */}
        <figure className="max-w-3xl mx-auto mb-12">
          <div className="bg-cream/50 rounded-xl p-4 shadow-sm">
            <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-lg overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Esther Hörantner und Georg Blaha - das Team von Initiative Demokratiekultur"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
            <figcaption className="mt-2 text-xs text-foreground/50 text-right">
              (c) Sven Krohn
            </figcaption>
          </div>
        </figure>

        {/* Team Bios */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-cream/50 rounded-xl p-8 shadow-sm"
            >
              <div className="text-center md:text-left">
                <h3 className="font-serif font-bold text-petrol text-xl mb-1">
                  {person.name}
                </h3>
                <p className="text-foreground/60 font-medium text-sm mb-4">
                  {person.title}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <blockquote className="mt-14 max-w-4xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-petrol leading-relaxed italic text-pretty">
            &bdquo;Unser Ziel: Schulen, in denen Mitgestaltung und Mitverantwortung
            selbstverständlich sind – weil demokratische Kultur hier nicht nur gelehrt, sondern
            jeden Tag neu gelebt wird.&ldquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
