import {
  Image,
  withDatasourceCheck,
  ImageField,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type HeaderProps = ComponentProps & {
  fields: {
    logo: ImageField;
    logoLink: LinkField;
    navigationList: Navigation[];
  };
};
type Navigation = {
  fields: {
    link: LinkField;
    linkText: string;
  };
};
/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Header = ({ fields }: HeaderProps): JSX.Element => {
  return (
    // <header className="site-header">
    //   <div className="site-identity">
    //     <h1 className="logo">
    //       <Link field={fields?.logoLink}>
    //         <Image field={fields?.logo} height="60" width="94"></Image>
    //       </Link>
    //     </h1>
    //   </div>
    //   <nav className="site-navigation">
    //     <ul className="nav">
    //       {fields?.navigationList &&
    //         fields?.navigationList?.map((list, i) => (
    //           <li key={i}>
    //             <Link field={list?.fields?.link as LinkField}></Link>
    //           </li>
    //         ))}
    //     </ul>
    //   </nav>
    // </header>
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link field={fields?.logoLink}>
            <Image field={fields?.logo} height="60" width="94"></Image>
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {fields?.navigationList &&
                fields?.navigationList?.map((list, i) => (
                  <li key={i}>
                    <Link field={list?.fields?.link as LinkField}></Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default withDatasourceCheck()<HeaderProps>(Header);
