# Element/Badges/E-01 Badge

## Figma Documentation

Component Name: Element/Badges/E-01 Badge

Component Description: A Badge is a small, visually distinct UI element used to display concise information, draw attention, or indicate status, quantity, or categorization.

1. Variant Props (🎨): Properties that controls different aspects of the component.

🎨 Format: F-01 Primary (default value), F-02 Dot, F-03 X Close, F-04 Icon Trailing, F-05 Icon Leading, F-06 Icon Only
This prop specifies what the component does or what kind of content it displays. It influences the component's appearance and behavior.

🎨 Theme: T-01 Gray (default value), T-02 Brand, T-03 Error, T-04 Warning, T-05 Success, T-06 Blue Gray, T-07 Blue Light, T-08 Blue, T-09 Indigo, T-10 Purple, T-11 Pink, T-12 Rosé, T-13 Orange
This prop controls the component's visual style, primarily color schemes.

🎨 Size: M-01 Small (default value), M-02 Medium, M-03 Large
This prop differentiates how big or small a component appears on the screen. Different sizes help organize content and make it easier to read.

2. Data Props (📦): Properties that carry the actual content that the component displays. They represent the information presented to the use.

📦 dataLabel: "Badge" (default value)
This prop determines the text content displayed in the Badge's Label.

📦 dataIcon: "E-22 Plus" (default value)
This prop specifies the Icon displayed on the Badge. In React, this prop will pass down an icon component from the lucide-react library.

### Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8702-144900&t=Lh67BEUhdW3ZVA6s-4

## Implementation Plan

### Unit Test Cases

1. **Test Scenario**: Verify component renders with default props
   - **Input**: `<E01Badge data-testid="test-badge" />`
   - **Expected Output**: Element rendered with format="primary", theme="gray", size="small", label="Badge"

2. **Test Scenario**: Verify format prop is applied correctly
   - **Input**: `<E01Badge data-testid="test-badge" format="dot" />`
   - **Expected Output**: Element rendered with format="dot"

3. **Test Scenario**: Verify theme prop is applied correctly
   - **Input**: `<E01Badge data-testid="test-badge" theme="brand" />`
   - **Expected Output**: Element rendered with theme="brand"

4. **Test Scenario**: Verify size prop is applied correctly
   - **Input**: `<E01Badge data-testid="test-badge" size="medium" />`
   - **Expected Output**: Element rendered with size="medium"

5. **Test Scenario**: Verify label prop is applied correctly
   - **Input**: `<E01Badge data-testid="test-badge" label="New" />`
   - **Expected Output**: Element rendered with label="New"

6. **Test Scenario**: Verify icon prop is applied correctly
   - **Input**: `<E01Badge data-testid="test-badge" icon={<Plus />} />`
   - **Expected Output**: Element rendered with icon component

7. **Test Scenario**: Verify format="iconTrailing" displays icon after label
   - **Input**: `<E01Badge data-testid="test-badge" format="iconTrailing" icon={<Plus />} />`
   - **Expected Output**: Element rendered with icon component after label text

8. **Test Scenario**: Verify format="iconLeading" displays icon before label
   - **Input**: `<E01Badge data-testid="test-badge" format="iconLeading" icon={<Plus />} />`
   - **Expected Output**: Element rendered with icon component before label text

9. **Test Scenario**: Verify format="iconOnly" displays only icon without label
   - **Input**: `<E01Badge data-testid="test-badge" format="iconOnly" icon={<Plus />} />`
   - **Expected Output**: Element rendered with only icon component, no label text

10. **Test Scenario**: Verify format="xClose" displays X icon for closing
    - **Input**: `<E01Badge data-testid="test-badge" format="xClose" />`
    - **Expected Output**: Element rendered with X icon for closing

### Component Structure

#### Semantic HTML Tags
- `<div>` - Main container for the badge with flexbox layout (corresponds to "Part = Base" in Figma)
- `<span>` - For the label text (corresponds to "Part = Label" in Figma)
- `<span>` - For the dot element in dot format variants

#### Child Components to Import
- Icons from lucide-react library (Plus, X, etc.) based on the icon prop and format variants

#### Child Components for "parts" Folder
- No sub-components needed for breakdown into the "parts" folder as the badge is a simple element component

#### Implementation Notes
- For the format="xClose", it should include both a label and an X icon (imported from lucide-react). See in the Figma data
- The badge should be interactive (clickable) by default


### Folder Structure

```
src/
└── components/
    └── element/
        └── Badges/
            └── E-01-Badge/
                ├── parts/                    
                │   └── e-01-badge.tsx        # Main component implementation
                ├── stories/                  # Storybook stories
                │   └── e-01-badge.stories.tsx
                ├── tests/                    # Unit tests
                │   └── e-01-badge.test.tsx
                ├── hooks/                    # Component-specific hooks (empty for this component)
                ├── providers/                # Component-specific providers (empty for this component)
                ├── e-01-badge.d.ts           # TypeScript types
                ├── e-01-badge.mock.ts        # JSON mock data for testing and demo
                ├── e-01-badge.config.ts      # Tailwind variants configuration
                ├── README.md                 # Component documentation (this file)
                └── index.tsx                 # Main export entry file (re-exports from parts)
```

### Tailwind Variants

#### Slots
- `base`: Styles the main badge container with flexbox layout, rounded corners, and appropriate padding based on size
- `label`: Handles text styling with font size, weight, and color based on theme
- `dot`: Configures the dot element with proper sizing, border-radius, and color based on theme
- `icon`: Configures icon display with proper sizing, color, and spacing based on format and theme

#### Variants
- `format`: Controls the layout and visibility of elements
  - `primary`: Standard badge with just text
  - `dot`: Badge with a colored dot indicator and text
  - `xClose`: Badge with text and an X icon for dismissal
  - `iconTrailing`: Badge with text followed by an icon
  - `iconLeading`: Badge with an icon followed by text
  - `iconOnly`: Badge with only an icon and hidden text (for accessibility)

- `theme`: Controls the color scheme of the badge
  - `gray`: Gray background with darker gray text (default)
  - `brand`: Primary brand colors
  - `error`: Red error colors
  - `warning`: Yellow/orange warning colors
  - `success`: Green success colors
  - And other color themes (blueGray, blueLight, blue, indigo, purple, pink, rose, orange)

- `size`: Controls the dimensions and text size
  - `small`: Compact size with smaller text and padding (default)
  - `medium`: Medium size with standard text and padding
  - `large`: Larger size with more padding and possibly larger text

#### Default Variants
- `format`: 'primary'
- `theme`: 'gray'
- `size`: 'small'

#### Compound Variants
- When `format="dot"` and any `theme` is applied: Adjust padding to accommodate the dot
- When `format="xClose"` and any `theme` is applied: Adjust padding to accommodate the X icon
- When `format="iconTrailing"` or `format="iconLeading"` and any `theme` is applied: Adjust spacing between text and icon

#### Implementation Notes
- Different themes have different background opacity levels
- Badge does not need hover/focus states for interactive variants

### Typescript Types

```typescript
// e-01-badge.d.ts

import { LucideIcon } from 'lucide-react'

// Variant Props (🎨)
export interface E01BadgeVariantProps {
  format?: 'primary' | 'dot' | 'xClose' | 'iconTrailing' | 'iconLeading' | 'iconOnly'; // 'F-01 Primary' | 'F-02 Dot' | 'F-03 X Close' | 'F-04 Icon Trailing' | 'F-05 Icon Leading' | 'F-06 Icon Only'
  theme?: 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blueGray' | 'blueLight' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange'; // 'T-01 Gray' | 'T-02 Brand' | 'T-03 Error' | 'T-04 Warning' | 'T-05 Success' | 'T-06 Blue Gray' | 'T-07 Blue Light' | 'T-08 Blue' | 'T-09 Indigo' | 'T-10 Purple' | 'T-11 Pink' | 'T-12 Rosé' | 'T-13 Orange'
  size?: 'small' | 'medium' | 'large'; // 'M-01 Small' | 'M-02 Medium' | 'M-03 Large'
}

// External Props (⚙️)
export interface E01BadgeExternalProps {
  // No external props defined in the Figma documentation
}

// Data Props (📦)
export interface E01BadgeDataProps {
  label?: string; // dataLabel: "Badge" (default value)
  icon?: React.ElementType; // dataIcon: "E-22 Plus" (default value)
}

// Component Props
export interface E01BadgeProps 
  extends E01BadgeVariantProps, 
    E01BadgeExternalProps,
    E01BadgeDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
