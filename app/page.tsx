import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProceduresSection } from "@/components/procedures-section"
import { LegislationSection } from "@/components/legislation-section"
import { ScenariosSection } from "@/components/scenarios-section"
import { AssistanceSection } from "@/components/assistance-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProceduresSection />
      <LegislationSection />
      <ScenariosSection />
      <AssistanceSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
