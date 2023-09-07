import data from '../data.json';
import { CoffeeCard } from "./CoffeeCard";
import { LayoutSection } from "./LayoutSection";

export function CoffeList() {
  return (
    <LayoutSection>
      <h2 className='text-title-32 font-baloo text-subtitle mb-14'>Our Coffees</h2>

      <ul className="grid grid-cols-4 gap-x-8 gap-y-10">
        {data.coffees.map(({ id, image, title, labels, description, price, quantity }) => {
          return (
            <CoffeeCard
              key={id}
              imageSrc={image}
              title={title}
              labels={labels}
              description={description}
              price={price}
              quantity={quantity}
            />
          )
        })}
      </ul>
    </LayoutSection>
  )
}
