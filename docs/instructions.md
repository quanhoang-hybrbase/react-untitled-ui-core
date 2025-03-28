# Introduction

This file contains a set of instructions and must not be edited unless explicitly instructed. Please follow strictly the instruction as specified.

User instructions:
Follow strictly step by step instruction [xxx] from @instructions.md 

<br/>

# Index

- [Instruction 1.01](#instruction-101-get-to-know-the-task): Get to know the task
- [Instruction 1.02](#instruction-102-scaffold-the-component-folder): Scaffold the component folder
- [Instruction 1.03](#instruction-103-plan-typescript-props-definition-types): Plan Typescript Props Definition Types
- [Instruction 1.04](#instruction-104-plan-high-level-html-structure-of-the-component): Plan high-level HTML structure of the component
- [Instruction 1.05](#instruction-105-plan-tailwind-variants-configuration): Plan Tailwind Variants configuration
- [Instruction 1.06](#instruction-106-plan-the-component-folder-structure): Plan the component folder structure
- [Instruction 1.07](#instruction-107-plan-unit-test-cases): Plan unit test cases
- [Instruction 1.08](#instruction-108-reflection--improve): Reflection & Improve
- [Instruction 2.01](#instruction-201-create-the-component): Create the component
- [Instruction 2.02](#instruction-202-review-code-quality): Review code quality
- [Instruction 2.03](#instruction-203-review-design-matching-quality): Review design matching quality  
- [Instruction 2.04](#instruction-204-simulate-the-component-in-storybook): Simulate the component in Storybook  

<br/>

# Context

## Figma Link
https://www.figma.com/design/GezJK336BOErAZ6Dm71c3K/%E2%9D%96-Untitled-UI-Design-System?node-id=1288-189&t=nZJ4xI3PO426oiS4-4

## Figma Documentation
Component Name: Composite/Header Navigation/C-04 Dropdown Trigger/Desktop

Component Description: The C-04 Dropdown Trigger/Desktop component is a composite UI element within the header navigation, designed for desktop screens. It serves as an interactive button that triggers a dropdown menu, offering various layout options to display navigation links or content, enhancing user access to additional features or pages.

1. Variant Props (🎨): Properties that controls different aspects of the component.

🎨 Format: F-01 Simple (default value), F-02 Simple With Footer, F-03 Simple 2-col, F-04 Simple 2-col With Footer, F-05 2-col With Links & Footer, F-06 Featured Card, F-07 Featured Posts
This prop defines the dropdown menu’s layout and content style triggered by the button, ranging from a basic list (Simple) to complex designs with columns, footers, links, or featured items (e.g., Featured Posts), tailoring the navigation experience.

2. External Props (➡️): Properties that enable controlled, indirect external manipulation of a component. They provide a way for component users to influence certain aspects of a component's behavior or data without directly modifying its internal configuration.

➡️ externalIsOpened: False (default value), True
This prop controls the dropdown menu’s visibility state, reflecting whether the trigger button has been activated.

If the user hasn’t clicked the button or clicks it again when already triggered, then externalIsOpened is “False”.
If the user clicks the button when it hasn’t been triggered before, then externalIsOpened is “True”.


## Code Pattern 
All the templates in the ./code-patterns.md

## Project Structure
Standard naming convention and folder structure defined in your rules

## Common mistakes
A checklist to ensure high quality output of your plan and code. Defined in "docs/active-context.md"

## MCP Tool
Tool: figma-developer-mcp / get_figma_data
For the subsequent instructions, you will need to use the MCP tool to get accurate information for your planning and implementation


## Figma Component Parsing Rules
Refer to "# Figma Component Parsing Rules" in "docs/product-context.md" to understand how to read and interpret Figma data of a component

<br/>

<!-- Phase 1: Planning React component development  -->

# Instruction 1.01: Get to know the task

## Objective
As a senior React developer, you will build a reusable and scalable UI component library based on a given Figma link and Figma documentation.First, you need to get to understand the overall context required for this task. 

## Expected Output
- A confirmation that you have reviewed all the materials, knowledge required for this task

## Steps
1. Review carefully every items specified in the Context section of this file

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
2. Review the standard folder structure defined in your memory & rules
3. If the [Type] and [Category] folder does not exist, create it.
4. If the [Number and Title] folder does not exist, create it and initialize README.md file only. Then, inside the README file, add the Figma Link and Figma Documentation under "Figma Documentation" section. 
5. Then, create the next section called "Implementation Plan" which will be used to store the output of the subsequent instructions.
6. If the [Number and Title] folder already exists, inform me the component location and review carefully the README.md file to check the current implementation of the component. The subsequent instructions will be then used to update this README.md file.

## Knowledge
- In general, the component name would follow this format:
  ```
  [Type]/[Category]/[Number and Title]/[Screen]
  ```
- [Type] and [Category] are the corresponding grouping folders in the `components` folder
- The [Number and Title] is the corresponding React component to the Figma design. It provides a unique identifier and a descriptive name for the component. For example: `Element/Icons/E-00 Social Icon/Mobile` -> `<E00SocialIcon />`.
- You can safely ignore the [Screen] for now


<br/>

# Instruction 1.03: Plan Typescript Props Definition Types  

## Objective
To plan the typescript types that will be used in the component.

## Input
- Figma Documentation
- "Typescript Props Type Template" in the "docs/code-patterns.md"

## Expected Output
-Document in the README.md file in the "Typescript Types" sub-section your typescript types plan


## Steps
1. Use the Figma Documentation to define the React props for this component in Typescript types file grouped by four interfaces: Variant Props, External Props, Data Props, and Config Props. Skip any if the prop is not used in the component.
2. Always use the exact prop names and values from the Figma Documentation
3. Follow strictly the "Typescript Props Type Template" in the "./code-patterns.md"

<br/>

# Instruction 1.04: Plan high-level HTML structure of the component

## Objective
This task is to plan the structure of the component based on the Figma documentation and Figma data of the component to see which components are needed

## Input
- Figma Documentation
- Figma Link
- Figma Component Parsing Rules (from "docs/product-context.md")
- Figma component screenshot (given by me)

## Expected Output
- Document in the README.md file in the "Component Structure" sub-section:
  - High level structure tree of the component to visualize the component hierarchy
  - List of child components that need imported elsewhere from the "src/components" folder
  - List of child components that need breakdown into the "parts" folder
  - A list of clarifying questions for props usage or component structure to help you define the markup structure better
  - An empty sub-section "Implementation Notes"


## Step
1. Ask me for Figma component screenshot and stop proceeding further until I provide it
2. Review the Figma Component Parsing Rules (from "docs/product-context.md")
3. Calling Figma MCP tool
4. If and only if the MCP tool is not available, inform me and stop what you are doing
5. Once you get the Figma data, if you see the master component name does not match the component name in the Figma Documentation, immediately inform me and stop this task.
6. Otherwise, from the Figma data and screenshot combined with the Parsing Rules, think through what might be the possible components or HTML tags needed for this component. Ignore the styling details for now

<br/>

# Instruction 1.05: Plan Tailwind Variants configuration

## Objective
This task is to plan the Tailwind variants configuration based on the Figma documentation, Figma data, and high-level HTML structure of the component to see how the styling should be applied

## Input
- Figma Documentation
- Figma Link
- High-level HTML structure of the component (from section "Component Structure" in the Implementation Plan)
- "Quality Assurance Checklist when planning component development" (from "docs/active-context.md")

## Expected Output
- Document in the README.md file in the "Tailwind Variants" sub-section:
  - How would you define the `Slots` configuration using descriptive, and concise words
  - How would you define the `Variants` configuration using descriptive, and concise words
  - How would you define the `Compound Variants` configuration using descriptive, and concise words
    - Specify which variants combination would determine which styling
  - How would you define the `Default Variants` configuration using descriptive, and concise words
    - List out the default values for each variant
  - A list of clarifying questions for props usage or styling logic to help you define the Tailwind Variants configuration better
  - An empty "Implementation Notes" sub-section


## Example Output
```md
### Tailwind Variants

1. **Slots**:
   - `base`: Styles the main button container with flexbox layout, rounded corners, focus states, and transition effects
   - `icon`: Configures icon display with proper sizing and spacing
   - `label`: Handles text styling with truncation for overflow

2. **Variants**:
   - `format`:
     - primary: Solid red background with white text (includes hover/focus states via CSS pseudo-classes)
     - secondary: White background with red border and text (includes hover/focus states via CSS pseudo-classes)
     - tertiary: Transparent background with red text (includes hover/focus states via CSS pseudo-classes)
     - link: Text-only appearance with underline on hover (includes hover/focus states via CSS pseudo-classes)
   
   - `theme`:
     - brand: Uses red as the primary color (default)
     - grey: Uses grey tones for a more neutral appearance
   
   - `size`:
     - small: Compact size for tight spaces
     - medium: Standard size for most interfaces
     - large: Enhanced visibility for important actions
     - extra-large: Maximum prominence for primary calls-to-action
   
   - `state`:
     - default: Normal appearance
     - disabled: Reduced opacity and cursor-not-allowed
   
   - `iconPosition`:
     - none: Text only
     - leading: Icon before text
     - trailing: Icon after text
     - only: Icon only with square aspect ratio

3. **Compound Variants**:
   - `theme` + `format`:
     - grey + primary: Dark grey background with white text (instead of red)
     - grey + secondary: White background with grey border and text (instead of red)
     - grey + tertiary: Transparent background with grey text (instead of red)
     - grey + link: Grey text with underline on hover (instead of red)
   - `state` + `format`: Disables hover effects when button is disabled

4. **Defaults Variants**:
   - `format`: `primary`
   - `state`: `default`
   - `iconPosition`: `none`
   - `theme`: `brand`
   - `size`: `small`


```

## Steps
1. Calling Figma MCP tool
2. If and only if the MCP tool is not available, inform me and stop what you are doing
3. Once you get the Figma data, if you see the master component name does not match the component name in the Figma Documentation, immediately inform me and stop this task.
4. Otherwise, from the Figma data, look through the Figma layers and styling values of the component and think through how the Tailwind Variants configuration should be defined
5. Review the high-level HTML structure of the component to make sure it is consistent with the Tailwind Variants configuration
6. Review the "Quality Assurance Checklist when planning component development" (from "docs/active-context.md") to ensure it is consistent with your Tailwind Variants configuration
7. Document in the README.md file as specified in the "Expected Output" of this task


## Knowledge
- In the Figma data, you should ignore the "width", "height", "top", "left" properties. 
- Look up the usage of Slot in  https://www.tailwind-variants.org/docs/slots 
- Look up the usage of Variant in https://www.tailwind-variants.org/docs/variants#multiple-variants, https://www.tailwind-variants.org/docs/variants#boolean-variants
- Look up the usage of Compound Variant in https://www.tailwind-variants.org/docs/variants#compound-variants
- Look up the usage of Default Variant in https://www.tailwind-variants.org/docs/variants#default-variants

<br/>

# Instruction 1.06: Plan the component folder structure

## Objectives
To visualize how you would structure the component folder

## Input
- Output from instruction 1.05
- Standard component folder structure defined in your rules

## Expected Output 

- Document in the README.md file in the "Folder Structure" sub-section the folder tree of the component


## Steps

1. Based on the JSX structure of the component, plan the folder structure following the standard component folder structure

<br/>

# Instruction 1.07: Plan unit test cases

## Objective
To list all the test cases that verifies if the component name, prop names, values are used correctly. The plan will be used to create actual unit test later.

## Input
- Typescript Types
- Component Structure
- Tailwind Variants planning
- Code pattern

## Expected Output
Document in the README.md file in the "Unit Test Cases" sub-section your test cases plan that should include:
- Test case scenarios
- Input
- Expected Output

## Example
```
1. **Test Scenario**: Verify default format prop is applied
  - **Input**: `<E04DestructiveButton data-testid="test-button" />`
  - **Expected Output**: Element rendered with format="primary"
```

## Steps
1. Review section "Tailwind Variants", "Typescript Types" and "Component Structure"  and rules defined in the "docs/code-patterns.md" and think through how the component is used and how the props are used.
2. Plan the unit test cases that verifies if the component name, prop names, values are used correctly.
3. Use concise, descriptive words and bullet points to document the test cases.


<br/>

# Instruction 1.08: Reflection & Improve

## Objectives
Ensure that you have met all the requirement from previous instructions

## Input
- Figma Documentation
- Figma data (from Instruction 1.06)
- "Quality assurance checklist when planning component development" checklist from "docs/active-context.md"

## Expected Output 
- Display in the chat for my review:
  - A checklist of what you have done for each of the previous instructions
  - A checklist confirming that you have successfully passed all the QA checklist

## Steps

1. Review carefully all previous instructions again, especially the "Expected Output" and "Steps" sections
2. For each instruction, check if you have met all the requirements
3. For each Quality Assurance item, check if you have passed it

## Important Notes
Do not put this checklist into the README.md file of the component
<br/>

<!-- Phase 2: Implementation -->

# Instruction 2.01: Create the component

## Objectives
Implement the component following the approved Implementation Plan defined in the README.md file of the component. The Implementation Plan is the guidance and your source of truth for development.

## Input
- The approved Implementation Plan
- Code pattern

## Expected Output
- The component is created exactly following the Implementation Plan
- Each generated file follows strictly the template in the "docs/code-patterns.md" accordingly

## Steps
1. Review the Implementation Plan defined in the README.md file of the component to think through all necessary information to create the component
2. In the Implementation Plan, if you see any unresolved clarifying questions, inform me to address them and stop proceeding forward with this instruction.
3. Otherwise, start by creating the component folder structure based on the "Component Folder Structure" section in the plan
4. Then, call the Figma MCP tool again to get accurate design specs (get the Figma Link from the README.md file of the component) and follow other sections' information to implement the component
5. Follow strictly all the templates in the "docs/code-patterns.md" file when generating files accordingly
6. At each section, after you generate any file, ask for my review before moving to the next section in the plan
7. Generate all unit tests based only on the "Unit Test Cases" section. Be sure to cover all the scenarios.


## Knowledge
- You can safely ignore the layer "Part = Base".
- For each variant, if any node/layer whose type is "INSTANCE" and name contains the master component name, then it should be break down into a sub-component in the "parts" folder. For example, "Element/Images/M-03 Stories Image/Mobile" is a sub-component of "Molecule/Cards/M-03 Stories/Mobile"
- For each variant, if any layer/node whose type is "INSTANCE" and name does NOT contain the master component name, then it is a separate component that should be imported elsewhere from the "src/components" folder.
- If any layer whose category is "Icons", use the corresponding icon component from lucide-react. Usually this mean the icon is passed down from a prop (e.g. `icon`). For example, "Element/Icons/E-00 upload" -> icon "Upload" from lucide-react
- Layer whose name starts with "Part" does not need be break down into a React component:
  - The layer "Part = Base" establishes the foundation for all subsequent component parts. Its purpose is to clearly identify the core structure of the component. You can safely ignore this layer now
  - The layer "Part = [Content Description]" indicate content-specific layers. Examples: Part = Image, Part = Title, Part = Description. 
  - The layer "Part = [Layout Type]" to indicate layout-specific layers. Examples: Part = Flex, Part = Grid, Part = Flex Item, Part = Flex Item 1.
  - Use Part = [Group Description] to indicate group-specific layers. Examples: Part = Links, Part = Navigation, Part = List, Part = Wrapper, Part = Elements.

## Important Notes
- You must call the Figma MCP tool again to get accurate information when you implement the component.
- Do not modify any thing in the README.md file of the component
<br/>


# Instruction 2.02: Review code quality

## Objectives
Ensure that you have passed all the Quality Assurance checklist for implementing a React component and correctly used the template defined in "docs/code-patterns.md" to generate code.

## Input
- "Quality assurance checklist when creating a new React component" checklist from "docs/active-context.md"
- Code pattern

## Expected Output

- Display in chat:
  - A checklist confirming that you have successfully passed all the QA checklist
  - A checklist confirming that you have correctly used the template defined in "docs/code-patterns.md" to generate code

## Steps
1. Review carefully all the code/files generated in the component folder
2. Check if you have passed all the Quality Assurance items
3. Check if you have correctly used the template defined in "docs/code-patterns.md" to generate code

## Important Notes
Do not put this checklist into the README.md file of the component

<br/>

# Instruction 2.03: Review Design matching quality

## Objectives
Ensure that the component matches at least 95% of the visual design from the Figma

## Input
- Figma component screenshot (given by user)

## Expected Output
- A percentage of how much the component matches the Figma design based on your analysis
- If the percentage is less than 95%, provide a list of discrepancies and your plan to fix them

## Steps
1. If I has not given a screenshot, ask for it. Stop proceeding further until I provide a screenshot
2. Analyze the provided screenshot and the component's structure and styling (especially the Tailwind Variant Configuration) thoroughly to spot any discrepancies

## Knowledge
- The given screenshot will contain multiple variants of the component. You might need to ask me to clarify which variant in the image refers to which variant/props in the component

## Important Notes
Do not put this checklist into the README.md file of the component

<br/>

# Instruction 2.04: Simulate the component in Storybook  

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
3. Run the Storybook simulation and verify that the component is displayed correctly and that all props are working as expected


## Important Notes
1. Remember to include the Figma link of the component to the story for visual testing by following the instructions in: https://storybook.js.org/docs/sharing/design-integrations#link-figma-components-to-stories
