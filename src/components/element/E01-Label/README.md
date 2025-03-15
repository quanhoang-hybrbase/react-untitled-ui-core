# Label Component

A reusable Label component for form elements and UI sections with consistent typography and styling.

## Version History

**0.1.0** - Initial implementation of the Label component

## Features

- Consistent styling across the application
- Multiple size variants: extraSmall, small, medium, large, extraLarge
- Support for screen reader only text
- Support for truncation with ellipsis
- Support for multiline text
- Support for disabled state
- Accessibility support with htmlFor attribute

## Usage

```tsx
// Basic usage with default medium size
<Label text="Default Label" />

// With htmlFor for accessibility
<Label 
  text="Email Address" 
  htmlFor="email-input" 
/>

// With large size
<Label 
  text="Section Title" 
  size="large" 
/>

// Disabled label
<Label 
  text="Disabled Field" 
  disabled={true} 
/>

// Truncated text with ellipsis
<Label 
  text="This is a very long label that will be truncated" 
  truncate={true} 
/>

// Multiline text
<Label 
  text="This is a multiline label that will wrap to multiple lines" 
  multiline={true} 
/>

// Screen reader only (visually hidden)
<Label 
  text="Instructions for screen readers" 
  srOnly={true} 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'extraSmall' \| 'small' \| 'medium' \| 'large' \| 'extraLarge' | 'medium' | The size of the label |
| text | string | 'Label goes here' | The text content of the label |
| className | string | '' | Additional CSS classes to apply to the label |
| srOnly | boolean | false | When true, the text is hidden from the screen but still accessible to screen readers |
| htmlFor | string | undefined | The id of the element that the label is associated with |
| disabled | boolean | false | When true, the label is disabled |
| truncate | boolean | false | When true, the text is truncated with an ellipsis |
| multiline | boolean | false | When true, the text is allowed to wrap to multiple lines |

## Styling Specification

- **All sizes**:
  - Font weight: Semi-bold (font-semibold)
  - Line height: 150% (leading-relaxed)
  - Touch targets: Minimum 44px (min-h-11, min-w-11) for mobile devices
  - Default color: text-black

- **extraLarge** size:
  - Font size: text-xl (20px)

- **large** size:
  - Font size: text-lg (18px)

- **medium** size:
  - Font size: text-base (16px)

- **small** size:
  - Font size: text-sm (14px)

- **extraSmall** size:
  - Font size: text-xs (12px)
