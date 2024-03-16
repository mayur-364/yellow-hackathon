// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from '../../../lib/object-parser';
import { Tab, TabProps } from '../../../components/Tab/Tab';
import defaultData from './Tab.mock-data';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: (args) => {
    return <Tab {...(expandObj({ ...args }) as TabProps)} />;
  },

  args: {
    ...flattenObj(defaultData),
  },
};
