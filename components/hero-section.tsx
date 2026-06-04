import { Shield, ChevronDown, MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-policial.png"
          alt="Policial ajudando pessoa em situação de vulnerabilidade"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Polícia Militar do Paraná</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm text-accent font-medium">Região de Telêmaco Borba, Reserva, Ortigueira e Imbaú</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
          Atuação Policial com Pessoas em{" "}
          <span className="text-primary">Situação de Vulnerabilidade</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
          Procedimentos operacionais e atendimento humanizado a pessoas em situação de rua 
          na região dos Campos Gerais, garantindo dignidade, respeito aos direitos humanos 
          e efetividade na atuação policial.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#cenarios"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Explorar Cenários Interativos
          </a>
          <a
            href="#legislacao"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary/80 backdrop-blur-sm transition-all"
          >
            Ver Legislação
          </a>
        </div>

        <a href="#sobre" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <span className="text-sm">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
