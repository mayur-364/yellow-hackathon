import {
  Image,
  withDatasourceCheck,
  ImageField,
  LinkField,
  Link,
  Field,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type BannerProps = ComponentProps & {
  fields: {
    headlineText: Field<string>;
    body: Field<string>;
    cta1Link: LinkField;
    primaryImage: ImageField;
  };
};
/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Banner = ({ fields }: BannerProps): JSX.Element => {
  return (
    <div className="banner bg-cover bg-center">
      {/* Render each banner */}
      {/* <div
        className="flex flex-col md:flex-row items-start md:items-start h-full lg:p-16 p-5"
        // style={{ backgroundImage: `url(${fields.BannerImage.value.src})` }}
      > */}
      <Image field={fields?.primaryImage}></Image>
      {/* <img className="md:w-1/2 md:order-2" src={banner.BannerImage.value.src} alt="sgsd" /> */}
      <div className=" md:order-1 md:pl-10 text-black ">
        <div className="w-full">
          <h1 className="lg:text-6xl text-3xl font-bold mb-4">
            <RichText field={fields?.headlineText} />
          </h1>
          <p className="lg:text-lg mb-2 lg:w-7/12">
            <RichText field={fields?.body} />
          </p>
          {/* <a
              href={banner.BannerCTA.link}
              className="bg-blue-500 text-white px-6 py-1 hover:bg-blue-600 transition duration-300"
            > */}
          <Link field={fields?.cta1Link as LinkField}></Link>
          {/* </a> */}
        </div>
      </div>
    </div>
    // </div>
  );
};
export default withDatasourceCheck()<BannerProps>(Banner);
