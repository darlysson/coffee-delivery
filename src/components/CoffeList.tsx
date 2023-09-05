import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import Image from "next/image";
import { LayoutSection } from "./LayoutSection";

export function CoffeList() {
  return (
    <LayoutSection>
      <h2 className='text-title-32 font-baloo text-subtitle mb-14'>Our Coffees</h2>

      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 min-h-[19rem]">
          <Image src="/coffees/cuban.svg" alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

          <ul className="flex items-center justify-center gap-2">
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Special</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Alcoolico</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Gelado</span>
            </li>
          </ul>

          <h3 className="font-baloo text-xl mt-4">Cubano</h3>

          <p className="font-roboto text-sm text-label mt-2">Drink gelado de café expresso com rum, creme de leite e hortelã</p>

          <div className="flex items-center mt-8">
            <p className="text-defaultText mr-auto">R$ <span className="font-baloo text-2xl te">9,90</span></p>

            <div className="flex gap-2">
              <div className="flex items-center p-2 gap-1 bg-button rounded-md">
                <button className="text-purple"><Minus weight="bold" /></button>
                <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                <button className="text-purple"><Plus weight="bold" /></button>
              </div>

              <button className="bg-darkPurple p-2 rounded-md cursor-pointer">
                <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 min-h-[19rem]">
          <Image src="/coffees/cuban.svg" alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

          <ul className="flex items-center justify-center gap-2">
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Special</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Alcoolico</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Gelado</span>
            </li>
          </ul>

          <h3 className="font-baloo text-xl mt-4">Cubano</h3>

          <p className="font-roboto text-sm text-label mt-2">Drink gelado de café expresso com rum, creme de leite e hortelã</p>

          <div className="flex items-center mt-8">
            <p className="text-defaultText mr-auto">R$ <span className="font-baloo text-2xl te">9,90</span></p>

            <div className="flex gap-2">
              <div className="flex items-center p-2 gap-1 bg-button rounded-md">
                <button className="text-purple"><Minus weight="bold" /></button>
                <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                <button className="text-purple"><Plus weight="bold" /></button>
              </div>

              <button className="bg-darkPurple p-2 rounded-md cursor-pointer">
                <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 min-h-[19rem]">
          <Image src="/coffees/cuban.svg" alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

          <ul className="flex items-center justify-center gap-2">
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Special</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Alcoolico</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Gelado</span>
            </li>
          </ul>

          <h3 className="font-baloo text-xl mt-4">Cubano</h3>

          <p className="font-roboto text-sm text-label mt-2">Drink gelado de café expresso com rum, creme de leite e hortelã</p>

          <div className="flex items-center mt-8">
            <p className="text-defaultText mr-auto">R$ <span className="font-baloo text-2xl te">9,90</span></p>

            <div className="flex gap-2">
              <div className="flex items-center p-2 gap-1 bg-button rounded-md">
                <button className="text-purple"><Minus weight="bold" /></button>
                <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                <button className="text-purple"><Plus weight="bold" /></button>
              </div>

              <button className="bg-darkPurple p-2 rounded-md cursor-pointer">
                <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 min-h-[19rem]">
          <Image src="/coffees/cuban.svg" alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

          <ul className="flex items-center justify-center gap-2">
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Special</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Alcoolico</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Gelado</span>
            </li>
          </ul>

          <h3 className="font-baloo text-xl mt-4">Cubano</h3>

          <p className="font-roboto text-sm text-label mt-2">Drink gelado de café expresso com rum, creme de leite e hortelã</p>

          <div className="flex items-center mt-8">
            <p className="text-defaultText mr-auto">R$ <span className="font-baloo text-2xl te">9,90</span></p>

            <div className="flex gap-2">
              <div className="flex items-center p-2 gap-1 bg-button rounded-md">
                <button className="text-purple"><Minus weight="bold" /></button>
                <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                <button className="text-purple"><Plus weight="bold" /></button>
              </div>

              <button className="bg-darkPurple p-2 rounded-md cursor-pointer">
                <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center bg-card rounded-tr-3xl rounded-bl-3xl px-6 pb-5 min-h-[19rem]">
          <Image src="/coffees/cuban.svg" alt="Cuban coffee" width={150} height={150} className="relative -top-6 mx-auto" />

          <ul className="flex items-center justify-center gap-2">
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Special</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Alcoolico</span>
            </li>
            <li className="bg-lightYellow text-darkYellow px-2 py-1 rounded-full font-bold text-sm">
              <span>Gelado</span>
            </li>
          </ul>

          <h3 className="font-baloo text-xl mt-4">Cubano</h3>

          <p className="font-roboto text-sm text-label mt-2">Drink gelado de café expresso com rum, creme de leite e hortelã</p>

          <div className="flex items-center mt-8">
            <p className="text-defaultText mr-auto">R$ <span className="font-baloo text-2xl te">9,90</span></p>

            <div className="flex gap-2">
              <div className="flex items-center p-2 gap-1 bg-button rounded-md">
                <button className="text-purple"><Minus weight="bold" /></button>
                <span className="text-base font-roboto px-2 text-defaultText font-semibold">1</span>
                <button className="text-purple"><Plus weight="bold" /></button>
              </div>

              <button className="bg-darkPurple p-2 rounded-md cursor-pointer">
                <ShoppingCartSimple size={22} weight="fill" color="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  )
}
