import { CheckCircle, XCircle, AlertTriangle, FileText } from "lucide-react"

const correctActions = [
  "Manter diálogo cortês e respeitoso durante toda a abordagem",
  "Identificar a pessoa como 'pessoa em situação de rua', nunca usar termos pejorativos",
  "Oferecer informações sobre serviços de assistência social disponíveis",
  "Respeitar a decisão da pessoa caso não aceite o encaminhamento",
  "Restituir todos os pertences após a revista pessoal",
  "Lavrar boletim de ocorrência detalhado com política pública vinculada",
  "Aguardar no local caso a pessoa aceite atendimento assistencial",
  "Tratar pelo nome, independentemente do envolvimento na ocorrência"
]

const incorrectActions = [
  "Determinar remoção apenas por incômodo de outros cidadãos",
  "Desmontar ou danificar domicílio improvisado",
  "Coagir para aceitar atendimento assistencial",
  "Recolher documentos ou objetos pessoais sem justificativa",
  "Usar termos como 'mendigo' ou 'morador de rua'",
  "Abordar apenas pela condição de rua (não configura fundada suspeita)",
  "Jogar pertences no lixo ou esvaziar garrafas",
  "Realizar prisão para averiguação baseada na situação de rua"
]

const criticalActivities = [
  "Comunidade demandando remoção compulsória",
  "Pessoa hostil ou sob efeito de substâncias",
  "Dificuldade de identificação",
  "Manutenção da segurança de todos"
]

export function ProceduresSection() {
  return (
    <section id="procedimentos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">POP 100.30</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Procedimentos Operacionais Padrão
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            O POP 100.30 estabelece os procedimentos para ocorrências envolvendo pessoas em situação de rua, 
            garantindo atendimento humanizado e efetivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Ações Corretas */}
          <div className="rounded-2xl border border-success/30 bg-success/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-bold text-success">Como Agir Corretamente</h3>
            </div>
            <ul className="space-y-4">
              {correctActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ações Incorretas */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive">Erros a Evitar</h3>
            </div>
            <ul className="space-y-4">
              {incorrectActions.map((action, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Atividades Críticas */}
        <div className="rounded-2xl border border-warning/30 bg-warning/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <h3 className="text-xl font-bold text-warning">Atividades Críticas</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {criticalActivities.map((activity, index) => (
              <div key={index} className="p-4 rounded-lg bg-background border border-warning/20">
                <p className="text-sm text-foreground">{activity}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fundamentação Legal */}
        <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Fundamentação Legal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-sm font-semibold text-foreground">Constituição Federal de 1988</p>
              <p className="text-xs text-muted-foreground mt-1">Art. 1º, II e III - Cidadania e Dignidade</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-sm font-semibold text-foreground">Decreto Federal n.º 7.053/2009</p>
              <p className="text-xs text-muted-foreground mt-1">Política Nacional para População em Situação de Rua</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-sm font-semibold text-foreground">Resolução n.º 40/2020 - CNDH</p>
              <p className="text-xs text-muted-foreground mt-1">Diretrizes de Direitos Humanos</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <p className="text-sm font-semibold text-foreground">Lei Federal n.º 14.821/2024</p>
              <p className="text-xs text-muted-foreground mt-1">PNTC PopRua - Trabalho Digno e Cidadania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
