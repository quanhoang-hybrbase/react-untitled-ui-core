# E-04 Destructive Button

## Component Description
A Destructive Button is a type of action button used to perform critical or irreversible actions, typically associated with deletion, removal, or significant changes that may impact data or user settings. It is designed to draw attention and caution the user before proceeding.

## UI Specification

### Component Name
Element/Buttons/E-04 Destructive Button

### Component Purpose
A Destructive Button is used to perform critical or irreversible actions, typically associated with deletion, removal, or significant changes that may impact data or user settings. It is designed to draw attention and caution the user before proceeding.

### Unit test cases to validate props misconfiguration

#### Component Naming Tests
```jsx
describe('E04DestructiveButton', () => {
  it('should have the correct display name', () => {
    expect(E04DestructiveButton.displayName).toBe('E04DestructiveButton');
  });

  it('should have the correct data-comp attribute', () => {
    const { getByTestId } = render(<E04DestructiveButton data-testid="test-button" />);
    const button = getByTestId('test-button');
    expect(button).toHaveAttribute('data-comp', 'e-04-destructive-button');
  });
});
```

#### Variant Props Tests
```jsx
describe('E04DestructiveButton Variant Props', () => {
  it('should apply the correct format variant', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        format="F-01 Primary" 
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-01 Primary'));
  });

  it('should apply the correct state variant', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        state="S-01 Hover" 
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-01 Hover'));
  });

  it('should apply the correct size variant', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        size="M-03 Large" 
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-03 Large'));
  });

  it('should apply default variants when not specified', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('F-01 Primary'));
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('S-00 Default'));
    expect(button).toHaveAttribute('data-variant', expect.stringContaining('M-01 Small'));
  });
});
```

#### External Props Tests
```jsx
describe('E04DestructiveButton External Props', () => {
  it('should render with the correct icon position', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        iconPosition="Leading" 
        label="Button"
        icon="E-10 Circle"
      />
    );
    const button = getByTestId('test-button');
    const iconElement = button.querySelector('[data-slot="icon"]');
    const labelElement = button.querySelector('[data-slot="label"]');
    
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(button.firstElementChild).toBe(iconElement); // Icon should be first (leading)
  });

  it('should render with trailing icon position', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        iconPosition="Trailing" 
        label="Button"
        icon="E-10 Circle"
      />
    );
    const button = getByTestId('test-button');
    const iconElement = button.querySelector('[data-slot="icon"]');
    const labelElement = button.querySelector('[data-slot="label"]');
    
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(button.lastElementChild).toBe(iconElement); // Icon should be last (trailing)
  });

  it('should render with only icon', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        iconPosition="Only" 
        icon="E-10 Circle"
      />
    );
    const button = getByTestId('test-button');
    const iconElement = button.querySelector('[data-slot="icon"]');
    const labelElement = button.querySelector('[data-slot="label"]');
    
    expect(iconElement).toBeInTheDocument();
    expect(labelElement).not.toBeInTheDocument();
  });

  it('should render with only label', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        iconPosition="None" 
        label="Button"
      />
    );
    const button = getByTestId('test-button');
    const iconElement = button.querySelector('[data-slot="icon"]');
    const labelElement = button.querySelector('[data-slot="label"]');
    
    expect(iconElement).not.toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });
});
```

#### Data Props Tests
```jsx
describe('E04DestructiveButton Data Props', () => {
  it('should render with the correct label text', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        label="Delete Account" 
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveTextContent('Delete Account');
  });

  it('should render with the correct icon', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        icon="E-10 Circle" 
        iconPosition="Leading"
      />
    );
    const button = getByTestId('test-button');
    const iconElement = button.querySelector('[data-slot="icon"]');
    expect(iconElement).toBeInTheDocument();
    // Additional checks for the specific icon would depend on implementation
  });

  it('should render with default label when not specified', () => {
    const { getByTestId } = render(
      <E04DestructiveButton 
        data-testid="test-button" 
        iconPosition="None"
      />
    );
    const button = getByTestId('test-button');
    expect(button).toHaveTextContent('Button');
  });
});
```

### Props Definition as Typescript types

```ts
// e-04-destructive-button.d.ts
// Variant Props (🎨)
export interface E04DestructiveButtonVariantProps {
  format?: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state?: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  size?: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (➡️)
export interface E04DestructiveButtonExternalProps {
  iconPosition?: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface E04DestructiveButtonDataProps {
  label?: string;
  icon?: string;
}

// Component Props
export interface E04DestructiveButtonProps 
  extends E04DestructiveButtonVariantProps, 
    E04DestructiveButtonExternalProps,
    E04DestructiveButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component folder structure
```
E-04-Destructive-Button/
├── README.md
├── e-04-destructive-button.tsx
├── e-04-destructive-button.d.ts
├── e-04-destructive-button.config.ts
├── index.ts
└── hooks/
    └── use-e-04-destructive-button.ts
```

### Tailwind Variant styling configuration

```ts
// e-04-destructive-button.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e04DestructiveButtonConfig = tv({
  slots: {
    // From API: Common properties across variants - rounded corners (borderRadius: "8px")
    base: 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    icon: 'flex-shrink-0',
    label: 'text-center',
  },
  variants: {
    format: {
      'F-01 Primary': {
        // From API: fill_3QWS8H - destructive background color
        base: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive',
        // From API: textStyle style_M6XX8P - fontWeight: 600
        label: 'font-semibold',
      },
      'F-02 Secondary': {
        // From API: fill_11S717 - white/transparent background
        // From API: stroke_PM49BP - border with destructive color
        base: 'bg-white border border-destructive text-destructive hover:bg-destructive/10 focus-visible:ring-destructive',
        // From API: textStyle style_P7P4NE - fontWeight: 600
        label: 'font-semibold',
      },
      'F-03 Tertiary': {
        // From API: no background fill, no border
        base: 'bg-transparent text-destructive hover:bg-destructive/10 focus-visible:ring-destructive',
        // From API: medium weight text
        label: 'font-medium',
      },
      'F-04 Link': {
        // From API: no padding, text only, underline styling
        base: 'bg-transparent text-destructive underline-offset-4 hover:underline focus-visible:ring-destructive p-0 h-auto',
        label: 'font-medium',
      },
    },
    state: {
      'S-00 Default': {
        // Default state - no additional styling
        base: '',
      },
      'S-01 Hover': {
        // From API: effect_L6Q1SS - hover effect
        base: 'cursor-pointer shadow-sm',
      },
      'S-02 Focused': {
        // From API: focus state with ring
        base: 'ring-2 ring-offset-2 ring-destructive',
      },
      'S-03 Disabled': {
        // From API: opacity reduction
        base: 'opacity-50 pointer-events-none',
      },
    },
    size: {
      'M-01 Small': {
        // From API: layout_XRRRTV - padding: 8px 14px
        base: 'py-2 px-3.5',
        // From API: icon size proportional to button
        icon: 'h-4 w-4',
        // From API: fontSize smaller - 14px
        label: 'text-sm',
      },
      'M-02 Medium': {
        // From API: layout_5MJ63F - padding: 10px 18px
        base: 'py-2.5 px-4.5',
        // From API: icon size - 20px
        icon: 'h-5 w-5',
        // From API: fontSize - 16px
        label: 'text-base',
      },
      'M-03 Large': {
        // From API: layout_CLRVX0 - padding: 12px 20px
        base: 'py-3 px-5',
        // From API: icon size - 24px
        icon: 'h-6 w-6',
        // From API: fontSize - 18px
        label: 'text-lg',
      },
      'M-04 Extra Large': {
        // From API: larger padding - 14px 24px
        base: 'py-3.5 px-6',
        // From API: icon size - 28px
        icon: 'h-7 w-7',
        // From API: fontSize - 20px
        label: 'text-xl',
      },
    },
    // From API: different layout configurations for icon positions
    iconPosition: {
      'None': {
        // From API: only text node present
        base: '',
        icon: 'hidden',
        label: '',
      },
      'Leading': {
        // From API: layout_KH73BA - gap: 8px
        base: 'flex-row',
        icon: 'mr-2',
        label: '',
      },
      'Trailing': {
        // From API: reverse layout with gap
        base: 'flex-row-reverse',
        icon: 'ml-2',
        label: '',
      },
      'Only': {
        // From API: layout_CAESBC - padding: 8px (square button)
        base: 'p-2',
        icon: '',
        label: 'hidden',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-01 Small',
    iconPosition: 'None',
  },
  compoundVariants: [
    // From API: square layouts for icon-only variants with specific sizes
    {
      iconPosition: 'Only',
      size: 'M-01 Small',
      class: {
        // From API: square button with equal height/width
        base: 'h-9 w-9 p-2',
      },
    },
    {
      iconPosition: 'Only',
      size: 'M-02 Medium',
      class: {
        base: 'h-10 w-10 p-2.5',
      },
    },
    {
      iconPosition: 'Only',
      size: 'M-03 Large',
      class: {
        base: 'h-11 w-11 p-3',
      },
    },
    {
      iconPosition: 'Only',
      size: 'M-04 Extra Large',
      class: {
        base: 'h-12 w-12 p-3.5',
      },
    },
  ],
})

export type E04DestructiveButtonVariantProps = VariantProps<typeof e04DestructiveButtonConfig>
export { e04DestructiveButtonConfig }
```

### React file JSX structure

```tsx
// e-04-destructive-button.tsx
'use client'

import { clsx } from 'clsx'
import { forwardRef, type HTMLAttributes } from 'react'
import { useE04DestructiveButton } from './hooks/use-e-04-destructive-button'
import type { E04DestructiveButtonProps } from './e-04-destructive-button.d.ts'
import { Circle } from 'lucide-react'

export const E04DestructiveButton = forwardRef<HTMLButtonElement, E04DestructiveButtonProps>(
  ({ 
    className, 
    format = 'F-01 Primary',
    state = 'S-00 Default',
    size = 'M-01 Small',
    iconPosition = 'None',
    label = 'Button',
    icon = 'E-10 Circle',
    ...props 
  }, ref) => {
    const { 
      destructiveButtonRef, 
      variant, 
      destructiveButtonStyle 
    } = useE04DestructiveButton({ 
      ref, 
      format, 
      state, 
      size, 
      iconPosition,
      ...props 
    })

    // Determine if we should render the icon based on iconPosition
    const showIcon = iconPosition !== 'None'
    // Determine if we should render the label based on iconPosition
    const showLabel = iconPosition !== 'Only'

    return (
      <button
        data-comp="e-04-destructive-button"
        data-variant={variant}
        className={clsx(destructiveButtonStyle.base(), className)}
        ref={destructiveButtonRef}
        {...props}
      >
        {showIcon && (
          <span data-slot="icon" className={destructiveButtonStyle.icon()}>
            <Circle /> {/* Replace with proper icon component based on icon prop */}
          </span>
        )}
        {showLabel && (
          <span data-slot="label" className={destructiveButtonStyle.label()}>
            {label}
          </span>
        )}
      </button>
    )
  }
)

E04DestructiveButton.displayName = 'E04DestructiveButton'

// Export types from the component's .d.ts file
export * from './e-04-destructive-button.d.ts'
```

### Examples of component usage

```jsx
// Basic usage with default props
<E04DestructiveButton />

// Primary destructive button with custom label
<E04DestructiveButton 
  format="F-01 Primary"
  label="Delete Account"
/>

// Secondary destructive button with leading icon
<E04DestructiveButton 
  format="F-02 Secondary"
  iconPosition="Leading"
  label="Remove Item"
  icon="E-10 Circle"
/>

// Tertiary destructive button with trailing icon
<E04DestructiveButton 
  format="F-03 Tertiary"
  iconPosition="Trailing"
  label="Cancel Subscription"
  icon="E-10 Circle"
/>

// Link style destructive button
<E04DestructiveButton 
  format="F-04 Link"
  label="Delete Permanently"
/>

// Icon-only destructive button
<E04DestructiveButton 
  iconPosition="Only"
  icon="E-10 Circle"
  aria-label="Delete"
/>

// Large destructive button
<E04DestructiveButton 
  size="M-03 Large"
  label="Confirm Deletion"
/>

// Disabled destructive button
<E04DestructiveButton 
  state="S-03 Disabled"
  label="Delete Account"
/>

// Focused destructive button
<E04DestructiveButton 
  state="S-02 Focused"
  label="Remove Data"
/>

// Hover state destructive button
<E04DestructiveButton 
  state="S-01 Hover"
  label="Clear History"
/>
