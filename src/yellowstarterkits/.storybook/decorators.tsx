
// Global
import React from 'react';
import { SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { Decorator } from '@storybook/react';
// Lib
import { mockSitecoreContext } from '../src/lib/testing/mock';
export const componentGlobalWrapper: Decorator = (Story) => (
  <SitecoreContextReactContext.Provider value={mockSitecoreContext}>
    <div>
      <Story />
    </div>
  </SitecoreContextReactContext.Provider>
);
