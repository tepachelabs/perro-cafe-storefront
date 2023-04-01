import {FC} from 'react';

import {
  Number,
  NumberHeadingProps,
  StyledNumberHeading,
} from './number-heading.styles';

export const NumberHeading: FC<NumberHeadingProps> = ({children}) => {
  return (
    <StyledNumberHeading>
      <Number>{children}</Number>
    </StyledNumberHeading>
  );
};
