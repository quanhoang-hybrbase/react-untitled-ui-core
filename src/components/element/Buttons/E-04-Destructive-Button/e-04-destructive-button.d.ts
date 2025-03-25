// Variant Props (🎨)
export interface E04DestructiveButtonVariantProps {
  format?: 'F-01 Primary' | 'F-02 Secondary' | 'F-03 Tertiary' | 'F-04 Link';
  state?: 'S-00 Default' | 'S-01 Hover' | 'S-02 Focused' | 'S-03 Disabled';
  size?: 'M-01 Small' | 'M-02 Medium' | 'M-03 Large' | 'M-04 Extra Large';
}

// External Props (⚙️)
export interface E04DestructiveButtonExternalProps {
  iconPosition?: 'None' | 'Leading' | 'Trailing' | 'Only';
}

// Data Props (📦)
export interface E04DestructiveButtonDataProps {
  label?: string;
  icon?: string;
}

// Component Props
export interface E04DestructiveButtonProps 
  extends E04DestructiveButtonVariantProps, 
    E04DestructiveButtonExternalProps, 
    E04DestructiveButtonDataProps, 
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}
