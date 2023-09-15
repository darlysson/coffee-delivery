import { ComponentProps } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export type Input = {
  name: string
  address: string
  city: string
  state: string
  phone: number
  email: string
}

export interface InputProps extends ComponentProps<'input'> {
  errorMessage?: string
  register: UseFormRegister<Input>
  errors: FieldErrors
  name: 'name' | 'address' | 'city' | 'state' | 'phone' | 'email'
}

export function Input({
  name,
  placeholder,
  required = false,
  className,
  errorMessage,
  errors,
  register
}: InputProps) {

  return (
    <div className={className}>
      {errors[name] && (
        <span className=" text-red-500 text-xs">{errorMessage || 'This field is required.'}</span>
      )}

      <input
        placeholder={placeholder}
        className="rounded w-full p-3 bg-input border border-button text-label placeholder:italic"
        {...register(name, { required })}
      />
    </div>
  )
}
