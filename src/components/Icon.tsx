import { clsx } from 'clsx'
import { ElementType } from 'react'

import { IconProps as PhosporIconProps } from '@phosphor-icons/react'

interface IconProps extends PhosporIconProps {
  text?: string
  icon: ElementType
  isFullRounded?: boolean
}

export function Icon({ text, icon: Icon, className, isFullRounded = false, size = 16 }: IconProps) {
  return (
    <div className="flex items-center gap-x-3">
      <div className={clsx('p-1', isFullRounded ? 'rounded-full' : 'rounded-md', className)}>
        <Icon weight='fill' width={size} height={size} />
      </div>

      {text && <span className='text-base'>{text}</span>}
    </div>
  )
}
