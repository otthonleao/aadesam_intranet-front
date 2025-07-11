"use client";

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
import { Licitacao_TextArea } from "@/components/forms/form__licitacao";
import { Textarea } from "@/components/ui/textarea";

export function TCE_CardLicitacao() {
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

export function TCE_CardItemLicitacao() {
  const handleGerarItemLicitacaoJson = () => {
    const numProcessoLicitatorio = (document.getElementById('num-processo-licitatorio-2') as HTMLInputElement)?.value;
    const numEditalLicitacao = (document.getElementById('num-edital-licitacao') as HTMLInputElement)?.value;
    const dtPublicacaoEdital = (document.getElementById('dt-publicacao-edital') as HTMLInputElement)?.value;
    const numSequencialItem = (document.getElementById('num-sequencial-item') as HTMLInputElement)?.value;
    const desItemLicitacao = (document.getElementById('des-item-licitacao') as HTMLTextAreaElement)?.value;
    const qtItemSolicitado = (document.getElementById('qt-item-solicitado') as HTMLInputElement)?.value;
    const dtHomologacaoItem = (document.getElementById('dt-homologacao-item') as HTMLInputElement)?.value;
    const dtPublicacaoHomologacao = (document.getElementById('dt-publicacao-homologacao') as HTMLInputElement)?.value;
    const unidadeMedida = (document.getElementById('unidade-medida') as HTMLInputElement)?.value;
    const status = (document.getElementById('item-status') as HTMLInputElement)?.value;
    const codItemLote = (document.getElementById('cod-item-lote') as HTMLInputElement)?.value;

    const jsonData = [
      {
        numProcessoLicitatorio,
        numEditalLicitacao,
        dtPublicacaoEdital,
        numSequencialItem: parseInt(numSequencialItem),
        desItemLicitacao,
        qtItemLicitado: parseFloat(qtItemSolicitado),
        dtHomologacaoItem,
        dtPublicacaoHomologacao,
        unidadeMedida,
        status: parseInt(status),
        codItemLote
      }
    ];

    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 12);
    a.download = `ITEMLICITACAO_${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex w-full max-w-full flex-col gap-6">
          <Card>

            <CardHeader>
              <CardTitle>ITEMLICITACAO.JSON</CardTitle>
              <CardDescription>
                Situação de cada item licitado após conclusão do processo licitatório. Envio inicial, na publicação do edital, com status “07 – Aberto” e envio após término do processo com o respectivo status final.
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-processo-licitatorio-2">Número do Processo Licitatório</Label>
                  <Input id="num-processo-licitatorio-2" placeholder="2024006806/AADESAM" />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-edital-licitacao">Número do Edital de Licitação*</Label>
                  <Input id="num-edital-licitacao" placeholder="006/2025" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="dt-publicacao-edital">Data de Publicação do Edital de Licitação*</Label>
                  <Input id="dt-publicacao-edital" placeholder="20250430" required />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-sequencial-item">Número Sequencial do Item</Label>
                  <Input id="num-sequencial-item" placeholder="1" type="number" inputMode="numeric" required />
                </div>
              </div>

              <div className="grid gap-3">
                  <Label htmlFor="des-item-licitacao">Descrição do Item</Label>
                  <Textarea id="des-item-licitacao" maxLength={300} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="qt-item-solicitado">Quantidade Solicitada*</Label>
                  <Input id="qt-item-solicitado" placeholder="1.5" type="number" inputMode="decimal" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="dt-homologacao-item">Data de Homologação</Label>
                  <p className="text-muted-foreground text-sm">
                    Informar somente se Status do Item = “01”
                  </p>
                  <Input id="dt-homologacao-item" placeholder=" aaaammdd" type="number" maxLength={8} inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="dt-publicacao-homologacao">Data de Publicação da Homologação</Label>
                  <p className="text-muted-foreground text-sm">
                    Informar somente se Status do Item = “01”
                  </p>
                  <Input id="dt-publicacao-homologacao" placeholder=" aaaammdd" maxLength={8} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]" />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="unidade-medida">Unidade de Medida*</Label>
                  <Input id="unidade-medida" placeholder="KG" maxLength={30}/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="item-status">Status*</Label>
                  <p className="text-muted-foreground text-sm">
                    01-Homologação | 02-Cancelado | 03-Anulado | 04-Revogado | 05-Deserto | 06-Fracassado
                  </p>
                  <Input id="item-status" placeholder="02" maxLength={2} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]" />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="cod-item-lote">Controle Item Lote</Label>
                  <p className="text-muted-foreground text-sm">
                    Obrigatório se o tipo da licitação informado no arquivo LICITACAO.JSON for igual a L.
                  </p>
                  <Input id="cod-item-lote" placeholder="LOTE01" maxLength={10}/>
                </div>
              </div>

            </CardContent>
            <CardFooter className="justify-center">
              <Button id="btn-gerar-licitacao-json" onClick={handleGerarItemLicitacaoJson}>Gerar Arquivo ITEMLICITACAO.JSON</Button>
            </CardFooter>
          </Card>
    </div>
  )
}

export function TCE_CardLicitacaoHistorico() {
  const handleGerarLicitacaoHistoricoJson = () => {
    const codUnidadeOrcamentaria = (document.getElementById('cod-unidade-orcamentaria-3') as HTMLInputElement)?.value;
    const numProcessoLicitatorio = (document.getElementById('num-processo-licitatorio-3') as HTMLInputElement)?.value;
    const numEditalLicitacao = (document.getElementById('num-edital-licitacao-3') as HTMLInputElement)?.value;
    const dtPublicacaoEdital = (document.getElementById('dt-publicacao-edital-3') as HTMLInputElement)?.value;
    const numDiarioOficial = (document.getElementById('num-diario-oficial') as HTMLInputElement)?.value;
    const dtLimitePropostas = (document.getElementById('dt-limite-propostas') as HTMLInputElement)?.value;

    const jsonData = [
      {
        codUnidadeOrcamentaria: parseInt(codUnidadeOrcamentaria),
        numProcessoLicitatorio,
        numEditalLicitacao,
        dtPublicacaoEdital,
        numDiarioOficial: parseInt(numDiarioOficial),
        dtLimitePropostas
      }
    ];

    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 12);
    a.download = `LICITACAOHISTORICO_${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex w-full max-w-full flex-col gap-6">
          <Card>

            <CardHeader>
              <CardTitle>LICITACAOHISTORICO.JSON</CardTitle>
              <CardDescription>
                Informações de publicações no Diário Oficial e data prevista para licitação. 
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="cod-unidade-orcamentaria-3">Código da Unidade Orçamentária*</Label>
                  <Input id="cod-unidade-orcamentaria-3" placeholder="99001" defaultValue={"99001"} required maxLength={6} type="number" inputMode="numeric" className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-processo-licitatorio-3">Número do Processo Licitatório</Label>
                  <Input id="num-processo-licitatorio--3" placeholder="2024006806/AADESAM" maxLength={21} />
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-edital-licitacao-3">Número do Edital de Licitação*</Label>
                  <Input id="num-edital-licitacao-3" placeholder="006/2025" maxLength={16} required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="dt-publicacao-edital-3">Data de Publicação do Edital de Licitação*</Label>
                  <Input id="dt-publicacao-edital-3" placeholder="20250430" maxLength={8} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-diario-oficial">Número do Diário Oficial do Estado*</Label>
                  <Input id="num-diario-oficial" placeholder="35454" maxLength={6} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="dt-limite-propostas">Data Limite Para Envio das Propostas</Label>
                  <Input id="dt-limite-propostas" placeholder="20250430" maxLength={8} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
              </div>

            </CardContent>
            <CardFooter className="justify-center">
              <Button id="btn-gerar-licitacao-historico-json" onClick={handleGerarLicitacaoHistoricoJson}>Gerar Arquivo LICITACAOHISTORICO.JSON</Button>
            </CardFooter>
          </Card>
    </div>
  )
}

export function TCE_CardPublicacao() {
  const handleGerarPublicacaoJson = () => {
    const numProcessoLicitatorio = (document.getElementById('num-processo-licitatorio-4') as HTMLInputElement)?.value;
    const dtPublicacaoEdital = (document.getElementById('dt-publicacao-edital-4') as HTMLInputElement)?.value;
    const nomeVeiculoComunicacao = (document.getElementById('nome-veiculo-comunicacao') as HTMLInputElement)?.value;

    const jsonData = [
      {
        numProcessoLicitatorio,
        dtPublicacaoEdital,
        nomeVeiculoComunicacao
      }
    ];

    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 12);
    a.download = `PUBLICACAO_${timestamp}.json`;
    document.body.appendChild(a);
    a.click();
    
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex w-full max-w-full flex-col gap-6">
          <Card>

            <CardHeader>
              <CardTitle>PUBLICACAO.JSON</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="grid gap-3 w-full">
                  <Label htmlFor="num-processo-licitatorio-4">Número do Processo Licitatório*</Label>
                  <Input id="num-processo-licitatorio-4" placeholder="2024006806/AADESAM" maxLength={21} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="dt-publicacao-edital-4">Data de Publicação do Edital nos Meios de Comunicação*</Label>
                  <Input id="dt-publicacao-edital-4" placeholder="20250430" maxLength={8} type="number" inputMode="numeric" required className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [MozAppearance:textfield]"/>
                </div>
                <div className="grid gap-3 w-full">
                  <Label htmlFor="nome-veiculo-comunicacao">Nome do Veículo de Comunicação*</Label>
                  <Input id="nome-veiculo-comunicacao" placeholder="Diário Oficial do Estado do Amazonas" maxLength={50} />
                </div>
              </div>

            </CardContent>
            <CardFooter className="justify-center">
              <Button id="btn-gerar-publicao-json" onClick={handleGerarPublicacaoJson}>Gerar Arquivo PUBLICACAO.JSON</Button>
            </CardFooter>
          </Card>
    </div>
  )
}
