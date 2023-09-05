import { ReactNode } from 'react'

interface LayoutSectionProps {
  children: ReactNode
}

export function LayoutSection({ children }: LayoutSectionProps) {
  return (
    <section className='max-w-[1440] mx-auto px-40'>
      {children}
    </section>
  )
}
