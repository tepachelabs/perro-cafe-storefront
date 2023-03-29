import {FC} from 'react';
import {
  Number,
  NumberHeadingProps,
  StyledNumberHeading,
} from './NumberHeading.styles';

export const NumberHeading: FC<NumberHeadingProps> = ({children}) => {
  return (
    <StyledNumberHeading>
      <Number>{children}</Number>
    </StyledNumberHeading>
  );
};
