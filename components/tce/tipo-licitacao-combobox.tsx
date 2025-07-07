"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "1",
    label: "1 - Menor Preço",
  },
  {
    value: "2",
    label: "2 - Melhor Técnica",
  },
  {
    value: "3",
    label: "3 - Técnica e Preço",
  },
  {
    value: "4",
    label: "4 - Maior Lance ou Oferta",
  },
]

export function TCE_TipoLicitacao() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[335px] justify-between"
            >
            {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Escolha o código do tipo de licitação"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput placeholder="Tipo de Licitação" />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {/* {framework.label} */}
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function Licitacao_NaturezaDoObjeto() {
  const valoresNaturezaDoObjeto = [
    {
      value: "01",
      label: "01 - Obras e Serviços de Engenharia",
    },
    {
      value: "02",
      label: "02 - Comparas e Outros Serviços",
    },
    {
      value: "03",
      label: "03 - Locação de Imóveis",
    },
    {
      value: "04",
      label: "04 - Concessão",
    },
    {
      value: "05",
      label: "05 - Permissão",
    },
    {
      value: "06",
      label: "06 - Alienação de Bens",
    },
  ]

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[335px] justify-between"
            >
            {value
                ? valoresNaturezaDoObjeto.find((valoresNaturezaDoObjeto) => valoresNaturezaDoObjeto.value === value)?.label
                : "Natureza do Objeto - Obrigatório"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput placeholder="Tipo de Licitação" />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{valoresNaturezaDoObjeto.map((valoresNaturezaDoObjeto) => (
                            <CommandItem
                                key={valoresNaturezaDoObjeto.value}
                                value={valoresNaturezaDoObjeto.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === valoresNaturezaDoObjeto.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                  {valoresNaturezaDoObjeto.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function Licitacao_NaturezaDoProcedimento() {
  const codNaturezaDoProcedimento = [
    {
      value: "01",
      label: "01 - Normal",
    },
    {
      value: "02",
      label: "02 - Registro de Preço",
    },
    {
      value: "03",
      label: "03 - Credenciamento/Chamada Pública",
    }
  ]

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[335px] justify-between"
            >
            {value
                ? codNaturezaDoProcedimento.find((valoresNaturezaDoProcedimento) => valoresNaturezaDoProcedimento.value === value)?.label
                : "Código de Regime de Obra"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{codNaturezaDoProcedimento.map((valoresNaturezaDoProcedimento) => (
                            <CommandItem
                                key={valoresNaturezaDoProcedimento.value}
                                value={valoresNaturezaDoProcedimento.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === valoresNaturezaDoProcedimento.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                  {valoresNaturezaDoProcedimento.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function Licitacao_RegimeDeExecucaoObra() {
  const codRegimeObra = [
    {
      value: "1",
      label: "1 - Empreitada por Preço Global",
    },
    {
      value: "2",
      label: "2 - Empreitada por Preço Unitário",
    },
    {
      value: "3",
      label: "3 - Empreitada Integral",
    },
    {
      value: "4",
      label: "4 - Tarefa",
    },
    {
      value: "5",
      label: "5 - Execução Direta",
    }
  ]

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[335px] justify-between"
            >
            {value
                ? codRegimeObra.find((valoresRegimeObra) => valoresRegimeObra.value === value)?.label
                : "Regime de Execução - Obras"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{codRegimeObra.map((valoresRegimeObra) => (
                            <CommandItem
                                key={valoresRegimeObra.value}
                                value={valoresRegimeObra.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === valoresRegimeObra.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                  {valoresRegimeObra.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function Licitacao_TipoLicitacao() {
  const tpItemLote = [
    {
      value: "I",
      label: "Item",
    },
    {
      value: "L",
      label: "Lote",
    }
  ]

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[335px] justify-between"
            >
            {value
                ? tpItemLote.find((valorItemLicitacao) => valorItemLicitacao.value === value)?.label
                : "Item ou Lote"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{tpItemLote.map((valorItemLicitacao) => (
                            <CommandItem
                                key={valorItemLicitacao.value}
                                value={valorItemLicitacao.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === valorItemLicitacao.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                  {valorItemLicitacao.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}