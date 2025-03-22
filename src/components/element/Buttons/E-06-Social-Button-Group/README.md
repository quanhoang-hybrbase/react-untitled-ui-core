# Element/Buttons/E-06 Social Button Group

## UI Specification

### Component Name
E-06 Social Button Group

### Component Purpose
A Social Button Group is a UI component designed to display a collection of social buttons, typically used for user authentication or connection with third-party platforms. This component provides a streamlined and organized way to present multiple social login options, improving the user experience by offering flexibility and convenience.

### Unit test cases to validate props misconfiguration

```tsx
// Component naming test
describe('E06SocialButtonGroup', () => {
  it('should have the correct display name', () => {
    expect(E06SocialButtonGroup.displayName).toBe('E06SocialButtonGroup');
  });

  // Props names tests
  describe('Props names validation', () => {
    it('should accept format prop', () => {
      render(<E06SocialButtonGroup format="F-01 Buttons" />);
      // No error should be thrown
    });

    it('should accept theme prop', () => {
      render(<E06SocialButtonGroup theme="T-01 Brand Primary" />);
      // No error should be thrown
    });
  });

  // Props values tests
  describe('Props values validation', () => {
    // Format prop values
    it('should accept valid format values', () => {
      const { rerender } = render(<E06SocialButtonGroup format="F-01 Buttons" />);
      expect(screen.getByTestId('e06-social-button-group')).toHaveAttribute('data-format', 'F-01 Buttons');
      
      rerender(<E06SocialButtonGroup format="F-02 Icons" />);
      expect(screen.getByTestId('e06-social-button-group')).toHaveAttribute('data-format', 'F-02 Icons');
    });

    // Theme prop values
    it('should accept valid theme values', () => {
      const { rerender } = render(<E06SocialButtonGroup theme="T-01 Brand Primary" />);
      expect(screen.getByTestId('e06-social-button-group')).toHaveAttribute('data-theme', 'T-01 Brand Primary');
      
      rerender(<E06SocialButtonGroup theme="T-02 Brand Secondary" />);
      expect(screen.getByTestId('e06-social-button-group')).toHaveAttribute('data-theme', 'T-02 Brand Secondary');
      
      rerender(<E06SocialButtonGroup theme="T-03 Custom Color" />);
      expect(screen.getByTestId('e06-social-button-group')).toHaveAttribute('data-theme', 'T-03 Custom Color');
    });

    // Children rendering test
    it('should render children correctly', () => {
      render(
        <E06SocialButtonGroup format="F-01 Buttons" theme="T-01 Brand Primary">
          <button data-testid="child-button-1">Google</button>
          <button data-testid="child-button-2">Facebook</button>
        </E06SocialButtonGroup>
      );
      
      expect(screen.getByTestId('child-button-1')).toBeInTheDocument();
      expect(screen.getByTestId('child-button-2')).toBeInTheDocument();
    });
  });
});
```

### Props Definition as Typescript types

```tsx
// e06-social-button-group.d.ts
// Variant Props (🎨)
export interface E06SocialButtonGroupVariantProps {
  format: 'F-01 Buttons' | 'F-02 Icons';
  theme: 'T-01 Brand Primary' | 'T-02 Brand Secondary' | 'T-03 Custom Color';
}

// External Props (➡️)
export interface E06SocialButtonGroupExternalProps {
  // No external props defined in the Figma Documentation
}

// Data Props (📦)
export interface E06SocialButtonGroupDataProps {
  // No data props defined in the Figma Documentation
}

// Component Props
export interface E06SocialButtonGroupProps 
  extends E06SocialButtonGroupVariantProps, 
    E06SocialButtonGroupExternalProps,
    E06SocialButtonGroupDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: React.ReactNode;
}
```

### Component folder structure

```
src/
└── components/
    └── element/
        └── Buttons/
            └── E-06-Social-Button-Group/
                ├── README.md
                ├── e06-social-button-group.config.ts
                ├── e06-social-button-group.d.ts
                ├── parts/
                │   └── e06-social-button-group.tsx  # Main component file
                ├── hooks/
                │   └── use-e06-social-button-group.ts
                └── index.tsx  # Main export entry file
```

### Tailwind Variant styling configuration

```tsx
// e06-social-button-group.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e06SocialButtonGroupConfig = tv({
  slots: {
    base: 'flex', // Base container for the button group
    buttonContainer: '', // Container for individual buttons
  },
  variants: {
    format: {
      'F-01 Buttons': {
        // From Figma: Row layout with gap of 12px
        base: 'flex-row gap-3',
        buttonContainer: 'flex items-center',
      },
      'F-02 Icons': {
        // From Figma: Row layout with gap of 8px
        base: 'flex-row gap-2',
        buttonContainer: 'flex items-center',
      },
    },
    theme: {
      'T-01 Brand Primary': {
        // Default theme styling
        base: '',
        buttonContainer: '',
      },
      'T-02 Brand Secondary': {
        // Secondary theme styling
        base: '',
        buttonContainer: '',
      },
      'T-03 Custom Color': {
        // Custom color theme styling
        base: '',
        buttonContainer: '',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Buttons',
    theme: 'T-01 Brand Primary',
  },
})

export type E06SocialButtonGroupVariantProps = VariantProps<typeof e06SocialButtonGroupConfig>
export { e06SocialButtonGroupConfig }
```

### JSX Component Structure

Based on the Figma API data, the component structure would be:

```tsx
// e06-social-button-group.tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useE06SocialButtonGroup } from '../hooks/use-e06-social-button-group'
import type { E06SocialButtonGroupProps } from '../e06-social-button-group.d.ts'

export const E06SocialButtonGroup = forwardRef<HTMLDivElement, E06SocialButtonGroupProps>(
  ({ className, children, format = 'F-01 Buttons', theme = 'T-01 Brand Primary', ...props }, ref) => {
    const { socialButtonGroupRef, styles } = useE06SocialButtonGroup({ ref, format, theme, ...props })
    
    return (
      <div
        data-testid="e06-social-button-group"
        data-format={format}
        data-theme={theme}
        className={clsx(styles.base(), className)}
        ref={socialButtonGroupRef}
        {...props}
      >
        {/* Map through children and apply appropriate container styling */}
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.buttonContainer()}>
            {child}
          </div>
        ))}
      </div>
    )
  }
)

E06SocialButtonGroup.displayName = 'E06SocialButtonGroup'
```

### Examples of component usage

```tsx
// Example 1: Button format with Brand Primary theme
<E06SocialButtonGroup format="F-01 Buttons" theme="T-01 Brand Primary">
  <E05SocialButton format="F-01 Google" supportingText={true} label="Sign in with Google" />
  <E05SocialButton format="F-02 Facebook" supportingText={true} label="Sign in with Facebook" />
  <E05SocialButton format="F-03 Apple" supportingText={true} label="Sign in with Apple" />
</E06SocialButtonGroup>

// Example 2: Icon format with Brand Secondary theme
<E06SocialButtonGroup format="F-02 Icons" theme="T-02 Brand Secondary">
  <E05SocialButton format="F-01 Google" supportingText={false} />
  <E05SocialButton format="F-02 Facebook" supportingText={false} />
  <E05SocialButton format="F-03 Apple" supportingText={false} />
  <E05SocialButton format="F-04 Twitter" supportingText={false} />
</E06SocialButtonGroup>

// Example 3: Button format with Custom Color theme
<E06SocialButtonGroup format="F-01 Buttons" theme="T-03 Custom Color">
  <E05SocialButton format="F-01 Google" supportingText={true} label="Continue with Google" />
  <E05SocialButton format="F-05 Figma" supportingText={true} label="Continue with Figma" />
</E06SocialButtonGroup>

// Example 4: Icon format with Brand Primary theme in a login form
<form>
  <h2>Sign in with</h2>
  <E06SocialButtonGroup format="F-02 Icons" theme="T-01 Brand Primary">
    <E05SocialButton format="F-01 Google" supportingText={false} />
    <E05SocialButton format="F-02 Facebook" supportingText={false} />
    <E05SocialButton format="F-03 Apple" supportingText={false} />
  </E06SocialButtonGroup>
  <div className="mt-4">
    <label>Email</label>
    <input type="email" />
  </div>
  <div className="mt-2">
    <label>Password</label>
    <input type="password" />
  </div>
  <button type="submit" className="mt-4">Sign in</button>
</form>
```
