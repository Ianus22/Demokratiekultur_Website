import Link from "next/link"
import { ArrowLeft, FileDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Download | Initiative Demokratiekultur",
  description:
    "Materialien, Leitfäden und Vorlagen der Initiative Demokratiekultur zum Herunterladen.",
}

type DownloadItem = {
  title: string
  description: string
  /** Datei unter /public/downloads/ ablegen und hier eintragen, z.B. "/downloads/klassenrat-leitfaden.pdf" */
  file?: string
  meta?: string
}

const downloads: DownloadItem[] = [
  {
    title: "Partizipationsbausteine im Überblick",
    description:
      "Kurzbeschreibung der bewährten Beteiligungsformate für den Schulalltag – von Klassenrat bis Schüler*innenparlament.",
    meta: "PDF",
  },
  {
    title: "Klassenrat – Leitfaden für den Einstieg",
    description:
      "Ablauf, Rollen und Moderationshinweise für die Einführung regelmäßiger Klassenräte.",
    meta: "PDF",
  },
  {
    title: "Schulentwicklung: Beispiel-Prozessplan",
    description:
      "Orientierungsraster für einen mehrjährigen Schulentwicklungsprozess zur demokratischen Schulkultur.",
    meta: "PDF",
  },
]

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-moss hover:text-green-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Zurück zur Startseite</span>
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-3">
            Download
          </h1>
          <p className="text-foreground/70 leading-relaxed mb-10">
            Hier stellen wir Materialien, Leitfäden und Vorlagen aus unserer Arbeit zur Verfügung.
            Die Sammlung wird laufend erweitert.
          </p>

          <ul className="flex flex-col gap-4">
            {downloads.map((item) => (
              <li
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-green-moss/10 flex items-center justify-center">
                  <FileDown className="w-5 h-5 text-green-moss" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif font-semibold text-petrol text-lg">{item.title}</h2>
                  <p className="text-foreground/70 text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    {item.file ? (
                      <a
                        href={item.file}
                        download
                        className="inline-flex items-center gap-2 text-sm font-medium text-green-moss hover:text-green-light transition-colors"
                      >
                        Herunterladen
                        {item.meta && <span className="text-foreground/50">({item.meta})</span>}
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/60">
                        Datei folgt
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
