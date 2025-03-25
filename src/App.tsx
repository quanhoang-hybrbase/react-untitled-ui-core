import { E04DestructiveButton } from './components/element/Buttons/E-04-Destructive-Button'
import { mockE04DestructiveButtonProps } from './components/element/Buttons/E-04-Destructive-Button/e-04-destructive-button.mock'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">E-04 Destructive Button Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Format Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.primary} />
              <span className="ml-4 text-gray-500">Primary (default)</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.secondary} />
              <span className="ml-4 text-gray-500">Secondary</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.tertiary} />
              <span className="ml-4 text-gray-500">Tertiary</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.link} />
              <span className="ml-4 text-gray-500">Link</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">State Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.primary} />
              <span className="ml-4 text-gray-500">Default</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.hover} />
              <span className="ml-4 text-gray-500">Hover</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.focused} />
              <span className="ml-4 text-gray-500">Focused</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.disabled} />
              <span className="ml-4 text-gray-500">Disabled</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.small} />
              <span className="ml-4 text-gray-500">Small</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.primary} />
              <span className="ml-4 text-gray-500">Medium (default)</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.large} />
              <span className="ml-4 text-gray-500">Large</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.extraLarge} />
              <span className="ml-4 text-gray-500">Extra Large</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Icon Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.leadingIcon} />
              <span className="ml-4 text-gray-500">Leading Icon</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.trailingIcon} />
              <span className="ml-4 text-gray-500">Trailing Icon</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton {...mockE04DestructiveButtonProps.iconOnly} />
              <span className="ml-4 text-gray-500">Icon Only</span>
            </div>
            <div className="flex items-center">
              <E04DestructiveButton 
                {...mockE04DestructiveButtonProps.primary} 
                onClick={() => alert('Destructive action triggered!')}
              />
              <span className="ml-4 text-gray-500">With Click Handler</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
