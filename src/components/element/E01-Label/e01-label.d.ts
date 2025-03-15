/**
 * Type definitions for the Label component
 * Version: 0.1.0
 */

import { HTMLAttributes } from 'react'

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * The size of the label
   * @default 'medium'
   */
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
  
  /**
   * The text content of the label
   * @default 'Label goes here'
   */
  text?: string
  
  /**
   * Additional CSS classes to apply to the label
   */
  className?: string
  
  /**
   * When true, the text is hidden from the screen but still accessible to screen readers
   * @default false
   */
  srOnly?: boolean
  
  /**
   * The id of the element that the label is associated with
   */
  htmlFor?: string
  
  /**
   * When true, the label is disabled
   * @default false
   */
  disabled?: boolean
  
  /**
   * When true, the text is truncated with an ellipsis
   * @default false
   */
  truncate?: boolean
  
  /**
   * When true, the text is allowed to wrap to multiple lines
   * @default false
   */
  multiline?: boolean
}
