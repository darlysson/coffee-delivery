import { CoffeesContext } from "@/pages/_app"
import { useContext } from "react"

export const useCoffee = () => {
  const coffeContext = useContext(CoffeesContext)
  return coffeContext
}
