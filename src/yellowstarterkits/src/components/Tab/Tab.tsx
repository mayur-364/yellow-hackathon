import React, { useState } from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
interface Card {
  id: number;
  title: string;
  category: string;
  description: string;
  CardCTA: {
    text: string;
    link: string;
  };
}
export type TabProps = ComponentProps & {
  fields: {
    categories: string[];
    cards: Card[];
  };
};
export const Tab = ({ fields }: TabProps): JSX.Element => {
  console.log('props', fields);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center md:justify-start -mx-1">
        {fields.categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`cursor-pointer border-b-2 border-b-[#787779] px-4 py-1 ${
              selectedCategory === category ? ' border-b-4 border-b-[#2F2D2E]' : ''
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-4 mt-4">
        {/* Render cards based on the selected category */}
        {fields.cards
          .filter((card) => selectedCategory === 'All' || card.category === selectedCategory)
          .map((card) => (
            <div
              key={card.id}
              className="border p-4 rounded bg-[#F0F0F0] hover:bg-[#70A29C] hover:text-white"
            >
              <h3 className="text-3xl font-semibold hover:font-bold">{card.title}</h3>
              <p className="text-gray-600 mb-2 ">{card.category}</p>
              <p className="text-gray-900 mb-2 font-semibold">{card.description}</p>
              <a href={card.CardCTA.link} className="text-blue-500 hover:underline">
                {card.CardCTA.text}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
export default withDatasourceCheck()(Tab);
