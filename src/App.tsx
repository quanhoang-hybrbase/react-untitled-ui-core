import { Plus, Mail, Bell, Star, Heart } from 'lucide-react'
import { E01Badge } from './components/element/Badges/E-01-Badge'

function App() {
  return (
    <div className="p-8 bg- ">
      <h1 className="text-2xl font-bold mb-8">E-01 Badge Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Format Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E01Badge format="primary" label="Badge" />
              <span className="ml-4 text-gray-500">Primary (default)</span>
            </div>
            <div className="flex items-center">
              <E01Badge format="dot" label="Badge" />
              <span className="ml-4 text-gray-500">Dot</span>
            </div>
            <div className="flex items-center">
              <E01Badge format="xClose" label="Badge" />
              <span className="ml-4 text-gray-500">X Close</span>
            </div>
            <div className="flex items-center">
              <E01Badge format="iconTrailing" icon={Plus} label="Badge" />
              <span className="ml-4 text-gray-500">Icon Trailing</span>
            </div>
            <div className="flex items-center">
              <E01Badge format="iconLeading" icon={Plus} label="Badge" />
              <span className="ml-4 text-gray-500">Icon Leading</span>
            </div>
            <div className="flex items-center">
              <E01Badge format="iconOnly" icon={Plus} label="Badge" />
              <span className="ml-4 text-gray-500">Icon Only</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Theme Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E01Badge theme="gray" label="Badge" />
              <span className="ml-4 text-gray-500">Gray (default)</span>
            </div>
            <div className="flex items-center">
              <E01Badge theme="brand" label="Badge" />
              <span className="ml-4 text-gray-500">Brand</span>
            </div>
            <div className="flex items-center">
              <E01Badge theme="error" label="Badge" />
              <span className="ml-4 text-gray-500">Error</span>
            </div>
            <div className="flex items-center">
              <E01Badge theme="warning" label="Badge" />
              <span className="ml-4 text-gray-500">Warning</span>
            </div>
            <div className="flex items-center">
              <E01Badge theme="success" label="Badge" />
              <span className="ml-4 text-gray-500">Success</span>
            </div>
            <div className="flex items-center">
              <E01Badge theme="blue" label="Badge" />
              <span className="ml-4 text-gray-500">Blue</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E01Badge size="small" label="Badge" />
              <span className="ml-4 text-gray-500">Small (default)</span>
            </div>
            <div className="flex items-center">
              <E01Badge size="medium" label="Badge" />
              <span className="ml-4 text-gray-500">Medium</span>
            </div>
            <div className="flex items-center">
              <E01Badge size="large" label="Badge" />
              <span className="ml-4 text-gray-500">Large</span>
            </div>
          </div>
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <E01Badge 
                label="Click me" 
                onClick={() => alert('Badge clicked!')}
              />
              <span className="ml-4 text-gray-500">With Click Handler</span>
            </div>
            <div className="flex items-center">
              <E01Badge 
                format="xClose" 
                label="Dismiss" 
                theme="error"
                onClick={() => alert('X Close badge clicked!')}
              />
              <span className="ml-4 text-gray-500">Dismissible</span>
            </div>
            <div className="flex items-center">
              <E01Badge 
                format="iconTrailing" 
                icon={Bell} 
                label="Notifications" 
                theme="brand"
                onClick={() => alert('Notification badge clicked!')}
              />
              <span className="ml-4 text-gray-500">With Icon</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-4 mb-8">
        <h2 className="text-xl font-semibold mb-4">All Theme Colors</h2>
        <div className="flex flex-wrap gap-2">
          <E01Badge theme="gray" label="Gray" />
          <E01Badge theme="brand" label="Brand" />
          <E01Badge theme="error" label="Error" />
          <E01Badge theme="warning" label="Warning" />
          <E01Badge theme="success" label="Success" />
          <E01Badge theme="blueGray" label="Blue Gray" />
          <E01Badge theme="blueLight" label="Blue Light" />
          <E01Badge theme="blue" label="Blue" />
          <E01Badge theme="indigo" label="Indigo" />
          <E01Badge theme="purple" label="Purple" />
          <E01Badge theme="pink" label="Pink" />
          <E01Badge theme="rose" label="Rose" />
          <E01Badge theme="orange" label="Orange" />
        </div>
      </div>

      <div className="border rounded-md p-4">
        <h2 className="text-xl font-semibold mb-4">Different Icons</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <E01Badge format="iconTrailing" icon={Plus} label="Plus" theme="brand" />
            <span className="mt-2 text-sm text-gray-500">Plus</span>
          </div>
          <div className="flex flex-col items-center">
            <E01Badge format="iconTrailing" icon={Mail} label="Mail" theme="blue" />
            <span className="mt-2 text-sm text-gray-500">Mail</span>
          </div>
          <div className="flex flex-col items-center">
            <E01Badge format="iconTrailing" icon={Bell} label="Bell" theme="warning" />
            <span className="mt-2 text-sm text-gray-500">Bell</span>
          </div>
          <div className="flex flex-col items-center">
            <E01Badge format="iconTrailing" icon={Star} label="Star" theme="success" />
            <span className="mt-2 text-sm text-gray-500">Star</span>
          </div>
          <div className="flex flex-col items-center">
            <E01Badge format="iconTrailing" icon={Heart} label="Heart" theme="error" />
            <span className="mt-2 text-sm text-gray-500">Heart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
