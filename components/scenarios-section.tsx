"use client"

import { useState } from "react"
import { CheckCircle, XCircle, RotateCcw, AlertCircle, ArrowRight, MapPin } from "lucide-react"

interface Scenario {
  id: number
  title: string
  location: string
  description: string
  options: {
    text: string
    isCorrect: boolean
    feedback: string
  }[]
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Solicitação de Remoção no Centro",
    location: "Telêmaco Borba - Centro",
    description: "Um comerciante na Avenida Horácio Klabin, em Telêmaco Borba, solicita que a guarnição remova uma pessoa em situação de rua que está dormindo na calçada em frente ao seu estabelecimento. A pessoa não está cometendo nenhuma infração.",
    options: [
      {
        text: "Atender ao pedido do comerciante e determinar que a pessoa se retire do local",
        isCorrect: false,
        feedback: "INCORRETO. A situação de rua por si só não configura infração. Determinar remoção apenas por clamor de outras parcelas da população viola os direitos da pessoa."
      },
      {
        text: "Orientar o comerciante a acionar o CRAS de Telêmaco Borba e verificar se a pessoa precisa de auxílio",
        isCorrect: true,
        feedback: "CORRETO. Deve-se orientar o solicitante sobre o papel da assistência social (CRAS - Rua Ponta Grossa, 1000) e, se a pessoa aceitar, oferecer encaminhamento voluntário."
      },
      {
        text: "Registrar boletim de ocorrência contra a pessoa por vadiagem",
        isCorrect: false,
        feedback: "INCORRETO. A condição de rua não configura crime. Vadiagem foi revogada do Código Penal. Essa conduta seria abusiva."
      }
    ]
  },
  {
    id: 2,
    title: "Abordagem na Rodoviária",
    location: "Telêmaco Borba - Rodoviária",
    description: "Na rodoviária de Telêmaco Borba, a guarnição decide abordar uma pessoa em situação de rua apenas porque ela está pedindo dinheiro aos passageiros e alguns relataram incômodo com sua presença.",
    options: [
      {
        text: "Realizar a abordagem normalmente, já que há relatos de incômodo",
        isCorrect: false,
        feedback: "INCORRETO. A situação de rua e a mendicância por si só não configuram fundada suspeita. É necessário haver indícios concretos de prática ilícita."
      },
      {
        text: "Não abordar de forma coercitiva, mas aproximar-se para oferecer orientação sobre serviços assistenciais",
        isCorrect: true,
        feedback: "CORRETO. Conforme Resolução n.º 40/2020 do CNDH, a situação de rua não configura fundada suspeita. A abordagem deve ser humanizada e orientadora."
      },
      {
        text: "Abordar e conduzir para a delegacia de Telêmaco Borba para averiguação",
        isCorrect: false,
        feedback: "INCORRETO. Prisão para averiguação é ilegal. A situação de rua não pode ser utilizada como fundamento para tal conduta."
      }
    ]
  },
  {
    id: 3,
    title: "Família em Situação de Rua",
    location: "Reserva - PR",
    description: "Em Reserva, a guarnição encontra uma família com duas crianças pequenas vivendo debaixo de uma ponte. As crianças aparentam estar saudáveis, mas em condições precárias de higiene.",
    options: [
      {
        text: "Retirar as crianças imediatamente e encaminhá-las ao abrigo municipal",
        isCorrect: false,
        feedback: "INCORRETO. A pobreza por si só não justifica a retirada de crianças. Deve-se priorizar o vínculo familiar e acionar a rede de proteção."
      },
      {
        text: "Acionar o Conselho Tutelar de Reserva, CRAS e oferecer encaminhamento assistencial à família toda",
        isCorrect: true,
        feedback: "CORRETO. O Conselho Tutelar deve ser acionado para acompanhar o caso. A família deve receber apoio integral, preservando os vínculos familiares."
      },
      {
        text: "Orientar a família a se mudar para outra cidade com mais recursos",
        isCorrect: false,
        feedback: "INCORRETO. A pessoa tem direito de permanecer onde está. Cabe ao município oferecer assistência, não transferir o problema."
      }
    ]
  },
  {
    id: 4,
    title: "Idoso em Situação de Vulnerabilidade",
    location: "Ortigueira - PR",
    description: "Em Ortigueira, a guarnição encontra um idoso de aproximadamente 70 anos em situação de rua, aparentando confusão mental e sinais de desidratação. Ele não consegue informar seus dados pessoais.",
    options: [
      {
        text: "Deixar o idoso no local e registrar apenas o boletim de ocorrência",
        isCorrect: false,
        feedback: "INCORRETO. Idosos em situação de vulnerabilidade têm prioridade absoluta. A omissão pode configurar crime."
      },
      {
        text: "Acionar o SAMU imediatamente e, após estabilização, contatar o CREAS de Ortigueira para acompanhamento",
        isCorrect: true,
        feedback: "CORRETO. A saúde do idoso é prioridade. Após atendimento médico, o CREAS deve ser acionado para proteção social especial conforme o Estatuto do Idoso."
      },
      {
        text: "Conduzir o idoso diretamente ao asilo mais próximo",
        isCorrect: false,
        feedback: "INCORRETO. A institucionalização deve ser última opção. É necessário primeiro buscar vínculos familiares e avaliar todas as alternativas."
      }
    ]
  },
  {
    id: 5,
    title: "Revista de Pertences",
    location: "Imbaú - PR",
    description: "Em Imbaú, ao realizar busca pessoal em pessoa em situação de rua suspeita de furto, a guarnição encontra bebida alcoólica, cobertores velhos e roupas sujas em sua mochila. Não foram encontrados objetos ilícitos.",
    options: [
      {
        text: "Jogar fora o cobertor e as roupas sujas por questões de higiene e esvaziar a garrafa de bebida",
        isCorrect: false,
        feedback: "INCORRETO. Todos os objetos devem ser restituídos ao abordado. A PM não está autorizada a dar destinação diversa aos pertences."
      },
      {
        text: "Restituir todos os pertences ao abordado, incluindo bebida, cobertores e roupas",
        isCorrect: true,
        feedback: "CORRETO. Concluída a ação policial, todos os objetos devem ser restituídos. Recolher objetos pessoais configura violação de direitos."
      },
      {
        text: "Reter os pertences até que a pessoa comprove a propriedade",
        isCorrect: false,
        feedback: "INCORRETO. O recolhimento de objetos pessoais sem justificativa configura violação aos direitos fundamentais de igualdade e propriedade."
      }
    ]
  },
  {
    id: 6,
    title: "Encaminhamento Assistencial Recusado",
    location: "Telêmaco Borba - Praça da Matriz",
    description: "Na Praça Horácio Klabin, após a abordagem, a guarnição oferece encaminhamento ao Centro POP de Telêmaco Borba, mas a pessoa recusa o auxílio, preferindo permanecer no local.",
    options: [
      {
        text: "Insistir e conduzir a pessoa ao abrigo, pois é para o bem dela",
        isCorrect: false,
        feedback: "INCORRETO. É vedada a coação para aceitar atendimento assistencial. A liberdade de escolha da pessoa deve ser garantida."
      },
      {
        text: "Respeitar a decisão, registrar no boletim que o auxílio foi oferecido e recusado, e liberar a pessoa",
        isCorrect: true,
        feedback: "CORRETO. A pessoa não é obrigada a aceitar o encaminhamento. A recusa deve ser registrada no boletim de ocorrência."
      },
      {
        text: "Acionar a guarda municipal para remover a pessoa à força do local",
        isCorrect: false,
        feedback: "INCORRETO. A remoção forçada sem garantia de moradia adequada caracteriza violação de direitos humanos."
      }
    ]
  },
  {
    id: 7,
    title: "Pessoa com Transtorno Mental",
    location: "Reserva - Centro",
    description: "No centro de Reserva, a guarnição é acionada para atender uma pessoa em situação de rua que está falando sozinha e gesticulando de forma agitada. Comerciantes relatam medo, mas a pessoa não ameaçou ninguém.",
    options: [
      {
        text: "Usar força para conter a pessoa e conduzi-la à delegacia por perturbação",
        isCorrect: false,
        feedback: "INCORRETO. Transtorno mental não é crime. O uso de força sem necessidade é abusivo e pode agravar o quadro da pessoa."
      },
      {
        text: "Aproximar-se calmamente, tentar diálogo e, se necessário, acionar o SAMU ou CAPS para avaliação",
        isCorrect: true,
        feedback: "CORRETO. A abordagem deve ser humanizada. O CAPS (Centro de Atenção Psicossocial) é o serviço adequado para acompanhamento de saúde mental."
      },
      {
        text: "Ignorar a ocorrência já que a pessoa não cometeu crime",
        isCorrect: false,
        feedback: "INCORRETO. A PM tem dever de zelar pelo bem-estar da pessoa e da comunidade. A omissão pode colocar a pessoa em risco."
      }
    ]
  },
  {
    id: 8,
    title: "Adolescente Desacompanhado",
    location: "Ortigueira - Praça Central",
    description: "Na praça central de Ortigueira, a guarnição identifica um adolescente de aproximadamente 15 anos em situação de rua. Ele relata ter fugido de casa há uma semana devido a conflitos familiares.",
    options: [
      {
        text: "Conduzir o adolescente à delegacia para registro de desaparecimento",
        isCorrect: false,
        feedback: "INCORRETO. O adolescente não é autor de ato infracional. A delegacia não é ambiente adequado para acolhimento."
      },
      {
        text: "Acionar o Conselho Tutelar de Ortigueira para medidas de proteção e verificação da situação familiar",
        isCorrect: true,
        feedback: "CORRETO. O Conselho Tutelar é o órgão responsável por aplicar medidas de proteção a crianças e adolescentes em situação de risco, conforme o ECA."
      },
      {
        text: "Liberar o adolescente após orientação, pois ele tem autonomia para decidir onde ficar",
        isCorrect: false,
        feedback: "INCORRETO. Adolescentes têm proteção especial. O Estado tem dever de garantir seus direitos e verificar a situação de vulnerabilidade."
      }
    ]
  },
  {
    id: 9,
    title: "Operação de Limpeza Urbana",
    location: "Telêmaco Borba - Área Industrial",
    description: "Próximo à área industrial de Telêmaco Borba, agentes municipais solicitam apoio policial para retirar barracas improvisadas de pessoas em situação de rua em terreno público.",
    options: [
      {
        text: "Apoiar a operação e ajudar a desmontar as barracas para liberar o terreno",
        isCorrect: false,
        feedback: "INCORRETO. Desmontar ou danificar domicílio improvisado é proibido. Os agentes de segurança devem preservar a inviolabilidade."
      },
      {
        text: "Recusar apoio para desmonte e orientar sobre a necessidade de prévia garantia de moradia adequada",
        isCorrect: true,
        feedback: "CORRETO. A remoção só pode ocorrer com garantia de moradia adequada. A PM deve coibir atos ilegais contra pessoas em situação de rua."
      },
      {
        text: "Realizar a operação rapidamente antes que chegue a imprensa",
        isCorrect: false,
        feedback: "INCORRETO. O sigilo não torna a ação legal. Remoções forçadas são violações de direitos humanos independentemente de publicidade."
      }
    ]
  },
  {
    id: 10,
    title: "Mulher Vítima de Violência",
    location: "Imbaú - Proximidades da BR-376",
    description: "Nas proximidades da BR-376 em Imbaú, a guarnição encontra uma mulher em situação de rua com marcas visíveis de agressão. Ela relata ter sido agredida pelo companheiro que também vive nas ruas.",
    options: [
      {
        text: "Registrar boletim de lesão corporal e liberar a mulher no mesmo local",
        isCorrect: false,
        feedback: "INCORRETO. A mulher está em situação de risco continuado. É necessário garantir sua proteção imediata e encaminhamento adequado."
      },
      {
        text: "Registrar B.O., informar sobre a Lei Maria da Penha, oferecer medidas protetivas e encaminhar ao CREAS ou Casa da Mulher",
        isCorrect: true,
        feedback: "CORRETO. A mulher tem direito a medidas protetivas de urgência. O CREAS e a rede de proteção à mulher devem ser acionados para acolhimento seguro."
      },
      {
        text: "Tentar mediar o conflito entre o casal para evitar novas agressões",
        isCorrect: false,
        feedback: "INCORRETO. Violência doméstica não é conflito a ser mediado. A mulher precisa de proteção e o agressor deve responder criminalmente."
      }
    ]
  }
]

export function ScenariosSection() {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const scenario = scenarios[currentScenario]

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return
    setSelectedOption(optionIndex)
    setShowFeedback(true)
    
    const isCorrect = scenario.options[optionIndex].isCorrect
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }))
  }

  const handleNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    }
  }

  const handleReset = () => {
    setCurrentScenario(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setScore({ correct: 0, total: 0 })
  }

  const isLastScenario = currentScenario === scenarios.length - 1
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0

  return (
    <section id="cenarios" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Treinamento Interativo</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Cenários de Atuação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Teste seus conhecimentos sobre os procedimentos corretos em situações reais de atendimento 
            na região de Telêmaco Borba e cidades vizinhas.
          </p>
        </div>

        {/* Progress & Score */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Cenário</span>
            <span className="text-lg font-bold text-primary">{currentScenario + 1}</span>
            <span className="text-sm text-muted-foreground">de {scenarios.length}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-success/10 px-3 py-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">{score.correct}/{score.total}</span>
              {score.total > 0 && (
                <span className="text-xs text-success">({percentage}%)</span>
              )}
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-secondary rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
          />
        </div>

        {/* Scenario Card */}
        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 mb-8">
          {/* Location Badge */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{scenario.location}</span>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{scenario.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{scenario.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {scenario.options.map((option, index) => {
              const isSelected = selectedOption === index
              const isCorrect = option.isCorrect

              let optionClasses = "w-full p-4 rounded-xl border text-left transition-all "
              
              if (showFeedback && isSelected) {
                optionClasses += isCorrect 
                  ? "border-success bg-success/10 " 
                  : "border-destructive bg-destructive/10 "
              } else if (showFeedback && isCorrect) {
                optionClasses += "border-success bg-success/5 "
              } else {
                optionClasses += "border-border hover:border-primary/50 hover:bg-secondary/50 cursor-pointer "
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showFeedback}
                  className={optionClasses}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      showFeedback && isSelected
                        ? isCorrect ? "bg-success" : "bg-destructive"
                        : showFeedback && isCorrect
                        ? "bg-success"
                        : "bg-secondary"
                    }`}>
                      {showFeedback ? (
                        isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-success-foreground" />
                        ) : isSelected ? (
                          <XCircle className="w-4 h-4 text-foreground" />
                        ) : (
                          <span className="text-xs font-medium text-muted-foreground">{String.fromCharCode(65 + index)}</span>
                        )
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground">{String.fromCharCode(65 + index)}</span>
                      )}
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{option.text}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {showFeedback && selectedOption !== null && (
            <div className={`mt-6 p-4 rounded-xl ${
              scenario.options[selectedOption].isCorrect 
                ? "bg-success/10 border border-success/30" 
                : "bg-destructive/10 border border-destructive/30"
            }`}>
              <div className="flex items-start gap-3">
                {scenario.options[selectedOption].isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                )}
                <p className="text-sm text-foreground leading-relaxed">
                  {scenario.options[selectedOption].feedback}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        {showFeedback && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {isLastScenario ? (
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <div className="text-center sm:text-left flex-1">
                  <p className="text-foreground font-semibold">
                    Parabéns! Você completou todos os cenários.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sua pontuação: {score.correct} de {score.total} ({percentage}%)
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                >
                  Recomeçar
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex justify-end w-full">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
                >
                  Próximo Cenário
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
