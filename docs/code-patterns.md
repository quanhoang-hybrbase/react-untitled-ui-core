## Typescript Props Type Template
```ts

// {{dashCase name}}.d.ts
// Variant Props (🎨)
export interface {{pascalCase name}}VariantProps {
  // Examples:
  // format: 'primary' | 'secondary' | 'tertiary' | 'link';
  // state: 'default' | 'hover' | 'focused' | 'disabled';
  // theme: 'brand' | 'grey';
  // size: 'small' | 'medium' | 'large' | 'extra-large';
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
  // icon: React Element since icon will be used the icon component from lucide-react;
}
}

// Component Props
export interface {{pascalCase name}}Props 
  extends {{pascalCase name}}VariantProps, 
    {{pascalCase name}}ExternalProps,
    {{pascalCase name}}DataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```
### Rules
- All prop name should be in lower case. 
- All prop values must remove the prefix but the their order should be preserved by prefix. Comment the original prop values with prefix to align the order.
For example: 
```ts
format: 'primary' | 'secondary' | 'tertiary' | 'link'; // 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link'
```
- For External Props, Data Props, and Config Props, please remove the `data`, `config`, `external` prefixes in their prop names. 
For example: "dataLabel" -> "label", "dataIcon" -> "icon", "configPosition" -> "position"
- Do not include or combine any extra props of your own interpretation

<br/>


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

```
### Rules
- Use Icon component from lucide-react lib for icon props. 
- Use the correct naming convention for the React component (E##ComponentName format, e.g. "E00SocialIcon" instead of "SocialIcon")


<br/>

## Tailwind Variant Configuration Template

### Template
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

### Rules
- Use theme variables from `global.css`, or Tailwind classes only for styling consistency. Never use arbitrary values.
- If you cannot find the exact matching theme variable or Tailwind classes for the Figma values, use the closest matching Tailwind classes instead.
- For now, use violet color scheme for any brand color in Figma data.
- Handle hover state using Tailwind classes