import {
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
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link field={fields?.logoLink}>
            {/* <Image field={fields?.logo} height="60" width="94"></Image> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 61">
              <path
                d="M1 2.86h7.24v10.797h10.516V2.878H26V30.86h-7.216V19.432H8.257V30.86H1zm106.993 57.279v-19.21h-6.81v1.684c-.565-.421-1.09-.895-1.688-1.244-3.594-2.096-8.559-1.163-11.334 2.152-2.12 2.531-2.84 5.482-2.357 8.726.775 5.203 5.2 9.154 10.728 8.448 1.839-.235 3.429-.982 4.531-2.563.023-.034.067-.052.158-.118v2.125h6.772zm-10.96-5.281c-2.617-.018-4.377-1.774-4.349-4.338.029-2.576 1.842-4.352 4.425-4.336 2.603.015 4.343 1.845 4.321 4.544-.019 2.437-1.839 4.147-4.397 4.13zm-36.018 5.297h.426c1.977 0 3.955-.009 5.932.008.359.003.46-.092.459-.457-.014-3.854.015-7.709-.025-11.563a13.58 13.58 0 00-.359-2.938c-.519-2.213-1.805-3.8-4.015-4.53-1.221-.403-2.481-.459-3.748-.373-1.988.136-3.631.951-4.845 2.568-.123.164-.251.324-.377.486a7.03 7.03 0 00-.076-.024v-2.409h-6.771c-.007.132-.018.242-.018.353 0 6.164.002 12.329-.007 18.493-.001.326.108.394.408.392 2.002-.012 4.004-.006 6.007-.007.121 0 .243-.011.392-.019v-.476c0-3.202-.012-6.403.011-9.605.004-.633.087-1.28.238-1.895.267-1.1.911-1.919 2.027-2.275.654-.209 1.325-.229 2.003-.118 1.108.181 1.803.838 2.095 1.897a6.28 6.28 0 01.233 1.593c.019 3.452.01 6.905.01 10.358v.541zM8.998 46.565L0 60.129h19.398v-5.65h-8.039l8.959-13.562H1.207v5.648h7.791M112.57 29.023h6.765v31.136h-6.765zM80.399 60.137V46.52h3.797v-5.64h-3.822v-5.74c-.134-.008-.244-.022-.353-.022-2.015-.001-4.03.005-6.045-.008-.313-.002-.401.09-.398.402.014 1.645.006 3.29.006 4.934v.466h-3.473v5.635h3.473v.535c0 4.219.004 8.437-.006 12.656-.001.325.075.427.414.425 2.002-.017 4.004-.008 6.007-.009.111 0 .222-.009.4-.017zM62.76 30.599v-.492c0-2.449-.016-4.898.009-7.346a12.63 12.63 0 01.214-2.204c.299-1.581 1.08-2.823 2.717-3.281 1.497-.419 2.991-.384 4.436.267.053.024.113.034.183.055v-6.451c-3.109-.239-5.786.444-7.486 3.364l-.084-.068v-3.047h-6.74v19.203h6.751zm10.826-19.215h6.725v19.201h-6.725zM76.958.14c-2.068-.013-3.811 1.716-3.824 3.793a3.843 3.843 0 003.779 3.874c2.076.029 3.838-1.715 3.847-3.81.01-2.1-1.71-3.844-3.802-3.857M44.509 51.503c0-4.943-1.936-8.113-5.505-9.875-2.98-1.472-6.116-1.689-9.327-.983-2.159.476-4.075 1.449-5.621 3.062-1.755 1.832-2.585 4.049-2.624 6.577-.061 3.908 1.519 6.956 4.945 8.826 4.126 2.253 8.432 2.312 12.653.283 3.637-1.749 5.419-4.795 5.479-7.89zm-11.544 3.355c-2.613-.004-4.38-1.745-4.379-4.314.002-2.555 1.836-4.369 4.406-4.36 2.544.009 4.369 1.837 4.364 4.369-.005 2.572-1.776 4.308-4.391 4.305zm19.926-32.902c0-4.943-1.936-8.114-5.505-9.875-2.98-1.472-6.116-1.689-9.327-.983-2.159.475-4.075 1.449-5.621 3.062-1.755 1.832-2.585 4.049-2.624 6.577-.061 3.907 1.519 6.955 4.945 8.826 4.126 2.253 8.432 2.311 12.653.283 3.637-1.749 5.419-4.796 5.479-7.89zM41.346 25.31c-2.612-.003-4.38-1.744-4.378-4.313.002-2.555 1.836-4.37 4.406-4.361 2.544.01 4.369 1.837 4.364 4.37-.005 2.572-1.777 4.308-4.392 4.304zM85.223 21.556h34.415v-5.658H85.223z"
                fill="currentColor"
              ></path>
            </svg>
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