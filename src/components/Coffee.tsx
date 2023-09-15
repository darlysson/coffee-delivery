import { CoffeeProps } from "@/@types";
import { useCoffee } from "@/hooks/useCoffee";
import { formatPrice } from "@/utils/priceFormatter";
import { Minus, Plus } from "@phosphor-icons/react";
import Image from 'next/image';

export function Coffee({ id, title, image, price, labels, description, quantity }: CoffeeProps) {
  const { handleAddOrRemoveCoffee } = useCoffee()

  return (
    <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 relative min-h-[24rem]">
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
          <span className="font-baloo text-2xl">{formatPrice(price)}</span>
        </p>

        <div className="flex items-center p-2 gap-1 bg-button rounded-md">
          <button
            className="text-purple disabled:opacity-60 disabled:text-gray-400 disabled:cursor-not-allowed"
            onClick={() => handleAddOrRemoveCoffee(id, 'remove')} disabled={quantity === 0}
          >
            <Minus weight="bold" />
          </button>
          <span className="text-base font-roboto px-2 text-defaultText font-semibold">
            {quantity}
          </span>
          <button className="text-purple" onClick={() => handleAddOrRemoveCoffee(id, 'add')}>
            <Plus weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}
