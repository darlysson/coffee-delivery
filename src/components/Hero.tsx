import { Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import Image from 'next/image'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className='grid grid-cols-2 gap-x-14 min-h-[34rem] bg-linearGradient px-40 pt-20'>
      <div>
        <h1 className='font-baloo text-5xl text-title mb-4'>Find the perfect coffee for any time of the day</h1>
        <p className='text-xl'>With Coffe Delivery, you receive your coffee wherever you are at, at any time.</p>

        <div className="grid gap-y-5 gap-x-10 grid-cols-2 mt-16">
          <Icon
            className='bg-darkYellow text-defaultBgColor'
            icon={ShoppingCartSimple}
            text="Simple and secure purchase"
            isFullRounded
          />

          <Icon
            className='bg-defaultText text-defaultBgColor'
            icon={Package}
            text="The package keeps your coffee great"
            isFullRounded
          />

          <Icon
            className='bg-yellow text-defaultBgColor'
            icon={Timer}
            text="Fast and tracked delivery"
            isFullRounded
          />

          <Icon
            className='bg-purple text-defaultBgColor'
            icon={Timer}
            text="The coffee arrives fresh"
            isFullRounded
          />
        </div>
      </div>

      <Image src="/coffee.svg" alt="Coffee cup" width={480} height={360} />
    </section>
  )
}
