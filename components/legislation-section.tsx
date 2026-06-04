"use client"

import { useState } from "react"
import { Scale, BookOpen, FileText, Gavel, ChevronDown, ChevronUp, Shield, Heart, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"

const tabs = [
  { id: "comportamento", label: "Como se Comportar", icon: Heart },
  { id: "legislacao", label: "Legislação", icon: Scale },
  { id: "diretrizes", label: "Diretrizes Operacionais", icon: FileText },
  { id: "direitos", label: "Direitos Fundamentais", icon: Shield },
]

const comportamentoContent = [
  {
    title: "Abordagem Inicial",
    content: `A abordagem deve ser sempre respeitosa e humanizada. O policial militar deve:

• Apresentar-se de forma cordial, identificando-se pelo nome e unidade
• Utilizar linguagem clara e acessível, evitando jargões técnicos
• Manter tom de voz calmo e postura não intimidadora
• Respeitar o espaço pessoal do cidadão
• Demonstrar empatia e disposição para ouvir

Lembre-se: muitas pessoas em situação de rua já sofreram violências e podem estar em estado de desconfiança. A paciência é fundamental.`
  },
  {
    title: "Durante o Atendimento",
    content: `Durante todo o atendimento, o policial deve:

• Tratar a pessoa pelo nome, quando possível
• Evitar julgamentos sobre a condição de vida do cidadão
• Não fazer comentários depreciativos ou humilhantes
• Oferecer água ou alimento, se disponível
• Informar sobre serviços de assistência social disponíveis
• Orientar sobre direitos e como acessá-los
• Documentar a ocorrência de forma completa e respeitosa`
  },
  {
    title: "Situações de Vulnerabilidade Específicas",
    content: `Atenção especial deve ser dada a:

• Crianças e adolescentes: acionar imediatamente o Conselho Tutelar
• Idosos: verificar condições de saúde e acionar SAMU se necessário
• Pessoas com transtornos mentais: evitar contenção física, preferir diálogo
• Mulheres: verificar sinais de violência, oferecer informações sobre a Lei Maria da Penha
• Dependentes químicos: não criminalizar o uso, orientar sobre tratamento

Cada situação exige sensibilidade e conhecimento das políticas públicas disponíveis.`
  },
  {
    title: "O que NUNCA Fazer",
    content: `Condutas proibidas e que configuram abuso:

• Remover pertences pessoais sem autorização judicial
• Realizar "limpeza urbana" ou remoção forçada
• Usar força desproporcional ou violência
• Humilhar, xingar ou tratar com desrespeito
• Ignorar pedidos de ajuda ou socorro
• Transportar pessoas para locais distantes contra sua vontade
• Destruir documentos, cobertores ou abrigos improvisados
• Fotografar ou filmar de forma vexatória`
  },
  {
    title: "Encaminhamentos",
    content: `Após o atendimento, considerar encaminhamentos para:

• CRAS (Centro de Referência de Assistência Social): cadastro em programas sociais
• CREAS (Centro de Referência Especializado): casos de violação de direitos
• Centro POP: acolhimento, alimentação e higiene
• UBS (Unidade Básica de Saúde): atendimento médico
• CAPS (Centro de Atenção Psicossocial): saúde mental
• Conselho Tutelar: crianças e adolescentes

Sempre que possível, acompanhar o cidadão até o serviço de referência.`
  }
]

const legislacaoContent = [
  {
    title: "Constituição Federal de 1988",
    articles: [
      {
        number: "Art. 1º, III",
        text: "A República Federativa do Brasil tem como fundamento a dignidade da pessoa humana.",
        explanation: "Este artigo estabelece que toda pessoa, independentemente de sua condição social, merece ser tratada com dignidade."
      },
      {
        number: "Art. 5º, caput",
        text: "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.",
        explanation: "Pessoas em situação de rua têm os mesmos direitos fundamentais que qualquer outro cidadão."
      },
      {
        number: "Art. 5º, III",
        text: "Ninguém será submetido a tortura nem a tratamento desumano ou degradante.",
        explanation: "Proíbe qualquer forma de violência ou tratamento humilhante durante abordagens policiais."
      },
      {
        number: "Art. 6º",
        text: "São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados.",
        explanation: "O Estado tem obrigação de garantir assistência às pessoas em situação de vulnerabilidade."
      }
    ]
  },
  {
    title: "Decreto nº 7.053/2009 - Política Nacional para a População em Situação de Rua",
    articles: [
      {
        number: "Art. 5º",
        text: "São princípios da Política Nacional: I - respeito à dignidade da pessoa humana; II - direito à convivência familiar e comunitária; III - valorização e respeito à vida e à cidadania; IV - atendimento humanizado e universalizado.",
        explanation: "Define os princípios que devem nortear toda atuação do poder público."
      },
      {
        number: "Art. 7º, I",
        text: "Assegurar o acesso amplo, simplificado e seguro aos serviços e programas que integram as políticas públicas de saúde, educação, previdência, assistência social, moradia, segurança, cultura, esporte, lazer, trabalho e renda.",
        explanation: "As políticas públicas devem ser acessíveis a toda a população."
      }
    ]
  },
  {
    title: "Lei nº 8.069/1990 - Estatuto da Criança e do Adolescente (ECA)",
    articles: [
      {
        number: "Art. 4º",
        text: "É dever da família, da comunidade, da sociedade em geral e do poder público assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária.",
        explanation: "Crianças e adolescentes em situação de rua devem receber proteção prioritária."
      },
      {
        number: "Art. 98",
        text: "As medidas de proteção à criança e ao adolescente são aplicáveis sempre que os direitos reconhecidos nesta Lei forem ameaçados ou violados.",
        explanation: "O Conselho Tutelar deve ser acionado imediatamente em casos envolvendo menores."
      }
    ]
  },
  {
    title: "Lei nº 10.741/2003 - Estatuto do Idoso",
    articles: [
      {
        number: "Art. 3º",
        text: "É obrigação da família, da comunidade, da sociedade e do Poder Público assegurar ao idoso, com absoluta prioridade, a efetivação do direito à vida, à saúde, à alimentação, à educação, à cultura, ao esporte, ao lazer, ao trabalho, à cidadania, à liberdade, à dignidade, ao respeito e à convivência familiar e comunitária.",
        explanation: "Idosos em situação de rua devem receber atendimento prioritário."
      }
    ]
  }
]

const diretrizesContent = [
  {
    title: "POP 100.30 - Ocorrência Envolvendo Pessoas em Situação de Rua",
    items: [
      "Realizar abordagem respeitosa e humanizada",
      "Identificar situação de vulnerabilidade social",
      "Verificar necessidade de atendimento médico urgente",
      "Acionar SAMU em casos de emergência de saúde",
      "Acionar Conselho Tutelar quando houver criança ou adolescente",
      "Informar sobre serviços de assistência social disponíveis",
      "Orientar sobre direitos e políticas públicas",
      "Encaminhar para Centro POP, CRAS ou CREAS conforme o caso",
      "Registrar ocorrência detalhada no sistema",
      "Não realizar remoção forçada ou apreensão de pertences"
    ]
  },
  {
    title: "Fluxo de Atendimento",
    items: [
      "1. Avaliação inicial da situação e estado de saúde",
      "2. Apresentação cordial e escuta ativa",
      "3. Identificação de vulnerabilidades específicas",
      "4. Verificação de documentação (sem obrigatoriedade)",
      "5. Orientação sobre direitos e serviços disponíveis",
      "6. Contato com rede de proteção social",
      "7. Encaminhamento assistido (quando aceito)",
      "8. Registro completo da ocorrência"
    ]
  }
]

const direitosContent = [
  {
    title: "Direitos das Pessoas em Situação de Rua",
    rights: [
      { right: "Direito à Vida e à Integridade Física", description: "Proteção contra qualquer forma de violência, tortura ou tratamento desumano." },
      { right: "Direito à Identidade", description: "Acesso gratuito a documentos como RG, CPF e Certidão de Nascimento." },
      { right: "Direito à Alimentação", description: "Acesso a alimentação adequada através de restaurantes populares e programas sociais." },
      { right: "Direito à Saúde", description: "Atendimento integral pelo SUS, incluindo saúde mental e tratamento para dependência química." },
      { right: "Direito à Moradia", description: "Acesso a abrigos, albergues e programas habitacionais." },
      { right: "Direito ao Trabalho", description: "Acesso a programas de capacitação profissional e geração de renda." },
      { right: "Direito à Educação", description: "Matrícula em escolas públicas sem exigência de comprovante de residência." },
      { right: "Direito à Assistência Social", description: "Cadastro no CadÚnico e acesso a benefícios como Bolsa Família e BPC." },
      { right: "Direito de Ir e Vir", description: "Liberdade de permanecer em espaços públicos, sem remoção forçada." },
      { right: "Direito à Participação Social", description: "Participação em conselhos e fóruns de políticas públicas." }
    ]
  }
]

export function LegislationSection() {
  const [activeTab, setActiveTab] = useState("comportamento")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="legislacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Base Legal e Comportamental
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Legislação e Condutas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Conheça os fundamentos legais e as diretrizes de comportamento para uma atuação policial 
            ética, humanizada e em conformidade com os direitos humanos.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar com imagem */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/legislacao.png"
                  alt="Legislação e Direitos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    Conhecimento legal é fundamental para uma atuação correta
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-col gap-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-card hover:bg-muted text-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-sm">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8">
              {/* Comportamento */}
              {activeTab === "comportamento" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Como se Comportar</h3>
                      <p className="text-muted-foreground text-sm">Diretrizes para uma abordagem humanizada</p>
                    </div>
                  </div>

                  {comportamentoContent.map((item, index) => (
                    <div key={index} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleExpanded(`comp-${index}`)}
                        className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <span className="font-semibold text-foreground">{item.title}</span>
                        {expandedItems.includes(`comp-${index}`) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      {expandedItems.includes(`comp-${index}`) && (
                        <div className="p-4 bg-card">
                          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Legislação */}
              {activeTab === "legislacao" && (
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Legislação Aplicável</h3>
                      <p className="text-muted-foreground text-sm">Trechos importantes das leis brasileiras</p>
                    </div>
                  </div>

                  {legislacaoContent.map((law, lawIndex) => (
                    <div key={lawIndex} className="space-y-4">
                      <h4 className="font-bold text-lg text-primary border-b border-border pb-2">
                        {law.title}
                      </h4>
                      {law.articles.map((article, artIndex) => (
                        <div key={artIndex} className="bg-muted/30 rounded-xl p-4 space-y-2">
                          <div className="flex items-start gap-2">
                            <Gavel className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="font-semibold text-primary">{article.number}</span>
                          </div>
                          <blockquote className="border-l-4 border-primary/50 pl-4 py-2 italic text-foreground">
                            &ldquo;{article.text}&rdquo;
                          </blockquote>
                          <p className="text-sm text-muted-foreground flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span><strong>Aplicação prática:</strong> {article.explanation}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Diretrizes */}
              {activeTab === "diretrizes" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Diretrizes Operacionais</h3>
                      <p className="text-muted-foreground text-sm">Procedimentos padrão da PMPR</p>
                    </div>
                  </div>

                  {diretrizesContent.map((section, index) => (
                    <div key={index} className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">
                              {itemIndex + 1}
                            </span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Direitos */}
              {activeTab === "direitos" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Direitos Fundamentais</h3>
                      <p className="text-muted-foreground text-sm">Direitos garantidos a todas as pessoas</p>
                    </div>
                  </div>

                  {direitosContent.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-lg text-primary mb-4">{section.title}</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {section.rights.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-colors">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Users className="w-4 h-4 text-green-600" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-foreground text-sm mb-1">{item.right}</h5>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
