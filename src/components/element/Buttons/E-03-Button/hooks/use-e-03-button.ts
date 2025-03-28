'use client'

import { useRef, useCallback } from 'react'
import React from 'react'
import { Circle } from 'lucide-react'
import { e03ButtonConfig } from '../e-03-button.config'
import type { E03ButtonProps } from '../e-03-button.d'

interface UseE03ButtonProps extends E03ButtonProps {
  ref?: React.Ref<HTMLButtonElement>
}

export function useE03Button({
  ref,
  format = 'primary',
  theme = 'brand',
  size = 'small',
  state = 'default',
  iconPosition = 'none',
  label = 'Button',
  icon = React.createElement(Circle),
  ...props
}: UseE03ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleButtonRef = useCallback(
    (element: HTMLButtonElement) => {
      buttonRef.current = element

      if (typeof ref === 'function') {
        ref(element)
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLButtonElement | null>).current = element
      }
    },
    [ref]
  )

  // Format variant string for data-variant attribute
  const getVariantString = useCallback(() => {
    const variants = []
    
    if (format) variants.push(`format=${format}`)
    if (theme) variants.push(`theme=${theme}`)
    if (size) variants.push(`size=${size}`)
    if (state) variants.push(`state=${state}`)
    if (iconPosition) variants.push(`iconPosition=${iconPosition}`)
    
    return variants.join(', ')
  }, [format, theme, size, state, iconPosition])

  const buttonStyle = e03ButtonConfig({
    format,
    theme,
    size,
    state,
    iconPosition
  })

  return {
    buttonRef: handleButtonRef,
    variant: getVariantString(),
    buttonStyle,
    format,
    theme,
    size,
    state,
    iconPosition,
    label,
    icon,
    ...props
  }
}
