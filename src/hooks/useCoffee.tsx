import { ReactNode, createContext, useContext } from "react"

export interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  title: string
  description: string
  price: number
  quantity: number
}

type CustomerDataType = {
  address: string
  city: string
  email: string
  name: string
  phone: number
  state: string
  paymentMethod: string
}

type CoffeeContextType = {
  coffees: CoffeeProps[],
  sumOfAllCoffees: number,
  customerData: CustomerDataType,
  selectedCoffees: CoffeeProps[],
  handleRemoveCartCoffee: (id: number) => void
  handleAddOrRemoveCoffee: (index: number, operationType: 'add' | 'remove') => void
  handleCustomerData: (data: CustomerDataType) => void
  handleResetCoffeeAmount: () => void
}

type CoffeeProviderProps = {
  children: ReactNode
  value: CoffeeContextType
}

export const CoffeesContext = createContext<CoffeeContextType>({} as CoffeeContextType)

export const CoffeeProvider = ({ children, value }: CoffeeProviderProps) => {
  const {
    coffees,
    customerData,
    sumOfAllCoffees,
    selectedCoffees,
    handleRemoveCartCoffee,
    handleAddOrRemoveCoffee,
    handleCustomerData,
    handleResetCoffeeAmount
  } = value

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        customerData,
        sumOfAllCoffees,
        selectedCoffees,
        handleRemoveCartCoffee,
        handleAddOrRemoveCoffee,
        handleCustomerData,
        handleResetCoffeeAmount
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export const useCoffee = () => {
  const coffeContext = useContext(CoffeesContext)
  return coffeContext
}
