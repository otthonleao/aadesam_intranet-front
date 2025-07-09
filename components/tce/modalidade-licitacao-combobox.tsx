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
    value: "01",
    label: "01 - Convite",
  },
  {
    value: "02",
    label: "02 - Tomada de Preços",
  },
  {
    value: "03",
    label: "03 - Concorrência",
  },
  {
    value: "04",
    label: "04 - Concurso",
  },
  {
    value: "05",
    label: "05 - Pregão Presencial",
  },
    {
    value: "06",
    label: "06 - Pregão Eletrônico",
  },
    {
    value: "07",
    label: "07 - Leilão",
  },
]

interface TCE_ModalidadeLicitacaoProps {
  value: string;
  onChange: (value: string) => void;
}

export function TCE_ModalidadeLicitacao({ value, onChange }: TCE_ModalidadeLicitacaoProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[full] justify-between"
            >
            {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "Escolha o código da modalidade de licitação"}
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
            <Command>
                <CommandInput placeholder="Modalidade de Licitação" />
                    <CommandList>
                        <CommandEmpty>Escolha....</CommandEmpty>
                        <CommandGroup>{frameworks.map((framework) => (
                            <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    onChange(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <CheckIcon
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
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