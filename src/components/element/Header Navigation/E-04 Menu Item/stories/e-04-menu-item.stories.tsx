import type { Meta, StoryObj } from '@storybook/react'
import { CircleIcon, LayoutIcon, UsersIcon } from 'lucide-react'
import { E04MenuItem } from '../parts/e-04-menu-item'
import { mockMenuItems } from '../e-04-menu-item.mock'

const meta: Meta<typeof E04MenuItem> = {
  title: 'Element/Header Navigation/E-04 Menu Item',
  component: E04MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['textOnly', 'baseIcon', 'featuredIcon'],
      description: 'The display format of the menu item',
      table: {
        defaultValue: { summary: 'textOnly' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'The interaction state of the menu item',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'The main title text of the menu item',
    },
    supportingText: {
      control: 'text',
      description: 'Additional descriptive text for the menu item',
    },
    badgeLabel: {
      control: 'text',
      description: 'Text for the optional badge',
    },
    primaryActionLabel: {
      control: 'text',
      description: 'Text for the primary action button',
    },
    secondaryActionLabel: {
      control: 'text',
      description: 'Text for the secondary action button',
    },
  },
}

export default meta
type Story = StoryObj<typeof E04MenuItem>

export const TextOnly: Story = {
  args: {
    ...mockMenuItems.textOnly,
  },
}

export const BaseIcon: Story = {
  args: {
    ...mockMenuItems.baseIcon,
    icon: CircleIcon,
  },
}

export const FeaturedIcon: Story = {
  args: {
    ...mockMenuItems.featuredIcon,
    icon: UsersIcon,
  },
}

export const WithBadge: Story = {
  args: {
    ...mockMenuItems.withBadge,
  },
}

export const WithActions: Story = {
  args: {
    ...mockMenuItems.withActions,
    icon: LayoutIcon,
  },
}

export const HoverState: Story = {
  args: {
    ...mockMenuItems.hoverState,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-[320px]">
      <E04MenuItem {...mockMenuItems.textOnly} />
      <E04MenuItem {...mockMenuItems.baseIcon} icon={CircleIcon} />
      <E04MenuItem {...mockMenuItems.featuredIcon} icon={UsersIcon} />
      <E04MenuItem {...mockMenuItems.withBadge} />
      <E04MenuItem {...mockMenuItems.withActions} icon={LayoutIcon} />
      <E04MenuItem {...mockMenuItems.hoverState} />
    </div>
  ),
}
