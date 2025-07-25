'use client'

import { Input } from '@/components/shadcn/ui/input'
import { Label } from '@/components/shadcn/ui/label'

interface InputStringProps extends React.ComponentProps<'input'> {
  label: string
  maxLength?: number
}

export function InputString({
  id,
  label,
  className,
  maxLength,
  onChange,
  ...props
}: InputStringProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!maxLength || value.length <= maxLength) {
      onChange?.(e)
    }
  }

  return (
    <>
      <Label htmlFor={id}>
        {label}
        {props.required && <span className="ml-1 text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        type="text"
        maxLength={maxLength}
        placeholder={props.placeholder}
        required
        className={`appearance-none ${className ?? ''}`}
        onChange={handleChange}
        {...props}
      />
    </>
  )
}
