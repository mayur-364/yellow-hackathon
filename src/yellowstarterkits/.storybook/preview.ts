
import type { Preview } from '@storybook/react';
import { componentGlobalWrapper } from './decorators';
// import css
import '../src/assets/styles/global.css';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export const decorators = [componentGlobalWrapper];
export default preview;
