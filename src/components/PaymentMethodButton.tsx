import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ToggleGroupItemProps } from '@radix-ui/react-toggle-group';
import { ElementType } from 'react';

interface PaymentMethodButtonProps extends ToggleGroupItemProps {
  icon: ElementType
  label: string
}

export default function PaymentMethodButton({ icon: Icon, label, value }: PaymentMethodButtonProps) {
  return (
    <ToggleGroup.Item
      className="flex items-center justify-center p-4 gap-3 rounded-md border bg-button data-[state=on]:bg-lightPurple data-[state=on]:border data-[state=on]:border-purple"
      value={value}
      aria-label={label}
    >
      <Icon className="text-purple h-4 w-4" />
      <p className="uppercase text-defaultText text-xs">{label}</p>
    </ToggleGroup.Item>
  )
}
