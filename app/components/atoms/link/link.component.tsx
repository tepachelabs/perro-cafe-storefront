import {FC, ReactNode} from 'react';

import {CustomLink} from './link.styles';

export {CustomLink} from './link.styles';

export type LinkRender = FC<{
  to: string;
  children: ReactNode;
  active?: boolean | string;
}>;

interface Props {
  to: string;
  children: ReactNode;
  active?: boolean | string;
  linkRender: LinkRender;
}

export const Link: FC<Props> = ({
  to,
  children,
  active,
  linkRender: LinkRender,
}) => {
  const isExternalLink = to.startsWith('http');
  if (isExternalLink) {
    return (
      <CustomLink href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </CustomLink>
    );
  }

  return (
    <LinkRender to={to} active={active}>
      {children}
    </LinkRender>
  );
};
