import { CoffeeCard } from "@/components/CoffeeCard";
import { Hero } from "@/components/Hero";
import { LayoutSection } from "@/components/LayoutSection";
import { useCoffee } from "@/hooks/useCoffee";

export default function Home() {
  const { coffees } = useCoffee()

  return (
    <>
      <Hero />

      <LayoutSection>
        <h2 className='text-title-32 font-baloo text-subtitle mb-14'>Our Coffees</h2>

        <ul className="grid grid-cols-4 gap-x-8 gap-y-10">
          {coffees.map((coffee) => <CoffeeCard key={coffee.id} {...coffee} />)}
        </ul>
      </LayoutSection>
    </>
  )
}
