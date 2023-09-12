import { useCoffee } from '@/hooks/useCoffee';
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';
import clsx from 'clsx';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Icon } from './Icon';
import { LayoutSection } from './LayoutSection';

export function Header() {
  const { sumOfAllCoffees, customerData } = useCoffee()
  const { asPath } = useRouter()

  const isSuccessPage = asPath === '/success'
  const customerLocation = `${customerData.city}, ${customerData.state}`

  return (
    <LayoutSection>
      <header className="flex justify-between items-center py-16 ">
        <Link href="/">
          <Image src='/logo.svg' alt="Coffee Delivery Logo" width={85} height={40} />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-md items-center bg-lightPurple text-darkPurple p-2">
            <MapPin className="text-purple" />

            <span className="text-sm">{`Delivering at ${isSuccessPage ? customerLocation : 'wherever you are 😀'}`}</span>
          </div>

          <Link href="/checkout" className={clsx('p-1 bg-lightYellow no-underline rounded-md relative', sumOfAllCoffees > 0 && 'border border-darkYellow animate-checkout')}>
            <Icon icon={ShoppingCartSimple} className="text-darkYellow" size={22} />

            {sumOfAllCoffees > 0 && (
              <div className="bg-darkYellow text-xs text-white rounded-full p-1 align-middle flex items-center justify-center h-6 w-6 text-center font-bold absolute -top-3 -right-3">
                {sumOfAllCoffees}
              </div>
            )}
          </Link>
        </div>
      </header>
    </LayoutSection>
  )
}
