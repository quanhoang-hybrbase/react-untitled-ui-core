import { ReactElement } from 'react'

// Variant Props (🎨)
export interface E04MenuItemVariantProps {
  format?: 'textOnly' | 'baseIcon' | 'featuredIcon' // 'F-01 Text Only' | 'F-02 Base Icon' | 'F-03 Featured Icon'
  state?: 'default' | 'hover' // 'S-00 Default' | 'S-01 Hover'
}

// External Props (➡️)
// No external props defined in the Figma documentation

// Data Props (📦)
export interface E04MenuItemDataProps {
  title?: string
  supportingText?: string
  icon?: ReactElement
  primaryActionLabel?: string
  secondaryActionLabel?: string
  badgeLabel?: string
}

// Component Props
export interface E04MenuItemProps 
  extends E04MenuItemVariantProps, 
    E04MenuItemDataProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
