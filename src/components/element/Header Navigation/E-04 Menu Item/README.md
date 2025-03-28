# E-04 Menu Item

## Figma Documentation

### Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=1280-1541&t=f9axpff9nVedM5g2-4

### Component Description
The E-04 Menu Item/Desktop component is a versatile UI element within the header navigation, designed for desktop screens. It represents a single menu item that can include text, icons, supporting text, badges, or action links, providing users with clear navigation options and additional context in a desktop layout.

### Props

#### Variant Props (🎨)
- **Format**: F-01 Text Only (default value), F-02 Base Icon, F-03 Featured Icon
  - This prop defines the menu item's display style, offering a simple label (Text Only), a label with a basic icon (Base Icon), or a label with a prominent icon (Featured Icon) to enhance visual hierarchy and context.

- **State**: S-00 Default (default value), S-01 Hover
  - This prop adjusts the menu item's appearance based on user interaction, showing its standard look (Default) or a highlighted effect (Hover) to indicate it's interactive.

#### External Props (➡️)
- **externalHasSupportingText**: True (default value), False
  - This prop indicates whether the menu item includes additional descriptive text.
  - If the menu item has supporting text, then externalHasSupportingText is "True".
  - If the menu item has no supporting text, then externalHasSupportingText is "False".

- **externalHasBadge**: True (default value), False
  - This prop specifies whether the menu item features a badge for emphasis or status.
  - If the menu item has a badge, then externalHasBadge is "True".
  - If the menu item has no badge, then externalHasBadge is "False".

- **externalHasActions**: False (default value), True
  - This prop determines whether the menu item includes clickable call-to-action links.
  - If the menu item has no CTA links, then externalHasActions is "False".
  - If the menu item has CTA links, then externalHasActions is "True".

#### Data Props (📦)
- **dataTitle**: "Products" (default value)
  - This prop specifies the text label displayed on the menu item, identifying its category or purpose (e.g., "Products") for user navigation.

- **dataSupportingText**: "Find the best solution for you." (default value)
  - This prop provides additional descriptive text below the menu item title, offering context or a brief explanation (e.g., "Find the best solution for you") when externalHasSupportingText is True.

- **dataIcon**: "E-04 General Icon" (default value)
  - This prop defines the icon paired with the menu item, using a general-purpose icon (e.g., from E-04 General Icon) to visually support its meaning or action when Format includes an icon.

## Implementation Plan

### TypeScript Types

```ts
// e-04-menu-item.d.ts

// Variant Props (🎨)
export interface E04MenuItemVariantProps {
  format?: 'textOnly' | 'baseIcon' | 'featuredIcon'; // 'F-01 Text Only' | 'F-02 Base Icon' | 'F-03 Featured Icon'
  state?: 'default' | 'hover'; // 'S-00 Default' | 'S-01 Hover'
}

// Data Props (📦)
export interface E04MenuItemDataProps {
  title?: string; // "Products"
  supportingText?: string; // "Find the best solution for you."
  badgeLabel?: string; // "Badge Label"
  icon?: React.ReactNode; // Icon component from lucide-react
  primaryActionLabel?: string; // "Learn more"
  secondaryActionLabel?: string; // "Explore"
}

// Component Props
export interface E04MenuItemProps 
  extends E04MenuItemVariantProps, 
    E04MenuItemDataProps,
    React.HTMLAttributes<HTMLDivElement> {}
```

### Component Structure

Based on the Figma data and screenshot, here's the planned structure for the E-04 Menu Item component:

#### High level structure
```
<div> - Main container for the menu item (corresponds to "Part = Base")
├── <div> - Container for the icon (when format is 'baseIcon' or 'featuredIcon') (corresponds to "Element/Icons/E-06 Featured Icon")
│   └── <Icon /> - Icon from lucide-react (provided via icon prop)
└── <div> - Wrapper for content (corresponds to "Part = Wrapper")
    ├── <div> - Text content container
    |    ├── <div> - Container for title and badge
    |    │   ├── <h4> - For the title text (title prop)
    |    │   ├── {E01Badge} - Badge component (when badgeLabel prop is provided)
    |    └── <span> - For the supporting text (when supportingText prop is provided)
    ├── <div> - Container for action links (when primaryActionLabel or secondaryActionLabel prop is provided)
        ├── {E03Button} - Button component (when secondaryActionLabel prop is provided)
        └── {E03Button} - Button component (when primaryActionLabel prop is provided)
```

#### Child Components to Import
- Icon component from lucide-react - For the icon based on format prop (baseIcon or featuredIcon)
- E03 Button component
- E01Badge component

#### Child Components for "parts" Folder
- None identified at this stage. The component structure seems straightforward enough to implement directly.

#### Clarifying Questions
[x] 1. What specific icon should be used from lucide-react when the format is "baseIcon" or "featuredIcon"? 
[x] 2. What is the visual difference between "baseIcon" and "featuredIcon" formats? 
[x] 3. Should the menu item be wrapped in a button or anchor tag to make it interactive?

#### Implementation Notes
1. The "baseIcon" and "featuredIcon" formats will determine whether there is a subtle rounded background color for the icon. If `baseIcon` is used, there is no background color. If `featuredIcon` is used, the background color will be a light violet.
2. The icon itself will be determined by the `icon` prop.
3. The component should be structured with a main container div that includes both the icon (if applicable) and a content wrapper div.
4. For hover state, we'll need to apply different background colors and potentially text colors.
5. The menu item should be implemented as a div with appropriate cursor styling, and can be made interactive through event handlers.
6. The `primaryActionLabel` and `secondaryActionLabel` props should be passed to the `E03Button` components as button label.
7. The `badgeLabel` prop should be passed to the `E01Badge` component as the badge label.

### Folder Structure

```
E-04 Menu Item/
├── parts/
│   └── e-04-menu-item.tsx         # Main component implementation
├── hooks/
│   └── use-e-04-menu-item.ts      # Custom hook for component logic
├── stories/
│   └── e-04-menu-item.stories.tsx # Storybook stories
├── tests/
│   └── e-04-menu-item.test.tsx    # Unit tests
├── e-04-menu-item.d.ts            # TypeScript type definitions
├── e-04-menu-item.config.ts       # Tailwind variants configuration
├── e-04-menu-item.mock.ts         # Mock data for testing and demos
├── index.tsx                      # Main export file
└── README.md                      # Component documentation
```

This folder structure follows the standard component organization pattern:

1. **parts/**: Contains the main component implementation file.
2. **hooks/**: Contains the custom hook that manages the component's state and logic.
3. **stories/**: Contains Storybook stories to showcase the component's variants.
4. **tests/**: Contains unit tests to verify the component's functionality.
5. **Type definitions**: Separate file for TypeScript interfaces and types.
6. **Configuration**: Tailwind variants configuration in a separate file.
7. **Mock data**: Sample data for testing and demonstration purposes.
8. **Index file**: Exports the component for easy importing.
9. **Documentation**: README file with comprehensive documentation.

The structure is designed to be modular and maintainable, making it easy to locate specific aspects of the component and update them independently.

### Tailwind Variants

1. **Slots**:
   - `base`: Styles the main menu item container with flexbox layout, padding, rounded corners, cursor pointer, and transition effects
   - `iconContainer`: Container for the icon with proper margin and flex-shrink properties
   - `featuredIcon`: Styles for the featured icon with rounded background, centered content, and proper dimensions
   - `baseIcon`: Styles for the base icon without background, centered content, and proper dimensions
   - `contentWrapper`: Flexbox column layout for all content beside the icon
   - `textContainer`: Flexbox column layout specifically for title and supporting text
   - `title`: Typography styles for the menu item title (h4 element)
   - `supportingText`: Typography styles for the optional supporting text with proper spacing
   - `badgeContainer`: Container for the E01Badge component with proper spacing
   - `actionsContainer`: Flexbox layout for E03Button components with proper spacing

2. **Variants**:
   - `format`:
     - textOnly: No icon displayed, only text content
     - baseIcon: Displays a standard icon without background
     - featuredIcon: Displays an icon with a rounded violet background for emphasis
   
   - `state`:
     - default: Normal appearance with white background
     - hover: Highlighted appearance with light gray background and violet-tinted title

3. **Compound Variants**:
   - `format`: Controls icon display based on format value
     - When `format = textOnly`: Hides the iconContainer completely
     - When `format = baseIcon`: Shows the baseIcon slot and hides the featuredIcon slot
     - When `format = featuredIcon`: Shows the featuredIcon slot and hides the baseIcon slot
   
   - Conditional rendering based on props:
     - When `supportingText` is provided: Shows the supportingText slot
     - When `badgeLabel` is provided: Shows the badgeContainer slot with E01Badge
     - When `primaryActionLabel` or `secondaryActionLabel` is provided: Shows the actionsContainer slot with E03Button components

4. **Default Variants**:
   - `format`: `textOnly`
   - `state`: `default`

5. **Clarifying Questions**:
   [x] Should the hover state affect the E03Button components within the menu item?

#### Implementation Notes
- The hover state should not affect the E03Button components within the menu item

### Unit Test Cases

1. **Test Scenario**: Verify component renders correctly with default props
   - **Input**: `<E04MenuItem data-testid="menu-item" />`
   - **Expected Output**: Component renders with format="textOnly", state="default", and default title text

2. **Test Scenario**: Verify format prop is applied correctly
   - **Input**: `<E04MenuItem data-testid="menu-item" format="baseIcon" icon={<CircleIcon />} />`
   - **Expected Output**: Component renders with baseIcon format and displays the provided icon without background

3. **Test Scenario**: Verify featuredIcon format is applied correctly
   - **Input**: `<E04MenuItem data-testid="menu-item" format="featuredIcon" icon={<CircleIcon />} />`
   - **Expected Output**: Component renders with featuredIcon format and displays the provided icon with a violet background

4. **Test Scenario**: Verify hover state is applied correctly
   - **Input**: `<E04MenuItem data-testid="menu-item" state="hover" />`
   - **Expected Output**: Component renders with hover state styling (light gray background and violet-tinted title)

5. **Test Scenario**: Verify supportingText is displayed when provided
   - **Input**: `<E04MenuItem data-testid="menu-item" title="Products" supportingText="Find the best solution for you." />`
   - **Expected Output**: Component renders with both title and supporting text visible

6. **Test Scenario**: Verify badgeLabel is displayed when provided
   - **Input**: `<E04MenuItem data-testid="menu-item" badgeLabel="New" />`
   - **Expected Output**: Component renders with a badge displaying "New"

7. **Test Scenario**: Verify primaryActionLabel creates a button when provided
   - **Input**: `<E04MenuItem data-testid="menu-item" primaryActionLabel="Learn more" />`
   - **Expected Output**: Component renders with a "Learn more" button

8. **Test Scenario**: Verify both action buttons render when both labels are provided
   - **Input**: `<E04MenuItem data-testid="menu-item" primaryActionLabel="Learn more" secondaryActionLabel="Explore" />`
   - **Expected Output**: Component renders with both "Learn more" and "Explore" buttons

9. **Test Scenario**: Verify custom className is applied correctly
   - **Input**: `<E04MenuItem data-testid="menu-item" className="custom-class" />`
   - **Expected Output**: Component renders with both the default styling and the custom class

10. **Test Scenario**: Verify ref forwarding works correctly
    - **Input**: Create a ref with useRef() and pass it to the component
    - **Expected Output**: The ref's current property should point to the component's DOM element
