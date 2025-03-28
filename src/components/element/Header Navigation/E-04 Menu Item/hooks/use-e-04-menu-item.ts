'use client'

import { useRef, type RefObject } from 'react'
import { e04MenuItemConfig } from '../e-04-menu-item.config'
import type { E04MenuItemProps } from '../e-04-menu-item.d'

interface UseE04MenuItemProps extends E04MenuItemProps {
  ref?: RefObject<HTMLDivElement>
}

export function useE04MenuItem({ 
  ref,
  format = 'textOnly',
  state = 'default',
  ...props 
}: UseE04MenuItemProps) {
  const menuItemRef = useRef<HTMLDivElement>(null)
  const combinedRef = ref || menuItemRef

  const menuItemStyle = e04MenuItemConfig({
    format,
    state
  })

  return {
    menuItemRef: combinedRef,
    variant: `format-${format} state-${state}`,
    menuItemStyle,
    format,
    state,
    ...props
  }
}
