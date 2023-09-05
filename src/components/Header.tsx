import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';
import Image from "next/image";
import Link from "next/link";
import { LayoutSection } from './LayoutSection';

export function Header() {
  return (
    <LayoutSection>
      <header className="flex justify-between items-center py-16 sticky">
        <Link href="/">
          <Image src='/logo.svg' alt="Coffee Delivery Logo" width={85} height={40} />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-md items-center bg-lightPurple text-darkPurple p-2">
            <MapPin className="text-purple" />

            <span className="text-sm">Lisbon, PT</span>
          </div>

          <Link href="/checkout" className="p-2 bg-lightYellow no-underline rounded-md">
            <ShoppingCartSimple className="text-darkYellow" weight='fill' />
          </Link>
        </div>
      </header>
    </LayoutSection>
  )
}
