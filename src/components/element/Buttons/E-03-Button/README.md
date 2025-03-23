# Element/Buttons/E-03 Button

## UI Specification

### Component Name
E-03 Button

### Component Purpose
A Button is an interactive UI element that allows users to trigger actions or navigate within an interface.

### Unit test cases to validate props misconfiguration

```tsx
// Component naming test
describe('E03Button', () => {
  it('should have the correct display name', () => {
    expect(E03Button.displayName).toBe('E03Button');
  });

  // Props names tests
  describe('Props names validation', () => {
    it('should accept format prop', () => {
      render(<E03Button format="F-01 Primary" />);
      // No error should be thrown
    });

    it('should accept state prop', () => {
      render(<E03Button state="S-00 Default" />);
      // No error should be thrown
    });

    it('should accept theme prop', () => {
      render(<E03Button theme="T-01 Brand" />);
      // No error should be thrown
    });

    it('should accept size prop', () => {
      render(<E03Button size="M-01 Small" />);
      // No error should be thrown
    });

    it('should accept iconPosition prop', () => {
      render(<E03Button iconPosition="Leading" />);
      // No error should be thrown
    });

    it('should accept label prop', () => {
      render(<E03Button label="Button" />);
      // No error should be thrown
    });

    it('should accept icon prop', () => {
      render(<E03Button icon="E-10 Circle" />);
      // No error should be thrown
    });
  });

  // Props values tests
  describe('Props values validation', () => {
    // Format prop values
    it('should accept valid format values', () => {
      const { rerender } = render(<E03Button format="F-01 Primary" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-format', 'F-01 Primary');
      
      rerender(<E03Button format="F-02 Secondary" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-format', 'F-02 Secondary');
      
      rerender(<E03Button format="F-03 Tertiary" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-format', 'F-03 Tertiary');
      
      rerender(<E03Button format="F-04 Link" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-format', 'F-04 Link');
    });

    // State prop values
    it('should accept valid state values', () => {
      const { rerender } = render(<E03Button state="S-00 Default" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-state', 'S-00 Default');
      
      rerender(<E03Button state="S-01 Hover" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-state', 'S-01 Hover');
      
      rerender(<E03Button state="S-02 Focused" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-state', 'S-02 Focused');
      
      rerender(<E03Button state="S-03 Disabled" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-state', 'S-03 Disabled');
    });

    // Theme prop values
    it('should accept valid theme values', () => {
      const { rerender } = render(<E03Button theme="T-01 Brand" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-theme', 'T-01 Brand');
      
      rerender(<E03Button theme="T-02 Grey" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-theme', 'T-02 Grey');
    });

    // Size prop values
    it('should accept valid size values', () => {
      const { rerender } = render(<E03Button size="M-01 Small" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-size', 'M-01 Small');
      
      rerender(<E03Button size="M-02 Medium" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-size', 'M-02 Medium');
      
      rerender(<E03Button size="M-03 Large" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-size', 'M-03 Large');
      
      rerender(<E03Button size="M-04 Extra Large" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-size', 'M-04 Extra Large');
    });

    // iconPosition prop values
    it('should accept valid iconPosition values', () => {
      const { rerender } = render(<E03Button iconPosition="None" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-icon-position', 'None');
      
      rerender(<E03Button iconPosition="Leading" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-icon-position', 'Leading');
      
      rerender(<E03Button iconPosition="Trailing" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-icon-position', 'Trailing');
      
      rerender(<E03Button iconPosition="Only" />);
      expect(screen.getByTestId('e03-button')).toHaveAttribute('data-icon-position', 'Only');
    });

    // label prop values
    it('should display the correct label text', () => {
      render(<E03Button label="Custom Button Text" />);
      expect(screen.getByText('Custom Button Text')).toBeInTheDocument();
    });

    // icon prop values
    it('should render the correct icon', () => {
      render(<E03Button icon="E-10 Circle" iconPosition="Leading" />);
      // This would need to be adjusted based on how icons are implemented
      expect(screen.getByTestId('icon-e10-circle')).toBeInTheDocument();
    });
  });
});
```

### Props Definition as Typescript types

```tsx
// e03-button.d.ts
// Variant Props (🎨)
export interface E03ButtonVariantProps {
  format: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  theme: 'T-01 Brand' | 'T-02 Grey';
  size: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (➡️)
export interface E03ButtonExternalProps {
  iconPosition: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface E03ButtonDataProps {
  label: string;
  icon: string;
}

// Component Props
export interface E03ButtonProps 
  extends E03ButtonVariantProps, 
    E03ButtonExternalProps,
    E03ButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component folder structure

```
src/
└── components/
    └── element/
        └── Buttons/
            └── E-03-Button/
                ├── README.md
                ├── e03-button.config.ts
                ├── e03-button.d.ts
                ├── parts/
                │   └── e03-button.tsx  # Main component file
                ├── hooks/
                │   └── use-e03-button.ts
                └── index.tsx  # Main export entry file
```

### Tailwind Variant styling configuration

```tsx
// e03-button.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e03ButtonConfig = tv({
  slots: {
    base: 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-4',
    icon: 'flex items-center justify-center',
    label: 'font-semibold',
  },
  variants: {
    format: {
      'F-01 Primary': {
        // Primary button with solid background
        base: 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-100',
        icon: 'text-white',
        label: 'text-white',
      },
      'F-02 Secondary': {
        // Secondary button with outline
        base: 'border border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-100',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
      'F-03 Tertiary': {
        // Tertiary button with no background or border
        base: 'bg-transparent hover:bg-gray-100 focus:ring-gray-100',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
      'F-04 Link': {
        // Link style button
        base: 'bg-transparent hover:underline focus:ring-primary-100',
        icon: 'text-primary-600',
        label: 'text-primary-600',
      },
    },
    state: {
      'S-00 Default': {},
      'S-01 Hover': {}, // Hover styles are handled in format variants
      'S-02 Focused': {
        base: 'ring-4', // Focus ring
      },
      'S-03 Disabled': {
        base: 'opacity-50 cursor-not-allowed',
      },
    },
    theme: {
      'T-01 Brand': {}, // Brand theme is handled in format variants
      'T-02 Grey': {
        'F-01 Primary': {
          base: 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-200',
        },
      },
    },
    size: {
      'M-01 Small': {
        base: 'text-sm',
        label: 'text-sm',
        // From API response: padding: "8px 14px" for text, "8px" for icon-only
      },
      'M-02 Medium': {
        base: 'text-base',
        label: 'text-base',
        // From API response: padding: "10px 18px" for text, "10px" for icon-only
      },
      'M-03 Large': {
        base: 'text-base',
        label: 'text-base',
        // From API response: padding: "12px 20px" for text, "12px" for icon-only
      },
      'M-04 Extra Large': {
        base: 'text-lg',
        label: 'text-lg',
        // From API response: padding: "14px" for icon-only, larger padding for text
      },
    },
    iconPosition: {
      'None': {
        icon: 'hidden',
      },
      'Leading': {
        base: 'flex-row',
        // From API response: gap: "8px"
      },
      'Trailing': {
        base: 'flex-row-reverse',
        // From API response: gap: "8px"
      },
      'Only': {
        label: 'hidden',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    theme: 'T-01 Brand',
    size: 'M-02 Medium',
    iconPosition: 'None',
  },
  compoundVariants: [
    // Size and iconPosition combinations
    {
      size: 'M-01 Small',
      iconPosition: 'None',
      class: {
        base: 'px-3.5 py-2', // 8px 14px from API
      },
    },
    {
      size: 'M-01 Small',
      iconPosition: 'Only',
      class: {
        base: 'p-2', // 8px from API
      },
    },
    {
      size: 'M-01 Small',
      iconPosition: ['Leading', 'Trailing'],
      class: {
        base: 'px-3.5 py-2 gap-2', // 8px 14px with gap 8px from API
      },
    },
    {
      size: 'M-02 Medium',
      iconPosition: 'None',
      class: {
        base: 'px-4.5 py-2.5', // 10px 18px from API
      },
    },
    {
      size: 'M-02 Medium',
      iconPosition: 'Only',
      class: {
        base: 'p-2.5', // 10px from API
      },
    },
    {
      size: 'M-02 Medium',
      iconPosition: ['Leading', 'Trailing'],
      class: {
        base: 'px-4.5 py-2.5 gap-2', // 10px 18px with gap 8px from API
      },
    },
    {
      size: 'M-03 Large',
      iconPosition: 'None',
      class: {
        base: 'px-5 py-3', // 12px 20px from API
      },
    },
    {
      size: 'M-03 Large',
      iconPosition: 'Only',
      class: {
        base: 'p-3', // 12px from API
      },
    },
    {
      size: 'M-03 Large',
      iconPosition: ['Leading', 'Trailing'],
      class: {
        base: 'px-5 py-3 gap-2', // 12px 20px with gap 8px from API
      },
    },
    {
      size: 'M-04 Extra Large',
      iconPosition: 'None',
      class: {
        base: 'px-6 py-3.5', // 14px larger for text
      },
    },
    {
      size: 'M-04 Extra Large',
      iconPosition: 'Only',
      class: {
        base: 'p-3.5', // 14px from API
      },
    },
    {
      size: 'M-04 Extra Large',
      iconPosition: ['Leading', 'Trailing'],
      class: {
        base: 'px-6 py-3.5 gap-2', // 14px larger with gap 8px from API
      },
    },
    // Format and Theme combinations
    {
      format: 'F-01 Primary',
      theme: 'T-02 Grey',
      class: {
        base: 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-200',
        icon: 'text-white',
        label: 'text-white',
      },
    },
    {
      format: 'F-02 Secondary',
      theme: 'T-02 Grey',
      class: {
        base: 'border border-gray-300 bg-white hover:bg-gray-50 focus:ring-gray-100',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
    },
    {
      format: 'F-03 Tertiary',
      theme: 'T-02 Grey',
      class: {
        base: 'bg-transparent hover:bg-gray-100 focus:ring-gray-100',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
    },
    {
      format: 'F-04 Link',
      theme: 'T-02 Grey',
      class: {
        base: 'bg-transparent hover:underline focus:ring-gray-100',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
    },
  ],
})

export type E03ButtonVariantProps = VariantProps<typeof e03ButtonConfig>
export { e03ButtonConfig }
```

### React file JSX structure

```tsx
// e03-button.tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef, type HTMLAttributes } from 'react'
import { useE03Button } from './hooks/use-e03-button'
import type { E03ButtonProps } from './e03-button.d.ts'

export const E03Button = forwardRef<HTMLButtonElement, E03ButtonProps>(
  ({ className, ...props }, ref) => {
    const { e03ButtonRef, variant, e03ButtonStyle } = useE03Button({ ref, ...props })

    return (
      <button
        data-comp="e03-button"
        data-variant={variant}
        className={clsx(e03ButtonStyle(), className)}
        ref={e03ButtonRef}
        {...props}
      >
        {props.iconPosition !== 'None' && props.iconPosition !== 'Trailing' && (
          <span className={e03ButtonStyle.icon()}>{/* Icon will be rendered here */}</span>
        )}
        {props.iconPosition !== 'Only' && (
          <span className={e03ButtonStyle.label()}>{props.label}</span>
        )}
        {props.iconPosition === 'Trailing' && (
          <span className={e03ButtonStyle.icon()}>{/* Icon will be rendered here */}</span>
        )}
      </button>
    )
  }
)

E03Button.displayName = 'E03Button'

// Export types from the component's .d.ts file
export * from './e03-button.d.ts'
```

### Examples of component usage

```tsx
// Basic usage with default props
<E03Button label="Button" />

// Primary button with label
<E03Button 
  format="F-01 Primary"
  label="Primary Button"
  onClick={() => handleClick()}
/>

// Secondary button with label
<E03Button 
  format="F-02 Secondary"
  label="Secondary Button"
  onClick={() => handleClick()}
/>

// Tertiary button with label
<E03Button 
  format="F-03 Tertiary"
  label="Tertiary Button"
  onClick={() => handleClick()}
/>

// Link button with label
<E03Button 
  format="F-04 Link"
  label="Link Button"
  onClick={() => handleClick()}
/>

// Button with leading icon
<E03Button 
  format="F-01 Primary"
  iconPosition="Leading"
  icon="E-10 Circle"
  label="Button with Leading Icon"
  onClick={() => handleClick()}
/>

// Button with trailing icon
<E03Button 
  format="F-01 Primary"
  iconPosition="Trailing"
  icon="E-10 Circle"
  label="Button with Trailing Icon"
  onClick={() => handleClick()}
/>

// Icon-only button
<E03Button 
  format="F-01 Primary"
  iconPosition="Only"
  icon="E-10 Circle"
  onClick={() => handleClick()}
/>

// Small button
<E03Button 
  format="F-01 Primary"
  size="M-01 Small"
  label="Small Button"
  onClick={() => handleClick()}
/>

// Medium button
<E03Button 
  format="F-01 Primary"
  size="M-02 Medium"
  label="Medium Button"
  onClick={() => handleClick()}
/>

// Large button
<E03Button 
  format="F-01 Primary"
  size="M-03 Large"
  label="Large Button"
  onClick={() => handleClick()}
/>

// Extra large button
<E03Button 
  format="F-01 Primary"
  size="M-04 Extra Large"
  label="Extra Large Button"
  onClick={() => handleClick()}
/>

// Button with grey theme
<E03Button 
  format="F-01 Primary"
  theme="T-02 Grey"
  label="Grey Theme Button"
  onClick={() => handleClick()}
/>

// Button in hover state
<E03Button 
  format="F-01 Primary"
  state="S-01 Hover"
  label="Hover State Button"
  onClick={() => handleClick()}
/>

// Button in focused state
<E03Button 
  format="F-01 Primary"
  state="S-02 Focused"
  label="Focused State Button"
  onClick={() => handleClick()}
/>

// Disabled button
<E03Button 
  format="F-01 Primary"
  state="S-03 Disabled"
  label="Disabled Button"
  disabled
  onClick={() => handleClick()}
/>

// Usage in a form
<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    {/* Form fields would go here */}
    <div className="flex justify-end space-x-3 mt-6">
      <E03Button 
        format="F-03 Tertiary"
        label="Cancel"
        onClick={() => handleCancel()}
      />
      <E03Button 
        format="F-01 Primary"
        label="Submit"
        type="submit"
      />
    </div>
  </div>
</form>

// Usage in a card with icon buttons
<div className="flex justify-between items-center p-4 border rounded-lg">
  <h3 className="text-lg font-semibold">Card Title</h3>
  <div className="flex space-x-2">
    <E03Button 
      format="F-03 Tertiary"
      iconPosition="Only"
      icon="E-10 Circle"
      size="M-01 Small"
      aria-label="Edit"
      onClick={() => handleEdit()}
    />
    <E03Button 
      format="F-03 Tertiary"
      iconPosition="Only"
      icon="E-10 Circle"
      size="M-01 Small"
      aria-label="Delete"
      onClick={() => handleDelete()}
    />
  </div>
</div>
