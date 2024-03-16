import React from 'react';
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

export type BreadCrumbProps = ComponentProps & {
  fields: NonNullable<unknown>;
};

export const BreadCrumb = (props: BreadCrumbProps): JSX.Element => {
  console.log('props', props);

  const {fields} = props;
  const Pages = fields.path.split('/');

  return (
    <>
    
    {
      Pages.map( (path: any,index:number) => {
        return <>
          {
            (index == Pages.length - 1 ?<span className='text-gray-500'> {path}</span> : <a href={`/${Pages.slice(0,index+1).join('/')}` }>{path}</a>)
            
          }
          
          {
            index < Pages.length - 1 && <span> | </span>
          }
        </>
      })
    }

    </>)
  ;
};

export default withDatasourceCheck()<BreadCrumbProps>(BreadCrumb);
