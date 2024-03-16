import { TabProps } from '../../../components/Tab/Tab';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: TabProps = {
  rendering: { componentName: 'Tab', dataSource: 'dummydataSource' },
  fields: {
    categories: ['All', 'New', 'Latest', 'Trending'],
    cards: [
      {
        id: 1,
        title: 'Mahindra',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'All',
      },
      {
        id: 2,
        title: 'Tata',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'New',
      },
      {
        id: 3,
        title: 'Volvo',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'Latest',
      },
      {
        id: 4,
        title: 'BMW',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'Trending',
      },
      {
        id: 5,
        title: 'sdlsd',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'New',
      },
      {
        id: 6,
        title: 'Tata',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'Latest',
      },
      {
        id: 7,
        title: 'BMW',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        CardCTA: {
          text: 'Explore Now',
          link: 'https://example.com',
        },
        category: 'Trending',
      },
    ],
  },
  params: {},
};

export const noData = {
  render: {},
};

export default defaultData;
