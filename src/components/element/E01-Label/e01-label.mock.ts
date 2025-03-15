/**
 * Mock data for the Label component
 * Version: 0.1.0
 */

import type { LabelProps } from './e01-label.d'

export const labelMockData: Record<string, LabelProps> = {
  default: {
    text: 'Default Label',
    size: 'medium',
  },
  extraSmall: {
    text: 'Extra Small Label',
    size: 'extraSmall',
  },
  small: {
    text: 'Small Label',
    size: 'small',
  },
  large: {
    text: 'Large Label',
    size: 'large',
  },
  extraLarge: {
    text: 'Extra Large Label',
    size: 'extraLarge',
  },
  disabled: {
    text: 'Disabled Label',
    disabled: true,
  },
  truncated: {
    text: 'This is a very long label that will be truncated with an ellipsis',
    truncate: true,
  },
  multiline: {
    text: 'This is a multiline label that will wrap to the next line when it reaches the end of its container',
    multiline: true,
  },
  srOnly: {
    text: 'Screen Reader Only Label',
    srOnly: true,
  },
  withHtmlFor: {
    text: 'Label with htmlFor',
    htmlFor: 'input-id',
  },
}
