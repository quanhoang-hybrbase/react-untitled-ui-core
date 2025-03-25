import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { E04DestructiveButton } from '../e-04-destructive-button'
import { mockE04DestructiveButtonProps } from '../e-04-destructive-button.mock'
import { E04DestructiveButtonProps } from '../e-04-destructive-button'
import { Circle, Icon, Trash2 } from 'lucide-react'
import React from 'react'

// Mock Lucide icons
jest.mock('lucide-react', () => {
	return {
		__esModule: true,
		...jest.requireActual('lucide-react'),
		// Mock any specific icon we'll use in tests
		Trash2: () => <div data-testid="trash2-icon">Trash2 Icon</div>,
		Circle: () => <div data-testid="circle-icon">Circle Icon</div>,
	}
})

describe('E04DestructiveButton', () => {
	// Test Case 1.01: Verifies component naming and export
	test('exports component with correct name', () => {
		// Verify component is exported with correct name
		expect(E04DestructiveButton).toBeDefined()
		expect(E04DestructiveButton.name).toBe('E04DestructiveButton')
	})
	
	// Test Case 1.02: Verifies prop types and default values
	test('accepts all defined props with correct types', () => {
		// Create a test component with all possible props to verify TypeScript doesn't complain
		const allProps: E04DestructiveButtonProps = {
			label: 'Test Button',
			format: 'F-01 Primary',
			state: 'S-00 Default',
			size: 'M-02 Medium',
			icon: 'E-01 Trash2',
			iconPosition: 'Leading',
			className: 'test-class',
			disabled: false,
			onClick: () => {},
			// HTML button attributes
			type: 'button',
			form: 'test-form',
			name: 'test-button',
			value: 'test-value',
		}
		
		// Render with all props to ensure they're accepted
		render(<E04DestructiveButton data-testid="test-button" {...allProps} />)
		const button = screen.getByTestId('test-button')
		expect(button).toBeInTheDocument()
		
		// Verify prop values are applied correctly
		expect(button).toHaveTextContent(allProps.label)
		expect(button).toHaveAttribute('type', allProps.type)
		expect(button).toHaveAttribute('form', allProps.form)
		expect(button).toHaveAttribute('name', allProps.name)
		expect(button).toHaveAttribute('value', allProps.value)
		expect(button).toHaveClass(allProps.className)
		expect(button.getAttribute('data-variant')).toContain(`format=${allProps.format}`)
		expect(button.getAttribute('data-variant')).toContain(`state=${allProps.state}`)
		expect(button.getAttribute('data-variant')).toContain(`size=${allProps.size}`)
		expect(button.getAttribute('data-variant')).toContain(`iconPosition=${allProps.iconPosition}`)
	})
	
	// Test Case 1.03: Renders with default props
	test('renders with default props', () => {
		// Verify test case 1.03 in README.md
		render(<E04DestructiveButton data-testid="test-button" />)
		
		// Button should be visible with default label
		const button = screen.getByTestId('test-button')
		expect(button).toBeInTheDocument()
		expect(button).toHaveTextContent('Button')
		
		// Default button should have primary format styling
		expect(button).toHaveAttribute('type', 'button')
		expect(button.getAttribute('data-variant')).toContain('format=F-01 Primary')
	})
	
	// Test Case 1.04: Renders with custom label
	test('renders with custom label', () => {
		// Verify test case 1.04 in README.md
		const label = 'Delete'
		render(<E04DestructiveButton data-testid="test-button" label={label} />)
		
		// Button should display the custom label
		const button = screen.getByTestId('test-button')
		expect(button).toHaveTextContent(label)
		expect(button).toHaveAttribute('aria-label', label)
	})
	
	// Test Case 1.05: Renders with different formats
	test.each([
		['F-01 Primary', mockE04DestructiveButtonProps.primary],
		['F-02 Secondary', mockE04DestructiveButtonProps.secondary],
		['F-03 Tertiary', mockE04DestructiveButtonProps.tertiary],
		['F-04 Link', mockE04DestructiveButtonProps.link]
	])('renders with %s format', (formatName, props) => {
		// Use formatName in test to avoid lint warning
		expect(formatName).toBeTruthy();
		
		// Verify test case 1.05 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...props} />)
		
		const button = screen.getByTestId('test-button')
		expect(button).toBeInTheDocument()
		
		// Format is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain(`format=${props.format}`)
		
		// Verify the format prop value is one of the allowed values
		expect(['F-01 Primary', 'F-02 Secondary', 'F-03 Tertiary', 'F-04 Link']).toContain(props.format || '')
	})
	
	// Test Case 1.06: Renders with different states
	test.each([
		['S-00 Default', mockE04DestructiveButtonProps.primary],
		['S-01 Hover', mockE04DestructiveButtonProps.hover],
		['S-02 Focused', mockE04DestructiveButtonProps.focused],
		['S-03 Disabled', mockE04DestructiveButtonProps.disabled]
	])('renders with %s state', (stateName, props) => {
		// Use stateName in test to avoid lint warning
		expect(stateName).toBeTruthy();
		
		// Verify test case 1.06 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...props} />)
		
		const button = screen.getByTestId('test-button')
		expect(button).toBeInTheDocument()
		
		// State is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain(`state=${props.state}`)
		
		// Verify the state prop value is one of the allowed values
		expect(['S-00 Default', 'S-01 Hover', 'S-02 Focused', 'S-03 Disabled']).toContain(props.state || '')
	})
	
	// Test Case 1.07: Renders with different sizes
	test.each([
		['M-01 Small', mockE04DestructiveButtonProps.small],
		['M-02 Medium', mockE04DestructiveButtonProps.primary], // primary uses medium size
		['M-03 Large', mockE04DestructiveButtonProps.large],
		['M-04 Extra Large', mockE04DestructiveButtonProps.extraLarge]
	])('renders with %s size', (sizeName, props) => {
		// Use sizeName in test to avoid lint warning
		expect(sizeName).toBeTruthy();
		
		// Verify test case 1.07 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...props} />)
		
		const button = screen.getByTestId('test-button')
		expect(button).toBeInTheDocument()
		
		// Size is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain(`size=${props.size}`)
		
		// Verify the size prop value is one of the allowed values
		expect(['M-01 Small', 'M-02 Medium', 'M-03 Large', 'M-04 Extra Large']).toContain(props.size || '')
	})
	
	// Test Case 1.08: Renders with leading icon
	test('renders with leading icon', () => {
		// Verify test case 1.08 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...mockE04DestructiveButtonProps.leadingIcon} />)
		
		// Button should have both the label and icon
		const button = screen.getByTestId('test-button')
		expect(button).toHaveTextContent('Delete')
		
		// Icon position is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain('iconPosition=Leading')
		
		// Check that the icon is rendered
		const iconContainer = button.querySelector('[data-slot="icon"]')
		expect(iconContainer).toBeInTheDocument()
		
		// Verify the iconPosition prop value is valid
		expect(['Leading', 'Trailing', 'Only', 'None']).toContain(mockE04DestructiveButtonProps.leadingIcon.iconPosition)
	})
	
	// Test Case 1.09: Renders with trailing icon
	test('renders with trailing icon', () => {
		// Verify test case 1.09 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...mockE04DestructiveButtonProps.trailingIcon} />)
		
		// Button should have both the label and icon
		const button = screen.getByTestId('test-button')
		expect(button).toHaveTextContent('Delete')
		
		// Icon position is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain('iconPosition=Trailing')
		
		// Check that the icon is rendered
		const iconContainer = button.querySelector('[data-slot="icon"]')
		expect(iconContainer).toBeInTheDocument()
		
		// Verify the iconPosition prop value is valid
		expect(['Leading', 'Trailing', 'Only', 'None']).toContain(mockE04DestructiveButtonProps.trailingIcon.iconPosition)
	})
	
	// Test Case 1.10: Renders with icon only
	test('renders with icon only', () => {
		// Verify test case 1.10 in README.md
		render(<E04DestructiveButton data-testid="test-button" {...mockE04DestructiveButtonProps.iconOnly} />)
		
		// Button should not display the label text
		const button = screen.getByTestId('test-button')
		expect(button).not.toHaveTextContent('Delete')
		
		// But should still have the aria-label for accessibility
		expect(button).toHaveAttribute('aria-label', 'Delete')
		
		// Icon position is reflected in the data-variant attribute
		expect(button.getAttribute('data-variant')).toContain('iconPosition=Only')
		
		// Check that the icon is rendered
		const iconContainer = button.querySelector('[data-slot="icon"]')
		expect(iconContainer).toBeInTheDocument()
		
		// Verify the iconPosition prop value is valid
		expect(['Leading', 'Trailing', 'Only', 'None']).toContain(mockE04DestructiveButtonProps.iconOnly.iconPosition)
	})
	
	// Test Case 1.11: Handles click events
	test('handles click events', () => {
		// Verify test case 1.11 in README.md
		const handleClick = jest.fn()
		render(<E04DestructiveButton data-testid="test-button" onClick={handleClick} />)
		
		// Click the button
		const button = screen.getByTestId('test-button')
		fireEvent.click(button)
		
		// Check that the click handler was called
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
	
	// Test Case 1.12: Handles disabled state
	test('handles disabled state', () => {
		// Verify test case 1.12 in README.md
		const handleClick = jest.fn()
		render(
			<E04DestructiveButton 
				data-testid="test-button"
				{...mockE04DestructiveButtonProps.disabled} 
				onClick={handleClick} 
				disabled={true}
			/>
		)
		
		// Button should be disabled
		const button = screen.getByTestId('test-button')
		expect(button).toBeDisabled()
		
		// Click the button
		fireEvent.click(button)
		
		// Click handler should not be called
		expect(handleClick).not.toHaveBeenCalled()
	})
	
	// Test Case 1.13: Forwards ref correctly
	test('forwards ref correctly', () => {
		// Verify test case 1.13 in README.md
		const ref = React.createRef<HTMLButtonElement>()
		render(<E04DestructiveButton data-testid="test-button" ref={ref} />)
		
		// Ref should be attached to the button element
		expect(ref.current).not.toBeNull()
		expect(ref.current?.tagName).toBe('BUTTON')
	})
	
	// Test Case 1.14: Applies HTML button attributes
	test('applies HTML button attributes', () => {
		// Verify test case 1.14 in README.md
		render(
			<E04DestructiveButton 
				type="submit" 
				form="test-form" 
				name="test-button"
				value="test-value"
				data-testid="test-button"
			/>
		)
		
		// Button should have the specified attributes
		const button = screen.getByTestId('test-button')
		expect(button).toHaveAttribute('type', 'submit')
		expect(button).toHaveAttribute('form', 'test-form')
		expect(button).toHaveAttribute('name', 'test-button')
		expect(button).toHaveAttribute('value', 'test-value')
	})
	
	// Test Case 1.15: Handles custom className
	test('handles custom className', () => {
		// Verify test case 1.15 in README.md
		const customClass = 'custom-button-class'
		render(<E04DestructiveButton data-testid="test-button" className={customClass} />)
		
		// Button should have the custom class
		const button = screen.getByTestId('test-button')
		expect(button).toHaveClass(customClass)
	})
	
	// Test Case 1.16: Verifies prop values are correctly applied
	test('verifies prop values are correctly applied', () => {
		const testProps: E04DestructiveButtonProps & { 'data-custom': string } = {
			label: 'Custom Label',
			format: 'F-02 Secondary',
			state: 'S-01 Hover',
			size: 'M-03 Large',
			icon: 'E-10 Circle',
			iconPosition: 'Trailing',
			className: 'test-class-name',
			disabled: true,
			'data-custom': 'custom-data-attribute'
		}
		
		render(<E04DestructiveButton data-testid="test-button" {...testProps} />)
		const button = screen.getByTestId('test-button')
		
		// Verify all props are applied correctly
		expect(button).toHaveTextContent(testProps.label)
		expect(button).toHaveClass(testProps.className || '')
		expect(button).toBeDisabled()
		expect(button).toHaveAttribute('data-custom', 'custom-data-attribute')
		expect(button.getAttribute('data-variant')).toContain(`format=${testProps.format}`)
		expect(button.getAttribute('data-variant')).toContain(`state=${testProps.state}`)
		expect(button.getAttribute('data-variant')).toContain(`size=${testProps.size}`)
		expect(button.getAttribute('data-variant')).toContain(`iconPosition=${testProps.iconPosition}`)
		
		// Check icon is present
		const iconContainer = button.querySelector('[data-slot="icon"]')
		expect(iconContainer).toBeInTheDocument()
	})
	
	// Additional test cases from README
	
	// Test case for default format prop
	test('applies default format prop', () => {
		render(<E04DestructiveButton data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('format=F-01 Primary')
	})
	
	// Test case for default state prop
	test('applies default state prop', () => {
		render(<E04DestructiveButton data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('state=S-00 Default')
	})
	
	// Test case for default size prop
	test('applies default size prop', () => {
		render(<E04DestructiveButton data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('size=M-02 Medium')
	})
	
	// Test case for default iconPosition prop
	test('applies default iconPosition prop', () => {
		render(<E04DestructiveButton data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('iconPosition=None')
	})
	
	// Test case for custom icon prop
	test('applies custom icon prop', () => {
		render(<E04DestructiveButton 
			data-testid="test-button" 
			icon="E-10 Circle" 
			iconPosition="Leading" 
		/>)
		
		const button = screen.getByTestId('test-button')
		const iconContainer = button.querySelector('[data-slot="icon"]')
		expect(iconContainer).toBeInTheDocument()
	})
	
	// Test case for default label when not specified
	test('applies default label when not specified', () => {
		render(<E04DestructiveButton data-testid="test-button" iconPosition="None" />)
		const button = screen.getByTestId('test-button')
		expect(button).toHaveTextContent('Button')
	})
})
