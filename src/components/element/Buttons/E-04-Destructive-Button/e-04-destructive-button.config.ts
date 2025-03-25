import { tv } from 'tailwind-variants'

const e04DestructiveButtonConfig = tv({
  slots: {
    // Figma: layout mode="row", justifyContent="center", alignItems="center", gap="8px"
    base: 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors',
    // Figma: fontWeight=600 (semibold)
    label: 'font-semibold',
    // Figma: For icon containers
    icon: 'flex items-center justify-center'
  },
  variants: {
    format: {
      // Figma: fill="#DC2626" (red-600), text="#FFFFFF" (white)
      'F-01 Primary': {
        base: 'bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
      },
      // Figma: fill="#FEF2F2" (red-50), text="#B91C1C" (red-700), border="#FECACA" (red-200)
      'F-02 Secondary': {
        base: 'bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
      },
      // Figma: fill="transparent", text="#DC2626" (red-600)
      'F-03 Tertiary': {
        base: 'bg-transparent text-red-600 hover:bg-red-50 focus:ring-2 focus:ring-red-600 focus:ring-offset-2'
      },
      // Figma: fill="transparent", text="#DC2626" (red-600), no padding
      'F-04 Link': {
        base: 'bg-transparent text-red-600 hover:underline focus:ring-2 focus:ring-red-600 focus:ring-offset-2 p-0'
      }
    },
    state: {
      // Figma: Default state
      'S-00 Default': {
        base: ''
      },
      // Figma: Hover states with shadow and darker colors
      'S-01 Hover': {
        'base': 'shadow-sm',
        // Figma: fill="#B91C1C" (red-700)
        'F-01 Primary': {
          base: 'bg-red-700'
        },
        // Figma: fill="#FEE2E2" (red-100)
        'F-02 Secondary': {
          base: 'bg-red-100'
        },
        // Figma: fill="#FEF2F2" (red-50)
        'F-03 Tertiary': {
          base: 'bg-red-50'
        },
        // Figma: underline decoration
        'F-04 Link': {
          base: 'underline'
        }
      },
      // Figma: Focus state with ring
      'S-02 Focused': {
        base: 'ring-2 ring-red-600 ring-offset-2'
      },
      // Figma: Disabled state with reduced opacity
      'S-03 Disabled': {
        base: 'opacity-50 cursor-not-allowed'
      }
    },
    size: {
      // Figma: padding="8px 14px" (py-2 px-3.5), fontSize=14px (text-sm)
      'M-01 Small': {
        base: 'text-sm py-2 px-3',
        icon: 'h-4 w-4'
      },
      // Figma: padding="10px 18px" (py-2.5 px-4.5), fontSize=16px (text-base)
      'M-02 Medium': {
        base: 'text-base py-2.5 px-4',
        icon: 'h-5 w-5'
      },
      // Figma: padding="12px 20px" (py-3 px-5), fontSize=16px (text-base)
      'M-03 Large': {
        base: 'text-base py-3 px-5',
        icon: 'h-5 w-5'
      },
      // Figma: padding="14px 24px" (py-3.5 px-6), fontSize=18px (text-lg)
      'M-04 Extra Large': {
        base: 'text-lg py-3.5 px-6',
        icon: 'h-6 w-6'
      }
    },
    iconPosition: {
      // Figma: No icon
      'None': {
        base: '',
        icon: 'hidden'
      },
      // Figma: Icon before label
      'Leading': {
        base: ''
      },
      // Figma: Icon after label
      'Trailing': {
        base: 'flex-row-reverse'
      },
      // Figma: Only icon, no label
      'Only': {
        base: '',
        label: 'hidden',
        icon: 'block'
      }
    }
  },
  compoundVariants: [
    // Size + Format combinations for icon-only buttons
    // Figma: Square padding for icon-only buttons
    {
      iconPosition: 'Only',
      size: 'M-01 Small',
      class: {
        base: 'p-2'
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-02 Medium',
      class: {
        base: 'p-2.5'
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-03 Large',
      class: {
        base: 'p-3'
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-04 Extra Large',
      class: {
        base: 'p-3.5'
      }
    }
  ],
  defaultVariants: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None'
  }
})

export { e04DestructiveButtonConfig }
