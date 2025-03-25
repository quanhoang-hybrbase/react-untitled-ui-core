'use client'

import React, { forwardRef, type ForwardedRef } from 'react'
import { clsx } from 'clsx'
import * as LucideIcons from 'lucide-react'
import { useE04DestructiveButton } from './hooks/use-e-04-destructive-button'
import type { E04DestructiveButtonProps } from './e-04-destructive-button.d'

/**
 * E-04 Destructive Button is a type of action button used to perform critical or irreversible actions,
 * typically associated with deletion, removal, or significant changes that may impact data or user settings.
 * It is designed to draw attention and caution the user before proceeding.
 */
export const E04DestructiveButton = forwardRef<
  HTMLButtonElement,
  E04DestructiveButtonProps
>(function E04DestructiveButton(
  {
    className,
    label = 'Button',
    icon,
    iconPosition = 'None',
    type = 'button',
    ...props
  }: E04DestructiveButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  // Use the custom hook to handle styling and ref
  const { buttonRef, variant, buttonStyles } = useE04DestructiveButton({
    ref: ref as React.RefObject<HTMLButtonElement> | null,
    iconPosition,
    ...props
  })

  // Extract icon name from the icon prop (e.g., "E-10 Trash2" -> "Trash2")
  const iconName = icon?.split(' ').pop() || ''
  
  // Get the icon component from Lucide icons if it exists
  // We need to use type assertion and check for existence to handle the dynamic lookup
  const IconComponent = iconName 
    ? (LucideIcons as unknown as Record<string, React.ComponentType>)[iconName] 
    : null

  return (
    <button
      data-comp="e-04-destructive-button"
      data-variant={variant}
      ref={buttonRef}
      type={type}
      className={clsx(buttonStyles.base(), className)}
      aria-label={label}
      {...props}
    >
      {iconPosition !== 'Only' && (
        <span data-slot="label" className={buttonStyles.label()}>{label}</span>
      )}
      
      {icon && iconName && IconComponent && iconPosition !== 'None' && (
        <span data-slot="icon" className={buttonStyles.icon()}>
          <IconComponent />
        </span>
      )}
    </button>
  )
})

// Set display name for debugging
E04DestructiveButton.displayName = 'E04DestructiveButton'

// Export the types explicitly instead of using export *
export type { 
  E04DestructiveButtonProps,
  E04DestructiveButtonVariantProps,
  E04DestructiveButtonExternalProps,
  E04DestructiveButtonDataProps
} from './e-04-destructive-button.d'
