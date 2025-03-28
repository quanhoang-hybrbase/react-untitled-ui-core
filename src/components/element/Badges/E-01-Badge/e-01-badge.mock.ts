import { E01BadgeProps } from './e-01-badge.d'

export const badgeMockProps: Record<string, E01BadgeProps> = {
	default: {
		label: 'Badge'
	},
	dot: {
		format: 'dot',
		label: 'Badge',
		theme: 'brand'
	},
	xClose: {
		format: 'xClose',
		label: 'Badge',
		theme: 'error'
	},
	iconTrailing: {
		format: 'iconTrailing',
		label: 'Badge',
		theme: 'success'
	},
	iconLeading: {
		format: 'iconLeading',
		label: 'Badge',
		theme: 'warning'
	},
	iconOnly: {
		format: 'iconOnly',
		label: 'Badge',
		theme: 'blue'
	},
	medium: {
		size: 'medium',
		label: 'Badge'
	},
	large: {
		size: 'large',
		label: 'Badge'
	}
}
