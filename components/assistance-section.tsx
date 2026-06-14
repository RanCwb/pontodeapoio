import { ExternalLink, Phone, MapPin, Heart, Building, Users, HelpCircle, Clock } from "lucide-react"
import Image from "next/image"

const localResources = [
  {
    city: "Telêmaco Borba - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Reserva - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Ortigueira - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Imbaú - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Tibagi - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Cândido de Abreu - PR",
    resources: ["CRAS", "CREAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Sapopema - PR",
    resources: ["CRAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  },
  {
    city: "Ventania - PR",
    resources: ["CRAS", "Conselho Tutelar", "Secretaria Municipal de Assistência Social"]
  }
]

const nationalResources = [
  {
    icon: Phone,
    title: "Disque 100",
    description: "Canal de denúncias de violações de direitos humanos - 24 horas",
    link: "https://www.gov.br/mdh/pt-br/canais-de-atendimento/disque-100",
    phone: "100",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Heart,
    title: "CVV - Centro de Valorização da Vida",
    description: "Apoio emocional e prevenção do suicídio - 24 horas",
    link: "https://www.cvv.org.br",
    phone: "188",
    color: "bg-yellow-500/10 text-yellow-600"
  },
  {
    icon: Users,
    title: "SAMU",
    description: "Atendimento de urgência e emergência em saúde",
    link: null,
    phone: "192",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: Building,
    title: "Polícia Militar",
    description: "Emergências e ocorrências policiais",
    link: null,
    phone: "190",
    color: "bg-blue-500/10 text-blue-600"
  }
]

const ongs = [
  {
    name: "Movimento Nacional da População de Rua",
    description: "Organização que representa e defende os direitos das pessoas em situação de rua no Brasil",
    link: "https://www.mnpr.org.br"
  },
  {
    name: "Pastoral do Povo da Rua",
    description: "Atuação da Igreja Católica no acolhimento e defesa de direitos",
    link: "https://www.pastoraldopovoderuasp.org.br"
  },
  {
    name: "Instituto Fazendo História",
    description: "Trabalho com crianças e adolescentes em situação de acolhimento",
    link: "https://www.fazendohistoria.org.br"
  },
  {
    name: "Ação da Cidadania",
    description: "Combate à fome e à miséria, com ações de assistência social",
    link: "https://www.acaodacidadania.org.br"
  },
  {
    name: "Cáritas Brasileira",
    description: "Rede de solidariedade com projetos de geração de renda e habitação",
    link: "https://caritas.org.br"
  },
  {
    name: "Teto Brasil",
    description: "Construção de moradias emergenciais em comunidades vulneráveis",
    link: "https://www.teto.org.br"
  }
]

const helpfulLinks = [
  {
    title: "Política Nacional para População em Situação de Rua",
    description: "Decreto nº 7.053/2009 - Base legal da política nacional",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d7053.htm"
  },
  {
    title: "Estatuto da Criança e do Adolescente",
    description: "Lei nº 8.069/1990 - Proteção integral à criança e ao adolescente",
    link: "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
  },
  {
    title: "Estatuto do Idoso",
    description: "Lei nº 10.741/2003 - Proteção à pessoa idosa",
    link: "https://www.planalto.gov.br/ccivil_03/leis/2003/l10.741.htm"
  },
  {
    title: "Cadastro Único (CadÚnico)",
    description: "Portal de informações sobre cadastramento para programas sociais",
    link: "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico"
  }
]

export function AssistanceSection() {
  return (
    <section id="assistencia" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Rede de Apoio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Onde Buscar Assistência
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Conheça os serviços e organizações que oferecem suporte a pessoas em situação de vulnerabilidade 
            em Telêmaco Borba, Reserva, Ortigueira, Imbaú, Tibagi, Cândido de Abreu, Sapopema, Ventania e municípios vizinhos.
          </p>
        </div>

        {/* Imagem da região */}
        <div className="relative h-64 rounded-2xl overflow-hidden mb-16 shadow-xl">
          <Image
            src="/images/telemaco-borba.png"
            alt="Vista da região de Telêmaco Borba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Região dos Campos Gerais</h3>
            <p className="text-white/90">Telêmaco Borba, Reserva, Ortigueira, Imbaú, Tibagi, Cândido de Abreu, Sapopema e Ventania</p>
          </div>
        </div>

        {/* Telefones de Emergência */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            Telefones de Emergência - 24 Horas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nationalResources.map((resource, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-border bg-card text-center hover:shadow-lg transition-all`}
              >
                <div className={`w-14 h-14 rounded-full ${resource.color} flex items-center justify-center mx-auto mb-4`}>
                  <resource.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-foreground text-lg mb-1">{resource.title}</h4>
                <p className="text-3xl font-bold text-primary mb-2">{resource.phone}</p>
                <p className="text-xs text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos Locais por Cidade */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Serviços de Assistência Social por Município
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {localResources.map((city, cityIndex) => (
              <div
                key={cityIndex}
                className="fade-up rounded-xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                style={{ animationDelay: `${cityIndex * 70}ms` }}
              >
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h4 className="font-bold text-foreground text-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {city.city}
                  </h4>
                </div>
                <div className="p-6 space-y-4">
                  {city.resources.map((resource, resIndex) => (
                    <div key={resIndex} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Building className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-foreground text-sm">{resource}</h5>
                        <p className="text-xs text-muted-foreground">Atendimento municipal e encaminhamento à rede de proteção.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Úteis - Legislação */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Links Úteis - Legislação e Programas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpfulLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
              >
                <h4 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary">
                  Acessar
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ONGs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            ONGs e Organizações de Apoio Nacional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongs.map((org, index) => (
              <a
                key={index}
                href={org.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {org.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{org.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary">
                  Visitar site
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Dica */}
        <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-3">Dica para o Policial Militar</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                É fundamental conhecer detalhadamente os equipamentos municipais de atendimento à população de rua 
                na sua área de atuação. Tenha sempre anotados os contatos do CRAS, CREAS e Conselho Tutelar do seu município.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Lembre-se:</strong> O atendimento humanizado não é apenas uma obrigação legal, 
                mas uma demonstração de profissionalismo e respeito à dignidade humana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
