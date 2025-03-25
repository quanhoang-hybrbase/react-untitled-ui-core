'use client'

import { useRef, type RefObject } from 'react'
import { type E04DestructiveButtonProps } from '../e-04-destructive-button.d'
import { e04DestructiveButtonConfig } from '../e-04-destructive-button.config'

interface UseE04DestructiveButtonProps extends Omit<E04DestructiveButtonProps, 'ref'> {
  ref?: RefObject<HTMLButtonElement> | null;
}

interface UseE04DestructiveButtonReturn {
  buttonRef: RefObject<HTMLButtonElement>
  variant: string
  buttonStyles: ReturnType<typeof e04DestructiveButtonConfig>
}

/**
 * Custom hook for E-04 Destructive Button component
 * Handles ref forwarding, default props, and styling generation
 */
export function useE04DestructiveButton({
  ref,
  format = 'F-01 Primary',
  state = 'S-00 Default',
  size = 'M-02 Medium',
  iconPosition = 'None',
}: UseE04DestructiveButtonProps): UseE04DestructiveButtonReturn {
  // Create a ref if one is not provided
  const internalRef = useRef<HTMLButtonElement>(null)
  
  // Use the provided ref or fall back to the internal ref
  // Using type assertion to satisfy TypeScript
  const buttonRef = (ref || internalRef) as RefObject<HTMLButtonElement>
  
  // Generate variant string for data-variant attribute
  const variant = `format=${format} state=${state} size=${size} iconPosition=${iconPosition}`

  // Generate styles using Tailwind Variants
  const buttonStyles = e04DestructiveButtonConfig({
    format,
    state,
    size,
    iconPosition
  })

  return {
    buttonRef,
    variant,
    buttonStyles
  }
}
