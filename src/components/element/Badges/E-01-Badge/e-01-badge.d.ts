import { LucideIcon } from 'lucide-react'

// Variant Props (🎨)
export interface E01BadgeVariantProps {
	format?: 'primary' | 'dot' | 'xClose' | 'iconTrailing' | 'iconLeading' | 'iconOnly' // 'F-01 Primary' | 'F-02 Dot' | 'F-03 X Close' | 'F-04 Icon Trailing' | 'F-05 Icon Leading' | 'F-06 Icon Only'
	theme?: 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'blueGray' | 'blueLight' | 'blue' | 'indigo' | 'purple' | 'pink' | 'rose' | 'orange' // 'T-01 Gray' | 'T-02 Brand' | 'T-03 Error' | 'T-04 Warning' | 'T-05 Success' | 'T-06 Blue Gray' | 'T-07 Blue Light' | 'T-08 Blue' | 'T-09 Indigo' | 'T-10 Purple' | 'T-11 Pink' | 'T-12 Rosé' | 'T-13 Orange'
	size?: 'small' | 'medium' | 'large' // 'M-01 Small' | 'M-02 Medium' | 'M-03 Large'
}

// External Props (⚙️)
export interface E01BadgeExternalProps {
	// No external props defined in the Figma documentation
}

// Data Props (📦)
export interface E01BadgeDataProps {
	label?: string // dataLabel: "Badge" (default value)
	icon?: React.ElementType // dataIcon: "E-22 Plus" (default value)
}

// Component Props
export interface E01BadgeProps 
	extends E01BadgeVariantProps, 
		E01BadgeExternalProps,
		E01BadgeDataProps,
		Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}
