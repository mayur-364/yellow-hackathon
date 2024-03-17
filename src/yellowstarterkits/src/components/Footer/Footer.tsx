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
        <div className="flex flex-col-reverse md:flex-row justify-end">
          <div className="flex gap-x-2 mr-1">
            <a href="/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/hztldigital/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/30574460/">
              <FaLinkedin />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default withDatasourceCheck()<any>(Footer);
