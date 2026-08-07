import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Impressum | Initiative Demokratiekultur",
  description: "Impressum und rechtliche Informationen der Initiative Demokratiekultur.",
}

export default function ImpressumPage() {
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
            <span>Zurück zur Startseite</span>
          </Link>

          {/* Content */}
          <article className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-petrol mb-8">
              Impressum
            </h1>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  Angaben gemäß § 5 ECG
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Initiative Demokratiekultur<br />
                  Verein zur Förderung demokratischer Schulkultur
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  Vertreten durch
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Esther Hörantner<br />
                  Georg Blaha
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  Kontakt
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  E-Mail: info(at)demokratiekultur.at
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  ZVR-Zahl
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  [ZVR-Zahl einfügen]
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  Haftungsausschluss
                </h2>
                
                <h3 className="font-semibold text-petrol mt-4 mb-2">
                  Haftung für Inhalte
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="font-semibold text-petrol mt-4 mb-2">
                  Haftung für Links
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-xl font-bold text-petrol mb-3">
                  Urheberrecht
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
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
