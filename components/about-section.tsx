import { Heart, Scale, Shield, BookOpen, MapPin } from "lucide-react"

const principles = [
  {
    icon: Heart,
    title: "Dignidade Humana",
    description: "Respeitar a dignidade da pessoa humana em todas as interações, independentemente de sua condição social."
  },
  {
    icon: Scale,
    title: "Igualdade e Equidade",
    description: "Garantir tratamento igualitário, respeitando diferenças de origem, raça, idade, gênero e orientação."
  },
  {
    icon: Shield,
    title: "Atendimento Humanizado",
    description: "Proporcionar atendimento universal e humanizado, zelando pela integridade física e psíquica."
  },
  {
    icon: BookOpen,
    title: "Orientação e Apoio",
    description: "Informar sobre serviços de assistência social disponíveis para auxiliar na superação da situação de rua."
  }
]

const cities = [
  { name: "Telêmaco Borba", population: "~80.000 hab." },
  { name: "Reserva", population: "~27.000 hab." },
  { name: "Ortigueira", population: "~22.000 hab." },
  { name: "Imbaú", population: "~12.000 hab." },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Sobre o Projeto</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Política Nacional para População em Situação de Rua
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            O Decreto Federal n.º 7.053/2009 estabelece a Política Nacional para a População em Situação de Rua, 
            definindo princípios e diretrizes que orientam a atuação de todos os agentes públicos, 
            incluindo a Polícia Militar.
          </p>
        </div>

        {/* Princípios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Região de Atuação */}
        <div className="mb-16 p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Região de Atuação</h3>
              <p className="text-sm text-muted-foreground">Campos Gerais - Paraná</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Este trabalho foi desenvolvido com foco na região de Telêmaco Borba e municípios vizinhos, 
            considerando as particularidades locais e a rede de assistência social disponível nestas cidades.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="p-4 rounded-xl bg-background border border-border text-center">
                <h4 className="font-semibold text-foreground">{city.name}</h4>
                <p className="text-xs text-muted-foreground">{city.population}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citação */}
        <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
          <blockquote className="text-center">
            <p className="text-lg italic text-foreground mb-4 text-pretty">
              {'"'}Considera-se população em situação de rua o grupo populacional heterogêneo que possui em comum 
              a pobreza extrema, os vínculos familiares interrompidos ou fragilizados e a inexistência de 
              moradia convencional regular.{'"'}
            </p>
            <cite className="text-sm text-muted-foreground">
              — Decreto Federal n.º 7.053/2009, Art. 1º, Parágrafo único
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
