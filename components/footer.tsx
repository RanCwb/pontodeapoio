import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm text-muted-foreground">
              Polícia Militar do Paraná - Trabalho Acadêmico
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Baseado no POP 100.30 - Ocorrências Envolvendo Pessoas em Situação de Rua
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Decreto Federal n.º 7.053/2009 | Resolução CNDH n.º 40/2020
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Este material tem finalidade exclusivamente educacional e não substitui os documentos oficiais da PMPR.
          </p>
        </div>
      </div>
    </footer>
  )
}
