import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Circle } from 'lucide-react'
import { E03Button } from '../parts/e-03-button'

describe('E03Button', () => {
	// Test 1: Verify component renders with correct name
	it('renders with correct component name data attribute', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button).toHaveAttribute('data-comp', 'e-03-button')
	})

	// Test 2: Verify default format prop is applied
	it('renders with default format', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('format=primary')
	})

	// Test 3: Verify custom format prop is applied
	it('applies custom format prop', () => {
		render(<E03Button data-testid="test-button" format="secondary" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('format=secondary')
	})

	// Test 4: Verify default state prop is applied
	it('renders with default state', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('state=default')
	})

	// Test 5: Verify custom state prop is applied
	it('applies custom state prop', () => {
		render(<E03Button data-testid="test-button" state="disabled" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('state=disabled')
	})

	// Test 6: Verify default theme prop is applied
	it('renders with default theme', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('theme=brand')
	})

	// Test 7: Verify custom theme prop is applied
	it('applies custom theme prop', () => {
		render(<E03Button data-testid="test-button" theme="grey" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('theme=grey')
	})

	// Test 8: Verify default size prop is applied
	it('renders with default size', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('size=small')
	})

	// Test 9: Verify custom size prop is applied
	it('applies custom size prop', () => {
		render(<E03Button data-testid="test-button" size="large" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('size=large')
	})

	// Test 10: Verify default iconPosition prop is applied
	it('renders with default iconPosition', () => {
		render(<E03Button data-testid="test-button" />)
		const button = screen.getByTestId('test-button')
		expect(button.getAttribute('data-variant')).toContain('iconPosition=none')
	})

	// Test 11: Verify custom iconPosition prop is applied
	it('applies custom iconPosition prop with icon shown to left of label', () => {
		render(<E03Button data-testid="test-button" iconPosition="leading" icon={<Circle data-testid="icon" />} />)
		const button = screen.getByTestId('test-button')
		const label = screen.getByText('Button')
		const icon = screen.getByTestId('icon')
		
		expect(button.getAttribute('data-variant')).toContain('iconPosition=leading')
		expect(button.firstChild).toContainElement(icon)
		expect(button.lastChild).toContainElement(label)
	})

	// Test 12: Verify default label prop is applied
	it('renders with default label', () => {
		render(<E03Button data-testid="test-button" />)
		expect(screen.getByText('Button')).toBeInTheDocument()
	})

	// Test 13: Verify custom label prop is applied
	it('applies custom label prop', () => {
		render(<E03Button data-testid="test-button" label="Submit" />)
		expect(screen.getByText('Submit')).toBeInTheDocument()
	})

	// Test 14: Verify default icon is not shown when iconPosition is none
	it('does not show icon when iconPosition is none', () => {
		render(<E03Button data-testid="test-button" iconPosition="none" icon={<Circle data-testid="icon" />} />)
		expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
	})

	// Test 15: Verify icon is positioned after label when iconPosition is trailing
	it('positions icon after label when iconPosition is trailing', () => {
		render(<E03Button data-testid="test-button" iconPosition="trailing" icon={<Circle data-testid="icon" />} />)
		const button = screen.getByTestId('test-button')
		const label = screen.getByText('Button')
		const icon = screen.getByTestId('icon')
		
		expect(button.firstChild).toContainElement(label)
		expect(button.lastChild).toContainElement(icon)
	})

	// Test 16: Verify icon-only button shows no label
	it('renders with only an icon and no label when iconPosition is only', () => {
		render(<E03Button data-testid="test-button" iconPosition="only" icon={<Circle data-testid="icon" />} />)
		expect(screen.queryByText('Button')).not.toBeInTheDocument()
		expect(screen.getByTestId('icon')).toBeInTheDocument()
	})

	// Test 17: Verify button is disabled when state is set to 'disabled'
	it('is disabled when state is set to disabled', () => {
		render(<E03Button data-testid="test-button" state="disabled" />)
		expect(screen.getByTestId('test-button')).toBeDisabled()
	})

	// Test 18: Verify ref forwarding works correctly
	it('forwards ref correctly', () => {
		const ref = React.createRef<HTMLButtonElement>()
		render(<E03Button data-testid="test-button" ref={ref} />)
		expect(ref.current).toBe(screen.getByTestId('test-button'))
	})

	// Test 19: Verify HTML button attributes are passed through
	it('passes through HTML button attributes', () => {
		render(<E03Button data-testid="test-button" type="submit" aria-label="Submit form" />)
		const button = screen.getByTestId('test-button')
		expect(button).toHaveAttribute('type', 'submit')
		expect(button).toHaveAttribute('aria-label', 'Submit form')
	})

	// Test 20: Verify click handler works
	it('calls onClick handler when clicked', () => {
		const handleClick = jest.fn()
		render(<E03Button data-testid="test-button" onClick={handleClick} />)
		fireEvent.click(screen.getByTestId('test-button'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	// Test 21: Verify disabled button doesn't trigger click handler
	it('does not call onClick handler when disabled button is clicked', () => {
		const handleClick = jest.fn()
		render(<E03Button data-testid="test-button" state="disabled" onClick={handleClick} />)
		fireEvent.click(screen.getByTestId('test-button'))
		expect(handleClick).not.toHaveBeenCalled()
	})
})
