import { BreadCrumbProps } from '../../../components/BreadCrumb/BreadCrumb';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: BreadCrumbProps = {
  rendering: { componentName: 'BreadCrumb', dataSource: 'dummydataSource' },
  fields: {
    path:"Home/Training/FED/CSS"
  },
  params: {},
};

export const noData = {
  render: {},
};

export default defaultData;
