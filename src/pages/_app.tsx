import { Header } from '@/components/Header'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const AppContext = createContext({})
  const [coffess, setCoffees] = useState([])

  // List of all coffees
  // List of all coffees where quantity is !== de 0 (filter)
  // quantity = reduce no array de coffees somando todas as quantities
  // Add and remove items On click

  return (
    <AppContext.Provider value={{}}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
