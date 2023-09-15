import { CoffeeProps, CustomerDataType } from '@/@types';
import { Header } from '@/components/Header';
import data from '@/data/coffees.json';
import { CoffeeProvider } from '@/hooks/useCoffee';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Baloo_2, Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';

const baloo = Baloo_2({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-baloo',
})

const roboto = Roboto({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>(data.coffees)
  const [sumOfAllCoffees, setSumOfAllCoffees] = useState(0)
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeProps[]>([])
  const [customerData, setCustomerData] = useState<CustomerDataType>({} as CustomerDataType)

  useEffect(() => {
    const coffeeAmount = coffees.reduce((acc, coffees) => acc + coffees.quantity, 0)
    const selectedCoffees = coffees.filter(coffee => coffee.quantity !== 0)

    setSumOfAllCoffees(coffeeAmount)
    setSelectedCoffees(selectedCoffees)
  }, [coffees])

  function handleAddOrRemoveCoffee(id: number, operationType: 'add' | 'remove') {
    const newState = coffees.map((coffee) => {
      const quantity = operationType === 'add' ? coffee.quantity + 1 : coffee.quantity - 1

      if (coffee.id === id) {
        return { ...coffee, quantity }
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
    <CoffeeProvider value={{
      coffees,
      customerData,
      sumOfAllCoffees,
      selectedCoffees,
      handleRemoveCartCoffee,
      handleAddOrRemoveCoffee,
      handleCustomerData,
      handleResetCoffeeAmount
    }}>
      <Header />

      <main className={`${roboto.variable} ${baloo.variable}`}>
        <Component {...pageProps} />
      </main>
    </CoffeeProvider>
  )
}
