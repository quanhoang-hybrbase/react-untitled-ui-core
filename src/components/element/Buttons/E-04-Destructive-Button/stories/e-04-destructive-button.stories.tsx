import type { Meta, StoryObj } from '@storybook/react'
import { E04DestructiveButton } from '../e-04-destructive-button'
import type { E04DestructiveButtonProps } from '../e-04-destructive-button.d'
import { mockE04DestructiveButtonProps } from '../e-04-destructive-button.mock'

/**
 * E-04 Destructive Button is a type of action button used to perform critical or irreversible actions, 
 * typically associated with deletion, removal, or significant changes that may impact data or user settings. 
 * It is designed to draw attention and caution the user before proceeding.
 * 
 * @see Figma Design: [E-04 Destructive Button](https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8657-74758&t=8TInoGe4p4V3kKke-4)
 */
const meta: Meta<E04DestructiveButtonProps> = {
  title: 'Element/Buttons/E04DestructiveButton',
  component: E04DestructiveButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8657-74758&t=8TInoGe4p4V3kKke-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Variant Props
    format: {
      control: 'select',
      options: ['F-01 Primary', 'F-02 Secondary', 'F-03 Tertiary', 'F-04 Link'],
      description: 'The visual format of the button',
      table: {
        category: 'Variant Props',
        defaultValue: { summary: 'F-01 Primary' },
      },
    },
    state: {
      control: 'select',
      options: ['S-00 Default', 'S-01 Hover', 'S-02 Focused', 'S-03 Disabled'],
      description: 'The state of the button',
      table: {
        category: 'Variant Props',
        defaultValue: { summary: 'S-00 Default' },
      },
    },
    size: {
      control: 'select',
      options: ['M-01 Small', 'M-02 Medium', 'M-03 Large', 'M-04 Extra Large'],
      description: 'The size of the button',
      table: {
        category: 'Variant Props',
        defaultValue: { summary: 'M-02 Medium' },
      },
    },
    // External Props
    iconPosition: {
      control: 'select',
      options: ['None', 'Leading', 'Trailing', 'Only'],
      description: 'The position of the icon relative to the label',
      table: {
        category: 'External Props',
        defaultValue: { summary: 'None' },
      },
    },
    // Data Props
    label: {
      control: 'text',
      description: 'The text label of the button',
      table: {
        category: 'Data Props',
        defaultValue: { summary: 'Button' },
      },
    },
    icon: {
      control: 'text',
      description: 'The icon to display (format: "E-XX IconName" where IconName is a valid Lucide icon)',
      table: {
        category: 'Data Props',
      },
    },
    // HTML Button Props
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
      table: {
        category: 'HTML Button Props',
        defaultValue: { summary: 'button' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        category: 'HTML Button Props',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
      table: {
        category: 'HTML Button Props',
      },
    },
  },
  args: mockE04DestructiveButtonProps.primary,
}

export default meta
type Story = StoryObj<typeof E04DestructiveButton>

/**
 * Default story with default props.
 */
export const Default: Story = {
  args: mockE04DestructiveButtonProps.primary
}

/**
 * Button with secondary format.
 */
export const Secondary: Story = {
  args: mockE04DestructiveButtonProps.secondary
}

/**
 * Button with tertiary format.
 */
export const Tertiary: Story = {
  args: mockE04DestructiveButtonProps.tertiary
}

/**
 * Button with link format.
 */
export const Link: Story = {
  args: mockE04DestructiveButtonProps.link
}

/**
 * Button in hover state.
 */
export const Hover: Story = {
  args: mockE04DestructiveButtonProps.hover
}

/**
 * Button in focused state.
 */
export const Focused: Story = {
  args: mockE04DestructiveButtonProps.focused
}

/**
 * Button in disabled state.
 */
export const Disabled: Story = {
  args: mockE04DestructiveButtonProps.disabled
}

/**
 * Small-sized button.
 */
export const Small: Story = {
  args: mockE04DestructiveButtonProps.small
}

/**
 * Large-sized button.
 */
export const Large: Story = {
  args: mockE04DestructiveButtonProps.large
}

/**
 * Extra large-sized button.
 */
export const ExtraLarge: Story = {
  args: mockE04DestructiveButtonProps.extraLarge
}

/**
 * Button with leading icon.
 */
export const LeadingIcon: Story = {
  args: mockE04DestructiveButtonProps.leadingIcon
}

/**
 * Button with trailing icon.
 */
export const TrailingIcon: Story = {
  args: mockE04DestructiveButtonProps.trailingIcon
}

/**
 * Button with icon only.
 */
export const IconOnly: Story = {
  args: mockE04DestructiveButtonProps.iconOnly
}

/**
 * Button with custom label.
 */
export const CustomLabel: Story = {
  args: mockE04DestructiveButtonProps.customLabel
}

/**
 * Button with onClick handler.
 */
export const WithClickHandler: Story = {
  args: {
    ...mockE04DestructiveButtonProps.primary,
    onClick: () => alert('Destructive action triggered!'),
  }
}
