# E-03 Button

## Component Purpose
A Button is an interactive UI element that allows users to trigger actions or navigate within an interface.

## Props Definition

### Variant Props (🎨)
```ts
interface VariantProps {
  format: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  theme: 'T-01 Brand' | 'T-02 Grey';
  size: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}
```

### External Props (⚙️)
```ts
interface ExternalProps {
  iconPosition: 'None' | 'Leading' | 'Trailing' | 'Only';
}
```

### Data Props (📦)
```ts
interface DataProps {
  label: string;
  icon: Icon; // from lucide-react
}
```

## Component Folder Structure
```
components/
└── element/
    └── Buttons/
        └── E-03-Button/
            ├── parts/
            ├── tests/
            ├── hooks/
            │   └── use-e-03-button.ts
            ├── e-03-button.d.ts
            ├── e-03-button.config.ts
            ├── e-03-button.mock.ts
            ├── README.md
            └── index.tsx
```

## Tailwind Variant Styling Configuration

Based on the Figma API analysis, the button component has various variants that affect its styling. Here's how I would configure the Tailwind Variants using the slots concept:

```ts
// e-03-button.config.ts
import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  slots: {
    base: [
      'flex items-center justify-center font-semibold transition-colors rounded-lg focus:outline-none focus-visible:ring-2',
    ],
    icon: 'flex-shrink-0',
    label: 'leading-normal',
  },
  variants: {
    format: {
      'F-01 Primary': {
        base: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
      },
      'F-02 Secondary': {
        base: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500',
      },
      'F-03 Tertiary': {
        base: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500',
      },
      'F-04 Link': {
        base: 'bg-transparent text-primary-600 hover:text-primary-700 underline focus-visible:ring-primary-500 p-0',
      },
    },
    state: {
      'S-00 Default': {},
      'S-01 Hover': {},
      'S-02 Focused': {
        base: 'ring-2',
      },
      'S-03 Disabled': {
        base: 'opacity-50 cursor-not-allowed',
      },
    },
    theme: {
      'T-01 Brand': {},
      'T-02 Grey': {
        base: 'bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500',
      },
    },
    size: {
      'M-01 Small': {
        base: 'text-sm py-2 px-3.5 gap-1.5',
        icon: 'h-4 w-4',
      },
      'M-02 Medium': {
        base: 'text-base py-2.5 px-4 gap-2',
        icon: 'h-5 w-5',
      },
      'M-03 Large': {
        base: 'text-lg py-3 px-5 gap-2.5',
        icon: 'h-6 w-6',
      },
      'M-04 Extra Large': {
        base: 'text-xl py-4 px-6 gap-3',
        icon: 'h-7 w-7',
      },
    },
    iconPosition: {
      'None': {},
      'Leading': {
        base: 'flex-row',
      },
      'Trailing': {
        base: 'flex-row-reverse',
      },
      'Only': {
        base: 'p-2.5',
      }
    }
  },
  compoundVariants: [
    {
      iconPosition: 'Only',
      size: 'M-01 Small',
      class: {
        base: 'p-2',
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-02 Medium',
      class: {
        base: 'p-2.5',
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-03 Large',
      class: {
        base: 'p-3',
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-04 Extra Large',
      class: {
        base: 'p-4',
      }
    },
    {
      format: 'F-01 Primary',
      theme: 'T-02 Grey',
      class: {
        base: 'bg-gray-600 hover:bg-gray-700',
      }
    },
  ],
  defaultVariants: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    theme: 'T-01 Brand',
    size: 'M-02 Medium',
    iconPosition: 'None',
  }
});
```

## Component JSX Structure

Based on the Figma API analysis and the template provided, here's how I would structure the Button component in JSX:

```tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useE03Button } from './hooks/use-e-03-button'
import { VariantProps, ExternalProps, DataProps } from './e-03-button.d.ts'
import { Circle } from 'lucide-react'

export interface E03ButtonProps 
  extends VariantProps, 
    ExternalProps,
    DataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export const E03Button = forwardRef<HTMLButtonElement, E03ButtonProps>(
  ({ 
    className,
    format = 'F-01 Primary',
    state = 'S-00 Default',
    theme = 'T-01 Brand',
    size = 'M-02 Medium',
    iconPosition = 'None',
    label = 'Button',
    icon = Circle,
    ...props 
  }, ref) => {
    const { e03ButtonRef, variant, e03ButtonStyle } = useE03Button({ 
      ref,
      format,
      state,
      theme,
      size,
      iconPosition
    })
    
    const { base, icon: iconStyle, label: labelStyle } = e03ButtonStyle()
    const Icon = icon
    const isDisabled = state === 'S-03 Disabled'
    const showIcon = iconPosition !== 'None'
    const showLabel = iconPosition !== 'Only'
    
    return (
      <button
        data-comp="e-03-button"
        data-variant={variant}
        className={clsx(base(), className)}
        ref={e03ButtonRef}
        disabled={isDisabled}
        {...props}
      >
        {showIcon && <Icon className={iconStyle()} />}
        {showLabel && <span className={labelStyle()}>{label}</span>}
      </button>
    )
  }
)

E03Button.displayName = 'E03Button'

export * from './e-03-button.d.ts'
```

## Unit Test Cases

Here are the unit test cases to validate if the props names and prop values are used correctly:

```tsx
// e-03-button.test.tsx
import { render, screen } from '@testing-library/react'
import { E03Button } from './index'
import { Circle, Download } from 'lucide-react'

describe('E03Button Component', () => {
  // Test Format Prop
  describe('Format Prop', () => {
    test('renders with default format (F-01 Primary)', () => {
      render(<E03Button label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-01 Primary'))
      // Check primary styling is applied
      expect(button).toHaveClass(expect.stringContaining('bg-primary-600'))
    })

    test('renders with F-02 Secondary format', () => {
      render(<E03Button format="F-02 Secondary" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-02 Secondary'))
      // Check secondary styling is applied
      expect(button).toHaveClass(expect.stringContaining('border-gray-300'))
    })

    test('renders with F-03 Tertiary format', () => {
      render(<E03Button format="F-03 Tertiary" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-03 Tertiary'))
      // Check tertiary styling is applied
      expect(button).toHaveClass(expect.stringContaining('bg-transparent'))
    })

    test('renders with F-04 Link format', () => {
      render(<E03Button format="F-04 Link" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-04 Link'))
      // Check link styling is applied
      expect(button).toHaveClass(expect.stringContaining('underline'))
    })
  })

  // Test State Prop
  describe('State Prop', () => {
    test('renders with default state (S-00 Default)', () => {
      render(<E03Button label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-00 Default'))
      expect(button).not.toBeDisabled()
    })

    test('renders with S-01 Hover state', () => {
      render(<E03Button state="S-01 Hover" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-01 Hover'))
    })

    test('renders with S-02 Focused state', () => {
      render(<E03Button state="S-02 Focused" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-02 Focused'))
      expect(button).toHaveClass(expect.stringContaining('ring-2'))
    })

    test('renders with S-03 Disabled state', () => {
      render(<E03Button state="S-03 Disabled" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-03 Disabled'))
      expect(button).toBeDisabled()
      expect(button).toHaveClass(expect.stringContaining('cursor-not-allowed'))
    })
  })

  // Test Theme Prop
  describe('Theme Prop', () => {
    test('renders with default theme (T-01 Brand)', () => {
      render(<E03Button label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('T-01 Brand'))
    })

    test('renders with T-02 Grey theme', () => {
      render(<E03Button theme="T-02 Grey" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('T-02 Grey'))
      // Check grey theme styling is applied
      expect(button).toHaveClass(expect.stringContaining('bg-gray-600'))
    })
  })

  // Test Size Prop
  describe('Size Prop', () => {
    test('renders with default size (M-02 Medium)', () => {
      render(<E03Button label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-02 Medium'))
      expect(button).toHaveClass(expect.stringContaining('text-base'))
    })

    test('renders with M-01 Small size', () => {
      render(<E03Button size="M-01 Small" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-01 Small'))
      expect(button).toHaveClass(expect.stringContaining('text-sm'))
    })

    test('renders with M-03 Large size', () => {
      render(<E03Button size="M-03 Large" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-03 Large'))
      expect(button).toHaveClass(expect.stringContaining('text-lg'))
    })

    test('renders with M-04 Extra Large size', () => {
      render(<E03Button size="M-04 Extra Large" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-04 Extra Large'))
      expect(button).toHaveClass(expect.stringContaining('text-xl'))
    })
  })

  // Test External Props
  describe('External Props - iconPosition', () => {
    test('renders with default iconPosition (None)', () => {
      render(<E03Button label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('None'))
      // Icon should not be present
      expect(button.querySelector('svg')).not.toBeInTheDocument()
    })

    test('renders with Leading iconPosition', () => {
      render(<E03Button iconPosition="Leading" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('Leading'))
      // Check icon is present and before text
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
      expect(button).toHaveClass(expect.stringContaining('flex-row'))
    })

    test('renders with Trailing iconPosition', () => {
      render(<E03Button iconPosition="Trailing" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('Trailing'))
      // Check icon is present and after text
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
      expect(button).toHaveClass(expect.stringContaining('flex-row-reverse'))
    })

    test('renders with Only iconPosition', () => {
      render(<E03Button iconPosition="Only" aria-label="Icon Button" />)
      const button = screen.getByRole('button', { name: /icon button/i })
      expect(button).toHaveAttribute('data-variant', expect.stringContaining('Only'))
      // Check icon is present and no text
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
      expect(button.textContent).toBe('')
    })
  })

  // Test Data Props
  describe('Data Props', () => {
    test('renders with default label ("Button")', () => {
      render(<E03Button />)
      const button = screen.getByRole('button', { name: /button/i })
      expect(button.textContent).toBe('Button')
    })

    test('renders with custom label', () => {
      render(<E03Button label="Custom Label" />)
      const button = screen.getByRole('button', { name: /custom label/i })
      expect(button.textContent).toBe('Custom Label')
    })

    test('renders with default icon (Circle) when iconPosition is specified', () => {
      render(<E03Button iconPosition="Leading" label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
      // This is a simplified check, in a real test you might need to check specific SVG paths
    })

    test('renders with custom icon', () => {
      render(<E03Button iconPosition="Leading" icon={Download} label="Test Button" />)
      const button = screen.getByRole('button', { name: /test button/i })
      const icon = button.querySelector('svg')
      expect(icon).toBeInTheDocument()
      // This is a simplified check, in a real test you might need to check specific SVG paths
    })
  })

  // Test Compound Variants
  describe('Compound Variants', () => {
    test('renders icon-only button with appropriate padding based on size', () => {
      render(<E03Button iconPosition="Only" size="M-01 Small" aria-label="Small Icon" />)
      const smallButton = screen.getByRole('button', { name: /small icon/i })
      expect(smallButton).toHaveClass(expect.stringContaining('p-2'))
      
      render(<E03Button iconPosition="Only" size="M-03 Large" aria-label="Large Icon" />)
      const largeButton = screen.getByRole('button', { name: /large icon/i })
      expect(largeButton).toHaveClass(expect.stringContaining('p-3'))
    })

    test('applies correct styling for primary button with grey theme', () => {
      render(<E03Button format="F-01 Primary" theme="T-02 Grey" label="Grey Primary" />)
      const button = screen.getByRole('button', { name: /grey primary/i })
      expect(button).toHaveClass(expect.stringContaining('bg-gray-600'))
      expect(button).toHaveClass(expect.stringContaining('hover:bg-gray-700'))
    })
  })

  // Test Accessibility
  describe('Accessibility', () => {
    test('forwards ref to button element', () => {
      const ref = jest.fn()
      render(<E03Button ref={ref} label="Test Button" />)
      expect(ref).toHaveBeenCalled()
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLButtonElement)
    })

    test('applies aria-label for icon-only buttons', () => {
      render(<E03Button iconPosition="Only" aria-label="Icon Button" />)
      const button = screen.getByRole('button', { name: /icon button/i })
      expect(button).toHaveAttribute('aria-label', 'Icon Button')
    })

    test('passes through additional HTML attributes', () => {
      render(<E03Button label="Test Button" data-testid="custom-button" aria-describedby="description" />)
      const button = screen.getByRole('button', { name: /test button/i })
      expect(button).toHaveAttribute('data-testid', 'custom-button')
      expect(button).toHaveAttribute('aria-describedby', 'description')
    })
  })
})
```

## TypeScript Type Definitions

Here's how I would define the TypeScript types in `e-03-button.d.ts`:

```ts
import { Icon } from 'lucide-react'

// Variant Props (🎨)
export interface VariantProps {
  format: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  theme: 'T-01 Brand' | 'T-02 Grey';
  size: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (⚙️)
export interface ExternalProps {
  iconPosition: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface DataProps {
  label: string;
  icon: Icon;
}

// Component Props
export interface E03ButtonProps 
  extends VariantProps, 
    ExternalProps,
    DataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

## Examples of Component Usage

Here are examples of how to use the E-03 Button component with different variants:

```tsx
// Format Variants
// Primary button (default)
<E03Button label="Primary Button" />

// Secondary button
<E03Button 
  format="F-02 Secondary"
  label="Secondary Button" 
/>

// Tertiary button
<E03Button 
  format="F-03 Tertiary"
  label="Tertiary Button" 
/>

// Link button
<E03Button 
  format="F-04 Link"
  label="Link Button" 
/>

// State Variants
// Default state (default)
<E03Button label="Default State" />

// Hover state (typically applied via CSS, but can be forced)
<E03Button 
  state="S-01 Hover"
  label="Hover State" 
/>

// Focused state
<E03Button 
  state="S-02 Focused"
  label="Focused State" 
/>

// Disabled state
<E03Button 
  state="S-03 Disabled"
  label="Disabled Button" 
/>

// Theme Variants
// Brand theme (default)
<E03Button label="Brand Theme" />

// Grey theme
<E03Button 
  theme="T-02 Grey"
  label="Grey Theme" 
/>

// Size Variants
// Small size
<E03Button 
  size="M-01 Small"
  label="Small Button" 
/>

// Medium size (default)
<E03Button 
  size="M-02 Medium"
  label="Medium Button" 
/>

// Large size
<E03Button 
  size="M-03 Large"
  label="Large Button" 
/>

// Extra Large size
<E03Button 
  size="M-04 Extra Large"
  label="Extra Large Button" 
/>

// Icon Position Variants
// No icon (default)
<E03Button label="No Icon" />

// Leading icon
<E03Button 
  iconPosition="Leading"
  icon={Download}
  label="Leading Icon" 
/>

// Trailing icon
<E03Button 
  iconPosition="Trailing"
  icon={ArrowRight}
  label="Trailing Icon" 
/>

// Icon only
<E03Button 
  iconPosition="Only"
  icon={Plus}
  aria-label="Add Item" 
/>

// Combined Variants
// Secondary button with leading icon and large size
<E03Button 
  format="F-02 Secondary"
  size="M-03 Large"
  iconPosition="Leading"
  icon={Download}
  label="Download File" 
/>

// Tertiary button with trailing icon in grey theme
<E03Button 
  format="F-03 Tertiary"
  theme="T-02 Grey"
  iconPosition="Trailing"
  icon={ArrowRight}
  label="Next Step" 
/>

// Disabled primary button with leading icon
<E03Button 
  state="S-03 Disabled"
  iconPosition="Leading"
  icon={Save}
  label="Save Changes" 
/>
