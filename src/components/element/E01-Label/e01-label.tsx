/**
 * Label Component
 * A reusable Label component for form elements and UI sections with consistent typography and styling.
 * Version: 0.1.0
 */

import { FC } from 'react'
import { labelVariants } from './e01-label.config'
import type { LabelProps } from './e01-label.d'

/**
 * Label component for form elements and UI sections
 * @param {LabelProps} props - The component props
 * @returns {React.ReactElement} - The rendered component
 */
const Label: FC<LabelProps> = ({
  size = 'medium',
  text = 'Label goes here',
  className = '',
  srOnly = false,
  htmlFor,
  disabled = false,
  truncate = false,
  multiline = false,
  ...props
}) => {
  // Combine the variants with any additional classes
  const labelClasses = labelVariants({
    size,
    disabled,
    truncate,
    multiline,
    srOnly,
    className,
  })

  return (
    <label
      htmlFor={htmlFor}
      className={labelClasses}
      aria-disabled={disabled ? 'true' : undefined}
      {...props}
    >
      {text}
    </label>
  )
}

export default Label
