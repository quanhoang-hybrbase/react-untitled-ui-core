# Instruction 1.01: Create a implementation plan for parsing a React component

## E-00 Social Icon

### Component Description
A Social Icon is a UI component designed to represent a social media platform or brand logo.

## UI Specification

### Component Name
Element/Icons/E-00 Social Icon

### Component Purpose
The Social Icon component provides a visual representation of various social media platforms and brand logos, allowing users to identify and interact with different social media links or references within the interface.

### Unit Test Cases

#### Test Component Naming
1. Test that the component is named correctly as E00SocialIcon
2. Test that the component has the appropriate displayName (E00SocialIcon)

```jsx
// Example test for component naming
it('should have correct component name', () => {
  expect(E00SocialIcon.name).toBe('E00SocialIcon');
  expect(E00SocialIcon.displayName).toBe('E00SocialIcon');
});
```

#### Test Props Names
1. Test that the component accepts format prop
2. Test that the component accepts state prop
3. Test that the component accepts theme prop

```jsx
// Example test for props names
it('should accept all required props', () => {
  const { container } = render(<E00SocialIcon format="F-01 Facebook" state="S-00 Default" theme="T-01 Brand" />);
  expect(container.firstChild).toBeTruthy();
  
  // verify that props are passed correctly
  const socialIcon = container.firstChild;
  expect(socialIcon).toHaveAttribute('data-variant', 'F-01 Facebook S-00 Default T-01 Brand');
});
```

#### Test Props Values
1. Test that format prop accepts all allowed values: 'F-01 Facebook', 'F-02 X (Twitter)', 'F-03 Instagram', etc.
   ```jsx
   // Example test
   it('should render with different format values', () => {
     const formatValues = [
       'F-01 Facebook', 'F-02 X (Twitter)', 'F-03 Instagram', 'F-04 LinkedIn',
       // Add all remaining format values
     ];
     formatValues.forEach(format => {
       const { container } = render(<E00SocialIcon format={format} />);
       expect(container.firstChild).toHaveAttribute('data-variant', expect.stringContaining(format));
     });
   });
   ```

2. Test that state prop accepts 'S-00 Default' and 'S-01 Hover' values
   ```jsx
   it('should render with different state values', () => {
     const stateValues = ['S-00 Default', 'S-01 Hover'];
     stateValues.forEach(state => {
       const { container } = render(<E00SocialIcon state={state} />);
       expect(container.firstChild).toHaveAttribute('data-variant', expect.stringContaining(state));
     });
   });
   ```

3. Test that theme prop accepts 'T-01 Brand', 'T-02 Gray', and 'T-03 White' values
   ```jsx
   it('should render with different theme values', () => {
     const themeValues = ['T-01 Brand', 'T-02 Gray', 'T-03 White'];
     themeValues.forEach(theme => {
       const { container } = render(<E00SocialIcon theme={theme} />);
       expect(container.firstChild).toHaveAttribute('data-variant', expect.stringContaining(theme));
     });
   });
   ```

### Props Definition as TypeScript Types

```tsx
// social-icon.d.ts
// Variant Props (🎨)
export interface E00SocialIconVariantProps {
  format?: 'F-01 Facebook' | 'F-02 X (Twitter)' | 'F-03 Instagram' | 'F-04 LinkedIn' | 
    'F-05 Google' | 'F-06 YouTube' | 'F-07 Apple' | 'F-08 Snapchat' | 'F-09 Pinterest' | 
    'F-10 GitHub' | 'F-11 Layers' | 'F-12 Figma' | 'F-13 Dribbble' | 'F-14 Reddit' | 
    'F-15 Discord' | 'F-16 TikTok' | 'F-17 Tumblr' | 'F-18 Telegram' | 'F-19 Clubhouse' | 
    'F-20 Signal' | 'F-21 AngelList';
  state?: 'S-00 Default' | 'S-01 Hover';
  theme?: 'T-01 Brand' | 'T-02 Gray' | 'T-03 White';
}

// External Props (⚙️)
export interface E00SocialIconExternalProps {
  // No external props for this component
}

// Data Props (📦)
export interface E00SocialIconDataProps {
  // No data props for this component
}

// Component Props
export interface E00SocialIconProps 
  extends E00SocialIconVariantProps, 
    E00SocialIconExternalProps,
    E00SocialIconDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
```

### Component Folder Structure

Based on the analysis of the Figma API response and the instructions, the following folder structure is appropriate:

```
src/
└── components/
    └── element/
        └── Icons/
            └── E-00-Social-Icon/
                ├── README.md
                ├── hooks/
                │   └── use-social-icon.ts
                ├── social-icon.config.ts
                ├── social-icon.d.ts
                ├── social-icon.test.tsx
                └── social-icon.tsx
```

### Tailwind Variant Styling Configuration

From analyzing the Figma API response, I can see that each social icon has:
1. A base frame (`Part = Base`) with consistent dimensions of 24x24px
2. Vector elements inside with brand-specific colors
3. Different states (default, hover) and themes (brand, gray, white)

```tsx
// social-icon.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const socialIconConfig = tv({
  slots: {
    base: 'inline-flex items-center justify-center w-6 h-6', // 24x24px base frame from Figma
    icon: '' // Icon slot for the SVG icons
  },
  variants: {
    format: {
      'F-01 Facebook': {
        icon: 'text-[#1877F2]' // Facebook blue color from Figma (r:0.094, g:0.466, b:0.949)
      },
      'F-02 X (Twitter)': {
        icon: 'text-[#242E36]' // X (Twitter) black color from Figma (r:0.141, g:0.180, b:0.211)
      },
      'F-03 Instagram': {
        icon: 'text-[#000100]' // Instagram black color from Figma (r:0, g:0.003, b:0)
      },
      'F-04 LinkedIn': {
        icon: 'text-[#0A66C2]' // LinkedIn blue color from Figma (r:0.039, g:0.400, b:0.760)
      },
      // Additional formats with their brand colors...
      'F-05 Google': {
        icon: 'text-[#4285F4]' // Google blue color
      },
      'F-06 YouTube': {
        icon: 'text-[#FF0000]' // YouTube red color
      },
      'F-07 Apple': {
        icon: 'text-[#000000]' // Apple black color
      },
      // Continue with all other social platforms...
    },
    state: {
      'S-00 Default': {
        base: 'opacity-100' // Default state - full opacity
      },
      'S-01 Hover': {
        base: 'opacity-80' // Hover state - slightly reduced opacity
      }
    },
    theme: {
      'T-01 Brand': {
        // Uses the brand colors specified in the format variant
      },
      'T-02 Gray': {
        icon: 'text-gray-500' // Gray theme overrides brand colors
      },
      'T-03 White': {
        icon: 'text-white' // White theme overrides brand colors
      }
    }
  },
  defaultVariants: {
    format: 'F-01 Facebook', // Default format from Figma componentPropertyDefinitions
    state: 'S-00 Default',   // Default state from Figma componentPropertyDefinitions
    theme: 'T-01 Brand'      // Default theme from Figma componentPropertyDefinitions
  },
  compoundVariants: [
    // Override brand colors when theme is set to Gray or White
    {
      theme: 'T-02 Gray',
      class: {
        icon: 'text-gray-500'
      }
    },
    {
      theme: 'T-03 White',
      class: {
        icon: 'text-white'
      }
    }
  ]
})

export type E00SocialIconVariantProps = VariantProps<typeof socialIconConfig>
export { socialIconConfig }
```

### Component JSX Structure

Based on the Figma API response, the component structure is relatively simple. Each icon consists of vector shapes with specific brand colors. We'll use the lucide-react library for standard icons, and for any custom icons not available in lucide-react, we'll import them from the global assets directory.

```tsx
// social-icon.tsx
'use client'

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useSocialIcon } from './hooks/use-social-icon'
import type { E00SocialIconProps } from './social-icon.d.ts'
import { 
  Facebook, Twitter, Instagram, Linkedin, Mail, Youtube, 
  Github, Figma, Dribbble, Discord
  // Import standard icons from lucide-react
} from 'lucide-react'

// Import any custom icons not available in lucide-react from the global assets directory
import TikTokIcon from 'src/assets/icons/tiktok.svg'
import SnapchatIcon from 'src/assets/icons/snapchat.svg'
// Import other custom icons as needed

export const E00SocialIcon = forwardRef<HTMLDivElement, E00SocialIconProps>(
  ({ className, format = 'F-01 Facebook', state = 'S-00 Default', theme = 'T-01 Brand', ...props }, ref) => {
    const { socialIconRef, variant, socialIconStyle } = useSocialIcon({ ref, format, state, theme, ...props })

    // Map format to the appropriate icon component
    const renderIcon = () => {
      const { icon } = socialIconStyle()
      
      switch (format) {
        case 'F-01 Facebook':
          return <Facebook className={icon} size={24} />
        case 'F-02 X (Twitter)':
          return <Twitter className={icon} size={24} />
        case 'F-03 Instagram':
          return <Instagram className={icon} size={24} />
        case 'F-04 LinkedIn':
          return <Linkedin className={icon} size={24} />
        // Additional cases for other social platforms...
        default:
          return <Facebook className={icon} size={24} />
      }
    }

    return (
      <div
        data-comp="social-icon"
        data-variant={`${format} ${state} ${theme}`}
        className={clsx(socialIconStyle().base, className)}
        ref={socialIconRef}
        {...props}
      >
        {renderIcon()}
      </div>
    )
  }
)

E00SocialIcon.displayName = 'E00SocialIcon'

// Export types from the component's .d.ts file
export * from './social-icon.d.ts'
```

### Examples of Component Usage

```tsx
// Basic usage with default props
<E00SocialIcon />

// Specific social media platform
<E00SocialIcon format="F-04 LinkedIn" />

// Different theme
<E00SocialIcon format="F-10 GitHub" theme="T-02 Gray" />

// Hover state
<E00SocialIcon format="F-03 Instagram" state="S-01 Hover" />

// White theme for dark backgrounds
<E00SocialIcon format="F-15 Discord" theme="T-03 White" />

// Using in a social media links section
<div className="flex gap-4">
  <E00SocialIcon format="F-01 Facebook" />
  <E00SocialIcon format="F-02 X (Twitter)" />
  <E00SocialIcon format="F-03 Instagram" />
  <E00SocialIcon format="F-04 LinkedIn" />
</div>

// Using in a footer with all possible format values
<footer className="bg-gray-900 text-white p-8">
  <div className="grid grid-cols-4 gap-4">
    <E00SocialIcon format="F-01 Facebook" theme="T-03 White" />
    <E00SocialIcon format="F-02 X (Twitter)" theme="T-03 White" />
    <E00SocialIcon format="F-03 Instagram" theme="T-03 White" />
    <E00SocialIcon format="F-04 LinkedIn" theme="T-03 White" />
    <E00SocialIcon format="F-05 Google" theme="T-03 White" />
    <E00SocialIcon format="F-06 YouTube" theme="T-03 White" />
    <E00SocialIcon format="F-07 Apple" theme="T-03 White" />
    <E00SocialIcon format="F-08 Snapchat" theme="T-03 White" />
    <E00SocialIcon format="F-09 Pinterest" theme="T-03 White" />
    <E00SocialIcon format="F-10 GitHub" theme="T-03 White" />
    <E00SocialIcon format="F-11 Layers" theme="T-03 White" />
    <E00SocialIcon format="F-12 Figma" theme="T-03 White" />
    <E00SocialIcon format="F-13 Dribbble" theme="T-03 White" />
    <E00SocialIcon format="F-14 Reddit" theme="T-03 White" />
    <E00SocialIcon format="F-15 Discord" theme="T-03 White" />
    <E00SocialIcon format="F-16 TikTok" theme="T-03 White" />
    <E00SocialIcon format="F-17 Tumblr" theme="T-03 White" />
    <E00SocialIcon format="F-18 Telegram" theme="T-03 White" />
    <E00SocialIcon format="F-19 Clubhouse" theme="T-03 White" />
    <E00SocialIcon format="F-20 Signal" theme="T-03 White" />
    <E00SocialIcon format="F-21 AngelList" theme="T-03 White" />
  </div>
</footer>
