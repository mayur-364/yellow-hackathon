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
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-left p-4">
          <h1 className="text-2xl font-bold  text-teal-400">
            <Text field={fields?.headlineText} />
          </h1>
          <div className="text-gray-700">
            <RichText field={fields?.body} />
          </div>
          {/* <a
            className={`inline-block mt-2 px-4 py-2 rounded-lg bg-teal-600 text-black`}
            href="#"
            role="button"
          > */}
          <Link field={fields?.cta1Link as LinkField}></Link>
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
