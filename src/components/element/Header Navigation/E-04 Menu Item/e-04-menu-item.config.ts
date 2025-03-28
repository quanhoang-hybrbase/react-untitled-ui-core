import { tv } from 'tailwind-variants'

const e04MenuItemConfig = tv({
  slots: {
    base: 'flex items-start p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50',
    iconContainer: 'flex-shrink-0 mr-3',
    featuredIcon: 'flex items-center justify-center w-10 h-10 rounded-full bg-violet-50 text-violet-600',
    baseIcon: 'flex items-center justify-center w-5 h-5 text-violet-600',
    contentWrapper: 'flex flex-col flex-grow',
    textContainer: 'flex flex-col',
    titleContainer: 'flex items-center gap-2',
    title: 'text-sm font-medium text-gray-900',
    supportingText: 'text-sm text-gray-500 mt-1',
    actionsContainer: 'flex items-center gap-2 mt-3',
    badgeContainer: 'flex-shrink-0'
  },
  variants: {
    format: {
      textOnly: {},
      baseIcon: {},
      featuredIcon: {}
    },
    state: {
      default: {
        base: 'bg-white'
      },
    }
  },
  compoundVariants: [
    {
      format: 'textOnly',
      class: {
        iconContainer: 'hidden'
      }
    },
    {
      format: 'baseIcon',
      class: {
        featuredIcon: 'hidden'
      }
    },
    {
      format: 'featuredIcon',
      class: {
        baseIcon: 'hidden'
      }
    }
  ],
  defaultVariants: {
    format: 'textOnly',
    state: 'default'
  }
})

export { e04MenuItemConfig }
