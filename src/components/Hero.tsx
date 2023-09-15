import { Package, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import Image from 'next/image'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className='lg:min-h-[34rem] bg-linearGradient'>
      <div className='container mx-auto lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-x-14 lg:gap-y-0 pt-8 pb-24 items-center'>
        <div className='px-8 lg:px-0'>
          <h1 className='font-baloo text-3xl lg:text-5xl text-title mb-4'>Find the perfect coffee for any time of the day</h1>
          <p className='text-base lg:text-xl'>With Coffe Delivery, you receive your coffee wherever you are at, at any time.</p>

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

        <div className="flex items-center justify-center ">
          <Image className="w-full h-72 lg:h-auto" src="/coffee.svg" alt="Coffee cup" width={300} height={360} />
        </div>
      </div>
    </section>
  )
}
