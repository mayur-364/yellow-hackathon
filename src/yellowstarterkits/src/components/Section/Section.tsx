import React from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';

export const Section = (props: any): JSX.Element => {
  const { rendering } = props;
  console.log('props', props);
  const hasPlaceholder = rendering?.placeholders;
  return (
    <section
      data-component="authorable/general/Section"
      data-testid="Section"
    >
      {hasPlaceholder && <Placeholder name="section-content" rendering={rendering} />}
    </section>
  );
};

export default withDatasourceCheck()<any>(Section);
