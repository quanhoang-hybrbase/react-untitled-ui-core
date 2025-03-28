import type { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, ArrowLeft, Plus } from 'lucide-react'
import { E03Button } from '../parts/e-03-button'
import { mockE03ButtonProps } from '../e-03-button.mock'

const meta: Meta<typeof E03Button> = {
	title: 'Element/Buttons/E03Button',
	component: E03Button,
	parameters: {
		layout: 'centered',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8674-86670&t=8AOqSoeITUqEPr1Y-4'
		}
	},
	argTypes: {
		format: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'link'],
			description: 'Defines the button\'s visual style and prominence',
			table: {
				defaultValue: { summary: 'primary' }
			}
		},
		state: {
			control: 'select',
			options: ['default', 'disabled'],
			description: 'Adjusts the button\'s appearance to reflect its current interaction state',
			table: {
				defaultValue: { summary: 'default' }
			}
		},
		theme: {
			control: 'select',
			options: ['brand', 'grey'],
			description: 'Sets the button\'s color scheme',
			table: {
				defaultValue: { summary: 'brand' }
			}
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large', 'extra-large'],
			description: 'Controls the button\'s physical dimensions',
			table: {
				defaultValue: { summary: 'small' }
			}
		},
		iconPosition: {
			control: 'select',
			options: ['none', 'leading', 'trailing', 'only'],
			description: 'Determines the placement of an icon relative to the button\'s label',
			table: {
				defaultValue: { summary: 'none' }
			}
		},
		label: {
			control: 'text',
			description: 'Text displayed on the button',
			table: {
				defaultValue: { summary: 'Button' }
			}
		},
		icon: {
			control: { disable: true },
			description: 'Icon component to display',
			table: {
				defaultValue: { summary: 'Circle' }
			}
		},
		onClick: { action: 'clicked' }
	},
	args: {
		...mockE03ButtonProps.default
	}
}

export default meta
type Story = StoryObj<typeof E03Button>

// Default
export const Default: Story = {
	args: {
		...mockE03ButtonProps.default
	}
}

// Format variants
export const Primary: Story = {
	args: {
		...mockE03ButtonProps.primary
	}
}

export const Secondary: Story = {
	args: {
		...mockE03ButtonProps.secondary
	}
}

export const Tertiary: Story = {
	args: {
		...mockE03ButtonProps.tertiary
	}
}

export const Link: Story = {
	args: {
		...mockE03ButtonProps.link
	}
}

// Size variants
export const Small: Story = {
	args: {
		...mockE03ButtonProps.small
	}
}

export const Medium: Story = {
	args: {
		...mockE03ButtonProps.medium
	}
}

export const Large: Story = {
	args: {
		...mockE03ButtonProps.large
	}
}

export const ExtraLarge: Story = {
	args: {
		...mockE03ButtonProps.extraLarge
	}
}

// State variants
export const Disabled: Story = {
	args: {
		...mockE03ButtonProps.disabled
	}
}

// Icon position variants
export const LeadingIcon: Story = {
	args: {
		...mockE03ButtonProps.leadingIcon
	}
}

export const TrailingIcon: Story = {
	args: {
		...mockE03ButtonProps.trailingIcon
	}
}

export const IconOnly: Story = {
	args: {
		...mockE03ButtonProps.iconOnly
	}
}

// Theme variants
export const GreyThemePrimary: Story = {
	args: {
		...mockE03ButtonProps.greyThemePrimary
	}
}

export const GreyThemeSecondary: Story = {
	args: {
		...mockE03ButtonProps.greyThemeSecondary
	}
}

// All Variants Example
export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-8">
			<div className="flex flex-row gap-4 items-center">
				<E03Button format="primary" label="Primary" />
				<E03Button format="secondary" label="Secondary" />
				<E03Button format="tertiary" label="Tertiary" />
				<E03Button format="link" label="Link" />
			</div>
			
			<div className="flex flex-row gap-4 items-center">
				<E03Button size="small" label="Small" />
				<E03Button size="medium" label="Medium" />
				<E03Button size="large" label="Large" />
				<E03Button size="extra-large" label="Extra Large" />
			</div>
			
			<div className="flex flex-row gap-4 items-center">
				<E03Button theme="brand" label="Brand Theme" />
				<E03Button theme="grey" label="Grey Theme" />
			</div>
			
			<div className="flex flex-row gap-4 items-center">
				<E03Button label="Default State" />
				<E03Button state="disabled" label="Disabled State" />
			</div>
			
			<div className="flex flex-row gap-4 items-center">
				<E03Button iconPosition="leading" icon={<ArrowLeft />} label="Leading Icon" />
				<E03Button iconPosition="trailing" icon={<ArrowRight />} label="Trailing Icon" />
				<E03Button iconPosition="only" icon={<Plus />} aria-label="Icon Only" />
			</div>
		</div>
	)
}
