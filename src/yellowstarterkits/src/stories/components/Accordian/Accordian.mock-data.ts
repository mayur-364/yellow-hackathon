// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: any = {
  rendering: { componentName: 'Accordian', dataSource: 'dummydataSource' },
  fields: {
    title: 'Accordion Title',
    technologies: [
      {
        id: 1,
        title: 'Programming Languages',
        items: [
          {
            name: 'JavaScript',
            description:
              'JavaScript is a popular programming language commonly used for web development.',
          },
          {
            name: 'Python',
            description:
              'Python is a versatile programming language known for its simplicity and readability.',
          },
          {
            name: 'Java',
            description:
              'Java is a widely-used programming language known for its portability and robustness.',
          },
        ],
      },
      {
        id: 2,
        title: 'Frontend Frameworks',
        items: [
          {
            name: 'React',
            description:
              'React is a JavaScript library for building user interfaces, developed by Facebook.',
          },
          {
            name: 'Vue.js',
            description:
              'Vue.js is a progressive JavaScript framework for building interactive web interfaces.',
          },
          {
            name: 'Angular',
            description:
              'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
          },
        ],
      },
      {
        id: 3,
        title: 'Backend Frameworks',
        items: [
          {
            name: 'Node.js',
            description:
              "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable server-side applications.",
          },
          {
            name: 'Django',
            description:
              'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
          },
          {
            name: 'Spring Boot',
            description:
              'Spring Boot is an open-source Java-based framework used to create microservices.',
          },
        ],
      },
    ],
  },
  params: {},
};
export const noData = {
  render: {},
};
export default defaultData;
