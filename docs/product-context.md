# Figma Component Parsing Rules
## Purpose
Following these rules will help you interpret the Figma layers better when planning, defining and coding the React component.

## Description
- You can safely ignore the layer "Part = Base".
- For each variant, if any node/layer whose type is "INSTANCE" and name contains the master component name, then it should be break down into a sub-component in the "parts" folder. For example, "Element/Images/M-03 Stories Image/Mobile" is a sub-component of "Molecule/Cards/M-03 Stories/Mobile"
- For each variant, if any layer/node whose type is "INSTANCE" and name does NOT contain the master component name, then it is a separate component that should be imported elsewhere from the "src/components" folder. Then, look closely at its "Component properties" in the Figma data to apply the appropriate prop values.
- If any layer whose category is "Icons", use the corresponding icon component from lucide-react. Usually this mean the icon is passed down from a prop (e.g. `icon`). For example, "Element/Icons/E-00 upload" -> icon "Upload" from lucide-react. If you don't find any matching icon, use the `Shapes` icon from lucide-react.
- If any layer whose category is "Logos", "Images", stop looking its children layers and use corresponding images or vector from the "src/assets" folder based on the closest matching name. Then use appropriate HTML tags to display it. For example, "Element/Logos/E-00 Company Logo" ->  find any image/vector whose name is "Company Logo" or contains "Company Logo".
- Layer whose name starts with "Part" does not need be break down into a React component:
  - The layer "Part = Base" establishes the foundation for all subsequent component parts. Its purpose is to clearly identify the core structure of the component. You can safely ignore this layer now
  - The layer "Part = [Content Description]" indicate content-specific layers. Examples: Part = Image, Part = Title, Part = Description. 
  - The layer "Part = [Layout Type]" to indicate layout-specific layers. Examples: Part = Flex, Part = Grid, Part = Flex Item, Part = Flex Item 1.
  - Use Part = [Group Description] to indicate group-specific layers. Examples: Part = Links, Part = Navigation, Part = List, Part = Wrapper, Part = Elements.