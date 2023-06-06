import {Link as RemixLink} from '@remix-run/react';
import {FC, ReactNode} from 'react';

interface Props {
  to: string;
  children: ReactNode;
}

export const Link: FC<Props> = ({to, children}) => {
  const isExternalLink = to.startsWith('http');

  if (isExternalLink) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <RemixLink to={to}>{children}</RemixLink>;
};
