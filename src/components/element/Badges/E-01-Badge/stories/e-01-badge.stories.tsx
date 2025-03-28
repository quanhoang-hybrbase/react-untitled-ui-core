import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Mail, Bell, Star, Heart, X } from 'lucide-react'
import { E01Badge } from '../parts/e-01-badge'
import { badgeMockProps } from '../e-01-badge.mock'

const meta: Meta<typeof E01Badge> = {
	title: 'Element/Badges/E01Badge',
	component: E01Badge,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A Badge is a small, visually distinct UI element used to display concise information, draw attention, or indicate status, quantity, or categorization.'
			}
		}
	},
	argTypes: {
		format: {
			control: 'select',
			options: ['primary', 'dot', 'xClose', 'iconTrailing', 'iconLeading', 'iconOnly'],
			description: 'Controls the layout and appearance of the badge',
			table: {
				defaultValue: { summary: 'primary' },
				type: { summary: 'string' }
			}
		},
		theme: {
			control: 'select',
			options: [
				'gray', 'brand', 'error', 'warning', 'success', 
				'blueGray', 'blueLight', 'blue', 'indigo', 
				'purple', 'pink', 'rose', 'orange'
			],
			description: 'Controls the color scheme of the badge',
			table: {
				defaultValue: { summary: 'gray' },
				type: { summary: 'string' }
			}
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Controls the size of the badge',
			table: {
				defaultValue: { summary: 'small' },
				type: { summary: 'string' }
			}
		},
		label: {
			control: 'text',
			description: 'The text content of the badge',
			table: {
				defaultValue: { summary: 'Badge' },
				type: { summary: 'string' }
			}
		},
		icon: {
			control: 'select',
			options: ['Plus', 'Mail', 'Bell', 'Star', 'Heart', 'X'],
			mapping: {
				Plus: Plus,
				Mail: Mail,
				Bell: Bell,
				Star: Star,
				Heart: Heart,
				X: X
			},
			description: 'The icon to display (for icon formats)',
			table: {
				type: { summary: 'ReactNode' }
			}
		},
		onClick: {
			action: 'clicked',
			description: 'Callback when the badge is clicked',
			table: {
				type: { summary: 'function' }
			}
		}
	}
}

export default meta
type Story = StoryObj<typeof E01Badge>

// Default story with controls
export const Playground: Story = {
	args: {
		...badgeMockProps.default,
		label: 'Badge',
		onClick: () => console.log('Badge clicked')
	}
}

// Basic examples for each format
export const Primary: Story = {
	args: badgeMockProps.default
}

export const Dot: Story = {
	args: badgeMockProps.dot
}

export const XClose: Story = {
	args: badgeMockProps.xClose
}

export const IconTrailing: Story = {
	args: {
		...badgeMockProps.iconTrailing,
		icon: Plus
	}
}

export const IconLeading: Story = {
	args: {
		...badgeMockProps.iconLeading,
		icon: Bell
	}
}

export const IconOnly: Story = {
	args: {
		...badgeMockProps.iconOnly,
		icon: Star
	}
}

// Size variants
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2 items-center">
			<E01Badge size="small" label="Small" />
			<E01Badge size="medium" label="Medium" />
			<E01Badge size="large" label="Large" />
		</div>
	)
}

// Theme variants
export const Themes: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<E01Badge theme="gray" label="Gray" />
			<E01Badge theme="brand" label="Brand" />
			<E01Badge theme="error" label="Error" />
			<E01Badge theme="warning" label="Warning" />
			<E01Badge theme="success" label="Success" />
			<E01Badge theme="blueGray" label="Blue Gray" />
			<E01Badge theme="blueLight" label="Blue Light" />
			<E01Badge theme="blue" label="Blue" />
			<E01Badge theme="indigo" label="Indigo" />
			<E01Badge theme="purple" label="Purple" />
			<E01Badge theme="pink" label="Pink" />
			<E01Badge theme="rose" label="Rose" />
			<E01Badge theme="orange" label="Orange" />
		</div>
	)
}

// Format variants
export const Formats: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2 items-center">
			<E01Badge format="primary" label="Primary" />
			<E01Badge format="dot" label="Dot" />
			<E01Badge format="xClose" label="X Close" />
			<E01Badge format="iconTrailing" icon={Bell} label="Icon Trailing" />
			<E01Badge format="iconLeading" icon={Star} label="Icon Leading" />
			<E01Badge format="iconOnly" icon={Heart} label="Icon Only" />
		</div>
	)
}

// Interactive example
export const Interactive: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div>
				<h3 className="text-sm font-medium mb-2">Click the badges:</h3>
				<div className="flex flex-wrap gap-2">
					<E01Badge 
						label="Click me" 
						onClick={() => alert('Primary badge clicked!')} 
					/>
					<E01Badge 
						format="xClose" 
						label="Dismiss" 
						theme="error"
						onClick={() => alert('X Close badge clicked!')} 
					/>
					<E01Badge 
						format="iconTrailing" 
						icon={Bell} 
						label="Notifications" 
						theme="brand"
						onClick={() => alert('Icon Trailing badge clicked!')} 
					/>
				</div>
			</div>
		</div>
	)
}

// Test cases from the Implementation Plan
export const TestCases: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div>
				<h3 className="text-sm font-medium mb-2">Default Props:</h3>
				<E01Badge data-testid="test-badge" />
			</div>
			
			<div>
				<h3 className="text-sm font-medium mb-2">Format Variants:</h3>
				<div className="flex flex-wrap gap-2">
					<E01Badge data-testid="test-badge-primary" format="primary" label="Primary" />
					<E01Badge data-testid="test-badge-dot" format="dot" label="Dot" />
					<E01Badge data-testid="test-badge-xclose" format="xClose" label="X Close" />
					<E01Badge data-testid="test-badge-trailing" format="iconTrailing" icon={Plus} label="Icon Trailing" />
					<E01Badge data-testid="test-badge-leading" format="iconLeading" icon={Plus} label="Icon Leading" />
					<E01Badge data-testid="test-badge-icon-only" format="iconOnly" icon={Plus} label="Icon Only" />
				</div>
			</div>
			
			<div>
				<h3 className="text-sm font-medium mb-2">Theme Variants:</h3>
				<div className="flex flex-wrap gap-2">
					<E01Badge data-testid="test-badge-gray" theme="gray" label="Gray" />
					<E01Badge data-testid="test-badge-brand" theme="brand" label="Brand" />
					<E01Badge data-testid="test-badge-error" theme="error" label="Error" />
				</div>
			</div>
			
			<div>
				<h3 className="text-sm font-medium mb-2">Size Variants:</h3>
				<div className="flex flex-wrap gap-2 items-center">
					<E01Badge data-testid="test-badge-small" size="small" label="Small" />
					<E01Badge data-testid="test-badge-medium" size="medium" label="Medium" />
					<E01Badge data-testid="test-badge-large" size="large" label="Large" />
				</div>
			</div>
			
			<div>
				<h3 className="text-sm font-medium mb-2">Custom Label:</h3>
				<E01Badge data-testid="test-badge-label" label="New" />
			</div>
			
			<div>
				<h3 className="text-sm font-medium mb-2">Custom Icon:</h3>
				<div className="flex flex-wrap gap-2">
					<E01Badge data-testid="test-badge-icon" icon={Plus} format="iconOnly" />
				</div>
			</div>
		</div>
	)
}
