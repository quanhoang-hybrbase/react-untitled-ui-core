# Introduction

This file contains a set of instructions and must not be edited unless explicitly instructed. Please follow strictly the instruction as specified.

User instructions:
Follow strictly step by step instruction [xxx] from @instructions.md 

<br/>

# Index

- [Instruction 1.01](#instruction-101-get-to-know-the-task): Get to know the task
- [Instruction 1.02](#instruction-102-scaffold-the-component-folder): Scaffold the component folder
- [Instruction 1.03](#instruction-103-plan-unit-test-cases-to-validate-component-naming-prop-names-values): Plan unit test cases to validate component naming, prop names, values
- [Instruction 1.04](#instruction-104-plan-typescript-props-definition-types): Plan Typescript Props Definition Types
- [Instruction 1.05](#instruction-105-plan-high-level-html-structure-of-the-component): Plan high-level HTML structure of the component
- [Instruction 1.06](#instruction-106-plan-tailwind-variants-configuration): Plan Tailwind Variants configuration
- [Instruction 1.07](#instruction-107-plan-the-component-folder-structure): Plan the component folder structure
- [Instruction 1.08](#instruction-108-reflection--improve): Reflection & Improve

<br/>

# Context

## Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=8657-74758&t=8TInoGe4p4V3kKke-4

## Figma Node Id
`8657-74758`

## Figma Documentation
Component Name: Element/Buttons/E-04 Destructive Button

Component Description: A Destructive Button is a type of action button used to perform critical or irreversible actions, typically associated with deletion, removal, or significant changes that may impact data or user settings. It is designed to draw attention and caution the user before proceeding.

### Variant Props (🎨)
Properties that controls different aspects of the component.

🎨 Format: F-01 Primary (default value), F-02 Secondary, F-03 Tertiary, F-04 Link
This prop specifies what the component does or what kind of content it displays. It influences the component's appearance and behavior.

🎨 State: S-00 Default (default value), S-01 Hover, S-02 Focused, S-03 Disabled
This prop differentiates visual representations of the component based on user interaction. These visual changes help users understand what they can do with the component and if it's responding to their actions.

🎨 Size: M-01 Small (default value), M-02 Medium, M-03 Large, M-04 Extra Large
This prop differentiates how big or small a component appears on the screen. Different sizes help organize content and make it easier to read.

### External Props (➡️)
Properties that enable controlled, indirect external manipulation of a component. They provide a way for component users to influence certain aspects of a component's behavior or data without directly modifying its internal configuration.

➡️ externalIconPosition: None (default value), Leading, Trailing, Only
This prop controls the position of the icon within the Button.

- If the Button has an Icon positioned to the left of the Label, then externalIconPosition is "Leading"
- If the Button has an Icon positioned to the right of the Label, then externalIconPosition is "Trailing"
- If the Button contains only an Icon without a Label, then externalIconPosition is "Only"
- If the Button contains only a Label without an Icon, then externalIconPosition is "None"

### Data Props (📦)
Properties that carry the actual content that the component displays. They represent the information presented to the use.

📦 dataLabel: "Button" (default value)
This prop determines the text content displayed in the Button's Label.

📦 dataIcon: "E-10 Circle" (default value)
This prop specifies the Icon displayed on the Button.

## Code Pattern 
All the templates in the ./code-patterns.md

## Project Structure
Standard naming convention and folder structure defined in memory & rules

## Common mistakes
A checklist to ensure high quality output of this task. Defined in "docs/active-context.md"

<br/>

<!-- Phase 1: Planning React component development  -->

# Instruction 1.01: Get to know the task

## Objective
As a senior React developer, you will build a reusable and scalable UI component library based on a given Figma link and Figma documentation. To achieve this, you will follow step by step a sequence of instructions in this file. Each instruction requires a specific input retrieved from the Context section. Therefore, it is critical for you to first understand the context of this task.

## Expected Output
- A confirmation that you have reviewed all the materials, knowledge required for this task

## Steps
1. Review carefully every items specified in the Context section of this file
2. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.02 below)

<br/>

# Instruction 1.02: Scaffold the component folder

## Objective
This task is to initiate or locate the right component folder based on the Figma Documentation

## Input
- Figma Documentation
- Figma Link

## Expected Output
- A component folder is initialized with a README.md file
- In the README.md file, there will be two sections:
  - "Figma Documentation": contains the Figma Documentation and Figma Link
  - "Implementation Plan": contains the output of the subsequent instructions

## Steps 
1. Review the Component Name in the Figma Documentation

   - **Knowledge**: 
     - In general, the component name would follow this format:
       ```
       [Type]/[Category]/[Number and Title]/[Screen]
       ```
     - [Type] and [Category] are the corresponding grouping folders in the `components` folder
     - The [Number and Title] is the corresponding React component to the Figma design. It provides a unique identifier and a descriptive name for the component. For example: `Element/Icons/E-00 Social Icon/Mobile` -> `<E00SocialIcon />`.
     - You can safely ignore the [Screen] for now

2. Review the standard folder structure defined in your memory & rules
3. If the [Type] and [Category] folder does not exist, create it.
4. If the [Number and Title] folder does not exist, create it and initialize README.md file only. Then, inside the README file, add the Figma Link and Figma Documentation under "Figma Documentation" section. 
5. Then, create the next section called "Implementation Plan" which will be used to store the output of the subsequent instructions.
6. If the [Number and Title] folder already exists, inform me the component location and review carefully the README.md file to check the current implementation of the component. The subsequent instructions will be then used to update this README.md file.
7. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.03 below)

<br/>

# Instruction 1.03: Plan unit test cases to validate component naming, prop names, values

## Objective
To list all the test cases that verifies if the component name, prop names, values are used correctly. The plan will be used to create actual unit test later.

## Input
- Figma Documentation

## Expected Output
Document in the README.md file in the "Unit Test Cases" sub-section your test cases plan that should include:
- Test case scenarios
- Input
- Expected Output (must be from Figma Documentation)

## Steps
1. Review the "Figma Documentation" and think through how the component is used and how the props are used.
2. Plan the unit test cases that verifies if the component name, prop names, values are used correctly. Use the Figma Documentation as your source of truth to define the expected output.
3. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.04 below)

<br/>

# Instruction 1.04: Plan Typescript Props Definition Types  

## Objective
To plan the typescript types that will be used in the component.

## Input
- Figma Documentation
- "Typescript Props Type Template" in the "./code-patterns.md"

## Expected Output
Document in the README.md file in the "Typescript Types" sub-section your typescript types plan

## Steps
1. Use the Figma Documentation to define the React props for this component in Typescript types file grouped by four interfaces: Variant Props, External Props, Data Props, and Config Props. Skip any if the prop is not used in the component.
2. Always use the exact prop names and values from the Figma Documentation
3. Follow strictly the "Typescript Props Type Template" in the "./code-patterns.md"
4. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.05 below)

<br/>

# Instruction 1.05: Plan high-level HTML structure of the component

## Objective
This task is to plan the structure of the component based on the Figma documentation and Figma data of the component to see which components are needed

## Input
- Figma Documentation
- Figma Link

## Expected Output
Document in the README.md file in the "Component Structure" sub-section:
- High-level HTML markup structure of the component and how it might vary based on the props values. Even though this is a high-level plan, the structure must be consistent with the "React Component Template" defined in "./code-patterns.md"
- List of child components that need imported elsewhere from the "src/components" folder
- List of child components that need breakdown into the "parts" folder
- A list of clarifying questions for props usage or component structure to help you define the markup structure better

## Step
1. First, notify the instruction you are working on. In this case, "Instruction 1.05: Plan HTML structure of the component"
2. Calling Figma MCP tool
3. If and only if the MCP tool is not available, inform me and stop what you are doing
4. Once you get the API response, if you see the master component name does not match the component name in the Figma Documentation, immediately inform me and stop this task.
5. Otherwise, from the API response, look through the Figma layers of the component and think through what might be the possible components or HTML tags needed for this component. Ignore the styling details for now

   **Knowledge**: 
   - You can safely ignore the layer "Part = Base".
   - If the component name whose Category is "Icons", "Logos", "Images", "Videos", these are media assets. Thus, you can skip looking layers down further and use the appropriate semantic HTML tags to handle the their content gracefully:
     - For Icons components' content, import the right icon from the lucide-react library using the Format values 
     - For Logos, Images, and Videos components' content, it should be imported from the assets folder. Thus, in your plan, just signify the path to the assets folder at "src/assets"
   - For each variant, if any node/layer whose type is "INSTANCE" and name contains the master component name, then it should be break down into a sub-component in the "parts" folder. For example, "Element/Images/M-03 Stories Image/Mobile" is a sub-component of "Molecule/Cards/M-03 Stories/Mobile"
   - For each variant, if any layer/node whose type is "INSTANCE" and name does NOT contain the master component name, then it is a separate component that should be imported elsewhere from the "src/components" folder.
   - Layer whose name starts with "Part" does not need be break down into a React component:
     - The layer "Part = Base" establishes the foundation for all subsequent component parts. Its purpose is to clearly identify the core structure of the component. You can safely ignore this layer now
     - The layer "Part = [Content Description]" indicate content-specific layers. Examples: Part = Image, Part = Title, Part = Description. 
     - The layer "Part = [Layout Type]" to indicate layout-specific layers. Examples: Part = Flex, Part = Grid, Part = Flex Item, Part = Flex Item 1.
     - Use Part = [Group Description] to indicate group-specific layers. Examples: Part = Links, Part = Navigation, Part = List, Part = Wrapper, Part = Elements.

6. Then, look through the Figma Documentation of the component and think through how the structure might adapt to the props values.
7. Refine your high-level HTML structure of the component and document in the README.md file in the "Component Structure" sub-section.
8. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.06 below)

<br/>

# Instruction 1.06: Plan Tailwind Variants configuration

## Objective
This task is to plan the Tailwind variants configuration based on the Figma documentation, Figma data, and high-level HTML structure of the component to see how the styling should be applied

## Input
- Figma Documentation
- Figma Link
- High-level HTML structure of the component (from Instruction 1.05)

## Expected Output
Document in the README.md file in the "Tailwind Variants" sub-section:
- A representation of the `Slots` configuration in semi-code format
- A representation of the `Variants` configuration in semi-code format
- A representation of the `Compound Variants` configuration in semi-code format
- A representation of the `Default Variants` configuration in semi-code format
- A list of clarifying questions for props usage or styling logic to help you define the Tailwind Variants configuration better

## Steps
1. Calling Figma MCP tool
2. If and only if the MCP tool is not available, inform me and stop what you are doing
3. Once you get the Figma data, if you see the master component name does not match the component name in the Figma Documentation, immediately inform me and stop this task.
4. Otherwise, from the Figma data, look through the Figma layers and styling values of the component and think through how the styling should be applied for each variants utilizing Tailwind Variants' concepts

   - **Knowledge**: 
     - In the Figma data, you should ignore the "width", "height", "top", "left" properties. 
     - Look up the usage of Slot in  https://www.tailwind-variants.org/docs/slots 
     - Look up the usage of Variant in https://www.tailwind-variants.org/docs/variants#multiple-variants, https://www.tailwind-variants.org/docs/variants#boolean-variants
     - Look up the usage of Compound Variant in https://www.tailwind-variants.org/docs/variants#compound-variants
     - Look up the usage of Default Variant in https://www.tailwind-variants.org/docs/variants#default-variants

5. Map the styling values in the Figma data with corresponding Tailwind classes. 
6. Then, look through the Figma Documentation of the component to map the corresponding props values to the styling details of each variant
7. Review the high-level HTML structure of the component to make sure it is consistent with the Tailwind Variants configuration
8. Document in the README.md file as specified in the "Expected Output" of this task
9. Review and refine your configuration to make sure it is accurate to the Figma Documentation of the component and consistent with high-level HTML structure of the component
10. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.07 below)

## Examples
```md
#### Slots Configuration
- `base`: inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
- `label`: font-semibold
- `icon`: flex items-center justify-center

#### Variants Configuration
1. Format variants: 
  - F-01 Primary: bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500
  - F-02 Secondary: bg-white text-red-600 border border-red-600 hover:bg-red-50 focus-visible:ring-red-500
  - F-03 Tertiary: bg-transparent text-red-600 hover:bg-red-50 focus-visible:ring-red-500
  - F-04 Link: bg-transparent text-red-600 hover:underline focus-visible:ring-red-500 p-0

2. State variants: 
  - S-00 Default: 
  - S-01 Hover: 
  - S-02 Focused: ring-2 ring-offset-2 ring-red-500
  - S-03 Disabled: opacity-50 cursor-not-allowed
  
3. Size variants: 
  - M-01 Small: text-sm, icon: h-4 w-4
  - M-02 Medium: text-base, icon: h-5 w-5
  - M-03 Large: text-lg, icon: h-6 w-6
  - M-04 Extra Large: text-xl, icon: h-7 w-7

4. Icon position variants: 
  - None: icon: hidden
  - Leading: label: ml-2
  - Trailing: label: mr-2
  - Only: label: hidden

#### Compound Variants Configuration
1. Size + Format combinations for padding and gap

#### Default Variants Configuration
The default variants configuration defines the default styles for the button.
- format: F-01 Primary
- state: S-00 Default
- size: M-02 Medium
- iconPosition: None
```

<br/>

# Instruction 1.07: Plan the component folder structure

## Objectives
To visualize how you would structure the component folder

## Input
- Output from instruction 1.05
- Standard component folder structure

## Expected Output 

Document in the README.md file in the "Folder Structure" sub-section the folder tree of the component

## Steps

1. Based on the JSX structure of the component, plan the folder structure following the standard component folder structure
2. Ask me for my magic word "ok" to continue with the next instruction (Instruction 1.08 below)

<br/>

# Instruction 1.08: Reflection & Improve

## Objectives
Ensure that you have met all the requirement from previous instructions

## Input
- Figma Documentation
- Figma data (from Instruction 1.06)
- "Common mistakes to AVOID when planning React components" checklist from "docs/active-context.md"

## Expected Output 
Display in the check for my review:
- A checklist of what you have done for each of the previous instructions
- A checklist confirming that you have successfully avoided all the common mistakes

## Steps

1. Review carefully all previous instructions again, especially the "Expected Output" and "Steps" sections
2. For each instruction, check if you have met all the requirements
3. For each common mistake, check if you have avoided it
4. If you have met all the requirements, ask for my magic word "ok" to continue with the next instruction (Instruction 1.09)


<!-- Phase 2: Implementation -->

# Instruction 2.01: Create the component

## Objectives
Create the component folder following the standard component folder structure and Implementation Plan

## Input
- The approved Implementation Plan defined in the README.md file of the component
- Standard component folder structure
- Code pattern
- Figma Link

## Expected Output
- The component is created exactly following the Implementation Plan
- Each generated file follows strictly the template in the "docs/code-patterns.md" accordingly

## Steps
1. Review the Implementation Plan defined in the README.md file of the component to think through all necessary information to create the component
2. In the Implementation Plan, if you see any unresolved clarifying questions, inform me to address them and stop this instruction.
3. Otherwise, follow section by section in the Implementation Plan to define the component
4. When implement the Tailwind Variants Configuration and the main component, you must call the Figma MCP tool again to get accurate information. The information in the implementation plan is just guidance for development
5. At each section, after you generate any file, ask for my review before moving to the next section
6. Generate all unit tests based on the "Unit Test Cases" section and other sections in the Implementation Plan. Be sure to cover all the scenarios from the "Unit Test Cases" section
7. Once you complete this instruction, ask me for my magic word "ok" to continue with the next instruction (Instruction 2.02 below)

<br/>

# Instruction 2.02: Simulate the component in Storybook  

## Objectives
Simulate the React component in Storybook for visual and interactive testing 

## Input
- The approved Implementation Plan defined in the README.md file of the component
- Figma Link
- Standard component folder structure

## Expected Output
- A Storybook file is comprehensive, interactive, and aligned with the component's props, unit test cases, and design specifications from the Implementation Plan

- The story file should include:
  1. **Default Story**  
  Display the component with its default props as defined in the Tailwind variants configuration

  2. **Prop Controls via argTypes**  
    Define `argTypes` for all props based on the TypeScript types in the implementation plan

  3. **Default Args**  
  Set default `args` to reflect the default variants:  

  4. **Interactivity**  
  Allow users to test the component's interactivity in the Storybook UI.

  5. **Coverage of Unit Test Scenarios**  
  Ensure the story collectively demonstrate key scenarios from the unit test cases

## Steps
1. Create a mock data file for the component listing all the prop values and combinations for testing
2. Create a story file for the component using the mock data

## Important Notes
1. Remember to include the Figma link of the component to the story for visual testing
  - **Knowledge**
    - Look up to: https://storybook.js.org/docs/sharing/design-integrations#link-figma-components-to-stories
2. Run the Storybook simulation and verify that the component is displayed correctly and that all props are working as expected
