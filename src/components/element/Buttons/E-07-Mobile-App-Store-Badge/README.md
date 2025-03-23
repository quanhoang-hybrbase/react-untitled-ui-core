# Element/Buttons/E-07 Mobile App Store Badge

## UI Specification

### Component Name
E-07 Mobile App Store Badge

### Component Purpose
A Mobile App Store Badge is a clickable graphic element used in digital interfaces to promote and link users to an app's download page on popular app stores, such as the Apple App Store or Google Play Store. It serves as a recognizable, trustworthy, and convenient call-to-action for users to install a mobile application.

### Unit test cases to validate props misconfiguration

```tsx
// Component naming test
describe('E07MobileAppStoreBadge', () => {
  it('should have the correct display name', () => {
    expect(E07MobileAppStoreBadge.displayName).toBe('E07MobileAppStoreBadge');
  });

  // Props names tests
  describe('Props names validation', () => {
    it('should accept format prop', () => {
      render(<E07MobileAppStoreBadge format="F-01 Google Play" />);
      // No error should be thrown
    });

    it('should accept theme prop', () => {
      render(<E07MobileAppStoreBadge theme="T-01 Brand" />);
      // No error should be thrown
    });

    it('should accept size prop', () => {
      render(<E07MobileAppStoreBadge size="M-01 Medium" />);
      // No error should be thrown
    });
  });

  // Props values tests
  describe('Props values validation', () => {
    // Format prop values
    it('should accept valid format values', () => {
      const { rerender } = render(<E07MobileAppStoreBadge format="F-01 Google Play" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-format', 'F-01 Google Play');
      
      rerender(<E07MobileAppStoreBadge format="F-02 App Store" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-format', 'F-02 App Store');
      
      rerender(<E07MobileAppStoreBadge format="F-03 Galaxy Store" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-format', 'F-03 Galaxy Store');
      
      rerender(<E07MobileAppStoreBadge format="F-04 AppGallery" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-format', 'F-04 AppGallery');
      
      rerender(<E07MobileAppStoreBadge format="F-05 F-Droid" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-format', 'F-05 F-Droid');
    });

    // Theme prop values
    it('should accept valid theme values', () => {
      const { rerender } = render(<E07MobileAppStoreBadge theme="T-01 Brand" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-theme', 'T-01 Brand');
      
      rerender(<E07MobileAppStoreBadge theme="T-02 Black" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-theme', 'T-02 Black');
      
      rerender(<E07MobileAppStoreBadge theme="T-03 White" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-theme', 'T-03 White');
    });

    // Size prop values
    it('should accept valid size values', () => {
      const { rerender } = render(<E07MobileAppStoreBadge size="M-01 Medium" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-size', 'M-01 Medium');
      
      rerender(<E07MobileAppStoreBadge size="M-02 Large" />);
      expect(screen.getByTestId('e07-mobile-app-store-badge')).toHaveAttribute('data-size', 'M-02 Large');
    });
  });
});
```

### Props Definition as Typescript types

```tsx
// e07-mobile-app-store-badge.d.ts
// Variant Props (🎨)
export interface E07MobileAppStoreBadgeVariantProps {
  format: 'F-01 Google Play' | 'F-02 App Store' | 'F-03 Galaxy Store' | 'F-04 AppGallery' | 'F-05 F-Droid';
  theme: 'T-01 Brand' | 'T-02 Black' | 'T-03 White';
  size: 'M-01 Medium' | 'M-02 Large';
}

// External Props (⚙️)
export interface E07MobileAppStoreBadgeExternalProps {
  // No external props defined in the Figma Documentation
}

// Data Props (📦)
export interface E07MobileAppStoreBadgeDataProps {
  // No data props defined in the Figma Documentation
}

// Component Props
export interface E07MobileAppStoreBadgeProps 
  extends E07MobileAppStoreBadgeVariantProps, 
    E07MobileAppStoreBadgeExternalProps,
    E07MobileAppStoreBadgeDataProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {}
```

### Component folder structure

```
src/
└── components/
    └── element/
        └── Buttons/
            └── E-07-Mobile-App-Store-Badge/
                ├── README.md
                ├── e07-mobile-app-store-badge.config.ts
                ├── e07-mobile-app-store-badge.d.ts
                ├── parts/
                │   └── e07-mobile-app-store-badge.tsx  # Main component file
                ├── hooks/
                │   └── use-e07-mobile-app-store-badge.ts
                ├── assets/
                │   ├── google-play.svg
                │   ├── app-store.svg
                │   ├── galaxy-store.svg
                │   ├── app-gallery.svg
                │   └── f-droid.svg
                └── index.tsx  # Main export entry file
```

### Tailwind Variant styling configuration

```tsx
// e07-mobile-app-store-badge.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const e07MobileAppStoreBadgeConfig = tv({
  slots: {
    // Base container for the badge
    base: 'inline-flex items-center justify-center transition-colors rounded-md cursor-pointer',
    // Container for the badge content
    content: 'relative flex items-center justify-between',
    // Badge logo
    logo: 'flex items-center justify-center',
    // Text container (for multi-line badges)
    textContainer: 'flex flex-col',
    // "Get it on" or similar text
    topText: 'text-xs font-normal',
    // Store name text
    storeText: 'font-semibold',
  },
  variants: {
    format: {
      'F-01 Google Play': {
        // From Figma: Dark background with Google Play branding
        base: 'bg-gray-900',
        logo: 'mr-3',
        // The Google Play logo has a specific structure
        textContainer: 'flex-col',
        topText: 'text-gray-300',
        storeText: 'text-white',
      },
      'F-02 App Store': {
        // From Figma: App Store badge style
        base: 'bg-black',
        logo: 'mr-2', // Apple logo
        textContainer: 'flex-col',
        topText: 'text-gray-300',
        storeText: 'text-white',
      },
      'F-03 Galaxy Store': {
        // From Figma: Samsung Galaxy Store styling
        base: 'bg-[#1428A0]', // Samsung blue
        logo: 'mr-2',
        textContainer: 'flex-col',
        topText: 'text-blue-100',
        storeText: 'text-white',
      },
      'F-04 AppGallery': {
        // From Figma: Huawei AppGallery styling
        base: 'bg-white border border-gray-200',
        logo: 'mr-2 text-[#FF0000]', // Huawei red
        textContainer: 'flex-col',
        topText: 'text-gray-600',
        storeText: 'text-gray-900',
      },
      'F-05 F-Droid': {
        // From Figma: F-Droid styling
        base: 'bg-[#1976D2]', // F-Droid blue
        logo: 'mr-2',
        textContainer: 'flex-col',
        topText: 'text-blue-100',
        storeText: 'text-white',
      },
    },
    theme: {
      'T-01 Brand': {
        // Default brand styling from Figma
        base: '',
      },
      'T-02 Black': {
        // From Figma: Black theme variant
        base: 'bg-gray-900',
        topText: 'text-gray-300',
        storeText: 'text-white',
      },
      'T-03 White': {
        // From Figma: White theme variant
        base: 'bg-white border border-gray-200',
        topText: 'text-gray-600',
        storeText: 'text-gray-900',
      },
    },
    size: {
      'M-01 Medium': {
        // From Figma: Medium size variant (default)
        base: 'px-3 py-2 h-10',
        storeText: 'text-sm',
        topText: 'text-xs',
        logo: 'h-5 w-5',
      },
      'M-02 Large': {
        // From Figma: Large size variant
        base: 'px-4 py-3 h-14',
        storeText: 'text-base',
        topText: 'text-sm',
        logo: 'h-7 w-7',
      },
    },
  },
  defaultVariants: {
    format: 'F-01 Google Play',
    theme: 'T-01 Brand',
    size: 'M-01 Medium',
  },
  compoundVariants: [
    // Override certain combinations of variants
    {
      format: 'F-01 Google Play',
      theme: 'T-03 White',
      class: {
        base: 'bg-white border border-gray-200',
        topText: 'text-gray-600',
        storeText: 'text-gray-900',
      },
    },
    {
      format: 'F-02 App Store',
      theme: 'T-03 White',
      class: {
        base: 'bg-white border border-gray-200',
        topText: 'text-gray-600',
        storeText: 'text-gray-900',
      },
    },
    // Add more compound variants as needed
  ],
})

export type E07MobileAppStoreBadgeVariantProps = VariantProps<typeof e07MobileAppStoreBadgeConfig>
export { e07MobileAppStoreBadgeConfig }
```

### JSX Component Structure

Based on the Figma API data, the component structure would be:

```tsx
// e07-mobile-app-store-badge.tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useE07MobileAppStoreBadge } from '../hooks/use-e07-mobile-app-store-badge'
import type { E07MobileAppStoreBadgeProps } from '../e07-mobile-app-store-badge.d.ts'

// Import SVG assets (these would be in the assets folder)
import GooglePlayLogo from '../assets/google-play.svg'
import AppStoreLogo from '../assets/app-store.svg'
import GalaxyStoreLogo from '../assets/galaxy-store.svg'
import AppGalleryLogo from '../assets/app-gallery.svg'
import FDroidLogo from '../assets/f-droid.svg'

export const E07MobileAppStoreBadge = forwardRef<HTMLAnchorElement, E07MobileAppStoreBadgeProps>(
  ({ 
    className,
    format = 'F-01 Google Play', 
    theme = 'T-01 Brand', 
    size = 'M-01 Medium',
    ...props 
  }, ref) => {
    const { badgeRef, styles } = useE07MobileAppStoreBadge({ 
      ref, 
      format, 
      theme, 
      size,
      ...props 
    })
    
    // Define badge content based on format
    const getBadgeContent = () => {
      switch (format) {
        case 'F-01 Google Play':
          return {
            logo: <GooglePlayLogo className={styles.logo()} />,
            topText: 'GET IT ON',
            storeText: 'Google Play'
          }
        case 'F-02 App Store':
          return {
            logo: <AppStoreLogo className={styles.logo()} />,
            topText: 'Download on the',
            storeText: 'App Store'
          }
        case 'F-03 Galaxy Store':
          return {
            logo: <GalaxyStoreLogo className={styles.logo()} />,
            topText: 'AVAILABLE ON',
            storeText: 'Galaxy Store'
          }
        case 'F-04 AppGallery':
          return {
            logo: <AppGalleryLogo className={styles.logo()} />,
            topText: 'EXPLORE IT ON',
            storeText: 'AppGallery'
          }
        case 'F-05 F-Droid':
          return {
            logo: <FDroidLogo className={styles.logo()} />,
            topText: 'GET IT ON',
            storeText: 'F-Droid'
          }
        default:
          return {
            logo: <GooglePlayLogo className={styles.logo()} />,
            topText: 'GET IT ON',
            storeText: 'Google Play'
          }
      }
    }
    
    const badgeContent = getBadgeContent()
    
    return (
      <a
        data-testid="e07-mobile-app-store-badge"
        data-format={format}
        data-theme={theme}
        data-size={size}
        className={clsx(styles.base(), className)}
        ref={badgeRef}
        {...props}
      >
        <div className={styles.content()}>
          {badgeContent.logo}
          <div className={styles.textContainer()}>
            <span className={styles.topText()}>{badgeContent.topText}</span>
            <span className={styles.storeText()}>{badgeContent.storeText}</span>
          </div>
        </div>
      </a>
    )
  }
)

E07MobileAppStoreBadge.displayName = 'E07MobileAppStoreBadge'
```

### Examples of component usage

```tsx
// Google Play badge with default theme and medium size
<E07MobileAppStoreBadge
  format="F-01 Google Play"
  theme="T-01 Brand"
  size="M-01 Medium"
  href="https://play.google.com/store/apps/details?id=com.example.app"
  target="_blank"
  rel="noopener noreferrer"
/>

// App Store badge with black theme and large size
<E07MobileAppStoreBadge
  format="F-02 App Store"
  theme="T-02 Black"
  size="M-02 Large"
  href="https://apps.apple.com/app/your-app-id"
  target="_blank"
  rel="noopener noreferrer"
/>

// Galaxy Store badge with white theme
<E07MobileAppStoreBadge
  format="F-03 Galaxy Store"
  theme="T-03 White"
  size="M-01 Medium"
  href="https://galaxystore.samsung.com/detail/com.example.app"
  target="_blank"
  rel="noopener noreferrer"
/>

// AppGallery badge with brand theme
<E07MobileAppStoreBadge
  format="F-04 AppGallery"
  theme="T-01 Brand"
  size="M-01 Medium"
  href="https://appgallery.huawei.com/#/app/C123456"
  target="_blank"
  rel="noopener noreferrer"
/>

// F-Droid badge with large size
<E07MobileAppStoreBadge
  format="F-05 F-Droid"
  theme="T-01 Brand"
  size="M-02 Large"
  href="https://f-droid.org/packages/com.example.app/"
  target="_blank"
  rel="noopener noreferrer"
/>

// Usage in a app download section
<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
  <h3 className="text-xl font-semibold">Download Our App</h3>
  <div className="flex flex-wrap gap-3">
    <E07MobileAppStoreBadge
      format="F-01 Google Play"
      theme="T-02 Black"
      href="https://play.google.com/store/apps/details?id=com.example.app"
      target="_blank"
      rel="noopener noreferrer"
    />
    <E07MobileAppStoreBadge
      format="F-02 App Store"
      theme="T-02 Black"
      href="https://apps.apple.com/app/your-app-id"
      target="_blank"
      rel="noopener noreferrer"
    />
  </div>
</div>
```
