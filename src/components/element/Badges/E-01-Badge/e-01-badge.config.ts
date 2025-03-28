import { tv } from 'tailwind-variants'

const e01BadgeConfig = tv({
	slots: {
		base: 'inline-flex items-center justify-center rounded-full',
		label: 'text-xs font-medium',
		dot: 'w-2 h-2 rounded-full',
		icon: 'flex-shrink-0'
	},
	variants: {
		format: {
			primary: {
				base: 'px-2.5 py-0.5',
				label: 'block',
				dot: 'hidden',
				icon: 'hidden'
			},
			dot: {
				base: 'pl-2 pr-2.5 py-0.5 gap-1.5',
				label: 'block',
				dot: 'block',
				icon: 'hidden'
			},
			xClose: {
				base: 'pl-2.5 pr-1.5 py-0.5 gap-1',
				label: 'block',
				dot: 'hidden',
				icon: 'block w-3.5 h-3.5'
			},
			iconTrailing: {
				base: 'pl-2.5 pr-2 py-0.5 gap-1',
				label: 'block',
				dot: 'hidden',
				icon: 'block w-3.5 h-3.5'
			},
			iconLeading: {
				base: 'pl-2 pr-2.5 py-0.5 gap-1',
				label: 'block',
				dot: 'hidden',
				icon: 'block w-3.5 h-3.5'
			},
			iconOnly: {
				base: 'p-1',
				label: 'sr-only',
				dot: 'hidden',
				icon: 'block w-3.5 h-3.5'
			}
		},
		theme: {
			gray: {
				base: 'bg-gray-100',
				label: 'text-gray-700',
				dot: 'bg-gray-700',
				icon: 'text-gray-700'
			},
			brand: {
				base: 'bg-violet-50',
				label: 'text-violet-700',
				dot: 'bg-violet-700',
				icon: 'text-violet-700'
			},
			error: {
				base: 'bg-red-50',
				label: 'text-red-700',
				dot: 'bg-red-700',
				icon: 'text-red-700'
			},
			warning: {
				base: 'bg-yellow-50',
				label: 'text-yellow-700',
				dot: 'bg-yellow-700',
				icon: 'text-yellow-700'
			},
			success: {
				base: 'bg-green-50',
				label: 'text-green-700',
				dot: 'bg-green-700',
				icon: 'text-green-700'
			},
			blueGray: {
				base: 'bg-blue-gray-50',
				label: 'text-blue-gray-700',
				dot: 'bg-blue-gray-700',
				icon: 'text-blue-gray-700'
			},
			blueLight: {
				base: 'bg-blue-light-50',
				label: 'text-blue-light-700',
				dot: 'bg-blue-light-700',
				icon: 'text-blue-light-700'
			},
			blue: {
				base: 'bg-blue-50',
				label: 'text-blue-700',
				dot: 'bg-blue-700',
				icon: 'text-blue-700'
			},
			indigo: {
				base: 'bg-indigo-50',
				label: 'text-indigo-700',
				dot: 'bg-indigo-700',
				icon: 'text-indigo-700'
			},
			purple: {
				base: 'bg-purple-50',
				label: 'text-purple-700',
				dot: 'bg-purple-700',
				icon: 'text-purple-700'
			},
			pink: {
				base: 'bg-pink-50',
				label: 'text-pink-700',
				dot: 'bg-pink-700',
				icon: 'text-pink-700'
			},
			rose: {
				base: 'bg-rose-50',
				label: 'text-rose-700',
				dot: 'bg-rose-700',
				icon: 'text-rose-700'
			},
			orange: {
				base: 'bg-orange-50',
				label: 'text-orange-700',
				dot: 'bg-orange-700',
				icon: 'text-orange-700'
			}
		},
		size: {
			small: {
				base: '',
				label: 'text-xs',
				dot: 'w-2 h-2',
				icon: 'w-3.5 h-3.5'
			},
			medium: {
				base: 'px-3 py-1',
				label: 'text-sm',
				dot: 'w-2.5 h-2.5',
				icon: 'w-4 h-4'
			},
			large: {
				base: 'px-3.5 py-1.5',
				label: 'text-sm',
				dot: 'w-3 h-3',
				icon: 'w-4.5 h-4.5'
			}
		}
	},
	defaultVariants: {
		format: 'primary',
		theme: 'gray',
		size: 'small'
	},
	compoundVariants: [
		// Adjust spacing for dot format
		{
			format: 'dot',
			size: 'medium',
			class: {
				base: 'pl-2.5 pr-3 py-1 gap-2'
			}
		},
		{
			format: 'dot',
			size: 'large',
			class: {
				base: 'pl-3 pr-3.5 py-1.5 gap-2.5'
			}
		},
		// Adjust spacing for icon formats
		{
			format: ['iconTrailing', 'iconLeading', 'xClose'],
			size: 'medium',
			class: {
				base: 'gap-1.5'
			}
		},
		{
			format: ['iconTrailing', 'iconLeading', 'xClose'],
			size: 'large',
			class: {
				base: 'gap-2'
			}
		},
		// Adjust icon-only padding for different sizes
		{
			format: 'iconOnly',
			size: 'medium',
			class: {
				base: 'p-1.5'
			}
		},
		{
			format: 'iconOnly',
			size: 'large',
			class: {
				base: 'p-2'
			}
		}
	]
})

export { e01BadgeConfig }
