"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TCE_ModalidadeLicitacao } from "@/components/tce/modalidade-licitacao-combobox";
import { Licitacao_NaturezaDoObjeto, Licitacao_NaturezaDoProcedimento, Licitacao_RegimeDeExecucaoObra, Licitacao_TipoLicitacao, TCE_TipoLicitacao } from "@/components/tce/tipo-licitacao-combobox";
import { Licitacao_TextArea } from "@/components/forms/form__licitacao";

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
    <div className="flex w-full max-w-full flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>LICITACAO.JSON</CardTitle>
              {/* <CardDescription>
                Make changes to your account here. Click save when youre done.
              </CardDescription> */}
            </CardHeader>
            <CardContent className="grid gap-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="cod-unidade-orcamentaria">Código da Unidade Orçamentária*</Label>
                  <Input id="cod-unidade-orcamentaria" placeholder="99001" required />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-processo-licitatorio">Número do Processo Licitatório</Label>
                  <Input id="num-processo-licitatorio" placeholder="2024006806/AADESAM" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="cod-modalidade-licitacao">Modalidade de Licitação*</Label>
                  <TCE_ModalidadeLicitacao value={modalidadeLicitacao} onChange={setModalidadeLicitacao} />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="cod-tipo-licitacao">Tipo de Licitação</Label>
                  <p className="text-muted-foreground text-sm">
                    Quando o código de modalidade fordo tipo “04 - Concurso”, esse campo não deve ser preenchido.
                  </p>
                  <TCE_TipoLicitacao value={tipoLicitacao} onChange={setTipoLicitacao} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="cod-natureza-objeto">Natureza do Objeto*</Label>
                  <p className="text-muted-foreground text-sm">
                    Obrigatório somente quando a Natureza do Objeto for 01 - Obras e Serviços de Engenharia
                  </p>
                  <Licitacao_NaturezaDoObjeto value={naturezaObjeto} onChange={setNaturezaObjeto} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="cod-natureza-procedimento">Natureza do Procedimento</Label>
                  <Licitacao_NaturezaDoProcedimento value={naturezaProcedimento} onChange={setNaturezaProcedimento} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Licitacao_TextArea value={objetoLicitacao} onChange={setObjetoLicitacao} />
                </div>
                <div>
                  <div className="grid gap-3">
                    <Label>Regime de Execução - Obras</Label>
                    <p className="text-muted-foreground text-sm">
                      Preenchimento obrigatório somente quando natureza do objeto for igual a “01 – Obras e Serviços de Engenharia”.
                    </p>
                    <Licitacao_RegimeDeExecucaoObra value={regimeObra} onChange={setRegimeObra} />
                  </div>
                  <div className="grid gap-3 mt-6">
                    <Label htmlFor="vl-total-previsto">Valor Total Previsto para Despesa*</Label>
                    <Input id="vl-total-previsto" placeholder="1200300.00" required/>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label>Regime de Execução - Obras</Label>
                  <Licitacao_RegimeDeExecucaoObra value={regimeObra} onChange={setRegimeObra} />
                </div>
                <div className="grid gap-3">
                  <Label>Tipo da Licitação*</Label>
                  <Licitacao_TipoLicitacao value={tipoItemLote} onChange={setTipoItemLote} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="competencia">Competência</Label>
                  <Input id="competencia" placeholder="202510"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="id-contratacao-pncp">Número Contratação do PNCP</Label>
                  <Input id="id-contratacao-pncp" placeholder="99999999999999-1-999999/9999"/>
                </div>                
              </div>

            </CardContent>
            <CardFooter className="justify-center">
              <Button id="btn-gerar-licitacao-json" onClick={handleGerarJson}>Gerar Arquivo LICITACAO.JSON</Button>
            </CardFooter>
          </Card>
    </div>
  )
}
