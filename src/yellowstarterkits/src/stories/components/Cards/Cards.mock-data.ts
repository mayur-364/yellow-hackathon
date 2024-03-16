
import { CardsProps } from '../../../components/Cards/Cards';

// Realistically this is going to have a lot more data from Sitecore or XM Cloud, but this is a good example mock data set.
const defaultData: CardsProps = {
  rendering: { componentName: 'Cards', dataSource: 'dummydataSource' },
  fields: {
      numberOfCards : "4",
      title: "TITLE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      cards: [
        {
          "id": 1,
          "title": "Card 1 Title",
          "description": "Card 1 Details",
          "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
          "link":"https://www.youtube.com/"
        },
        {
          "id": 2,
          "title": "Card 2 Title",
          "description": "Card 2 Details",
          "imageUrl": "https://images.template.net/wp-content/uploads/2015/11/21154815/Concept-Car-Design-Desktop-Backgrounds-Download.jpg?width=530",
          "link": "https://www.google.com/"
        },
        {
          "id": 3,
          "title": "Card 1 Title",
          "description": "Card 1 Details",
          "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
          "link":"https://www.youtube.com/"
        },
        {
          "id": 4,
          "title": "Card 2 Title",
          "description": "Card 2 Details",
          "imageUrl": "https://images.template.net/wp-content/uploads/2015/11/21154815/Concept-Car-Design-Desktop-Backgrounds-Download.jpg?width=530",
          "link": "https://www.google.com/"
        },
        {
          "id": 5,
          "title": "Card 1 Title",
          "description": "Card 1 Details",
          "imageUrl": "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
          "link":"https://www.youtube.com/"
        }
      ]
    
},
  params: {},
};

export const noData = {
  render: {},
};

export default defaultData;
