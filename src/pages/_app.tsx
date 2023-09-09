import { Header } from '@/components/Header';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';
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
  coffeeAmount: number,
  selectedCoffees: CoffeeProps[],
  handleRemoveCartCoffee: (id: number) => void
  handleAddCoffee: (index: number) => void
  handleRemoveCoffee: (index: number) => void
}

export const CoffeesContext = createContext<CoffeeContextType>({} as CoffeeContextType)

export default function App({ Component, pageProps }: AppProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [coffeeAmount, setCoffeeAmount] = useState(0)
  const sumOfAllCoffees = coffees.reduce((acc, coffees) => acc + coffees.quantity, 0)
  const selectedCoffees = coffees.filter(coffee => coffee.quantity !== 0)

  useEffect(() => {
    setCoffees(data.coffees)
  }, [])

  function handleAddCoffee(id: number) {
    const newState = coffees.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, quantity: coffee.quantity + 1 }
      }

      return coffee
    })

    setCoffees(newState)
  }

  function handleRemoveCoffee(id: number) {
    const newState = coffees.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, quantity: coffee.quantity - 1 }
      }

      return coffee
    })

    setCoffees(newState)
  }

  function handleRemoveCartCoffee(id: number) {
    const filteredCoffees = coffees.filter(coffee => coffee.id !== id)
    setCoffees(filteredCoffees)
  }

  // Add funcionality to NOT ALLOW coffee amount to be less than 0

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeeAmount,
        sumOfAllCoffees,
        selectedCoffees,
        handleRemoveCartCoffee,
        handleAddCoffee,
        handleRemoveCoffee
      }}
    >
      <Header />
      <Component {...pageProps} />
    </CoffeesContext.Provider>
  )
}
