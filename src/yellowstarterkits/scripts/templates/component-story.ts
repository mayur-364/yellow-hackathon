/**
 * Generates component story boilerplate for a component under `src/stories/components/*`
 * @param componentName - the component name
 * @returns component story boilerplate as a string
 */
function generateComponentStory(componentName: string): string {
  return `// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from '../../../lib/object-parser';
import { ${componentName}, ${componentName}Props } from '../../../components/${componentName}/${componentName}';
import defaultData from './${componentName}.mock-data';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  render: (args) => {
    return <${componentName} {...(expandObj({ ...args }) as ${componentName}Props)} />;
  },

  args: {
    ...flattenObj(defaultData),
  },
};
`;
}

export default generateComponentStory;
