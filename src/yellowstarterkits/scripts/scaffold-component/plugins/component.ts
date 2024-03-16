import path from 'path';
import { scaffoldFile } from '@sitecore-jss/sitecore-jss-dev-tools';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';

/**
 * Generates the component file.
 */
class ComponentPlugin implements ScaffoldComponentPlugin {
  order = 99;

  exec(config: ScaffoldComponentPluginConfig) {
    const { componentName, componentPath } = config;
    //#region Component src configs
    const filename = `${componentName}.tsx`;
    const componentRoot = componentPath.startsWith('src/') ? '' : `src/components/${componentName}`;
    const outputFilePath = path.join(componentRoot, componentPath, filename);
    const template = config.componentTemplateGenerator(componentName);
    const componentOutputPath = scaffoldFile(outputFilePath, template);
    //#endregion

    //#region Component story config
    const storyFileName = `${componentName}.stories.tsx`;
    const storyRoot = 'src/stories/components/';
    const outputStoryFilePath = path.join(storyRoot, componentName, storyFileName);
    const storyTemplate = config.storyTemplateGenerator(componentName);
    const storyOutputPath = scaffoldFile(outputStoryFilePath, storyTemplate);
    //#endregion

    //#region Component mock config
    const mockFileName = `${componentName}.mock-data.ts`;
    const mockRoot = 'src/stories/components/';
    const outputMockFilePath = path.join(mockRoot, componentName, mockFileName);
    const mockTemplate = config.mockTemplateGenerator(componentName);
    const mockOutputPath = scaffoldFile(outputMockFilePath, mockTemplate);
    //#endregion

    return {
      ...config,
      componentOutputPath,
      storyOutputPath,
      mockOutputPath,
    };
  }
}

export const componentPlugin = new ComponentPlugin();
