# E-04 Destructive Button

## UI Specification

### Component Name
Element/Buttons/E-04 Destructive Button

### Component Purpose
A Destructive Button is a type of action button used to perform critical or irreversible actions, typically associated with deletion, removal, or significant changes that may impact data or user settings. It is designed to draw attention and caution the user before proceeding.

### Unit Test Cases
To validate if the props are used correctly, the following unit test cases should be implemented:

1. **Format Prop Validation**
   - Test rendering with default format (F-01 Primary)
   - Test rendering with F-02 Secondary format
   - Test rendering with F-03 Tertiary format
   - Test rendering with F-04 Link format
   - Test that the component applies the correct styling for each format

2. **State Prop Validation**
   - Test rendering with default state (S-00 Default)
   - Test rendering with S-01 Hover state
   - Test rendering with S-02 Focused state
   - Test rendering with S-03 Disabled state
   - Test that the component applies the correct styling for each state
   - Test that disabled buttons cannot be clicked

3. **Size Prop Validation**
   - Test rendering with default size (M-01 Small)
   - Test rendering with M-02 Medium size
   - Test rendering with M-03 Large size
   - Test rendering with M-04 Extra Large size
   - Test that the component applies the correct sizing for each option

4. **Icon Position Prop Validation**
   - Test rendering with default iconPosition (None)
   - Test rendering with Leading icon position
   - Test rendering with Trailing icon position
   - Test rendering with Only icon (no label)
   - Test that icons are positioned correctly based on the iconPosition prop

5. **Data Props Validation**
   - Test rendering with default label text ("Button")
   - Test rendering with custom label text
   - Test rendering with default icon (E-10 Circle)
   - Test rendering with custom icon
   - Test that the component correctly displays the provided label and icon

6. **Accessibility Validation**
   - Test keyboard navigation
   - Test screen reader accessibility
   - Test that proper ARIA attributes are applied
   - Test focus management

### Props Definition as TypeScript Types

```ts
// Variant Props (🎨)
export interface E04DestructiveButtonVariantProps {
  format: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  size: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (⚙️)
export interface E04DestructiveButtonExternalProps {
  iconPosition: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface E04DestructiveButtonDataProps {
  label: string;
  icon: Icon; // from lucide-react
}

// Component Props
export interface E04DestructiveButtonProps 
  extends E04DestructiveButtonVariantProps, 
    E04DestructiveButtonExternalProps,
    E04DestructiveButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component Folder Structure

```
components/
└── element/
    └── Buttons/
        └── E-04-Destructive-Button/
            ├── parts/
            ├── tests/
            │   └── e-04-destructive-button.test.tsx
            ├── hooks/
            │   └── use-e-04-destructive-button.ts
            ├── e-04-destructive-button.d.ts
            ├── e-04-destructive-button.config.ts
            ├── e-04-destructive-button.mock.ts
            ├── README.md
            └── index.tsx
```

### Component Variants Structure from Figma API

Based on the Figma API response, the E-04 Destructive Button component has multiple variants with the following structure:

```
Element/Buttons/E-04 Destructive Button / Format=F-01 Primary, State=S-00 Default, Size=M-02 Medium, iconPosition=None
└── Part = Base (Frame)
    └── Part = Base (Text: "Button")

Element/Buttons/E-04 Destructive Button / Format=F-02 Secondary, State=S-00 Default, Size=M-02 Medium, iconPosition=None
└── Part = Base (Frame)
    └── Part = Base (Text: "Button")

Element/Buttons/E-04 Destructive Button / Format=F-03 Tertiary, State=S-00 Default, Size=M-02 Medium, iconPosition=None
└── Part = Base (Frame)
    └── Part = Base (Text: "Button")

Element/Buttons/E-04 Destructive Button / Format=F-04 Link, State=S-00 Default, Size=M-02 Medium, iconPosition=None
└── Part = Base (Frame)
    └── Part = Base (Text: "Button")
```

Each variant consists of a base frame with text content. The variants differ in styling according to their format, state, size, and icon position.

### Tailwind Variant Styling Configuration

From the Figma API data, I've extracted relevant styling information to configure the Tailwind Variants:

```ts
// e-04-destructive-button.config.ts
import { tv } from 'tailwind-variants';

export const destructiveButtonStyles = tv({
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
        base: 'bg-error-600 text-white hover:bg-error-700 focus-visible:ring-error-500',
      },
      'F-02 Secondary': {
        base: 'bg-white border border-error-300 text-error-700 hover:bg-error-50 focus-visible:ring-error-500',
      },
      'F-03 Tertiary': {
        base: 'bg-transparent text-error-700 hover:bg-error-100 focus-visible:ring-error-500',
      },
      'F-04 Link': {
        base: 'bg-transparent text-error-600 hover:text-error-700 underline focus-visible:ring-error-500 p-0',
      },
    },
    state: {
      'S-00 Default': {},
      'S-01 Hover': {
        base: 'hover:shadow-sm',
      },
      'S-02 Focused': {
        base: 'ring-2',
      },
      'S-03 Disabled': {
        base: 'opacity-50 cursor-not-allowed',
      },
    },
    size: {
      'M-01 Small': {
        base: 'text-sm py-2 px-3.5 gap-1.5',
        icon: 'h-4 w-4',
        // From Figma: padding: "8px 14px"
      },
      'M-02 Medium': {
        base: 'text-base py-2.5 px-4 gap-2',
        icon: 'h-5 w-5',
        // From Figma: padding: "10px 18px"
      },
      'M-03 Large': {
        base: 'text-lg py-3 px-5 gap-2.5',
        icon: 'h-6 w-6',
        // From Figma: padding: "12px 20px"
      },
      'M-04 Extra Large': {
        base: 'text-xl py-4 px-6 gap-3',
        icon: 'h-7 w-7',
        // From Figma: padding: "14px 24px"
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
        base: '', // Padding will be set in compound variants
      }
    }
  },
  compoundVariants: [
    // Icon-only button sizes with appropriate padding from Figma
    {
      iconPosition: 'Only',
      size: 'M-01 Small',
      class: {
        base: 'p-2', // From Figma: padding: "8px"
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-02 Medium',
      class: {
        base: 'p-2.5', // From Figma: padding: "10px"
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-03 Large',
      class: {
        base: 'p-3', // From Figma: padding: "12px"
      }
    },
    {
      iconPosition: 'Only',
      size: 'M-04 Extra Large',
      class: {
        base: 'p-3.5', // From Figma: padding: "14px"
      }
    },
  ],
  defaultVariants: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-01 Small',
    iconPosition: 'None',
  }
});
```

### Component JSX Structure

Based on the Figma API data and component structure, here's how the E-04 Destructive Button would be implemented:

```tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef } from 'react'
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
    icon: Icon = Circle,
    disabled = state === 'S-03 Disabled',
    ...props
  }, ref) => {
    const { 
      buttonRef, 
      variant,
      styles 
    } = useE04DestructiveButton({ 
      ref, 
      format, 
      state, 
      size, 
      iconPosition 
    })

    const showIcon = iconPosition !== 'None'
    const showLabel = iconPosition !== 'Only'

    return (
      <button
        data-comp="e-04-destructive-button"
        data-variant={variant}
        className={clsx(styles.base(), className)}
        disabled={disabled}
        ref={buttonRef}
        {...props}
      >
        {showIcon && <Icon className={styles.icon()} />}
        {showLabel && <span className={styles.label()}>{label}</span>}
      </button>
    )
  }
)

E04DestructiveButton.displayName = 'E04DestructiveButton'

export * from './e-04-destructive-button.d.ts'
```

### Examples of Component Usage

**Basic Usage:**
```tsx
// Default (Primary Small Destructive Button)
<E04DestructiveButton 
  label="Delete" 
  onClick={() => handleDelete(id)} 
/>

// Secondary Medium Destructive Button
<E04DestructiveButton 
  format="F-02 Secondary"
  size="M-02 Medium"
  label="Remove Item" 
  onClick={handleRemoveItem} 
/>

// Tertiary Large Destructive Button
<E04DestructiveButton 
  format="F-03 Tertiary"
  size="M-03 Large"
  label="Cancel Subscription" 
  onClick={handleCancelSubscription} 
/>

// Link Destructive Button
<E04DestructiveButton 
  format="F-04 Link"
  label="Delete Account" 
  onClick={handleDeleteAccount} 
/>
```

**With Icons:**
```tsx
// Destructive Button with Leading Icon
<E04DestructiveButton 
  label="Delete File" 
  iconPosition="Leading"
  icon={Trash2} 
  onClick={handleDeleteFile} 
/>

// Destructive Button with Trailing Icon
<E04DestructiveButton 
  label="Remove User" 
  iconPosition="Trailing"
  icon={UserMinus} 
  onClick={handleRemoveUser} 
/>

// Icon-Only Destructive Button
<E04DestructiveButton 
  iconPosition="Only"
  icon={Trash2} 
  aria-label="Delete Item"
  onClick={handleDeleteItem} 
/>
```

**Different States:**
```tsx
// Hover State
<E04DestructiveButton 
  label="Delete" 
  state="S-01 Hover"
  onClick={handleDelete} 
/>

// Focused State
<E04DestructiveButton 
  label="Delete" 
  state="S-02 Focused"
  onClick={handleDelete} 
/>

// Disabled State
<E04DestructiveButton 
  label="Delete" 
  state="S-03 Disabled"
  onClick={handleDelete} 
/>
```

**Size Variations:**
```tsx
// Small Size
<E04DestructiveButton 
  label="Delete" 
  size="M-01 Small"
  onClick={handleDelete} 
/>

// Medium Size
<E04DestructiveButton 
  label="Delete" 
  size="M-02 Medium"
  onClick={handleDelete} 
/>

// Large Size
<E04DestructiveButton 
  label="Delete" 
  size="M-03 Large"
  onClick={handleDelete} 
/>

// Extra Large Size
<E04DestructiveButton 
  label="Delete" 
  size="M-04 Extra Large"
  onClick={handleDelete} 
/>
```

**Real-world Usage Examples:**
```tsx
// In a confirmation dialog
<Dialog>
  <DialogTitle>Confirm Deletion</DialogTitle>
  <DialogContent>
    Are you sure you want to delete this item? This action cannot be undone.
  </DialogContent>
  <DialogFooter>
    <Button variant="secondary">Cancel</Button>
    <E04DestructiveButton 
      label="Delete Permanently" 
      onClick={handleConfirmDelete} 
    />
  </DialogFooter>
</Dialog>

// In a form
<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <div className="flex space-x-4 mt-6">
    <Button type="submit">Save Changes</Button>
    <E04DestructiveButton 
      format="F-02 Secondary"
      label="Reset Form" 
      type="reset"
    />
  </div>
</form>

// In a settings page
<section className="danger-zone border border-error-200 rounded-lg p-6 mt-8">
  <h2 className="text-xl font-semibold text-error-700">Danger Zone</h2>
  <p className="mt-2 text-gray-600">
    The following actions are destructive and cannot be reversed.
  </p>
  <div className="mt-4 space-y-4">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium">Delete Account</h3>
        <p className="text-sm text-gray-500">
          Permanently delete your account and all associated data.
        </p>
      </div>
      <E04DestructiveButton 
        label="Delete Account" 
        onClick={() => setShowDeleteConfirmation(true)} 
      />
    </div>
  </div>
</section>
```
