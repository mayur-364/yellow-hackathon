import React from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
export type CardsProps = ComponentProps & {
  fields: {
    numberOfCards: string;
    title: string;
    description: string;
    cards: {
      id: number;
      title: string;
      description: string;
      imageUrl: string;
      link: string;
    }[];
  };
};
export const Cards = (props: CardsProps): JSX.Element => {
  const { fields } = props;
  const numCards = parseInt(props.fields.numberOfCards);
  const count = !isNaN(numCards) && numCards > 0 ? numCards : 0;
  const displayCards = fields.cards.slice(0, count);
  console.log('props', props);
  return (
    <div className="lg:container bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{fields.title}</h1>
        <p className="text-lg text-gray-600">{fields.description}</p>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {displayCards.map((card) => (
          <div
            key={card.id}
            className="relative bg-white cursor-pointer rounded-lg overflow-hidden shadow-md mx-2 mb-5"
            style={{ maxWidth: '250px' }}
          >
            <img className="w-full h-full object-cover" src={card.imageUrl} alt={card.title} />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-center bg-black bg-opacity-40">
              <h2 className="text-white text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-200 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default withDatasourceCheck()<CardsProps>(Cards);
