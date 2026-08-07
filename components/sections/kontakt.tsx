"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useFadeIn } from "@/hooks/use-fade-in"

const CONTACT_EMAIL = "info@demokratiekultur.at"

export function KontaktSection() {
  const { ref, isVisible } = useFadeIn()
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = "Anfrage über demokratiekultur.at"
    const body = `${message}\n\nAbsender: ${email}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id="kontakt"
      className="relative py-20 md:py-28 bg-gradient-to-br from-petrol to-petrol-dark overflow-hidden"
      aria-labelledby="kontakt-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(226,96,63,0.18)_0%,_transparent_45%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(243,169,27,0.12)_0%,_transparent_40%)]" aria-hidden="true" />
      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-10">
          <h2
            id="kontakt-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Gehen wir den Weg gemeinsam
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Du hast Interesse an demokratischer Schulkulturentwicklung? Du möchtest Demokratiebildung
            an deiner Schule stärken? Wir freuen uns von dir zu hören.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Direct Contact */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-6 py-4 transition-colors"
          >
            <Mail className="w-5 h-5 text-white" aria-hidden="true" />
            <span className="text-white text-lg font-medium">{CONTACT_EMAIL}</span>
          </a>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-6 bg-white rounded-xl p-6 md:p-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sender-email" className="text-petrol font-medium">
                Absender-E-Mail-Adresse
              </Label>
              <Input
                id="sender-email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@beispiel.at"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="sender-message" className="text-petrol font-medium">
                Nachricht
              </Label>
              <Textarea
                id="sender-message"
                required
                rows={5}
                placeholder="Worum geht es?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-coral hover:bg-coral-light text-white font-medium"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              Nachricht senden
            </Button>

            <p className="text-xs text-foreground/60 leading-relaxed">
              Beim Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an{" "}
              {CONTACT_EMAIL}. Es werden keine Daten auf dieser Website gespeichert.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
