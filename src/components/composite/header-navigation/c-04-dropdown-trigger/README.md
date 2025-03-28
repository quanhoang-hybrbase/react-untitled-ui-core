# Figma Documentation

## Figma Link
[C-04 Dropdown Trigger/Desktop](https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=1288-189&t=nZJ4xI3PO426oiS4-4)

## Figma Documentation
Component Name: Composite/Header Navigation/C-04 Dropdown Trigger/Desktop

Component Description: The C-04 Dropdown Trigger/Desktop component is a composite UI element within the header navigation, designed for desktop screens. It serves as an interactive button that triggers a dropdown menu, offering various layout options to display navigation links or content, enhancing user access to additional features or pages.

1. Variant Props (🎨): Properties that controls different aspects of the component.

🎨 Format: F-01 Simple (default value), F-02 Simple With Footer, F-03 Simple 2-col, F-04 Simple 2-col With Footer, F-05 2-col With Links & Footer, F-06 Featured Card, F-07 Featured Posts
This prop defines the dropdown menu’s layout and content style triggered by the button, ranging from a basic list (Simple) to complex designs with columns, footers, links, or featured items (e.g., Featured Posts), tailoring the navigation experience.

2. External Props (➡️): Properties that enable controlled, indirect external manipulation of a component. They provide a way for component users to influence certain aspects of a component's behavior or data without directly modifying its internal configuration.

➡️ externalIsOpened: False (default value), True
This prop controls the dropdown menu’s visibility state, reflecting whether the trigger button has been activated.

If the user hasn’t clicked the button or clicks it again when already triggered, then externalIsOpened is “False”.
If the user clicks the button when it hasn’t been triggered before, then externalIsOpened is “True”.

# Implementation Plan

## Typescript Types
```ts
// c-04-dropdown-trigger.d.ts
// Variant Props (🎨)
export interface C04DropdownTriggerVariantProps {
  format: 'simple' | 'simple-with-footer' | 'simple-2-col' | 'simple-2-col-with-footer' | '2-col-with-links-and-footer' | 'featured-card' | 'featured-posts'; // 'F-01 Simple' | 'F-02 Simple With Footer' | 'F-03 Simple 2-col' | 'F-04 Simple 2-col With Footer' | 'F-05 2-col With Links & Footer' | 'F-06 Featured Card' | 'F-07 Featured Posts'
}


// Component Props
export interface C04DropdownTriggerProps 
  extends C04DropdownTriggerVariantProps, 
    C04DropdownTriggerExternalProps, 
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

## Component Structure

#### High Level Structure
```
<div> - Main container for the dropdown trigger (corresponds to "Part = Base")
├── {E03Button} - Button component from Element/Buttons (with label "Resources")
└── <div> - Dropdown menu container
    ├── <ul> - List of navigation links or content
    │   ├── <li> - Individual menu item
    │   │   └── {E04MenuItem} - Menu item component from Element/Header Navigation
    └── <div> - Footer section (when format value includes 'footer')
```

#### Child Components to Import
- `E03Button` (from `src/components/element/buttons/e-03-button`): For the trigger button.
- `E04MenuItem` (from `src/components/element/header-navigation/e-04-menu-item`): For the dropdown menu items.

#### Child Components to Break Down
None. All required components can be imported from existing components.

#### Clarifying Questions
[x] Are there any specific accessibility requirements for the dropdown trigger?
[x] Should the dropdown menu include a footer section as per the `format` prop?

#### Implementation Notes
- When user hover on the trigger button, the dropdown menu will be displayed.
- Given the dropdown menu is displayed, when user's mouse is within the dropdown menu and the trigger button, the dropdown menu will stay displayed.
- Given the dropdown menu is displayed, when user's mouse is out of the dropdown menu and the trigger button, the dropdown menu will be hidden.
- The footer section will be displayed when the format value includes 'footer'.
- When the dropdown menu is displayed, the trigger button should be used with the an icon upward
- When the dropdown menu is hidden, the trigger button should be used with the an icon downward


## Tailwind Variants

### 1. **Slots**:
   - `base`: Styles the main container with relative positioning to allow for absolute positioning of the dropdown menu, hover effect with  proper z-index to appear above other content
   - `menu`: Configures the dropdown menu with absolute positioning, shadow, border radius, and proper layering
   - `list`: Handles the layout of menu items, including grid layouts for multi-column formats
   - `footer`: Styles the optional footer section with appropriate borders and padding

### 2. **Variants**:
   - `format`:
     - simple: Basic single-column dropdown with standard width and shadow
     - simple-with-footer: Single-column dropdown with a footer section at the bottom
     - simple-2-col: Two-column grid layout for menu items without footer
     - simple-2-col-with-footer: Two-column grid layout with a footer section
     - 2-col-with-links-and-footer: Two-column grid with additional links and a footer with items arranged horizontally
     - featured-card: Wider layout with a featured card design using flex layout for content
     - featured-posts: Grid layout for featuring multiple content items in a two-column arrangement

### 3. **Compound Variants**:
   - When any format includes "footer" in its name (simple-with-footer, simple-2-col-with-footer, 2-col-with-links-and-footer), the footer slot receives consistent border and padding styling

### 4. **Default Variants**:
   - `format`: "simple" - The basic single-column dropdown option

### 5. **Clarifying Questions**:
   [x] How should the dropdown positioning be handled for various viewport sizes?
   [x] Should there be different animations for opening/closing the dropdown menu?

### 6. **Implementation Notes**:
- There should be an appropriate icon rotation animation for opening/closing the dropdown menu
- For now, focus on Desktop viewport first

## Unit Test Cases

1. **Test Scenario**: Verify component renders with default format variant
   - **Input**: `<C04DropdownTrigger data-testid="trigger" />`
   - **Expected Output**: Component renders with format="simple" styling (single column layout)

2. **Test Scenario**: Verify component renders with default isOpened state
   - **Input**: `<C04DropdownTrigger data-testid="trigger" />`
   - **Expected Output**: Dropdown menu is hidden, E03Button has downward-pointing arrow icon

3. **Test Scenario**: Verify format="simple-with-footer" renders correctly
   - **Input**: `<C04DropdownTrigger format="simple-with-footer" isOpened={true} />`
   - **Expected Output**: Single-column dropdown with a footer section visible at the bottom

4. **Test Scenario**: Verify format="simple-2-col" renders correctly
   - **Input**: `<C04DropdownTrigger format="simple-2-col" isOpened={true} />`
   - **Expected Output**: Two-column grid layout for menu items without footer

5. **Test Scenario**: Verify format="2-col-with-links-and-footer" renders correctly
   - **Input**: `<C04DropdownTrigger format="2-col-with-links-and-footer" isOpened={true} />`
   - **Expected Output**: Two-column grid with additional links and a footer with items arranged horizontally

6. **Test Scenario**: Verify format="featured-card" renders correctly
   - **Input**: `<C04DropdownTrigger format="featured-card" isOpened={true} />`
   - **Expected Output**: Wider layout with a featured card design using flex layout for content

7. **Test Scenario**: Verify isOpened={true} displays dropdown and changes icon direction
   - **Input**: `<C04DropdownTrigger isOpened={true} />`
   - **Expected Output**: Dropdown menu is visible, E03Button has upward-pointing arrow icon

8. **Test Scenario**: Verify E03Button receives correct props
   - **Input**: `<C04DropdownTrigger isOpened={false} />`
   - **Expected Output**: E03Button is rendered with appropriate label ("Resources" or equivalent)

9. **Test Scenario**: Verify E04MenuItem components are rendered in the dropdown
   - **Input**: `<C04DropdownTrigger isOpened={true} />`
   - **Expected Output**: E04MenuItem components are rendered within the dropdown menu list

10. **Test Scenario**: Verify component applies correct Tailwind slots based on variants
    - **Input**: `<C04DropdownTrigger format="simple-with-footer" isOpened={true} />`
    - **Expected Output**: The base, menu, list, and footer slots all have appropriate classes applied

## Folder Structure

```
c-04-dropdown-trigger/
├── parts/                       
│   └── c-04-dropdown-trigger.tsx    
│
├── hooks/                       # Custom hooks for this component
│   └── use-c-04-dropdown-trigger.ts  # Main hook handling dropdown logic
│
├── tests/                       # Unit tests
│   └── c-04-dropdown-trigger.test.tsx
│
├── stories/                     # Storybook stories
│   └── c-04-dropdown-trigger.stories.tsx
│
├── c-04-dropdown-trigger.d.ts   # TypeScript type definitions
├── c-04-dropdown-trigger.config.ts  # Tailwind variants configuration
├── index.tsx                    # Main component export
└── README.md                    # Documentation (this file)
```
The custom hook will manage the dropdown's open/close state and format-specific logic.
