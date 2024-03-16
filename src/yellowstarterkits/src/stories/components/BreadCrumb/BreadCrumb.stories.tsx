// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from '../../../lib/object-parser';
import { BreadCrumb, BreadCrumbProps } from '../../../components/BreadCrumb/BreadCrumb';
import defaultData from './BreadCrumb.mock-data';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/BreadCrumb',
  component: BreadCrumb,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  render: (args) => {
    return <BreadCrumb {...(expandObj({ ...args }) as BreadCrumbProps)} />;
  },

  args: {
    ...flattenObj(defaultData),
  },
};
