import { Shield, ChevronDown, MapPin, HeartHandshake, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(217,176,82,0.18),transparent_32%),linear-gradient(180deg,rgba(16,23,42,0.15),transparent_45%,var(--background))]" />

      <div className="absolute inset-0 opacity-45">
        <div className="absolute left-1/2 top-28 h-72 w-72 -translate-x-1/2 rounded-full border border-primary/25" />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full border border-primary/10" />
        <div className="absolute left-[12%] top-[34%] h-px w-40 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
        <div className="absolute right-[10%] top-[42%] h-px w-44 bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
        <div className="absolute bottom-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[18%] top-[24%] hidden sm:flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-secondary/35 text-primary shadow-lg shadow-primary/10 backdrop-blur-sm animate-pulse">
          <HeartHandshake className="h-6 w-6" />
        </div>
        <div className="absolute right-[17%] top-[28%] hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-secondary/30 text-accent backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="absolute left-[24%] bottom-[22%] h-2 w-2 rounded-full bg-primary/60" />
        <div className="absolute right-[28%] bottom-[27%] h-1.5 w-1.5 rounded-full bg-accent/60" />
        <div className="absolute left-[42%] top-[18%] h-1.5 w-1.5 rounded-full bg-primary/50" />
        <div className="absolute right-[39%] top-[20%] h-2 w-2 rounded-full bg-accent/45" />
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
          Procedimentos operacionais e atendimento humanizado a pessoas em situação de rua na região dos Campos Gerais,
          garantindo dignidade, respeito aos direitos humanos e efetividade na atuação policial.
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

        <a
          href="#sobre"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
