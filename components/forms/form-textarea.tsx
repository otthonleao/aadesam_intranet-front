import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export function Licitacao_TextArea({ value, onChange }: TextAreaProps) {
  return (
    <div className="grid w-full gap-3">
      <Label htmlFor="message-2">Descrição do Objeto de Licitação</Label>
      <Textarea 
        placeholder="Type your message here." 
        id="message-2" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="text-muted-foreground text-sm">
        Deve conter máximo 300 caracteres
      </p>
    </div>
  )
}

export function Licitacao_RadioGroup() {
  // return (
    
  // )
}
