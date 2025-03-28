'use client'

import { forwardRef } from 'react'
import { useE03Button } from '../hooks/use-e-03-button'
import type { E03ButtonProps } from '../e-03-button.d'

/**
 * E-03 Button - A flexible and accessible button component
 * 
 * @component
 * @example
 * ```tsx
 * <E03Button 
 *   format="primary"
 *   size="medium"
 *   label="Click me"
 *   iconPosition="leading"
 *   onClick={() => console.log('Button clicked')}
 * />
 * ```
 */
export const E03Button = forwardRef<HTMLButtonElement, E03ButtonProps>(
	function E03Button(props, ref) {
		const {
			buttonRef,
			variant,
			buttonStyle,
			label,
			icon,
			iconPosition,
			state,
			...restProps
		} = useE03Button({ ...props, ref })

		return (
			<button
				data-comp="e-03-button"
				data-variant={variant}
				className={buttonStyle.base()}
				ref={buttonRef}
				disabled={state === 'disabled'}
				{...restProps}
			>
				{/* Leading Icon */}
				{iconPosition === 'leading' && (
					<span className={buttonStyle.icon()}>
						{icon}
					</span>
				)}
				
				{/* Label (if iconPosition is not 'only') */}
				{iconPosition !== 'only' && (
					<span className={buttonStyle.label()}>
						{label}
					</span>
				)}
				
				{/* Trailing Icon */}
				{iconPosition === 'trailing' && (
					<span className={buttonStyle.icon()}>
						{icon}
					</span>
				)}
				
				{/* Only Icon (if iconPosition is 'only') */}
				{iconPosition === 'only' && (
					<span className={buttonStyle.icon()}>
						{icon}
					</span>
				)}
			</button>
		)
	}
)

E03Button.displayName = 'E03Button'
