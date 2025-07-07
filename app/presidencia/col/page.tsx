import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TCE_ModalidadeLicitacao } from "@/components/tce/modalidade-licitacao-combobox";
import { Licitacao_NaturezaDoObjeto, Licitacao_NaturezaDoProcedimento, Licitacao_RegimeDeExecucaoObra, Licitacao_TipoLicitacao, TCE_TipoLicitacao } from "@/components/tce/tipo-licitacao-combobox";
import { Licitacao_TextArea } from "@/components/forms/form-textarea";

export function TCEeContas_Licitacao() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>LICITACAO.JSON</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when youre
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="cod-unidade-orcamentaria">Código da Unidade Orçamentária</Label>
                <Input id="cod-unidade-orcamentaria" placeholder="99001"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="num-processo-licitatorio">Número do Processo Licitatório</Label>
                <Input id="num-processo-licitatorio" placeholder="2024006806/AADESAM" />
              </div>
              <div className="grid gap-3">
                <Label>Modalidade de Licitação</Label>
                <TCE_ModalidadeLicitacao></TCE_ModalidadeLicitacao>
              </div>
              <div className="grid gap-3">
                <Label>Tipo de Licitação</Label>
                <TCE_TipoLicitacao></TCE_TipoLicitacao>
              </div>
              <div className="grid gap-3">
                <Label>Natureza do Objeto</Label>
                <p className="text-muted-foreground text-sm">
                  Obrigatório somente quando a Natureza do Objeto for 01 - Obras e Serviços de Engenharia
                </p>
                <Licitacao_NaturezaDoObjeto></Licitacao_NaturezaDoObjeto>
              </div>
              <div className="grid gap-3">
                <Label>Natureza do Procedimento</Label>
                <Licitacao_NaturezaDoProcedimento></Licitacao_NaturezaDoProcedimento>
              </div>
              <div className="grid gap-3">
                <Licitacao_TextArea></Licitacao_TextArea>
              </div>
              <div className="grid gap-3">
                <Label>Regime de Execução - Obras</Label>
                <Licitacao_RegimeDeExecucaoObra></Licitacao_RegimeDeExecucaoObra>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="vl-total-previsto">Valor Total Previsto para Despesa</Label>
                <Input id="vl-total-previsto" placeholder="1200300.00"/>
              </div>
              <div className="grid gap-3">
                <Label>Tipo da Licitação</Label>
                <Licitacao_TipoLicitacao></Licitacao_TipoLicitacao>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="competencia">Competência</Label>
                <Input id="competencia" placeholder="202510"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="id-contratacao-pncp">Número Contratação do PNCP</Label>
                <Input id="id-contratacao-pncp" placeholder="99999999999999-1-999999/9999"/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Gerar JSON</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, youll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
