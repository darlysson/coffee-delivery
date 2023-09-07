import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from './Icon';
import { LayoutSection } from './LayoutSection';

export function Header() {
  return (
    <LayoutSection>
      <header className="flex justify-between items-center py-16 ">
        <Link href="/">
          <Image src='/logo.svg' alt="Coffee Delivery Logo" width={85} height={40} />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-md items-center bg-lightPurple text-darkPurple p-2">
            <MapPin className="text-purple" />

            <span className="text-sm">Lisbon, PT</span>
          </div>

          <Link href="/checkout" className="p-1 bg-lightYellow no-underline rounded-md">
            <Icon icon={ShoppingCartSimple} className="text-darkYellow" size={22} />
          </Link>
        </div>
      </header>
    </LayoutSection>
  )
}
