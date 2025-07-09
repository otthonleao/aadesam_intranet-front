import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export function Licitacao_TextArea({ value, onChange }: TextAreaProps) {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="des-objeto-licitacao">Descrição do Objeto de Licitação</Label>
      <Textarea 
        placeholder="Descreva em no máximo 300 caracteres" 
        id="des-objeto-licitacao" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={300}
      />
      {/* <p className="text-muted-foreground text-sm">
        Deve conter máximo 300 caracteres
      </p> */}
    </div>
  )
}

export function Licitacao_RadioGroup() {
  // return (
    
  // )
}
