import { LayoutSection } from "@/components/LayoutSection";
import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import Image from "next/image";

export default function checkout() {
  return (
    <LayoutSection>
      <div className="grid gap-x-8 grid-cols-2">
        <div>
          <h2 className="font-baloo text-subtitle text-lg mb-4">Complete your order</h2>

          <div className="p-10 bg-card rounded-md">
            <div className="flex gap-2 mb-8">
              <MapPin className="text-darkYellow h-6 w-6" />

              <div className="flex-col">
                <h4 className="text-base text-subtitle">Delivery Address</h4>
                <p className="text-sm text-defaultText">Tell us the address where you want to receive your coffee.</p>
              </div>
            </div>

            <form className="grid grid-cols-2 gap-4">
              <label htmlFor="postal-code" className="col-span-1">
                <input className="roundrounded ed col-span-1 w-full p-3 bg-input border border-button text-label" type="number" id="postal-code" placeholder="Código Postal" maxLength={7} />
              </label>

              <label htmlFor="street" className="col-span-2">
                <input className="rounded col-span-2 w-full p-3 bg-input border border-button text-label" type="text" id="street" placeholder="Street" />
              </label>

              <label htmlFor="Number" className="col-span-1">
                <input className="rounded w-full p-3 bg-input border border-button text-label" type="text" id="Number" placeholder="Number" />
              </label>

              <label htmlFor="Complement" className="col-span-1">
                <input className="rounded w-full p-3 bg-input border border-button text-label" type="text" id="Complement" placeholder="Complement" />
              </label>

              <label htmlFor="Neighborhood" className="col-span-1">
                <input className="rounded w-full p-3 bg-input border border-button text-label" type="text" id="Neighborhood" placeholder="Neighborhood" />
              </label>

              <label htmlFor="City" className="col-span-1">
                <input className="rounded w-full p-3 bg-input border border-button text-label" type="text" id="City" placeholder="City" />
              </label>

              {/* <label htmlFor="State" className="col-span-1">
                <input className="rounded w-full p-3 bg-input border border-button text-label" type="text" id="street" placeholder="Street" />
              </label> */}
            </form>
          </div>

          <div className="p-10 bg-card rounded-md mt-3">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2">
                <CurrencyDollar className="text-purple h-6 w-6" />

                <div className="flex-col">
                  <h4 className="text-base text-subtitle">Payment</h4>
                  <p className="text-sm text-defaultText">Choose the payment method</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex bg-button p-4 gap-3 rounded-md">
                  <CreditCard className="text-purple h-4 w-4" />
                  <p className="uppercase text-defaultText text-xs">Credit Card</p>
                </button>

                <button className="flex bg-button p-4 gap-3 rounded-md">
                  <Bank className="text-purple h-4 w-4" />
                  <p className="uppercase text-defaultText text-xs">Debit Card</p>
                </button>

                <button className="flex bg-button p-4 gap-3 rounded-md">
                  <Money className="text-purple h-4 w-4" />
                  <p className="uppercase text-defaultText text-xs">Credit Card</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-baloo text-lg mb-4 text-subtitle">Selected Coffees</h2>

          <div className="p-10 bg-card rounded-tr-3xl rounded-bl-3xl">
            <ul className="flex flex-col">
              <li className="flex gap-5 border-b-2 py-6 first-of-type:pt-0">
                <Image src="/coffees/cuban.svg" width={64} height={64} alt="Cuban Coffee" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <h5 className="text-subtitle">Cuban Coffee</h5>
                    <h4 className="text-defaultText font-bold">€ 4,40</h4>
                  </div>

                  <div className="flex gap-2">
                    <div className="text-purple flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                      <button>
                        <Minus weight="bold" />
                      </button>
                      <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                      <button>
                        <Plus weight="bold" />
                      </button>
                    </div>

                    <button className="text-purple hover:bg-hover flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                      <Trash />
                      <span className="text-xs px-2 text-defaultText uppercase">Remover</span>
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex gap-5 border-b-2 py-6 first-of-type:pt-0">
                <Image src="/coffees/cuban.svg" width={64} height={64} alt="Cuban Coffee" />

                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between">
                    <h5 className="text-subtitle">Cuban Coffee</h5>
                    <h4 className="text-defaultText font-bold">€ 4,40</h4>
                  </div>

                  <div className="flex gap-2">
                    <div className="text-purple flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                      <button>
                        <Minus weight="bold" />
                      </button>
                      <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                      <button>
                        <Plus weight="bold" />
                      </button>
                    </div>

                    <button className="text-purple hover:bg-hover flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                      <Trash />
                      <span className="text-xs px-2 text-defaultText uppercase">Remover</span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="pt-6">
              <div className="flex justify-between">
                <p className="text-sm text-defaultText">Total itens</p>
                <span className="text-defaultText">€ 29,70</span>
              </div>

              <div className="flex justify-between mt-3">
                <p className="text-sm text-defaultText">Delivery</p>
                <span className="text-defaultText">€ 3,50</span>
              </div>

              <div className="flex justify-between mt-3">
                <p className="text-xl font-bold text-subtitle">Total</p>
                <span className="text-xl font-bold text-subtitle">€ 33,20</span>
              </div>
            </div>

            <button type="submit" className="py-3 px-2 rounded-md bg-yellow text-white cursor-pointer w-full font-bold mt-6">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </LayoutSection>
  )
}
