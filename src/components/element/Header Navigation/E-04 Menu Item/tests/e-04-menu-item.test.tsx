import { render, screen } from '@testing-library/react'
import { CircleIcon } from 'lucide-react'
import { E04MenuItem } from '../parts/e-04-menu-item'
import { useRef } from 'react'

describe('E04MenuItem', () => {
  // Test 1: Verify component renders correctly with default props
  test('renders with default props', () => {
    render(<E04MenuItem data-testid="menu-item" />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem).toBeInTheDocument()
    expect(menuItem).toHaveAttribute('data-variant', 'format-textOnly state-default')
    expect(menuItem.textContent).toContain('Menu Item')
  })

  // Test 2: Verify format prop is applied correctly
  test('renders with baseIcon format', () => {
    render(<E04MenuItem data-testid="menu-item" format="baseIcon" icon={CircleIcon} />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem).toHaveAttribute('data-variant', 'format-baseIcon state-default')
    
    // Check that the icon is rendered
    const iconContainer = menuItem.querySelector('[class*="baseIcon"]')
    expect(iconContainer).toBeInTheDocument()
  })

  // Test 3: Verify featuredIcon format is applied correctly
  test('renders with featuredIcon format', () => {
    render(<E04MenuItem data-testid="menu-item" format="featuredIcon" icon={CircleIcon} />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem).toHaveAttribute('data-variant', 'format-featuredIcon state-default')
    
    // Check that the featured icon is rendered
    const iconContainer = menuItem.querySelector('[class*="featuredIcon"]')
    expect(iconContainer).toBeInTheDocument()
  })

  // Test 4: Verify hover state is applied correctly
  test('renders with hover state', () => {
    render(<E04MenuItem data-testid="menu-item" state="hover" />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem).toHaveAttribute('data-variant', 'format-textOnly state-hover')
  })

  // Test 5: Verify supportingText is displayed when provided
  test('renders with supporting text', () => {
    const supportingText = 'Find the best solution for you.'
    render(
      <E04MenuItem 
        data-testid="menu-item" 
        title="Products" 
        supportingText={supportingText} 
      />
    )
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem.textContent).toContain('Products')
    expect(menuItem.textContent).toContain(supportingText)
  })

  // Test 6: Verify badgeLabel is displayed when provided
  test('renders with badge', () => {
    render(<E04MenuItem data-testid="menu-item" badgeLabel="New" />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem.textContent).toContain('New')
    
    const badge = menuItem.querySelector('[class*="badgeContainer"]')
    expect(badge).toBeInTheDocument()
  })

  // Test 7: Verify primaryActionLabel creates a button when provided
  test('renders with primary action button', () => {
    render(<E04MenuItem data-testid="menu-item" primaryActionLabel="Learn more" />)
    
    const menuItem = screen.getByTestId('menu-item')
    const button = screen.getByText('Learn more')
    expect(button).toBeInTheDocument()
    expect(button.tagName).toBe('BUTTON')
  })

  // Test 8: Verify both action buttons render when both labels are provided
  test('renders with both action buttons', () => {
    render(
      <E04MenuItem 
        data-testid="menu-item" 
        primaryActionLabel="Learn more" 
        secondaryActionLabel="Explore" 
      />
    )
    
    const primaryButton = screen.getByText('Learn more')
    const secondaryButton = screen.getByText('Explore')
    expect(primaryButton).toBeInTheDocument()
    expect(secondaryButton).toBeInTheDocument()
  })

  // Test 9: Verify custom className is applied correctly
  test('applies custom className', () => {
    render(<E04MenuItem data-testid="menu-item" className="custom-class" />)
    
    const menuItem = screen.getByTestId('menu-item')
    expect(menuItem).toHaveClass('custom-class')
  })

  // Test 10: Verify ref forwarding works correctly
  test('forwards ref correctly', () => {
    const RefComponent = () => {
      const ref = useRef<HTMLDivElement>(null)
      render(<E04MenuItem data-testid="menu-item" ref={ref} />)
      expect(ref.current).not.toBeNull()
      expect(ref.current?.tagName).toBe('DIV')
      return null
    }
    
    render(<RefComponent />)
  })
})
