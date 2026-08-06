import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Datenschutz | Initiative Demokratiekultur",
  description: "Datenschutzerklärung der Initiative Demokratiekultur.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-moss hover:text-green-light transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>

          {/* Content */}
          <article className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-blue-deep mb-2">
              Datenschutzerklärung
            </h1>
            <p className="text-foreground/60 mb-8">
              Datenschutzinformation gemäß Art 13 und Art 14 DSGVO<br />
              Stand: Februar 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <p className="text-foreground/80 leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich im Einklang mit den gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung.
              </p>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  I. Name und Anschrift der Verantwortlichen
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Die Verantwortliche für die Verarbeitung Ihrer personenbezogenen Daten nach den datenschutzrechtlichen Bestimmungen ist:
                </p>
                <p className="text-foreground/80 leading-relaxed mt-2">
                  Esther Hörantner<br />
                  Georg Blaha<br />
                  1130 Wien<br />
                  Telefon: +43 6505161984<br />
                  E-Mail: esther.hoerantner(at)demokratiekultur.at
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  II. Informationen über die Datenverarbeitung
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Esther Hörantner und Georg Blaha verarbeiten zu Zwecken der Bearbeitung von Kontaktanfragen, Angebotserstellung und Verarbeitung von Aufträgen sowie Vertragsabwicklung, Kundenbetreuung und -information und Analyse der Websitebesuche die folgenden personenbezogenen Daten: Ihren Namen, Ihren Unternehmens-/Organisationsnamen, Kontaktdaten (Telefon, Postanschrift, E-Mail-Adresse) sowie (sofern von Ihnen bekannt gegeben) Ihre Berufsbezeichnung, Branche und Ihr Geburtsdatum. Auch Nutzungsdaten werden von uns erhoben.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Mit der Übermittlung der Daten willigen die TeilnehmerInnen bzw. InteressentInnen ein, dass personenbezogene Daten, die elektronisch, telefonisch, mündlich, per Fax oder schriftlich übermittelt werden, gespeichert und für die Übermittlung von Informationen verwendet werden dürfen. Wir können Ihre Kontaktdaten verwenden, um mit Ihnen per Post oder E-Mail in Kontakt zu bleiben (jährliche Weihnachts- bzw. Neujahrsgrüße) und Ihnen ggf. Informationen zu unserem Leistungsangebot zuzusenden. Eine Abmeldung ist jederzeit möglich. Sollten sich Ihre persönlichen Daten geändert haben oder Sie keine weiteren Zusendungen von uns erhalten wollen, bitten wir Sie, uns dies schriftlich (E-Mail: esther.hoerantner(at)demokratiekultur.at) bekannt zu geben.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Unsere Datenschutzinformation und unsere diesbezügliche Verantwortung und Haftung erstrecken sich grundsätzlich nicht auf Webseiten von Drittanbietern, auf die wir verlinken oder auf die Sie weitergeleitet werden. In weiterer Folge sind wir auch nicht verantwortlich für Datenverarbeitungen, die in diesen Fällen von den Betreibern dieser Websites durchgeführt werden.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  III. Weitergabe Ihrer Daten an Dritte
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Ihre personenbezogenen Daten werden weder veröffentlicht noch unberechtigt, also insbesondere ohne Ihre Einwilligung, an Dritte weitergegeben. Mit der Übermittlung der Daten willigen die TeilnehmerInnen bzw. InteressentInnen ein, dass personenbezogene Daten fallweise an Dritte weitergegeben werden. Dies kann notwendig sein, um die angestrebten Zwecke zu erreichen. Wir arbeiten nur mit Dritten, die hinreichende Garantien dafür bieten, dass geeignete technische und organisatorische Maßnahmen getroffen werden, die einen angemessenen Schutz Ihrer Rechte gewährleisten.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Diese Dritten sind:
                </p>
                <ul className="list-disc list-inside text-foreground/80 mt-2 space-y-1">
                  <li>Betreiber der verwendeten Cloud-Lösung bzw. IT-Software zur Nutzung unseres E-Mail- und Ablagesystems (Proton)</li>
                  <li>Projektbezogene Zusammenarbeit mit externen, (systemischen) Unternehmensberater:innen, Coaches und Trainer:innen. Dies wird dem/der Auftraggeber:in im Einzelfall gesondert angezeigt.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Darüber hinaus geben wir Ihre Daten nicht ohne Einwilligung weiter.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  IV. Kontakt über unsere Website
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Wenn Sie über unsere Website per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage, Erstellung von Angeboten und Verarbeitung von Aufträgen verarbeitet. Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung erreicht wurde und sofern dem keine andere gesetzliche Aufbewahrungsfrist entgegensteht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  V. Speicherdauer
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Esther Hörantner und Georg Blaha verarbeiten und speichern personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder der durch gesetzliche Vorgaben vorgesehen wurde.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Entfällt der Zweck oder die rechtliche Grundlage für die Verarbeitung, werden Ihre personenbezogenen Daten auf Basis unserer Prozesse und gesetzeskonform gesperrt oder gelöscht.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  VI. Informationen über Ihre Rechte
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die zuständige Behörde wenden. In Österreich ist dies die Datenschutzbehörde. Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Im Falle des Widerrufs löschen wir und allfällige Auftragsverarbeiter mit Zugang Ihrer Widerrufserklärung Ihre gespeicherten Daten.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Sie erreichen uns unter folgenden Kontaktdaten:<br />
                  esther.hoerantner(at)demokratiekultur.at
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-blue-deep mb-3">
                  VII. Cookies
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Unsere Website setzt keine Cookies und speichert keine Daten auf Ihrem Endgerät. Es werden weder Tracking- noch Marketing- oder Personalisierungs-Cookies verwendet. Sie können Cookies in Ihrem Browser daher vollständig deaktivieren, ohne dass die Funktionalität dieser Website eingeschränkt wird.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Das Kontaktformular auf dieser Website überträgt keine Daten an unseren Server: Beim Absenden wird ausschließlich eine vorbereitete Nachricht in Ihrem eigenen E-Mail-Programm geöffnet, die Sie selbst versenden.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
