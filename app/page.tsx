import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { WofuerWirStehenSection } from "@/components/sections/wofuer-wir-stehen"
import { WerWirSindSection } from "@/components/sections/wer-wir-sind"
import { AngebotSection } from "@/components/sections/angebot"
import { WieWirArbeitenSection } from "@/components/sections/wie-wir-arbeiten"
import { ProjekteSection } from "@/components/sections/projekte"
import { PartnerSection } from "@/components/sections/partner"
import { KontaktSection } from "@/components/sections/kontakt"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WofuerWirStehenSection />
        <WerWirSindSection />
        <AngebotSection />
        <WieWirArbeitenSection />
        <ProjekteSection />
        <PartnerSection />
        <KontaktSection />
      </main>
      <Footer />
    </>
  )
}
