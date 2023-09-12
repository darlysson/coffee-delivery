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
  handleAddCoffee: (index: number) => void
  handleRemoveCoffee: (index: number) => void
  handleCustomerData: (data: CustomerDataType) => void
  handleResetCoffeeAmount: () => void
}

export const CoffeesContext = createContext<CoffeeContextType>({} as CoffeeContextType)

export default function App({ Component, pageProps }: AppProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [sumOfAllCoffees, setSumOfAllCoffees] = useState(0)
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeProps[]>([])
  const [customerData, setCustomerData] = useState<CustomerDataType>({} as CustomerDataType)

  useEffect(() => {
    setCoffees(data.coffees)
  }, [])

  useEffect(() => {
    const coffeeAmount = coffees.reduce((acc, coffees) => acc + coffees.quantity, 0)
    const selectedCoffees = coffees.filter(coffee => coffee.quantity !== 0)

    setSumOfAllCoffees(coffeeAmount)
    setSelectedCoffees(selectedCoffees)
  }, [coffees])

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

  function handleCustomerData(data: CustomerDataType) {
    setCustomerData(data)
  }

  function handleResetCoffeeAmount() {
    setSumOfAllCoffees(0)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        customerData,
        sumOfAllCoffees,
        selectedCoffees,
        handleRemoveCartCoffee,
        handleAddCoffee,
        handleRemoveCoffee,
        handleCustomerData,
        handleResetCoffeeAmount
      }}
    >
      <Header />
      <Component {...pageProps} />
    </CoffeesContext.Provider>
  )
}
