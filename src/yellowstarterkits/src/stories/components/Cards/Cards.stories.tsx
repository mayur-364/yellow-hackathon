// Global
import type { Meta, StoryObj } from '@storybook/react';

// Lib
import { expandObj, flattenObj } from '../../../lib/object-parser';
import { Cards, CardsProps } from '../../../components/Cards/Cards';
import defaultData from './Cards.mock-data';

const meta: Meta<typeof Cards> = {
  title: 'Components/Cards',
  component: Cards,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  render: (args) => {
    return <Cards {...(expandObj({ ...args }) as CardsProps)} />;
  },

  args: {
    ...flattenObj(defaultData),
  },
};
