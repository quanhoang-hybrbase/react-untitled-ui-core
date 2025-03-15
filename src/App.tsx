import Label from './components/element/E01-Label'
import { labelMockData } from './components/element/E01-Label/e01-label.mock'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Label Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Label {...labelMockData.extraSmall} />
              <span className="ml-4 text-gray-500">extraSmall</span>
            </div>
            <div className="flex items-center">
              <Label {...labelMockData.small} />
              <span className="ml-4 text-gray-500">small</span>
            </div>
            <div className="flex items-center">
              <Label {...labelMockData.default} />
              <span className="ml-4 text-gray-500">medium (default)</span>
            </div>
            <div className="flex items-center">
              <Label {...labelMockData.large} />
              <span className="ml-4 text-gray-500">large</span>
            </div>
            <div className="flex items-center">
              <Label {...labelMockData.extraLarge} />
              <span className="ml-4 text-gray-500">extraLarge</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Special States</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Label {...labelMockData.disabled} />
              <span className="ml-4 text-gray-500">disabled</span>
            </div>
            <div className="flex items-center">
              <div className="w-48 overflow-hidden">
                <Label {...labelMockData.truncated} />
              </div>
              <span className="ml-4 text-gray-500">truncated</span>
            </div>
            <div className="flex items-center">
              <div className="w-48">
                <Label {...labelMockData.multiline} />
              </div>
              <span className="ml-4 text-gray-500">multiline</span>
            </div>
            <div className="flex items-center">
              <Label {...labelMockData.srOnly} />
              <span className="ml-4 text-gray-500">srOnly (hidden visually)</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border rounded-md p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">Form Usage Example</h2>
        <div className="max-w-md">
          <div className="mb-4">
            <Label 
              text="Email Address" 
              htmlFor="email-input" 
              size="medium"
            />
            <input
              id="email-input"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-4">
            <Label 
              text="Password" 
              htmlFor="password-input" 
              size="medium"
            />
            <input
              id="password-input"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="mb-4">
            <Label 
              text="This field is disabled" 
              htmlFor="disabled-input" 
              disabled={true}
            />
            <input
              id="disabled-input"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md opacity-50 cursor-not-allowed"
              disabled
            />
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
