import { GraduationCap, MapPin, Shield, Sparkles } from "lucide-react"

const teamMembers = ["Rodrigues", "Da Silva", "Albuquerque", "Freitas"]
const regionCities = ["Telêmaco Borba", "Reserva", "Ortigueira", "Imbaú"]

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-card border-t border-border overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-up relative rounded-2xl bg-background border border-border p-6 sm:p-8 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 shine-line" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center soft-pulse">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Projeto Acadêmico</p>
                  <h3 className="text-xl font-bold text-foreground">Polícia Militar do Paraná</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                Este trabalho integra a formação acadêmica dos alunos e busca fortalecer o conhecimento
                sobre procedimentos operacionais, rede de proteção social e atendimento humanizado às
                pessoas em situação de vulnerabilidade.
              </p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold text-foreground mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Região de Telêmaco Borba, Reserva, Ortigueira e Imbaú</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {regionCities.map((city, index) => (
                    <span
                      key={city}
                      className="float-in px-3 py-1.5 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:max-w-xs">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                POP 100.30
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                Direitos Humanos
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                Atendimento Humanizado
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                Decreto 7.053/2009
              </span>
            </div>
          </div>
        </div>

        {/* Alunos CFP */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-5">
            <GraduationCap className="w-5 h-5" />
            Alunos CFP
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {teamMembers.map((name, index) => (
              <span
                key={index}
                className="fade-up group relative overflow-hidden rounded-xl border border-border bg-background px-4 py-4 text-sm font-semibold text-foreground hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="absolute right-3 top-3 text-primary/30 group-hover:text-primary/60 transition-colors">
                  <Sparkles className="w-4 h-4" />
                </span>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
