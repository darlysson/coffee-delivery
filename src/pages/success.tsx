import { LayoutSection } from "@/components/LayoutSection";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Image from 'next/image';

export default function success() {
  return (
    <LayoutSection>
      <div className="flex gap-x-[102px]">
        <div>
          <h2 className="font-baloo text-darkYellow text-title-32 font-bold mb-1">Uhuul! Your order is confirmed.</h2>
          <p className="text-xl text-subtitle">All you have to do now is wait, your coffee will arrive very soon</p>

          <div className="p-10 border mt-10 rounded-tl-md rounded-tr-5xl rounded-bl-5xl rounded-br-md border-purple">
            <div className="flex items-center gap-x-3">
              <div className="text-defaultBgColor bg-purple rounded-full h-8 w-8 p-2">
                <MapPin weight="fill" />
              </div>

              <div className="flex-col text-base text-defaultText">
                <p>Deliver at <strong>102, Prince Charles Avenue</strong></p>
                <p>Northumberland, London</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-8">
              <div className="text-defaultBgColor bg-yellow rounded-full h-8 w-8 p-2">
                <Timer weight="fill" />
              </div>

              <div className="flex-col text-base text-defaultText">
                <p>Estimated Time of Arrival</p>
                <strong>Northumberland, London</strong>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-8">
              <div className="text-defaultBgColor bg-darkYellow rounded-full h-8 w-8 p-2">
                <CurrencyDollar weight="fill" />
              </div>

              <div className="flex-col text-base text-defaultText">
                <p>Payment Method</p>
                <strong>Credit Card</strong>
              </div>
            </div>
          </div>
        </div>

        <Image src="/delivery-man.svg" width={492} height={293} alt="Delivery man" />
      </div>
    </LayoutSection>
  )
}
