import { ComponentProps } from 'lib/component-props';
import {
  Field,
  ImageField,
  Text,
  Image,
  LinkField,
  RichText,
  Link,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
type ContentBlockProps = ComponentProps & {
  fields: {
    headlineText: Field<string>;
    body: Field<string>;
    cta1Link: LinkField;
    primaryImage: ImageField;
  };
};
export const ContentBlock = (props: ContentBlockProps): JSX.Element => {
  const { fields } = props;
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="text-left p-4">
          <h2 className="text-3xl font-bold  text-teal-400 pb-2">
            <Text field={fields?.headlineText} />
          </h2>
          <div className="text-gray-700 pb-2">
            <RichText field={fields?.body} />
          </div>
          {/* <a
            className={`inline-block mt-2 px-4 py-2 rounded-lg bg-teal-600 text-black`}
            href="#"
            role="button"
          > */}
          <Link
            field={fields?.cta1Link as LinkField}
            className="bg-primary-blueshade-100 text-white px-6 py-1 hover:bg-primary-blueshade-200  transition duration-300"
          ></Link>
          {/* </a> */}
        </div>
        <div className="p-4 bg-white text-right">
          <Image field={fields?.primaryImage}></Image>
          {/* <JssImage  src={imageUrl} /> */}
        </div>
      </div>
    </>
  );
};
export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
