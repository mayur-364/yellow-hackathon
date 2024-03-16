// Global
import dynamic from 'next/dynamic';
import React from 'react';
//  Icon contents should be stored in the icons subdirectory using the naming scheme 'icon--[name].tsx'

// Please Add Icon name in SOCIAL_ICON_LISTS - "src/difc/src/components/helpers/Constant/Constant.tsx" If any new Social Icon insert.
export type IconTypes = 'hamburger-menu' | 'close' | undefined;

export interface SvgIconProps {
  className?: string;
  icon: IconTypes;
  defs?: JSX.Element;
  fillId?: string;
  size?: Sizes;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  fillId?: string;
  size?: string;
}

type Sizes = 'sm' | 'md' | 'lg' | 'slg' | 'xlg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl' | 'xxxxxl';

const IconSize: Record<Sizes, string> = {
  sm: '10',
  md: '12',
  lg: '16',
  slg: '22',
  xlg: '24',
  xl: '32',
  xxl: '40',
  xxxl: '45',
  xxxxl: '52',
  xxxxxl: '60',
};

const SvgIcon = ({ icon, className, defs, fillId, size = 'md' }: SvgIconProps): JSX.Element => {
  if (!icon) {
    return <></>;
  }
  const IconContent = dynamic(() => import(`./icons/icon--${icon}`));

  const props: IconProps = {
    fillId: fillId,
    size: IconSize[size],
  };

  return (
    <span className={className}>
      <IconContent {...props}>{!!defs && defs}</IconContent>
    </span>
  );
};

export default React.memo(SvgIcon);
