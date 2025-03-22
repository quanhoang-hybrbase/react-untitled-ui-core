# Purpose 
This file contains a set of instructions and must not be edited unless explicitly instructed. Please follow strictly the instruction as specified.

# Index
- Instruction 1.01: Create a implementation plan for parsing a React component (lines 8-137)
- Instruction 1.02: Reflection & Improve (lines 139-277)


# Instruction 1.01: Create a implementation plan for parsing a React component
## Objective
This task is to create a implementation plan of how you would create a React component from a given Figma design and documentation. Then, based on my review and approval of the output, we can decide the next step of implementation.

## Input
- Figma Link: https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=1256-130788&t=H6xdESY7uXlKHh9i-4
- File key: GezJK336BOErAZ6Dm71c3K
- Figma Node Id: 1256-130788
- Access token: get FIGMA_ACCESS_TOKEN from ".env" file at the root directory of the project

## Figma Documentation
Component Name: Element/Buttons/E-06 Social Button Group

Component Description: A Social Button Group is a UI component designed to display a collection of social buttons, typically used for user authentication or connection with third-party platforms. This component provides a streamlined and organized way to present multiple social login options, improving the user experience by offering flexibility and convenience

Variant Props (🎨): Properties that controls different aspects of the component.

🎨 Format: F-01 Buttons (default value), F-02 Icons
This prop specifies what the component does or what kind of content it displays. It influences the component's appearance and behavior.

🎨 Theme: T-01 Brand Primary (default value), T-02 Brand Secondary, T-03 Custom Color
This prop controls the component's visual style, primarily color schemes.



## Expected Output
- Scaffold correctly the component folder and naming (step 2 - must follow standard naming convention and folder structure)
- Inside the README file of the component, under section "UI Specification",documents all the necessary information to prepare for the development of the React component in the following order:
 - Component Name (step 2)
 - Component Purpose (step 2)
 - Unit test cases to validate props misconfiguration (step 3)
 - Props Definition as Typescript types (step 4)
 - Component folder structure (step 6)
 - Tailwind Variant styling configuration (step 6)
 - Example(s) of component usage (step 7)


## Steps    
First, notify the the instruction you are working on. In this case, "Instruction 1.01: Create a implementation plan for parsing a React component"

**1. Analyze Component Description**
Task:
- Review carefully the section "Figma Documentation" above to understand the component purpose, name and prop definition. 

Knowledge:
- The "Figma Documentation" section is the source of truth for the development plan and implementation. It will be referred to as Figma Documentation for the rest of this instruction.

**2. Scaffold the React component folder**

Knowledge: 
- In general, the component name would follow this format:
    ```
    [Type]/[Category]/[Number and Title]/[Screen]
    ```
- [Type] and [Category] are the corresponding grouping folders in the `components` folder
- The [Number and Title] is the corresponding React component to the Figma design. It provides a unique identifier and a descriptive name for the component. For example: `Element/Icons/E-00 Social Icon/Mobile` -> `<E00SocialIcon />`.
- You can safely ignore the [Screen] for now

Task:
- Review the standard folder structure defined in your memory & rules
- If the [Type] and [Category] folder does not exist, create it.
- If the [Number and Title] folder does not exist, create it and initialize README.md file only. Then, inside the README file, add the information of the given "Figma Documentation".
- If the [Number and Title] folder already exists, review carefully the README.md file to check the current implementation of the component.


**3. Plan unit test cases to validate if the props are used correctly**
Task:
- Using the "Figma Documentation" as your source of truth, generate all unit test cases to validate if the component naming is correct
- Using the "Figma Documentation" as your source of truth, generate all unit test cases to validate if the component use all *props names* correctly
- Using the "Figma Documentation" as your source of truth, generate all unit test cases to validate if the component use all *props values* correctly

Knowledge:
- Utilize Jest, and React Testing to demonstrate you unit test cases


**4. Define React Component Props as Typescript types**
Task: 
- Use the Figma Documentation to define the React props for this component in Typescript types file grouped by four interfaces: Variant Props, External Props, Data Props, and Config Props. Skip any if the prop is not used in the component.
- Always use the exact prop names and values from the Figma Documentation
- Follow strictly the "Typescript Props Type Template" in the "./code-patterns.md"

Knowledge:
- The provided Figma Documentation is your source of truth

**5. Make request to Figma API of the component**
Task:
- Make the curl request to https://api.figma.com/v1/files/{fileKey}/nodes?ids={nodeId} where fileKey is the Figma File Key and nodeId is the Figma Node Id from the input
- If and only if the API is not available, try the Figma MCP tool
- If and only if the MCP tool is not available, inform me and stop what you are doing
- Once you get the API response, if you see the master component name does not match the component name in the Figma Documentation, immediately inform me and stop what you are doing

Example
```powershell
$ curl -sH 'X-Figma-Token: 29-206...'
    'https://api.figma.com/v1/files/...'
    | python -m json.tool
```

**6. Plan the component structure and variants configuration**
Task:
- From the API response of step 5, look through the detailed layer structure and styling values of all the variants to analyze the component structure. 
- Then, from your careful analysis, document in the README file:
    - How you would structure this component folder. The component folder structure should display as a tree for readability.
    - How you would define this component in JSX file at a high level
    - How you would configure the Tailwind Variants file using the props definitions and styling details from API response. 
        - Please note that there must be always a "base" styling from that all variants would inherit. 
        - For each styling configuration, comment the styling details from API response.
- In the API response, you should ignore the "width", "height", "top", "left" properties. 

Knowledge: 
- If the component name whose Category is "Icons", "Logos", "Images", "Videos", these are media assets. Thus, you can skip looking layers down further and use the appropriate semantic HTML tags and Tailwind utilities to handle the their content and variants gracefully:
  - For Icons components' content, import the right icon from the lucide-react library using the Format values 
  - For Logos, Images, and Videos components' content, it should be imported from the assets folder. Thus, in your plan, just signify the path to the assets folder at "src/assets"
- In the API response, the variant name is the combination of all the prop values of the component (you might refer to the prop definition in the README file again to understand these values correctly.)
- For each variant, if any node/layer whose type is "INSTANCE" and name contains the master component name, then it should be break down into a sub-component in the "parts" folder. For example, "Element/Images/M-03 Stories Image/Mobile" is a sub-component of "Molecule/Cards/M-03 Stories/Mobile"
- For each variant, if any layer/node whose type is "INSTANCE" and name does NOT contain the master component name, then it is a separate component that should be imported elsewhere from the "src/components" folder.
- Layer whose name starts with "Part" does not need be break down into a React component:
    - The layer "Part = Base" establishes the foundation for all subsequent component parts. Its purpose is to clearly identify the core structure of the component. You can safely ignore this layer now
    - The layer "Part = [Content Description]" indicate content-specific layers. Examples: Part = Image, Part = Title, Part = Description. 
    - The layer "Part = [Layout Type]" to indicate layout-specific layers. Examples: Part = Flex, Part = Grid, Part = Flex Item, Part = Flex Item 1.
    - Use Part = [Group Description] to indicate group-specific layers. Examples: Part = Links, Part = Navigation, Part = List, Part = Wrapper, Part = Elements.
- Use the Figma layers structure as references to define appropriate semantic HTML tags and configure the "slot" parts in the Tailwind Variants configuration. Look up and utilize the concept of slots from this documentation https://www.tailwind-variants.org/docs/slots 
- The JSX structure should follow the "React Component Template" defined in "./code-patterns.md"
- The Tailwind configuration should follow the "Tailwind Variant Configuration Template" defined in "./code-patterns.md"

**7. Create example(s) usage**
Task: 
- Create all examples of how would you use this component with all the possible props values

**8. Confirmation on next step**
Task:
- Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.02 (line 255) below)

## Important Notes
- Don't generate any code or any other component files but README.md. This task is only in the planning phase
- Accuracy and completeness are of utmost importance. When clarification is required, ask for it.
- Use theme variables from `global.css`, or Tailwind utilities only for styling consistency. Never use arbitrary values.
- Ignore the "Metadata" section of this instruction

---

# Instruction 1.02: Reflection & Improve
## Objectives
Ensure that you have met all the requirement from previous instructions

## Expected Output 
- A checklist of what you have done for each step of the previous instruction (Instruction 1.01). 
- A checklist confirming that you have successfully avoided all the common mistakes defined in the "Important Notes" (line 162 - 167) section below

## Steps
1. First, notify the the instruction you are working on. In this case, "Instruction 1.02: Reflection & Improve"
2. Review carefully the previous instruction (Instruction 1.01) again, especially the "Expected Output" and "Steps" sections
3. For each step, check if you have met all the requirements
4. If I provide any feedbacks or refinements, when I say "update your mistakes",add your mistakes to the "Important Notes" section to prevent similar mistakes in the future
5. If you have met all the requirements, ask for my magic word "ok" to continue with the next instruction (Instruction 1.03)

## Important Notes
- Common mistakes to AVOID:
    - Not making the API request to Figma API
    - Not utilizing the Figma Documentation and API response to document the component in the README.md file
    - Not following strictly the Tailwind variant configuration defined in "docs/code-patterns.md"
    - Not following strictly the Typescript types definition when defining React Component props
    - Add any extra props of your own interpretation in the Typescript types definition
    - Not using the correct naming convention for the React component (E##ComponentName format, e.g. "E00SocialIcon" instead of "SocialIcon")
    - Creating component-specific assets folders instead of using the global src/assets directory for all assets
    - Not including specific unit tests for component naming and props testing
    - Using incorrect prop names that don't match the Figma Documentation (e.g., using "hasLabel" instead of "supportingText")
    - Not organizing sections in the README file in the correct order as specified in the Expected Output
    - Not following the standard component folder structure as defined in the project rules (e.g., missing the parts/ folder for the component implementation)

---