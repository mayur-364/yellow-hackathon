import React from 'react';
import {
  Image,
  withDatasourceCheck,
  ImageField,
  LinkField,
  Link,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
type FooterProps = ComponentProps & {
  fields: {
    logo: ImageField;
    logoLink: LinkField;
    primaryMenuList: Navigation[];
    copyRightText: RichTextField;
    description: RichTextField;
    socialLinks: SocialLinks[];
    externalLink: Navigation[];
  };
};
type Navigation = {
  fields: {
    link: LinkField;
  };
};
type SocialLinks = {
  fields: {
    link: LinkField;
  };
};
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
export const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col h-[200px] container gap-y-3 justify-center">
        <div className="flex flex-col md:flex-row justify-between ">
          <div>
            <Link field={props?.fields?.logoLink}>
              <Image field={props?.fields?.logo}></Image>
            </Link>
          </div>
          <div>
            <ul>
              {props?.fields?.primaryMenuList?.map((item: Navigation) => (
                <li className="inline md:block md:mx-4 mr-2" key={0}>
                  <Link field={item?.fields?.link as LinkField}></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          {/* <div>
            {props.fields?.socialLinks?.map((item: any, index: any, ary: any) => (
              <>
                <span>
                  <Link field={item?.fields?.link as LinkField}></Link>
                </span>
                {index != ary.length - 1 && <span> | </span>}
              </>
            ))}
          </div> */}
          <div className="flex gap-x-2 mr-1">
            {props.fields?.externalLink?.map((item: any, index: any, ary: any) => (
              <>
                <span>
                  <Link field={item?.fields?.link as LinkField}></Link>
                </span>
                {index != ary.length - 1 && <span> | </span>}
              </>
            ))}
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            {/* <div className="pt-6 mt-12 border-t border-gray-800">
              <div className="text-center sm:flex sm:justify-between sm:text-left">
                <div className="text-sm text-gray-400">
                  <RichText className="contentDescription" field={props?.fields?.description} />
                </div>
                <div className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                  <RichText className="contentDescription" field={props?.fields?.copyRightText} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default withDatasourceCheck()<any>(Footer);
