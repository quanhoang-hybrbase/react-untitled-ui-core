# Quality assurance checklist when planning component development
- Must call the  Figma MCP tool to analyze design specifications and layer structure
- Don't add any extra props of your own interpretation in the Typescript types definition
- Use the correct naming convention for the React component (E##ComponentName format, e.g. "E00SocialIcon" instead of "SocialIcon")
- Must include a plan for specific unit tests for component naming and props testing
- Only use descriptive and concise words to illustrate the styling logic when documenting Tailwind Variants configuration for better readability
- Always set the HTML disabled attribute automatically when a component's state prop is set to a disabled-like value (e.g., "S-03 Disabled")
- Organize sections in the README file in the correct order of each instruction of phase 1 in the "docs/instructions.md"
- Use Icon component from lucide-react for any icon related props
- Use correct prop names that match the Figma Documentation AND the rules defined in "Typescript Props Type Template" rules in "docs/code-patterns.md" (e.g., avoid using "hasLabel" instead of "supportingText" or "configIconPosition" instead of "iconPosition")



# Quality assurance checklist when creating a new React component
## Component Structure and Naming
- Follow the standard component folder structure as defined in the project rules (e.g., include parts/ folder for the component implementation)
- Use global src/assets directory for all assets instead of creating component-specific assets folders

## Props and TypeScript
- Follow strictly the Typescript types definition when defining React Component props

## Styling and Tailwind
- Must call the Figma MCP tool to get accurate information when implementing the component
- Properly utilize the styling values from the Figma data (colors, spacing, typography, etc.) when configuring the Tailwind variants
- Follow strictly the Tailwind variant configuration defined in "docs/code-patterns.md"
- Follow strictly the React Component Template defined in "docs/code-patterns.md"

## Accessibility and Behavior
- Default button type to "button" to prevent accidental form submissions

## Testing
- Include specific unit tests for component naming and props testing
