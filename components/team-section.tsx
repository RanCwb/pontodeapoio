import { Shield, MapPin } from "lucide-react"

const teamMembers = ["Rodrigues", "Da Silva", "Albuquerque", "Freitas"]

export function TeamSection() {
  return (
    <section id="equipe" className="py-16 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-background border border-border p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Polícia Militar do Paraná</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este trabalho foi desenvolvido como parte da formação acadêmica dos alunos, 
                visando aprofundar conhecimentos sobre procedimentos operacionais e atendimento 
                humanizado a pessoas em situação de vulnerabilidade social.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Região de Telêmaco Borba, Reserva, Ortigueira e Imbaú</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
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
        <div className="mt-8 text-center">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Alunos CFP
          </h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {teamMembers.map((name, index) => (
              <span key={index} className="text-muted-foreground">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
