import { Header } from '@/components/Header';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { createContext, useContext, useEffect, useState } from 'react';
import data from '../data.json';

export interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  title: string
  description: string
  price: number
  quantity: number
}

type CoffeeContextType = {
  coffees: CoffeeProps[],
  sumOfAllCoffees: number,
  selectedCoffees: CoffeeProps[],
  handleRemoveCartCoffee: (id: number) => void
  handleAddCoffee: (ref: any, index: number) => void
}

export const CoffeesContext = createContext<CoffeeContextType>({} as CoffeeContextType)

export const useCoffee = () => {
  const coffeContext = useContext(CoffeesContext)
  return coffeContext
}

export default function App({ Component, pageProps }: AppProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const coffeeSum = coffees.reduce((acc, coffees) => acc + coffees.quantity, 0)
  const selectedCoffees = coffees.filter(coffee => coffee.quantity !== 0)

  useEffect(() => {
    setCoffees(data.coffees)
  }, [])

  // OK - List of all coffees
  // OK - List of all coffees where quantity is !== de 0 (filter) (checkout)
  // OK - Remove item from cart
  // OK - quantity = reduce no array de coffees somando todas as quantities
  // Add and remove items On click (for each coffee)



  function handleAddCoffee(ref: any, index: number) {
    console.log(ref)
    console.log(index)
  }
  // function handleRemoveCoffee() {}

  function handleRemoveCartCoffee(id: number) {
    const filteredCoffees = coffees.filter(coffee => coffee.id !== id)
    setCoffees(filteredCoffees)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        sumOfAllCoffees: coffeeSum,
        selectedCoffees,
        handleRemoveCartCoffee,
        handleAddCoffee
      }}
    >
      <Header />
      <Component {...pageProps} />
    </CoffeesContext.Provider>
  )
}
