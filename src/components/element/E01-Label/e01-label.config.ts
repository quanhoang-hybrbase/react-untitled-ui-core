/**
 * Configuration for the Label component using Tailwind Variants
 * Version: 0.1.0
 */

import { tv } from 'tailwind-variants'

export const labelVariants = tv({
  base: [
    'text-black', // Using Tailwind's text-black instead of arbitrary color
    'font-semibold', // Semi-bold font weight across all variants
    'leading-relaxed', // 150% line height across all variants
    'transition-colors',
    'min-h-11', // Using Tailwind's min-h-11 (44px) for touch target
    'min-w-11', // Using Tailwind's min-w-11 (44px) for touch target
    'flex',
    'items-center',
  ],
  variants: {
    size: {
      extraSmall: 'text-xs',
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
      extraLarge: 'text-xl',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    truncate: {
      true: 'truncate',
    },
    multiline: {
      true: 'whitespace-normal',
      false: 'whitespace-nowrap',
    },
    srOnly: {
      true: 'sr-only',
    },
  },
  defaultVariants: {
    size: 'medium',
    disabled: false,
    truncate: false,
    multiline: false,
    srOnly: false,
  },
})
