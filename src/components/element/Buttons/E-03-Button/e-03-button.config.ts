import { tv, type VariantProps } from 'tailwind-variants'

/**
 * E-03 Button Tailwind Variants Configuration
 * 
 * Maps design tokens from Figma to Tailwind CSS classes
 * Figma: https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/
 */
export const e03ButtonConfig = tv({
  slots: {
    // Base: rounded-lg = 8px border radius from Figma
    base: 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    icon: 'flex items-center justify-center',
    // Font weight 600 (semibold) from Figma typography
    label: 'font-semibold truncate'
  },
  variants: {
    format: {
      // Primary: Solid background with white text
      // Figma color: #7F56D9 (purple-600)
      primary: {
        base: 'bg-purple-600 text-white hover:bg-purple-700 focus-visible:ring-purple-500',
        icon: 'text-white',
        label: 'text-white'
      },
      // Secondary: White background with colored border
      // Figma border: 1px solid #7F56D9 (purple-600)
      secondary: {
        base: 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 focus-visible:ring-purple-500',
        icon: 'text-purple-600',
        label: 'text-purple-600'
      },
      // Tertiary: No background or border, just text color
      // Figma: Transparent background with #7F56D9 text
      tertiary: {
        base: 'bg-transparent text-purple-600 hover:bg-purple-50 focus-visible:ring-purple-500',
        icon: 'text-purple-600',
        label: 'text-purple-600'
      },
      // Link: Text-only appearance with underline on hover
      // Figma: No padding, text only with hover underline
      link: {
        base: 'bg-transparent text-purple-600 hover:underline focus-visible:ring-purple-500 p-0',
        icon: 'text-purple-600',
        label: 'text-purple-600'
      }
    },
    theme: {
      // Brand theme uses purple colors (default)
      brand: {},
      // Grey theme uses grey colors (implemented in compound variants)
      grey: {}
    },
    size: {
      // Small: 
      // Figma padding: 8px 14px (py-2 px-3.5)
      // Figma gap: 8px (gap-2)
      // Figma font size: 14px (text-sm)
      // Figma icon size: 16px × 16px (h-4 w-4)
      small: {
        base: 'py-2 px-3.5 text-sm gap-2',
        icon: 'h-4 w-4',
        label: 'text-sm'
      },
      // Medium:
      // Figma padding: 10px 18px (py-2.5 px-4.5)
      // Figma gap: 8px (gap-2)
      // Figma font size: 16px (text-base)
      // Figma icon size: 20px × 20px (h-5 w-5)
      medium: {
        base: 'py-2.5 px-4.5 text-base gap-2',
        icon: 'h-5 w-5',
        label: 'text-base'
      },
      // Large:
      // Figma padding: 12px 20px (py-3 px-5)
      // Figma gap: 8px (gap-2)
      // Figma font size: 18px (text-lg)
      // Figma icon size: 24px × 24px (h-6 w-6)
      large: {
        base: 'py-3 px-5 text-lg gap-2',
        icon: 'h-6 w-6',
        label: 'text-lg'
      },
      // Extra Large:
      // Figma padding: 14px 24px (py-3.5 px-6)
      // Figma gap: 10px (gap-2.5)
      // Figma font size: 20px (text-xl)
      // Figma icon size: 28px × 28px (h-7 w-7)
      'extra-large': {
        base: 'py-3.5 px-6 text-xl gap-2.5',
        icon: 'h-7 w-7',
        label: 'text-xl'
      }
    },
    state: {
      // Default state has no additional styling
      default: {},
      // Disabled: 
      // Figma: 50% opacity and not-allowed cursor
      disabled: {
        base: 'opacity-50 cursor-not-allowed',
        icon: 'opacity-50',
        label: 'opacity-50'
      }
    },
    iconPosition: {
      // No icon 
      none: {},
      // Icon before text
      leading: {},
      // Icon after text
      trailing: {},
      // Only icon, no visible text (accessible via sr-only)
      // Figma: Square aspect ratio with centered icon
      only: {
        base: 'p-2.5',
        icon: '',
        label: 'sr-only' // Screen reader only for accessibility
      }
    }
  },
  compoundVariants: [
    // Icon-only buttons with different sizes
    // Figma: Icon-only buttons use equal padding on all sides
    {
      iconPosition: 'only',
      size: 'small',
      class: {
        // Figma padding: 8px (p-2)
        // Figma icon size: 20px (h-5 w-5)
        base: 'p-2',
        icon: 'h-5 w-5'
      }
    },
    {
      iconPosition: 'only',
      size: 'medium',
      class: {
        // Figma padding: 10px (p-2.5)
        // Figma icon size: 24px (h-6 w-6)
        base: 'p-2.5',
        icon: 'h-6 w-6'
      }
    },
    {
      iconPosition: 'only',
      size: 'large',
      class: {
        // Figma padding: 12px (p-3)
        // Figma icon size: 28px (h-7 w-7)
        base: 'p-3',
        icon: 'h-7 w-7'
      }
    },
    {
      iconPosition: 'only',
      size: 'extra-large',
      class: {
        // Figma padding: 14px (p-3.5)
        // Figma icon size: 32px (h-8 w-8)
        base: 'p-3.5',
        icon: 'h-8 w-8'
      }
    },
    // Grey theme variants
    // Figma: Grey theme colors for each format type
    {
      theme: 'grey',
      format: 'primary',
      class: {
        // Figma color: #252B37 (gray-800)
        base: 'bg-gray-800 text-white hover:bg-gray-900 focus-visible:ring-gray-500',
        icon: 'text-white',
        label: 'text-white'
      }
    },
    {
      theme: 'grey',
      format: 'secondary',
      class: {
        // Figma border: 1px solid #252B37 (gray-800)
        base: 'bg-white text-gray-800 border border-gray-800 hover:bg-gray-50 focus-visible:ring-gray-500',
        icon: 'text-gray-800',
        label: 'text-gray-800'
      }
    },
    {
      theme: 'grey',
      format: 'tertiary',
      class: {
        // Figma: Transparent with #252B37 text
        base: 'bg-transparent text-gray-800 hover:bg-gray-50 focus-visible:ring-gray-500',
        icon: 'text-gray-800',
        label: 'text-gray-800'
      }
    },
    {
      theme: 'grey',
      format: 'link',
      class: {
        // Figma: No padding, text only with hover underline
        base: 'bg-transparent text-gray-800 hover:underline focus-visible:ring-gray-500 p-0',
        icon: 'text-gray-800',
        label: 'text-gray-800'
      }
    }
  ],
  defaultVariants: {
    format: 'primary',
    theme: 'brand',
    size: 'small',
    state: 'default',
    iconPosition: 'none'
  }
})

export type E03ButtonVariantProps = VariantProps<typeof e03ButtonConfig>
