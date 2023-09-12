import { Input } from "@/components/Input";
import { LayoutSection } from "@/components/LayoutSection";
import PaymentMethodButton from "@/components/PaymentMethodButton";
import { useCoffee } from "@/hooks/useCoffee";
import { formatPrice } from "@/utils/priceFormatter";
import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from '@phosphor-icons/react';
import { ToggleGroup } from '@radix-ui/react-toggle-group';
import clsx from "clsx";
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Checkout() {
  const [paymentValue, setPaymentValue] = useState('credit')
  const { selectedCoffees, handleRemoveCartCoffee, handleAddCoffee, handleRemoveCoffee, handleCustomerData } = useCoffee()
  const { register, handleSubmit, formState: { errors } } = useForm<Input>()
  const router = useRouter()

  const totalAmount = selectedCoffees.reduce((acc, coffee) => acc + coffee.price, 0)
  const hasCoffee = selectedCoffees.length > 0
  let deliveryAmount = 3.50

  const onSubmit: SubmitHandler<Input> = (data) => {
    const customerData = {
      ...data,
      paymentMethod: paymentValue
    }

    handleCustomerData(customerData)

    router.push('/success')
  }

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

            <form className="grid grid-cols-2 gap-4" id="submitCoffee" onSubmit={handleSubmit(onSubmit)}>
              <Input
                required
                name="name"
                span={2}
                placeholder="John"
                register={register}
                errors={errors}
              />

              <Input
                required
                name="address"
                span={2}
                placeholder="7 St Mark's Street"
                register={register}
                errors={errors}
              />

              <Input
                required
                name="city"
                span={1}
                placeholder="Wembley"
                register={register}
                errors={errors}
              />

              <Input
                required
                name="state"
                span={1}
                placeholder="Greater London"
                register={register}
                errors={errors}
              />

              <Input
                required
                name="phone"
                span={1}
                placeholder="933 114 980"
                register={register}
                errors={errors}
              />

              <Input
                name="email"
                span={1}
                placeholder="john@example.com"
                register={register}
                errors={errors}
              />
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

              <ToggleGroup
                type="single"
                value={paymentValue}
                className="flex gap-3"
                onValueChange={(value) => { if (value) setPaymentValue(value) }}
              >
                <PaymentMethodButton icon={CreditCard} label="Credit Card" value="credit" />
                <PaymentMethodButton icon={Bank} label="Debit Card" value="debit" />
                <PaymentMethodButton icon={Money} label="Money" value="money" />
              </ToggleGroup>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-baloo text-lg mb-4 text-subtitle">Selected Coffees</h2>

          <div className="p-10 bg-card rounded-tr-3xl rounded-bl-3xl">
            {hasCoffee ? (
              <ul className="flex flex-col">
                {selectedCoffees.map((coffee) => {
                  return (
                    <li key={coffee.id} className="flex gap-5 border-b-2 py-6 first-of-type:pt-0">
                      <Image src={coffee.image} width={64} height={64} alt="Cuban Coffee" />

                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-between">
                          <h5 className="text-subtitle">{coffee.title}</h5>
                          <h4 className="text-defaultText font-bold">
                            {formatPrice(coffee.price)}
                          </h4>
                        </div>

                        <div className="flex gap-2">
                          <div className="text-purple flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                            <button onClick={() => handleRemoveCoffee(coffee.id)}>
                              <Minus weight="bold" />
                            </button>
                            <span className="text-base font-roboto px-2 text-defaultText font-semibold">
                              {coffee.quantity}
                            </span>
                            <button onClick={() => handleAddCoffee(coffee.id)}>
                              <Plus weight="bold" />
                            </button>
                          </div>

                          <button className="text-purple hover:bg-hover flex items-center justify-center p-2 gap-1 bg-button rounded-md">
                            <Trash />
                            <span className="text-xs px-2 text-defaultText uppercase" onClick={() => handleRemoveCartCoffee(coffee.id)}>Remover</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className="text-center py-8">
                <h2 className="font-baloo ">You have not seleted any coffee.</h2>
                <Link href="/" className="font-xs text-sky-700 underline">Back to the store</Link>
              </div>
            )}

            <div className="pt-6">
              <div className="flex justify-between">
                <p className="text-sm text-defaultText">Total itens</p>
                <span className="text-defaultText">
                  {formatPrice(totalAmount)}
                </span>
              </div>

              {hasCoffee && (
                <div className="flex justify-between mt-3">
                  <p className="text-sm text-defaultText">Delivery</p>
                  <span className="text-defaultText">{formatPrice(deliveryAmount)}</span>
                </div>
              )}

              <div className="flex justify-between mt-3">
                <p className="text-xl font-bold text-subtitle">Total</p>
                <span className="text-xl font-bold text-subtitle">
                  {formatPrice(hasCoffee ? totalAmount + deliveryAmount : 0)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              form="submitCoffee"
              onClick={() => handleSubmit(onSubmit)}
              className={clsx("block text-center py-3 px-2 rounded-md bg-yellow text-white cursor-pointer w-full font-bold mt-6", !hasCoffee && 'opacity-70 cursor-not-allowed')}
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </LayoutSection>
  )
}
