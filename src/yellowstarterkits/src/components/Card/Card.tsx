import React from 'react';
import {
  ImageField,
  LinkField,
  RichText,
  RichTextField,
  TextField,
  withDatasourceCheck,
  Text,
  Image,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type GenericCardsProps = ComponentProps & {
  fields: {
    cards: Card[];
    headlineText: TextField;
    body: RichTextField;
    numberOfCards: string;
  };
};

type Card = {
  fields: {
    headlineText: TextField;
    cta1Link: LinkField;
    primaryImage: ImageField;
    body: Field<string>;
  };
};

export const Card = (props: GenericCardsProps): JSX.Element => {
  const { fields } = props;
  //const numCards = parseInt(fields?.numberOfCards || '0');
  //const displayCards = fields?.cards.slice(0, numCards);

  return (
    <div className="lg:container bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <Text field={fields?.headlineText} />
        </h1>
        <div className="text-lg text-gray-600">
          <RichText field={fields?.body} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {fields?.cards?.map((card, i) => (
          <div
            key={i}
            className="relative bg-white cursor-pointer rounded-lg overflow-hidden shadow-md mx-2 mb-5"
            style={{ maxWidth: '250px' }}
          >
            <Image field={card?.fields?.primaryImage} />
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-center bg-black bg-opacity-40">
              <h2 className="text-white text-lg font-semibold mb-2">
                <Text field={card?.fields?.headlineText} />
              </h2>
              <div className="text-gray-200 text-sm">
                <RichText field={card?.fields?.body} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withDatasourceCheck()(Card);
