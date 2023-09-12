import { Icon } from "@/components/Icon";
import { LayoutSection } from "@/components/LayoutSection";
import { useCoffee } from "@/hooks/useCoffee";
import { CurrencyDollar, MapPin, SealWarning, Timer } from "@phosphor-icons/react";
import Image from 'next/image';
import { useEffect } from "react";

export default function Success() {
  const { customerData, handleResetCoffeeAmount } = useCoffee()
  const { address, city, email, name, paymentMethod, phone, state } = customerData

  useEffect(() => {
    handleResetCoffeeAmount()
  }, [])

  return (
    <LayoutSection>
      <div className="flex gap-x-[102px]">
        <div>
          <h2 className="font-baloo text-darkYellow text-title-32 font-bold mb-1">
            {`Hey, ${name} . Your order is confirmed`}
          </h2>
          <p className="text-xl text-subtitle">All you have to do now is wait, your coffee will arrive very soon</p>

          <div className="p-10 border mt-10 rounded-tl-md rounded-tr-5xl rounded-bl-5xl rounded-br-md border-purple">
            <div className="flex items-center gap-x-3">
              <Icon
                isFullRounded
                icon={MapPin}
                className="text-defaultBgColor bg-purple p-2"
              />
              <div className="flex-col text-base text-defaultText">
                <p>Deliver at <strong className="capitalize">{address}</strong></p>
                <p className="capitaliz text-sm">{`${city}, ${state}`}</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-8">
              <Icon
                isFullRounded
                icon={Timer}
                className="text-defaultBgColor bg-yellow p-2"
              />
              <div className="flex-col text-base text-defaultText">
                <p>Estimated Time of Arrival</p>
                <strong className="text-sm">35 minutes</strong>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-8">
              <Icon
                isFullRounded
                icon={CurrencyDollar}
                className="text-defaultBgColor bg-darkYellow p-2"
              />
              <div className="flex-col text-base text-defaultText">
                <p>Payment Method</p>
                <strong className="capitalize text-sm">{paymentMethod}</strong>
              </div>
            </div>

            <div className="flex items-center gap-x-3 mt-8">
              <Icon
                isFullRounded
                icon={SealWarning}
                className="text-defaultBgColor bg-darkPurple p-2"
              />
              <div className="flex-col text-base text-defaultText">
                <p>If needed, we will reach out to you trough:</p>
                <p className="text-sm">
                  <span className="font-bold">Phone:</span> {phone} /
                  <span className="font-bold"> E-mail:</span> {email}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src="/delivery-man.svg" width={492} height={293} alt="Delivery man" />
      </div>
    </LayoutSection>
  )
}
