# E-04 Destructive Button

## Figma Documentation

### Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8657-74758&t=8TInoGe4p4V3kKke-4

### Component Name
Element/Buttons/E-04 Destructive Button

### Component Description
A Destructive Button is a type of action button used to perform critical or irreversible actions, typically associated with deletion, removal, or significant changes that may impact data or user settings. It is designed to draw attention and caution the user before proceeding.

## Implementation Plan

### Unit Test Cases

#### Component Naming Tests
- **Test Scenario**: Verify component has the correct display name
  - **Input**: `E04DestructiveButton.displayName`
  - **Expected Output**: "E04DestructiveButton"

- **Test Scenario**: Verify component has the correct data-comp attribute
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element with data-comp attribute equal to "e-04-destructive-button"

#### Props Testing

- **Test Scenario**: Verify default format prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element with format="F-01 Primary"

- **Test Scenario**: Verify custom format prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" format="F-02 Secondary" />`
  - **Expected Output**: Element with format="F-02 Secondary"

- **Test Scenario**: Verify default state prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element with state="S-00 Default"

- **Test Scenario**: Verify custom state prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" state="S-01 Hover" />`
  - **Expected Output**: Element with state="S-01 Hover"

- **Test Scenario**: Verify default size prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element with size="M-02 Medium"

- **Test Scenario**: Verify custom size prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" size="M-01 Small" />`
  - **Expected Output**: Element with size="M-01 Small"

- **Test Scenario**: Verify default iconPosition prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element with iconPosition="None"

- **Test Scenario**: Verify custom iconPosition prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" iconPosition="Leading" />`
  - **Expected Output**: Element with iconPosition="Leading"

- **Test Scenario**: Verify custom label prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" label="Delete" />`
  - **Expected Output**: Element with text content "Delete"

- **Test Scenario**: Verify custom icon prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" icon="E-10 Circle" iconPosition="Leading" />`
  - **Expected Output**: Element with icon component rendered

- **Test Scenario**: Verify no label is rendered when iconPosition is "Only"
  - **Input**: `<E04DestructiveButton data-testid="test-button" iconPosition="Only" icon="E-10 Circle" label="Delete" />`
  - **Expected Output**: Element with icon component rendered and no visible label

- **Test Scenario**: Verify default label is applied when not specified
  - **Input**: `<E04DestructiveButton data-testid="test-button" iconPosition="None" />`
  - **Expected Output**: Element with text content "Button"

### Typescript Types

```typescript
// e-04-destructive-button.d.ts
// Variant Props (🎨)
export interface E04DestructiveButtonVariantProps {
  format?: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state?: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  size?: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (➡️)
export interface E04DestructiveButtonExternalProps {
  iconPosition?: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface E04DestructiveButtonDataProps {
  label?: string;
  icon?: string;
}

// Component Props
export interface E04DestructiveButtonProps 
  extends E04DestructiveButtonVariantProps, 
    E04DestructiveButtonExternalProps, 
    E04DestructiveButtonDataProps, 
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component Structure

#### High-level HTML markup structure

The E-04 Destructive Button is a simple button component with optional icon and label elements. The structure will vary based on the `iconPosition` prop:

```jsx
// Base structure (iconPosition="None" - only label)
<button
  data-comp="e-04-destructive-button"
  data-variant={variant}
  className={buttonStyles.base()}
  ref={buttonRef}
  {...props}
>
  <span data-slot="label" className={buttonStyles.label()}>
    {label}
  </span>
</button>

// With leading icon (iconPosition="Leading")
<button
  data-comp="e-04-destructive-button"
  data-variant={variant}
  className={buttonStyles.base()}
  ref={buttonRef}
  {...props}
>
  <span data-slot="icon" className={buttonStyles.icon()}>
    <Icon /> {/* Icon component based on icon prop */}
  </span>
  <span data-slot="label" className={buttonStyles.label()}>
    {label}
  </span>
</button>

// With trailing icon (iconPosition="Trailing")
<button
  data-comp="e-04-destructive-button"
  data-variant={variant}
  className={buttonStyles.base()}
  ref={buttonRef}
  {...props}
>
  <span data-slot="label" className={buttonStyles.label()}>
    {label}
  </span>
  <span data-slot="icon" className={buttonStyles.icon()}>
    <Icon /> {/* Icon component based on icon prop */}
  </span>
</button>

// Icon only (iconPosition="Only")
<button
  data-comp="e-04-destructive-button"
  data-variant={variant}
  className={buttonStyles.base()}
  ref={buttonRef}
  {...props}
>
  <span data-slot="icon" className={buttonStyles.icon()}>
    <Icon /> {/* Icon component based on icon prop */}
  </span>
</button>
```

#### Child components to import

- Icon component from `lucide-react` library (based on the `icon` prop)

#### Child components to break down into parts folder

No additional child components need to be broken down into parts folder as this is a simple button component with basic elements (icon and label).

#### Implementation Notes
1. **Icon mapping**: Use the title to map the icon name from the library. For example: "E-10 Circle" -> "Circle" icon component from lucide-react
2. **Accessibility**: Use the `label` prop value for the aria-label even when the label is not visually displayed
3. **Button type**: Default to "button" to prevent accidental form submissions
4. **Focus management**: Rely solely on CSS styling for the focused state
5. **Disabled state handling**: Do not set the HTML `disabled` attribute on the button element

### Tailwind Variants

Based on the Figma data and component structure, here's the planned Tailwind Variants configuration:

#### Slots Configuration
The slots configuration defines the base styles for the button, label, and icon. 
- `base`: inline-flex items-center justify-center gap-2 rounded-lg
- `label`: font-semibold
- `icon`: flex items-center justify-center

#### Variants Configuration
The variants configuration defines the styles for different formats, states, sizes, and icon positions.
- Format variants: 
  - F-01 Primary: bg-red-600 text-white
  - F-02 Secondary: bg-white text-red-600 border border-red-600
  - F-03 Tertiary: bg-transparent text-red-600
  - F-04 Link: bg-transparent text-red-600 p-0
- State variants: 
  - S-00 Default: 
  - S-01 Hover: 
    - F-01 Primary: bg-red-700
    - F-02 Secondary: bg-red-50
    - F-03 Tertiary: bg-red-50
    - F-04 Link: underline
  - S-02 Focused: ring-2 ring-offset-2 ring-red-500
  - S-03 Disabled: opacity-50 cursor-not-allowed
- Size variants: 
  - M-01 Small: text-sm, icon: h-4 w-4
  - M-02 Medium: text-base, icon: h-5 w-5
  - M-03 Large: text-lg, icon: h-6 w-6
  - M-04 Extra Large: text-xl, icon: h-7 w-7
- Icon position variants: 
  - None: icon: hidden
  - Leading: 
  - Trailing: 
  - Only: label: hidden

#### Compound Variants Configuration
The compound variants configuration defines the styles for combinations of size and format.
- Size + Format combinations for border and gap: 
  - M-01 Small + F-01 Primary: px-3 py-2 gap-1.5
  - M-01 Small + F-02 Secondary: px-3 py-2 gap-1.5
  - M-01 Small + F-03 Tertiary: px-3 py-2 gap-1.5
  - M-02 Medium + F-01 Primary: px-4 py-2.5 gap-2
  - M-02 Medium + F-02 Secondary: px-4 py-2.5 gap-2
  - M-02 Medium + F-03 Tertiary: px-4 py-2.5 gap-2
  - M-03 Large + F-01 Primary: px-5 py-3 gap-2.5
  - M-03 Large + F-02 Secondary: px-5 py-3 gap-2.5
  - M-03 Large + F-03 Tertiary: px-5 py-3 gap-2.5
  - M-04 Extra Large + F-01 Primary: px-6 py-3.5 gap-3
  - M-04 Extra Large + F-02 Secondary: px-6 py-3.5 gap-3
  - M-04 Extra Large + F-03 Tertiary: px-6 py-3.5 gap-3
- Icon-only buttons (square shape): 
  - Only + M-01 Small: p-2
  - Only + M-02 Medium: p-2.5
  - Only + M-03 Large: p-3
  - Only + M-04 Extra Large: p-3.5

#### Default Variants Configuration
The default variants configuration defines the default styles for the button.
- format: F-01 Primary
- state: S-00 Default
- size: M-02 Medium
- iconPosition: None

#### Implementation Notes
1. **Color theming**: Use Tailwind classes that match the values from Figma data
2. **Hover states**: Handle only via the `state` prop, not CSS pseudo-classes
3. **Focus states**: Handle only via the `state` prop, not CSS pseudo-classes
4. **Disabled handling**: No need to apply the HTML `disabled` attribute
5. **Animation transitions**: No transition effects needed
6. **Icon spacing**: Use gap on the container instead of margin on the label
7. **Responsive sizing**: Button sizes should remain consistent across all breakpoints

### Component Folder Structure

Following the atomic design principles and the Bulletproof React architecture pattern, here's the planned folder structure for the E-04 Destructive Button component:

```
src/
  components/
    element/
      Buttons/
        E-04-Destructive-Button/
          parts/
            - E04DestructiveButton.tsx (main component implementation)
          tests/
            - E04DestructiveButton.test.tsx (unit tests for the component)
          hooks/
            - useE04DestructiveButton.ts (custom hook if needed)
          e-04-destructive-button.d.ts (TypeScript types for the component)
          e-04-destructive-button.config.ts (Tailwind variants configuration)
          e-04-destructive-button.mock.ts (mock data for testing and demo)
          README.md (component documentation and tracking version history)
          index.tsx (main export entry file)
```

#### File Purposes

1. **Main Component File**: `parts/E04DestructiveButton.tsx` will contain the core implementation of the button component with all the variants and logic.

2. **Types File**: `e-04-destructive-button.d.ts` will contain all the TypeScript interfaces defined in this README.

3. **Config File**: `e-04-destructive-button.config.ts` will contain the Tailwind Variants configuration as planned above.

4. **Mock Data**: `e-04-destructive-button.mock.ts` will contain sample data for testing and demonstration purposes.

5. **Tests**: `tests/E04DestructiveButton.test.tsx` will contain the unit tests based on the test cases defined in this README.

6. **Index File**: `index.tsx` will be the main export point for the component, making it easy to import from other parts of the application.

This structure organizes the component in a modular way that makes it easy to maintain and extend, following the project's established patterns.
