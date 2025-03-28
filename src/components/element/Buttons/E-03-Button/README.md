# E-03 Button

## Figma Documentation

### Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8674-86670&t=Lh67BEUhdW3ZVA6s-4

### Component Description
A E-03 Button is an interactive UI element that allows users to trigger actions or navigate within an interface.

### Variant Props (🎨)
- **Format**: F-01 Primary (default value), F-02 Secondary, F-03 Tertiary, F-04 Link
  - This prop defines the button's visual style and prominence to indicate its role, such as initiating a key action (Primary) or providing a subtle navigation option (Link).

- **State**: S-00 Default (default value), S-01 Hover, S-02 Focused, S-03 Disabled
  - This prop adjusts the button's appearance to reflect its current interaction state, signaling to users whether it's clickable, highlighted, or inactive.

- **Theme**: T-01 Brand (default value), T-02 Grey
  - This prop sets the button's color scheme to align with branding (Brand) or a neutral tone (Grey), ensuring visual consistency across the interface.

- **Size**: M-01 Small (default value), M-02 Medium, M-03 Large, M-04 Extra Large
  - This prop controls the button's physical dimensions to suit its context, such as compact controls (Small) or prominent calls-to-action (Large).

### External Props (➡️)
- **externalIconPosition**: None (default value), Leading, Trailing, Only
  - This prop determines the placement of an icon relative to the button's label, enhancing usability by visually supporting the button's action.
  - If the Button has an Icon positioned to the left of the Label, then externalIconPosition is "Leading"
  - If the Button has an Icon positioned to the right of the Label, then externalIconPosition is "Trailing"
  - If the Button contains only an Icon without a Label, then externalIconPosition is "Only"
  - If the Button contains only a Label without an Icon, then externalIconPosition is "None"

### Data Props (📦)
- **dataLabel**: "Button" (default value)
  - This prop specifies the text displayed on the button, clearly communicating its action or intent to the user.

- **dataIcon**: "E-10 Circle" (default value)
  - This prop defines the icon shown on the button, providing a visual cue to reinforce the button's purpose. In React, this prop will pass down an icon component from the lucide-react library.

## Implementation Plan
### Unit Test Cases

1. **Test Scenario**: Verify component renders with correct name
   - **Input**: `<E03Button data-testid="test-button" />`
   - **Expected Output**: Element rendered with data-comp="e-03-button"

2. **Test Scenario**: Verify default format prop is applied
   - **Input**: `<E03Button data-testid="test-button" />`
   - **Expected Output**: Element rendered with format="F-01 Primary"

3. **Test Scenario**: Verify custom format prop is applied
   - **Input**: `<E03Button data-testid="test-button" format="secondary" />`
   - **Expected Output**: Element rendered with format="F-02 Secondary"

4. **Test Scenario**: Verify default state prop is applied
   - **Input**: `<E03Button data-testid="test-button" />`
   - **Expected Output**: Element rendered with state="S-00 Default"

5. **Test Scenario**: Verify custom state prop is applied
   - **Input**: `<E03Button data-testid="test-button" state="disabled" />`
   - **Expected Output**: Element rendered with state="S-03 Disabled"

6. **Test Scenario**: Verify default theme prop is applied
   - **Input**: `<E03Button data-testid="test-button" />`
   - **Expected Output**: Element rendered with theme="T-01 Brand"

7. **Test Scenario**: Verify custom theme prop is applied
   - **Input**: `<E03Button data-testid="test-button" theme="grey" />`
   - **Expected Output**: Element rendered with theme="T-02 Grey"

8. **Test Scenario**: Verify default size prop is applied
   - **Input**: `<E03Button data-testid="test-button" />`
   - **Expected Output**: Element rendered with size="M-01 Small"

9. **Test Scenario**: Verify custom size prop is applied
   - **Input**: `<E03Button data-testid="test-button" size="large" />`
   - **Expected Output**: Element rendered with size="M-03 Large"

10. **Test Scenario**: Verify default iconPosition prop is applied
    - **Input**: `<E03Button data-testid="test-button" />`
    - **Expected Output**: Element rendered with iconPosition="None"

11. **Test Scenario**: Verify custom iconPosition prop is applied
    - **Input**: `<E03Button data-testid="test-button" iconPosition="leading" icon={<Circle />} />`
    - **Expected Output**: Element rendered with iconPosition="Leading" and icon shown to left of label

12. **Test Scenario**: Verify default label prop is applied
    - **Input**: `<E03Button data-testid="test-button" />`
    - **Expected Output**: Element rendered with label="Button"

13. **Test Scenario**: Verify custom label prop is applied
    - **Input**: `<E03Button data-testid="test-button" label="Submit" />`
    - **Expected Output**: Element rendered with label="Submit"

14. **Test Scenario**: Verify default icon prop is applied
    - **Input**: `<E03Button data-testid="test-button" iconPosition="leading" />`
    - **Expected Output**: Element rendered with Circle icon from lucide-react (representing "E-10 Circle")

15. **Test Scenario**: Verify custom icon prop is applied
    - **Input**: `<E03Button data-testid="test-button" iconPosition="leading" icon={<Mail />} />`
    - **Expected Output**: Element rendered with custom Mail icon

16. **Test Scenario**: Verify icon-only button shows no label
    - **Input**: `<E03Button data-testid="test-button" iconPosition="only" icon={<Circle />} />`
    - **Expected Output**: Element rendered with only an icon and no label

17. **Test Scenario**: Verify button is disabled when state is set to 'disabled'
    - **Input**: `<E03Button data-testid="test-button" state="disabled" />`
    - **Expected Output**: Button element with disabled attribute set

18. **Test Scenario**: Verify ref forwarding works correctly
    - **Input**: 
    ```jsx
    const ref = React.createRef();
    <E03Button data-testid="test-button" ref={ref} />
    ```
    - **Expected Output**: Button element reference is accessible through the ref

19. **Test Scenario**: Verify HTML button attributes are passed through
    - **Input**: `<E03Button data-testid="test-button" type="submit" aria-label="Submit form" />`
    - **Expected Output**: Button with type="submit" and aria-label="Submit form"

20. **Test Scenario**: Verify click handler works
    - **Input**: 
    ```jsx
    const handleClick = jest.fn();
    <E03Button data-testid="test-button" onClick={handleClick} />
    // Then simulate click on the button
    ```
    - **Expected Output**: handleClick function is called when button is clicked

21. **Test Scenario**: Verify disabled button doesn't trigger click handler
    - **Input**: 
    ```jsx
    const handleClick = jest.fn();
    <E03Button data-testid="test-button" state="disabled" onClick={handleClick} />
    // Then simulate click on the button
    ```
    - **Expected Output**: handleClick function is not called when button is clicked

### HTML Structure

The component will use semantic HTML elements with appropriate accessibility attributes:

```jsx
// Base Button Component Structure
<button
  data-comp="e-03-button"
  data-variant={variant}
  className={buttonStyles}
  disabled={state === 'disabled'}
  ref={buttonRef}
  {...otherProps}
>
  {/* Leading Icon (if iconPosition is 'leading') */}
  {iconPosition === 'leading' && (
    <span className={iconStyles}>
      {icon || <Circle />}
    </span>
  )}
  
  {/* Label (if iconPosition is not 'only') */}
  {iconPosition !== 'only' && (
    <span className={labelStyles}>
      {label || 'Button'}
    </span>
  )}
  
  {/* Trailing Icon (if iconPosition is 'trailing') */}
  {iconPosition === 'trailing' && (
    <span className={iconStyles}>
      {icon || <Circle />}
    </span>
  )}
  
  {/* Only Icon (if iconPosition is 'only') */}
  {iconPosition === 'only' && (
    <span className={iconStyles}>
      {icon || <Circle />}
    </span>
  )}
</button>
```

#### Implementation Notes:
- Uses native `<button>` element for proper accessibility and semantic HTML
- Conditional rendering based on `iconPosition` prop

### Tailwind Variants Configuration

The E-03 Button uses tailwind-variants to manage its styling. The configuration:

1. **Slots**:
   - `base`: Styles the main button container with flexbox layout, rounded corners, focus states, and transition effects
   - `icon`: Configures icon display with proper sizing and spacing
   - `label`: Handles text styling with truncation for overflow

2. **Variants**:
   - `format`:
     - primary: Solid red background with white text (includes hover/focus states via CSS pseudo-classes)
     - secondary: White background with red border and text (includes hover/focus states via CSS pseudo-classes)
     - tertiary: Transparent background with red text (includes hover/focus states via CSS pseudo-classes)
     - link: Text-only appearance with underline on hover (includes hover/focus states via CSS pseudo-classes)
   
   - `theme`:
     - brand: Uses red as the primary color (default)
     - grey: Uses grey tones for a more neutral appearance
   
   - `size`:
     - small: Compact size for tight spaces
     - medium: Standard size for most interfaces
     - large: Enhanced visibility for important actions
     - extra-large: Maximum prominence for primary calls-to-action
   
   - `state`:
     - default: Normal appearance
     - disabled: Reduced opacity and cursor-not-allowed
   
   - `iconPosition`:
     - none: Text only
     - leading: Icon before text
     - trailing: Icon after text
     - only: Icon only with square aspect ratio

3. **Compound Variants**:
   - `theme` + `format`:
     - grey + primary: Dark grey background with white text (instead of red)
     - grey + secondary: White background with grey border and text (instead of red)
     - grey + tertiary: Transparent background with grey text (instead of red)
     - grey + link: Grey text with underline on hover (instead of red)
   - `state` + `format`: Disables hover effects when button is disabled

4. **Defaults Variants**:
   - `format`: `primary`
   - `state`: `default`
   - `iconPosition`: `none`
   - `theme`: `brand`
   - `size`: `small`

### Typescript Types

```typescript
// e-03-button.d.ts

import { Icon } from 'lucide-react'

// Variant Props (🎨)
export interface E03ButtonVariantProps {
  format?: 'primary' | 'secondary' | 'tertiary' | 'link'; // 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link'
  state?: 'default' | 'hover' | 'focused' | 'disabled'; // 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled'
  theme?: 'brand' | 'grey'; // 'T-01 Brand' | 'T-02 Grey'
  size?: 'small' | 'medium' | 'large' | 'extra-large'; // 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large'
}

// External Props (➡️)
export interface E03ButtonExternalProps {
  iconPosition?: 'none' | 'leading' | 'trailing' | 'only'; // 'None' | 'Leading' | 'Trailing' | 'Only'
}

// Data Props (📦)
export interface E03ButtonDataProps {
  label?: string; // Default: "Button"
  icon?: Icon; // Default: Circle from lucide-react
}

// Component Props
export interface E03ButtonProps 
  extends E03ButtonVariantProps, 
    E03ButtonExternalProps,
    E03ButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
```

### Component Folder Structure

```
src/components/element/Buttons/E-03-Button/
├── parts/ 
│   └── e-03-button.tsx            # Main component implementation
├── hooks/
│   └── use-e-03-button.ts         # Custom hook for button logic
├── tests/
│   └── e-03-button.test.tsx       # Unit tests for button component
├── stories/
│   └── e-03-button.stories.tsx    # Storybook stories for documentation
├── e-03-button.config.ts          # Tailwind variants configuration
├── e-03-button.d.ts               # TypeScript type definitions
├── index.tsx                      # Main export file
└── README.md                      # Component documentation (this file)
```

Each file will have the following responsibilities:

1. **e-03-button.tsx**: 
   - The main component implementation
   - Uses the custom hook for logic separation
   - Implements the HTML structure as defined
   - Applies styles from the tailwind-variants configuration

2. **use-e-03-button.ts**:
   - Handles ref forwarding
   - Sets default values for props
   - Manages variants for styling
   - Returns computed styles and other values needed by the component

3. **e-03-button.config.ts**:
   - Defines all the tailwind-variants configurations
   - Exports variant types and configuration

4. **e-03-button.d.ts**:
   - Contains TypeScript interfaces for the component props
   - Exports all necessary types

5. **e-03-button.test.tsx**:
   - Implements all the unit test cases defined in this plan
   - Tests all prop combinations and variants

6. **e-03-button.stories.tsx**:
   - Demonstrates all the component variants
   - Provides interactive controls for all props
   - Shows usage examples

7. **index.tsx**:
   - Exports the component and its types for external use