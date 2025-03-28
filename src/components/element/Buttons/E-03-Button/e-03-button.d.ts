// Variant Props (🎨)
export interface E03ButtonVariantProps {
  format?: 'primary' | 'secondary' | 'tertiary' | 'link'; // 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link'
  state?: 'default' | 'disabled'; // 'S-00 Default' | 'S-03 Disabled'
  theme?: 'brand' | 'grey'; // 'T-01 Brand' | 'T-02 Grey'
  size?: 'small' | 'medium' | 'large' | 'extra-large'; // 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large'
}

// External Props (➡️)
export interface E03ButtonExternalProps {
  iconPosition?: 'none' | 'leading' | 'trailing' | 'only'; // 'None' | 'Leading' | 'Trailing' | 'Only'
}

// Data Props (📦)
export interface E03ButtonDataProps {
  label?: string; // Default: "Button"
  icon?: React.ReactNode; // Default: Circle from lucide-react
}

// Component Props
export interface E03ButtonProps 
  extends E03ButtonVariantProps, 
    E03ButtonExternalProps,
    E03ButtonDataProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
