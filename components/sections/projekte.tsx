"use client"

import { ArrowUpRight } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

type Project = {
  title: string
  note?: string
  href?: string
}

const currentProjects: Project[] = [
  { title: "transform2gether" },
  { title: "Aktionstage politische Bildung der kPH Wien/NÖ" },
  {
    title: "Klassenrat wirkt: Partizipation stärken in Schulen",
    note: "gefördert durch die Stadt Wien / MA 20",
    href: "https://mitwirkung.wien.gv.at/foerderung-von-demokratie-und-beteiligungsprojekten",
  },
]

const completedProjects: Project[] = [
  { title: "MOOC-Entwicklung für ESEP (European School Education Platform)" },
  { title: "transform@school" },
]

function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((project, index) => (
        <li
          key={index}
          className="bg-white rounded-lg px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
        >
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2"
            >
              <span>
                <span className="font-medium text-petrol group-hover:text-green-moss transition-colors">
                  {project.title}
                </span>
                {project.note && (
                  <span className="block text-sm text-foreground/60 mt-1">{project.note}</span>
                )}
              </span>
              <ArrowUpRight
                className="w-4 h-4 mt-1 flex-shrink-0 text-green-moss"
                aria-hidden="true"
              />
            </a>
          ) : (
            <>
              <span className="font-medium text-petrol">{project.title}</span>
              {project.note && (
                <span className="block text-sm text-foreground/60 mt-1">{project.note}</span>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export function ProjekteSection() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section
      id="projekte"
      className="py-20 md:py-28 bg-cream"
      aria-labelledby="projekte-heading"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2
          id="projekte-heading"
          className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-12 text-center"
        >
          Unsere Projekte
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="font-serif font-semibold text-petrol text-lg mb-4">Aktuell</h3>
            <ProjectList items={currentProjects} />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-petrol text-lg mb-4">Abgeschlossen</h3>
            <ProjectList items={completedProjects} />
          </div>
        </div>
      </div>
    </section>
  )
}
