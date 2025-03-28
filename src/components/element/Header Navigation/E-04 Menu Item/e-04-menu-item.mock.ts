import { CircleIcon, LayoutIcon, UsersIcon } from 'lucide-react'
import { E04MenuItemProps } from './e-04-menu-item.d'

export const mockMenuItems: Record<string, E04MenuItemProps> = {
  textOnly: {
    title: 'Products',
    supportingText: 'Find the best solution for you.',
    format: 'textOnly',
    state: 'default'
  },
  baseIcon: {
    title: 'Dashboard',
    supportingText: 'View your analytics and reports.',
    format: 'baseIcon',
    icon: CircleIcon,
    state: 'default'
  },
  featuredIcon: {
    title: 'Team',
    supportingText: 'Manage your team members.',
    format: 'featuredIcon',
    icon: UsersIcon,
    state: 'default'
  },
  withBadge: {
    title: 'New Features',
    supportingText: 'Check out our latest updates.',
    format: 'textOnly',
    badgeLabel: 'New',
    state: 'default'
  },
  withActions: {
    title: 'Settings',
    supportingText: 'Configure your account preferences.',
    format: 'baseIcon',
    icon: LayoutIcon,
    primaryActionLabel: 'Learn more',
    secondaryActionLabel: 'Explore',
    state: 'default'
  },
  hoverState: {
    title: 'Resources',
    supportingText: 'Access documentation and guides.',
    format: 'textOnly',
    state: 'hover'
  }
}
