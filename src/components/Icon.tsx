import { Icon } from '@phosphor-icons/react'

interface IconProps {
  title?: string
  icon: Icon
  bgColor?: string
  hasLabel?: boolean
  size?: number
}

export function Icon({ title, icon: Icon, bgColor, hasLabel = true, size }: IconProps) {
  const hasBgColor = bgColor !== undefined ? bgColor : ''

  return (
    <div className="flex items-center gap-x-3">
      <div className={`${hasBgColor} text-defaultBgColor rounded-full h-8 w-8 p-2`}>
        <Icon weight='fill' size={size} />
      </div>

      {hasLabel && <span className='text-base'>{title}</span>}
    </div>
  )
}
