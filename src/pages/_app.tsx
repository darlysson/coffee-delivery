import { Header } from '@/components/Header';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';
import data from '../data.json';

interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  title: string
  description: string
  price: string
  quantity: number
}

export const CoffeesContext = createContext<{ coffees: CoffeeProps[], sumOfAllCoffees: number }>({
  coffees: [],
  sumOfAllCoffees: 0
})

export default function App({ Component, pageProps }: AppProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  // const [sumOfAllCoffees, setSumOfAllCoffees] = useState(0)

  useEffect(() => {
    setCoffees(data.coffees)
  }, [])

  // useEffect(() => {
  //   setSumOfAllCoffees(coffeeSum)
  // }, [coffees])

  const coffeeSum = coffees.reduce((acc, coffees) => acc + coffees.quantity, 0)

  // List of all coffees
  // List of all coffees where quantity is !== de 0 (filter)
  // quantity = reduce no array de coffees somando todas as quantities
  // Add and remove items On click



  // function handleAddCoffee() {}
  // function handleRemoveCoffee() {}

  return (
    <CoffeesContext.Provider value={{ coffees, sumOfAllCoffees: coffeeSum }}>
      <Header />
      <Component {...pageProps} />
    </CoffeesContext.Provider>
  )
}
