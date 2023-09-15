import { ReactNode } from 'react'

export interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  title: string
  description: string
  price: number
  quantity: number
}

export type CustomerDataType = {
  address: string
  city: string
  email: string
  name: string
  phone: number
  state: string
  paymentMethod: string
}

export type CoffeeContextType = {
  coffees: CoffeeProps[]
  sumOfAllCoffees: number
  customerData: CustomerDataType
  selectedCoffees: CoffeeProps[]
  handleRemoveCartCoffee: (id: number) => void
  handleAddOrRemoveCoffee: (
    index: number,
    operationType: 'add' | 'remove'
  ) => void
  handleCustomerData: (data: CustomerDataType) => void
  handleResetCoffeeAmount: () => void
}

export type CoffeeProviderProps = {
  children: ReactNode
  value: CoffeeContextType
}
