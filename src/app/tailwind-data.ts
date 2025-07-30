export interface TailwindClass {
  category: string;
  name: string;
  description: string;
  tailwindClass: string;
  cssEquivalent: string;
  example?: string;
  code?: string;
}

export interface TailwindCategory {
  name: string;
  description: string;
  classes: TailwindClass[];
}

export const tailwindCategories: TailwindCategory[] = [
  {
    name: 'Layout',
    description: 'Utilities for controlling layout and positioning',
    classes: [
      {
        category: 'Layout',
        name: 'Container',
        description: 'Sets max-width to match the min-width of the current breakpoint',
        tailwindClass: 'container',
        cssEquivalent: 'max-width: 100%; margin: 0 auto;',
        example: 'Creates a responsive container with centered content'
      },
      {
        category: 'Layout',
        name: 'Block',
        description: 'Sets display to block',
        tailwindClass: 'block',
        cssEquivalent: 'display: block;',
        example: 'Makes element take full width available'
      },
      {
        category: 'Layout',
        name: 'Inline Block',
        description: 'Sets display to inline-block',
        tailwindClass: 'inline-block',
        cssEquivalent: 'display: inline-block;',
        example: 'Element flows with text but can have width/height'
      },
      {
        category: 'Layout',
        name: 'Inline',
        description: 'Sets display to inline',
        tailwindClass: 'inline',
        cssEquivalent: 'display: inline;',
        example: 'Element flows with text, no width/height'
      },
      {
        category: 'Layout',
        name: 'Flex',
        description: 'Sets display to flex',
        tailwindClass: 'flex',
        cssEquivalent: 'display: flex;',
        example: 'Creates a flex container'
      },
      {
        category: 'Layout',
        name: 'Grid',
        description: 'Sets display to grid',
        tailwindClass: 'grid',
        cssEquivalent: 'display: grid;',
        example: 'Creates a grid container'
      },
      {
        category: 'Layout',
        name: 'Hidden',
        description: 'Sets display to none',
        tailwindClass: 'hidden',
        cssEquivalent: 'display: none;',
        example: 'Completely hides the element'
      },
      {
        category: 'Layout',
        name: 'Table',
        description: 'Sets display to table',
        tailwindClass: 'table',
        cssEquivalent: 'display: table;',
        example: 'Makes element behave like a table'
      },
      {
        category: 'Layout',
        name: 'Table Cell',
        description: 'Sets display to table-cell',
        tailwindClass: 'table-cell',
        cssEquivalent: 'display: table-cell;',
        example: 'Makes element behave like a table cell'
      },
      {
        category: 'Layout',
        name: 'Table Row',
        description: 'Sets display to table-row',
        tailwindClass: 'table-row',
        cssEquivalent: 'display: table-row;',
        example: 'Makes element behave like a table row'
      }
    ]
  },
  {
    name: 'Flexbox & Grid',
    description: 'Utilities for flexbox and grid layouts',
    classes: [
      {
        category: 'Flexbox & Grid',
        name: 'Justify Start',
        description: 'Justifies flex items to start',
        tailwindClass: 'justify-start',
        cssEquivalent: 'justify-content: flex-start;',
        example: 'Aligns flex items to the start'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Justify Center',
        description: 'Justifies flex items to center',
        tailwindClass: 'justify-center',
        cssEquivalent: 'justify-content: center;',
        example: 'Centers flex items horizontally'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Justify End',
        description: 'Justifies flex items to end',
        tailwindClass: 'justify-end',
        cssEquivalent: 'justify-content: flex-end;',
        example: 'Aligns flex items to the end'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Justify Between',
        description: 'Justifies flex items with space between',
        tailwindClass: 'justify-between',
        cssEquivalent: 'justify-content: space-between;',
        example: 'Distributes items with space between them'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Justify Around',
        description: 'Justifies flex items with space around',
        tailwindClass: 'justify-around',
        cssEquivalent: 'justify-content: space-around;',
        example: 'Distributes items with space around them'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Justify Evenly',
        description: 'Justifies flex items with equal space',
        tailwindClass: 'justify-evenly',
        cssEquivalent: 'justify-content: space-evenly;',
        example: 'Distributes items with equal space'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Items Start',
        description: 'Aligns flex items to start',
        tailwindClass: 'items-start',
        cssEquivalent: 'align-items: flex-start;',
        example: 'Aligns flex items to the start'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Items Center',
        description: 'Aligns flex items to center',
        tailwindClass: 'items-center',
        cssEquivalent: 'align-items: center;',
        example: 'Centers flex items vertically'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Items End',
        description: 'Aligns flex items to end',
        tailwindClass: 'items-end',
        cssEquivalent: 'align-items: flex-end;',
        example: 'Aligns flex items to the end'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Items Baseline',
        description: 'Aligns flex items to baseline',
        tailwindClass: 'items-baseline',
        cssEquivalent: 'align-items: baseline;',
        example: 'Aligns flex items to text baseline'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Items Stretch',
        description: 'Stretches flex items',
        tailwindClass: 'items-stretch',
        cssEquivalent: 'align-items: stretch;',
        example: 'Stretches flex items to fill container'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Column',
        description: 'Sets flex direction to column',
        tailwindClass: 'flex-col',
        cssEquivalent: 'flex-direction: column;',
        example: 'Stacks flex items vertically'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Row',
        description: 'Sets flex direction to row',
        tailwindClass: 'flex-row',
        cssEquivalent: 'flex-direction: row;',
        example: 'Arranges flex items horizontally'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Row Reverse',
        description: 'Sets flex direction to row-reverse',
        tailwindClass: 'flex-row-reverse',
        cssEquivalent: 'flex-direction: row-reverse;',
        example: 'Arranges flex items horizontally in reverse'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Column Reverse',
        description: 'Sets flex direction to column-reverse',
        tailwindClass: 'flex-col-reverse',
        cssEquivalent: 'flex-direction: column-reverse;',
        example: 'Stacks flex items vertically in reverse'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Wrap',
        description: 'Allows flex items to wrap',
        tailwindClass: 'flex-wrap',
        cssEquivalent: 'flex-wrap: wrap;',
        example: 'Flex items wrap to new lines'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex No Wrap',
        description: 'Prevents flex items from wrapping',
        tailwindClass: 'flex-nowrap',
        cssEquivalent: 'flex-wrap: nowrap;',
        example: 'Keeps flex items on one line'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex 1',
        description: 'Sets flex grow, shrink, and basis',
        tailwindClass: 'flex-1',
        cssEquivalent: 'flex: 1 1 0%;',
        example: 'Item grows and shrinks equally'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex Auto',
        description: 'Sets flex to auto',
        tailwindClass: 'flex-auto',
        cssEquivalent: 'flex: 1 1 auto;',
        example: 'Item grows and shrinks as needed'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Flex None',
        description: 'Prevents flex item from growing or shrinking',
        tailwindClass: 'flex-none',
        cssEquivalent: 'flex: none;',
        example: 'Item maintains its size'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 1',
        description: 'Creates 1 column grid',
        tailwindClass: 'grid-cols-1',
        cssEquivalent: 'grid-template-columns: repeat(1, minmax(0, 1fr));',
        example: 'Single column layout'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 2',
        description: 'Creates 2 column grid',
        tailwindClass: 'grid-cols-2',
        cssEquivalent: 'grid-template-columns: repeat(2, minmax(0, 1fr));',
        example: 'Two equal width columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 3',
        description: 'Creates 3 column grid',
        tailwindClass: 'grid-cols-3',
        cssEquivalent: 'grid-template-columns: repeat(3, minmax(0, 1fr));',
        example: 'Three equal width columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 4',
        description: 'Creates 4 column grid',
        tailwindClass: 'grid-cols-4',
        cssEquivalent: 'grid-template-columns: repeat(4, minmax(0, 1fr));',
        example: 'Four equal width columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 6',
        description: 'Creates 6 column grid',
        tailwindClass: 'grid-cols-6',
        cssEquivalent: 'grid-template-columns: repeat(6, minmax(0, 1fr));',
        example: 'Six equal width columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Grid Cols 12',
        description: 'Creates 12 column grid',
        tailwindClass: 'grid-cols-12',
        cssEquivalent: 'grid-template-columns: repeat(12, minmax(0, 1fr));',
        example: 'Twelve column grid system'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Col Span 2',
        description: 'Element spans 2 columns',
        tailwindClass: 'col-span-2',
        cssEquivalent: 'grid-column: span 2 / span 2;',
        example: 'Takes up 2 grid columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Col Span 3',
        description: 'Element spans 3 columns',
        tailwindClass: 'col-span-3',
        cssEquivalent: 'grid-column: span 3 / span 3;',
        example: 'Takes up 3 grid columns'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Gap 2',
        description: 'Sets gap between grid/flex items',
        tailwindClass: 'gap-2',
        cssEquivalent: 'gap: 0.5rem;',
        example: '8px spacing between items'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Gap 4',
        description: 'Sets gap between grid/flex items',
        tailwindClass: 'gap-4',
        cssEquivalent: 'gap: 1rem;',
        example: '16px spacing between items'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Gap 6',
        description: 'Sets gap between grid/flex items',
        tailwindClass: 'gap-6',
        cssEquivalent: 'gap: 1.5rem;',
        example: '24px spacing between items'
      },
      {
        category: 'Flexbox & Grid',
        name: 'Gap 8',
        description: 'Sets gap between grid/flex items',
        tailwindClass: 'gap-8',
        cssEquivalent: 'gap: 2rem;',
        example: '32px spacing between items'
      }
    ]
  },
  {
    name: 'Spacing',
    description: 'Utilities for controlling margin and padding',
    classes: [
      {
        category: 'Spacing',
        name: 'Margin 4',
        description: 'Sets margin to 1rem (16px)',
        tailwindClass: 'm-4',
        cssEquivalent: 'margin: 1rem;',
        example: '16px margin on all sides'
      },
      {
        category: 'Spacing',
        name: 'Margin X 4',
        description: 'Sets horizontal margin to 1rem',
        tailwindClass: 'mx-4',
        cssEquivalent: 'margin-left: 1rem; margin-right: 1rem;',
        example: '16px left and right margin'
      },
      {
        category: 'Spacing',
        name: 'Margin Y 4',
        description: 'Sets vertical margin to 1rem',
        tailwindClass: 'my-4',
        cssEquivalent: 'margin-top: 1rem; margin-bottom: 1rem;',
        example: '16px top and bottom margin'
      },
      {
        category: 'Spacing',
        name: 'Padding 4',
        description: 'Sets padding to 1rem (16px)',
        tailwindClass: 'p-4',
        cssEquivalent: 'padding: 1rem;',
        example: '16px padding on all sides'
      },
      {
        category: 'Spacing',
        name: 'Padding X 4',
        description: 'Sets horizontal padding to 1rem',
        tailwindClass: 'px-4',
        cssEquivalent: 'padding-left: 1rem; padding-right: 1rem;',
        example: '16px left and right padding'
      },
      {
        category: 'Spacing',
        name: 'Padding Y 4',
        description: 'Sets vertical padding to 1rem',
        tailwindClass: 'py-4',
        cssEquivalent: 'padding-top: 1rem; padding-bottom: 1rem;',
        example: '16px top and bottom padding'
      },
      {
        category: 'Spacing',
        name: 'Space X 4',
        description: 'Sets horizontal space between children',
        tailwindClass: 'space-x-4',
        cssEquivalent: '> * + * { margin-left: 1rem; }',
        example: '16px space between child elements'
      },
      {
        category: 'Spacing',
        name: 'Space Y 4',
        description: 'Sets vertical space between children',
        tailwindClass: 'space-y-4',
        cssEquivalent: '> * + * { margin-top: 1rem; }',
        example: '16px vertical space between children'
      }
    ]
  },
  {
    name: 'Sizing',
    description: 'Utilities for controlling width and height',
    classes: [
      {
        category: 'Sizing',
        name: 'Width Full',
        description: 'Sets width to 100%',
        tailwindClass: 'w-full',
        cssEquivalent: 'width: 100%;',
        example: 'Element takes full width of parent'
      },
      {
        category: 'Sizing',
        name: 'Width 1/2',
        description: 'Sets width to 50%',
        tailwindClass: 'w-1/2',
        cssEquivalent: 'width: 50%;',
        example: 'Element takes half width of parent'
      },
      {
        category: 'Sizing',
        name: 'Width 64',
        description: 'Sets width to 16rem (256px)',
        tailwindClass: 'w-64',
        cssEquivalent: 'width: 16rem;',
        example: 'Fixed width of 256px'
      },
      {
        category: 'Sizing',
        name: 'Height Full',
        description: 'Sets height to 100%',
        tailwindClass: 'h-full',
        cssEquivalent: 'height: 100%;',
        example: 'Element takes full height of parent'
      },
      {
        category: 'Sizing',
        name: 'Height Screen',
        description: 'Sets height to 100vh',
        tailwindClass: 'h-screen',
        cssEquivalent: 'height: 100vh;',
        example: 'Element takes full viewport height'
      },
      {
        category: 'Sizing',
        name: 'Min Width 0',
        description: 'Sets min-width to 0',
        tailwindClass: 'min-w-0',
        cssEquivalent: 'min-width: 0px;',
        example: 'Allows element to shrink below content size'
      },
      {
        category: 'Sizing',
        name: 'Max Width Full',
        description: 'Sets max-width to 100%',
        tailwindClass: 'max-w-full',
        cssEquivalent: 'max-width: 100%;',
        example: 'Element cannot exceed parent width'
      }
    ]
  },
  {
    name: 'Typography',
    description: 'Utilities for controlling text appearance',
    classes: [
      {
        category: 'Typography',
        name: 'Text XS',
        description: 'Sets font size to 0.75rem',
        tailwindClass: 'text-xs',
        cssEquivalent: 'font-size: 0.75rem; line-height: 1rem;',
        example: 'Extra small text (12px)'
      },
      {
        category: 'Typography',
        name: 'Text SM',
        description: 'Sets font size to 0.875rem',
        tailwindClass: 'text-sm',
        cssEquivalent: 'font-size: 0.875rem; line-height: 1.25rem;',
        example: 'Small text (14px)'
      },
      {
        category: 'Typography',
        name: 'Text Base',
        description: 'Sets font size to 1rem',
        tailwindClass: 'text-base',
        cssEquivalent: 'font-size: 1rem; line-height: 1.5rem;',
        example: 'Base text size (16px)'
      },
      {
        category: 'Typography',
        name: 'Text LG',
        description: 'Sets font size to 1.125rem',
        tailwindClass: 'text-lg',
        cssEquivalent: 'font-size: 1.125rem; line-height: 1.75rem;',
        example: 'Large text (18px)'
      },
      {
        category: 'Typography',
        name: 'Text XL',
        description: 'Sets font size to 1.25rem',
        tailwindClass: 'text-xl',
        cssEquivalent: 'font-size: 1.25rem; line-height: 1.75rem;',
        example: 'Extra large text (20px)'
      },
      {
        category: 'Typography',
        name: 'Text 2XL',
        description: 'Sets font size to 1.5rem',
        tailwindClass: 'text-2xl',
        cssEquivalent: 'font-size: 1.5rem; line-height: 2rem;',
        example: '2x large text (24px)'
      },
      {
        category: 'Typography',
        name: 'Font Bold',
        description: 'Sets font weight to 700',
        tailwindClass: 'font-bold',
        cssEquivalent: 'font-weight: 700;',
        example: 'Bold text weight'
      },
      {
        category: 'Typography',
        name: 'Font Medium',
        description: 'Sets font weight to 500',
        tailwindClass: 'font-medium',
        cssEquivalent: 'font-weight: 500;',
        example: 'Medium text weight'
      },
      {
        category: 'Typography',
        name: 'Text Center',
        description: 'Centers text alignment',
        tailwindClass: 'text-center',
        cssEquivalent: 'text-align: center;',
        example: 'Center aligned text'
      },
      {
        category: 'Typography',
        name: 'Text Left',
        description: 'Left aligns text',
        tailwindClass: 'text-left',
        cssEquivalent: 'text-align: left;',
        example: 'Left aligned text'
      },
      {
        category: 'Typography',
        name: 'Text Right',
        description: 'Right aligns text',
        tailwindClass: 'text-right',
        cssEquivalent: 'text-align: right;',
        example: 'Right aligned text'
      },
      {
        category: 'Typography',
        name: 'Uppercase',
        description: 'Transforms text to uppercase',
        tailwindClass: 'uppercase',
        cssEquivalent: 'text-transform: uppercase;',
        example: 'ALL CAPS TEXT'
      },
      {
        category: 'Typography',
        name: 'Capitalize',
        description: 'Capitalizes first letter of each word',
        tailwindClass: 'capitalize',
        cssEquivalent: 'text-transform: capitalize;',
        example: 'Title Case Text'
      }
    ]
  },
  {
    name: 'Colors',
    description: 'Utilities for controlling text and background colors',
    classes: [
      {
        category: 'Colors',
        name: 'Text Blue 500',
        description: 'Sets text color to blue-500',
        tailwindClass: 'text-blue-500',
        cssEquivalent: 'color: rgb(59 130 246);',
        example: 'Medium blue text color'
      },
      {
        category: 'Colors',
        name: 'Text Red 500',
        description: 'Sets text color to red-500',
        tailwindClass: 'text-red-500',
        cssEquivalent: 'color: rgb(239 68 68);',
        example: 'Medium red text color'
      },
      {
        category: 'Colors',
        name: 'Text Green 500',
        description: 'Sets text color to green-500',
        tailwindClass: 'text-green-500',
        cssEquivalent: 'color: rgb(34 197 94);',
        example: 'Medium green text color'
      },
      {
        category: 'Colors',
        name: 'Text Gray 500',
        description: 'Sets text color to gray-500',
        tailwindClass: 'text-gray-500',
        cssEquivalent: 'color: rgb(107 114 128);',
        example: 'Medium gray text color'
      },
      {
        category: 'Colors',
        name: 'BG White',
        description: 'Sets background color to white',
        tailwindClass: 'bg-white',
        cssEquivalent: 'background-color: rgb(255 255 255);',
        example: 'White background'
      },
      {
        category: 'Colors',
        name: 'BG Blue 500',
        description: 'Sets background color to blue-500',
        tailwindClass: 'bg-blue-500',
        cssEquivalent: 'background-color: rgb(59 130 246);',
        example: 'Medium blue background'
      },
      {
        category: 'Colors',
        name: 'BG Red 500',
        description: 'Sets background color to red-500',
        tailwindClass: 'bg-red-500',
        cssEquivalent: 'background-color: rgb(239 68 68);',
        example: 'Medium red background'
      },
      {
        category: 'Colors',
        name: 'BG Green 500',
        description: 'Sets background color to green-500',
        tailwindClass: 'bg-green-500',
        cssEquivalent: 'background-color: rgb(34 197 94);',
        example: 'Medium green background'
      },
      {
        category: 'Colors',
        name: 'BG Gray 100',
        description: 'Sets background color to gray-100',
        tailwindClass: 'bg-gray-100',
        cssEquivalent: 'background-color: rgb(243 244 246);',
        example: 'Light gray background'
      }
    ]
  },
  {
    name: 'Borders',
    description: 'Utilities for controlling borders',
    classes: [
      {
        category: 'Borders',
        name: 'Border',
        description: 'Adds 1px border on all sides',
        tailwindClass: 'border',
        cssEquivalent: 'border-width: 1px;',
        example: 'Thin border around element'
      },
      {
        category: 'Borders',
        name: 'Border 2',
        description: 'Adds 2px border on all sides',
        tailwindClass: 'border-2',
        cssEquivalent: 'border-width: 2px;',
        example: 'Thicker border around element'
      },
      {
        category: 'Borders',
        name: 'Border Solid',
        description: 'Sets border style to solid',
        tailwindClass: 'border-solid',
        cssEquivalent: 'border-style: solid;',
        example: 'Solid line border'
      },
      {
        category: 'Borders',
        name: 'Border Dashed',
        description: 'Sets border style to dashed',
        tailwindClass: 'border-dashed',
        cssEquivalent: 'border-style: dashed;',
        example: 'Dashed line border'
      },
      {
        category: 'Borders',
        name: 'Border Gray 300',
        description: 'Sets border color to gray-300',
        tailwindClass: 'border-gray-300',
        cssEquivalent: 'border-color: rgb(209 213 219);',
        example: 'Light gray border color'
      },
      {
        category: 'Borders',
        name: 'Rounded',
        description: 'Adds border radius of 0.25rem',
        tailwindClass: 'rounded',
        cssEquivalent: 'border-radius: 0.25rem;',
        example: 'Slightly rounded corners'
      },
      {
        category: 'Borders',
        name: 'Rounded MD',
        description: 'Adds border radius of 0.375rem',
        tailwindClass: 'rounded-md',
        cssEquivalent: 'border-radius: 0.375rem;',
        example: 'Medium rounded corners'
      },
      {
        category: 'Borders',
        name: 'Rounded LG',
        description: 'Adds border radius of 0.5rem',
        tailwindClass: 'rounded-lg',
        cssEquivalent: 'border-radius: 0.5rem;',
        example: 'Large rounded corners'
      },
      {
        category: 'Borders',
        name: 'Rounded Full',
        description: 'Adds border radius of 9999px',
        tailwindClass: 'rounded-full',
        cssEquivalent: 'border-radius: 9999px;',
        example: 'Fully rounded (circle/pill shape)'
      }
    ]
  },
  {
    name: 'Effects',
    description: 'Utilities for visual effects like shadows and opacity',
    classes: [
      {
        category: 'Effects',
        name: 'Shadow SM',
        description: 'Adds small drop shadow',
        tailwindClass: 'shadow-sm',
        cssEquivalent: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
        example: 'Subtle shadow effect'
      },
      {
        category: 'Effects',
        name: 'Shadow',
        description: 'Adds default drop shadow',
        tailwindClass: 'shadow',
        cssEquivalent: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
        example: 'Standard shadow effect'
      },
      {
        category: 'Effects',
        name: 'Shadow MD',
        description: 'Adds medium drop shadow',
        tailwindClass: 'shadow-md',
        cssEquivalent: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
        example: 'Medium shadow effect'
      },
      {
        category: 'Effects',
        name: 'Shadow LG',
        description: 'Adds large drop shadow',
        tailwindClass: 'shadow-lg',
        cssEquivalent: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
        example: 'Large shadow effect'
      },
      {
        category: 'Effects',
        name: 'Opacity 50',
        description: 'Sets opacity to 50%',
        tailwindClass: 'opacity-50',
        cssEquivalent: 'opacity: 0.5;',
        example: 'Semi-transparent element'
      },
      {
        category: 'Effects',
        name: 'Opacity 75',
        description: 'Sets opacity to 75%',
        tailwindClass: 'opacity-75',
        cssEquivalent: 'opacity: 0.75;',
        example: 'Mostly opaque element'
      },
      {
        category: 'Effects',
        name: 'Blur SM',
        description: 'Applies small blur filter',
        tailwindClass: 'blur-sm',
        cssEquivalent: 'filter: blur(4px);',
        example: 'Slight blur effect'
      },
      {
        category: 'Effects',
        name: 'Grayscale',
        description: 'Applies grayscale filter',
        tailwindClass: 'grayscale',
        cssEquivalent: 'filter: grayscale(100%);',
        example: 'Black and white effect'
      }
    ]
  },
  {
    name: 'Interactivity',
    description: 'Utilities for controlling user interaction',
    classes: [
      {
        category: 'Interactivity',
        name: 'Cursor Pointer',
        description: 'Changes cursor to pointer on hover',
        tailwindClass: 'cursor-pointer',
        cssEquivalent: 'cursor: pointer;',
        example: 'Shows hand cursor indicating clickable'
      },
      {
        category: 'Interactivity',
        name: 'Cursor Default',
        description: 'Sets cursor to default arrow',
        tailwindClass: 'cursor-default',
        cssEquivalent: 'cursor: default;',
        example: 'Standard arrow cursor'
      },
      {
        category: 'Interactivity',
        name: 'Cursor Not Allowed',
        description: 'Shows not-allowed cursor',
        tailwindClass: 'cursor-not-allowed',
        cssEquivalent: 'cursor: not-allowed;',
        example: 'Indicates disabled/forbidden action'
      },
      {
        category: 'Interactivity',
        name: 'Select None',
        description: 'Prevents text selection',
        tailwindClass: 'select-none',
        cssEquivalent: 'user-select: none;',
        example: 'Text cannot be selected/highlighted'
      },
      {
        category: 'Interactivity',
        name: 'Pointer Events None',
        description: 'Disables pointer events',
        tailwindClass: 'pointer-events-none',
        cssEquivalent: 'pointer-events: none;',
        example: 'Element ignores mouse/touch events'
      },
      {
        category: 'Interactivity',
        name: 'Resize',
        description: 'Allows element to be resized',
        tailwindClass: 'resize',
        cssEquivalent: 'resize: both;',
        example: 'Element can be resized by user'
      }
    ]
  },
  {
    name: 'Transforms',
    description: 'Utilities for transforming elements',
    classes: [
      {
        category: 'Transforms',
        name: 'Transform',
        description: 'Enables CSS transforms',
        tailwindClass: 'transform',
        cssEquivalent: 'transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));',
        example: 'Required for transform utilities'
      },
      {
        category: 'Transforms',
        name: 'Scale 105',
        description: 'Scales element to 105%',
        tailwindClass: 'scale-105',
        cssEquivalent: 'transform: scale(1.05);',
        example: 'Slightly enlarges element'
      },
      {
        category: 'Transforms',
        name: 'Rotate 45',
        description: 'Rotates element 45 degrees',
        tailwindClass: 'rotate-45',
        cssEquivalent: 'transform: rotate(45deg);',
        example: 'Rotates element clockwise'
      },
      {
        category: 'Transforms',
        name: 'Translate X 2',
        description: 'Moves element 0.5rem right',
        tailwindClass: 'translate-x-2',
        cssEquivalent: 'transform: translateX(0.5rem);',
        example: 'Shifts element horizontally'
      },
      {
        category: 'Transforms',
        name: 'Skew X 12',
        description: 'Skews element 12 degrees on X axis',
        tailwindClass: 'skew-x-12',
        cssEquivalent: 'transform: skewX(12deg);',
        example: 'Creates slanted appearance'
      }
    ]
  },
  {
    name: 'Transitions',
    description: 'Utilities for controlling CSS transitions',
    classes: [
      {
        category: 'Transitions',
        name: 'Transition',
        description: 'Adds transition for common properties',
        tailwindClass: 'transition',
        cssEquivalent: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Smooth transitions for hover effects'
      },
      {
        category: 'Transitions',
        name: 'Transition All',
        description: 'Adds transition for all properties',
        tailwindClass: 'transition-all',
        cssEquivalent: 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Transitions all changeable properties'
      },
      {
        category: 'Transitions',
        name: 'Duration 300',
        description: 'Sets transition duration to 300ms',
        tailwindClass: 'duration-300',
        cssEquivalent: 'transition-duration: 300ms;',
        example: 'Slower transition timing'
      },
      {
        category: 'Transitions',
        name: 'Ease In Out',
        description: 'Sets transition timing to ease-in-out',
        tailwindClass: 'ease-in-out',
        cssEquivalent: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
        example: 'Smooth acceleration and deceleration'
      },
      {
        category: 'Transitions',
        name: 'Delay 150',
        description: 'Adds 150ms delay to transition',
        tailwindClass: 'delay-150',
        cssEquivalent: 'transition-delay: 150ms;',
        example: 'Waits before starting transition'
      }
    ]
  },
  {
    name: 'Responsive',
    description: 'Utilities for responsive design breakpoints',
    classes: [
      {
        category: 'Responsive',
        name: 'SM Breakpoint',
        description: 'Applies styles at small screens (640px+)',
        tailwindClass: 'sm:text-lg',
        cssEquivalent: '@media (min-width: 640px) { font-size: 1.125rem; }',
        example: 'Large text on small screens and up'
      },
      {
        category: 'Responsive',
        name: 'MD Breakpoint',
        description: 'Applies styles at medium screens (768px+)',
        tailwindClass: 'md:flex',
        cssEquivalent: '@media (min-width: 768px) { display: flex; }',
        example: 'Flex layout on medium screens and up'
      },
      {
        category: 'Responsive',
        name: 'LG Breakpoint',
        description: 'Applies styles at large screens (1024px+)',
        tailwindClass: 'lg:grid-cols-3',
        cssEquivalent: '@media (min-width: 1024px) { grid-template-columns: repeat(3, minmax(0, 1fr)); }',
        example: '3 columns on large screens and up'
      },
      {
        category: 'Responsive',
        name: 'XL Breakpoint',
        description: 'Applies styles at extra large screens (1280px+)',
        tailwindClass: 'xl:container',
        cssEquivalent: '@media (min-width: 1280px) { max-width: 100%; margin: 0 auto; }',
        example: 'Container on extra large screens'
      }
    ]
  },
  {
    name: 'Overflow',
    description: 'Utilities for controlling overflow behavior',
    classes: [
      {
        category: 'Overflow',
        name: 'Overflow Auto',
        description: 'Shows scrollbars only when needed',
        tailwindClass: 'overflow-auto',
        cssEquivalent: 'overflow: auto;',
        example: 'Scrollbars appear when content overflows'
      },
      {
        category: 'Overflow',
        name: 'Overflow Hidden',
        description: 'Clips overflowing content',
        tailwindClass: 'overflow-hidden',
        cssEquivalent: 'overflow: hidden;',
        example: 'Hides content that overflows'
      },
      {
        category: 'Overflow',
        name: 'Overflow Visible',
        description: 'Shows overflowing content',
        tailwindClass: 'overflow-visible',
        cssEquivalent: 'overflow: visible;',
        example: 'Allows content to overflow container'
      },
      {
        category: 'Overflow',
        name: 'Overflow Scroll',
        description: 'Always shows scrollbars',
        tailwindClass: 'overflow-scroll',
        cssEquivalent: 'overflow: scroll;',
        example: 'Always shows scrollbars'
      },
      {
        category: 'Overflow',
        name: 'Overflow X Auto',
        description: 'Horizontal scrollbars when needed',
        tailwindClass: 'overflow-x-auto',
        cssEquivalent: 'overflow-x: auto;',
        example: 'Horizontal scroll when needed'
      },
      {
        category: 'Overflow',
        name: 'Overflow Y Auto',
        description: 'Vertical scrollbars when needed',
        tailwindClass: 'overflow-y-auto',
        cssEquivalent: 'overflow-y: auto;',
        example: 'Vertical scroll when needed'
      },
      {
        category: 'Overflow',
        name: 'Overflow X Hidden',
        description: 'Clips horizontal overflow',
        tailwindClass: 'overflow-x-hidden',
        cssEquivalent: 'overflow-x: hidden;',
        example: 'Hides horizontal overflow'
      },
      {
        category: 'Overflow',
        name: 'Overflow Y Hidden',
        description: 'Clips vertical overflow',
        tailwindClass: 'overflow-y-hidden',
        cssEquivalent: 'overflow-y: hidden;',
        example: 'Hides vertical overflow'
      }
    ]
  },
  {
    name: 'Float',
    description: 'Utilities for controlling element float behavior',
    classes: [
      {
        category: 'Float',
        name: 'Float Right',
        description: 'Floats element to the right',
        tailwindClass: 'float-right',
        cssEquivalent: 'float: right;',
        example: 'Element floats to right side'
      },
      {
        category: 'Float',
        name: 'Float Left',
        description: 'Floats element to the left',
        tailwindClass: 'float-left',
        cssEquivalent: 'float: left;',
        example: 'Element floats to left side'
      },
      {
        category: 'Float',
        name: 'Float None',
        description: 'Removes float behavior',
        tailwindClass: 'float-none',
        cssEquivalent: 'float: none;',
        example: 'Element does not float'
      }
    ]
  },
  {
    name: 'Clear',
    description: 'Utilities for controlling element clearing behavior',
    classes: [
      {
        category: 'Clear',
        name: 'Clear Left',
        description: 'Clears left floated elements',
        tailwindClass: 'clear-left',
        cssEquivalent: 'clear: left;',
        example: 'Clears left-floated elements'
      },
      {
        category: 'Clear',
        name: 'Clear Right',
        description: 'Clears right floated elements',
        tailwindClass: 'clear-right',
        cssEquivalent: 'clear: right;',
        example: 'Clears right-floated elements'
      },
      {
        category: 'Clear',
        name: 'Clear Both',
        description: 'Clears both left and right floated elements',
        tailwindClass: 'clear-both',
        cssEquivalent: 'clear: both;',
        example: 'Clears all floated elements'
      },
      {
        category: 'Clear',
        name: 'Clear None',
        description: 'Does not clear floated elements',
        tailwindClass: 'clear-none',
        cssEquivalent: 'clear: none;',
        example: 'Does not clear any floated elements'
      }
    ]
  },
  {
    name: 'Object',
    description: 'Utilities for controlling object fit and position',
    classes: [
      {
        category: 'Object',
        name: 'Object Contain',
        description: 'Scales content to fit while maintaining aspect ratio',
        tailwindClass: 'object-contain',
        cssEquivalent: 'object-fit: contain;',
        example: 'Image scales to fit container'
      },
      {
        category: 'Object',
        name: 'Object Cover',
        description: 'Scales content to cover container',
        tailwindClass: 'object-cover',
        cssEquivalent: 'object-fit: cover;',
        example: 'Image covers entire container'
      },
      {
        category: 'Object',
        name: 'Object Fill',
        description: 'Stretches content to fill container',
        tailwindClass: 'object-fill',
        cssEquivalent: 'object-fit: fill;',
        example: 'Image fills container exactly'
      },
      {
        category: 'Object',
        name: 'Object None',
        description: 'Content maintains original size',
        tailwindClass: 'object-none',
        cssEquivalent: 'object-fit: none;',
        example: 'Image keeps original size'
      },
      {
        category: 'Object',
        name: 'Object Scale Down',
        description: 'Scales content down if needed',
        tailwindClass: 'object-scale-down',
        cssEquivalent: 'object-fit: scale-down;',
        example: 'Image scales down to fit'
      },
      {
        category: 'Object',
        name: 'Object Center',
        description: 'Centers object content',
        tailwindClass: 'object-center',
        cssEquivalent: 'object-position: center;',
        example: 'Centers image within container'
      },
      {
        category: 'Object',
        name: 'Object Top',
        description: 'Positions object at top',
        tailwindClass: 'object-top',
        cssEquivalent: 'object-position: top;',
        example: 'Positions image at top'
      },
      {
        category: 'Object',
        name: 'Object Bottom',
        description: 'Positions object at bottom',
        tailwindClass: 'object-bottom',
        cssEquivalent: 'object-position: bottom;',
        example: 'Positions image at bottom'
      }
    ]
  },
  {
    name: 'Visibility',
    description: 'Utilities for controlling element visibility',
    classes: [
      {
        category: 'Visibility',
        name: 'Visible',
        description: 'Makes element visible',
        tailwindClass: 'visible',
        cssEquivalent: 'visibility: visible;',
        example: 'Element is visible'
      },
      {
        category: 'Visibility',
        name: 'Invisible',
        description: 'Makes element invisible but maintains space',
        tailwindClass: 'invisible',
        cssEquivalent: 'visibility: hidden;',
        example: 'Element is invisible but takes up space'
      },
      {
        category: 'Visibility',
        name: 'Collapse',
        description: 'Collapses table rows/columns',
        tailwindClass: 'collapse',
        cssEquivalent: 'visibility: collapse;',
        example: 'Collapses table elements'
      }
    ]
  },
  {
    name: 'Animation',
    description: 'Utilities for animating elements',
    classes: [
      {
        category: 'Animation',
        name: 'Animate None',
        description: 'Disables animation',
        tailwindClass: 'animate-none',
        cssEquivalent: 'animation: none;',
        example: 'No animation applied'
      },
      {
        category: 'Animation',
        name: 'Animate Spin',
        description: 'Adds a spinning animation',
        tailwindClass: 'animate-spin',
        cssEquivalent: 'animation: spin 1s linear infinite;',
        example: 'Element spins continuously'
      },
      {
        category: 'Animation',
        name: 'Animate Ping',
        description: 'Adds a ping animation',
        tailwindClass: 'animate-ping',
        cssEquivalent: 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
        example: 'Element pings/pulses'
      },
      {
        category: 'Animation',
        name: 'Animate Pulse',
        description: 'Adds a pulsing animation',
        tailwindClass: 'animate-pulse',
        cssEquivalent: 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        example: 'Element fades in and out'
      },
      {
        category: 'Animation',
        name: 'Animate Bounce',
        description: 'Adds a bouncing animation',
        tailwindClass: 'animate-bounce',
        cssEquivalent: 'animation: bounce 1s infinite;',
        example: 'Element bounces up and down'
      }
    ]
  },
  {
    name: 'Cursor',
    description: 'Utilities for controlling cursor appearance',
    classes: [
      {
        category: 'Cursor',
        name: 'Cursor Auto',
        description: 'Sets cursor to auto',
        tailwindClass: 'cursor-auto',
        cssEquivalent: 'cursor: auto;',
        example: 'Default cursor behavior'
      },
      {
        category: 'Cursor',
        name: 'Cursor Default',
        description: 'Sets cursor to default arrow',
        tailwindClass: 'cursor-default',
        cssEquivalent: 'cursor: default;',
        example: 'Default arrow cursor'
      },
      {
        category: 'Cursor',
        name: 'Cursor Pointer',
        description: 'Sets cursor to pointer hand',
        tailwindClass: 'cursor-pointer',
        cssEquivalent: 'cursor: pointer;',
        example: 'Hand pointer cursor'
      },
      {
        category: 'Cursor',
        name: 'Cursor Wait',
        description: 'Sets cursor to wait/loading',
        tailwindClass: 'cursor-wait',
        cssEquivalent: 'cursor: wait;',
        example: 'Loading/wait cursor'
      },
      {
        category: 'Cursor',
        name: 'Cursor Text',
        description: 'Sets cursor to text selection',
        tailwindClass: 'cursor-text',
        cssEquivalent: 'cursor: text;',
        example: 'Text selection cursor'
      },
      {
        category: 'Cursor',
        name: 'Cursor Move',
        description: 'Sets cursor to move',
        tailwindClass: 'cursor-move',
        cssEquivalent: 'cursor: move;',
        example: 'Move/drag cursor'
      },
      {
        category: 'Cursor',
        name: 'Cursor Help',
        description: 'Sets cursor to help',
        tailwindClass: 'cursor-help',
        cssEquivalent: 'cursor: help;',
        example: 'Help cursor with question mark'
      },
      {
        category: 'Cursor',
        name: 'Cursor Not Allowed',
        description: 'Sets cursor to not-allowed',
        tailwindClass: 'cursor-not-allowed',
        cssEquivalent: 'cursor: not-allowed;',
        example: 'Blocked/not-allowed cursor'
      }
    ]
  },
  {
    name: 'User Select',
    description: 'Utilities for controlling user text selection',
    classes: [
      {
        category: 'User Select',
        name: 'Select None',
        description: 'Prevents text selection',
        tailwindClass: 'select-none',
        cssEquivalent: 'user-select: none;',
        example: 'Text cannot be selected'
      },
      {
        category: 'User Select',
        name: 'Select Text',
        description: 'Allows text selection',
        tailwindClass: 'select-text',
        cssEquivalent: 'user-select: text;',
        example: 'Text can be selected'
      },
      {
        category: 'User Select',
        name: 'Select All',
        description: 'Selects all text on click',
        tailwindClass: 'select-all',
        cssEquivalent: 'user-select: all;',
        example: 'All text selected on click'
      },
      {
        category: 'User Select',
        name: 'Select Auto',
        description: 'Default text selection behavior',
        tailwindClass: 'select-auto',
        cssEquivalent: 'user-select: auto;',
        example: 'Default selection behavior'
      }
    ]
  },
  {
    name: 'Pointer Events',
    description: 'Utilities for controlling pointer events',
    classes: [
      {
        category: 'Pointer Events',
        name: 'Pointer Events None',
        description: 'Disables pointer events',
        tailwindClass: 'pointer-events-none',
        cssEquivalent: 'pointer-events: none;',
        example: 'Element ignores mouse/touch events'
      },
      {
        category: 'Pointer Events',
        name: 'Pointer Events Auto',
        description: 'Enables pointer events',
        tailwindClass: 'pointer-events-auto',
        cssEquivalent: 'pointer-events: auto;',
        example: 'Element responds to mouse/touch events'
      }
    ]
  },
  {
    name: 'Resize',
    description: 'Utilities for controlling element resizing',
    classes: [
      {
        category: 'Resize',
        name: 'Resize None',
        description: 'Prevents element resizing',
        tailwindClass: 'resize-none',
        cssEquivalent: 'resize: none;',
        example: 'Element cannot be resized'
      },
      {
        category: 'Resize',
        name: 'Resize',
        description: 'Allows element resizing',
        tailwindClass: 'resize',
        cssEquivalent: 'resize: both;',
        example: 'Element can be resized in both directions'
      },
      {
        category: 'Resize',
        name: 'Resize Y',
        description: 'Allows vertical resizing',
        tailwindClass: 'resize-y',
        cssEquivalent: 'resize: vertical;',
        example: 'Element can be resized vertically'
      },
      {
        category: 'Resize',
        name: 'Resize X',
        description: 'Allows horizontal resizing',
        tailwindClass: 'resize-x',
        cssEquivalent: 'resize: horizontal;',
        example: 'Element can be resized horizontally'
      }
    ]
  },
  {
    name: 'Transitions',
    description: 'Utilities for controlling transitions and timing',
    classes: [
      {
        category: 'Transitions',
        name: 'Transition',
        description: 'Applies transition to all properties',
        tailwindClass: 'transition',
        cssEquivalent: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Smooth transition for common properties'
      },
      {
        category: 'Transitions',
        name: 'Transition All',
        description: 'Applies transition to all properties',
        tailwindClass: 'transition-all',
        cssEquivalent: 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Transitions all animatable properties'
      },
      {
        category: 'Transitions',
        name: 'Transition Colors',
        description: 'Applies transition to color properties',
        tailwindClass: 'transition-colors',
        cssEquivalent: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Transitions color-related properties'
      },
      {
        category: 'Transitions',
        name: 'Transition Opacity',
        description: 'Applies transition to opacity',
        tailwindClass: 'transition-opacity',
        cssEquivalent: 'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Smooth opacity changes'
      },
      {
        category: 'Transitions',
        name: 'Transition Shadow',
        description: 'Applies transition to box-shadow',
        tailwindClass: 'transition-shadow',
        cssEquivalent: 'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Smooth shadow changes'
      },
      {
        category: 'Transitions',
        name: 'Transition Transform',
        description: 'Applies transition to transform',
        tailwindClass: 'transition-transform',
        cssEquivalent: 'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
        example: 'Smooth transform animations'
      },
      {
        category: 'Transitions',
        name: 'Duration 75',
        description: 'Sets transition duration to 75ms',
        tailwindClass: 'duration-75',
        cssEquivalent: 'transition-duration: 75ms;',
        example: 'Very fast transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 100',
        description: 'Sets transition duration to 100ms',
        tailwindClass: 'duration-100',
        cssEquivalent: 'transition-duration: 100ms;',
        example: 'Fast transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 150',
        description: 'Sets transition duration to 150ms',
        tailwindClass: 'duration-150',
        cssEquivalent: 'transition-duration: 150ms;',
        example: 'Default transition speed'
      },
      {
        category: 'Transitions',
        name: 'Duration 200',
        description: 'Sets transition duration to 200ms',
        tailwindClass: 'duration-200',
        cssEquivalent: 'transition-duration: 200ms;',
        example: 'Slightly slower transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 300',
        description: 'Sets transition duration to 300ms',
        tailwindClass: 'duration-300',
        cssEquivalent: 'transition-duration: 300ms;',
        example: 'Medium speed transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 500',
        description: 'Sets transition duration to 500ms',
        tailwindClass: 'duration-500',
        cssEquivalent: 'transition-duration: 500ms;',
        example: 'Slow transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 700',
        description: 'Sets transition duration to 700ms',
        tailwindClass: 'duration-700',
        cssEquivalent: 'transition-duration: 700ms;',
        example: 'Slower transition'
      },
      {
        category: 'Transitions',
        name: 'Duration 1000',
        description: 'Sets transition duration to 1000ms',
        tailwindClass: 'duration-1000',
        cssEquivalent: 'transition-duration: 1000ms;',
        example: 'Very slow transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 75',
        description: 'Sets transition delay to 75ms',
        tailwindClass: 'delay-75',
        cssEquivalent: 'transition-delay: 75ms;',
        example: 'Very short delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 100',
        description: 'Sets transition delay to 100ms',
        tailwindClass: 'delay-100',
        cssEquivalent: 'transition-delay: 100ms;',
        example: 'Short delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 150',
        description: 'Sets transition delay to 150ms',
        tailwindClass: 'delay-150',
        cssEquivalent: 'transition-delay: 150ms;',
        example: 'Default delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 200',
        description: 'Sets transition delay to 200ms',
        tailwindClass: 'delay-200',
        cssEquivalent: 'transition-delay: 200ms;',
        example: 'Slightly longer delay'
      },
      {
        category: 'Transitions',
        name: 'Delay 300',
        description: 'Sets transition delay to 300ms',
        tailwindClass: 'delay-300',
        cssEquivalent: 'transition-delay: 300ms;',
        example: 'Medium delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 500',
        description: 'Sets transition delay to 500ms',
        tailwindClass: 'delay-500',
        cssEquivalent: 'transition-delay: 500ms;',
        example: 'Long delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 700',
        description: 'Sets transition delay to 700ms',
        tailwindClass: 'delay-700',
        cssEquivalent: 'transition-delay: 700ms;',
        example: 'Longer delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Delay 1000',
        description: 'Sets transition delay to 1000ms',
        tailwindClass: 'delay-1000',
        cssEquivalent: 'transition-delay: 1000ms;',
        example: 'Very long delay before transition'
      },
      {
        category: 'Transitions',
        name: 'Ease Linear',
        description: 'Sets linear timing function',
        tailwindClass: 'ease-linear',
        cssEquivalent: 'transition-timing-function: linear;',
        example: 'Constant speed transition'
      },
      {
        category: 'Transitions',
        name: 'Ease In',
        description: 'Sets ease-in timing function',
        tailwindClass: 'ease-in',
        cssEquivalent: 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
        example: 'Slow start, then fast'
      },
      {
        category: 'Transitions',
        name: 'Ease Out',
        description: 'Sets ease-out timing function',
        tailwindClass: 'ease-out',
        cssEquivalent: 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
        example: 'Fast start, then slow'
      },
      {
        category: 'Transitions',
        name: 'Ease In Out',
        description: 'Sets ease-in-out timing function',
        tailwindClass: 'ease-in-out',
        cssEquivalent: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
        example: 'Slow start and end, fast middle'
      }
    ]
  },
  {
    name: 'Background',
    description: 'Utilities for controlling background properties',
    classes: [
      {
        category: 'Background',
        name: 'Background Auto',
        description: 'Sets background size to auto',
        tailwindClass: 'bg-auto',
        cssEquivalent: 'background-size: auto;',
        example: 'Natural background image size'
      },
      {
        category: 'Background',
        name: 'Background Cover',
        description: 'Sets background size to cover',
        tailwindClass: 'bg-cover',
        cssEquivalent: 'background-size: cover;',
        example: 'Scales background to cover container'
      },
      {
        category: 'Background',
        name: 'Background Contain',
        description: 'Sets background size to contain',
        tailwindClass: 'bg-contain',
        cssEquivalent: 'background-size: contain;',
        example: 'Scales background to fit within container'
      },
      {
        category: 'Background',
        name: 'Background Center',
        description: 'Centers background image',
        tailwindClass: 'bg-center',
        cssEquivalent: 'background-position: center;',
        example: 'Centers background image'
      },
      {
        category: 'Background',
        name: 'Background Top',
        description: 'Positions background at top',
        tailwindClass: 'bg-top',
        cssEquivalent: 'background-position: top;',
        example: 'Positions background at top'
      },
      {
        category: 'Background',
        name: 'Background Bottom',
        description: 'Positions background at bottom',
        tailwindClass: 'bg-bottom',
        cssEquivalent: 'background-position: bottom;',
        example: 'Positions background at bottom'
      },
      {
        category: 'Background',
        name: 'Background Left',
        description: 'Positions background at left',
        tailwindClass: 'bg-left',
        cssEquivalent: 'background-position: left;',
        example: 'Positions background at left'
      },
      {
        category: 'Background',
        name: 'Background Right',
        description: 'Positions background at right',
        tailwindClass: 'bg-right',
        cssEquivalent: 'background-position: right;',
        example: 'Positions background at right'
      },
      {
        category: 'Background',
        name: 'Background Fixed',
        description: 'Sets background attachment to fixed',
        tailwindClass: 'bg-fixed',
        cssEquivalent: 'background-attachment: fixed;',
        example: 'Background stays fixed during scroll'
      },
      {
        category: 'Background',
        name: 'Background Local',
        description: 'Sets background attachment to local',
        tailwindClass: 'bg-local',
        cssEquivalent: 'background-attachment: local;',
        example: 'Background scrolls with content'
      },
      {
        category: 'Background',
        name: 'Background Scroll',
        description: 'Sets background attachment to scroll',
        tailwindClass: 'bg-scroll',
        cssEquivalent: 'background-attachment: scroll;',
        example: 'Background scrolls with viewport'
      },
      {
        category: 'Background',
        name: 'Background No Repeat',
        description: 'Prevents background repetition',
        tailwindClass: 'bg-no-repeat',
        cssEquivalent: 'background-repeat: no-repeat;',
        example: 'Background appears once'
      },
      {
        category: 'Background',
        name: 'Background Repeat',
        description: 'Repeats background in both directions',
        tailwindClass: 'bg-repeat',
        cssEquivalent: 'background-repeat: repeat;',
        example: 'Background tiles in both directions'
      },
      {
        category: 'Background',
        name: 'Background Repeat X',
        description: 'Repeats background horizontally',
        tailwindClass: 'bg-repeat-x',
        cssEquivalent: 'background-repeat: repeat-x;',
        example: 'Background repeats horizontally'
      },
      {
        category: 'Background',
        name: 'Background Repeat Y',
        description: 'Repeats background vertically',
        tailwindClass: 'bg-repeat-y',
        cssEquivalent: 'background-repeat: repeat-y;',
        example: 'Background repeats vertically'
      }
    ]
  },
  {
    name: 'Colors',
    description: 'Comprehensive color utilities for backgrounds, text, and borders',
    classes: [
      // Background Colors
      {
        category: 'Colors',
        name: 'Background Transparent',
        description: 'Sets background to transparent',
        tailwindClass: 'bg-transparent',
        cssEquivalent: 'background-color: transparent;',
        example: 'Transparent background'
      },
      {
        category: 'Colors',
        name: 'Background Current',
        description: 'Sets background to current text color',
        tailwindClass: 'bg-current',
        cssEquivalent: 'background-color: currentColor;',
        example: 'Background matches text color'
      },
      {
        category: 'Colors',
        name: 'Background Black',
        description: 'Sets background to black',
        tailwindClass: 'bg-black',
        cssEquivalent: 'background-color: #000000;',
        example: 'Pure black background'
      },
      {
        category: 'Colors',
        name: 'Background White',
        description: 'Sets background to white',
        tailwindClass: 'bg-white',
        cssEquivalent: 'background-color: #ffffff;',
        example: 'Pure white background'
      },
      {
        category: 'Colors',
        name: 'Background Gray 50',
        description: 'Very light gray background',
        tailwindClass: 'bg-gray-50',
        cssEquivalent: 'background-color: #f9fafb;',
        example: 'Very light gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 100',
        description: 'Light gray background',
        tailwindClass: 'bg-gray-100',
        cssEquivalent: 'background-color: #f3f4f6;',
        example: 'Light gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 200',
        description: 'Lighter gray background',
        tailwindClass: 'bg-gray-200',
        cssEquivalent: 'background-color: #e5e7eb;',
        example: 'Lighter gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 300',
        description: 'Medium light gray background',
        tailwindClass: 'bg-gray-300',
        cssEquivalent: 'background-color: #d1d5db;',
        example: 'Medium light gray'
      },
      {
        category: 'Colors',
        name: 'Background Gray 400',
        description: 'Medium gray background',
        tailwindClass: 'bg-gray-400',
        cssEquivalent: 'background-color: #9ca3af;',
        example: 'Medium gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 500',
        description: 'Medium dark gray background',
        tailwindClass: 'bg-gray-500',
        cssEquivalent: 'background-color: #6b7280;',
        example: 'Medium dark gray'
      },
      {
        category: 'Colors',
        name: 'Background Gray 600',
        description: 'Dark gray background',
        tailwindClass: 'bg-gray-600',
        cssEquivalent: 'background-color: #4b5563;',
        example: 'Dark gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 700',
        description: 'Darker gray background',
        tailwindClass: 'bg-gray-700',
        cssEquivalent: 'background-color: #374151;',
        example: 'Darker gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Gray 800',
        description: 'Very dark gray background',
        tailwindClass: 'bg-gray-800',
        cssEquivalent: 'background-color: #1f2937;',
        example: 'Very dark gray'
      },
      {
        category: 'Colors',
        name: 'Background Gray 900',
        description: 'Darkest gray background',
        tailwindClass: 'bg-gray-900',
        cssEquivalent: 'background-color: #111827;',
        example: 'Darkest gray shade'
      },
      {
        category: 'Colors',
        name: 'Background Red 100',
        description: 'Light red background',
        tailwindClass: 'bg-red-100',
        cssEquivalent: 'background-color: #fee2e2;',
        example: 'Light red shade'
      },
      {
        category: 'Colors',
        name: 'Background Red 500',
        description: 'Medium red background',
        tailwindClass: 'bg-red-500',
        cssEquivalent: 'background-color: #ef4444;',
        example: 'Standard red color'
      },
      {
        category: 'Colors',
        name: 'Background Red 900',
        description: 'Dark red background',
        tailwindClass: 'bg-red-900',
        cssEquivalent: 'background-color: #7f1d1d;',
        example: 'Dark red shade'
      },
      {
        category: 'Colors',
        name: 'Background Blue 100',
        description: 'Light blue background',
        tailwindClass: 'bg-blue-100',
        cssEquivalent: 'background-color: #dbeafe;',
        example: 'Light blue shade'
      },
      {
        category: 'Colors',
        name: 'Background Blue 500',
        description: 'Medium blue background',
        tailwindClass: 'bg-blue-500',
        cssEquivalent: 'background-color: #3b82f6;',
        example: 'Standard blue color'
      },
      {
        category: 'Colors',
        name: 'Background Blue 900',
        description: 'Dark blue background',
        tailwindClass: 'bg-blue-900',
        cssEquivalent: 'background-color: #1e3a8a;',
        example: 'Dark blue shade'
      },
      {
        category: 'Colors',
        name: 'Background Green 100',
        description: 'Light green background',
        tailwindClass: 'bg-green-100',
        cssEquivalent: 'background-color: #dcfce7;',
        example: 'Light green shade'
      },
      {
        category: 'Colors',
        name: 'Background Green 500',
        description: 'Medium green background',
        tailwindClass: 'bg-green-500',
        cssEquivalent: 'background-color: #22c55e;',
        example: 'Standard green color'
      },
      {
        category: 'Colors',
        name: 'Background Green 900',
        description: 'Dark green background',
        tailwindClass: 'bg-green-900',
        cssEquivalent: 'background-color: #14532d;',
        example: 'Dark green shade'
      },
      {
        category: 'Colors',
        name: 'Background Yellow 100',
        description: 'Light yellow background',
        tailwindClass: 'bg-yellow-100',
        cssEquivalent: 'background-color: #fef3c7;',
        example: 'Light yellow shade'
      },
      {
        category: 'Colors',
        name: 'Background Yellow 500',
        description: 'Medium yellow background',
        tailwindClass: 'bg-yellow-500',
        cssEquivalent: 'background-color: #eab308;',
        example: 'Standard yellow color'
      },
      {
        category: 'Colors',
        name: 'Background Purple 100',
        description: 'Light purple background',
        tailwindClass: 'bg-purple-100',
        cssEquivalent: 'background-color: #f3e8ff;',
        example: 'Light purple shade'
      },
      {
        category: 'Colors',
        name: 'Background Purple 500',
        description: 'Medium purple background',
        tailwindClass: 'bg-purple-500',
        cssEquivalent: 'background-color: #a855f7;',
        example: 'Standard purple color'
      },
      {
        category: 'Colors',
        name: 'Background Pink 100',
        description: 'Light pink background',
        tailwindClass: 'bg-pink-100',
        cssEquivalent: 'background-color: #fce7f3;',
        example: 'Light pink shade'
      },
      {
        category: 'Colors',
        name: 'Background Pink 500',
        description: 'Medium pink background',
        tailwindClass: 'bg-pink-500',
        cssEquivalent: 'background-color: #ec4899;',
        example: 'Standard pink color'
      },
      {
        category: 'Colors',
        name: 'Background Indigo 100',
        description: 'Light indigo background',
        tailwindClass: 'bg-indigo-100',
        cssEquivalent: 'background-color: #e0e7ff;',
        example: 'Light indigo shade'
      },
      {
        category: 'Colors',
        name: 'Background Indigo 500',
        description: 'Medium indigo background',
        tailwindClass: 'bg-indigo-500',
        cssEquivalent: 'background-color: #6366f1;',
        example: 'Standard indigo color'
      },
      // Text Colors
      {
        category: 'Colors',
        name: 'Text Black',
        description: 'Sets text color to black',
        tailwindClass: 'text-black',
        cssEquivalent: 'color: #000000;',
        example: 'Black text color'
      },
      {
        category: 'Colors',
        name: 'Text White',
        description: 'Sets text color to white',
        tailwindClass: 'text-white',
        cssEquivalent: 'color: #ffffff;',
        example: 'White text color'
      },
      {
        category: 'Colors',
        name: 'Text Gray 500',
        description: 'Medium gray text',
        tailwindClass: 'text-gray-500',
        cssEquivalent: 'color: #6b7280;',
        example: 'Medium gray text'
      },
      {
        category: 'Colors',
        name: 'Text Gray 700',
        description: 'Dark gray text',
        tailwindClass: 'text-gray-700',
        cssEquivalent: 'color: #374151;',
        example: 'Dark gray text'
      },
      {
        category: 'Colors',
        name: 'Text Gray 900',
        description: 'Very dark gray text',
        tailwindClass: 'text-gray-900',
        cssEquivalent: 'color: #111827;',
        example: 'Very dark text'
      },
      {
        category: 'Colors',
        name: 'Text Blue 500',
        description: 'Blue text color',
        tailwindClass: 'text-blue-500',
        cssEquivalent: 'color: #3b82f6;',
        example: 'Blue text for links'
      },
      {
        category: 'Colors',
        name: 'Text Red 500',
        description: 'Red text color',
        tailwindClass: 'text-red-500',
        cssEquivalent: 'color: #ef4444;',
        example: 'Red text for errors'
      },
      {
        category: 'Colors',
        name: 'Text Green 500',
        description: 'Green text color',
        tailwindClass: 'text-green-500',
        cssEquivalent: 'color: #22c55e;',
        example: 'Green text for success'
      },
      {
        category: 'Colors',
        name: 'Text Yellow 500',
        description: 'Yellow text color',
        tailwindClass: 'text-yellow-500',
        cssEquivalent: 'color: #eab308;',
        example: 'Yellow text for warnings'
      }
    ]
  },
  {
    name: 'Shadows',
    description: 'Utilities for controlling box shadows',
    classes: [
      {
        category: 'Shadows',
        name: 'Shadow None',
        description: 'Removes box shadow',
        tailwindClass: 'shadow-none',
        cssEquivalent: 'box-shadow: none;',
        example: 'No shadow effect'
      },
      {
        category: 'Shadows',
        name: 'Shadow XS',
        description: 'Extra small shadow',
        tailwindClass: 'shadow-xs',
        cssEquivalent: 'box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);',
        example: 'Very subtle shadow outline'
      },
      {
        category: 'Shadows',
        name: 'Shadow SM',
        description: 'Small shadow',
        tailwindClass: 'shadow-sm',
        cssEquivalent: 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);',
        example: 'Small subtle shadow'
      },
      {
        category: 'Shadows',
        name: 'Shadow',
        description: 'Default shadow',
        tailwindClass: 'shadow',
        cssEquivalent: 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);',
        example: 'Standard shadow'
      },
      {
        category: 'Shadows',
        name: 'Shadow MD',
        description: 'Medium shadow',
        tailwindClass: 'shadow-md',
        cssEquivalent: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
        example: 'Medium shadow depth'
      },
      {
        category: 'Shadows',
        name: 'Shadow LG',
        description: 'Large shadow',
        tailwindClass: 'shadow-lg',
        cssEquivalent: 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
        example: 'Large shadow for elevation'
      },
      {
        category: 'Shadows',
        name: 'Shadow XL',
        description: 'Extra large shadow',
        tailwindClass: 'shadow-xl',
        cssEquivalent: 'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);',
        example: 'Extra large shadow'
      },
      {
        category: 'Shadows',
        name: 'Shadow 2XL',
        description: '2x extra large shadow',
        tailwindClass: 'shadow-2xl',
        cssEquivalent: 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);',
        example: 'Very large shadow'
      },
      {
        category: 'Shadows',
        name: 'Shadow Inner',
        description: 'Inner shadow (inset)',
        tailwindClass: 'shadow-inner',
        cssEquivalent: 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);',
        example: 'Inset shadow effect'
      }
    ]
  },
  {
    name: 'Opacity',
    description: 'Utilities for controlling element opacity',
    classes: [
      {
        category: 'Opacity',
        name: 'Opacity 0',
        description: 'Completely transparent',
        tailwindClass: 'opacity-0',
        cssEquivalent: 'opacity: 0;',
        example: 'Invisible element'
      },
      {
        category: 'Opacity',
        name: 'Opacity 10',
        description: '10% opacity',
        tailwindClass: 'opacity-10',
        cssEquivalent: 'opacity: 0.1;',
        example: 'Very faint visibility'
      },
      {
        category: 'Opacity',
        name: 'Opacity 25',
        description: '25% opacity',
        tailwindClass: 'opacity-25',
        cssEquivalent: 'opacity: 0.25;',
        example: 'Low opacity'
      },
      {
        category: 'Opacity',
        name: 'Opacity 50',
        description: '50% opacity',
        tailwindClass: 'opacity-50',
        cssEquivalent: 'opacity: 0.5;',
        example: 'Half transparent'
      },
      {
        category: 'Opacity',
        name: 'Opacity 75',
        description: '75% opacity',
        tailwindClass: 'opacity-75',
        cssEquivalent: 'opacity: 0.75;',
        example: 'Mostly opaque'
      },
      {
        category: 'Opacity',
        name: 'Opacity 100',
        description: 'Completely opaque',
        tailwindClass: 'opacity-100',
        cssEquivalent: 'opacity: 1;',
        example: 'Fully visible element'
      }
    ]
  },
  {
    name: 'Button Components',
    description: 'Common button styles and interactions',
    classes: [
      {
        category: 'Button Components',
        name: 'Button Primary',
        description: 'Primary button styling',
        tailwindClass: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        cssEquivalent: 'background-color: #3b82f6; color: white; font-weight: 700; padding: 0.5rem 1rem; border-radius: 0.25rem;',
        example: 'Standard primary action button'
      },
      {
        category: 'Button Components',
        name: 'Button Secondary',
        description: 'Secondary button styling',
        tailwindClass: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
        cssEquivalent: 'background-color: #6b7280; color: white; font-weight: 700; padding: 0.5rem 1rem; border-radius: 0.25rem;',
        example: 'Secondary action button'
      },
      {
        category: 'Button Components',
        name: 'Button Outline',
        description: 'Outline button styling',
        tailwindClass: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
        cssEquivalent: 'background-color: transparent; color: #1d4ed8; font-weight: 600; padding: 0.5rem 1rem; border: 1px solid #3b82f6; border-radius: 0.25rem;',
        example: 'Outlined button with hover fill'
      },
      {
        category: 'Button Components',
        name: 'Button Disabled',
        description: 'Disabled button styling',
        tailwindClass: 'bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed',
        cssEquivalent: 'background-color: #d1d5db; color: #6b7280; font-weight: 700; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: not-allowed;',
        example: 'Non-interactive disabled button'
      },
      {
        category: 'Button Components',
        name: 'Button Small',
        description: 'Small button sizing',
        tailwindClass: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-sm rounded',
        cssEquivalent: 'background-color: #3b82f6; color: white; font-weight: 700; padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: 0.25rem;',
        example: 'Compact button for tight spaces'
      },
      {
        category: 'Button Components',
        name: 'Button Large',
        description: 'Large button sizing',
        tailwindClass: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded',
        cssEquivalent: 'background-color: #3b82f6; color: white; font-weight: 700; padding: 0.75rem 1.5rem; font-size: 1.125rem; border-radius: 0.25rem;',
        example: 'Prominent button for main actions'
      },
      {
        category: 'Button Components',
        name: 'Button Rounded',
        description: 'Fully rounded button',
        tailwindClass: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
        cssEquivalent: 'background-color: #3b82f6; color: white; font-weight: 700; padding: 0.5rem 1rem; border-radius: 9999px;',
        example: 'Pill-shaped button'
      },
      {
        category: 'Button Components',
        name: 'Button Icon',
        description: 'Icon-only button',
        tailwindClass: 'bg-blue-500 hover:bg-blue-700 text-white p-2 rounded',
        cssEquivalent: 'background-color: #3b82f6; color: white; padding: 0.5rem; border-radius: 0.25rem;',
        example: 'Square button for icons'
      }
    ]
  }
];

// UI Components
export const componentCategories: TailwindCategory[] = [
  {
    name: 'Navigation Components',
    description: 'Header, navbar, sidebar, and navigation components',
    classes: [
      {
        category: 'Navigation',
        name: 'Header',
        description: 'Basic header with logo and navigation',
        tailwindClass: 'bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between',
        cssEquivalent: 'background-color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); border-bottom: 1px solid #e5e7eb; padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between;',
        code: `<header class="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
  <div class="flex items-center space-x-4">
    <img src="/logo.png" alt="Logo" class="h-8 w-8">
    <span class="text-xl font-semibold text-gray-900">Brand Name</span>
  </div>
  <nav class="hidden md:flex items-center space-x-6">
    <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
    <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
    <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>
    <a href="#" class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
  </nav>
  <button class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</header>`
      },
      {
        category: 'Navigation',
        name: 'Navbar',
        description: 'Responsive navigation bar with dropdown menu',
        tailwindClass: 'bg-blue-600 text-white shadow-lg',
        cssEquivalent: 'background-color: #2563eb; color: #ffffff; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);',
        code: `<nav class="bg-blue-600 text-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="h-8 w-8" src="/logo.png" alt="Logo">
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 text-white">Dashboard</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white">Team</a>
            <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white">Projects</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`
      },
      {
        category: 'Navigation',
        name: 'Sidebar',
        description: 'Collapsible sidebar navigation',
        tailwindClass: 'bg-gray-800 text-white w-64 min-h-screen p-4',
        cssEquivalent: 'background-color: #1f2937; color: #ffffff; width: 16rem; min-height: 100vh; padding: 1rem;',
        code: `<aside class="bg-gray-800 text-white w-64 min-h-screen p-4">
  <div class="flex items-center mb-8">
    <img src="/logo.png" alt="Logo" class="h-8 w-8 mr-3">
    <span class="text-xl font-semibold">Dashboard</span>
  </div>
  <nav class="space-y-2">
    <a href="#" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
      <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
      </svg>
      Dashboard
    </a>
    <a href="#" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
      <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
      </svg>
      Users
    </a>
    <a href="#" class="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg">
      <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z"></path>
      </svg>
      Projects
    </a>
  </nav>
</aside>`
      }
    ]
  },
  {
    name: 'Button Components',
    description: 'Various button styles and states',
    classes: [
      {
        category: 'Buttons',
        name: 'Primary Button',
        description: 'Main action button with blue background',
        tailwindClass: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded',
        cssEquivalent: 'background-color: #2563eb; color: #ffffff; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; &:hover { background-color: #1d4ed8; }',
        code: `<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
  Primary Button
</button>`
      },
      {
        category: 'Buttons',
        name: 'Secondary Button',
        description: 'Secondary action button with gray background',
        tailwindClass: 'bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded',
        cssEquivalent: 'background-color: #4b5563; color: #ffffff; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; &:hover { background-color: #374151; }',
        code: `<button class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
  Secondary Button
</button>`
      },
      {
        category: 'Buttons',
        name: 'Outline Button',
        description: 'Button with border and no background',
        tailwindClass: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded',
        cssEquivalent: 'border: 2px solid #2563eb; color: #2563eb; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; &:hover { background-color: #2563eb; color: #ffffff; }',
        code: `<button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded transition-all duration-200">
  Outline Button
</button>`
      },
      {
        category: 'Buttons',
        name: 'Disabled Button',
        description: 'Disabled state button',
        tailwindClass: 'bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded cursor-not-allowed opacity-50',
        cssEquivalent: 'background-color: #9ca3af; color: #374151; font-weight: 600; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: not-allowed; opacity: 0.5;',
        code: `<button disabled class="bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded cursor-not-allowed opacity-50">
  Disabled Button
</button>`
      }
    ]
  },
  {
    name: 'Card Components',
    description: 'Various card layouts and styles',
    classes: [
      {
        category: 'Cards',
        name: 'Basic Card',
        description: 'Simple card with shadow and rounded corners',
        tailwindClass: 'bg-white rounded-lg shadow-md p-6',
        cssEquivalent: 'background-color: #ffffff; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); padding: 1.5rem;',
        code: `<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
  <p class="text-gray-600 mb-4">This is a basic card component with some sample content to demonstrate the layout and styling.</p>
  <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Learn More</button>
</div>`
      },
      {
        category: 'Cards',
        name: 'Product Card',
        description: 'Card designed for product display',
        tailwindClass: 'bg-white rounded-lg shadow-lg overflow-hidden',
        cssEquivalent: 'background-color: #ffffff; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); overflow: hidden;',
        code: `<div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
  <img src="/product.jpg" alt="Product" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">Product Name</h3>
    <p class="text-gray-600 mb-4">Product description goes here. This is a sample description.</p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold text-blue-600">$99.99</span>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    name: 'Form Components',
    description: 'Form inputs, selects, and form layouts',
    classes: [
      {
        category: 'Forms',
        name: 'Input Field',
        description: 'Styled text input with label',
        tailwindClass: 'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
        cssEquivalent: 'display: block; width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);',
        code: `<div class="mb-4">
  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
  <input type="email" id="email" name="email" 
         class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
         placeholder="Enter your email">
</div>`
      },
      {
        category: 'Forms',
        name: 'Select Dropdown',
        description: 'Styled select dropdown',
        tailwindClass: 'block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
        cssEquivalent: 'display: block; width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; background-color: #ffffff; border-radius: 0.375rem;',
        code: `<div class="mb-4">
  <label for="country" class="block text-sm font-medium text-gray-700 mb-2">Country</label>
  <select id="country" name="country" 
          class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
    <option>United Kingdom</option>
    <option>Germany</option>
  </select>
</div>`
      }
    ]
  }
];

// Page Templates
export const pageCategories: TailwindCategory[] = [
  {
    name: 'Authentication Pages',
    description: 'Login, register, and authentication related pages',
    classes: [
      {
        category: 'Auth Pages',
        name: 'Login Page',
        description: 'Complete login page layout',
        tailwindClass: 'min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8',
        cssEquivalent: 'min-height: 100vh; background-color: #f9fafb; display: flex; flex-direction: column; justify-content: center; padding: 3rem 1.5rem;',
        code: `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="/logo.png" alt="Company Logo">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <a href="#" class="font-medium text-blue-600 hover:text-blue-500">start your 14-day free trial</a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Enter your email">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Enter your password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
                   class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`
      },
      {
        category: 'Auth Pages',
        name: 'Register Page',
        description: 'Complete registration page layout',
        tailwindClass: 'min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8',
        cssEquivalent: 'min-height: 100vh; background-color: #f9fafb; display: flex; flex-direction: column; justify-content: center; padding: 3rem 1.5rem;',
        code: `<div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img class="mx-auto h-12 w-auto" src="/logo.png" alt="Company Logo">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Or
      <a href="#" class="font-medium text-blue-600 hover:text-blue-500">sign in to your existing account</a>
    </p>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <div class="mt-1">
            <input id="firstName" name="firstName" type="text" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Enter your first name">
          </div>
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <div class="mt-1">
            <input id="lastName" name="lastName" type="text" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Enter your last name">
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Enter your email">
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input id="password" name="password" type="password" required
                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                   placeholder="Create a password">
          </div>
        </div>

        <div>
          <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    name: 'Dashboard Pages',
    description: 'Dashboard, list, and data display pages',
    classes: [
      {
        category: 'Dashboard',
        name: 'List Page',
        description: 'Data list page with table and pagination',
        tailwindClass: 'bg-gray-50 min-h-screen py-8',
        cssEquivalent: 'background-color: #f9fafb; min-height: 100vh; padding: 2rem 0;',
        code: `<div class="bg-gray-50 min-h-screen py-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Users
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Export
        </button>
        <button type="button"
                class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add User
        </button>
      </div>
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th class="relative px-6 py-3"><span class="sr-only">Edit</span></th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
      }
    ]
  }
];

// Backward compatibility
export const TAILWIND_DATA: TailwindCategory[] = tailwindCategories;
