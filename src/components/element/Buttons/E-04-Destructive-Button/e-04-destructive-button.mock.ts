import type { E04DestructiveButtonProps } from './e-04-destructive-button.d'

/**
 * Mock data for E-04 Destructive Button component
 */
export const mockE04DestructiveButtonProps: Record<string, E04DestructiveButtonProps> = {
  // Default button with primary format
  primary: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Secondary format button
  secondary: {
    format: 'F-02 Secondary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Tertiary format button
  tertiary: {
    format: 'F-03 Tertiary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Link format button
  link: {
    format: 'F-04 Link',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Button in hover state
  hover: {
    format: 'F-01 Primary',
    state: 'S-01 Hover',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Button in focused state
  focused: {
    format: 'F-01 Primary',
    state: 'S-02 Focused',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Button in disabled state
  disabled: {
    format: 'F-01 Primary',
    state: 'S-03 Disabled',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Small-sized button
  small: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-01 Small',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Large-sized button
  large: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-03 Large',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Extra large-sized button
  extraLarge: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-04 Extra Large',
    iconPosition: 'None',
    label: 'Delete',
  },
  
  // Button with leading icon
  leadingIcon: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'Leading',
    icon: 'E-10 Trash2',
    label: 'Delete',
  },
  
  // Button with trailing icon
  trailingIcon: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'Trailing',
    icon: 'E-10 Trash2',
    label: 'Delete',
  },
  
  // Button with icon only
  iconOnly: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'Only',
    icon: 'E-10 Trash2',
    label: 'Delete',
  },
  
  // Button with custom label
  customLabel: {
    format: 'F-01 Primary',
    state: 'S-00 Default',
    size: 'M-02 Medium',
    iconPosition: 'None',
    label: 'Remove Item',
  },
}
