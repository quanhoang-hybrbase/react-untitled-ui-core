# Annotations
[] Backlog
[-] In Progress
[X] Done

# Reminders
- Use theme variables from `global.css` or Tailwind utilities only for styling consistency. Never use arbitrary values.

---
# Label [ ]
## Purpose
A reusable Label component for form elements and UI sections with consistent typography and styling.

### Saved location 
src/components/element/

## Version
**0.1.0 **
Initialize new Typography component

## Release Dates
to be updated

## Implementation Details
1. Props Specification
- size (string): extraSmall, small, medium (default), large, extraLarge
- text (string): The text content of the Typography component. By default, the value is `Label goes here`
- className (string, optional): a list of Tailwind CSS classes to override the default style of the component
- srOnly (boolean, optional): When true, the text is hidden from the screen but still accessible to screen readers. Default is false
- htmlFor (string, optional): The id of the element that the label is associated with. This is used for accessibility purposes.
- disabled (boolean, optional): When true, the label is disabled. Default is false
- truncate (boolean, optional): When true, the text is truncated with an ellipsis. Default is false
- multiline (boolean, optional): When true, the text is allowed to wrap to multiple lines. Default is false

2. Styling Specification
- Responsiveness
    - Default size adapts to viewport
    - Touch targets minimum 44x44px on mobile devices
- font-weight: semi-bold;
- line-height: 150%;

- `extraLarge` size:
    - font-size: 20px;
- `large` size:
    - font-size: 18px;
- `medium` size:
    - font-size: 16px;
- `small` size:
    - font-size: 14px;
- `extraSmall` size:
    - font-size: 12px;
- color: #0A0A0A;
---

# Button [ ]
## Purpose
A reusable button component that adheres to design principles of flexibility, maintainability, and scalability, with support for various states, sizes, variants, and accessibility features.

## File Naming
button.tsx

### Saved location 
components/sections/

## Version
**0.1.0 **
Initialize new component

## Release Dates
to be updated

## Implementation Details
1. UI Structure 
- Text alignment: Center-aligned in all variants
- Text+icon buttons: Consistent spacing between icon and text (spacing/3)






2. Styling Requirements
- Responsiveness
    - Default size adapts to viewport
    - Touch targets minimum 44x44px on mobile devices
- Dimensions
    - width: 136px
    - height: 48px
    - border-radius: corner-radius/rounded-xl
    - border-width: 1px
    - padding-top: spacing/3
    - padding-right: spacing/6
    - padding-bottom: spacing/3
    - padding-left: spacing/6
    - gap: spacing/3;

3. Interactions & animation
- Loading state with spinner animation

4. Props Specification
**Core Props**
- format: primary, secondary, outline, ghost, link, etc.
- size: xs, sm, md, lg, xl
- intent: default, success, warning, danger, info
- fullWidth: boolean for 100% width
- isDisabled: boolean for disabled state
- isLoading: boolean for loading state
- leftIcon/rightIcon: React elements

**Accessibility Props**
- aria-* attributes forwarding
- Role overrides when necessary
- Focus management options


---
<!-- # Feature3 [ ]
## Purpose
A  section component to display a list of features in grid

## File Naming
feature-3.tsx

### Saved location 
components/@sections/

## Version
**0.0.01 **
Initialize new section component

## Release Dates
to be updated

## Dependencies
- @elements/button
- @composites/section-title
- @composites/card-default
- @templates/container
- @templates/grid
- @templates/actions
- motion

## Design Pattern 
Compound Component

## Requirements
1. UI Structure 
- @templates/container
    - @composites/section-title: length=medium, alignment=left
    - @templates/grid: column=3
        - @composites/card-default: size=lg, urlSrc="public/assets/image-placeholder.png"
    - @templates/actions
        - @elements/button: variant=primary, size=md
        - @elements/button: variant=link, size=md (optional)

2. Styling Requirements
- Responsiveness
    - On desktop, the @templates/grid will display 3 columns. On mobile, it will display 1 column

3. Property Register
Feature3.SectionTitle = @composites/section-title
Feature3.CardItem = @composites/card-default
Feature3.ActionPrimary = @elements/button (variant=primary)
Feature3.ActionLink = @elements/button (variant=link)

3. Interactions & animation
- Given user is on the desktop, when the component enters the viewport, user will see an subtle entrance animation of the section title. 

4. Props
- className (string, optional): a list of Tailwind CSS classes to override the default style of the component -->