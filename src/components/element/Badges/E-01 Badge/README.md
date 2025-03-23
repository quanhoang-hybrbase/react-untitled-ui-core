# Element/Badges/E-01 Badge

## UI Specification

### Component Name
E01Badge

### Component Purpose
A Badge is a small, visually distinct UI element used to display concise information, draw attention, or indicate status, quantity, or categorization.

### Unit Test Cases

1. Component Naming Tests:
   - Test that the component is exported with the correct name "E01Badge"
   - Test that the component has the correct displayName property "E01Badge"

2. Props Names Tests:
   - Test that the component accepts the "format" prop
   - Test that the component accepts the "theme" prop
   - Test that the component accepts the "size" prop
   - Test that the component accepts the "label" prop
   - Test that the component accepts the "icon" prop
   - Test that the component accepts the "countryIcon" prop

3. Props Values Tests:
   - Test that the component handles all format variants correctly:
     - "F-01 Primary" (default)
     - "F-02 Dot"
     - "F-03 Country"
     - "F-04 Avatar"
     - "F-05 X Close"
     - "F-06 Icon Trailing"
     - "F-07 Icon Leading"
     - "F-08 Icon Only"
   - Test that the component handles all theme variants correctly:
     - "T-01 Gray" (default)
     - "T-02 Brand"
     - "T-03 Error"
     - "T-04 Warning"
     - "T-05 Success"
     - "T-06 Blue Gray"
     - "T-07 Blue Light"
     - "T-08 Blue"
     - "T-09 Indigo"
     - "T-10 Purple"
     - "T-11 Pink"
     - "T-12 Rosé"
     - "T-13 Orange"
   - Test that the component handles all size variants correctly:
     - "M-01 Small" (default)
     - "M-02 Medium"
     - "M-03 Large"
   - Test that the component displays the correct label text from the label prop
   - Test that the component displays the correct icon from the icon prop
   - Test that the component displays the correct country icon from the countryIcon prop

Sample test code:
```jsx
import { render, screen } from '@testing-library/react'
import { E01Badge } from './e-01-badge'

describe('E01Badge', () => {
  // Component naming tests
  it('should have the correct displayName', () => {
    expect(E01Badge.displayName).toBe('E01Badge')
  })

  // Props names tests
  it('should render with default props', () => {
    render(<E01Badge label="Test Badge" />)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  // Props values tests
  it('should render with different formats', () => {
    const { rerender } = render(<E01Badge format="F-01 Primary" label="Primary" />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
    
    rerender(<E01Badge format="F-08 Icon Only" icon="E-22 Plus" />)
    // Test icon rendering
  })

  it('should render with different themes', () => {
    const { rerender } = render(<E01Badge theme="T-02 Brand" label="Brand" />)
    // Test theme styling
    
    rerender(<E01Badge theme="T-03 Error" label="Error" />)
    // Test theme styling
  })

  it('should render with different sizes', () => {
    const { rerender } = render(<E01Badge size="M-01 Small" label="Small" />)
    // Test size styling
    
    rerender(<E01Badge size="M-03 Large" label="Large" />)
    // Test size styling
  })
})
```

### Props Definition

```typescript
// e-01-badge.d.ts
import { Icon } from 'lucide-react'

// Variant Props (🎨)
export interface E01BadgeVariantProps {
  format?: 'F-01 Primary' | 'F-02 Dot' | 'F-03 Country' | 'F-04 Avatar' | 'F-05 X Close' | 'F-06 Icon Trailing' | 'F-07 Icon Leading' | 'F-08 Icon Only';
  theme?: 'T-01 Gray' | 'T-02 Brand' | 'T-03 Error' | 'T-04 Warning' | 'T-05 Success' | 'T-06 Blue Gray' | 'T-07 Blue Light' | 'T-08 Blue' | 'T-09 Indigo' | 'T-10 Purple' | 'T-11 Pink' | 'T-12 Rosé' | 'T-13 Orange';
  size?: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large';
}

// External Props (⚙️)
export interface E01BadgeExternalProps {
  // No external props for this component
}

// Data Props (📦)
export interface E01BadgeDataProps {
  label?: string;
  icon?: Icon;
  countryIcon?: string;
}

// Component Props
export interface E01BadgeProps 
  extends E01BadgeVariantProps, 
    E01BadgeExternalProps,
    E01BadgeDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
```

### Component Folder Structure

```
src/components/element/Badges/E-01 Badge/
├── README.md
├── index.ts              # Barrel export file
├── e-01-badge.d.ts       # TypeScript definitions
├── e-01-badge.config.ts  # Tailwind variants configuration
├── parts/                # Component parts
│   └── e-01-badge.tsx    # Main component implementation
└── hooks/                # Custom hooks
    └── use-e-01-badge.ts # Component logic
```

### Tailwind Variant Configuration

```typescript
// e-01-badge.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e01BadgeConfig = tv({
  slots: {
    base: 'inline-flex items-center justify-center rounded-full', // Common base styles for all badges
    label: 'text-xs font-medium', // Text styling for the badge label
    icon: 'flex-shrink-0', // Icon styling
    dot: 'w-2 h-2 rounded-full', // Dot styling for F-02 Dot format
    avatar: 'rounded-full overflow-hidden', // Avatar styling for F-04 Avatar format
    countryIcon: '', // Country icon styling
  },
  variants: {
    format: {
      'F-01 Primary': {
        // Default text-only badge
        base: '',
        label: '',
      },
      'F-02 Dot': {
        // Badge with a dot
        base: 'gap-1.5',
        dot: '', // Will be colored by theme
      },
      'F-03 Country': {
        // Badge with country flag icon
        base: 'gap-1.5',
        countryIcon: 'w-3 h-3',
      },
      'F-04 Avatar': {
        // Badge with avatar
        base: 'gap-1.5',
        avatar: 'w-4 h-4',
      },
      'F-05 X Close': {
        // Badge with X/close icon
        base: 'gap-1.5',
        icon: 'w-3 h-3',
      },
      'F-06 Icon Trailing': {
        // Badge with icon at the end
        base: 'gap-1.5',
        icon: 'w-3 h-3',
      },
      'F-07 Icon Leading': {
        // Badge with icon at the start
        base: 'gap-1.5',
        icon: 'w-3 h-3',
      },
      'F-08 Icon Only': {
        // Badge with only an icon
        base: '',
        icon: 'w-3 h-3',
      },
    },
    theme: {
      'T-01 Gray': {
        // Gray theme
        base: 'bg-gray-100',
        label: 'text-gray-700',
        dot: 'bg-gray-500',
        icon: 'text-gray-500',
      },
      'T-02 Brand': {
        // Brand theme
        base: 'bg-brand-50',
        label: 'text-brand-700',
        dot: 'bg-brand-500',
        icon: 'text-brand-500',
      },
      'T-03 Error': {
        // Error theme
        base: 'bg-error-50',
        label: 'text-error-700',
        dot: 'bg-error-500',
        icon: 'text-error-500',
      },
      'T-04 Warning': {
        // Warning theme
        base: 'bg-warning-50',
        label: 'text-warning-700',
        dot: 'bg-warning-500',
        icon: 'text-warning-500',
      },
      'T-05 Success': {
        // Success theme
        base: 'bg-success-50',
        label: 'text-success-700',
        dot: 'bg-success-500',
        icon: 'text-success-500',
      },
      'T-06 Blue Gray': {
        // Blue Gray theme
        base: 'bg-blue-gray-50',
        label: 'text-blue-gray-700',
        dot: 'bg-blue-gray-500',
        icon: 'text-blue-gray-500',
      },
      'T-07 Blue Light': {
        // Blue Light theme
        base: 'bg-blue-light-50',
        label: 'text-blue-light-700',
        dot: 'bg-blue-light-500',
        icon: 'text-blue-light-500',
      },
      'T-08 Blue': {
        // Blue theme
        base: 'bg-blue-50',
        label: 'text-blue-700',
        dot: 'bg-blue-500',
        icon: 'text-blue-500',
      },
      'T-09 Indigo': {
        // Indigo theme
        base: 'bg-indigo-50',
        label: 'text-indigo-700',
        dot: 'bg-indigo-500',
        icon: 'text-indigo-500',
      },
      'T-10 Purple': {
        // Purple theme
        base: 'bg-purple-50',
        label: 'text-purple-700',
        dot: 'bg-purple-500',
        icon: 'text-purple-500',
      },
      'T-11 Pink': {
        // Pink theme
        base: 'bg-pink-50',
        label: 'text-pink-700',
        dot: 'bg-pink-500',
        icon: 'text-pink-500',
      },
      'T-12 Rosé': {
        // Rosé theme
        base: 'bg-rose-50',
        label: 'text-rose-700',
        dot: 'bg-rose-500',
        icon: 'text-rose-500',
      },
      'T-13 Orange': {
        // Orange theme
        base: 'bg-orange-50',
        label: 'text-orange-700',
        dot: 'bg-orange-500',
        icon: 'text-orange-500',
      },
    },
    size: {
      'M-01 Small': {
        // Small size
        base: 'px-2 py-0.5 text-xs', // padding: 2px 6px
        icon: 'w-3 h-3',
      },
      'M-02 Medium': {
        // Medium size
        base: 'px-3 py-1 text-sm', // padding: 4px 12px
        icon: 'w-4 h-4',
      },
      'M-03 Large': {
        // Large size
        base: 'px-3.5 py-1.5 text-sm', // padding: 6px 14px
        icon: 'w-5 h-5',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Primary',
    theme: 'T-01 Gray',
    size: 'M-01 Small',
  },
  compoundVariants: [
    // Special padding adjustments for icon positions based on Figma specs
    {
      format: 'F-07 Icon Leading',
      size: 'M-01 Small',
      class: {
        base: 'pl-1.5 pr-2.5', // padding: 6px 10px 6px 4px
      },
    },
    {
      format: 'F-06 Icon Trailing',
      size: 'M-01 Small',
      class: {
        base: 'pl-2.5 pr-1.5', // padding: 6px 4px 6px 10px
      },
    },
    {
      format: 'F-07 Icon Leading',
      size: 'M-02 Medium',
      class: {
        base: 'pl-1.5 pr-3', // padding: 6px 12px 6px 6px
      },
    },
    {
      format: 'F-06 Icon Trailing',
      size: 'M-02 Medium',
      class: {
        base: 'pl-3 pr-1.5', // padding: 6px 6px 6px 12px
      },
    },
    {
      format: 'F-08 Icon Only',
      size: 'M-01 Small',
      class: {
        base: 'p-1.5', // padding: 6px
      },
    },
    {
      format: 'F-08 Icon Only',
      size: 'M-02 Medium',
      class: {
        base: 'p-2', // padding: 8px
      },
    },
    {
      format: 'F-08 Icon Only',
      size: 'M-03 Large',
      class: {
        base: 'p-2.5', // padding: 10px
      },
    },
  ],
})

export type E01BadgeVariantProps = VariantProps<typeof e01BadgeConfig>
export { e01BadgeConfig }
```

### Component JSX Structure

```tsx
// parts/e-01-badge.tsx
'use client'

import { clsx } from 'clsx'
import { X } from 'lucide-react'
import { forwardRef } from 'react'
import { useE01Badge } from '../hooks/use-e-01-badge'
import type { E01BadgeProps } from '../e-01-badge.d.ts'

export const E01Badge = forwardRef<HTMLDivElement, E01BadgeProps>(
  ({ className, label = 'Badge', icon, countryIcon, ...props }, ref) => {
    const { e01BadgeRef, variant, styles } = useE01Badge({ ref, ...props })

    const renderContent = () => {
      switch (variant.format) {
        case 'F-02 Dot':
          return (
            <>
              <span className={styles.dot()} />
              <span className={styles.label()}>{label}</span>
            </>
          )
        case 'F-03 Country':
          return (
            <>
              {countryIcon && (
                <span className={styles.countryIcon()}>
                  {/* Country icon would be imported from assets */}
                  <img src={`/src/assets/flags/${countryIcon}.svg`} alt={countryIcon} />
                </span>
              )}
              <span className={styles.label()}>{label}</span>
            </>
          )
        case 'F-04 Avatar':
          return (
            <>
              <span className={styles.avatar()}>
                {/* Avatar would be an img element */}
                <img src="/src/assets/avatars/default.png" alt="Avatar" />
              </span>
              <span className={styles.label()}>{label}</span>
            </>
          )
        case 'F-05 X Close':
          return (
            <>
              <span className={styles.label()}>{label}</span>
              <span className={styles.icon()}>
                <X size="1em" />
              </span>
            </>
          )
        case 'F-06 Icon Trailing':
          return (
            <>
              <span className={styles.label()}>{label}</span>
              {icon && <span className={styles.icon()}>{icon}</span>}
            </>
          )
        case 'F-07 Icon Leading':
          return (
            <>
              {icon && <span className={styles.icon()}>{icon}</span>}
              <span className={styles.label()}>{label}</span>
            </>
          )
        case 'F-08 Icon Only':
          return (
            <>{icon && <span className={styles.icon()}>{icon}</span>}</>
          )
        case 'F-01 Primary':
        default:
          return <span className={styles.label()}>{label}</span>
      }
    }

    return (
      <div
        data-comp="e-01-badge"
        data-variant={`${variant.format}-${variant.theme}-${variant.size}`}
        className={clsx(styles.base(), className)}
        ref={e01BadgeRef}
        {...props}
      >
        {renderContent()}
      </div>
    )
  }
)

E01Badge.displayName = 'E01Badge'

// Export types from the component's .d.ts file
export * from '../e-01-badge.d.ts'
```

### Examples of Component Usage

```jsx
// Basic badge with default props
<E01Badge label="Badge" />

// Badge with different themes
<E01Badge theme="T-02 Brand" label="Brand" />
<E01Badge theme="T-03 Error" label="Error" />
<E01Badge theme="T-04 Warning" label="Warning" />
<E01Badge theme="T-05 Success" label="Success" />

// Badge with different sizes
<E01Badge size="M-01 Small" label="Small" />
<E01Badge size="M-02 Medium" label="Medium" />
<E01Badge size="M-03 Large" label="Large" />

// Badge with different formats
<E01Badge format="F-01 Primary" label="Primary" />
<E01Badge format="F-02 Dot" label="Dot" />
<E01Badge format="F-03 Country" label="USA" countryIcon="E-03 US" />
<E01Badge format="F-04 Avatar" label="User" />
<E01Badge format="F-05 X Close" label="Dismissible" />
<E01Badge format="F-06 Icon Trailing" label="Trailing Icon" icon={<Plus />} />
<E01Badge format="F-07 Icon Leading" label="Leading Icon" icon={<Check />} />
<E01Badge format="F-08 Icon Only" icon={<Bell />} />

// Combined variants
<E01Badge 
  format="F-07 Icon Leading" 
  theme="T-05 Success" 
  size="M-02 Medium" 
  label="New Feature" 
  icon={<Sparkles />} 
/>

// Badge used in a notification context
<div className="flex items-center gap-2">
  <Bell size={16} />
  <span>Notifications</span>
  <E01Badge theme="T-03 Error" label="3" />
</div>

// Badge used to show status
<div className="flex items-center gap-2">
  <span>Server Status:</span>
  <E01Badge 
    format="F-07 Icon Leading" 
    theme="T-05 Success" 
    label="Online" 
    icon={<Circle className="fill-current" />} 
  />
</div>

// Badge used to show features
<div className="flex flex-wrap gap-2">
  <E01Badge theme="T-02 Brand" label="React" />
  <E01Badge theme="T-08 Blue" label="TypeScript" />
  <E01Badge theme="T-10 Purple" label="Tailwind CSS" />
</div>
