# Composite/Badges/C-01 Badge Group

## UI Specification

### Component Name
C01BadgeGroup

### Component Purpose
A Badge Group is a UI component that organizes and displays multiple badges in a compact, visually cohesive arrangement. It allows for efficient presentation of multiple related badges, providing a clean and structured way to show categorization, status, or other information in a grouped format.

### Unit Test Cases

1. Component Naming Tests:
   - Test that the component is exported with the correct name "C01BadgeGroup"
   - Test that the component has the correct displayName property "C01BadgeGroup"

2. Props Names Tests:
   - Test that the component accepts the "format" prop
   - Test that the component accepts the "theme" prop
   - Test that the component accepts the "size" prop
   - Test that the component accepts the "label" prop
   - Test that the component accepts the "icon" prop

3. Props Values Tests:
   - Test that the component handles all format variants correctly:
     - "F-01 Leading" (default)
     - "F-02 Trailing"
     - "F-03 Leading With Icon"
     - "F-04 Trailing With Icon"
   - Test that the component handles all theme variants correctly:
     - "T-01 Brand" (default)
     - "T-02 Gray"
     - "T-03 Error"
     - "T-04 Warning"
     - "T-05 Success"
   - Test that the component handles all size variants correctly:
     - "M-01 Medium" (default)
     - "M-02 Large"
   - Test that the component displays the correct label text from the label prop
   - Test that the component displays the correct icon from the icon prop
   - Test that the component correctly renders multiple badges
   - Test that the component applies proper spacing between badges

Sample test code:
```jsx
import { render, screen } from '@testing-library/react'
import { C01BadgeGroup } from './c-01-badge-group'
import { E01Badge } from '../../../element/Badges/E-01 Badge'

describe('C01BadgeGroup', () => {
  // Component naming tests
  it('should have the correct displayName', () => {
    expect(C01BadgeGroup.displayName).toBe('C01BadgeGroup')
  })

  // Props names tests
  it('should render with default props', () => {
    render(
      <C01BadgeGroup label="Badge Group">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    expect(screen.getByText('Badge Group')).toBeInTheDocument()
    expect(screen.getByText('Badge 1')).toBeInTheDocument()
    expect(screen.getByText('Badge 2')).toBeInTheDocument()
  })

  // Props values tests
  it('should render with different formats', () => {
    const { rerender } = render(
      <C01BadgeGroup format="F-01 Leading" label="Leading">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    expect(screen.getByText('Leading')).toBeInTheDocument()
    
    rerender(
      <C01BadgeGroup format="F-02 Trailing" label="Trailing">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    expect(screen.getByText('Trailing')).toBeInTheDocument()
  })

  it('should render with different themes', () => {
    render(
      <C01BadgeGroup theme="T-02 Gray" label="Gray Theme">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    // Test theme styling is applied
  })

  it('should render with different sizes', () => {
    render(
      <C01BadgeGroup size="M-02 Large" label="Large Size">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    // Test size styling is applied
  })

  it('should pass theme prop to child badges', () => {
    render(
      <C01BadgeGroup theme="T-03 Error">
        <E01Badge label="Badge 1" />
        <E01Badge label="Badge 2" />
      </C01BadgeGroup>
    )
    // Test that child badges inherit the theme
  })
})
```

### Props Definition

```typescript
// c-01-badge-group.d.ts
import { Icon } from 'lucide-react'
import { ReactNode } from 'react'

// Variant Props (🎨)
export interface C01BadgeGroupVariantProps {
  format?: 'F-01 Leading' | 'F-02 Trailing' | 'F-03 Leading With Icon' | 'F-04 Trailing With Icon';
  theme?: 'T-01 Brand' | 'T-02 Gray' | 'T-03 Error' | 'T-04 Warning' | 'T-05 Success';
  size?: 'M-01 Medium' | 'M-02 Large';
}

// External Props (⚙️)
export interface C01BadgeGroupExternalProps {
  // No external props for this component
}

// Data Props (📦)
export interface C01BadgeGroupDataProps {
  label?: string;
  icon?: Icon;
  children: ReactNode; // To contain the badges
}

// Component Props
export interface C01BadgeGroupProps 
  extends C01BadgeGroupVariantProps, 
    C01BadgeGroupExternalProps,
    C01BadgeGroupDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
```

### Component Folder Structure

```
src/components/composite/Badges/C-01 Badge Group/
├── README.md
├── index.ts              # Barrel export file
├── c-01-badge-group.d.ts # TypeScript definitions
├── c-01-badge-group.config.ts  # Tailwind variants configuration
├── parts/                # Component parts
│   └── c-01-badge-group.tsx    # Main component implementation
└── hooks/                # Custom hooks
    └── use-c-01-badge-group.ts # Component logic
```

### Tailwind Variant Configuration

```typescript
// c-01-badge-group.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const c01BadgeGroupConfig = tv({
  slots: {
    base: 'flex items-center', // Common base styles for the badge group container
    label: 'text-sm font-medium', // Text styling for the group label
    icon: 'flex-shrink-0', // Icon styling
    badgeContainer: 'flex flex-wrap gap-2', // Container for the badges
  },
  variants: {
    format: {
      'F-01 Leading': {
        // Label appears before badges - based on Figma layout_TFMEUT
        base: 'flex flex-row items-center gap-2 py-1',
        label: 'text-sm font-medium', // Based on Figma textStyle style_I4MIQB
        badgeContainer: 'flex flex-wrap gap-2',
      },
      'F-02 Trailing': {
        // Label appears after badges - based on Figma layout_WGZF55
        base: 'flex flex-row-reverse items-center gap-2 py-1',
        label: 'text-sm font-medium ml-2', // Based on Figma textStyle style_I4MIQB
        badgeContainer: 'flex flex-wrap gap-2',
      },
      'F-03 Leading With Icon': {
        // Icon and label appear before badges - based on Figma layout_83STL5
        base: 'flex flex-row items-center gap-2 py-1',
        label: 'text-sm font-medium', // Based on Figma textStyle style_I4MIQB
        icon: 'mr-1 w-4 h-4', // Based on Figma layout gap
        badgeContainer: 'flex flex-wrap gap-2',
      },
      'F-04 Trailing With Icon': {
        // Icon and label appear after badges - based on Figma layout_KDBAC6
        base: 'flex flex-row-reverse items-center gap-2 py-1',
        label: 'text-sm font-medium ml-2', // Based on Figma textStyle style_I4MIQB
        icon: 'ml-1 w-4 h-4', // Based on Figma layout gap
        badgeContainer: 'flex flex-wrap gap-2',
      },
    },
    theme: {
      'T-01 Brand': {
        // Based on Figma fill_5L6LP5 (brand color)
        label: 'text-brand-600',
        icon: 'text-brand-600',
      },
      'T-02 Gray': {
        // Based on Figma fill for gray theme
        label: 'text-gray-600',
        icon: 'text-gray-600',
      },
      'T-03 Error': {
        // Based on Figma fill for error theme
        label: 'text-error-600',
        icon: 'text-error-600',
      },
      'T-04 Warning': {
        // Based on Figma fill for warning theme
        label: 'text-warning-600',
        icon: 'text-warning-600',
      },
      'T-05 Success': {
        // Based on Figma fill for success theme
        label: 'text-success-600',
        icon: 'text-success-600',
      },
    },
    size: {
      'M-01 Medium': {
        // Based on Figma medium size styling
        base: 'py-1',
        label: 'text-sm', // Based on Figma textStyle style_I4MIQB
        icon: 'w-4 h-4',
        badgeContainer: 'gap-2', // Based on Figma layout gap
      },
      'M-02 Large': {
        // Based on Figma large size styling
        base: 'py-1.5',
        label: 'text-base', // Larger text for large size
        icon: 'w-5 h-5',
        badgeContainer: 'gap-3', // Increased gap for large size
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Leading',
    theme: 'T-01 Brand',
    size: 'M-01 Medium',
  },
  compoundVariants: [
    // Adjustments for specific combinations based on Figma layout data
    {
      format: ['F-03 Leading With Icon', 'F-04 Trailing With Icon'],
      size: 'M-01 Medium',
      class: {
        icon: 'w-4 h-4',
      },
    },
    {
      format: ['F-03 Leading With Icon', 'F-04 Trailing With Icon'],
      size: 'M-02 Large',
      class: {
        icon: 'w-5 h-5',
      },
    },
  ],
})

export type C01BadgeGroupVariantProps = VariantProps<typeof c01BadgeGroupConfig>
export { c01BadgeGroupConfig }
```

### Component Implementation

```typescript
// parts/c-01-badge-group.tsx
'use client'

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useC01BadgeGroup } from '../hooks/use-c-01-badge-group'
import type { C01BadgeGroupProps } from '../c-01-badge-group.d.ts'

export const C01BadgeGroup = forwardRef<HTMLDivElement, C01BadgeGroupProps>(
  ({ className, children, label, icon: Icon, ...props }, ref) => {
    const { badgeGroupRef, variant, badgeGroupStyle } = useC01BadgeGroup({ ref, ...props })

    // Determine if we should render the label container based on format
    const isLeadingFormat = props.format === 'F-01 Leading' || props.format === 'F-03 Leading With Icon' || !props.format
    const isTrailingFormat = props.format === 'F-02 Trailing' || props.format === 'F-04 Trailing With Icon'
    const hasIcon = props.format === 'F-03 Leading With Icon' || props.format === 'F-04 Trailing With Icon'

    return (
      <div
        data-comp="c-01-badge-group"
        data-variant={variant}
        className={clsx(badgeGroupStyle.base(), className)}
        ref={badgeGroupRef}
        {...props}
      >
        {isLeadingFormat && (label || (hasIcon && Icon)) && (
          <div className="flex items-center">
            {hasIcon && Icon && <Icon className={badgeGroupStyle.icon()} />}
            {label && <span className={badgeGroupStyle.label()}>{label}</span>}
          </div>
        )}
        
        <div className={badgeGroupStyle.badgeContainer()}>
          {children}
        </div>
        
        {isTrailingFormat && (label || (hasIcon && Icon)) && (
          <div className="flex items-center">
            {label && <span className={badgeGroupStyle.label()}>{label}</span>}
            {hasIcon && Icon && <Icon className={badgeGroupStyle.icon()} />}
          </div>
        )}
      </div>
    )
  }
)

C01BadgeGroup.displayName = 'C01BadgeGroup'
```

```typescript
// hooks/use-c-01-badge-group.ts
import { useRef, type RefObject } from 'react'
import { useComposedRefs } from '../../../../hooks/use-composed-refs'
import { c01BadgeGroupConfig } from '../c-01-badge-group.config'
import type { C01BadgeGroupProps } from '../c-01-badge-group.d.ts'

interface UseC01BadgeGroupProps extends C01BadgeGroupProps {
  ref?: RefObject<HTMLDivElement>
}

export function useC01BadgeGroup({ ref, format, theme, size, ...props }: UseC01BadgeGroupProps) {
  const internalRef = useRef<HTMLDivElement>(null)
  const badgeGroupRef = useComposedRefs(internalRef, ref)

  // Determine the variant string for data-variant attribute
  const variant = `${format || 'F-01 Leading'} ${theme || 'T-01 Brand'} ${size || 'M-01 Medium'}`

  // Get styles from Tailwind Variants configuration
  const badgeGroupStyle = c01BadgeGroupConfig({ format, theme, size })

  return {
    badgeGroupRef,
    variant,
    badgeGroupStyle,
  }
}
```

### Examples of Component Usage

```tsx
// Example 1: Basic usage with default props
<C01BadgeGroup label="Categories">
  <E01Badge label="React" />
  <E01Badge label="TypeScript" />
  <E01Badge label="Tailwind" />
</C01BadgeGroup>

// Example 2: Using different format - Trailing
<C01BadgeGroup 
  format="F-02 Trailing" 
  label="Skills"
>
  <E01Badge label="JavaScript" theme="T-02 Brand" />
  <E01Badge label="CSS" theme="T-08 Blue" />
  <E01Badge label="HTML" theme="T-12 Rosé" />
</C01BadgeGroup>

// Example 3: Using with icon - Leading With Icon
<C01BadgeGroup 
  format="F-03 Leading With Icon" 
  label="Technologies" 
  icon={TagsIcon}
  theme="T-03 Error"
>
  <E01Badge label="Node.js" />
  <E01Badge label="Express" />
  <E01Badge label="MongoDB" />
</C01BadgeGroup>

// Example 4: Using with icon - Trailing With Icon and large size
<C01BadgeGroup 
  format="F-04 Trailing With Icon" 
  label="Frameworks" 
  icon={CodeIcon}
  theme="T-05 Success"
  size="M-02 Large"
>
  <E01Badge label="Next.js" size="M-02 Medium" />
  <E01Badge label="Vue" size="M-02 Medium" />
  <E01Badge label="Angular" size="M-02 Medium" />
</C01BadgeGroup>

// Example 5: Using in a form for selecting multiple options
<form>
  <label>Select interests:</label>
  <C01BadgeGroup label="Interests">
    <E01Badge 
      format="F-05 X Close" 
      label="Sports" 
      onClick={() => handleRemoveInterest('sports')} 
    />
    <E01Badge 
      format="F-05 X Close" 
      label="Music" 
      onClick={() => handleRemoveInterest('music')} 
    />
    <E01Badge 
      format="F-05 X Close" 
      label="Travel" 
      onClick={() => handleRemoveInterest('travel')} 
    />
  </C01BadgeGroup>
  <button type="submit">Save</button>
</form>
