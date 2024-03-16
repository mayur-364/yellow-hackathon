/**
 * Generates React boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentSrc(componentName: string): string {
  return `import React from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type ${componentName}Props = ComponentProps & {
  fields: NonNullable<unknown>;
};

export const ${componentName} = (props: ${componentName}Props): JSX.Element => {
  console.log('props', props);
  return <div>${componentName}</div>;
};

export default withDatasourceCheck()<${componentName}Props>(${componentName});
`;
}

export default generateComponentSrc;
