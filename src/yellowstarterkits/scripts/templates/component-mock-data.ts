/**
 * Generates component mock data boilerplate for a component under `src/stories/components/*`
 * @param componentName - the component name
 * @returns component mock data boilerplate as a string
 */
function generateComponentMockData(componentName: string): string {
  return `import { ${componentName}Props } from '../../../components/${componentName}/${componentName}';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: ${componentName}Props = {
  rendering: { componentName: '${componentName}', dataSource: 'dummydataSource' },
  fields: {},
  params: {},
};

export const noData = {
  render: {},
};

export default defaultData;
`;
}

export default generateComponentMockData;
