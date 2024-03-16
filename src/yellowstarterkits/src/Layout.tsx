/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  LayoutServiceData,
  Field,
  HTMLLink,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import config from 'temp/config';
import Scripts from 'src/Scripts';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  const sitecoreContext: any = useSitecoreContext();

  const fontCDN = sitecoreContext?.sitecoreContext?.CDNDetails?.cdnUrl;
  const CDNCss = sitecoreContext?.sitecoreContext?.CDNDetails?.cdnCss;
  const currentLanguage = sitecoreContext?.sitecoreContext?.CDNDetails?.cdnLanguage;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* Adding dynamic fontface css CDN link from sitecore */}
        <link href={fontCDN} rel="stylesheet" />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
        {/* Adding dynamic font css snippet from sitecore */}
        <style>{`
         ${CDNCss}
        `}</style>
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      {/* Appliying currentLanguage for current language to load language specific code */}
      <div className={`${mainClassPageEditing} ${currentLanguage}`}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main className="english">
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
