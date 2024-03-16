import React from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type CardsProps = ComponentProps & {
  fields: {
    numberOfCards : string,
    title: string,
    description : string,
    cards: {
      id: number;
      title: string;
      description: string;
      imageUrl: string;
      link:string;
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
    <div className='lg:container'>
    <div className="text-center">
        <h1 className='text-4xl'>{fields.title}</h1>
        <p className='p-10'>{fields.description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayCards .map(card => (
        <div key={card.id} className="relative bg-white cursor-pointer rounded-lg overflow-hidden shadow-md">
          <img className="w-full h-full  " src={card.imageUrl} alt={card.title} />
          <div className="absolute inset-0 flex flex-col justify-end p-4 text-center ">
            <h2 className=" text-white">{card.title}</h2>
            <p className="text-gray-200">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
)};

export default withDatasourceCheck()<CardsProps>(Cards);





