import { ArrowRight, ArrowLeft, Plus } from 'lucide-react'
import React from 'react'
import type { E03ButtonProps } from './e-03-button.d'

export const mockE03ButtonProps: Record<string, E03ButtonProps> = {
	default: {
		label: 'Button',
		format: 'primary',
		theme: 'brand',
		size: 'small',
		state: 'default',
		iconPosition: 'none'
	},
	primary: {
		label: 'Primary Button',
		format: 'primary',
		theme: 'brand',
		size: 'medium'
	},
	secondary: {
		label: 'Secondary Button',
		format: 'secondary',
		theme: 'brand',
		size: 'medium'
	},
	tertiary: {
		label: 'Tertiary Button',
		format: 'tertiary',
		theme: 'brand',
		size: 'medium'
	},
	link: {
		label: 'Link Button',
		format: 'link',
		theme: 'brand',
		size: 'medium'
	},
	small: {
		label: 'Small Button',
		format: 'primary',
		size: 'small'
	},
	medium: {
		label: 'Medium Button',
		format: 'primary',
		size: 'medium'
	},
	large: {
		label: 'Large Button',
		format: 'primary',
		size: 'large'
	},
	extraLarge: {
		label: 'Extra Large Button',
		format: 'primary',
		size: 'extra-large'
	},
	disabled: {
		label: 'Disabled Button',
		format: 'primary',
		state: 'disabled'
	},
	leadingIcon: {
		label: 'Leading Icon',
		format: 'primary',
		size: 'medium',
		iconPosition: 'leading',
		icon: React.createElement(ArrowLeft)
	},
	trailingIcon: {
		label: 'Trailing Icon',
		format: 'primary',
		size: 'medium',
		iconPosition: 'trailing',
		icon: React.createElement(ArrowRight)
	},
	iconOnly: {
		format: 'primary',
		size: 'medium',
		iconPosition: 'only',
		icon: React.createElement(Plus),
		'aria-label': 'Add item'
	},
	greyThemePrimary: {
		label: 'Grey Theme Primary',
		format: 'primary',
		theme: 'grey',
		size: 'medium'
	},
	greyThemeSecondary: {
		label: 'Grey Theme Secondary',
		format: 'secondary',
		theme: 'grey',
		size: 'medium'
	}
}
