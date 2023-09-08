import { CoffeeProps, useCoffee } from "@/pages/_app";
import { formatPrice } from "@/utils/priceFormatter";
import { Minus, Plus } from "@phosphor-icons/react";
import Image from 'next/image';
import { useRef } from "react";

export function CoffeeCard({ title, image, price, labels, description, quantity, coffeeIndex }: CoffeeProps & { coffeeIndex: number }) {
  const cardRef = useRef(null)
  const { handleAddCoffee } = useCoffee()

  return (
    <div ref={cardRef} className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 relative min-h-[24rem]">
      <Image src={image} alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

      <ul className="flex items-center justify-center gap-2">
        {labels.map(label => (
          <li key={label} className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <h3 className="font-baloo text-xl mt-4">{title}</h3>

      <p className="font-roboto text-sm text-label mt-2">{description}</p>

      <div className="flex items-center mt-8 absolute bottom-6 left-0 right-0 px-6">
        <p className="text-defaultText mr-auto">
          <span className="font-baloo text-2xl te">{formatPrice(price)}</span>
        </p>

        <div className="flex items-center p-2 gap-1 bg-button rounded-md">
          <button className="text-purple">
            <Minus weight="bold" />
          </button>
          <span className="text-base font-roboto px-2 text-defaultText font-semibold">
            {quantity}
          </span>
          <button className="text-purple" onClick={() => handleAddCoffee(cardRef.current, coffeeIndex)}>
            <Plus weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
