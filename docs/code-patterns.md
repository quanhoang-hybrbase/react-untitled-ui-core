## Typescript Props Type Template
```ts

// {{dashCase name}}.d.ts
// Variant Props (🎨)
export interface {{pascalCase name}}VariantProps {
  // Examples:
  // format: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  // state: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  // theme: 'T-01 Brand' | 'T-02 Grey';
  // size: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (⚙️)
export interface {{pascalCase name}}ExternalProps {
  // Examples:
  // iconPosition: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface {{pascalCase name}}DataProps {
  // Examples:
  // label: string;
  // icon: Icon;
}
}

// Component Props
export interface {{pascalCase name}}Props 
  extends {{pascalCase name}}VariantProps, 
    {{pascalCase name}}ExternalProps,
    {{pascalCase name}}DataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```
**Rules**:
- All prop name should be in lower case. 
- For External Props, Data Props, and Config Props, please remove the `data`, `config`, `external` prefixes in their prop names. 
For example: "dataLabel" -> "label", "dataIcon" -> "icon", "configPosition" -> "position"
- For the icon type, use Icon type from lucide-react library
- Do not include or combine any extra props of your own interpretation

---

## React Component Template
```tsx

// {{dashCase name}}.tsx
'use client'
import { clsx } from 'clsx'
import { forwardRef, type HTMLAttributes } from 'react'
import { use{{pascalCase name}} } from './hooks/use{{dashCase name}}'
import type { {{pascalCase name}}Props } from './{{dashCase name}}.d.ts'


export const {{pascalCase name}} = forwardRef<HTMLDivElement, {{pascalCase name}}Props>(
  ({ className, children, ...props }, ref) => {
    const { {{camelCase name}}Ref, variant, {{camelCase name}}Style } = use{{pascalCase name}}({ ref, ...props })

    return (
      <div
        data-comp="{{dashCase name}}"
        data-variant={variant}
        className={clsx({{camelCase name}}Style(), className)}
        ref={{{camelCase name}}Ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

{{pascalCase name}}.displayName = '{{pascalCase name}}'

// Export types from the component's .d.ts file
export * from './{{dashCase name}}.d.ts'
```

---

## Tailwind Variant Configuration Template

```ts

// {{dashCase name}}.config.ts
import { tv, type VariantProps } from 'tailwind-variants'

const {{camelCase name}}Config = tv({
  slots: {
    base: '',
    // Add other slots here as needed based on the component layer structure
    ...
  },
  variants: {
    variant: {
      default: {
        base: '',
        // Add styles for other slots in default variant
       ...
      },
      // Add other variants as needed
     ...
    },
    // Add other variant types as needed
    ...
  },
  defaultVariants: {
    variant: 'default',
    // Add other default variants as needed
  },
  compoundVariants: [
    // Add compound variants as needed
    ...
  ],
})

export type {{pascalCase name}}VariantProps = VariantProps<typeof {{camelCase name}}Config>
export { {{camelCase name}}Config }
```