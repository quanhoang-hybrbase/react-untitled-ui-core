# Element/Buttons/E-05 Social Button

## UI Specification

### Component Name
E-05 Social Button

### Component Purpose
A Social Button is a user interface element that allows users to authenticate, sign in, or perform specific actions by connecting their social media or third-party accounts. These buttons streamline the login process, enhancing convenience and reducing the need for manual form inputs like email and password.

## Unit test cases to validate props misconfiguration

```tsx
// Component naming test
describe('E05SocialButton', () => {
  it('should have the correct display name', () => {
    expect(E05SocialButton.displayName).toBe('E05SocialButton');
  });

  // Props names tests
  describe('Props names validation', () => {
    it('should accept format prop', () => {
      render(<E05SocialButton format="F-01 Google" />);
      // No error should be thrown
    });

    it('should accept state prop', () => {
      render(<E05SocialButton state="S-00 Default" />);
      // No error should be thrown
    });

    it('should accept theme prop', () => {
      render(<E05SocialButton theme="T-01 Brand Primary" />);
      // No error should be thrown
    });

    it('should accept supportingText prop', () => {
      render(<E05SocialButton supportingText={true} />);
      // No error should be thrown
    });

    it('should accept label prop', () => {
      render(<E05SocialButton label="Sign in with Google" />);
      // No error should be thrown
    });
  });

  // Props values tests
  describe('Props values validation', () => {
    // Format prop values
    it('should accept valid format values', () => {
      const { rerender } = render(<E05SocialButton format="F-01 Google" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-01 Google');
      
      rerender(<E05SocialButton format="F-02 Facebook" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-02 Facebook');
      
      rerender(<E05SocialButton format="F-03 Apple" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-03 Apple');
      
      rerender(<E05SocialButton format="F-04 Twitter" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-04 Twitter');
      
      rerender(<E05SocialButton format="F-05 Figma" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-05 Figma');
      
      rerender(<E05SocialButton format="F-06 Dribbble" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-format', 'F-06 Dribbble');
    });

    // State prop values
    it('should accept valid state values', () => {
      const { rerender } = render(<E05SocialButton state="S-00 Default" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-state', 'S-00 Default');
      
      rerender(<E05SocialButton state="S-01 Hover" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-state', 'S-01 Hover');
      
      rerender(<E05SocialButton state="S-02 Focused" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-state', 'S-02 Focused');
    });

    // Theme prop values
    it('should accept valid theme values', () => {
      const { rerender } = render(<E05SocialButton theme="T-01 Brand Primary" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-theme', 'T-01 Brand Primary');
      
      rerender(<E05SocialButton theme="T-02 Brand Secondary" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-theme', 'T-02 Brand Secondary');
      
      rerender(<E05SocialButton theme="T-03 Custom Color" />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-theme', 'T-03 Custom Color');
    });

    // supportingText prop values
    it('should accept valid supportingText values', () => {
      const { rerender } = render(<E05SocialButton supportingText={false} />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-supporting-text', 'false');
      
      rerender(<E05SocialButton supportingText={true} />);
      expect(screen.getByTestId('e05-social-button')).toHaveAttribute('data-supporting-text', 'true');
    });

    // label prop values
    it('should display the correct label text', () => {
      render(<E05SocialButton supportingText={true} label="Sign in with Google" />);
      expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
    });
  });
});

```

### Props Definition as Typescript types

```tsx
// e05-social-button.d.ts
// Variant Props (🎨)
export interface E05SocialButtonVariantProps {
  format: 'F-01 Google' | 'F-02 Facebook' | 'F-03 Apple' | 'F-04 Twitter' | 'F-05 Figma' | 'F-06 Dribbble';
  state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused';
  theme: 'T-01 Brand Primary' | 'T-02 Brand Secondary' | 'T-03 Custom Color';
}

// External Props (➡️)
export interface E05SocialButtonExternalProps {
  supportingText: boolean;
}

// Data Props (📦)
export interface E05SocialButtonDataProps {
  label: string;
}

// Component Props
export interface E05SocialButtonProps 
  extends E05SocialButtonVariantProps, 
    E05SocialButtonExternalProps,
    E05SocialButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component folder structure

```
src/
└── components/
    └── element/
        └── Buttons/
            └── E-05-Social-Button/
                ├── README.md
                ├── e05-social-button.config.ts
                ├── e05-social-button.d.ts
                ├── parts/
                │   └── e05-social-button.tsx  # Main component file
                ├── hooks/
                │   └── use-e05-social-button.ts
                └── index.tsx  # Main export entry file
```

### Tailwind Variant styling configuration

```tsx
// e05-social-button.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e05SocialButtonConfig = tv({
  slots: {
    base: 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-4',
    icon: 'flex items-center justify-center',
    label: 'font-semibold text-base',
  },
  variants: {
    format: {
      'F-01 Google': {
        base: 'border border-gray-200 bg-white',
        icon: 'text-gray-700',
        label: 'text-gray-700',
        // Google icon colors are handled separately in the component
      },
      'F-02 Facebook': {
        base: 'bg-[#1877F2] hover:bg-[#0C63D4]', // Facebook blue color
        icon: 'text-white',
        label: 'text-white',
      },
      'F-03 Apple': {
        base: 'bg-black hover:bg-gray-900',
        icon: 'text-white',
        label: 'text-white',
      },
      'F-04 Twitter': {
        base: 'bg-[#1DA1F2] hover:bg-[#0C8BD9]', // Twitter blue color
        icon: 'text-white',
        label: 'text-white',
      },
      'F-05 Figma': {
        base: 'bg-black hover:bg-gray-900',
        icon: 'text-white',
        label: 'text-white',
      },
      'F-06 Dribbble': {
        base: 'bg-[#EA4C89] hover:bg-[#E62872]', // Dribbble pink color
        icon: 'text-white',
        label: 'text-white',
      },
    },
    state: {
      'S-00 Default': {},
      'S-01 Hover': {}, // Hover styles are handled in the format variants
      'S-02 Focused': {
        base: 'ring-4 ring-gray-100', // Focus ring
      },
    },
    theme: {
      'T-01 Brand Primary': {},
      'T-02 Brand Secondary': {
        base: 'border border-gray-200 bg-white',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
      'T-03 Custom Color': {}, // Custom colors would be handled via style props
    },
    supportingText: {
      true: {
        base: 'px-4 py-2.5 gap-3', // Padding for button with label
      },
      false: {
        base: 'p-2.5', // Padding for icon-only button
        label: 'hidden',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Google',
    state: 'S-00 Default',
    theme: 'T-01 Brand Primary',
    supportingText: true,
  },
  compoundVariants: [
    // Specific combinations of variants
    {
      format: 'F-01 Google',
      theme: 'T-02 Brand Secondary',
      class: {
        base: 'border border-gray-200 bg-white',
        icon: 'text-gray-700',
        label: 'text-gray-700',
      },
    },
    {
      state: 'S-02 Focused',
      format: 'F-02 Facebook',
      class: {
        base: 'ring-blue-100', // Facebook focus ring color
      },
    },
    {
      state: 'S-02 Focused',
      format: 'F-04 Twitter',
      class: {
        base: 'ring-blue-100', // Twitter focus ring color
      },
    },
    {
      state: 'S-02 Focused',
      format: 'F-06 Dribbble',
      class: {
        base: 'ring-pink-100', // Dribbble focus ring color
      },
    },
  ],
})

export type E05SocialButtonVariantProps = VariantProps<typeof e05SocialButtonConfig>
export { e05SocialButtonConfig }
```

### Examples of component usage

```tsx
// Basic usage with default props
<E05SocialButton />

// Google sign-in button with label
<E05SocialButton 
  format="F-01 Google"
  supportingText={true}
  label="Sign in with Google"
  onClick={() => handleGoogleSignIn()}
/>

// Facebook sign-in button with label
<E05SocialButton 
  format="F-02 Facebook"
  supportingText={true}
  label="Continue with Facebook"
  onClick={() => handleFacebookSignIn()}
/>

// Apple sign-in button with label
<E05SocialButton 
  format="F-03 Apple"
  supportingText={true}
  label="Sign in with Apple"
  onClick={() => handleAppleSignIn()}
/>

// Twitter sign-in button with label
<E05SocialButton 
  format="F-04 Twitter"
  supportingText={true}
  label="Sign in with Twitter"
  onClick={() => handleTwitterSignIn()}
/>

// Figma sign-in button with label
<E05SocialButton 
  format="F-05 Figma"
  supportingText={true}
  label="Continue with Figma"
  onClick={() => handleFigmaSignIn()}
/>

// Dribbble sign-in button with label
<E05SocialButton 
  format="F-06 Dribbble"
  supportingText={true}
  label="Sign in with Dribbble"
  onClick={() => handleDribbbleSignIn()}
/>

// Icon-only button (no label)
<E05SocialButton 
  format="F-01 Google"
  supportingText={false}
  onClick={() => handleGoogleSignIn()}
/>

// Button with focused state
<E05SocialButton 
  format="F-02 Facebook"
  state="S-02 Focused"
  supportingText={true}
  label="Continue with Facebook"
  onClick={() => handleFacebookSignIn()}
/>

// Button with secondary theme
<E05SocialButton 
  format="F-01 Google"
  theme="T-02 Brand Secondary"
  supportingText={true}
  label="Sign in with Google"
  onClick={() => handleGoogleSignIn()}
/>

// Usage in a sign-in form
<form onSubmit={handleSubmit}>
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Sign in to your account</h2>
    <p className="text-gray-500">Choose your preferred sign-in method</p>
    
    <div className="space-y-3">
      <E05SocialButton 
        format="F-01 Google"
        supportingText={true}
        label="Sign in with Google"
        onClick={() => handleGoogleSignIn()}
        className="w-full"
      />
      
      <E05SocialButton 
        format="F-02 Facebook"
        supportingText={true}
        label="Continue with Facebook"
        onClick={() => handleFacebookSignIn()}
        className="w-full"
      />
      
      <E05SocialButton 
        format="F-03 Apple"
        supportingText={true}
        label="Sign in with Apple"
        onClick={() => handleAppleSignIn()}
        className="w-full"
      />
    </div>
    
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">Or continue with</span>
      </div>
    </div>
    
    {/* Email/password form fields would go here */}
  </div>
</form>

// Usage in a registration page with icon-only buttons
<div className="flex justify-center space-x-4 my-6">
  <E05SocialButton 
    format="F-01 Google"
    supportingText={false}
    onClick={() => handleGoogleSignIn()}
  />
  
  <E05SocialButton 
    format="F-02 Facebook"
    supportingText={false}
    onClick={() => handleFacebookSignIn()}
  />
  
  <E05SocialButton 
    format="F-03 Apple"
    supportingText={false}
    onClick={() => handleAppleSignIn()}
  />
  
  <E05SocialButton 
    format="F-04 Twitter"
    supportingText={false}
    onClick={() => handleTwitterSignIn()}
  />
</div>
