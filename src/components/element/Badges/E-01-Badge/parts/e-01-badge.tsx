'use client'

import { X, Plus } from 'lucide-react'
import { forwardRef } from 'react'
import { e01BadgeConfig } from '../e-01-badge.config'
import type { E01BadgeProps } from '../e-01-badge.d'

export const E01Badge = forwardRef<HTMLDivElement, E01BadgeProps>(
	(
		{
			format = 'primary',
			theme = 'gray',
			size = 'small',
			label = 'Badge',
			icon: Icon = Plus,
			className,
			...props
		},
		ref
	) => {
		const { base, label: labelStyles, dot: dotStyles, icon: iconStyles } = e01BadgeConfig({
			format,
			theme,
			size
		})

		// Determine which icon to render based on format
		const renderIcon = () => {
			if (format === 'xClose') {
				return <X className={iconStyles()} />
			}
			
			if (format === 'iconTrailing' || format === 'iconLeading' || format === 'iconOnly') {
				return <Icon className={iconStyles()} />
			}
			
			return null
		}

		return (
			<div
				ref={ref}
				className={base({ className })}
				data-format={format}
				data-theme={theme}
				data-size={size}
				{...props}
			>
				{format === 'dot' && <span className={dotStyles()} />}
				{format === 'iconLeading' && renderIcon()}
				<span className={labelStyles()}>{label}</span>
				{(format === 'iconTrailing' || format === 'xClose') && renderIcon()}
				{format === 'iconOnly' && renderIcon()}
			</div>
		)
	}
)

E01Badge.displayName = 'E01Badge'
