"use client"

export function TCE_CardItemLicitacao() {
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
