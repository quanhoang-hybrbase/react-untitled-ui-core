'use client'

import { forwardRef } from 'react'
import { useE04MenuItem } from '../hooks/use-e-04-menu-item'
import type { E04MenuItemProps } from '../e-04-menu-item.d'
import { clsx } from 'clsx'
import { ArrowRightIcon } from 'lucide-react'
import { E03Button } from '../../../Buttons/E-03-Button'
import { E01Badge } from '../../../Badges/E-01-Badge/parts/e-01-badge'

export const E04MenuItem = forwardRef<HTMLDivElement, E04MenuItemProps>(
  ({ 
    className, 
    title = 'Menu Item', 
    supportingText,
    icon,
    primaryActionLabel,
    secondaryActionLabel,
    badgeLabel,
    ...props 
  }, ref) => {
    const { 
      menuItemRef, 
      variant, 
      menuItemStyle,
    } = useE04MenuItem({ ref, title, supportingText, icon, primaryActionLabel, secondaryActionLabel, badgeLabel, ...props })

    const {
      base,
      iconContainer,
      featuredIcon,
      baseIcon,
      contentWrapper,
      textContainer,
      titleContainer,
      title: titleStyle,
      supportingText: supportingTextStyle,
      actionsContainer,
    } = menuItemStyle

    // Dynamically import the Icon component if provided
    const Icon = icon ? icon : null

    return (
      <div
        data-comp="e-04-menu-item"
        data-variant={variant}
        className={clsx(base(), className)}
        ref={menuItemRef}
        {...props}
      >
        {Icon && (
          <div className={iconContainer()}>
            <div className={featuredIcon()}>
              <Icon className="w-5 h-5" />
            </div>
            <div className={baseIcon()}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        )}
        
        <div className={contentWrapper()}>
          <div className={textContainer()}>
            <div className={titleContainer()}>
              <h4 className={titleStyle()}>{title}</h4>
              {badgeLabel && (
                <E01Badge
                  label={badgeLabel}
                  theme="success"
                />
              )}
            </div>
            {supportingText && (
              <p className={supportingTextStyle()}>{supportingText}</p>
            )}
          </div>
          
          {(primaryActionLabel || secondaryActionLabel) && (
            <div className={actionsContainer()}>
              {secondaryActionLabel && (
                <E03Button 
                  format="link"
                  theme="grey"
                  label={secondaryActionLabel}
                />
              )}
              {primaryActionLabel && (
                <E03Button 
                  format="link"
                  iconPosition="trailing"
                  label={primaryActionLabel}
                  icon={<ArrowRightIcon />}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

E04MenuItem.displayName = 'E04MenuItem'
