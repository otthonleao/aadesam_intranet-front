"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

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
  const [modalidadeLicitacao, setModalidadeLicitacao] = useState("");
  const [tipoLicitacao, setTipoLicitacao] = useState("");
  const [naturezaObjeto, setNaturezaObjeto] = useState("");
  const [naturezaProcedimento, setNaturezaProcedimento] = useState("");
  const [regimeObra, setRegimeObra] = useState("");
  const [tipoItemLote, setTipoItemLote] = useState("L");
  const [objetoLicitacao, setObjetoLicitacao] = useState("");

  const handleGerarJson = () => {
    const codUnidadeOrcamentaria = (document.getElementById('cod-unidade-orcamentaria') as HTMLInputElement)?.value;
    const numProcessoLicitatorio = (document.getElementById('num-processo-licitatorio') as HTMLInputElement)?.value;
    const vlTotalPrevisto = (document.getElementById('vl-total-previsto') as HTMLInputElement)?.value;
    const competencia = (document.getElementById('competencia') as HTMLInputElement)?.value;
    const idContratacaoPNCP = (document.getElementById('id-contratacao-pncp') as HTMLInputElement)?.value;

    const jsonData = [
      {
        codUnidadeOrcamentaria: parseInt(codUnidadeOrcamentaria),
        numProcessoLicitatorio,
        codModalidadeLicitacao: parseInt(modalidadeLicitacao),
        codTipoLicitacao: parseInt(tipoLicitacao),
        codNaturezaObjeto: parseInt(naturezaObjeto),
        codNaturezaProcedimento: parseInt(naturezaProcedimento),
        desObjetoLicitacao: objetoLicitacao,
        codRegimeObra: regimeObra ? parseInt(regimeObra) : null,
        vlTotalPrevisto: parseFloat(vlTotalPrevisto),
        tpItemLote: tipoItemLote,
        competencia: parseInt(competencia),
        idContratacaoPNCP
      }
    ];

    // Criar o arquivo JSON
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Criar link para download
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 12);
    a.download = `licitacao_${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    
    // Limpar
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
                <Label htmlFor="cod-modalidade-licitacao">Modalidade de Licitação</Label>
                <TCE_ModalidadeLicitacao value={modalidadeLicitacao} onChange={setModalidadeLicitacao} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cod-tipo-licitacao">Tipo de Licitação</Label>
                <TCE_TipoLicitacao value={tipoLicitacao} onChange={setTipoLicitacao} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cod-natureza-objeto">Natureza do Objeto</Label>
                <p className="text-muted-foreground text-sm">
                  Obrigatório somente quando a Natureza do Objeto for 01 - Obras e Serviços de Engenharia
                </p>
                <Licitacao_NaturezaDoObjeto value={naturezaObjeto} onChange={setNaturezaObjeto} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="cod-natureza-procedimento">Natureza do Procedimento</Label>
                <Licitacao_NaturezaDoProcedimento value={naturezaProcedimento} onChange={setNaturezaProcedimento} />
              </div>
              <div className="grid gap-3">
                <Licitacao_TextArea value={objetoLicitacao} onChange={setObjetoLicitacao} />
              </div>
              <div className="grid gap-3">
                <Label>Regime de Execução - Obras</Label>
                <Licitacao_RegimeDeExecucaoObra value={regimeObra} onChange={setRegimeObra} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="vl-total-previsto">Valor Total Previsto para Despesa</Label>
                <Input id="vl-total-previsto" placeholder="1200300.00"/>
              </div>
              <div className="grid gap-3">
                <Label>Tipo da Licitação</Label>
                <Licitacao_TipoLicitacao value={tipoItemLote} onChange={setTipoItemLote} />
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
              <Button id="btn-gerar-json" onClick={handleGerarJson}>Gerar JSON</Button>
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
