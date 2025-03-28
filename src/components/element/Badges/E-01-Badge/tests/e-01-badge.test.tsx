import { render, screen } from '@testing-library/react'
import { Plus } from 'lucide-react'
import { E01Badge } from '../parts/e-01-badge'

describe('E01Badge', () => {
	it('renders with default props', () => {
		render(<E01Badge data-testid="test-badge" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toBeInTheDocument()
		expect(badge).toHaveAttribute('data-format', 'primary')
		expect(badge).toHaveAttribute('data-theme', 'gray')
		expect(badge).toHaveAttribute('data-size', 'small')
		expect(badge).toHaveTextContent('Badge')
	})

	it('applies format prop correctly', () => {
		render(<E01Badge data-testid="test-badge" format="dot" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'dot')
		// Dot format should have a dot element
		expect(badge.firstChild).toHaveClass('w-2 h-2 rounded-full')
	})

	it('applies theme prop correctly', () => {
		render(<E01Badge data-testid="test-badge" theme="brand" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-theme', 'brand')
		expect(badge).toHaveClass('bg-brand-50')
	})

	it('applies size prop correctly', () => {
		render(<E01Badge data-testid="test-badge" size="medium" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-size', 'medium')
		expect(badge).toHaveClass('px-3 py-1')
	})

	it('applies label prop correctly', () => {
		render(<E01Badge data-testid="test-badge" label="New" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveTextContent('New')
	})

	it('applies icon prop correctly', () => {
		render(<E01Badge data-testid="test-badge" icon={Plus} format="iconOnly" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'iconOnly')
		// Icon should be rendered
		const iconElement = badge.querySelector('svg')
		expect(iconElement).toBeInTheDocument()
	})

	it('displays icon after label with format="iconTrailing"', () => {
		render(<E01Badge data-testid="test-badge" format="iconTrailing" icon={Plus} />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'iconTrailing')
		
		// Check that the label comes before the icon
		const children = Array.from(badge.childNodes)
		const labelIndex = children.findIndex(node => 
			node.textContent === 'Badge' && node.nodeName === 'SPAN'
		)
		const iconIndex = children.findIndex(node => 
			node.nodeName === 'svg'
		)
		
		expect(labelIndex).toBeLessThan(iconIndex)
	})

	it('displays icon before label with format="iconLeading"', () => {
		render(<E01Badge data-testid="test-badge" format="iconLeading" icon={Plus} />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'iconLeading')
		
		// Check that the icon comes before the label
		const children = Array.from(badge.childNodes)
		const labelIndex = children.findIndex(node => 
			node.textContent === 'Badge' && node.nodeName === 'SPAN'
		)
		const iconIndex = children.findIndex(node => 
			node.nodeName === 'svg'
		)
		
		expect(iconIndex).toBeLessThan(labelIndex)
	})

	it('displays only icon without label with format="iconOnly"', () => {
		render(<E01Badge data-testid="test-badge" format="iconOnly" icon={Plus} />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'iconOnly')
		
		// Label should be visually hidden (sr-only)
		const label = badge.querySelector('span')
		expect(label).toHaveClass('sr-only')
		
		// Icon should be rendered
		const iconElement = badge.querySelector('svg')
		expect(iconElement).toBeInTheDocument()
	})

	it('displays X icon for closing with format="xClose"', () => {
		render(<E01Badge data-testid="test-badge" format="xClose" />)
		const badge = screen.getByTestId('test-badge')
		
		expect(badge).toHaveAttribute('data-format', 'xClose')
		
		// X icon should be rendered
		const iconElement = badge.querySelector('svg')
		expect(iconElement).toBeInTheDocument()
	})
})
