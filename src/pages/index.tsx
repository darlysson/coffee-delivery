import { CoffeeCard } from "@/components/CoffeeCard";
import { Hero } from "@/components/Hero";
import { useCoffee } from "@/hooks/useCoffee";

export default function Home() {
  const { coffees } = useCoffee()

  return (
    <>
      <Hero />

      <section className='container mx-auto px-4 pt-8 lg:pt-0'>
        <h2 className='text-xl lg:text-title-32 font-baloo text-subtitle mb-14'>Our Coffees</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {coffees.map((coffee) => <CoffeeCard key={coffee.id} {...coffee} />)}
        </ul>
      </section>
    </>
  )
}
