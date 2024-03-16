// Global
import type { Meta, StoryObj } from '@storybook/react';
import ImageWrapper from '../../../../src/components/helper/ImageWrapper/ImageWrapper';
import defaultData from './ImageWrapper.mock-data';

const meta: Meta<typeof ImageWrapper> = {
  argTypes: {},
  component: ImageWrapper,
  tags: ['autodocs'],
  title: 'Helpers/ImageWrapper',
};

export default meta;

type Story = StoryObj<typeof ImageWrapper>;

export const Default: Story = {
  args: {
    ...defaultData,
  },
};
