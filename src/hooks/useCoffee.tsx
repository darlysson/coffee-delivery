import { createContext, useContext } from "react"
import { CoffeeContextType, CoffeeProviderProps } from "../@types"

export const CoffeesContext = createContext({} as CoffeeContextType)

export const CoffeeProvider = ({ children, value }: CoffeeProviderProps) => {
  return (
    <CoffeesContext.Provider value={{ ...value }}>
      {children}
    </CoffeesContext.Provider>
  )
}

export const useCoffee = () => {
  const coffeContext = useContext(CoffeesContext)
  return coffeContext
}
