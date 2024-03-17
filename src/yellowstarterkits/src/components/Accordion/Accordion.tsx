import React from 'react';
import {
  Field,
  TextField,
  withDatasourceCheck,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { IoIosRemoveCircle } from 'react-icons/io';

type AccordionProps = ComponentProps & {
  fields: {
    headlineText: TextField;
    items: AccordionItems[];
  };
};
type AccordionItems = {
  fields: {
    headlineText: TextField;
    body: Field<string>;
  };
};
export const Accordion = (props: AccordionProps): JSX.Element => {
  //const { fields } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="lg:container mb:16">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        <Text field={props?.fields?.headlineText} />
      </h2>
      {props?.fields?.items.map((tech, index) => (
        <div key={index} className="border-b-2 rounded-md border-black py-3 ">
          <button
            className="w-full flex justify-between pr-[10px] text-left font-semibold"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-gray-800 text-[18px] font-bold">
              <Text field={tech?.fields?.headlineText} />
            </span>
            {/* Toggle arrow icon based on active state */}
            <span className="ml-2 transition-transform transform [&>svg]:h-[25px] [&>svg]:w-[25px]">
              {activeIndex === index ? (
                <IoIosRemoveCircle className="h-25 w-25" />
              ) : (
                <IoIosAddCircle className="h-25 w-25" />
              )}
            </span>
          </button>
          <div className={`p-1 ${activeIndex === index ? '' : 'hidden'}`}>
            <ul>
              {/* {tech.items.map((item) => ( */}
              <li className="mb-2">
                <div className="text-gray-600">
                  {' '}
                  <RichText field={tech?.fields?.body} />
                </div>
              </li>
              {/* ))} */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default withDatasourceCheck()<AccordionProps>(Accordion);
