import { Coffee, Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import Image from 'next/image'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className='grid grid-cols-2 gap-x-14 min-h-[34rem] bg-linearGradient px-40 pt-20'>
      <div>
        <h1 className='font-baloo text-5xl text-title mb-4'>Find the perfect coffee for any time of the day</h1>
        <p className='text-xl'>With Coffe Delivery, you receive your coffee wherever you are at, at any time.</p>

        <div className="grid gap-y-5 gap-x-10 grid-cols-2 mt-16">
          <Icon title='Simple and secure purchase' icon={ShoppingCartSimple} bgColor='bg-darkYellow' />
          <Icon title='The package keeps your coffee great' icon={Package} bgColor='bg-defaultText' />
          <Icon title='Fast and tracked delivery' icon={Timer} bgColor='bg-yellow' />
          <Icon title='The coffee arrives fresh' icon={Coffee} bgColor='bg-purple' />
        </div>
      </div>

      <Image src="/coffee.svg" alt="Coffee cup" width={480} height={360} />
    </section>
  )
}
